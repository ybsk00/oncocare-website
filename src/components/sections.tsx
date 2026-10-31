import React from "react";
import Image from "next/image";
import { Icon, SoccMark } from "./icons";
import { ChatbotButton } from "./chatbot-button";
import { CHANNEL_NOTE, CLINIC, NONPAY, STORE } from "../content/contact";

/* ── 스토어 배지(SVG로 그림) ── */
export function StoreBadges() {
  return (
    <div className="stores">
      <a className="store" href={STORE.appStore} target="_blank" rel="noopener noreferrer" aria-label="App Store에서 OnCoCare 다운로드">
        <svg viewBox="0 0 180 56" aria-hidden="true">
          <rect width="180" height="56" rx="10" fill="#111" />
          <path
            d="M38.6 29.6c0-3.3 2.7-4.9 2.8-5-1.5-2.2-3.9-2.5-4.7-2.6-2-.2-3.9 1.2-4.9 1.2-1 0-2.6-1.2-4.2-1.1-2.2 0-4.2 1.3-5.3 3.2-2.3 3.9-.6 9.7 1.6 12.9 1.1 1.6 2.4 3.3 4.1 3.2 1.6-.1 2.3-1.1 4.2-1.1 2 0 2.5 1.1 4.2 1 1.8 0 2.9-1.6 3.9-3.2 1.2-1.8 1.7-3.6 1.8-3.7-.1 0-3.5-1.3-3.5-5.2zM35.4 19.9c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.7 1.9-.8.9-1.5 2.4-1.3 3.9 1.4.1 2.8-.7 3.7-1.7z"
            fill="#fff"
          />
          <text x="54" y="23" fill="#fff" fontFamily="Pretendard,system-ui,sans-serif" fontSize="10.5">
            다운로드하기
          </text>
          <text x="54" y="41" fill="#fff" fontFamily="system-ui,-apple-system,Segoe UI,sans-serif" fontSize="19" fontWeight="600" letterSpacing="-.3">
            App Store
          </text>
        </svg>
      </a>
      <a className="store" href={STORE.googlePlay} target="_blank" rel="noopener noreferrer" aria-label="Google Play에서 OnCoCare 다운로드">
        <svg viewBox="0 0 190 56" aria-hidden="true">
          <rect width="190" height="56" rx="10" fill="#111" />
          <path d="M20 15.5l17.5 12.5L20 40.5c-.6-.3-1-1-1-1.8V17.3c0-.8.4-1.5 1-1.8z" fill="#2196F3" />
          <path d="M20 15.5c.5-.3 1.2-.3 1.8 0l19.6 11.3L37.5 28z" fill="#34A853" />
          <path d="M20 40.5L37.5 28l3.9 1.2L21.8 40.5c-.6.3-1.3.3-1.8 0z" fill="#EA4335" />
          <path d="M41.4 26.8l4.8 2.8c1.1.6 1.1 2.2 0 2.8l-4.8-.5-3.9-3.9z" fill="#FBBC04" transform="translate(0 -2)" />
          <text x="56" y="23" fill="#fff" fontFamily="Pretendard,system-ui,sans-serif" fontSize="10.5">
            다운로드하기
          </text>
          <text x="56" y="41" fill="#fff" fontFamily="system-ui,-apple-system,Segoe UI,sans-serif" fontSize="19" fontWeight="600" letterSpacing="-.3">
            Google Play
          </text>
        </svg>
      </a>
    </div>
  );
}

/* ── 입원 절차 ── */
export function AdmissionProcess() {
  return (
    <>
      <svg className="line" viewBox="0 0 400 48" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="M14 24H386" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round" fill="none" />
        <g fill="var(--bg)" stroke="var(--brand)" strokeWidth="2">
          <circle cx="14" cy="24" r="9" />
          <circle cx="138" cy="24" r="9" />
          <circle cx="262" cy="24" r="9" />
        </g>
        <circle cx="386" cy="24" r="11" fill="var(--brand)" />
        <path d="M381 24.5l3.5 3.5 6-6.5" stroke="var(--on-brand)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <ol>
        <li>
          <span className="n">01</span>
          <div>
            <b>상담</b>
            <span>대표전화 {CLINIC.phone} 또는 &lsquo;병원 상담 연결&rsquo;로 문의합니다. 보호자 문의도 가능합니다.</span>
          </div>
        </li>
        <li>
          <span className="n">02</span>
          <div>
            <b>외래 진료</b>
            <span>진료의뢰서·최근 검사 결과를 가지고 내원하시면 의료진이 진료합니다.</span>
          </div>
        </li>
        <li>
          <span className="n">03</span>
          <div>
            <b>입원 결정</b>
            <span>치료 일정과 몸 상태에 맞춰 입원 기간과 관리 계획을 함께 정합니다.</span>
          </div>
        </li>
        <li>
          <span className="n">04</span>
          <div>
            <b>입원</b>
            <span>병실 배정 후 입원합니다. 퇴원할 때 OnCoCare 앱 연결을 도와드립니다.</span>
          </div>
        </li>
      </ol>
    </>
  );
}

