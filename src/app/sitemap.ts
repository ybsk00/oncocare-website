import type { MetadataRoute } from "next";
import { MAGAZINE } from "../content/magazine";

const SITE = "https://oncocare.co.kr";

// 공개 페이지 + 매거진 글 사이트맵.
export default function sitemap(): MetadataRoute.Sitemap {
  const articles: MetadataRoute.Sitemap = MAGAZINE.map((a) => ({
    url: `${SITE}/magazine/${a.slug}`,
    lastModified: new Date(`${a.updatedAt}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/magazine`, changeFrequency: "weekly", priority: 0.8 },
    ...articles,
    { url: `${SITE}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
