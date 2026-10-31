import type { IconName } from "./icons";

// GNB 메뉴 구성(BRAND.md 확정 IA). 메가메뉴·모바일 드로어·푸터가 같은 데이터를 쓴다.
// 다른 페이지에서도 동작하도록 홈 섹션은 "/#id" 절대 경로로 건다.
export type NavLink = { href: string; label: string; icon: IconName };
export type NavGroup = {
  label: string;
  href: string;
  hot?: boolean;
  title?: string;
  desc?: string;
  photo?: { src: string; alt: string; caption: string };
  items?: NavLink[];
};

export const NAV: NavGroup[] = [
  {
    label: "AI 케어앱",
    href: "/#app",
    title: "OnCoCare",
    desc: "암환자를 위한 AI 케어 동반자. 나의 치료 이야기를 기억하고, 언제든 이어서 이야기합니다.",
    photo: { src: "/landing/slides/slide-window.webp", alt: "창가에서 차를 마시는 모습", caption: "언제든, 새벽에도" },
    items: [
      { href: "/#app", label: "기능 소개", icon: "app" },
      { href: "/#ai-care", label: "AI 케어 상담", icon: "chat" },
      { href: "/download", label: "앱 다운로드", icon: "download" },
    ],
  },
  {
    label: "병원소개",
    href: "/#about",
    title: "병원소개",
    desc: "치료의 시간과 일상의 시간 사이를 지키는 남양주 다산의 암케어 의원입니다.",
    photo: { src: "/clinic/reception.webp", alt: "서울온케어의원 안내데스크", caption: "안내데스크" },
    items: [
      { href: "/#about", label: "서울온케어 소개", icon: "clinic" },
      { href: "/#doctor", label: "온케어닥터", icon: "doctor" },
      { href: "/#facility", label: "시설안내", icon: "gallery" },
      { href: "/#location", label: "오시는길", icon: "pin" },
    ],
  },
  {
    label: "암케어",
    href: "/#clinics",
    title: "암케어 클리닉",
    desc: "표준 암 치료와 함께 가는 보조치료 프로그램을 의료진이 개인별로 계획합니다.",
    photo: { src: "/clinic/doctor-hands.webp", alt: "병상 곁에서 환자를 살피는 의료진", caption: "병실" },
    items: [
      { href: "/#clinics", label: "통합 암케어", icon: "care" },
      { href: "/#clinics", label: "림프부종 관리", icon: "drop" },
      { href: "/#clinics", label: "통증관리", icon: "wave" },
      { href: "/#clinics", label: "항암식단", icon: "bowl" },
      { href: "/#clinics", label: "방문의료", icon: "home" },
    ],
  },
  {
    label: "입원상담",
    href: "/admission",
    hot: true,
    title: "입원상담",
    desc: "입원이 필요한지부터 함께 판단합니다. 전화 010-9982-9941 또는 '병원 상담 연결'로 서울온케어의원에 문의해 주세요.",
    photo: { src: "/clinic/room-single.webp", alt: "1인 병실", caption: "1인 병실" },
    items: [
      { href: "/admission#process", label: "입원 절차", icon: "calendar" },
      { href: "/admission#consult", label: "병원 상담 연결", icon: "hospital-call" },
      { href: "/admission#nonpay", label: "비급여 안내", icon: "won" },
      { href: "/admission#rooms", label: "병실 둘러보기", icon: "bed" },
    ],
  },
  { label: "매거진", href: "/magazine" },
  { label: "오시는길", href: "/#location" },
];
