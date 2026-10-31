/**
 * 콘텐츠 3종(SVG 1 + 이미지 1 + 중간 배너 1) — 글 렌더 시 삽입 (2026-10-09 신설)
 *
 * 사용자 지시(10/9): "svg 1개 이미지 1개 배너 1개가 전부 있어야 … 전환율을 높여야" — 작성된 모든 글 + 앞으로 발행될 글.
 * - 원래 본문에 SVG 가 없으면 → 「이 글의 핵심」 인라인 SVG 카드(본문 소제목·목록 문구만 사용, 새 주장 없음)
 * - 원래 본문에 래스터 이미지가 없고 대표 이미지가 렌더돼 있으면(media3-heroes.json) → 대표 이미지(1600x900)
 * - 규칙 원본: GEO시스템/scripts/lib/media3.mjs (같은 배치 규칙: 이미지=첫 본문 h2 바로 앞 · SVG=본문 h2 3/4 지점 앞, h2<3 이면 꼬리 섹션 앞)
 * - 매거진(블록 구조): withMedia3Blocks() 가 원래 블록에 svg 가 없으면 「이 글의 핵심」 m3svg 블록을 h2 3/4 지점(꼬리 섹션 앞)에 끼운다.
 * - 데이터(DB/본문 원문)는 바꾸지 않는다 → published_at·updated_at 영향 없음.
 */
import type { Block } from "./magazine";
const heroes: string[] = []; // 매거진은 글마다 대표 이미지(hero)가 이미 페이지에 그려진다 → 이미지 삽입 없음, SVG 카드만

const CFG = { brandName: "서울온케어의원 매거진", c1: "#B9560C", c2: "#F2871F", label: "이 글의 핵심", heroBase: "/magazine/img" };
const HEROES = new Set<string>(heroes as string[]);

const TAIL_H2 =
  /참고\s*(문헌|자료|논문)|출처|references?|faq|자주\s*묻는|관련\s*(글|칼럼|정보|아티클)|함께\s*읽(으면\s*좋은|을\s*만한|어\s*볼)\s*(글|칼럼|자료|아티클|기사|정보)|필독|공식\s*홈|더\s*알아보|법률\s*근거|관계\s*법령|^추천\s*(글|칼럼)\s*$|目次|参考|よくある/i;

/** 꼬리 섹션 h2 — 30자 이하만(긴 본문 소제목 오판 방지, 10/9 공용 보정 isTail) */
const isTail = (t: string) => t.length <= 30 && TAIL_H2.test(t);

const strip = (s: string) =>
  s.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();
const escXml = (s: string) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const noBanner = (h: string) => h.replace(/<!-- MIDBANNER:START -->[\s\S]*?<!-- MIDBANNER:END -->/g, "").replace(/<a class="midbanner[\s\S]*?<\/a>/g, "");

export function analyzeBody(html: string): { svg: number; img: number } {
  const body = noBanner(html);
  const srcs = [...body.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi)].map((m) => m[1]);
  const isSvg = (s: string) => /\.svg(\?|$)|^data:image\/svg/i.test(s);
  // 장식 아이콘 <svg aria-hidden="true"> 는 SVG 로 세지 않는다(10/9 공용 보정)
  const svgs = [...body.matchAll(/<svg\b[^>]*>/gi)].filter((m) => !/aria-hidden="true"/i.test(m[0])).length;
  return { svg: svgs + srcs.filter(isSvg).length, img: srcs.filter((s) => !isSvg(s)).length };
}

function bodyH2s(html: string): { h2s: { at: number; text: string }[]; tailAt: number } {
  const out: { at: number; text: string }[] = [];
  let tailAt = html.length;
  const rx = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(html))) {
    const t = strip(m[1]);
    if (isTail(t)) { tailAt = m.index; break; }
    out.push({ at: m.index, text: t });
  }
  return { h2s: out, tailAt };
}

