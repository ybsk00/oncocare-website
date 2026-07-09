import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MAGAZINE, SITE, getArticle, allSlugs } from "../../../content/magazine";
import { BlockRenderer } from "../_components";

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
      reviewedBy: {
        "@type": "Person",
        name: "이찬용",
        jobTitle: "대표원장",
        worksFor: { "@type": "MedicalClinic", name: "서울온케어의원" },
      },
      publisher: {
        "@type": "Organization",
        name: "주식회사 루미브리즈",
        logo: { "@type": "ImageObject", url: `${SITE}/landing/hero-family.png` },
      },
      about: { "@type": "MedicalCondition", name: "암 (Cancer)" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
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

  const more = MAGAZINE.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mag-article">
        <nav className="mag-breadcrumb">
          <Link href="/">홈</Link> › <Link href="/magazine">매거진</Link> › <span>{a.category}</span>
        </nav>
        <span className="a-cat" style={{ color: a.categoryColor, background: `color-mix(in srgb, ${a.categoryColor} 13%, #fff)` }}>
          {a.category}
        </span>
        <h1>{a.title}</h1>
        <p className="a-desc">{a.description}</p>
        <div className="a-meta">
          <span><b>{a.author}</b></span>
          <span>의료 감수 <b>{a.reviewedBy}</b></span>
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
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        <BlockRenderer blocks={a.blocks} />

        <section className="mag-faq">
          <h2 id="faq">자주 묻는 질문</h2>
          {a.faq.map((f, i) => (
            <details key={i}>
              <summary>{f.q}</summary>
              <div className="ans">{f.a}</div>
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
                  <span className="mag-cat" style={{ color: m.categoryColor, background: `color-mix(in srgb, ${m.categoryColor} 13%, #fff)` }}>
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
