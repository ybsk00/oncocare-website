import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "https://oncocare.co.kr";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5C8073",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "온코케어 AI — 암 치료의 모든 순간 곁에서",
    template: "%s | 온코케어 AI",
  },
  description:
    "9명의 AI 전문팀이 증상·영양·심리·정보를 24시간 함께 살피고, 필요할 때 의료진과 연결합니다. 검사·판독지 해석, 임상시험 매칭, 복약·영양 관리까지 — 모든 안내는 정보·교육·영양관리 보조이며 진단·치료는 담당 의료진과 상의하세요.",
  keywords: [
    "온코케어",
    "온코케어 AI",
    "암 케어 앱",
    "암환자 앱",
    "항암 관리",
    "임상시험 찾기",
    "검사결과지 해석",
    "암 영양관리",
    "보조치료",
    "서울온케어의원",
  ],
  applicationName: "온코케어 AI",
  authors: [{ name: "루미브리즈 (LumiBreeze)" }],
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE,
    siteName: "온코케어 AI",
    title: "온코케어 AI — 암 치료의 모든 순간 곁에서",
    description:
      "9명의 AI 전문팀이 증상·영양·심리·정보를 24시간 함께 살피고, 필요할 때 의료진과 연결합니다. 진단·치료는 늘 담당 주치의와 함께.",
    images: [
      {
        url: "/landing/hero-family.png",
        width: 928,
        height: 1152,
        alt: "온코케어 AI — 곁에서 손을 잡아주는 케어",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "온코케어 AI — 암 치료의 모든 순간 곁에서",
    description:
      "암환자와 보호자를 위한 AI 케어 동반자. 증상·영양·심리·정보를 24시간 함께 살펴요.",
    images: ["/landing/hero-family.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // 파비콘: 브라우저 자동 탐색(/favicon.ico)에만 의존하지 않고 명시 선언.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  // 검색엔진 소유확인 — Google(HTML 파일 방식과 병행) · 네이버 서치어드바이저
  verification: {
    google: "googlec189ed635fa1310c",
    other: {
      "naver-site-verification": "e58324b1464472ea9f7f6cc4eec22f5ed3c3de31",
    },
  },
};

// ── 구조화 데이터(JSON-LD): 검색·생성엔진(GEO)이 정확히 읽도록 ──
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "주식회사 루미브리즈",
    alternateName: "LumiBreeze",
    url: SITE,
    logo: `${SITE}/landing/hero-family.png`,
    brand: { "@type": "Brand", name: "온코케어 AI" },
    sameAs: [
      "https://play.google.com/store/apps/details?id=ai.oncocare.app",
      "https://apps.apple.com/kr/app/id6780368713",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "온코케어 AI",
    inLanguage: "ko-KR",
    publisher: { "@id": `${SITE}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE}/#clinic`,
    name: "서울온케어의원",
    description:
      "암환자 보조치료·항암 보조치료 중심의 의원. 영양관리·증상관리·도수재활·심리지원 등 통합지지케어 제공.",
    url: SITE,
    telephone: "+82-1577-7998",
    medicalSpecialty: ["Oncologic", "Nutrition"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "다산중앙로123번길 21-5, 8·9층",
      addressLocality: "남양주시",
      addressRegion: "경기도",
      addressCountry: "KR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 37.6116, longitude: 127.1558 },
    employee: {
      "@type": "Person",
      name: "이찬용",
      jobTitle: "대표원장",
    },
    parentOrganization: { "@id": `${SITE}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "온코케어 AI",
    operatingSystem: "ANDROID, IOS",
    applicationCategory: "MedicalApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    downloadUrl: [
      "https://play.google.com/store/apps/details?id=ai.oncocare.app",
      "https://apps.apple.com/kr/app/id6780368713",
    ],
    publisher: { "@id": `${SITE}/#organization` },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="온코케어 매거진"
          href="/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
