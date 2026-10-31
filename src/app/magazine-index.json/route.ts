import { MAGAZINE, SITE } from "../../content/magazine";
import type { Block } from "../../content/magazine";

// blocks → 평문. 중복 검사(dedup-gate)가 본문 유사도를 계산할 입력.
function flatten(blocks: Block[]): string {
  const out: string[] = [];
  for (const b of blocks) {
    if (b.type === "p") out.push(b.text);
    else if (b.type === "h2" || b.type === "h3") out.push(b.text);
    else if (b.type === "ul") out.push(b.items.join(" "));
    else if (b.type === "callout") out.push(`${b.title} ${b.text}`);
    // svg 블록은 텍스트가 없다 — 건너뛴다.
  }
  return out.join("\n");
}

// 우리 GEO/SEO 시스템이 HTTP로 읽는 기계가독 인덱스.
export function GET() {
  const articles = MAGAZINE.map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    category: a.category,
    publishedAt: a.publishedAt,
    updatedAt: a.updatedAt,
    url: `${SITE}/magazine/${a.slug}`,
    text: flatten(a.blocks) + (a.references?.length ? "\n참고 자료\n" + a.references.map((r) => `${r.label} ${r.url}`).join("\n") : ""),
  }));
  return Response.json(
    { count: articles.length, articles },
    { headers: { "Cache-Control": "public, max-age=600" } },
  );
}
