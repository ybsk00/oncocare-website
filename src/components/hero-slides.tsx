"use client";

import React from "react";
import Image from "next/image";

/* 히어로 배경 — 일상 사진 4장 + 서울온케어의원 실사진 1장 크로스페이드 + 느린 줌/팬(켄 번스) + 진행 막대.
   첫 장은 JS 없이도 보인다. prefers-reduced-motion 이면 자동 넘김·줌을 모두 멈춘다(CSS·JS 양쪽). */

const SLIDES = [
  { src: "/landing/slides/slide-window.webp", alt: "창가 의자에 앉아 차를 마시는 모습", label: "새벽에도", pos: "70% 50%" },
  { src: "/landing/slides/slide-table.webp", alt: "부드러운 죽과 반찬이 놓인 식탁", label: "오늘의 식사", pos: "65% 50%" },
  { src: "/landing/slides/slide-walk.webp", alt: "가로수길을 함께 걷는 두 사람의 뒷모습", label: "함께 걷는 하루", pos: "55% 50%" },
  { src: "/landing/slides/slide-diary.webp", alt: "창가 책상에서 노트에 기록하는 손", label: "나의 기록", pos: "75% 50%" },
  { src: "/clinic/hero-care.webp", alt: "서울온케어의원 의료진이 환자의 손을 잡고 살피는 모습", label: "의료진이 함께", pos: "70% 30%" },
] as const;

const INTERVAL = 6500;

export function HeroSlides() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  React.useEffect(() => {
    if (reduced || paused) return;
    const t = window.setTimeout(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [active, paused, reduced]);

  return (
    <div className="hero-slides" data-paused={paused || reduced ? "" : undefined}>
      {SLIDES.map((s, i) => (
        <div key={s.src} className={`hero-slide${i === active ? " is-on" : ""}`} aria-hidden={i !== active}>
          <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="100vw" quality={80} style={{ objectPosition: s.pos }} />
        </div>
      ))}
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-sweep" key={`sweep-${active}`} aria-hidden="true" />
      <div className="hero-progress" role="group" aria-label="히어로 사진 선택">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={i === active ? "is-on" : undefined}
            aria-label={`${i + 1}번째 사진: ${s.label}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span className="bar">
              <i key={`fill-${active}-${i}`} style={{ animationDuration: `${INTERVAL}ms` }} />
            </span>
            <span className="lab">
              {String(i + 1).padStart(2, "0")} {s.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* 오렌지 케어 라인 — SOCC 고리 모티프의 획이 그려지고, 빛 점이 라인을 따라 흐른다. 장식 전용. */
export function HeroCareLine() {
  const d = "M-20 210 C 180 210, 240 120, 400 120 S 620 250, 820 190 S 1120 40, 1460 90";
  return (
    <svg className="hero-line" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="hl-g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#F2871F" stopOpacity="0" />
          <stop offset=".25" stopColor="#F2871F" />
          <stop offset=".8" stopColor="#F15E21" />
          <stop offset="1" stopColor="#F15E21" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="hl-base" d={d} pathLength={1} />
      <path className="hl-draw" d={d} pathLength={1} stroke="url(#hl-g)" />
      <path className="hl-pulse" d={d} pathLength={1} />
    </svg>
  );
}

/* SOCC 고리 — 천천히 회전하며 그려지는 원 두 겹(카피 뒤 장식). */
export function HeroRings() {
  return (
    <svg className="hero-rings" viewBox="0 0 400 400" aria-hidden="true">
      <circle className="r1" cx="200" cy="200" r="170" pathLength={1} />
      <circle className="r2" cx="200" cy="200" r="128" pathLength={1} />
      <circle className="r3" cx="200" cy="30" r="7" />
    </svg>
  );
}
