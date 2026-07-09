import React from "react";
import type { Block } from "../../content/magazine";

/* ── 인라인 SVG 일러스트 (기사 이해 보조) ── */
export const ArticleSvg: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "plate": // 건강한 한 접시 구성
      return (
        <svg viewBox="0 0 420 260" className="mag-svg" role="img" aria-label="건강한 한 접시 — 절반 채소, 1/4 단백질, 1/4 곡물">
          <circle cx="130" cy="130" r="96" fill="#FFFFFF" stroke="#E5DDD0" strokeWidth="3" />
          <path d="M130 34 A96 96 0 0 0 130 226 Z" fill="#DCE7DF" />
          <path d="M130 130 L130 34 A96 96 0 0 1 226 130 Z" fill="#F0DCCF" />
          <path d="M130 130 L226 130 A96 96 0 0 1 130 226 Z" fill="#EFE3C7" />
          <circle cx="130" cy="130" r="96" fill="none" stroke="#E5DDD0" strokeWidth="3" />
          <g fontFamily="inherit">
            <g><rect x="270" y="60" width="16" height="16" rx="4" fill="#8FB09C" /><text x="296" y="73" className="mag-svg-t">채소·과일 ½</text></g>
            <g><rect x="270" y="118" width="16" height="16" rx="4" fill="#D8A98C" /><text x="296" y="131" className="mag-svg-t">단백질 ¼</text></g>
            <g><rect x="270" y="176" width="16" height="16" rx="4" fill="#DCC98A" /><text x="296" y="189" className="mag-svg-t">통곡물 ¼</text></g>
          </g>
        </svg>
      );
    case "traffic": // 증상 신호등
      return (
        <svg viewBox="0 0 460 220" className="mag-svg" role="img" aria-label="증상 신호등 — 초록 자가관리, 노랑 병원 연락, 빨강 응급">
          {[
            { y: 26, c: "#5C8073", t: "초록 — 스스로 관리", d: "가벼운 증상은 생활 수칙으로" },
            { y: 90, c: "#E0A93B", t: "노랑 — 병원에 연락", d: "심해지거나 지속되면 케어팀 문의" },
            { y: 154, c: "#C45050", t: "빨강 — 즉시 응급", d: "38℃ 발열·호흡곤란 등 119 우선" },
          ].map((r, i) => (
            <g key={i}>
              <circle cx="34" cy={r.y + 22} r="18" fill={r.c} />
              <text x="70" y={r.y + 18} className="mag-svg-t" fontWeight="700">{r.t}</text>
              <text x="70" y={r.y + 38} className="mag-svg-s">{r.d}</text>
            </g>
          ))}
        </svg>
      );
    case "phases": // 임상시험 단계
      return (
        <svg viewBox="0 0 460 150" className="mag-svg" role="img" aria-label="임상시험 단계 — 1상 안전성, 2상 효과 탐색, 3상 표준치료 비교">
          {[
            { x: 8, c: "#A8BFB5", n: "1상", d: "안전성·용량" },
            { x: 160, c: "#7DA08F", n: "2상", d: "효과 탐색" },
            { x: 312, c: "#5C8073", n: "3상", d: "표준치료 비교" },
          ].map((s, i) => (
            <g key={i}>
              <path d={`M${s.x} 40 h108 l20 30 l-20 30 h-108 l18 -30 Z`} fill={s.c} />
              <text x={s.x + 60} y="66" textAnchor="middle" className="mag-svg-t" fill="#fff" fontWeight="800">{s.n}</text>
              <text x={s.x + 60} y="120" textAnchor="middle" className="mag-svg-s">{s.d}</text>
            </g>
          ))}
        </svg>
      );
    case "labtrend": // 검사 수치 추세 + 정상범위
      return (
        <svg viewBox="0 0 460 200" className="mag-svg" role="img" aria-label="검사 수치 추세 — 한 번의 값보다 변화의 흐름이 중요">
          <rect x="40" y="70" width="390" height="46" fill="#E4ECE7" />
          <text x="436" y="97" className="mag-svg-s" textAnchor="end" transform="translate(-2,0)">정상 범위</text>
          <line x1="40" y1="160" x2="430" y2="160" stroke="#E5DDD0" strokeWidth="2" />
          <line x1="40" y1="24" x2="40" y2="160" stroke="#E5DDD0" strokeWidth="2" />
          <polyline points="70,140 150,96 230,104 310,80 390,92" fill="none" stroke="#5C8073" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {[[70,140],[150,96],[230,104],[310,80],[390,92]].map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="5" fill="#3F5D52" />
          ))}
          <text x="40" y="182" className="mag-svg-s">시간 →</text>
        </svg>
      );
    case "moodweather": // 마음 날씨 5단계
      return (
        <svg viewBox="0 0 480 130" className="mag-svg" role="img" aria-label="마음 날씨 — 맑음부터 폭풍까지 오늘의 컨디션을 부드럽게 표현">
          {[
            { x: 40, c: "#E8B84A", k: "sun" },
            { x: 130, c: "#9BB6A6", k: "part" },
            { x: 220, c: "#9AA7B0", k: "cloud" },
            { x: 310, c: "#7C97B3", k: "rain" },
            { x: 400, c: "#8B6B6B", k: "storm" },
          ].map((w, i) => (
            <g key={i} transform={`translate(${w.x},40)`}>
              {w.k === "sun" && <circle cx="20" cy="20" r="16" fill={w.c} />}
              {w.k !== "sun" && <>
                <circle cx="14" cy="16" r="11" fill={w.c} opacity="0.5" />
                <ellipse cx="24" cy="26" rx="20" ry="13" fill={w.c} />
              </>}
              {(w.k === "rain" || w.k === "storm") && <>
                <line x1="14" y1="42" x2="10" y2="52" stroke={w.c} strokeWidth="3" strokeLinecap="round" />
                <line x1="28" y1="42" x2="24" y2="52" stroke={w.c} strokeWidth="3" strokeLinecap="round" />
              </>}
              {w.k === "storm" && <path d="M34 40 l-8 12 h7 l-6 12" fill="none" stroke="#E0A93B" strokeWidth="3" strokeLinejoin="round" />}
            </g>
          ))}
          <text x="240" y="120" textAnchor="middle" className="mag-svg-s">맑음 · 구름조금 · 흐림 · 비 · 폭풍</text>
        </svg>
      );
    default:
      return null;
  }
};

/* ── 블록 렌더러 (H2/H3·목록·콜아웃·SVG) ── */
export const BlockRenderer: React.FC<{ blocks: Block[] }> = ({ blocks }) => (
  <>
    {blocks.map((b, i) => {
      switch (b.type) {
        case "p":
          return <p key={i}>{b.text}</p>;
        case "h2":
          return (
            <h2 key={i} id={b.id}>
              {b.text}
            </h2>
          );
        case "h3":
          return <h3 key={i}>{b.text}</h3>;
        case "ul":
          return (
            <ul key={i} className="mag-ul">
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        case "callout":
          return (
            <aside key={i} className={`mag-callout ${b.tone}`}>
              <div className="mc-title">{b.title}</div>
              <div className="mc-text">{b.text}</div>
            </aside>
          );
        case "svg":
          return (
            <figure key={i} className="mag-figure">
              <ArticleSvg name={b.name} />
            </figure>
          );
        default:
          return null;
      }
    })}
  </>
);
