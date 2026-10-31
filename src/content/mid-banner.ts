// 글 중간 전환 배너 (2026-10-09 신설 — 전 고객사 공용 규칙 이식)
// 원본 규칙: GEO시스템 lumiaeo/lib/sites/mid-banner.ts · 설정 정본: GEO시스템 scripts/mid-banner/brands/oncocare.json
// 이미지: public/midbanner/<key>.webp(2000x667) · <key>-m.webp(1080x880, ≤640px)
// 위치: 본문 블록의 h2 중 꼬리 섹션(참고·FAQ·관련 글…) 앞까지의 가운데 h2 바로 앞. h2 가 2개 미만이면 넣지 않는다.
import type { Block } from "./magazine";

type Variant = { key: string; headline: string[]; href: string; match: string[] };

export const MIDBANNER = {
  name: "서울온케어의원 OnCoCare",
  official: "https://oncocare.co.kr/",
  urlBase: "/midbanner",
  defaultVariant: "app",
  variants: [
    { key: "trial", headline: ["나에게 맞는 임상시험,", "근거와 함께 찾아보세요"], href: "https://oncocare.co.kr/#app", match: ["clinical-trial", "임상시험"] },
    { key: "lab", headline: ["어려운 검사 결과지,", "쉬운 말로 보고 싶다면"], href: "https://oncocare.co.kr/#app", match: ["lab-result", "tumor-marker", "marker", "검사", "판독", "표지자"] },
    { key: "nutrition", headline: ["항암 중 식사와 입맛,", "기록으로 챙겨 보세요"], href: "https://oncocare.co.kr/#app", match: ["eating", "diet", "taste", "appetite", "nutrition", "식단", "식사", "입맛", "영양", "미각"] },
    { key: "caregiver", headline: ["환자와 보호자가", "함께 기록해 보세요"], href: "https://oncocare.co.kr/#app", match: ["caregiver", "admission", "checklist", "schedule", "cycle", "diary", "record", "app", "보호자", "준비물", "일정", "차수", "일지", "기록", "어플", "앱"] },
    { key: "symptom", headline: ["부작용과 증상,", "매일 기록하고 계신가요?"], href: "https://oncocare.co.kr/#app", match: ["side-effect", "irae", "nausea", "mucositis", "neuropathy", "skin", "diarrhea", "pain", "hair", "fever", "neutrophil", "when-to-call", "chemoport", "radiotherapy", "부작용", "증상", "구역", "구토", "통증", "발열", "호중구", "탈모", "저림", "구내염"] },
    { key: "app", headline: ["치료의 모든 순간,", "곁에서 함께하는 AI 케어"], href: "https://oncocare.co.kr/#download", match: [] },
  ] as Variant[],
};

const TAIL_H2 =
  /참고\s*(문헌|자료|논문)|출처|references?|faq|자주\s*묻는|관련\s*(글|칼럼|정보|아티클)|함께\s*읽|필독|공식\s*홈|더\s*알아보|법률\s*근거|관계\s*법령|추천\s*글|目次|参考|よくある/i;

export function pickMidBanner(slug: string, title: string): Variant {
  const text = `${slug} ${title}`;
  for (const v of MIDBANNER.variants) {
    if (v.match.some((re) => new RegExp(re, "i").test(text))) return v;
  }
  return MIDBANNER.variants.find((v) => v.key === MIDBANNER.defaultVariant) ?? MIDBANNER.variants[0];
}

/** 배너를 넣을 블록 인덱스(그 h2 블록 바로 앞). 넣지 않으면 -1 */
export function midBannerIndex(blocks: Block[]): number {
  const h2s: number[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type !== "h2") continue;
    if (TAIL_H2.test(b.text.replace(/<[^>]+>/g, "").trim())) break;
    h2s.push(i);
  }
  if (h2s.length < 2) return -1;
  return h2s[Math.floor(h2s.length / 2)];
}
