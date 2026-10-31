import type { Metadata } from "next";
import { SITE } from "../../content/contact";
import { Icon } from "../../components/icons";
import { DownloadSection } from "../../components/sections";
import "../home.css";

export const metadata: Metadata = {
  title: "OnCoCare 앱 다운로드 — 서울온케어의원의 AI 케어 앱",
  description:
    "서울온케어의원의 AI 케어 앱 OnCoCare. iPhone(App Store)·Android(Google Play) 무료 다운로드. 컨디션·식사·검사결과지 기록과 출처가 붙은 케어챗.",
  alternates: { canonical: `${SITE}/download` },
  openGraph: {
    type: "website",
    url: `${SITE}/download`,
    title: "OnCoCare 앱 다운로드 | 서울온케어의원",
    description: "서울온케어의원의 AI 케어 앱. App Store·Google Play 무료 다운로드.",
    images: [{ url: "/clinic/og-home.jpg", width: 1200, height: 630, alt: "서울온케어의원" }],
  },
};

export default function DownloadPage() {
  return (
    <main className="site">
      <DownloadSection asPageHead />
      <section className="dl-detail" aria-labelledby="how-h">
        <div className="wrap">
          <div className="grid2">
            <div>
              <div className="label">시작하는 방법</div>
              <h2 id="how-h" style={{ marginTop: 20 }}>
                설치하고,
                <br />
                오늘 하루를 남겨 보세요.
              </h2>
            </div>
            <ul className="adm-list">
              <li>
                <Icon name="download" />
                <div>
                  <b>스토어에서 OnCoCare 설치</b>
                  <span>iPhone은 App Store, Android는 Google Play에서 무료로 설치합니다.</span>
                </div>
              </li>
              <li>
                <Icon name="app" />
                <div>
                  <b>가입 후 치료 정보 입력</b>
                  <span>암종과 치료 단계를 입력하면 그에 맞춰 기록 항목과 안내가 정리됩니다.</span>
                </div>
              </li>
              <li>
                <Icon name="sun" />
                <div>
                  <b>매일 체크인</b>
                  <span>컨디션·식사·복약을 남기면 지난 기록과 비교해 달라진 점을 알려 드립니다.</span>
                </div>
              </li>
              <li>
                <Icon name="lock" />
                <div>
                  <b>개인정보</b>
                  <span>
                    검사지·약봉투 원본 사진은 분석이 끝나면 지웁니다. 자세한 기준은 <a href="/privacy">개인정보처리방침</a>을 확인하세요.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <p className="note-line">
            <Icon name="shield" />
            <span>OnCoCare의 모든 안내는 정보·교육 목적이며 진단이나 처방이 아닙니다. 응급 상황에는 119 또는 가까운 응급실을 이용해 주세요.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
