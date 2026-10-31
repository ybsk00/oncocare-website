// 서울온케어의원 — 연락처·주소·스토어 링크의 단일 정본. 화면·메타데이터·JSON-LD 가 모두 여기서 읽는다.

export const SITE = "https://oncocare.co.kr";

export const CLINIC = {
  name: "서울온케어의원",
  nameEn: "Seoul OnCare Clinic",
  ceo: "이찬용",
  ceoTitle: "대표원장",
  phone: "010-9982-9941",
  tel: "tel:01099829941",
  address: "경기도 남양주시 다산중앙로123번길 21-5, 8·9층",
  addressFull: "경기도 남양주시 다산중앙로123번길 21-5, 8·9층 (다산동)",
  street: "다산중앙로123번길 21-5, 8·9층",
  locality: "남양주시",
  region: "경기도",
  postalCode: "", // TODO(사용자): 우편번호 확인 후 입력(JSON-LD 에 들어감)
  subway: "수도권 8호선 다산역 2번 출구, 도보 약 2분",
} as const;

const MAP_Q = encodeURIComponent("경기도 남양주시 다산중앙로123번길 21-5");
export const MAP_LINKS = {
  naver: `https://map.naver.com/p/search/${MAP_Q}`,
  kakao: `https://map.kakao.com/link/search/${MAP_Q}`,
};

// 문의 창구 — 실제 이메일이 정해지기 전까지 상담전화를 쓴다.
// (2026-10-31 QA: hello@/partner@/privacy@oncocare.ai 는 MX 가 없는 제3자 소유 도메인이라 전부 제거)
// TODO(사용자): 실제 이메일 — 확정되면 아래 두 값만 바꾸면 사이트 전체(푸터·제휴·개인정보처리방침)에 반영된다.
export const CONTACT = {
  label: `상담전화 ${CLINIC.phone}`,
  href: CLINIC.tel,
} as const;

// 비급여 진료비용 안내 — 링크 아웃.
// TODO(사용자): 의원 자체 비급여 진료비용 고지표(페이지/PDF)가 있으면 그 URL 로 교체.
export const NONPAY = {
  href: "https://www.hira.or.kr/main.do",
  label: "건강보험심사평가원 누리집 · 비급여 진료비 정보",
} as const;

export const STORE = {
  appStore: "https://apps.apple.com/kr/app/id6780368713",
  googlePlay: "https://play.google.com/store/apps/details?id=ai.oncocare.app",
} as const;

export const APP_NAME = "OnCoCare";
export const APP_TAGLINE = "서울온케어의원의 AI 케어 앱";

// 입원상담 = 전화 또는 의원 그룹웨어 AI 챗봇(oncareclinic.kr 과 동일). 폼·DB 없음(2026-10-31 사용자 결정).
// 벤더 가이드 방식 2(자체 버튼): embed 스크립트가 window.OncareChatbot.open()/close()/toggle() 을 노출한다.
// chatbot-widget.js(자동 플로팅 버튼)는 쓰지 않는다.
export const CHATBOT = {
  embedSrc: "https://hospital-ops-web-wh5o42y5rq-du.a.run.app/chatbot-embed.js",
  fallbackUrl: "https://hospital-ops-web-wh5o42y5rq-du.a.run.app/patient-chatbot",
  label: "병원 상담 연결",
  sub: "입원·진료 문의",
} as const;

// 두 상담 채널 — 절대 섞지 않는다(BRAND.md "두 상담 채널 구분").
//  A. AI 케어 상담 = 앱 OnCoCare 케어챗(건강·치료 궁금증). 아이콘 i-chat, 차콜/아웃라인.
//  B. 병원 상담 연결 = 서울온케어의원 입원·진료 문의(그룹웨어 24시 챗봇 → 상담팀 / 전화). 아이콘 i-hospital-call, 오렌지 솔리드.
export const CHANNEL_NOTE = {
  aiCare: "건강·치료 관련 궁금증을 AI가 근거와 함께 답합니다. 입원·예약 문의는 '병원 상담 연결'을 이용해 주세요.",
  hospital: "입원·진료 예약 등 서울온케어의원 문의 전용 창구입니다. 증상·건강 궁금증은 앱의 'AI 케어 상담'을 이용해 주세요.",
} as const;
