"use client";

import React from "react";
import { CHATBOT } from "../content/contact";

declare global {
  interface Window {
    OncareChatbot?: { open: () => void; close: () => void; toggle: () => void };
  }
}

/** 병원 상담 연결(서울온케어의원 입원·진료 문의 — 그룹웨어 챗봇) 열기. 스크립트가 아직 없거나 실패했으면 새 탭으로 연다. */
export function openChatbot() {
  const bot = typeof window !== "undefined" ? window.OncareChatbot : undefined;
  if (bot && typeof bot.open === "function") {
    try {
      bot.open();
      return;
    } catch {
      /* fall through */
    }
  }
  window.open(CHATBOT.fallbackUrl, "_blank", "noopener");
}

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type"> & { onOpen?: () => void };

export function ChatbotButton({ children, onOpen, ...rest }: Props) {
  return (
    <button
      type="button"
      data-chatbot="open"
      aria-haspopup="dialog"
      {...rest}
      onClick={() => {
        onOpen?.();
        openChatbot();
      }}
    >
      {children}
    </button>
  );
}

const CHATBOT_ORIGIN = new URL(CHATBOT.embedSrc).origin;

/** 상담 창 미리 만들기 — embed 는 첫 클릭 때에야 iframe 을 만들고 상담 페이지(폰트·아바타 포함 ~0.8s)를 받는다.
 *  페이지가 한가해지면 open()+close() 를 같은 프레임에 불러 iframe 만 미리 만들어 둔다(화면 깜빡임 없음).
 *  상담 페이지는 로드 시 API 호출이 없어 세션·로그가 생기지 않는다. 데이터 절약 모드면 건너뛴다. */
function prewarmChatbot() {
  let tries = 0;
  let timer = 0;
  const run = () => {
    const bot = window.OncareChatbot;
    if (document.getElementById("oncare-embed-frame")) return;
    if (!bot?.open || !bot.close) {
      if (++tries < 10) timer = window.setTimeout(run, 1000);
      return;
    }
    bot.open();
    bot.close();
  };
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (saveData) return () => {};
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
  const start = () => { timer = window.setTimeout(() => idle(run), 1500); };
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
  return () => {
    window.removeEventListener("load", start);
    window.clearTimeout(timer);
  };
}

/** 상담 창(iframe) 안의 ✕ 는 부모에게 {type:"closeChatbot"} 을 postMessage 할 뿐이고 embed 스크립트는 그걸 듣지 않는다
 *  → 여기서 받아 모달을 닫는다(상담 창 출처만 허용). 레이아웃에 한 번만 렌더. */
export function ChatbotCloseBridge() {
  React.useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== CHATBOT_ORIGIN || (e.data as { type?: string } | null)?.type !== "closeChatbot") return;
      window.OncareChatbot?.close?.();
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  React.useEffect(() => prewarmChatbot(), []);
  return null;
}
