import React from "react";
import Link from "next/link";
import "./magazine.css";

export default function MagazineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mag-page">
      <header className="mag-header">
        <div className="in">
          <Link className="mag-brand" href="/">
            <span className="lf" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
                <path d="M40 8C22 9 10.5 19.5 8.5 39.5 28 41 38.5 28 40 8z" fill="#E4ECE7" stroke="#3F5D52" strokeWidth="2.6" strokeLinejoin="round" />
                <path d="M10.5 37.5C17 27 25 18 37 10.5" stroke="#3F5D52" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            온코케어 AI
          </Link>
          <nav>
            <Link href="/magazine">매거진</Link>
            <Link href="/#how">서비스 이용방법</Link>
            <Link href="/#download">다운로드</Link>
            <Link href="/#location">오시는 길</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="mag-footer">
        <div className="in">
          본 콘텐츠는 정보·교육 목적이며 의료행위(진단·치료)가 아닙니다. 개인의 증상·치료는 반드시
          담당 의료진과 상의하세요. · 주식회사 루미브리즈(LumiBreeze) · 운영 의료기관: 서울온케어의원
          · © 2026 LumiBreeze.
        </div>
      </footer>
    </div>
  );
}
