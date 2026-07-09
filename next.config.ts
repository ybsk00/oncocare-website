import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 마케팅 사이트는 <img> 를 의도적으로 사용(정적 자산). 빌드 시 lint 경고로 막지 않음.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
