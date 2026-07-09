import type { MetadataRoute } from "next";

const SITE = "https://oncocare.co.kr";

// 검색·생성엔진 봇 허용 + 앱/사설 경로 차단. 사이트맵 지정.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin",
          "/login",
          "/signup",
          "/onboarding",
          "/dashboard",
          "/chat",
          "/nutrition",
          "/records",
          "/caregiver",
          "/family",
          "/hospital",
          "/ngs",
          "/trials",
          "/staff-dashboard",
          "/staff-patients",
          "/staff-alerts",
          "/staff-analytics",
          "/account-deletion",
        ],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
