import { MAGAZINE, SITE } from "./magazine";

// CDATA 안에서 위험한 건 종료 시퀀스 ']]>' 하나뿐이다. 그것만 쪼갠다.
const cdata = (s: string) => `<![CDATA[${s.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;

// 온코케어 매거진 RSS 2.0 — /feed.xml 과 /magazine/rss.xml 에서 공유.
export function magazineRssXml(): string {
  const items = MAGAZINE.map((a) => {
    const url = `${SITE}/magazine/${a.slug}`;
    const pub = new Date(`${a.publishedAt}T00:00:00Z`).toUTCString();
    return `    <item>
      <title>${cdata(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${cdata(a.description)}</description>
      <category>${cdata(a.category)}</category>
      <pubDate>${pub}</pubDate>
    </item>`;
  }).join("\n");

  // 🔴 lastBuildDate 누락 결함 수정(2026-07-30) — 네이버 RSS 수집이 신선도를 판단하는 필드.
  //    전 자체도메인 전수 점검에서 온코케어를 포함한 5곳에 이 필드가 없었다.
  const dates = MAGAZINE.map((a) => new Date(`${a.publishedAt}T00:00:00Z`).getTime()).filter((t) => !isNaN(t));
  const lastBuild = dates.length ? new Date(Math.max(...dates)).toUTCString() : null;

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[서울온케어의원 매거진]]></title>
    <link>${SITE}/magazine</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description><![CDATA[근거로 읽는 암 케어 이야기 — 영양·증상관리·임상시험·검사 해석·마음 돌봄]]></description>
    <language>ko-KR</language>
${lastBuild ? `    <lastBuildDate>${lastBuild}</lastBuildDate>\n` : ""}${items}
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
