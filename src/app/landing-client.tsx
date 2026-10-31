"use client";

import React from "react";

/* 랜딩에서 상태가 필요한 두 조각만 클라이언트로 둔다: 헤더(모바일 메뉴) · 히어로 슬라이드쇼. */

export const NAV: { href: string; label: string }[] = [
  { href: "#day", label: "이용 방법" },
  { href: "#magazine", label: "매거진" },
  { href: "#partner", label: "제휴문의" },
  { href: "#location", label: "오시는 길" },
];

const Wordmark: React.FC = () => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/brand/mark.svg" width={32} height={32} alt="" />
    온코케어
  </>
);

export const SiteHeader: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-head g">
        <div className="max nav">
          <a className="wm" href="#top" aria-label="온코케어 홈">
            <Wordmark />
          </a>
          <nav className="links" aria-label="주요 메뉴">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="head-right">
            <a className="cta-btn" href="#download">
              앱 다운로드
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-label="메뉴 열기"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mm ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="mm-sheet" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="메뉴">
          <div className="mm-head">
            <span className="wm">
              <Wordmark />
            </span>
            <button type="button" className="menu-btn" aria-label="메뉴 닫기" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav aria-label="모바일 메뉴">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="cta-btn mm-cta" href="#download" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            앱 다운로드
          </a>
        </div>
      </div>
    </>
  );
};

/* ── 히어로 슬라이드쇼: 1.4s 크로스페이드, 5.5s 간격. 첫 장은 JS 없이도 보이고, 나머지는 마운트 후 로드 ── */
export const SLIDES: { src: string; alt: string; pos?: string }[] = [
  {
    src: "/landing/hero-family.webp",
    alt: "창가 햇살 아래 담요 위에서 맞잡은 두 손",
    pos: "50% 64%",
  },
  { src: "/landing/slides/slide-tea.webp", alt: "햇살 드는 식탁에서 어르신의 찻잔에 보리차를 따라 드리는 손" },
  { src: "/landing/slides/slide-window.webp", alt: "니트 모자를 쓰고 창가 의자에 앉아 아침 나무를 바라보는 모습" },
  { src: "/landing/slides/slide-walk.webp", alt: "아침 가로수길을 팔짱 끼고 함께 걷는 두 사람의 뒷모습" },
  { src: "/landing/slides/slide-table.webp", alt: "죽과 반찬이 놓인 아침 식탁과 숟가락을 든 두 사람의 손" },
  { src: "/landing/slides/slide-diary.webp", alt: "창가 책상에서 노트에 기록하는 손과 머그, 휴대폰" },
];

export const HeroSlides: React.FC = () => {
  const [cur, setCur] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const [tick, setTick] = React.useState(0); // 수동 선택 시 타이머 재시작

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setCur((i) => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, [tick]);

  return (
    <>
      {SLIDES.map((s, i) => (
        <div className={`slide ${i === cur ? "on" : ""}`} key={s.src} aria-hidden={i !== cur}>
          {(i === 0 || mounted) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={s.src}
              alt={s.alt}
              style={s.pos ? { objectPosition: s.pos } : undefined}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding="async"
            />
          )}
        </div>
      ))}
      <div className="dots" role="group" aria-label="사진 선택">
        {SLIDES.map((_, i) => (
          <button
            type="button"
            key={i}
            className={i === cur ? "on" : ""}
            aria-label={`${i + 1}번째 사진`}
            aria-pressed={i === cur}
            onClick={() => {
              setCur(i);
              setTick((t) => t + 1);
            }}
          />
        ))}
      </div>
    </>
  );
};
