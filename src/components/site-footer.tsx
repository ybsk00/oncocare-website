import React from "react";
import { SoccLogo } from "./icons";
import { CLINIC, CONTACT } from "../content/contact";

export function SiteFooter() {
  return (
    <footer className="site-foot" id="footer">
      <div className="wrap">
        <div className="top">
          <SoccLogo className="logo" />
          <nav aria-label="하단 메뉴">
            <a href="/#about">병원소개</a>
            <a href="/#clinics">암케어</a>
            <a href="/admission">입원상담</a>
            <a href="/#app">AI 케어앱</a>
            <a href="/download">앱 다운로드</a>
            <a href="/magazine">매거진</a>
            <a href="/#location">오시는길</a>
            <a href={CONTACT.href}>제휴 문의</a>
            <a className="pp" href="/privacy">
              개인정보처리방침
            </a>
            <a href="/terms">이용약관</a>
          </nav>
        </div>
        <div className="info">
          <span>상호 {CLINIC.name}</span>
          <span>
            대표 {CLINIC.ceo}
          </span>
          <span>주소 {CLINIC.address}</span>
          <span>
            대표전화 <a href={CLINIC.tel}>{CLINIC.phone}</a>
          </span>
        </div>
        <p className="legal">
          보조치료는 표준 암 치료를 대체하지 않는 보완적 관리입니다. 진료와 입원은 외래 진료를 거쳐 의료진이
          결정합니다. AI 케어앱 OnCoCare의 안내는 정보·교육 목적이며 진단·처방이 아닙니다. 응급 상황에는 119
          또는 가까운 응급실을 이용해 주세요. 병원·기관 제휴 문의는 대표전화로 연락 주세요.
        </p>
        <p className="copy">© 2026 {CLINIC.name}. OnCoCare 앱 개발·운영 지원 루미브리즈.</p>
      </div>
    </footer>
  );
}