export function cardPoints(regionHtml: string): string[] {
  const region = noBanner(regionHtml);
  const clean = (t: string) => t.replace(/^(Q\.|Q\d+\.|\d+[.)]|[①-⑳]|순서\s*[①-⑳]|STEP\s*\d+|[0-9]+단계)\s*/i, "").replace(/\s*[—–-]\s*$/, "").trim();
  const pts: string[] = [];
  const push = (t: string) => { t = clean(t); if (t.length >= 4 && !pts.includes(t)) pts.push(t); };
  for (const m of region.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)) push(strip(m[1]));
  if (pts.length < 3) for (const m of region.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)) { if (pts.length >= 5) break; push(strip(m[1])); }
  if (pts.length < 3) for (const m of region.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)) { if (pts.length >= 5) break; const t = strip(m[1]); if (t.length <= 60) push(t); }
  if (pts.length < 3) {
    const txt = strip(region.replace(/<(figure|table|nav|aside)[\s\S]*?<\/\1>/gi, " "));
    for (const s of txt.split(/(?<=[.?!。])\s+/)) { if (pts.length >= 4) break; if (s.length >= 12 && s.length <= 70) push(s); }
  }
  return pts.slice(0, 5);
}

function wrapText(t: string, per: number, maxLines = 2): string[] {
  const lines: string[] = [];
  let cur = "";
  for (const w of t.split(" ")) {
    const nx = cur ? `${cur} ${w}` : w;
    if (nx.length > per && cur) { lines.push(cur); cur = w; } else cur = nx;
    if (cur.length > per) { lines.push(cur.slice(0, per)); cur = cur.slice(per); }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) { const k = lines.slice(0, maxLines); k[maxLines - 1] = k[maxLines - 1].slice(0, per - 1) + "…"; return k; }
  return lines;
}

