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
  return null;
}
