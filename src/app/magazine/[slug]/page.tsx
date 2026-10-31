import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MAGAZINE, SITE, getArticle, allSlugs } from "../../../content/magazine";
import { BlockRenderer, Inline, stripTags } from "../_components";
import { MIDBANNER, midBannerIndex, pickMidBanner } from "../../../content/mid-banner";
import { withMedia3Blocks } from "../../../content/media3";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

const fmt = (iso: string) => `${iso.slice(0, 4)}.${iso.slice(5, 7)}.${iso.slice(8, 10)}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "매거진" };
  const url = `${SITE}/magazine/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: a.title,
      description: a.description,
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
      images: [{ url: `/magazine/img/${a.hero}.webp`, width: 1200, height: 800, alt: a.heroAlt }],
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.description },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const url = `${SITE}/magazine/${a.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalWebPage", "Article"],
      headline: a.title,
      description: a.description,
      image: `${SITE}/magazine/img/${a.hero}.webp`,
      datePublished: a.publishedAt,
      dateModified: a.updatedAt,
      lastReviewed: a.updatedAt,
      inLanguage: "ko-KR",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: a.author },
      // 감수 표기가 편집팀인 글은 편집팀(Organization)으로 — 화면 표기와 구조화데이터를 일치시킨다.
      reviewedBy: a.reviewedBy.includes("이찬용")
        ? {
            "@type": "Person",
            name: "이찬용",
            jobTitle: "대표원장",
            worksFor: { "@type": "MedicalClinic", name: "서울온케어의원" },
          }
        : { "@type": "Organization", name: a.reviewedBy },
      ...(a.references?.length
        ? { citation: a.references.map((r) => ({ "@type": "CreativeWork", name: r.label, url: r.url })) }
        : {}),
      publisher: {
        "@type": "Organization",
        name: "서울온케어의원",
        logo: { "@type": "ImageObject", url: `${SITE}/clinic/socc-mark-512.png` },
      },
      about: { "@type": "MedicalCondition", name: "암 (Cancer)" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE },
        { "@type": "ListItem", position: 2, name: "매거진", item: `${SITE}/magazine` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];

  // 글 중간 전환 배너(2026-10-09) — 가운데 h2 앞에 공식 홈(앱 소개) 링크 배너
  // 「이 글의 핵심」 SVG 카드(원래 블록에 svg 가 없을 때만, 2026-10-09 · content/media3.ts)
  const blocks = withMedia3Blocks(a.blocks, a.title);
  const mbAt = midBannerIndex(blocks);
  const mb = pickMidBanner(a.slug, a.title);

  const more = MAGAZINE.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mag-article">
        <nav className="mag-breadcrumb">
          <Link href="/">홈</Link> › <Link href="/magazine">매거진</Link> › <span>{a.category}</span>
        </nav>
        <span className="a-cat">
          {a.category}
        </span>
        <h1>{a.title}</h1>
        <p className="a-desc">{a.description}</p>
        <div className="a-meta">
          <span><b>{a.author}</b></span>
          <span>{a.reviewedBy.includes("이찬용") ? "의료 감수" : "검토"} <b>{a.reviewedBy}</b></span>
          <span>발행 {fmt(a.publishedAt)}</span>
          <span>읽기 {a.readMin}분</span>
        </div>

        <figure className="mag-figure-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/magazine/img/${a.hero}.webp`} alt={a.heroAlt} width={1200} height={800} />
        </figure>

        <div className="mag-tldr">
          <div className="t">핵심 요약 (TL;DR)</div>
          <ul>
            {a.tldr.map((t, i) => (
              <li key={i}><Inline text={t} /></li>
            ))}
          </ul>
        </div>

        {mbAt < 0 ? (
          <BlockRenderer blocks={blocks} />
        ) : (
          <>
            <BlockRenderer blocks={blocks.slice(0, mbAt)} />
            <a
              className="midbanner"
              href={mb.href}
              target="_blank"
              rel="noopener"
              style={{ display: "block", margin: "2.4em 0", borderRadius: 14, overflow: "hidden", lineHeight: 0, boxShadow: "0 8px 24px rgba(15,30,60,.12)" }}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet={`${MIDBANNER.urlBase}/${mb.key}-m.webp`} width={1080} height={880} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${MIDBANNER.urlBase}/${mb.key}.webp`}
                  width={2000}
                  height={667}
                  alt={`${mb.headline.join(" ")} — ${MIDBANNER.name} 공식 홈페이지 바로가기`}
                  loading="lazy"
                  decoding="async"
                  style={{ display: "block", width: "100%", height: "auto", margin: 0, borderRadius: 0 }}
                />
              </picture>
            </a>
            <BlockRenderer blocks={blocks.slice(mbAt)} />
          </>
        )}

        {a.appLinks && (
          <aside className="mag-callout info">
            <div className="mc-title">서울온케어의원 AI 케어 앱 OnCoCare 받기</div>
            <div className="mc-text">
              <a href="https://play.google.com/store/apps/details?id=ai.oncocare.app" target="_blank" rel="noopener">Google Play</a>
              {" · "}
              <a href="https://apps.apple.com/kr/app/id6780368713" target="_blank" rel="noopener">App Store</a>
              {" — 기록과 정보 정리를 돕는 앱이며, 의학적 판단은 담당 의료진이 합니다."}
            </div>
          </aside>
        )}

        {a.related && a.related.length > 0 && (
          <section className="mag-related">
            <h2 id="related">함께 읽기</h2>
            <ul className="mag-ul">
              {a.related.map((s) => {
                const r = MAGAZINE.find((x) => x.slug === s);
                return r ? (
                  <li key={s}>
                    <Link href={`/magazine/${r.slug}`}>{r.title}</Link>
                  </li>
                ) : null;
              })}
            </ul>
          </section>
        )}

        {a.references && a.references.length > 0 && (
          <section className="mag-refs">
            <h2 id="references">참고 자료</h2>
            <ol className="mag-ul">
              {a.references.map((r, i) => (
                <li key={i}>
                  <a href={r.url} target="_blank" rel="noopener">{r.label}</a>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className="mag-faq">
          <h2 id="faq">자주 묻는 질문</h2>
          {a.faq.map((f, i) => (
            <details key={i}>
              <summary>{stripTags(f.q)}</summary>
              <div className="ans"><Inline text={f.a} /></div>
            </details>
          ))}
        </section>

        <Link className="mag-back" href="/magazine">
          ← 매거진 목록으로
        </Link>
      </article>

      {more.length > 0 && (
        <section className="mag-more">
          <h2>다른 이야기</h2>
          <div className="mag-list">
            {more.map((m) => (
              <Link className="mag-item" key={m.slug} href={`/magazine/${m.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="thumb" src={`/magazine/img/${m.hero}.webp`} alt={m.heroAlt} loading="lazy" width={600} height={400} />
                <div className="body">
                  <span className="mag-cat">
                    {m.category}
                  </span>
                  <h2>{m.title}</h2>
                  <div className="mag-meta">{fmt(m.publishedAt)} · 읽기 {m.readMin}분</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
