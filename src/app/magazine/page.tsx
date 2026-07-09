import type { Metadata } from "next";
import Link from "next/link";
import { MAGAZINE, SITE } from "../../content/magazine";

export const metadata: Metadata = {
  title: "온코케어 매거진 — 근거로 읽는 암 케어 이야기",
  description:
    "암환자와 보호자를 위한 검증된 의학 정보를 쉬운 말로. 영양·증상관리·임상시험·검사 해석·마음 돌봄까지, 의료진 감수 기반 매거진입니다.",
  alternates: {
    canonical: `${SITE}/magazine`,
    types: { "application/rss+xml": `${SITE}/magazine/rss.xml` },
  },
  openGraph: {
    type: "website",
    url: `${SITE}/magazine`,
    title: "온코케어 매거진",
    description: "근거로 읽는 암 케어 이야기 — 영양·증상관리·임상시험·검사 해석·마음 돌봄",
  },
};

const fmt = (iso: string) =>
  `${iso.slice(0, 4)}.${iso.slice(5, 7)}.${iso.slice(8, 10)}`;

export default function MagazineList() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "온코케어 매거진",
    url: `${SITE}/magazine`,
    description: "암환자와 보호자를 위한 근거 기반 케어 매거진",
    hasPart: MAGAZINE.map((a) => ({
      "@type": "Article",
      headline: a.title,
      url: `${SITE}/magazine/${a.slug}`,
      datePublished: a.publishedAt,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <main className="mag-wrap">
        <div className="mag-hero-head">
          <div className="mag-kicker">온코케어 매거진</div>
          <h1>근거로 읽는 암 케어 이야기</h1>
          <p>
            검증된 의학 정보를 쉬운 말로. 영양·증상관리·임상시험·검사 해석·마음 돌봄까지, 서울온케어의원
            의료진 감수 기반으로 전해드립니다.
          </p>
        </div>
        <div className="mag-list">
          {MAGAZINE.map((a) => (
            <Link className="mag-item" key={a.slug} href={`/magazine/${a.slug}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="thumb" src={`/magazine/img/${a.hero}.webp`} alt={a.heroAlt} loading="lazy" width={600} height={400} />
              <div className="body">
                <span className="mag-cat" style={{ color: a.categoryColor, background: `color-mix(in srgb, ${a.categoryColor} 13%, #fff)` }}>
                  {a.category}
                </span>
                <h2>{a.title}</h2>
                <p>{a.description}</p>
                <div className="mag-meta">{fmt(a.publishedAt)} · 읽기 {a.readMin}분</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