/* ── 병원 상담 연결 패널(채널 B): 서울온케어의원 입원·진료 문의 — 챗봇 / 전화. AI 케어 상담(채널 A)과 섞지 않는다. ── */
export function ConsultPanel({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="consult-panel" id="consult">
      <H>병원 상담 연결</H>
      <p className="cp-sub">서울온케어의원 · 입원·진료 문의</p>
      <p>{CHANNEL_NOTE.hospital}</p>
      <div className="cp-actions">
        <ChatbotButton className="cp-act primary" aria-label="병원 상담 연결 — 서울온케어의원 입원·진료 문의 창 열기">
          <span className="ci">
            <Icon name="hospital-call" />
          </span>
          <span>
            <b>병원 상담 연결</b>
            <small>서울온케어의원 입원·진료 문의 · 24시간 접수</small>
          </span>
          <Icon name="arrow" className="arr" />
        </ChatbotButton>
        <a className="cp-act" href={CLINIC.tel}>
          <span className="ci">
            <Icon name="phone" />
          </span>
          <span>
            <b>전화 {CLINIC.phone}</b>
            <small>서울온케어의원 대표전화 · 상담 가능 시간은 전화로 안내합니다</small>
          </span>
          <Icon name="arrow" className="arr" />
        </a>
      </div>
      <ul className="cp-notes">
        <li>
          <Icon name="info" />
          <span>병원 상담 연결은 입원·진료 안내를 위한 서울온케어의원 문의 창구이며 의학적 진단이 아닙니다. 입원 여부는 외래 진료에서 의료진이 결정합니다.</span>
        </li>
        <li>
          <Icon name="shield" />
          <span>발열·호흡곤란 등 응급 증상이 있으면 119 또는 가까운 응급실을 먼저 이용해 주세요.</span>
        </li>
      </ul>
    </div>
  );
}

/* ── 홈 입원상담 섹션 ── */
export function AdmissionSection() {
  return (
    <section className="admit" id="admission" aria-labelledby="admit-h">
      <div className="admit-band">
        <Image src="/clinic/hands.webp" alt="환자의 손을 잡아 주는 의료진" fill sizes="100vw" />
        <div className="wrap">
          <div className="label">입원상담</div>
          <h2 id="admit-h">
            입원이 필요한지부터
            <br />
            함께 판단합니다.
          </h2>
        </div>
      </div>
      <div className="wrap">
        <div className="grid">
          <div className="proc">
            <p className="lede" style={{ margin: "0 0 28px" }}>
              전화나 &lsquo;병원 상담 연결&rsquo;로 문의해 주시면 지금 받고 계신 치료 일정과 진료 기록을 확인한 뒤, 외래 진료에서 입원 여부를 결정합니다.
            </p>
            <AdmissionProcess />
            <figure className="room-strip">
              <Image src="/clinic/room-single.webp" alt="욕실이 딸린 1인 병실" width={1100} height={590} sizes="(max-width:1000px) 60vw, 300px" />
              <Image src="/clinic/lounge-window.webp" alt="환자 라운지" width={1400} height={817} sizes="(max-width:1000px) 40vw, 200px" />
              <figcaption>
                1인 병실과 환자 라운지. 병실 유형과 비용은 <a href="/admission#nonpay">비급여 안내</a>와 상담에서 자세히 안내합니다.
              </figcaption>
            </figure>
            <a className="more-link" href="/admission">
              입원 절차·병실 자세히 보기
              <Icon name="arrow" />
            </a>
          </div>
          <ConsultPanel />
        </div>
      </div>
    </section>
  );
}

/* ── 비급여 안내 ── */
export function NonpayNote() {
  return (
    <>
      진료비 중 건강보험이 적용되지 않는 비급여 항목과 금액은 의원 내 게시 및 상담에서 안내드립니다. 의료기관별 비급여 진료비는{" "}
      <a href={NONPAY.href} target="_blank" rel="noopener noreferrer">
        {NONPAY.label}
      </a>
      에서도 확인하실 수 있습니다.
    </>
  );
}

/* ── 다운로드 섹션 ── */
export function DownloadSection({ asPageHead = false }: { asPageHead?: boolean }) {
  const H = asPageHead ? "h1" : "h2";
  return (
    <section className="dl" id="download" aria-labelledby="dl-h">
      <SoccMark className="big-mark" />
      <div className="wrap">
        <div>
          <div className="label">앱 다운로드</div>
          <H id="dl-h" style={{ marginTop: 20 }}>
            서울온케어의원의
            <br />
            AI 케어 앱, OnCoCare
          </H>
          <p>입원 중 의료진과 나눈 이야기를 퇴원 뒤에도 기록으로 이어 갑니다. 지금 받고 계신 치료가 어디서든, 누구나 무료로 시작할 수 있어요.</p>
          <StoreBadges />
          <div className="free">
            <Icon name="check" />
            다운로드 무료 · iPhone · Android
          </div>
        </div>
        <div className="side">
          <ul>
            <li>
              <Icon name="sun" />
              <span>아침 체크인으로 오늘 컨디션 기록</span>
            </li>
            <li>
              <Icon name="bowl" />
              <span>사진 한 장으로 식사 기록과 보강 안내</span>
            </li>
            <li>
              <Icon name="doc" />
              <span>검사결과지를 쉬운 말로 정리</span>
            </li>
            <li>
              <Icon name="chat" />
              <span>AI 케어 상담 — 건강·치료 궁금증에 출처를 붙여 답변</span>
            </li>
            <li>
              <Icon name="moon" />
              <span>위험 신호엔 응급 정보와 의료진 연결</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
