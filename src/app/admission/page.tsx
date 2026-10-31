import type { Metadata } from "next";
import Image from "next/image";
import { CLINIC, SITE } from "../../content/contact";
import { Icon } from "../../components/icons";
import { ChatbotButton } from "../../components/chatbot-button";
import { AdmissionProcess, ConsultPanel, NonpayNote } from "../../components/sections";
import "../home.css";

/* 입원상담 — 2026-10-31 사용자 결정: 폼·DB 없음. 전화(010-9982-9941) 또는 "병원 상담 연결"(의원 그룹웨어 챗봇)로만 받는다.
   명칭 규칙: 병원 연결은 "병원 상담 연결"(부제 입원·진료 문의). "AI 상담"이라 부르지 않는다 — 앱의 "AI 케어 상담"과 구분. */

export const metadata: Metadata = {
  title: "입원상담 — 입원 절차·병실·비급여 안내",
  description: `서울온케어의원 입원상담. 전화 ${CLINIC.phone} 또는 병원 상담 연결(입원·진료 문의)로 문의하시면 외래 진료를 거쳐 입원 여부와 관리 계획을 함께 정합니다. 입원 절차, 병실, 비급여 안내.`,
  alternates: { canonical: `${SITE}/admission` },
  openGraph: {
    type: "website",
    url: `${SITE}/admission`,
    title: "입원상담 | 서울온케어의원",
    description: `전화 ${CLINIC.phone} 또는 병원 상담 연결. 입원 절차·병실·비급여 안내.`,
    images: [{ url: "/clinic/room-single.webp", width: 1100, height: 590, alt: "서울온케어의원 1인 병실" }],
  },
};

const ROOMS = [
  { src: "room-single", w: 1100, h: 590, alt: "욕실이 딸린 1인 병실", cap: "1인 병실" },
  { src: "room-mirror", w: 1100, h: 590, alt: "창가 쪽 병실", cap: "창가 병실" },
  { src: "room-desk", w: 1100, h: 590, alt: "병동 복도와 데스크", cap: "병동" },
  { src: "lounge-window", w: 1400, h: 817, alt: "창이 넓은 환자 라운지", cap: "환자 라운지" },
  { src: "lounge-curtain", w: 1100, h: 590, alt: "커튼이 드리운 라운지 소파", cap: "라운지" },
  { src: "treatment-hall", w: 1100, h: 590, alt: "처치실 복도", cap: "처치 공간" },
];

export default function AdmissionPage() {
  return (
    <main className="site has-sticky-cta">
      <section className="admit" aria-labelledby="adm-h" style={{ paddingBottom: 0 }}>
        <div className="admit-band">
          <Image src="/clinic/hands.webp" alt="환자의 손을 잡아 주는 의료진" fill priority sizes="100vw" />
          <div className="wrap">
            <div className="label">입원상담</div>
            <h1 id="adm-h">
              입원이 필요한지부터
              <br />
              함께 판단합니다.
            </h1>
          </div>
        </div>
        <div className="wrap">
          <div className="grid">
            <div className="proc" id="process">
              <h2 className="sr">입원 절차</h2>
              <p className="lede" style={{ margin: "0 0 28px" }}>
                전화나 &lsquo;병원 상담 연결&rsquo;로 문의해 주시면 지금 받고 계신 치료 일정과 진료 기록을 확인한 뒤, 외래 진료에서 입원 여부를
                결정합니다.
              </p>
              <AdmissionProcess />
              <div className="contact-box">
                <Icon name="phone" />
                <div>
                  <b>
                    <a href={CLINIC.tel}>{CLINIC.phone}</a>
                  </b>
                  <span>입원상담 상담전화 · 상담 가능 시간은 전화로 안내합니다</span>
                </div>
              </div>
            </div>
            <ConsultPanel headingLevel={2} />
          </div>
        </div>
      </section>

      <section className="adm-info" aria-labelledby="prep-h">
        <div className="wrap">
          <div className="grid2">
            <div>
              <div className="label">외래 진료 준비</div>
              <h2 id="prep-h" style={{ marginTop: 20 }}>
                첫 진료에
                <br />
                가져오실 것
              </h2>
            </div>
            <ul className="adm-list">
              <li>
                <Icon name="doc" />
                <div>
                  <b>진료의뢰서 · 진료기록 요약</b>
                  <span>치료받고 계신 병원의 진단명, 치료 경과, 다음 일정이 담긴 서류가 있으면 상담이 빨라집니다.</span>
                </div>
              </li>
              <li>
                <Icon name="pulse" />
                <div>
                  <b>최근 검사 결과</b>
                  <span>혈액검사·영상 판독지 등 최근 결과지를 가져와 주세요.</span>
                </div>
              </li>
              <li>
                <Icon name="calendar" />
                <div>
                  <b>치료 일정 · 복용 중인 약</b>
                  <span>항암·방사선 일정표와 지금 드시는 약(약봉투 또는 처방전)을 함께 확인합니다.</span>
                </div>
              </li>
              <li>
                <Icon name="info" />
                <div>
                  <b>필요 서류는 상담 때 다시 안내</b>
                  <span>환자 상태에 따라 필요한 서류가 달라질 수 있어, 상담 과정에서 정확히 안내해 드립니다.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="adm-info" id="nonpay" aria-labelledby="nonpay-h">
        <div className="wrap">
          <div className="grid2">
            <div>
              <div className="label">비급여 안내</div>
              <h2 id="nonpay-h" style={{ marginTop: 20 }}>
                진료비는
                <br />
                미리 안내드립니다
              </h2>
            </div>
            <ul className="adm-list">
              <li>
                <Icon name="won" />
                <div>
                  <b>비급여 진료비용</b>
                  <span>
                    <NonpayNote />
                  </span>
                </div>
              </li>
              <li>
                <Icon name="bed" />
                <div>
                  <b>병실 유형과 비용</b>
                  <span>병실 유형별 비용은 상담에서 환자 상황에 맞춰 자세히 안내합니다.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rooms" id="rooms" aria-labelledby="rooms-h" style={{ paddingBottom: 110 }}>
        <div className="wrap">
          <div className="label">병실 둘러보기</div>
          <h2 id="rooms-h" style={{ marginTop: 20 }}>
            머무는 동안,
            <br />
            집처럼 편안하도록.
          </h2>
          <div className="gal2">
            {ROOMS.map((r) => (
              <figure key={r.src}>
                <Image src={`/clinic/${r.src}.webp`} alt={r.alt} width={r.w} height={r.h} sizes="(max-width:820px) 50vw, 400px" />
                <figcaption>{r.cap}</figcaption>
              </figure>
            ))}
          </div>
          <p className="note-line">
            <Icon name="info" />
            <span>
              보조치료는 표준 암 치료를 대체하지 않는 보완적 관리입니다. 입원 여부와 기간은 외래 진료에서 의료진이 결정하며, 주치의의 치료
              계획을 우선합니다.
            </span>
          </p>
        </div>
      </section>

      <div className="sticky-cta" role="region" aria-label="입원상담 바로가기">
        <ChatbotButton className="btn btn-brand" aria-label="병원 상담 연결 — 서울온케어의원 입원·진료 문의">
          <Icon name="hospital-call" />
          병원 상담 연결
        </ChatbotButton>
        <a className="btn btn-line" href={CLINIC.tel} style={{ background: "var(--surface)" }}>
          <Icon name="phone" />
          {CLINIC.phone}
        </a>
      </div>
    </main>
  );
}
