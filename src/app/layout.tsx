import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Gothic_A1 } from "next/font/google";
// 네이버 SERP 썸네일 캐러셀용 ItemList (schema.org). 자산 생성 = 26_03/GEO시스템/scripts/_gen-carousel-2026-07-23.mjs
import carouselItemList from "../../public/carousel/itemlist.json";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { CHATBOT, CLINIC, SITE, STORE } from "../content/contact";
import "./globals.css";

// 본문 — Pretendard 자체 호스팅(가변 woff2). Windows 에서도 또렷하게 렌더.
const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  weight: "45 920",
  display: "swap",
  variable: "--font-pretendard",
  fallback: ["Apple SD Gothic Neo", "Malgun Gothic", "system-ui", "sans-serif"],
});

// 디스플레이 — Gothic A1 800~900 (BRAND.md 타이포)
const display = Gothic_A1({
  weight: ["700", "800", "900"],
  display: "swap",
  preload: false,
  variable: "--font-display",
});

const TITLE = "서울온케어의원 — 남양주 다산 통합 암케어 의원";
const DESC =
  "수술·항암·방사선 치료 중과 치료 후 회복기까지, 남양주 다산(8호선 다산역)의 서울온케어의원이 입원·외래 케어로 곁을 지킵니다. 입원상담 010-9982-9941. 퇴원 뒤에는 AI 케어앱 OnCoCare로 집에서의 하루를 이어 살핍니다.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFFCF8",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s | 서울온케어의원",
  },
  description: DESC,
  keywords: [
    "서울온케어의원",
    "남양주 암요양병원",
    "다산 암케어",
    "암 입원",
    "통합 암케어",
    "림프부종",
    "항암식단",
    "OnCoCare",
    "온코케어",
  ],
  applicationName: CLINIC.name,
  authors: [{ name: CLINIC.name }],
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE,
    siteName: CLINIC.name,
    title: TITLE,
    description: DESC,
    images: [{ url: "/clinic/og-home.jpg", width: 1200, height: 630, alt: "서울온케어의원 — 치료의 시간과 일상의 시간 사이" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/clinic/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // 파비콘: SOCC 마크(오렌지). 브라우저 자동 탐색(/favicon.ico)에만 의존하지 않고 명시 선언.
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

// ── 구조화 데이터(JSON-LD) ──
// 2026-10-31: 사이트 전면 주체가 서울온케어의원으로 바뀌어 MedicalClinic 노드를 복원(실주소·상담전화).
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE}/#clinic`,
    name: CLINIC.name,
    alternateName: CLINIC.nameEn,
    description: "남양주 다산의 통합 암케어 의원. 표준 암 치료와 함께 가는 입원·외래 보조치료 프로그램과 AI 케어앱 OnCoCare를 운영합니다.",
    url: SITE,
    logo: `${SITE}/clinic/socc-mark-512.png`,
    image: `${SITE}/clinic/og-home.jpg`,
    telephone: "+82-10-9982-9941",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.street,
      addressLocality: CLINIC.locality,
      addressRegion: CLINIC.region,
      ...(CLINIC.postalCode ? { postalCode: CLINIC.postalCode } : {}),
      addressCountry: "KR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 37.6116, longitude: 127.1558 },
    founder: { "@type": "Person", name: CLINIC.ceo, jobTitle: CLINIC.ceoTitle },
    sameAs: [STORE.appStore, STORE.googlePlay],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: CLINIC.name,
    inLanguage: "ko-KR",
    publisher: { "@id": `${SITE}/#clinic` },
  },
  // 앱은 의원의 AI 케어 앱(종속 표기). HealthApplication — 의료기기로 읽히지 않게(정보·교육 보조).
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "OnCoCare (온코케어 AI)",
    operatingSystem: "ANDROID, IOS",
    applicationCategory: "HealthApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    downloadUrl: [STORE.googlePlay, STORE.appStore],
    provider: { "@id": `${SITE}/#clinic` },
    author: { "@type": "Organization", name: "주식회사 루미브리즈", alternateName: "LumiBreeze" },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${display.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="서울온케어의원 매거진" href="/feed.xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(carouselItemList) }} />
      </head>
      <body>
        {/* GA4 — 루미브리즈 계정 > 온코케어 AI 속성. 매핑 정본 = 26_03/GEO시스템/ga4-config.json */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-R9H7SR1S8P" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R9H7SR1S8P');
        `}</Script>
        {/* 앱 다운로드 전환(App Store·Google Play·APK) — 정본 public/oncocare-cro.js, 테넌트도 같은 파일 사용 */}
        <Script src="/oncocare-cro.js" strategy="afterInteractive" />
        {/* 입원상담 = 의원 그룹웨어 AI 챗봇(방식 2: 자체 버튼에서 window.OncareChatbot.open()). 전 페이지 GNB 버튼용으로 사이트 전역 로드 */}
        <Script src={CHATBOT.embedSrc} strategy="afterInteractive" />
        <SiteHeader />
        <div id="main" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
