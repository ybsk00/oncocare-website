"use client";

import React from "react";
import Link from "next/link";
import { MAGAZINE } from "../content/magazine";
import "./landing.css";

/* 실제 스토어 링크 (2026-07-06 양대 스토어 출시) */
const PLAY_URL = "https://play.google.com/store/apps/details?id=ai.oncocare.app";
const APPSTORE_URL =
  "https://apps.apple.com/kr/app/%EC%98%A8%EC%BD%94%EC%BC%80%EC%96%B4-ai/id6780368713";
const APK_HREF = "/api/download/android";

/* ──────────────────────────────────────────────────────────
   모바일 OS 감지 — 모바일에서는 해당 스토어 버튼만 노출
   ────────────────────────────────────────────────────────── */
type MobileOS = "android" | "ios" | "other";
const useMobileOS = (): MobileOS => {
  const [os, setOs] = React.useState<MobileOS>("other");
  React.useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/android/i.test(ua)) setOs("android");
    else if (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    )
      setOs("ios");
  }, []);
  return os;
};

/* ──────────────────────────────────────────────────────────
   브랜드 리프 마크 + 스토어 배지 (전부 SVG)
   ────────────────────────────────────────────────────────── */
const LeafMark: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path
      d="M40 8C22 9 10.5 19.5 8.5 39.5 28 41 38.5 28 40 8z"
      fill="var(--onco-sage-wash, #E4ECE7)"
      stroke="var(--onco-sage-dark, #3F5D52)"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 37.5C17 27 25 18 37 10.5"
      stroke="var(--onco-sage-dark, #3F5D52)"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

const PlayGlyph: React.FC<{ size?: number }> = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3.6 2.4 13.6 12 3.6 21.6c-.37-.25-.6-.7-.6-1.26V3.66c0-.56.23-1.01.6-1.26z"
      fill="#00C4FF"
    />
    <path d="M17 8.8 5.2 2.15c-.55-.3-1.16-.2-1.6.25L13.6 12 17 8.8z" fill="#00E676"/>
    <path d="M3.6 21.6c.44.45 1.05.55 1.6.25L17 15.2 13.6 12 3.6 21.6z" fill="#FFC400"/>
    <path
      d="m20.9 10.7-3.9-2-3.4 3.3 3.4 3.2 3.9-2c1.3-.66 1.3-1.84 0-2.5z"
      fill="#FF3D57"
    />
  </svg>
);

const AppleGlyph: React.FC<{ size?: number; color?: string }> = ({ size = 26, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.03-3.77-1-1.94.03-3.73 1.13-4.72 2.86-2.02 3.5-.52 8.68 1.44 11.52.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 2-.93 3.75-.93s2.25.93 3.78.9c1.56-.03 2.55-1.41 3.5-2.8.94-1.36 1.35-2.6 1.4-2.71 0-.02-2.87-1.1-2.9-5.17zM14.6 4.5c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.24-1.22 3.55 1.29.1 2.61-.65 3.41-1.63z"/>
  </svg>
);

/* 스토어 버튼 세트: 데스크톱=둘 다, 모바일=감지된 OS만 */
const StoreButtons: React.FC<{ className?: string }> = ({ className = "" }) => {
  const os = useMobileOS();
  const showAndroid = os !== "ios";
  const showIos = os !== "android";
  return (
    <div className={`hero-actions ${className}`}>
      {showAndroid && (
        <a
          className="btn btn-storebadge btn-store"
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Play에서 온코케어 AI 다운로드"
        >
          <div className="row">
            <span className="store-glyph">
              <PlayGlyph />
            </span>
            <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span className="small">Google Play에서</span>
              <span className="big">다운로드</span>
            </span>
          </div>
        </a>
      )}
      {showIos && (
        <a
          className="btn btn-storebadge btn-store"
          href={APPSTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="App Store에서 온코케어 AI 다운로드"
        >
          <div className="row">
            <span className="store-glyph">
              <AppleGlyph />
            </span>
            <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span className="small">App Store에서</span>
              <span className="big">다운로드</span>
            </span>
          </div>
        </a>
      )}
    </div>
  );
};

/* ──────────────────────────────────────────────────────────
   아이콘 (가는 선, stroke만 — 의료 슬롭 회피)
   ────────────────────────────────────────────────────────── */
type IconName =
  | "check"
  | "pill"
  | "leaf"
  | "heart"
  | "chevron"
  | "bell"
  | "sparkle"
  | "family"
  | "hospital"
  | "book"
  | "shield"
  | "stars"
  | "user"
  | "menu"
  | "close"
  | "arrow-right";

const Icon: React.FC<{ name: IconName; size?: number; stroke?: number; color?: string }> = ({
  name,
  size = 22,
  stroke = 1.6,
  color = "currentColor",
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "check":
      return (
        <svg {...props}>
          <path d="M5 13l4 4L19 7" />
        </svg>
      );
    case "pill":
      return (
        <svg {...props}>
          <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)" />
          <path d="M9.4 6.6l4.2 4.2" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M11 20A7 7 0 014 13C4 8 8 4 14 3c2 0 5 0 6 1 1 5-1 14-9 16zM11 14c2-3 5-4 8-4" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 10-7.8 7.8l1 1.1L12 22l7.8-8.5 1-1.1a5.5 5.5 0 000-7.8z" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...props}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8M10 21a2 2 0 004 0" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
          <path d="M19 4l.7 2 2 .7-2 .7L19 9.4l-.7-2-2-.7 2-.7z" />
        </svg>
      );
    case "family":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 19a6 6 0 0112 0M15 19a4 4 0 016-3.5" />
        </svg>
      );
    case "hospital":
      return (
        <svg {...props}>
          <path d="M3 21V8l9-5 9 5v13M9 21v-7h6v7M12 11v3" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <path d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4zM20 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "stars":
      return (
        <svg {...props}>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
        </svg>
      );
    case "user":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0116 0" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    default:
      return null;
  }
};

/* ──────────────────────────────────────────────────────────
   아트 아이콘 (카드용 듀오톤 SVG — 이모지 대체)
   color = 메인 스트로크, wash = 면 채움
   ────────────────────────────────────────────────────────── */
type ArtName =
  | "trial"
  | "report"
  | "mind"
  | "together"
  | "nutrition"
  | "snap"
  | "team"
  | "siren"
  | "memory"
  | "sources"
  | "chat"
  | "guard"
  | "scale";

