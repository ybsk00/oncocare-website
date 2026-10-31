import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MAGAZINE } from "../content/magazine";
import { CHANNEL_NOTE, CLINIC, MAP_LINKS } from "../content/contact";
import { Icon, SoccMark, type IconName } from "../components/icons";
import { AdmissionSection, DownloadSection } from "../components/sections";
import { ChatbotButton } from "../components/chatbot-button";
import "./home.css";

/* 2026-10-31 리브랜딩 — 서울온케어의원 사이트(시안 A 포팅). 앱 OnCoCare 는 "서울온케어의원의 AI 케어 앱"으로 종속 표기.
   금지: 알약 배지·마지막 단어 색강조·플로팅 칩·이모지·스탯 카드·1-2-3 카드·전면 가운데 정렬. 의료법: 개별 시술명·효과 표현·후기 금지. */

/* ── Hero ── */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-media">
        <div className="hero-img">
          <Image
            src="/clinic/doctor-care.webp"
            alt="서울온케어의원 의료진이 병상의 환자를 살피는 모습"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-copy">
          <div className="wrap">
            <div className="inner">
              <div className="kicker">
                <SoccMark />
                남양주 다산 · 통합 암케어 의원
              </div>
              <h1 id="hero-h">
                치료의 시간과
                <br />
                일상의 시간 사이,
                <br />
                서울온케어의원이
                <br />곁에 있습니다.
              </h1>
              <p className="sub">
                수술·항암·방사선 치료를 받는 동안, 그리고 치료를 마친 뒤의 회복기까지. 의료진은 입원 케어로 곁을 지키고, AI 케어앱
                OnCoCare가 집에서의 하루까지 이어 살핍니다.
              </p>
              <div className="actions">
                <ChatbotButton className="btn btn-brand" aria-label="병원 상담 연결 — 서울온케어의원 입원·진료 문의">
                  <Icon name="hospital-call" />
                  병원 상담 연결
                </ChatbotButton>
                <a className="btn btn-line" href={CLINIC.tel}>
                  <Icon name="phone" />
                  {CLINIC.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-rail">
        <div className="wrap">
          <a href="#clinics">
            <Icon name="care" />
            <div>
              <b>암케어 클리닉</b>
              <span>표준 치료와 함께 가는 보조치료 프로그램</span>
            </div>
            <Icon name="arrow" className="arr" />
          </a>
          <a href="/admission">
            <Icon name="bed" />
            <div>
              <b>입원 케어</b>
              <span>상담부터 입원까지 차례대로 안내</span>
            </div>
            <Icon name="arrow" className="arr" />
          </a>
          <a href="#app">
            <Icon name="app" />
            <div>
              <b>AI 케어앱 OnCoCare</b>
              <span>퇴원 후 집에서 이어지는 기록과 살핌</span>
            </div>
            <Icon name="arrow" className="arr" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="label">서울온케어 소개</div>
            <h2 id="about-h">
              치료는 큰 병원에서.
              <br />그 사이의 하루는
              <br />
              여기서 함께.
            </h2>
            <div className="body">
              <p>
                항암 일정 사이의 며칠, 수술 뒤 기운을 되찾는 몇 주, 치료를 마치고 일상으로 돌아가는 시기. 서울온케어의원은 대학병원 치료와
                집 사이의 그 시간을 맡습니다.
              </p>
              <p>
                환자 한 분의 치료 일정과 컨디션을 의료진이 함께 읽고, 식사와 수면, 통증과 붓기처럼 매일의 불편을 하나씩 살핍니다.
                입원해 계시는 동안에도, 퇴원해 집으로 돌아간 뒤에도 같은 흐름으로 이어집니다.
              </p>
              <p className="pull">
                진료 · 입원 · 일상, 세 개의 시간이
                <br />
                하나의 흐름으로 이어지는 케어.
              </p>
            </div>
          </div>
          <div>
            <figure className="photo">
              <svg className="orn" viewBox="0 0 150 150" aria-hidden="true">
                <path d="M8 142V40A32 32 0 0 1 40 8h102" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M28 142V52a24 24 0 0 1 24-24h90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".45" />
                <circle cx="142" cy="8" r="5" fill="currentColor" />
              </svg>
              <Image src="/clinic/lounge-window.webp" alt="창이 넓은 서울온케어의원 라운지" width={1400} height={817} sizes="(max-width:1000px) 100vw, 640px" />
              <figcaption>
                <span>환자 라운지</span>
                <span>FACILITY 01</span>
              </figcaption>
            </figure>
            <figure className="photo2" style={{ marginBottom: 0 }}>
              <Image src="/clinic/gown-logo.webp" alt="서울온케어의원 로고가 수놓인 의료진 가운" width={1400} height={545} sizes="(max-width:1000px) 70vw, 340px" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Clinics ── */
const CLINICS: { icon: IconName; name: string; tag: string; desc: string }[] = [
  { icon: "care", name: "통합 암케어", tag: "입원 · 외래", desc: "표준 암 치료 일정에 맞춰 컨디션과 영양, 생활 리듬을 함께 관리하는 보조치료 프로그램을 의료진이 개인별로 계획합니다." },
  { icon: "drop", name: "림프부종 관리", tag: "수술 후", desc: "수술 뒤 팔·다리에 생기는 붓기와 당김을 상담하고, 생활 속에서 이어 갈 수 있는 관리 방법을 안내합니다." },
  { icon: "wave", name: "통증관리", tag: "치료 중 · 후", desc: "치료 과정의 통증과 불편을 평가하고, 하루를 견딜 수 있도록 관리 계획을 함께 세웁니다." },
  { icon: "bowl", name: "항암식단", tag: "입원 식사", desc: "입맛이 떨어지는 시기에도 드실 수 있도록, 영양 상태와 치료 일정을 고려한 식단을 준비합니다." },
  { icon: "home", name: "방문의료", tag: "재택", desc: "거동이 어려워 내원이 힘든 분을 위해, 의료진이 가정으로 찾아가는 방문 진료를 상담합니다." },
  { icon: "pulse", name: "자율신경 클리닉", tag: "외래", desc: "잠들기 어렵거나 소화가 불편하고 가슴이 자주 두근거리는 등, 몸의 조절 기능과 관련된 불편을 진료합니다." },
];

function Clinics() {
  return (
    <section className="clinics" id="clinics" aria-labelledby="clinics-h">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="label">암케어 클리닉</div>
            <h2 id="clinics-h" style={{ marginTop: 20 }}>
              불편 하나하나에
              <br />
              이름을 붙여 살핍니다.
            </h2>
          </div>
          <p className="lede">
            어떤 시기에 어떤 관리가 필요한지는 환자마다 다릅니다. 외래 진료에서 지금의 치료 일정과 몸 상태를 먼저 확인한 뒤, 필요한
            클리닉을 조합해 계획합니다.
          </p>
        </div>
        <ul className="clist">
          {CLINICS.map((c) => (
            <li key={c.name}>
              <a href="/admission">
                <span className="ci">
                  <Icon name={c.icon} />
                </span>
                <h3>
                  {c.name}
                  <small>{c.tag}</small>
                </h3>
                <p>{c.desc}</p>
                <Icon name="arrow" className="arr" />
              </a>
            </li>
          ))}
        </ul>
        <p className="note-line">
          <Icon name="info" />
          <span>
            보조치료는 표준 암 치료를 대체하지 않는 보완적 관리입니다. 진료 내용과 일정은 외래 진료에서 담당 의료진과 함께 결정하며,
            주치의의 치료 계획을 우선합니다.
          </span>
        </p>
      </div>
    </section>
  );
}

/* ── Doctor ── (원장 인용문은 지어내지 않는다 — 진료 원칙을 중립 서술로) */
function Doctor() {
  return (
    <section className="doctor" id="doctor" aria-labelledby="doctor-h">
      <div className="wrap">
        <div className="grid">
          <div className="doc-photo">
            <svg className="frame" viewBox="0 0 300 260" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M2 60V30A28 28 0 0 1 30 2h240a28 28 0 0 1 28 28v200a28 28 0 0 1-28 28H120"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <Image src="/clinic/doctor.webp" alt={`${CLINIC.name} ${CLINIC.ceo} ${CLINIC.ceoTitle}`} width={640} height={430} sizes="(max-width:1000px) 100vw, 640px" />
            <div className="tag">
              <b>온케어닥터</b>
            </div>
          </div>
          <div>
            <div className="label" id="doctor-h">
              의료진 소개
            </div>
            <p className="stmt">큰 병원에서 받는 치료 일정을 먼저 확인하고, 그 사이의 하루를 가까이에서 살핍니다.</p>
            <div className="who">
              <b>{CLINIC.ceo}</b>
              <span>{CLINIC.ceoTitle}</span>
            </div>
            <dl>
              <dt>진료 분야</dt>
              <dd>통합 암케어</dd>
              <dt>진료 방식</dt>
              <dd>외래 진료에서 치료 일정과 몸 상태를 먼저 확인한 뒤, 입원 여부와 관리 계획을 환자·보호자와 함께 정합니다.</dd>
            </dl>
          </div>
        </div>
        <div className="doc-strip">
          <Image src="/clinic/doctor-hands.webp" alt="병실에서 환자 곁에서 이야기를 나누는 의료진" width={1400} height={732} sizes="(max-width:820px) 100vw, 800px" />
          <p>입원 기간의 컨디션 변화는 의료진과 함께 확인하고, 퇴원 뒤에는 OnCoCare 앱으로 집에서의 기록을 이어 갈 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}

/* ── Facility ── */
const GALLERY = [
  { c: "g1", src: "lounge-tv", w: 1400, h: 933, alt: "원목 벽과 소파가 있는 라운지", cap: "라운지" },
  { c: "g2", src: "reception", w: 1100, h: 590, alt: "안내데스크", cap: "안내데스크" },
  { c: "g3", src: "room-mirror", w: 1100, h: 590, alt: "창가 1인 병실", cap: "병실" },
  { c: "g4", src: "room-desk", w: 1100, h: 590, alt: "병실 복도와 데스크", cap: "병동" },
  { c: "g5", src: "treatment-bed", w: 1100, h: 590, alt: "커튼으로 나뉜 처치 공간", cap: "처치실" },
  { c: "g6", src: "equipment", w: 1100, h: 590, alt: "검사실", cap: "검사실" },
  { c: "g7", src: "sauna", w: 1100, h: 590, alt: "원목으로 마감한 휴식 공간", cap: "휴식 공간" },
  { c: "g8", src: "lounge-curtain", w: 1100, h: 590, alt: "커튼이 드리운 라운지 소파", cap: "라운지" },
];

function Facility() {
  return (
    <section className="facility" id="facility" aria-labelledby="facility-h">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="label">시설안내</div>
            <h2 id="facility-h" style={{ marginTop: 20 }}>
              머무는 동안,
              <br />
              집처럼 편안하도록.
            </h2>
          </div>
          <p className="lede">다산중앙로 건물 8·9층. 볕이 드는 라운지와 1인 병실, 검사실과 휴식 공간을 한 동선 안에 두었습니다.</p>
        </div>
        <div className="gal">
          {GALLERY.map((g, i) => (
            <figure className={g.c} key={g.c}>
              <Image
                src={`/clinic/${g.src}.webp`}
                alt={g.alt}
                width={g.w}
                height={g.h}
                sizes={g.c === "g1" ? "(max-width:820px) 100vw, 700px" : "(max-width:820px) 50vw, 480px"}
              />
              <figcaption>
                <i>{String(i + 1).padStart(2, "0")}</i>
                {g.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── App ── */
const DAY: { t: string; s: string; icon: IconName; h: string; p: string }[] = [
  { t: "08:00", s: "아침 체크인", icon: "sun", h: "오늘 컨디션을 날씨로 남겨요", p: "숫자 대신 맑음·흐림으로 기분과 기운을 고르면, 지난주와 달라진 점을 알려 드려요. 손발 저림이나 입안 헐음처럼 놓치기 쉬운 증상도 함께 여쭤봐요." },
  { t: "12:30", s: "점심 식사", icon: "bowl", h: "못 드신 날도, 한 숟가락씩 채워요", p: "식사를 사진 한 장으로 남기면 열량과 단백질을 대략 정리하고, 입맛 없는 날에 맞는 보강 방법을 안내해요." },
  { t: "15:00", s: "검사결과지", icon: "doc", h: "어려운 검사지를 쉬운 말로", p: "혈액검사·영상 판독지를 찍어 올리면 용어를 풀어 설명하고 지난 결과와 나란히 보여 드려요. 해석은 정보 제공이며, 판단은 담당 의료진과 함께해요." },
  { t: "17:00", s: "AI 케어 상담", icon: "chat", h: "답변마다 출처를 함께", p: "궁금한 건 언제든 물어보세요. 식약처·진료 가이드라인 등 근거를 붙여 답하고, 내 치료와 맞는 국내 임상시험도 찾아 드려요." },
  { t: "23:00", s: "밤의 안전망", icon: "moon", h: "열이 오르는 밤엔 바로 연결해요", p: "항암 중 38도 이상의 발열처럼 서두를 신호가 기록되면, 119 안내와 함께 가까운 응급실 정보를 먼저 보여 드려요. 응급실 정보는 보조 수단이에요." },
];

function AppSection() {
  return (
    <section className="app" id="app" aria-labelledby="app-h">
      <svg className="orn" viewBox="0 0 420 420" aria-hidden="true">
        <circle cx="210" cy="210" r="200" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="210" cy="210" r="150" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="210" cy="210" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="label">AI 케어앱</div>
            <h2 id="app-h" style={{ marginTop: 20 }}>
              퇴원한 날부터,
              <br />
              병원의 시선이
              <br />
              집까지 따라갑니다.
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              증상·식사·복약·검사지를 남기면 쉬운 말로 정리하고, 필요한 순간엔 의료진과 이어 드립니다. 치료는 병원에서 받지만, 회복은
              집에서 이어지니까요.
            </p>
            <div className="brandline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/mark.svg" alt="" width={44} height={44} />
              <div>
                <b>OnCoCare</b>
                <span>서울온케어의원의 AI 케어 앱</span>
              </div>
            </div>
            <div className="phone" aria-label="OnCoCare 앱 홈 화면 예시" role="img">
              <svg className="bezel" viewBox="0 0 300 610" aria-hidden="true">
                <rect x="2" y="2" width="296" height="606" rx="46" fill="#1B1917" stroke="#57524D" strokeWidth="2" />
                <rect x="112" y="22" width="76" height="22" rx="11" fill="#000" />
              </svg>
              <div className="screen" aria-hidden="true">
                <div className="hi">
                  <small>오늘 · 항암 2주차</small>좋은 아침이에요,
                  <br />
                  오늘은 어떠세요?
                </div>
                <div className="wx">
                  <svg viewBox="0 0 34 34">
                    <circle cx="13" cy="13" r="6" fill="none" stroke="#F2871F" strokeWidth="2" strokeLinecap="round" />
                    <path d="M13 3v2M3 13h2M5.9 5.9l1.4 1.4M20.1 5.9l-1.4 1.4" stroke="#F2871F" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 27h14a5 5 0 0 0 0-10 7 7 0 0 0-13 2.5A4 4 0 0 0 12 27z" fill="#FFFCF8" stroke="#404041" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <b>조금 흐림</b>
                    <span>그래도 어제보단 가벼워요</span>
                  </div>
                </div>
                <div className="todo">
                  <div>
                    <span>아침 복약</span>
                    <span>완료</span>
                  </div>
                  <div>
                    <span>점심 식사 기록</span>
                    <span>남기기</span>
                  </div>
                  <div>
                    <span>체온 재기 · 저녁</span>
                    <span>19:00</span>
                  </div>
                </div>
                <div className="todo" style={{ borderTop: 0, paddingTop: 0 }}>
                  <div className="next">
                    <b>다음 외래 · 화 10:30</b>
                    <span>서울온케어의원 · 지난주 기록을 정리해 둘게요</span>
                  </div>
                </div>
                <div className="chat">
                  입안이 헐었을 땐 자극이 적은 미지근한 음식이 편해요. 통증이 심해지면 다음 진료 때 꼭 말씀해 주세요.
                  <i>출처 · 진료 가이드라인 외 2건</i>
                </div>
                <div className="tabs">
                  <Icon name="home" className="on" />
                  <Icon name="chat" />
                  <Icon name="calendar" />
                  <Icon name="doc" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="day">
              {DAY.map((d) => (
                <li key={d.t}>
                  <time>
                    {d.t}
                    <small>{d.s}</small>
                  </time>
                  <Icon name={d.icon} />
                  <div>
                    <h3>{d.h}</h3>
                    <p>{d.p}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="facts">
              역할을 나눈 <b>AI 에이전트 9개</b>가 <b>의학 지식 근거 27,768건</b>을 바탕으로 답하고, <b>국내 임상시험 1,800여 건</b> 가운데
              지금의 치료와 맞는 시험을 찾아 드립니다. 검사지·약봉투 원본 사진은 분석이 끝나면 지웁니다.
            </p>
            <div className="aicare" id="ai-care">
              <div className="aicare-h">
                <Icon name="chat" />
                <div>
                  <h3>AI 케어 상담</h3>
                  <span>OnCoCare 앱 안 · 증상·부작용·식단·복약·검사결과 궁금증</span>
                </div>
              </div>
              <p>{CHANNEL_NOTE.aiCare}</p>
              <a className="aicare-redirect" href="/admission#consult">
                입원·예약 문의는 → 서울온케어의원 &lsquo;병원 상담 연결&rsquo;
              </a>
            </div>
            <p className="note-line">
              <Icon name="shield" />
              <span>OnCoCare의 모든 안내는 정보·교육 목적이며 진단이나 처방이 아닙니다. 애매하거나 급한 순간에는 의료진과 응급 정보로 바로 이어집니다.</span>
            </p>
            <p style={{ marginTop: 24 }}>
              <a className="btn btn-brand" href="/download">
                <Icon name="download" />
                앱 다운로드
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Magazine teaser (실제 최신 글 3편) ── */
function MagazineTeaser() {
  const posts = MAGAZINE.slice(0, 3);
  return (
    <section className="mag" id="magazine" aria-labelledby="mag-h">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="label">매거진</div>
            <h2 id="mag-h" style={{ marginTop: 20 }}>
              근거로 읽는 암 케어
            </h2>
          </div>
          <Link className="more" href="/magazine">
            매거진 전체 보기
            <Icon name="arrow" />
          </Link>
        </div>
        <div className="mlist">
          {posts.map((p) => (
            <article key={p.slug}>
              <Link href={`/magazine/${p.slug}`}>
                <span className="cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="meta">
                  <Icon name="book" />
                  {p.readMin}분 읽기
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Location ── */
function ClinicMap() {
  return (
    <svg className="map" viewBox="0 0 720 520" role="img" aria-labelledby="map-t">
      <title id="map-t">서울온케어의원 약도 — 8호선 다산역 2번 출구에서 다산중앙로를 따라 다산중앙로123번길로 들어서면 21-5 건물 8·9층</title>
      <rect className="ground" width="720" height="520" />
      <g className="block">
        <rect x="24" y="24" width="250" height="150" rx="14" />
        <rect x="330" y="24" width="160" height="150" rx="14" />
        <rect x="546" y="24" width="150" height="150" rx="14" />
        <rect x="24" y="250" width="250" height="246" rx="14" />
        <rect x="330" y="250" width="160" height="100" rx="14" />
        <rect x="330" y="400" width="160" height="96" rx="14" />
        <rect x="546" y="250" width="150" height="246" rx="14" />
      </g>
      <g fill="none" strokeLinecap="round">
        <path className="roadedge" d="M0 212H720" strokeWidth="50" />
        <path className="road" d="M0 212H720" strokeWidth="46" />
        <path className="roadedge" d="M302 0V520" strokeWidth="30" />
        <path className="road" d="M302 0V520" strokeWidth="26" />
        <path className="roadedge" d="M518 212V520" strokeWidth="26" />
        <path className="road" d="M518 212V520" strokeWidth="22" />
        <path className="roadedge" d="M518 375H302" strokeWidth="22" />
        <path className="road" d="M518 375H302" strokeWidth="18" />
      </g>
      <text className="lbl-road" x="340" y="216">
        다 산 중 앙 로
      </text>
      <text className="lbl-road" x="356" y="379" fontSize="11">
        다산중앙로123번길
      </text>
      <g transform="translate(150 212)">
        <rect x="-48" y="-14" width="96" height="28" rx="14" fill="var(--line8)" />
        <text x="0" y="5" textAnchor="middle" fill="#fff" fontFamily="sans-serif" fontWeight="800" fontSize="13">
          8 다산역
        </text>
      </g>
      <circle cx="198" cy="244" r="10" fill="var(--line8)" />
      <text x="198" y="248" textAnchor="middle" fill="#fff" fontFamily="sans-serif" fontWeight="800" fontSize="11">
        2
      </text>
      <text className="lbl" x="214" y="270">
        2번 출구
      </text>
      <path className="route" d="M198 244 H290 Q302 244 302 256 V363 Q302 375 314 375 H430 V340" fill="none" strokeWidth="4" strokeDasharray="1 9" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(560 182)">
        <rect x="-12" y="-12" width="24" height="24" rx="6" className="card" strokeWidth="1.5" />
        <g transform="translate(-9 -9) scale(.75)" fill="none" stroke="var(--brand-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4.5" y="4" width="15" height="13.5" rx="2.5" />
          <path d="M4.5 11h15M8 20.5v-3M16 20.5v-3M8.5 14.5h.01M15.5 14.5h.01" />
        </g>
      </g>
      <text className="lbl" x="580" y="168">
        버스 정류장
      </text>
      <g transform="translate(430 312)">
        <path d="M0 26C-14 10-22 0-22-12a22 22 0 0 1 44 0c0 12-8 22-22 38z" className="brandfill" />
        <g transform="translate(-11 -23)">
          <SoccMark width={22} height={22} style={{ color: "#fff" }} />
        </g>
      </g>
      <g transform="translate(350 420)">
        <rect x="0" y="0" width="188" height="60" rx="8" className="card" strokeWidth="1.2" />
        <text className="lbl-strong" x="14" y="26">
          서울온케어의원
        </text>
        <text className="lbl" x="14" y="46" fontSize="12">
          21-5 · 8·9층
        </text>
      </g>
      <text className="lbl" x="40" y="482" fontSize="12">
        약도는 이해를 돕기 위한 그림이며 실제 축척과 다릅니다.
      </text>
      <g transform="translate(670 470)" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
        <circle r="18" />
        <path d="M0-12L5 4 0 1-5 4z" fill="var(--muted)" />
      </g>
    </svg>
  );
}

function Location() {
  return (
    <section className="loc" id="location" aria-labelledby="loc-h">
      <div className="wrap">
        <div className="grid">
          <figure style={{ margin: 0 }}>
            <ClinicMap />
          </figure>
          <div>
            <div className="label">오시는 길</div>
            <h2 id="loc-h">
              다산역에서
              <br />
              걸어서 2분.
            </h2>
            <p className="addr">
              {CLINIC.address}
              <small>(다산동) {CLINIC.name}</small>
            </p>
            <ul className="ways">
              <li>
                <Icon name="train" />
                <div>
                  <b>지하철</b>
                  <span>수도권 8호선 다산역 2번 출구 → 다산중앙로 방면 → 123번길, 도보 약 2분</span>
                </div>
              </li>
              <li>
                <Icon name="bus" />
                <div>
                  <b>버스</b>
                  <span>다산역 자연앤 푸르지오 정류장(땡큐11) 도보 2분</span>
                  <span>유승한내들센트럴 e편한세상 정류장(34·79·95·1003·M2353·땡큐90) 도보 5분</span>
                  <span>e편한세상 힐스테이트 정류장(76·1006·땡큐10·땡큐12) 도보 8분</span>
                </div>
              </li>
              <li>
                <Icon name="car" />
                <div>
                  <b>주차</b>
                  <span>외래환자 — 본원 건물 주차 4시간 무료</span>
                  <span>입원환자 — 퍼스타타워 주차장 일주일까지 무료</span>
                </div>
              </li>
              <li>
                <Icon name="phone" />
                <div>
                  <b>대표전화</b>
                  <span>
                    <a href={CLINIC.tel}>{CLINIC.phone}</a>
                  </span>
                </div>
              </li>
            </ul>
            <div className="actions">
              <a className="btn btn-line" href={MAP_LINKS.naver} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" />
                네이버 지도
              </a>
              <a className="btn btn-line" href={MAP_LINKS.kakao} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" />
                카카오맵
              </a>
              <ChatbotButton className="btn btn-brand" aria-label="병원 상담 연결 — 서울온케어의원 입원·진료 문의">
                <Icon name="hospital-call" />
                병원 상담 연결
              </ChatbotButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="site" id="top">
      <Hero />
      <About />
      <div className="wrap divider-row" aria-hidden="true">
        <span />
        <SoccMark />
        <span />
      </div>
      <Clinics />
      <Doctor />
      <Facility />
      <AdmissionSection />
      <AppSection />
      <MagazineTeaser />
      <DownloadSection />
      <Location />
    </main>
  );
}
