import { NextResponse } from "next/server";
import { STORE } from "../../../../content/contact";

// 안드로이드 다운로드 안정 경로 → Google Play.
// 2026-10-31: EAS 아티팩트 직링크(APK)가 만료돼 400 BUILD_NOT_FOUND 였다. 만료되는 링크 대신 스토어로 보낸다.
export function GET() {
  return NextResponse.redirect(STORE.googlePlay, 302);
}