const Art: React.FC<{ name: ArtName; size?: number; color?: string; wash?: string }> = ({
  name,
  size = 30,
  color = "currentColor",
  wash = "color-mix(in srgb, currentColor 16%, transparent)",
}) => {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none" as const,
    "aria-hidden": true as const,
  };
  const s = {
    stroke: color,
    strokeWidth: 2.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "trial": // 임상시험 — 플라스크 + 스파클
      return (
        <svg {...p}>
          <path d="M19.5 27.5h9L35 38c1.5 2.7-.4 6-3.4 6H16.4c-3 0-4.9-3.3-3.4-6l6.5-10.5z" fill={wash} />
          <path {...s} d="M19 5h10M21.5 5v11l-9 15.5c-1.9 3.2.4 7.5 4.2 7.5h14.6c3.8 0 6.1-4.3 4.2-7.5l-9-15.5V5" />
          <circle cx="23" cy="33" r="1.9" fill={color} />
          <circle cx="28.5" cy="38" r="1.4" fill={color} />
          <path {...s} strokeWidth={2.2} d="M39 8l1 2.7 2.7 1-2.7 1-1 2.7-1-2.7-2.7-1 2.7-1z" />
        </svg>
      );
    case "report": // 검사지 해석 — 문서 + 돋보기
      return (
        <svg {...p}>
          <rect x="11" y="7" width="24" height="34" rx="4.5" fill={wash} />
          <rect x="11" y="7" width="24" height="34" rx="4.5" {...s} />
          <path {...s} d="M17.5 16h11M17.5 22.5h11M17.5 29h5.5" />
          <circle cx="31.5" cy="31.5" r="6" fill="var(--onco-surface, #fff)" {...s} />
          <path {...s} d="M36 36l5.5 5.5" />
          <path {...s} strokeWidth={2.2} d="M29 31.5l1.8 1.8 3-3.4" />
        </svg>
      );
    case "mind": // 심리 지지 — 말풍선 속 하트
      return (
        <svg {...p}>
          <path
            d="M24 7C14.6 7 7 13.4 7 21.3c0 4.6 2.5 8.6 6.4 11.2V41l7-4.1c1.2.2 2.4.3 3.6.3 9.4 0 17-6.4 17-14S33.4 7 24 7z"
            fill={wash}
          />
          <path
            {...s}
            d="M24 7C14.6 7 7 13.4 7 21.3c0 4.6 2.5 8.6 6.4 11.2V41l7-4.1c1.2.2 2.4.3 3.6.3 9.4 0 17-6.4 17-14S33.4 7 24 7z"
          />
          <path
            d="M24 27.8l-5.4-5.3c-1.5-1.5-1.5-3.9 0-5.3 1.5-1.5 3.8-1.5 5.2 0l.2.2.2-.2c1.4-1.5 3.7-1.5 5.2 0 1.5 1.4 1.5 3.8 0 5.3L24 27.8z"
            fill={color}
          />
        </svg>
      );
    case "together": // 환자+보호자 동반
      return (
        <svg {...p}>
          <circle cx="30" cy="26" r="15" fill={wash} />
          <circle cx="17.5" cy="15.5" r="5.5" {...s} />
          <circle cx="31.5" cy="18" r="4.5" {...s} />
          <path {...s} d="M7 39a10.5 10.5 0 0 1 21 0M28 39c0-4.7 3.6-8.5 8.5-8.5 1.7 0 3.3.5 4.5 1.3" />
          <path
            d="M37 6.2c1-.9 2.6-.9 3.6 0 1 1 1 2.5 0 3.4L37 13l-3.6-3.4c-1-.9-1-2.4 0-3.4 1-.9 2.6-.9 3.6 0z"
            fill={color}
          />
        </svg>
      );
    case "nutrition": // FSMP 영양 — 보울 + 잎
      return (
        <svg {...p}>
          <path d="M7 25h34c0 9-7 15.5-17 15.5S7 34 7 25z" fill={wash} />
          <path {...s} d="M7 25h34c0 9-7 15.5-17 15.5S7 34 7 25zM18 44h12" />
          <path {...s} d="M31 6c-7 .5-11.5 4.5-12.5 12 7.5.5 11.8-4 12.5-12z" fill={wash} />
          <path {...s} d="M15 20c3-5.5 7-9.5 13-12" />
        </svg>
      );
    case "snap": // 사진 한 장 멀티모달 — 카메라 + 스파클
      return (
        <svg {...p}>
          <rect x="7" y="14" width="32" height="25" rx="5.5" fill={wash} />
          <rect x="7" y="14" width="32" height="25" rx="5.5" {...s} />
          <path {...s} d="M17 14l2.6-4.5h7.8L30 14" />
          <circle cx="23" cy="26.5" r="6.5" {...s} fill="var(--onco-surface, #fff)" />
          <circle cx="23" cy="26.5" r="2.4" fill={color} />
          <path {...s} strokeWidth={2.2} d="M40 5l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z" />
        </svg>
      );
    case "team": // 9명 AI 전문팀 협진 — 네트워크
      return (
        <svg {...p}>
          <circle cx="24" cy="24" r="9.5" fill={wash} />
          <path {...s} d="M24 19v-7M28.5 21.5l8-5M28.7 26.7l6.8 6.3M19.3 26.7l-6.8 6.3M19.5 21.5l-8-5" />
          <circle cx="24" cy="24" r="5" {...s} fill="var(--onco-surface, #fff)" />
          <circle cx="24" cy="9" r="3.4" {...s} />
          <circle cx="36" cy="14.5" r="3.4" {...s} />
          <circle cx="33.5" cy="35.5" r="3.4" {...s} />
          <circle cx="14.5" cy="35.5" r="3.4" {...s} />
          <circle cx="12" cy="14.5" r="3.4" {...s} />
        </svg>
      );
    case "siren": // 응급 안전망 — 방패 + 맥박
      return (
        <svg {...p}>
          <path d="M24 5l15 5.5V21c0 9.6-7 16.6-15 19-8-2.4-15-9.4-15-19V10.5L24 5z" fill={wash} />
          <path {...s} d="M24 5l15 5.5V21c0 9.6-7 16.6-15 19-8-2.4-15-9.4-15-19V10.5L24 5z" />
          <path {...s} strokeWidth={2.4} d="M15 24h4.5l2.5-5.5 4 11 2.5-5.5H33" />
        </svg>
      );
    case "memory": // 진단 순간부터 기억 — 시계 + 하트
      return (
        <svg {...p}>
          <circle cx="21.5" cy="26.5" r="13.5" fill={wash} />
          <circle cx="21.5" cy="26.5" r="13.5" {...s} />
          <path {...s} d="M21.5 19.5v7l5 3.5" />
          <path
            d="M38.2 6.6c1.2-1.1 3.1-1.1 4.3 0 1.2 1.2 1.2 3 0 4.1L38.2 15l-4.3-4.3c-1.2-1.1-1.2-2.9 0-4.1 1.2-1.1 3.1-1.1 4.3 0z"
            fill={color}
          />
        </svg>
      );
    case "sources": // 출처·근거 — 펼친 책 + 체크
      return (
        <svg {...p}>
          <path d="M24 12.5C20 9.5 15 8.3 8 8.3V36c7 0 12 1.2 16 4.2V12.5z" fill={wash} />
          <path
            {...s}
            d="M24 12.5C20 9.5 15 8.3 8 8.3V36c7 0 12 1.2 16 4.2 4-3 9-4.2 16-4.2V8.3c-7 0-12 1.2-16 4.2v27.7"
          />
          <path {...s} strokeWidth={2.4} d="M29.5 20l3.2 3.2 6-7" />
        </svg>
      );
    case "chat": // 케어 상담 — 이중 말풍선
      return (
        <svg {...p}>
          <path d="M6 11.5A4.5 4.5 0 0 1 10.5 7h17A4.5 4.5 0 0 1 32 11.5v9a4.5 4.5 0 0 1-4.5 4.5H15l-9 6.5v-20z" fill={wash} />
          <path {...s} d="M6 11.5A4.5 4.5 0 0 1 10.5 7h17A4.5 4.5 0 0 1 32 11.5v9a4.5 4.5 0 0 1-4.5 4.5H15l-9 6.5v-20z" />
          <circle cx="14" cy="16" r="1.7" fill={color} />
          <circle cx="19.5" cy="16" r="1.7" fill={color} />
          <circle cx="25" cy="16" r="1.7" fill={color} />
          <path {...s} d="M36 20.5h2a4 4 0 0 1 4 4V41l-7-5h-8a4 4 0 0 1-4-4v-1" />
        </svg>
      );
    case "guard": // AI가 답하고 사람이 지킵니다 — 방패 + 하트
      return (
        <svg {...p}>
          <path d="M24 5l15 5.5V21c0 9.6-7 16.6-15 19-8-2.4-15-9.4-15-19V10.5L24 5z" fill={wash} />
          <path {...s} d="M24 5l15 5.5V21c0 9.6-7 16.6-15 19-8-2.4-15-9.4-15-19V10.5L24 5z" />
          <path
            d="M24 29.5l-6.2-6c-1.7-1.7-1.7-4.4 0-6 1.7-1.7 4.4-1.7 6 0l.2.2.2-.2c1.7-1.7 4.4-1.7 6 0 1.7 1.6 1.7 4.3 0 6l-6.2 6z"
            fill={color}
          />
        </svg>
      );
    case "scale": // 컴플라이언스 — 저울
      return (
        <svg {...p}>
          <path {...s} d="M24 8v32M14 42h20M9 14h30" />
          <path {...s} d="M9 14l-5.5 11h11L9 14zM39 14l-5.5 11h11L39 14z" fill={wash} />
          <circle cx="24" cy="8" r="2.4" fill={color} />
        </svg>
      );
    default:
      return null;
  }
};

