"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon, SoccLogo } from "./icons";
import { NAV } from "./site-nav";
import { ChatbotButton } from "./chatbot-button";
import { CLINIC } from "../content/contact";

/* 공통 GNB — 상단 띠 + 메가메뉴(데스크톱, CSS hover/focus-within) + 슬라이드 드로어(모바일, 아코디언). */
export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const burgerRef = React.useRef<HTMLButtonElement>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const pathname = usePathname() || "/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = React.useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) burgerRef.current?.focus({ preventScroll: true });
  }, []);

  React.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const mq = window.matchMedia("(min-width: 901px)");
    const onMq = (m: MediaQueryListEvent) => m.matches && close(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, close]);

  // 라우트가 바뀌면 드로어를 닫는다.
  React.useEffect(() => setOpen(false), [pathname]);

  const current = (href: string) =>
    (href === "/magazine" && pathname.startsWith("/magazine")) ||
    (href === "/admission" && pathname.startsWith("/admission"))
      ? "page"
      : undefined;

  return (
    <>
      <a className="skip" href="#main">
        본문 바로가기
      </a>
      <div className="topline">
        <div className="wrap">
          <span>
            <Icon name="pin" />
            남양주 다산 · 8호선 다산역 도보 2분
          </span>
          <span className="hide-m">
            <a href="/#location">오시는 길</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="/download">OnCoCare 앱 다운로드</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;<a href={CLINIC.tel}>제휴 문의 {CLINIC.phone}</a>
          </span>
        </div>
      </div>

      <header className={`gnb${scrolled ? " scrolled" : ""}`} id="gnb">
        <div className="wrap">
          <a className="brand" href="/" aria-label="서울온케어의원 홈">
            <SoccLogo className="logo" />
            <small>
              암환자를 위한
              <br />
              AI 케어앱 OnCoCare
            </small>
          </a>
          <nav className="primary" aria-label="주요 메뉴">
            <ul className="nav">
              {NAV.map((g) => (
                <li key={g.label} className={g.hot ? "hot" : undefined}>
                  <a href={g.href} aria-current={current(g.href)}>
                    {g.label}
                  </a>
                  {g.items && (
                    <div className="mega">
                      <div className="wrap">
                        <div>
                          <div className="mh">{g.title}</div>
                          <p>{g.desc}</p>
                        </div>
                        <ul>
                          {g.items.map((it) => (
                            <li key={it.label}>
                              <a href={it.href}>
                                <Icon name={it.icon} />
                                {it.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                        {g.photo && (
                          <figure>
                            <Image src={g.photo.src} alt={g.photo.alt} width={480} height={360} sizes="240px" />
                            <figcaption>{g.photo.caption}</figcaption>
                          </figure>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="gnb-right">
            <ChatbotButton className="tel consult" title="서울온케어의원 입원·진료 문의" aria-label="병원 상담 연결 — 서울온케어의원 입원·진료 문의">
              <Icon name="hospital-call" />
              <span>병원 상담</span>
            </ChatbotButton>
            <a className="btn btn-brand" href="/download">
              <Icon name="download" />
              앱 무료 다운로드
            </a>
            <button
              ref={burgerRef}
              type="button"
              className="burger"
              aria-label="메뉴 열기"
              aria-expanded={open}
              aria-controls="drawer"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? " open" : ""}`} id="drawer" aria-hidden={!open} inert={!open}>
        <button type="button" className="scrim" tabIndex={-1} aria-hidden="true" onClick={() => close()} />
        <div className="panel" role="dialog" aria-modal="true" aria-label="전체 메뉴">
          <div className="phead">
            <SoccLogo className="logo" />
            <button ref={closeRef} type="button" className="burger" aria-label="메뉴 닫기" onClick={() => close()}>
              <Icon name="close" />
            </button>
          </div>
          <div
            className="pbody"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) close(false);
            }}
          >
            {NAV.map((g, i) =>
              g.items ? (
                <details key={g.label} open={i === 0}>
                  <summary>
                    {g.label}
                    <Icon name="down" />
                  </summary>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.label}>
                        <a href={it.href}>{it.label}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a key={g.label} className="direct" href={g.href}>
                  {g.label}
                  <Icon name="arrow" />
                </a>
              ),
            )}
          </div>
          <div className="pfoot">
            <a className="btn btn-brand" href="/download">
              <Icon name="download" />
              앱 무료 다운로드
            </a>
            <a className="btn btn-line" href={CLINIC.tel}>
              <Icon name="phone" />
              {CLINIC.phone}
            </a>
            <ChatbotButton className="btn btn-brand" onOpen={() => close(false)} aria-label="병원 상담 연결 — 서울온케어의원 입원·진료 문의">
              <Icon name="hospital-call" />
              병원 상담 연결
            </ChatbotButton>
          </div>
        </div>
      </div>
    </>
  );
}
