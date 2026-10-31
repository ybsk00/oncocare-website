import React from "react";
import "./magazine.css";

// 매거진 — 공통 GNB·푸터는 루트 레이아웃이 그린다(2026-10-31 리브랜딩). 여기서는 본문 영역과 고지만.
export default function MagazineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mag-page">
      {children}
      <aside className="mag-disclaimer">
        <div className="in">
          본 콘텐츠는 정보·교육 목적이며 의료행위(진단·치료)가 아닙니다. 개인의 증상·치료는 반드시 담당 의료진과 상의하세요. 보조치료는
          표준 암 치료를 대체하지 않는 보완적 관리입니다.
        </div>
      </aside>
    </div>
  );
}