/* ──────────────────────────────────────────────────────────
   헤더 + 모바일 메뉴
   ────────────────────────────────────────────────────────── */
/* 상단 내비게이션 (헤더·모바일 메뉴 공유) */
const NAV: { href: string; label: string }[] = [
  { href: "#top", label: "홈" },
  { href: "#how", label: "서비스 이용방법" },
  { href: "#download", label: "다운로드 안내" },
  { href: "#magazine", label: "매거진" },
  { href: "#partner", label: "제휴문의" },
  { href: "#location", label: "오시는 길" },
];

const Header: React.FC<{ onMenu: () => void }> = ({ onMenu }) => (
  <header className="site-header" id="site-header">
    <div className="wrap header-inner">
      <a className="brand" href="#top">
        <span className="leaf">
          <LeafMark size={22} />
        </span>
        온코케어 AI
      </a>
      <nav className="nav">
        {NAV.map((n) => (
          <a key={n.href} href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>
      <div className="header-cta">
        {/* 로그인 링크 숨김 (2026-07-12) — 필요 시 복원
        <a
          href="https://oncocare-web-okpo4egzcq-du.a.run.app/login" target="_blank" rel="noopener"
          className="nav-login"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--onco-ink-soft)",
            whiteSpace: "nowrap",
          }}
        >
          로그인
        </a>
        */}
        <a className="btn btn-primary btn-sm menu-cta" href="#download">
          앱 다운로드
        </a>
        <button className="menu-btn" aria-label="메뉴 열기" onClick={onMenu}>
          <Icon name="menu" size={24} />
        </button>
      </div>
    </div>
  </header>
);

const MobileMenu: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
  <div className={`mobile-menu ${open ? "open" : ""}`} onClick={onClose}>
    <div className="sheet" onClick={(e) => e.stopPropagation()}>
      <div className="mm-head">
        <span className="brand" style={{ fontSize: 17 }}>
          <span className="leaf">
            <LeafMark size={20} />
          </span>
          온코케어 AI
        </span>
        <button aria-label="닫기" onClick={onClose}>
          <Icon name="close" size={24} />
        </button>
      </div>
      {NAV.map((n) => (
        <a key={n.href} href={n.href} onClick={onClose}>
          {n.label}
        </a>
      ))}
      {/* 로그인 링크 숨김 (2026-07-12) — 필요 시 복원
      <a href="https://oncocare-web-okpo4egzcq-du.a.run.app/login" target="_blank" rel="noopener" onClick={onClose}>
        로그인
      </a>
      */}
      <a className="btn btn-primary" href="#download" onClick={onClose} style={{ marginTop: 18 }}>
        앱 다운로드
      </a>
    </div>
  </div>
);

/* ──────────────────────────────────────────────────────────
   히어로 (스플릿) — 나노바나나 생성 이미지 + 플로팅 SVG 카드
   ────────────────────────────────────────────────────────── */
const Hero: React.FC = () => {
  return (
    <section className="hero section-pad" id="hero">
      <div className="hero-bg">
        <div
          className="blob"
          style={{
            width: 520,
            height: 520,
            top: -120,
            right: -120,
            background: "var(--onco-accent-wash)",
          }}
        />
        <div
          className="blob"
          style={{
            width: 360,
            height: 360,
            bottom: -100,
            left: -120,
            background: "var(--onco-warm-wash)",
            opacity: 0.4,
          }}
        />
      </div>
      <div className="wrap hero-split">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            <span className="dot"></span>정보·교육 · 영양관리 · 주치의 연결
          </div>
          <h1 className="h-hero reveal" data-d="1" style={{ marginTop: 22 }}>
            암 치료의 모든 순간,
            <br />
            곁에서 함께하는
            <br />
            <span style={{ color: "var(--onco-accent-dark)" }}>AI 케어 동반자</span>
          </h1>
          <p className="lead reveal" data-d="2">
            9명의 AI 전문팀이 증상·영양·심리·정보를 24시간 함께 살피고, 필요할 때 의료진과 연결해
            드려요. 진단·치료는 늘 담당 주치의와 함께.
          </p>
          <div className="reveal" data-d="2">
            <StoreButtons />
          </div>
          <div className="hero-trust reveal" data-d="3">
            <div className="avatars">
              <span>🧭</span>
              <span>🩺</span>
              <span>🌿</span>
              <span>💗</span>
              <span>🏥</span>
            </div>
            <span>9명의 AI 전문팀이 24시간 곁에서 함께 살펴요</span>
          </div>
        </div>
        <div className="reveal hero-visual" data-d="2">
          <div className="hero-photo-wrap">
            <picture>
              <source srcSet="/landing/hero-family.webp" type="image/webp" />
              <img
                className="hero-photo"
                src="/landing/hero-family.png"
                alt="햇살이 드는 창가에서 보호자가 환자의 손을 따뜻하게 감싸 잡은 모습"
                width={928}
                height={1152}
                loading="eager"
              />
            </picture>
            <div className="hero-photo-veil" />
            <div className="float-card floaty fc-care">
              <span className="fc-ico" style={{ background: "var(--onco-sage-wash)" }}>
                <Art name="team" size={20} color="var(--onco-sage-dark)" />
              </span>
              <span>
                AI 케어팀이
                <br />
                오늘을 살펴봤어요
              </span>
            </div>
            <div className="agent-chip floaty slow chip-symptom">
              <span className="ac-dot" style={{ background: "#F4E2D6" }}>
                <Art name="siren" size={15} color="#C97D60" />
              </span>
              증상 케어
            </div>
            <div className="agent-chip floaty chip-nutrition">
              <span className="ac-dot" style={{ background: "#E4ECE7" }}>
                <Art name="nutrition" size={15} color="var(--onco-sage-dark)" />
              </span>
              영양 처방
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────
   포지셔닝 밴드
   ────────────────────────────────────────────────────────── */
const PositionBand: React.FC = () => (
  <section className="position-band">
    <div className="wrap">
      <div className="position-inner reveal">
        <div className="pb-ic">
          <Art name="sources" size={28} color="var(--onco-sage-dark)" />
        </div>
        <p>
          진단·처방·치료가 아닌, <b>검증된 의학 지식(지식레이어)의 출처·근거</b>를 바탕으로 —
          암환자와 보호자를 위한 <b>단 하나의</b> AI 케어 동반자.
        </p>
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────────────────
   핵심 가치 → 근거 리포트 (스크롤 시 숫자 카운트업 애니메이션)
   ────────────────────────────────────────────────────────── */
const useInView = (ref: React.RefObject<HTMLElement | null>) => {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return inView;
};

const CountUp: React.FC<{ end: number; run: boolean; duration?: number }> = ({
  end,
  run,
  duration = 1500,
}) => {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVal(end);
      return;
    }
    let raf = 0;
    let startTs = 0;
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, end, duration]);
  return <>{val.toLocaleString("ko-KR")}</>;
};

const StatsReport: React.FC = () => {
  const gridRef = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(gridRef);
  const stats: { end: number; suffix?: string; label: string; c: string }[] = [
    { end: 9, label: "AI 전문 에이전트가 협진", c: "#5C7A99" },
    { end: 27768, label: "검증된 의학 지식 근거", c: "#5C8073" },
    { end: 1839, label: "국내 임상시험 매칭", c: "#C97D60" },
    { end: 24, suffix: "시간", label: "곁을 지키는 케어", c: "#7B9B5F" },
  ];
  return (
    <section className="stats-report section-pad" style={{ paddingTop: "clamp(40px,6vw,80px)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">근거로 돌보는 케어</div>
          <h2 className="h-sec">
            추측이 아닌, 숫자와 근거로
            <br />
            곁을 지킵니다
          </h2>
          <p className="lead" style={{ marginTop: 16 }}>
            진단 순간부터 검사·약·식사·대화를 안전하게 기억하고, 검증된 의학 지식의 출처·근거 위에서
            24시간 함께 살펴요.
          </p>
        </div>
        <div className="stats-grid reveal" ref={gridRef}>
          {stats.map((s, i) => (
            <div className="stat-tile" key={i} style={{ ["--sc"]: s.c } as React.CSSProperties}>
              <div className="stat-num">
                <CountUp end={s.end} run={inView} />
                {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="stats-note reveal">
          진단 순간부터 기억 · 환자와 보호자 함께 · PubMed·식약처·가이드라인 출처 표기
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────
   기능 쇼케이스 — 실제 앱 화면 캡처 + 상세 설명 (교차 레이아웃)
   ────────────────────────────────────────────────────────── */
const SHOWCASE: {
  img: string;
  alt: string;
  tag: string;
  c: string;
  t: string;
  d: string;
  points: string[];
}[] = [
  {
    img: "chat",
    alt: "케어챗 화면 — 증상·영양·심리·병원·가족·협진 AI 배지와 근거·출처가 붙은 답변",
    tag: "케어챗 · 9인 AI 협진",
    c: "#5C7A99",
    t: "9명의 AI 전문팀이 한 화면에서 함께 봅니다",
    d: "증상·영양·심리·병원·가족·협진 — 분야별 AI 에이전트가 협진하듯 답합니다. 모든 답변에는 근거의 강도와 출처가 함께 붙어, 추측이 아닌 근거로 안내해요.",
    points: [
      "복용 중인 보충제 × 검사 수치 상호작용을 자동 점검",
      "PubMed·LiverTox(NIH) 등 출처와 근거 강도를 함께 표기",
      "애매하거나 위급하면 사람(의료진)에게 연결",
    ],
  },
  {
    img: "records",
    alt: "검사결과 해석 화면 — 검사지·판독지 올리기와 혈액·소변·영상·수술 결과 선택",
    tag: "검사·판독지 해석",
    c: "#5C8073",
    t: "어려운 검사지, 사진 한 장이면 쉬운 말로",
    d: "혈액·소변·영상·수술·병리 결과지를 촬영하거나 PDF로 올리면 어려운 용어를 쉬운 한국어로 풀어드려요. 진단이 아닌 ‘이해 보조’입니다.",
    points: [
      "촬영·갤러리·PDF 업로드 → 근거 기반 분석",
      "약봉투·처방전을 등록하면 부작용 시 도움되는 약 안내",
      "지난 검사·복약 기록이 한곳에 모여요",
    ],
  },
  {
    img: "checkin",
    alt: "일일 체크인 화면 — 시간대별 수면·식사·통증·항암 부작용 케어 알림",
    tag: "매일 증상 체크인",
    c: "#C97D60",
    t: "정해진 시간에, 카톡 메시지처럼 하나씩",
    d: "수면·식사·통증·항암 부작용을 치료 단계에 맞춰 여쭤봐요. 알림을 탭하면 그 질문만 답하면 되고, 앱이 꺼져 있어도 알림이 옵니다.",
    points: [
      "표준 증상 척도(PRO-CTCAE) 기반으로 기록·해석",
      "치료 단계(항암 중·치료 중)에 맞춘 질문",
      "위험 신호는 조기에 케어팀·응급으로 연결",
    ],
  },
  {
    img: "nutrition-v2",
    alt: "맞춤 영양 화면 — 정보·교육 목적 면책 고지와 식사 분석·영양 보강 추천",
    tag: "맞춤 영양 관리",
    c: "#7B9B5F",
    t: "못 드시고 마르는 순간을 함께 관리",
    d: "식사를 기록하면 부족할 수 있는 영양을 찾아 맞는 보강을 제안해요. 암환자의 식사관리(FSMP)를 영양사 감수 기반으로 돕습니다.",
    points: [
      "1주일 식사 패턴을 분석해 부족 영양소 파악",
      "영양사 감수 기반 환자용 균형영양식·영양보충 제안",
      "질병 치료·예방이 아닌 영양관리·영양보충 용도",
    ],
  },
  {
    img: "home",
    alt: "홈 화면 — 오늘 컨디션(날씨), 검사결과지 해석, 오늘의 영양·복약",
    tag: "한눈에 보는 케어 홈",
    c: "#5C8073",
    t: "오늘 챙길 것을 홈 화면 하나에",
    d: "오늘 컨디션·검사 해석·영양·복약을 홈 하나에 모았어요. 컨디션은 날씨(맑음~폭풍)로 부드럽게 표현해 매일의 상태를 편하게 남깁니다.",
    points: [
      "오늘 컨디션을 날씨 메타포로 한눈에",
      "검사결과지 해석·영양·복약 바로가기",
      "진단 순간부터 쌓인 기억으로 24시간 케어",
    ],
  },
];

const FeatureShowcase: React.FC = () => (
  <div className="showcase">
    {SHOWCASE.map((s, i) => (
      <div className="showcase-row reveal" key={i}>
        <div className="sc-phone">
          <img
            src={`/landing/app/${s.img}.webp`}
            alt={s.alt}
            loading="lazy"
            width={640}
            height={1137}
          />
        </div>
        <div className="showcase-copy">
          <span
            className="sc-tag"
            style={{
              color: s.c,
              background: `color-mix(in srgb, ${s.c} 12%, var(--onco-surface))`,
            }}
          >
            {s.tag}
          </span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
          <ul className="sc-points">
            {s.points.map((p, j) => (
              <li key={j}>
                <Icon name="check" size={18} color={s.c} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

/* ──────────────────────────────────────────────────────────
   기능 카드 8 (처음 3개 "독보적")
   ────────────────────────────────────────────────────────── */
const FeatureGrid: React.FC = () => {
  const feats: { ic: ArtName; t: string; c: string; tag: string; d: string }[] = [
    {
      ic: "trial",
      t: "국내·해외 임상시험 매칭",
      c: "#5C7A99",
      tag: "독보적",
      d: "내 암종·상태로 국내(CRIS·식약처)와 해외(ClinicalTrials.gov) 임상시험을 근거와 함께 찾아 쉬운 말로 안내해요. (참여 결정은 주치의와 상의)",
    },
    {
      ic: "report",
      t: "검사·판독지 쉬운 해석",
      c: "#5C8073",
      tag: "독보적",
      d: "CT·MRI·병리·수술·혈액 결과지를 사진 한 장으로 올리면 어려운 용어를 쉬운 한국어 교육형으로 풀어드려요. 진단이 아닌 이해 보조.",
    },
    {
      ic: "mind",
      t: "심리 지지 상담",
      c: "#B57FA8",
      tag: "독보적",
      d: "암환자 심리종양학 지식레이어를 근거로 마음을 들어주는 대화형 상담. 위기 신호는 즉시 전문기관·안전자원으로 연결.",
    },
    {
      ic: "together",
      t: "환자+보호자 동반 케어",
      c: "#C97D60",
      tag: "동반 케어",
      d: "보호자가 함께 가입해 같은 케어 컨텍스트를 공유. 함께 기록하고 함께 돌봐요.",
    },
    {
      ic: "nutrition",
      t: "FSMP 영양 관리",
      c: "#7B9B5F",
      tag: "영양관리",
      d: "못 드시고 마르는 암환자의 식사관리를 돕습니다. 영양사 감수 기반 환자용 균형영양식·영양보충 제안. (질병 치료·예방 목적 아님)",
    },
    {
      ic: "snap",
      t: "사진 한 장 멀티모달",
      c: "#5C544A",
      tag: "개인정보 보호",
      d: "검사지·약봉투·영양제 라벨·식사 사진을 찍으면 바로 정리 카드로. 원본 사진은 분석 후 즉시 삭제해 개인정보를 지켜요.",
    },
    {
      ic: "team",
      t: "9명의 AI 전문팀 협진",
      c: "#5C7A99",
      tag: "협진·연결",
      d: "증상·영양·심리·병원·정보를 분야별 AI 에이전트가 협진하듯 함께 보고, 애매하거나 위급하면 사람(의료진)에게 연결해요.",
    },
    {
      ic: "siren",
      t: "응급·레드플래그 안전망",
      c: "#C45050",
      tag: "안전망",
      d: "발열·호흡곤란 등 위험 신호를 감지하면 119 우선 안내와 실시간 가용 응급실 정보를 연결해요. 응급실 정보는 보조 수단.",
    },
  ];
  return (
    <section className="section-pad" id="features" style={{ background: "var(--onco-bg-alt)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">핵심 기능</div>
          <h2 className="h-sec">
            치료의 곁을 채우는
            <br />
            온코케어 AI의 핵심 기능
          </h2>
          <p className="lead" style={{ marginTop: 18 }}>
            실제 앱 화면으로 살펴보세요. 모든 안내는 정보·교육과 영양관리를 돕기 위한 것이며,
            진단·치료 결정은 담당 의료진과 상의해요.
          </p>
        </div>

        <FeatureShowcase />

        <div className="feature-subhead reveal">
          <h3>여덟 가지 돌봄, 한눈에</h3>
          <p>화면 밖에서도 이런 순간까지 함께 챙깁니다.</p>
        </div>
        <div className="feature-grid">
          {feats.map((f, i) => (
            <div
              className="feature-card reveal"
              data-d={(i % 3) + 1}
              key={i}
              style={{ ["--fc"]: f.c } as React.CSSProperties}
            >
              <div className="fc-emoji">
                <Art name={f.ic} size={26} color={f.c} />
              </div>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
              <span
                className="fc-tag"
                style={{
                  color: f.c,
                  background: `color-mix(in srgb, ${f.c} 12%, var(--onco-surface))`,
                }}
              >
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────
   작동 방식 3스텝
   ────────────────────────────────────────────────────────── */
const HowItWorks: React.FC = () => {
  const steps: { ic: ArtName; c: string; t: string; d: string }[] = [
    { ic: "snap", c: "#5C544A", t: "기록", d: "검사지·약봉투·식사 사진, 대화로 남기면" },
    {
      ic: "memory",
      c: "#5C8073",
      t: "개인 RAG 기억",
      d: "진단 시점부터 모든 맥락을 안전하게 기억(개인정보 최소·암호화)",
    },
    {
      ic: "chat",
      c: "#5C7A99",
      t: "케어·상담",
      d: "기억을 근거로 24시간 케어챗·심리상담 + 위기 시 의료진/응급 연결",
    },
  ];
  return (
    <section className="section-pad" id="how">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">작동 방식</div>
          <h2 className="h-sec">
            남기면 기억하고,
            <br />
            기억을 근거로 돌봐요
          </h2>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step reveal" data-d={i + 1} key={i}>
              <div className="step-num">{i + 1}</div>
              <div
                className="step-emoji"
                style={{ background: `color-mix(in srgb, ${s.c} 13%, var(--onco-surface))` }}
              >
                <Art name={s.ic} size={30} color={s.c} />
              </div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              {i < 2 && (
                <div className="step-arrow">
                  <Icon name="arrow-right" size={26} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────
   신뢰 · 안전
   ────────────────────────────────────────────────────────── */
const Trust: React.FC = () => {
  const points: { ic: IconName; t: string; d: string }[] = [
    {
      ic: "book",
      t: "지식레이어 출처·근거",
      d: "답변은 검증된 의학 지식(PubMed·식약처·가이드라인)의 출처와 근거 위에서 만들어지고, 근거를 함께 보여드려요.",
    },
    {
      ic: "stars",
      t: "표준 척도(PRO-CTCAE) 기반 모니터링",
      d: "PRO-CTCAE 등 검증된 증상 척도를 기반으로 컨디션을 기록·해석해요.",
    },
    {
      ic: "shield",
      t: "레드플래그 → 119·응급실 연결",
      d: "발열·호흡곤란 등 위험 신호를 감지하면 119 안내와 함께 실시간 가용 응급실 정보를 연결해요.",
    },
    {
      ic: "user",
      t: "원본 사진 즉시 삭제·개인정보 보호",
      d: "데이터는 최소 수집·암호화하고, 분석에 쓰인 원본 사진은 즉시 삭제합니다.",
    },
  ];
  return (
    <section className="trust section-pad" id="trust">
      <div className="wrap">
        <div className="trust-grid">
          <div>
            <div className="kicker reveal" style={{ color: "var(--onco-sage-soft)" }}>
              신뢰 · 안전
            </div>
            <h2 className="h-sec reveal" data-d="1" style={{ marginBottom: 18 }}>
              AI가 답하고,
              <br />
              사람이 지킵니다
            </h2>
            <p className="lead reveal" data-d="1" style={{ marginBottom: 30 }}>
              빠른 AI 케어 위에, 의료진과 영양사의 사람 손길을 더한 하이브리드 안전망. 애매하거나
              위급한 순간엔 늘 사람이 함께합니다.
            </p>
            <div className="trust-points">
              {points.map((p, i) => (
                <div className="trust-point reveal" data-d={i + 1} key={i}>
                  <div className="tp-ic">
                    <Icon name={p.ic} size={22} />
                  </div>
                  <div>
                    <h4>{p.t}</h4>
                    <p>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hybrid-card reveal" data-d="2">
            <div className="big-emoji">
              <Art name="guard" size={44} color="#CFE0D8" wash="rgba(168,191,181,0.25)" />
            </div>
            <h3>
              “AI가 답하고,
              <br />
              사람(의료진·영양사)이 지킵니다”
            </h3>
            <p>
              9명의 AI 전문팀이 24시간 곁을 지키고, 그 위에서 의료진·영양사가 마지막을 책임집니다.
              기술의 속도와 사람의 신뢰를 함께 드려요.
            </p>
            <div className="compliance-pill">
              <span style={{ flex: "none", display: "inline-flex" }}>
                <Art name="scale" size={17} color="rgba(245,241,234,0.82)" wash="transparent" />
              </span>
              <span>
                모든 안내는 정보·교육 목적이며 진단이 아닙니다. 식품은 영양관리·영양보충 용도입니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────
   다운로드
   ────────────────────────────────────────────────────────── */
const StoreCard: React.FC<{
  kind: "play" | "app";
  href: string;
  meta: string;
}> = ({ kind, href, meta }) => (
  <a
    className="store-card"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={kind === "play" ? "Google Play에서 다운로드" : "App Store에서 다운로드"}
  >
    <span className={`store-card-ic ${kind}`}>
      {kind === "play" ? <PlayGlyph size={30} /> : <AppleGlyph size={30} color="#fff" />}
    </span>
    <span className="store-card-body">
      <span className="store-card-top">{kind === "play" ? "Google Play" : "App Store"}</span>
      <span className="store-card-big">다운로드</span>
      <span className="store-card-meta">{meta}</span>
    </span>
    <span className="store-card-arrow">
      <Icon name="arrow-right" size={18} />
    </span>
  </a>
);

const Download: React.FC = () => {
  return (
    <section className="download section-pad" id="download">
      <div className="wrap">
        <div className="dl-card reveal">
          <div
            className="blob"
            style={{
              width: 300,
              height: 300,
              top: -120,
              right: -100,
              background: "var(--onco-accent-wash)",
              opacity: 0.5,
            }}
          />
          <div style={{ position: "relative" }}>
            <div className="kicker">지금 시작하기</div>
            <h2 className="h-sec">오늘부터, 곁에 두세요</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              iOS와 안드로이드 모두 정식 출시됐어요. 사용하시는 스토어에서 바로 설치하세요.
            </p>
            <div className="dl-badges">
              <StoreCard kind="app" href={APPSTORE_URL} meta="iPhone · iOS 15+" />
              <StoreCard kind="play" href={PLAY_URL} meta="Android 8.0+" />
            </div>
            <a className="apk-link" href={APK_HREF}>
              <Icon name="arrow-right" size={15} />
              Play 스토어를 쓰기 어렵다면 · APK 직접 내려받기
            </a>
          </div>
          <div className="dl-aside">
            <div className="dl-aside-ic">
              <Art name="guard" size={34} color="var(--onco-sage-dark)" />
            </div>
            <h3>믿고 시작하세요</h3>
            <ul>
              <li>
                <Icon name="check" size={17} color="var(--onco-sage)" />
                양대 앱스토어 정식 심사 통과
              </li>
              <li>
                <Icon name="check" size={17} color="var(--onco-sage)" />
                출처·근거를 함께 보여주는 답변
              </li>
              <li>
                <Icon name="check" size={17} color="var(--onco-sage)" />
                원본 사진은 분석 후 즉시 삭제
              </li>
            </ul>
            <div className="dl-aside-note">
              모든 안내는 정보·교육 목적이며, 진단·치료 결정은 담당 의료진과 상의하세요.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────
   매거진 (SEO/GEO — 준비 중 티저)
   ────────────────────────────────────────────────────────── */
const Magazine: React.FC = () => {
  const posts = MAGAZINE.slice(0, 4);
  return (
    <section className="magazine section-pad" id="magazine">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">온코케어 매거진</div>
          <h2 className="h-sec">
            근거로 읽는
            <br />
            암 케어 이야기
          </h2>
          <p className="lead" style={{ marginTop: 16 }}>
            검증된 의학 정보를 쉬운 말로. 영양·증상관리·임상시험·검사 해석·마음 돌봄까지, 의료진
            감수 기반으로 전해드려요.
          </p>
        </div>
        <div className="mag-grid">
          {posts.map((p, i) => (
            <Link
              className="mag-card reveal"
              data-d={(i % 4) + 1}
              key={p.slug}
              href={`/magazine/${p.slug}`}
              style={{ ["--mc"]: p.categoryColor } as React.CSSProperties}
            >
              <span className="mag-k">{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className="mag-soon">읽기 {p.readMin}분 →</span>
            </Link>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: "center", marginTop: 32 }}>
          <Link className="btn btn-ghost" href="/magazine">
            매거진 전체 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────
   제휴 문의 (병원·기관 B2B2C)
   ────────────────────────────────────────────────────────── */
const Partner: React.FC = () => (
  <section className="partner section-pad" id="partner">
    <div className="wrap">
      <div className="partner-card reveal">
        <div className="partner-copy">
          <div className="kicker">제휴 문의</div>
          <h2 className="h-sec">병원·기관과 함께,
            <br />
            더 넓은 곁으로</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            온코케어 AI를 병원·클리닉에서 활용하고 싶으신가요? 보조치료·영양관리 연계, 기관 맞춤
            도입(화이트라벨), 콘텐츠·연구 제휴를 함께 논의해요.
          </p>
          <ul className="partner-points">
            <li><Icon name="check" size={18} color="var(--onco-sage)" /><span>보조치료·영양 솔루션 기관 연계</span></li>
            <li><Icon name="check" size={18} color="var(--onco-sage)" /><span>기관 맞춤 도입 · 화이트라벨</span></li>
            <li><Icon name="check" size={18} color="var(--onco-sage)" /><span>콘텐츠 · 임상 연구 협력</span></li>
          </ul>
        </div>
        <div className="partner-contact">
          <div className="pc-title">제휴 문의하기</div>
          <a className="pc-row" href="mailto:partner@oncocare.ai">
            <span className="pc-ic"><Icon name="arrow-right" size={16} /></span>
            <span><b>이메일</b><br />partner@oncocare.ai</span>
          </a>
          <a className="pc-row" href="tel:1577-7998">
            <span className="pc-ic"><Icon name="bell" size={16} /></span>
            <span><b>대표전화</b><br />1577-7998</span>
          </a>
          <a className="btn btn-primary" href="mailto:partner@oncocare.ai" style={{ width: "100%", marginTop: 6 }}>
            제휴 제안서 보내기
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────────────────
   오시는 길 — 서울온케어의원 (상세 SVG 약도)
   ────────────────────────────────────────────────────────── */
const CLINIC_ADDR = "경기도 남양주시 다산중앙로123번길 21-5, 8·9층 (다산동)";
const CLINIC_Q = encodeURIComponent("경기도 남양주시 다산중앙로123번길 21-5");

const ClinicMap: React.FC = () => (
  <svg className="clinic-map" viewBox="0 0 820 540" role="img"
    aria-label="서울온케어의원 약도 — 다산역 8호선에서 다산중앙로 방면, 다산중앙로123번길 21-5 8·9층">
    <rect x="0" y="0" width="820" height="540" fill="#FBF7F0" />
    {/* 블록(단지) 배경 */}
    <g fill="#F1EADF">
      <rect x="30" y="40" width="240" height="150" rx="10" />
      <rect x="560" y="230" width="230" height="120" rx="10" />
      <rect x="300" y="390" width="210" height="120" rx="10" />
      <rect x="620" y="390" width="170" height="120" rx="10" />
    </g>

    {/* 도로: 다산중앙로 (가로 대로) */}
    <rect x="0" y="300" width="820" height="66" fill="#E7DFD2" />
    <line x1="0" y1="333" x2="820" y2="333" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="22 18" />
    <text x="60" y="290" className="cm-road">다산중앙로</text>

    {/* 도로: 다산중앙로123번길 (병원으로 가는 길) */}
    <rect x="506" y="90" width="48" height="216" fill="#E7DFD2" />
    <line x1="530" y1="96" x2="530" y2="300" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="18 14" />
    <text x="566" y="150" className="cm-road2">다산중앙로<tspan x="566" dy="16">123번길</tspan></text>

    {/* 지하철 8호선 다산역 */}
    <g>
      <rect x="70" y="392" width="150" height="60" rx="12" fill="#FFFFFF" stroke="#E5DDD0" strokeWidth="1.5" />
      <circle cx="100" cy="422" r="16" fill="#E5308A" />
      <text x="100" y="428" className="cm-line" textAnchor="middle">8</text>
      <text x="126" y="418" className="cm-station">다산역</text>
      <text x="126" y="438" className="cm-sub">수도권 8호선</text>
      {/* 출구 */}
      <g>
        <rect x="150" y="336" width="26" height="26" rx="6" fill="#3F5D52" />
        <text x="163" y="354" className="cm-exit" textAnchor="middle">2</text>
      </g>
    </g>

    {/* 도보 경로 (다산역 2번출구 → 다산중앙로 → 123번길 → 병원) */}
    <path d="M163 336 L163 320 L530 320 L530 210" fill="none" stroke="#5C8073" strokeWidth="4"
      strokeDasharray="2 12" strokeLinecap="round" />
    <g className="cm-walk">
      <circle cx="360" cy="320" r="13" fill="#5C8073" />
      <text x="360" y="325" textAnchor="middle" className="cm-walk-t">도보</text>
    </g>
    <text x="360" y="352" textAnchor="middle" className="cm-dist">다산역 2번 출구 → 약 2분</text>

    {/* 병원 마커 */}
    <g>
      <rect x="470" y="120" width="120" height="80" rx="10" fill="#3F5D52" />
      <text x="530" y="152" textAnchor="middle" className="cm-clinic">서울온케어의원</text>
      <text x="530" y="176" textAnchor="middle" className="cm-clinic-sub">8 · 9F</text>
      {/* 핀 */}
      <g transform="translate(530,104)">
        <path d="M0 14 C-11 2 -11 -12 0 -12 C11 -12 11 2 0 14 Z" fill="#C45050" />
        <circle cx="0" cy="-2" r="4.5" fill="#FFFFFF" />
      </g>
    </g>

    {/* 랜드마크 */}
    <g className="cm-lm">
      <text x="150" y="70" className="cm-lm-t">자연앤 푸르지오</text>
      <text x="150" y="90" className="cm-lm-s">다산역 인접 · 도보 2분</text>

      <text x="405" y="425" className="cm-lm-t" textAnchor="middle">유승한내들</text>
      <text x="405" y="445" className="cm-lm-t" textAnchor="middle">센트럴 e편한세상</text>
      <text x="405" y="465" className="cm-lm-s" textAnchor="middle">도보 5분</text>

      <text x="705" y="425" className="cm-lm-t" textAnchor="middle">e편한세상</text>
      <text x="705" y="445" className="cm-lm-t" textAnchor="middle">힐스테이트</text>
      <text x="705" y="465" className="cm-lm-s" textAnchor="middle">도보 8분</text>
    </g>

    {/* 버스 정류장 마커 */}
    <g>
      <g transform="translate(250,332)"><rect x="-7" y="-16" width="14" height="16" rx="2" fill="#3A7CEC" /><rect x="-9" y="0" width="18" height="4" fill="#3A7CEC" /></g>
      <g transform="translate(470,378)"><rect x="-7" y="-16" width="14" height="16" rx="2" fill="#3A7CEC" /><rect x="-9" y="0" width="18" height="4" fill="#3A7CEC" /></g>
      <g transform="translate(628,378)"><rect x="-7" y="-16" width="14" height="16" rx="2" fill="#3A7CEC" /><rect x="-9" y="0" width="18" height="4" fill="#3A7CEC" /></g>
    </g>

    {/* 북쪽 나침반 */}
    <g transform="translate(770,50)">
      <circle r="20" fill="#FFFFFF" stroke="#E5DDD0" strokeWidth="1.5" />
      <path d="M0 -13 L6 4 L0 -1 L-6 4 Z" fill="#C45050" />
      <text x="0" y="18" textAnchor="middle" className="cm-n">N</text>
    </g>

    {/* 범례 */}
    <g transform="translate(40,470)">
      <rect x="-8" y="-18" width="360" height="52" rx="10" fill="#FFFFFF" stroke="#E5DDD0" strokeWidth="1.2" />
      <circle cx="8" cy="0" r="7" fill="#E5308A" /><text x="22" y="4" className="cm-leg">지하철 8호선</text>
      <rect x="112" y="-6" width="14" height="13" rx="2" fill="#3A7CEC" /><text x="132" y="4" className="cm-leg">버스정류장</text>
      <path d="M232 0 h20" stroke="#5C8073" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" /><text x="258" y="4" className="cm-leg">도보 경로</text>
    </g>
  </svg>
);

const Location: React.FC = () => {
  const buses: { stop: string; walk: string; lines: { t: string; k: "town" | "normal" | "wide" }[] }[] = [
    { stop: "다산역 자연앤 푸르지오", walk: "도보 2분", lines: [{ t: "땡큐11", k: "town" }] },
    {
      stop: "유승한내들센트럴 e편한세상",
      walk: "도보 5분",
      lines: [
        { t: "34", k: "normal" }, { t: "79", k: "normal" }, { t: "95", k: "normal" },
        { t: "1003", k: "wide" }, { t: "M2353", k: "wide" }, { t: "땡큐90", k: "town" },
      ],
    },
    {
      stop: "e편한세상 힐스테이트",
      walk: "도보 8분",
      lines: [
        { t: "76", k: "normal" }, { t: "1006", k: "wide" },
        { t: "땡큐10", k: "town" }, { t: "땡큐12", k: "town" },
      ],
    },
  ];
  return (
    <section className="location section-pad" id="location">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">오시는 길</div>
          <h2 className="h-sec">서울온케어의원으로 오시는 길</h2>
        </div>
        <div className="loc-grid reveal">
          <div className="loc-map-wrap">
            <ClinicMap />
          </div>
          <div className="loc-info">
            <div className="loc-block">
              <h3>주소</h3>
              <p className="loc-addr">{CLINIC_ADDR}</p>
              <div className="loc-maps">
                <a className="map-btn naver" href={`https://map.naver.com/p/search/${CLINIC_Q}`} target="_blank" rel="noopener noreferrer">
                  <span className="mb-mark">N</span> 네이버 지도
                </a>
                <a className="map-btn kakao" href={`https://map.kakao.com/link/search/${CLINIC_Q}`} target="_blank" rel="noopener noreferrer">
                  <span className="mb-mark kakao">K</span> 카카오맵
                </a>
              </div>
            </div>

            <div className="loc-block">
              <h3>주차 안내</h3>
              <ul className="loc-list">
                <li><Icon name="check" size={17} color="var(--onco-sage)" /><span>외래환자 — 본원 건물 주차 <b>4시간 무료</b></span></li>
                <li><Icon name="check" size={17} color="var(--onco-sage)" /><span>입원환자 — 퍼스타타워 주차장 <b>일주일까지 무료</b></span></li>
              </ul>
            </div>

            <div className="loc-block">
              <h3>버스 이용 시</h3>
              <div className="bus-legend">
                <span><i className="bus-dot town" />마을버스</span>
                <span><i className="bus-dot normal" />일반버스</span>
                <span><i className="bus-dot wide" />광역버스</span>
              </div>
              <div className="bus-stops">
                {buses.map((b, i) => (
                  <div className="bus-stop" key={i}>
                    <div className="bs-head">
                      <span className="bs-name">{b.stop}</span>
                      <span className="bs-walk">{b.walk}</span>
                    </div>
                    <div className="bs-lines">
                      {b.lines.map((l, j) => (
                        <span className={`bus-line ${l.k}`} key={j}>{l.t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────
   푸터
   ────────────────────────────────────────────────────────── */
const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="wrap">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand">
            <span className="leaf">
              <LeafMark size={22} />
            </span>
            온코케어 AI
          </div>
          <p>
            암 치료의 모든 순간을 곁에서 함께하는 AI 케어 동반자. 정보·교육과 영양관리를 돕고, 필요할
            때 의료진과 연결합니다.
          </p>
          <div className="disclaimer">
            본 서비스는 의료행위가 아닌 정보·교육·영양관리 보조이며, 진단·치료 결정은 담당 의료진과
            상의하세요. 표시된 식품은 질병의 치료·예방 목적이 아닌 영양관리·영양보충 용도입니다.
          </div>
        </div>
        <div className="footer-col">
          <h5>바로가기</h5>
          <a href="#how">서비스 이용방법</a>
          <a href="#download">다운로드 안내</a>
          <a href="#magazine">매거진</a>
          <a href="#partner">제휴문의</a>
          <a href="#location">오시는 길</a>
          <a href="https://oncocare-web-okpo4egzcq-du.a.run.app/login" target="_blank" rel="noopener">로그인</a>
        </div>
        <div className="footer-col">
          <h5>회사·정책</h5>
          <a href="/privacy">개인정보처리방침</a>
          <a href="/terms">이용약관</a>
          <a href="mailto:hello@oncocare.ai">문의하기</a>
          <a href="#location">서울온케어의원 오시는 길</a>
        </div>
      </div>
      <div className="footer-legal">
        <span>
          주식회사 루미브리즈(LumiBreeze) · 운영 의료기관: 서울온케어의원 · 경기도 남양주시
          다산중앙로123번길 21-5, 8·9층
        </span>
        <span>© 2026 LumiBreeze. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

/* ──────────────────────────────────────────────────────────
   페이지 루트
   ────────────────────────────────────────────────────────── */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // 헤더 스크롤 상태
  React.useEffect(() => {
    const header = document.getElementById("site-header");
    const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 스크롤 리빌 (+ 안전망: 절대 숨겨진 채로 남지 않도록)
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const reveal = () => {
      raf = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(".onco-landing .reveal:not(.in)").forEach((el) => {
        if (reduce) {
          el.classList.add("in");
          return;
        }
        const top = el.getBoundingClientRect().top;
        if (top < vh * 0.9) el.classList.add("in");
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(reveal);
    };
    reveal();
    const t1 = setTimeout(reveal, 120);
    const t2 = setTimeout(reveal, 400);
    // 최종 안전망: 어떤 환경에서도 콘텐츠가 보이도록 강제 노출.
    const safety = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".onco-landing .reveal")
        .forEach((el) => el.classList.add("in"));
    }, 1100);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(safety);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="onco-landing" id="top">
      <Header onMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <PositionBand />
        <StatsReport />
        <FeatureGrid />
        <HowItWorks />
        <Trust />
        <Magazine />
        <Partner />
        <Download />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
