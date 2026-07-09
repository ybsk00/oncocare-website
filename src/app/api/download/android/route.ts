import { NextResponse } from "next/server";

// 안드로이드 APK 안정 리다이렉트 — 빌드 시 이 한 곳의 URL만 갱신하면 된다.
const APK_URL = "https://expo.dev/artifacts/eas/rVqXQC31dQvhNtQLYNAvE8.apk";

export async function GET() {
  return NextResponse.redirect(APK_URL, 302);
}
