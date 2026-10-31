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
