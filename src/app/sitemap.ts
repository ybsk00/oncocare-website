import type { MetadataRoute } from "next";
import { MAGAZINE } from "../content/magazine";

const SITE = "https://oncocare.co.kr";
// 홈·매거진 허브의 마지막 수정일 — 홈/허브 마크업(캐러셀 ItemList 포함)을 바꾸면 이 값을 올린다.
// 2026-10-06: 캐러셀 ItemList 7→10 항목(GA 착지 상위 3면 카드 추가).
// 2026-10-07: 매거진 새 글 3편 — 허브 목록·홈 최신 글 4칸 변경.
// 2026-10-10: 수정발행 2편 맨 앞 이동 — 허브 목록·홈 최신 글 4칸 변경.
// 2026-10-31: 서울온케어의원 리브랜딩 — 홈 전면 개편, /admission·/download 신설.
const HUB_UPDATED = "2026-10-31";

// 공개 페이지 + 매거진 글 사이트맵.
export default function sitemap(): MetadataRoute.Sitemap {
  const articles: MetadataRoute.Sitemap = MAGAZINE.map((a) => ({
    url: `${SITE}/magazine/${a.slug}`,
    lastModified: new Date(`${a.updatedAt}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [
    { url: `${SITE}/`, lastModified: new Date(`${HUB_UPDATED}T00:00:00Z`), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/magazine`, lastModified: new Date(`${HUB_UPDATED}T00:00:00Z`), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/admission`, lastModified: new Date(`${HUB_UPDATED}T00:00:00Z`), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/download`, lastModified: new Date(`${HUB_UPDATED}T00:00:00Z`), changeFrequency: "monthly", priority: 0.6 },
    ...articles,
    { url: `${SITE}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
