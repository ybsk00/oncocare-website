import { MAGAZINE, SITE } from "./magazine";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// 온코케어 매거진 RSS 2.0 — /feed.xml 과 /magazine/rss.xml 에서 공유.
export function magazineRssXml(): string {
  const items = MAGAZINE.map((a) => {
    const url = `${SITE}/magazine/${a.slug}`;
    const pub = new Date(`${a.publishedAt}T00:00:00Z`).toUTCString();
    return `    <item>
      <title>${esc(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(a.description)}</description>
      <category>${esc(a.category)}</category>
      <pubDate>${pub}</pubDate>
    </item>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>온코케어 매거진</title>
    <link>${SITE}/magazine</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>근거로 읽는 암 케어 이야기 — 영양·증상관리·임상시험·검사 해석·마음 돌봄</description>
    <language>ko-KR</language>
${items}
  </channel>
</rss>`;
}

export function rssResponse(): Response {
  return new Response(magazineRssXml(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