/** 인라인 SVG 카드 — viewBox 480 폭(모바일 ~310px 슬롯에서 글자 ≥11px) */
export function svgCard(title: string, points: string[]): string {
  const { brandName, c1, c2, label } = CFG;
  const W = 480, padX = 26, per = 20, tPer = 22;
  const uid = "m3" + (Math.abs([...title].reduce((h, c) => (h * 31 + (c.codePointAt(0) ?? 0)) | 0, 7)) % 1e6);
  const rows = points.map((p) => wrapText(p, per, 3));
  const tLines = wrapText(title, tPer, 3);
  const parts: string[] = [];
  const headH = 50 + tLines.length * 27;
  parts.push(`<rect x="0" y="0" width="${W}" height="${headH}" fill="url(#${uid}g)"/>`);
  parts.push(`<text x="${padX}" y="32" fill="#ffffff" font-size="13" font-weight="700" letter-spacing="1" opacity="0.88">${escXml(label)}</text>`);
  tLines.forEach((l, i) => parts.push(`<text x="${padX}" y="${62 + i * 27}" fill="#ffffff" font-size="20" font-weight="800">${escXml(l)}</text>`));
  let y = headH + 18;
  rows.forEach((ls, i) => {
    const h = 20 + ls.length * 24;
    parts.push(`<rect x="${padX - 10}" y="${y - 4}" width="${W - 2 * (padX - 10)}" height="${h}" rx="10" fill="${c1}" fill-opacity="0.05"/>`);
    parts.push(`<circle cx="${padX + 11}" cy="${y + 15}" r="11" fill="${c2}"/>`);
    parts.push(`<text x="${padX + 11}" y="${y + 20}" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle">${i + 1}</text>`);
    ls.forEach((l, j) => parts.push(`<text x="${padX + 32}" y="${y + 21 + j * 24}" fill="#2D2D2D" font-size="17" font-weight="${j === 0 ? 700 : 600}">${escXml(l)}</text>`));
    y += h + 9;
  });
  y += 6;
  parts.push(`<line x1="${padX}" y1="${y}" x2="${W - padX}" y2="${y}" stroke="${c1}" stroke-opacity="0.15"/>`);
  parts.push(`<text x="${W - padX}" y="${y + 24}" fill="${c1}" font-size="13" font-weight="700" text-anchor="end">${escXml(brandName)}</text>`);
  const H = y + 38;
  const aria = `${label}: ${points.join(" / ")}`;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${escXml(aria)}" style="display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Malgun Gothic',sans-serif">` +
    `<defs><linearGradient id="${uid}g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>` +
    `<clipPath id="${uid}c"><rect width="${W}" height="${H}" rx="16"/></clipPath></defs>` +
    `<g clip-path="url(#${uid}c)"><rect width="${W}" height="${H}" fill="#ffffff"/>${parts.join("")}</g>` +
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="16" fill="none" stroke="${c1}" stroke-opacity="0.18"/></svg>`
  );
}

export const svgFigure = (svg: string) => `<!-- M3:SVG --><figure class="m3-card not-prose" style="margin:2.2em 0">${svg}</figure><!-- /M3:SVG -->`;
const imgFigure = (src: string, alt: string) =>
  `<!-- M3:IMG --><figure class="m3-hero not-prose" style="margin:1.8em 0"><img src="${escXml(src)}" alt="${escXml(alt)}" width="1600" height="900" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;border-radius:14px" /></figure><!-- /M3:IMG -->`;

/** 렌더 시 삽입 — 원래 본문에 없는 것만, 마커가 이미 있으면 그대로(멱등) */
export function withMedia3(bodyHtml: string, slug: string, title: string): string {
  if (!bodyHtml || bodyHtml.includes("<!-- M3:")) return bodyHtml;
  const a = analyzeBody(bodyHtml);
  const { h2s, tailAt } = bodyH2s(bodyHtml);
  const ins: [number, string][] = [];
  if (a.svg === 0) {
    const pts = cardPoints(bodyHtml.slice(0, tailAt));
    if (pts.length >= 2) {
      const at = h2s.length >= 3 ? h2s[Math.floor(h2s.length * 0.75)].at : tailAt;
      ins.push([at, svgFigure(svgCard(title, pts)) + "\n"]);
    }
  }
  if (a.img === 0 && HEROES.has(slug)) {
    const firstH2 = h2s[0]?.at ?? tailAt;
    const at = firstH2; // 10/9 보정: 첫 문단 뒤는 요약 박스 안일 수 있다 → 첫 본문 h2 바로 앞
    ins.push([at, "\n" + imgFigure(`${CFG.heroBase}/${encodeURIComponent(slug)}.webp`, title) + "\n"]);
  }
  ins.sort((x, y) => y[0] - x[0]);
  let out = bodyHtml;
  for (const [at, s] of ins) out = out.slice(0, at) + s + out.slice(at);
  return out;
}

/** 매거진 블록용 — 원래 블록에 svg 가 없으면 m3svg 블록을 끼워 반환(데이터는 그대로) */
export function withMedia3Blocks(blocks: Block[], title: string): Block[] {
  if (blocks.some((b) => b.type === "svg" || b.type === "m3svg")) return blocks;
  const h2s: number[] = [];
  let tail = blocks.length;
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type !== "h2") continue;
    if (isTail(strip(b.text))) { tail = i; break; }
    h2s.push(i);
  }
  const html = blocks.slice(0, tail).map((b) =>
    b.type === "h2" ? `<h2>${b.text}</h2>` : b.type === "h3" ? `<h3>${b.text}</h3>` : b.type === "ul" ? `<ul>${b.items.map((t) => `<li>${t}</li>`).join("")}</ul>` : b.type === "p" ? `<p>${b.text}</p>` : "",
  ).join("\n");
  const pts = cardPoints(html);
  if (pts.length < 2) return blocks;
  const at = h2s.length >= 3 ? h2s[Math.floor(h2s.length * 0.75)] : tail;
  return [...blocks.slice(0, at), { type: "m3svg", html: svgFigure(svgCard(title, pts)) }, ...blocks.slice(at)];
}
