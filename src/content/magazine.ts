// 온코케어 매거진 — 구조화 콘텐츠(SEO/GEO: H1/H2·FAQ·JSON-LD 소스).
// 모든 글은 정보·교육 목적이며 진단·치료가 아니다. "주치의와 상의" 프레임 유지.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; tone: "info" | "warn"; title: string; text: string }
  | { type: "svg"; name: "plate" | "traffic" | "phases" | "labtrend" | "moodweather" }
  // 2026-10-09 — 렌더 시에만 끼우는 「이 글의 핵심」 SVG 카드(content/media3.ts · 데이터에는 쓰지 않는다)
  | { type: "m3svg"; html: string };

export type FAQ = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  author: string;
  reviewedBy: string;
  readMin: number;
  hero: string; // /magazine/img/{hero}.webp
  heroAlt: string;
  tldr: string[];
  blocks: Block[];
  faq: FAQ[];
  // 2026-10-07 — 근거 칼럼용(선택). 있으면 본문 아래 「참고 자료」 목록 + JSON-LD citation 으로 나간다.
  references?: { label: string; url: string }[];
  // 함께 읽을 매거진 글 slug(선택) — 본문 아래 내부 링크.
  related?: string[];
  // true 면 본문 아래 앱 스토어 링크 박스를 그린다(선택).
  appLinks?: boolean;
};

export const SITE = "https://oncocare.co.kr";

export const MAGAZINE: Article[] = [
  // 2026-10-28 — 사용자 지시 「색인 정체 없는 고객사 신규 2편 · 선조사 후 작성」(온코케어 핵심 kw: 유방암 증세)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-28","updatedAt":"2026-10-28","appLinks":true,"slug":"breast-cancer-symptoms-lump-nipple-skin-signs","title":"유방암 증세 — 멍울만이 아니다, 유두·피부·겨드랑이 신호와 검사 시기","description":"유방암 증세를 통증 없는 멍울, 유두 분비물과 함몰, 피부가 패이거나 오렌지 껍질처럼 변하는 모습, 겨드랑이 멍울로 나눠 살펴보고, 멍울이 아닌 신호일 때 병원 방문이 늦어지는 이유, 치밀유방과 검사(유방촬영·초음파·조직검사) 시기, 진료 전에 기록할 것을 연구 근거와 함께 정리했습니다.","category":"암종별 정보","categoryColor":"#B9560C","readMin":9,"hero":"breast-symptom-check-calendar-still-life","heroAlt":"유방암 증세를 기록하는 책상 — 창가 탁자 위 탁상 달력과 펜, 따뜻한 차 한 잔과 작은 화분","tldr":["유방암 증세 가운데 가장 흔한 것은 아프지 않고 단단한 멍울입니다. 다만 유방암 여성 6명 중 1명가량은 멍울이 아닌 유두 변화·피부 변화·통증 같은 다른 신호로 처음 알아차립니다.","멍울이 아닌 증세로 시작한 사람은 병원에 늦게 가는 경향이 있었습니다. 유두에서 피 섞인 분비물이 나오거나, 피부가 보조개처럼 패이거나, 한쪽 유방이 붉게 붓는다면 멍울이 없어도 진료를 받는 것이 좋습니다.","초기 유방암은 증상이 없는 경우가 많아 증세보다 검진이 먼저입니다. 40세 이후 2년마다 유방촬영을 받고, 치밀유방이라는 설명을 들었다면 초음파 추가를 의료진과 상의하세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「유방암 증세」를 찾아본 분, 특히 샤워하다 가슴에서 무언가 만져졌거나 속옷에 분비물이 묻어 있는 것을 보고 불안해진 분, 어머니나 자매가 유방암 진단을 받아 내 몸을 다시 살펴보게 된 분을 위해 썼습니다. 증세 목록만 나열하지 않고, 어떤 신호를 놓치기 쉬운지와 언제 어떤 검사를 받는지, 진료 전에 무엇을 적어 가면 좋은지를 함께 다룹니다. 이 글로 암 여부를 판단할 수는 없으며, 변화가 느껴지면 진료가 먼저입니다."},{"type":"h2","id":"silent-early","text":"초기 유방암은 증상이 없는 경우가 많습니다"},{"type":"p","text":"국가암정보센터는 유방암 발생 초기에는 대부분 아무런 증상이 없다고 설명합니다 [4]. 암이 1cm 안팎으로 자라기 전에는 손으로 만져지지 않는 경우가 많고, 아프지도 않기 때문입니다. 그래서 「아무 이상이 없으니 괜찮다」는 판단은 유방암에서는 통하지 않습니다. 증세를 기다리기보다 정해진 주기에 검진을 받는 것이 일찍 찾는 가장 확실한 방법입니다."},{"type":"p","text":"또 하나 흔한 오해가 유방 통증입니다. 생리 전에 가슴이 붓고 아픈 것은 호르몬 변화로 생기는 경우가 대부분이며, 유방 통증은 유방암의 일반적인 증상이 아닙니다 [4]. 물론 통증이 있다고 해서 암이 아니라는 뜻도 아니므로, 생리 주기와 상관없이 한쪽 한 곳만 계속 아프다면 진료를 받아 보는 것이 좋습니다."},{"type":"h2","id":"lump","text":"가장 흔한 유방암 증세 — 아프지 않고 단단한 멍울"},{"type":"p","text":"영국의 전국 진료 기록에서 유방암 여성 2,316명이 처음 알아차린 증상을 분석한 연구를 보면, 유방 멍울이 83%로 가장 많았습니다 [1]. 유방암 멍울은 대개 누르거나 만져도 아프지 않고, 단단하며, 경계가 울퉁불퉁하고, 밀어도 잘 움직이지 않는 경우가 많습니다. 시간이 지나도 줄지 않고 조금씩 커지는 것도 특징입니다."},{"type":"p","text":"그렇다고 만져지는 멍울이 모두 암은 아닙니다. 젊은 여성에게 흔한 섬유선종, 물혹(낭종), 생리 전후로 생겼다 사라지는 섬유낭종성 변화처럼 양성 혹이 훨씬 많습니다. 양성 혹은 비교적 말랑하거나 매끈하고 잘 움직이는 경우가 많지만, 손끝의 느낌만으로 구분하는 것은 의료진에게도 어렵습니다. 결국 영상검사와 필요하면 조직검사로 확인해야 합니다."},{"type":"h2","id":"beyond-lump","text":"멍울 말고 놓치기 쉬운 유방암 증세 — 유두·피부·겨드랑이"},{"type":"p","text":"같은 연구에서 유방암 여성 6명 중 1명가량은 멍울이 아닌 다른 증상으로 처음 진료를 받았습니다. 유두 이상이 7%, 유방 통증이 6%였고, 드물게 허리 통증이나 체중 감소처럼 유방 밖의 증상으로 시작한 경우도 있었습니다 [1]. 국내 암 정보 자료에서 공통으로 꼽는 신호는 아래와 같습니다 [4]."},{"type":"ul","items":["유두 분비물 — 수유 중이 아닌데 한쪽 유두의 한 구멍에서 저절로 나오는 분비물, 특히 피가 섞이거나 갈색인 분비물.","유두 모양 변화 — 원래 나와 있던 유두가 안으로 당겨 들어가는 함몰, 유두와 유륜에 잘 낫지 않는 습진이나 진물·딱지(파젯병의 신호일 수 있음).","피부 변화 — 멍울 주변 피부가 보조개처럼 움푹 패임, 피부가 두꺼워지고 모공이 도드라져 오렌지 껍질처럼 보임.","붉게 붓는 유방 — 멍울은 잘 만져지지 않는데 유방 한쪽이 빠르게 붉어지고 붓고 뜨거워짐. 염증성 유방암일 수 있어 항생제를 먹고도 낫지 않으면 바로 다시 진료를 받습니다.","겨드랑이 멍울 — 유방암이 겨드랑이 림프절로 번지면 커진 림프절이 만져질 수 있습니다.","유방 모양·크기 변화 — 한쪽만 커지거나 윤곽이 달라짐."]},{"type":"callout","tone":"info","title":"멍울이 없어도 진료를 미루지 마세요","text":"연구에서 멍울이 아닌 증상만 있던 여성은 15%가, 멍울과 다른 증상이 함께 있던 여성은 20%가 증상을 느끼고 90일 넘게 지나서야 병원을 찾았습니다. 멍울만 있던 여성(7%)보다 두세 배 많았습니다 [1]. 「혹이 안 만져지니 괜찮겠지」라는 생각이 진료를 늦추는 가장 흔한 이유입니다."},{"type":"m3svg","html":"<figure class=\"mag-figure\" data-oc-svg=\"topic\" style=\"margin:2em auto;max-width:560px\"><svg viewBox=\"0 0 480 470\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"bs-t bs-d\" style=\"width:100%;height:auto;font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif\">\n<title id=\"bs-t\">유방암 증세, 처음 알아차린 신호와 검사 흐름</title>\n<desc id=\"bs-d\">유방암 여성 2316명의 첫 증상은 멍울 83%, 유두 이상 7%, 유방 통증 6%. 멍울이 아닌 증상만 있으면 90일 넘게 늦게 병원을 찾은 비율 15%로 멍울만 있는 경우 7%의 두 배. 검사는 진찰, 유방촬영, 초음파, 조직검사 순.</desc>\n<rect x=\"0\" y=\"0\" width=\"480\" height=\"470\" rx=\"18\" fill=\"#F4F7F5\"/>\n<text x=\"24\" y=\"40\" font-size=\"19\" font-weight=\"700\" fill=\"#26403a\">처음 알아차린 유방암 증세</text>\n<text x=\"24\" y=\"63\" font-size=\"12.5\" fill=\"#5C8073\">유방암 여성 2,316명 · Koo 등 2017</text>\n<text x=\"24\" y=\"98\" font-size=\"13.5\" fill=\"#26403a\">멍울</text>\n<rect x=\"110\" y=\"84\" width=\"290\" height=\"20\" rx=\"5\" fill=\"#5C8073\"/>\n<text x=\"408\" y=\"99\" font-size=\"13\" font-weight=\"700\" fill=\"#26403a\">83%</text>\n<text x=\"24\" y=\"132\" font-size=\"13.5\" fill=\"#26403a\">유두 이상</text>\n<rect x=\"110\" y=\"118\" width=\"25\" height=\"20\" rx=\"5\" fill=\"#C9874A\"/>\n<text x=\"143\" y=\"133\" font-size=\"13\" font-weight=\"700\" fill=\"#26403a\">7%</text>\n<text x=\"24\" y=\"166\" font-size=\"13.5\" fill=\"#26403a\">유방 통증</text>\n<rect x=\"110\" y=\"152\" width=\"21\" height=\"20\" rx=\"5\" fill=\"#C9874A\"/>\n<text x=\"139\" y=\"167\" font-size=\"13\" font-weight=\"700\" fill=\"#26403a\">6%</text>\n<rect x=\"24\" y=\"186\" width=\"432\" height=\"70\" rx=\"12\" fill=\"#FBEFD9\"/>\n<text x=\"40\" y=\"212\" font-size=\"14\" font-weight=\"700\" fill=\"#A36A12\">90일 넘게 늦게 병원을 찾은 비율</text>\n<text x=\"40\" y=\"238\" font-size=\"13\" fill=\"#26403a\">멍울만 7% · 멍울 아닌 증상만 15% · 둘 다 20%</text>\n<text x=\"24\" y=\"292\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\">증세가 있을 때 검사 순서</text>\n<rect x=\"24\" y=\"306\" width=\"96\" height=\"52\" rx=\"10\" fill=\"#E3EEE8\"/><text x=\"72\" y=\"337\" font-size=\"13\" font-weight=\"700\" fill=\"#2F6B4F\" text-anchor=\"middle\">진찰</text>\n<text x=\"128\" y=\"337\" font-size=\"16\" fill=\"#5C8073\">›</text>\n<rect x=\"138\" y=\"306\" width=\"96\" height=\"52\" rx=\"10\" fill=\"#E3EEE8\"/><text x=\"186\" y=\"337\" font-size=\"13\" font-weight=\"700\" fill=\"#2F6B4F\" text-anchor=\"middle\">유방촬영</text>\n<text x=\"242\" y=\"337\" font-size=\"16\" fill=\"#5C8073\">›</text>\n<rect x=\"252\" y=\"306\" width=\"96\" height=\"52\" rx=\"10\" fill=\"#E3EEE8\"/><text x=\"300\" y=\"337\" font-size=\"13\" font-weight=\"700\" fill=\"#2F6B4F\" text-anchor=\"middle\">초음파</text>\n<text x=\"356\" y=\"337\" font-size=\"16\" fill=\"#5C8073\">›</text>\n<rect x=\"366\" y=\"306\" width=\"90\" height=\"52\" rx=\"10\" fill=\"#F8DEDA\"/><text x=\"411\" y=\"337\" font-size=\"13\" font-weight=\"700\" fill=\"#B23A2B\" text-anchor=\"middle\">조직검사</text>\n<text x=\"24\" y=\"392\" font-size=\"12.5\" fill=\"#26403a\">치밀유방이면 유방촬영에 초음파를 더하는 것을 상의</text>\n<text x=\"24\" y=\"414\" font-size=\"12.5\" fill=\"#26403a\">증상이 없으면 40세 이후 2년마다 유방촬영 검진</text>\n<text x=\"24\" y=\"444\" font-size=\"11.5\" fill=\"#6B827B\">자료: Cancer Epidemiol 2017 · 국가암정보센터</text>\n<text x=\"24\" y=\"460\" font-size=\"11.5\" fill=\"#6B827B\">온코케어 AI · 정보 목적, 진단을 대신하지 않습니다</text>\n</svg></figure>"},{"type":"h2","id":"dense-breast","text":"치밀유방과 유방암 — 유방촬영만으로 부족할 수 있는 이유"},{"type":"p","text":"유방은 지방과 유선 조직으로 이뤄지는데, 유선 조직이 많은 경우를 치밀유방이라고 합니다. 유방촬영 사진에서 유선 조직과 암은 모두 하얗게 보이기 때문에 치밀유방에서는 작은 암이 가려져 보이지 않을 수 있습니다. 한국 여성은 서양 여성보다 치밀유방 비율이 높은 편이고, 특히 40대에서 흔합니다."},{"type":"p","text":"국내에서 유방촬영 검진을 받은 여성 95만여 명을 5년간 추적한 연구에서는 유방 밀도가 높을수록 유방암 발생 위험이 높아졌습니다. 밀도가 가장 높은 단계(BI-RADS D)는 가장 낮은 단계보다 위험이 약 1.3배였습니다 [2]. 연구진은 치밀유방 여성에게 개인별 검진 전략이 중요하다고 정리했습니다. 이전 연구에서는 치밀유방에서 유방촬영에 초음파를 더했을 때 유방촬영만으로는 보이지 않던 암을 추가로 찾았습니다 [3]. 검진 결과지에 「치밀유방」이라고 적혀 있다면, 초음파를 함께 받을지 의료진과 상의해 보세요."},{"type":"h2","id":"tests","text":"유방암 증세가 있을 때 받는 검사 — 유방촬영·초음파·조직검사"},{"type":"ul","items":["진찰 — 의료진이 멍울의 위치·크기·단단함과 겨드랑이 림프절을 확인합니다.","유방촬영술 — 유방을 눌러 X선으로 찍습니다. 미세석회화처럼 손으로 만져지지 않는 변화를 찾는 데 강점이 있습니다.","유방 초음파 — 멍울이 물혹인지 고형 혹인지 구분하고, 치밀유방에서 유방촬영을 보완합니다. 젊은 여성이나 임신 중에도 쓸 수 있습니다.","조직검사 — 영상에서 암이 의심되면 바늘로 조직을 조금 떼어 현미경으로 확인합니다. 유방암 진단은 조직검사로 확정됩니다.","추가 검사 — 암으로 진단되면 병기와 아형(호르몬 수용체·HER2)을 확인하는 검사가 이어집니다."]},{"type":"p","text":"증상이 없는 여성은 40세 이후 2년마다 유방촬영 검진을 받도록 권고됩니다 [4]. 하지만 증세가 있다면 검진 주기를 기다릴 필요가 없습니다. 국가 검진은 증상이 없는 사람을 위한 제도이므로, 멍울이나 분비물 같은 변화가 있으면 외과(유방외과) 진료를 바로 예약하는 것이 맞습니다. 가족 중 유방암·난소암 환자가 여럿 있거나 젊은 나이에 진단된 가족이 있다면, 검진 시작 시기와 유전 상담도 의료진과 이야기해 보세요."},{"type":"h2","id":"self-check","text":"자가검진은 언제, 어떻게 — 내 몸의 평소 상태 알기"},{"type":"p","text":"자가검진은 암을 진단하는 방법이 아니라, 평소 내 유방이 어떤지 알아 두었다가 달라진 점을 빨리 알아차리기 위한 습관입니다. 생리가 끝나고 3~5일 뒤, 유방이 가장 부드러울 때 한 달에 한 번 하는 것이 좋고, 폐경 뒤에는 매달 날짜를 정해 둡니다."},{"type":"ul","items":["거울 앞에서 — 팔을 내린 자세, 머리 위로 올린 자세, 허리에 손을 짚고 힘을 준 자세로 양쪽 모양·피부·유두를 비교합니다.","누워서 — 검사하는 쪽 어깨 밑에 수건을 받치고 반대쪽 손가락 세 개의 바닥으로 원을 그리며 유방 전체와 겨드랑이까지 빠짐없이 만져 봅니다.","유두 — 가볍게 짜 보아 분비물이 나오는지, 색은 어떤지 확인합니다.","달라진 점이 있으면 — 날짜, 위치(시계 방향으로 몇 시, 유두에서 몇 cm), 크기, 단단함을 적어 두고 진료를 예약합니다."]},{"type":"h2","id":"symptom-log","text":"진료 전에 적어 가면 좋은 것 — 언제부터, 어디에, 생리와 상관있는지"},{"type":"p","text":"진료실에서 「언제부터였나요?」라는 질문에 정확히 답하기는 생각보다 어렵습니다. 처음 발견한 날짜, 멍울이라면 위치와 대략의 크기(콩·포도알·밤처럼 비유해도 좋습니다), 생리 전후로 크기나 통증이 달라지는지, 분비물이라면 색과 한쪽인지 양쪽인지, 저절로 나오는지 짜야 나오는지를 적어 가세요. 이전에 받은 유방촬영·초음파 결과지가 있다면 함께 가져가면 비교에 도움이 됩니다. 복용 중인 호르몬제나 피임약, 가족 중 유방암·난소암 진단을 받은 사람과 진단 나이도 메모해 두면 상담이 빨라집니다."},{"type":"m3svg","html":"<!-- M3:SVG --><figure class=\"m3-card not-prose\" style=\"margin:2.2em 0\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 406\" width=\"100%\" role=\"img\" aria-label=\"이 글의 핵심: 가장 흔한 유방암 증세 / 멍울 말고 놓치기 쉬운 유방암 증세 / 치밀유방과 유방암 / 증세가 있을 때 받는 검사\" style=\"display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Noto Sans JP','Malgun Gothic',sans-serif\"><defs><linearGradient id=\"m3675625g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#26403a\"/><stop offset=\"1\" stop-color=\"#5C8073\"/></linearGradient><linearGradient id=\"m3675625v\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5C8073\"/><stop offset=\"1\" stop-color=\"#5C8073\" stop-opacity=\"0.15\"/></linearGradient><clipPath id=\"m3675625c\"><rect width=\"480\" height=\"406\" rx=\"18\"/></clipPath></defs><g clip-path=\"url(#m3675625c)\"><rect width=\"480\" height=\"406\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"106\" fill=\"url(#m3675625g)\"/><circle cx=\"446\" cy=\"18\" r=\"92\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.10\" stroke-width=\"18\"/><circle cx=\"446\" cy=\"18\" r=\"46\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.14\"/><circle cx=\"446\" cy=\"18\" r=\"140\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.07\" stroke-dasharray=\"3 7\"/><polyline points=\"0,90 249.60000000000002,90 264,76 278.4,102 292.8,82 302.4,90 480,90\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.45\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"24\" y=\"20\" width=\"117\" height=\"24\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"0.16\"/><circle cx=\"36\" cy=\"32\" r=\"4\" fill=\"#ffffff\" fill-opacity=\"0.85\"/><text x=\"46\" y=\"37\" fill=\"#ffffff\" font-size=\"12.5\" font-weight=\"800\" letter-spacing=\"0.5\">이 글의 핵심</text><text x=\"24\" y=\"76\" fill=\"#ffffff\" font-size=\"20.5\" font-weight=\"800\">유방암 증세</text><line x1=\"39\" y1=\"145\" x2=\"39\" y2=\"319\" stroke=\"url(#m3675625v)\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"62\" y=\"126\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"136\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"150\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">가장 흔한 유방암 증세</text><rect x=\"62\" y=\"184\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"194\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"208\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">멍울 말고 놓치기 쉬운 유방암 증세</text><rect x=\"62\" y=\"242\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"252\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"266\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">치밀유방과 유방암</text><rect x=\"62\" y=\"300\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"310\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"324\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">증세가 있을 때 받는 검사</text><circle cx=\"39\" cy=\"145\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"145\" r=\"12\" fill=\"url(#m3675625g)\"/><text x=\"39\" y=\"149.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">1</text><circle cx=\"39\" cy=\"203\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"203\" r=\"12\" fill=\"url(#m3675625g)\"/><text x=\"39\" y=\"207.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">2</text><circle cx=\"39\" cy=\"261\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"261\" r=\"12\" fill=\"url(#m3675625g)\"/><text x=\"39\" y=\"265.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">3</text><circle cx=\"39\" cy=\"319\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"319\" r=\"12\" fill=\"url(#m3675625g)\"/><text x=\"39\" y=\"323.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">4</text><rect x=\"0\" y=\"362\" width=\"480\" height=\"44\" fill=\"#26403a\" fill-opacity=\"0.05\"/><circle cx=\"31\" cy=\"384\" r=\"7\" fill=\"url(#m3675625g)\"/><text x=\"46\" y=\"389\" fill=\"#26403a\" font-size=\"13\" font-weight=\"800\">온코케어 AI</text><text x=\"456\" y=\"389\" fill=\"#26403a\" fill-opacity=\"0.7\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">한눈에 보는 요약</text></g><rect x=\"0.5\" y=\"0.5\" width=\"479\" height=\"405\" rx=\"18\" fill=\"none\" stroke=\"#26403a\" stroke-opacity=\"0.16\"/></svg></figure><!-- /M3:SVG -->"},{"type":"h2","id":"when-to-call","text":"이럴 땐 검진 주기를 기다리지 말고 진료를 받으세요"},{"type":"ul","items":["생리가 끝난 뒤에도 사라지지 않는 단단한 멍울","수유 중이 아닌데 한쪽 유두에서 피 섞인 분비물이 나옴","유두가 새로 안으로 당겨 들어가거나, 유두·유륜의 습진이 2~3주 넘게 낫지 않음","피부가 패이거나 오렌지 껍질처럼 두꺼워짐","유방 한쪽이 빠르게 붉어지고 붓고 뜨거운데 항생제를 먹어도 나아지지 않음","겨드랑이에 새로 만져지는 멍울"]},{"type":"p","text":"이미 유방암 치료를 받았거나 받는 중이라면, 수술한 쪽이나 반대쪽에 새 멍울이 생기거나 뼈 통증·기침·숨참이 계속될 때 다음 정기 진료까지 기다리지 말고 치료 병원에 먼저 연락하세요."},{"type":"h2","id":"record-with-app","text":"온코케어 AI로 유방암 증세와 검사 결과를 기록하는 법"},{"type":"p","text":"온코케어 AI의 증상 체크인에 변화를 발견한 날짜와 위치, 크기, 분비물 여부를 남겨 두면 진료 때 「언제부터, 어디에, 어떻게」를 화면 하나로 보여 줄 수 있습니다. 생리 시작일을 함께 적어 두면 주기에 따라 달라지는지도 확인하기 쉽습니다. 받은 유방촬영·초음파·조직검사 결과는 검사 결과 정리 기능에 모아 이전 결과와 비교할 수 있고, 진단 뒤 치료가 시작되면 항암 일정과 부작용 기록으로 그대로 이어 쓸 수 있습니다. 가족·보호자 연결을 해 두면 어머니의 검사 일정과 결과를 자녀가 함께 확인할 수도 있습니다. 앱은 증세가 유방암인지 판단하지 않으며, 진료 전에 기록을 정리하는 도구입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 유방의 변화가 느껴지면 자가 판단으로 지켜보지 말고 의료진의 진찰과 검사를 받으세요."}],"faq":[{"q":"유방암 증세 중 가장 흔한 것은 무엇인가요?","a":"아프지 않고 단단한 멍울입니다. 유방암 여성의 첫 증상을 분석한 연구에서 83%가 멍울이었습니다. 다만 6명 중 1명가량은 유두 분비물·유두 함몰·피부 변화·통증처럼 멍울이 아닌 신호로 시작했습니다."},{"q":"가슴이 아프면 유방암인가요?","a":"유방 통증은 유방암의 일반적인 증상이 아니며, 생리 전 호르몬 변화로 생기는 경우가 대부분입니다. 다만 생리 주기와 상관없이 한 곳만 계속 아프거나 멍울·피부 변화가 함께 있다면 진료를 받아 보세요."},{"q":"만져지는 멍울은 대부분 암인가요?","a":"아닙니다. 섬유선종·물혹 같은 양성 혹이 더 흔합니다. 하지만 손끝 느낌만으로는 구분할 수 없으므로 초음파 같은 영상검사로 확인하고, 필요하면 조직검사를 받습니다."},{"q":"유방촬영에서 이상이 없었는데 멍울이 만져져요.","a":"치밀유방에서는 유방촬영에 작은 암이 가려 보이지 않을 수 있습니다. 검진 결과와 상관없이 새로 만져지는 멍울은 진료를 받고, 초음파 추가 여부를 의료진과 상의하세요."},{"q":"온코케어 AI가 유방암인지 알려 주나요?","a":"아니요. 온코케어 AI는 증상과 검사 결과를 날짜별로 기록하고 정리하는 도구이며, 진단은 의료진의 진찰과 검사로 이뤄집니다. 기록은 진료 때 상황을 빠르게 전하는 데 도움이 됩니다."}],"references":[{"label":"Koo MM, et al. Typical and atypical presenting symptoms of breast cancer and their associations with diagnostic intervals: evidence from a national audit of cancer diagnosis. Cancer Epidemiol 2017;48:140-146 (PMID 28549339)","url":"https://pubmed.ncbi.nlm.nih.gov/28549339/"},{"label":"Gwak H, et al. Association of breast density with breast cancer risk and stage at diagnosis: a Korean nationwide cohort study. Cancers (Basel) 2025;17:3897 (PMID 41463148)","url":"https://pubmed.ncbi.nlm.nih.gov/41463148/"},{"label":"Kolb TM, et al. Comparison of the performance of screening mammography, physical examination, and breast US and evaluation of factors that influence them. Radiology 2002;225:165-175 (PMID 12355001)","url":"https://pubmed.ncbi.nlm.nih.gov/12355001/"},{"label":"국가암정보센터. 유방암 — 요약설명·일반적 증상","url":"https://www.cancer.go.kr/lay1/program/S1T211C217/cancer/view.do?cancer_seq=4757&menu_seq=4768"}],"related":["breast-cancer-chemo-before-after-surgery-side-effects","stomach-cancer-symptoms-early-signs-screening","cancer-care-app-what-to-record"]},
  // 2026-10-28 — 사용자 지시 「색인 정체 없는 고객사 신규 2편 · 선조사 후 작성」(온코케어 핵심 kw: 허셉틴 부작용)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-28","updatedAt":"2026-10-28","appLinks":true,"slug":"herceptin-trastuzumab-side-effects-guide","title":"허셉틴 부작용 — 심장 검사는 왜 3개월마다, 주입 당일 오한은 괜찮을까","description":"허셉틴(트라스투주맙) 부작용을 첫 주입 때의 오한·발열, 심장 기능 저하와 정기 심초음파, 함께 쓰는 파클리탁셀·도세탁셀 부작용과의 구분, 1년 동안 3주마다 이어지는 일정에서 집에서 확인할 것과 바로 알릴 신호로 나눠 연구 근거와 함께 정리했습니다.","category":"치료 가이드","categoryColor":"#B9560C","readMin":10,"hero":"herceptin-infusion-day-blanket-tea-still-life","heroAlt":"허셉틴 주입일을 준비하는 창가 — 의자 위에 접힌 담요와 보온병, 따뜻한 차 한 잔과 작은 화분","tldr":["허셉틴은 HER2 양성 유방암에 쓰는 표적치료제로, 세포독성 항암제와 달리 탈모나 심한 골수 억제는 드뭅니다. 대신 첫 주입 때의 오한·발열 같은 주입 반응과 심장 기능 저하를 살펴야 합니다.","심장 기능 저하 위험은 함께 쓰는 약에 따라 달라집니다. 임상시험 자료에서 안트라사이클린 계열과 동시에 쓸 때 가장 높았고 허셉틴 단독은 낮았으며, 대부분 치료로 회복되었습니다. 그래서 시작 전과 치료 중 정기적으로 심초음파를 합니다.","수술 전후 치료에서는 보통 3주마다 1년 동안 맞습니다. 체중이 갑자기 늘거나 발목이 붓고 누우면 숨이 차는 변화는 다음 주입일을 기다리지 말고 알리세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「허셉틴 부작용」을 찾아본 분, 특히 HER2 양성 유방암 진단을 받고 허셉틴 치료를 앞둔 분이나 파클리탁셀·도세탁셀과 함께 맞으며 어느 증상이 어느 약 때문인지 헷갈리는 분, 심장 검사 일정을 받고 걱정이 커진 분과 보호자를 위해 썼습니다. 투여 계획과 용량은 의료진이 정하지만, 무엇을 언제 살펴야 하는지 알아 두면 1년이라는 긴 치료가 훨씬 덜 막막해집니다."},{"type":"h2","id":"what-is","text":"허셉틴은 어떤 약인가 — HER2 양성 유방암의 표적치료제"},{"type":"p","text":"허셉틴은 성분명 트라스투주맙의 제품명입니다. 일부 유방암은 암세포 표면에 HER2라는 단백질이 지나치게 많아 빨리 자라는데, 이를 HER2 양성이라고 합니다. 트라스투주맙은 HER2에 달라붙어 암세포가 자라라는 신호를 막는 항체 약으로, 표적치료제에 속합니다 [4]. 같은 성분의 다른 제품(바이오시밀러)도 쓰이며, 부작용을 살피는 원칙은 같습니다."},{"type":"p","text":"표적치료제는 정상세포를 넓게 공격하는 세포독성 항암제와 작용 방식이 달라 탈모, 심한 구토, 백혈구가 크게 떨어지는 골수 억제는 허셉틴 자체로는 드뭅니다 [4]. 그런데 실제로는 허셉틴을 파클리탁셀·도세탁셀 같은 항암제와 함께 맞는 기간이 있어서, 이 시기에 생기는 부작용은 대부분 함께 쓰는 항암제 쪽에서 옵니다. 반대로 항암제가 끝나고 허셉틴만 맞는 기간에는 몸이 한결 편해졌다고 느끼는 경우가 많습니다."},{"type":"h2","id":"infusion","text":"첫 주입 때 생길 수 있는 허셉틴 부작용 — 오한·발열(주입 반응)"},{"type":"p","text":"허셉틴을 처음 맞는 날 또는 맞고 몇 시간 안에 으슬으슬 춥고 떨리거나, 열이 나거나, 두통·구역·몸살 기운이 생길 수 있습니다. 이를 주입 반응이라고 하며, 대부분 첫 주입 때 가장 흔하고 두 번째부터는 줄어드는 경우가 많습니다 [5]. 그래서 첫 주입은 시간을 길게 잡고 지켜보며, 이상이 없으면 이후에는 주입 시간을 줄이기도 합니다."},{"type":"ul","items":["주입 중에 춥거나 가슴이 답답하거나 숨이 차면 바로 간호사에게 알립니다. 속도를 늦추거나 잠시 멈추고 약을 쓰면 대부분 가라앉습니다.","집에 돌아온 뒤 저녁에 오한·미열이 생기면 체온을 재서 시간과 함께 적어 둡니다.","숨이 몹시 차거나 입술·얼굴이 붓고 두드러기가 번지면 바로 응급실로 갑니다.","정맥주사 대신 허벅지 피부밑에 맞는 피하주사 제형을 쓰는 경우도 있으며, 이때는 주사 부위가 붉어지거나 아플 수 있습니다."]},{"type":"h2","id":"heart","text":"허셉틴 부작용 중 가장 주의할 것 — 심장 기능 저하"},{"type":"p","text":"HER2는 심장 근육 세포에도 있어서, 허셉틴을 맞는 동안 심장이 피를 뿜어내는 힘(좌심실 박출률)이 떨어질 수 있습니다. 세포독성 항암제 일부가 주는 심장 손상과 달리, 허셉틴에 의한 저하는 약을 멈추거나 치료하면 회복되는 경우가 많다는 점이 다릅니다."},{"type":"p","text":"초기 임상시험 7건의 기록을 다시 분석한 연구에서 심장 기능 이상은 함께 쓰는 약에 따라 크게 달랐습니다. 안트라사이클린 계열과 사이클로포스파마이드를 허셉틴과 동시에 쓴 경우 27%로 가장 높았고, 파클리탁셀과 함께 쓴 경우 13%, 허셉틴 단독은 3~7%였습니다. 심장 기능 이상이 생긴 환자의 79%는 심부전 표준 치료로 호전되었습니다 [1]. 이 결과 이후 안트라사이클린과 허셉틴을 동시에 쓰지 않고 순서를 나누는 방식이 자리 잡았습니다."},{"type":"p","text":"수술 후 보조요법으로 허셉틴을 1년 맞은 환자를 11년 추적한 대규모 임상시험에서는 관찰만 한 군보다 재발 위험이 24%, 사망 위험이 26% 낮았고, 심장 독성은 전체적으로 낮게 유지되었으며 주로 치료 기간 중에 나타났습니다. 1년 투여군에서 이차 심장 사건은 4.4%였습니다 [2]. 크기가 작은 HER2 양성 유방암에서 파클리탁셀과 함께 12주, 이어서 허셉틴 단독 9개월을 맞은 연구에서는 증상이 있는 심부전이 0.5%였고, 증상 없이 박출률만 떨어진 환자 13명 중 11명은 짧게 쉰 뒤 허셉틴을 다시 이어 갔습니다 [3]."},{"type":"callout","tone":"info","title":"심장 검사는 왜 정기적으로 할까","text":"허셉틴을 시작하기 전에 심초음파(또는 핵의학 검사)로 기준 박출률을 재고, 치료 중에는 보통 3개월 간격으로 다시 잽니다. 수치가 기준 이상 떨어지면 잠시 쉬었다가 회복을 확인하고 다시 이어 가는 경우가 많습니다. 검사 일정은 치료를 안전하게 끝까지 이어 가기 위한 장치이지, 문제가 있다는 뜻이 아닙니다."},{"type":"m3svg","html":"<figure class=\"mag-figure\" data-oc-svg=\"topic\" style=\"margin:2em auto;max-width:560px\"><svg viewBox=\"0 0 480 470\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"hc-t hc-d\" style=\"width:100%;height:auto;font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif\">\n<title id=\"hc-t\">허셉틴 부작용, 함께 쓰는 약에 따른 심장 기능 이상 빈도와 1년 일정</title>\n<desc id=\"hc-d\">초기 임상시험 7건 분석에서 심장 기능 이상은 안트라사이클린과 사이클로포스파마이드 동시 병용 27%, 파클리탁셀 병용 13%, 허셉틴 단독 3~7%. 79%는 치료로 호전. 보조요법은 3주 간격 1년, 시작 전과 약 3개월마다 심초음파.</desc>\n<rect x=\"0\" y=\"0\" width=\"480\" height=\"470\" rx=\"18\" fill=\"#F4F7F5\"/>\n<text x=\"24\" y=\"40\" font-size=\"19\" font-weight=\"700\" fill=\"#26403a\">함께 쓰는 약에 따라 다른 심장 위험</text>\n<text x=\"24\" y=\"63\" font-size=\"12.5\" fill=\"#5C8073\">초기 임상시험 7건 분석 · Seidman 등 2002</text>\n<text x=\"24\" y=\"98\" font-size=\"13\" fill=\"#26403a\">안트라사이클린 동시</text>\n<rect x=\"170\" y=\"84\" width=\"216\" height=\"20\" rx=\"5\" fill=\"#C0533F\"/>\n<text x=\"394\" y=\"99\" font-size=\"13\" font-weight=\"700\" fill=\"#26403a\">27%</text>\n<text x=\"24\" y=\"132\" font-size=\"13\" fill=\"#26403a\">파클리탁셀 병용</text>\n<rect x=\"170\" y=\"118\" width=\"104\" height=\"20\" rx=\"5\" fill=\"#C9874A\"/>\n<text x=\"282\" y=\"133\" font-size=\"13\" font-weight=\"700\" fill=\"#26403a\">13%</text>\n<text x=\"24\" y=\"166\" font-size=\"13\" fill=\"#26403a\">허셉틴 단독</text>\n<rect x=\"170\" y=\"152\" width=\"48\" height=\"20\" rx=\"5\" fill=\"#5C8073\"/>\n<text x=\"226\" y=\"167\" font-size=\"13\" font-weight=\"700\" fill=\"#26403a\">3~7%</text>\n<rect x=\"24\" y=\"186\" width=\"432\" height=\"48\" rx=\"12\" fill=\"#E3EEE8\"/>\n<text x=\"40\" y=\"216\" font-size=\"13.5\" fill=\"#26403a\"><tspan font-weight=\"700\" fill=\"#2F6B4F\">79%</tspan>는 심부전 표준 치료로 호전 · 지금은 동시 병용을 피함</text>\n<text x=\"24\" y=\"274\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\">보조요법 1년, 3주마다 한 번</text>\n<line x1=\"34\" y1=\"312\" x2=\"446\" y2=\"312\" stroke=\"#9DB8AE\" stroke-width=\"3\"/>\n<g fill=\"#5C8073\"><circle cx=\"34\" cy=\"312\" r=\"5\"/><circle cx=\"58\" cy=\"312\" r=\"5\"/><circle cx=\"82\" cy=\"312\" r=\"5\"/><circle cx=\"106\" cy=\"312\" r=\"5\"/><circle cx=\"130\" cy=\"312\" r=\"5\"/><circle cx=\"154\" cy=\"312\" r=\"5\"/><circle cx=\"178\" cy=\"312\" r=\"5\"/><circle cx=\"202\" cy=\"312\" r=\"5\"/><circle cx=\"226\" cy=\"312\" r=\"5\"/><circle cx=\"250\" cy=\"312\" r=\"5\"/><circle cx=\"274\" cy=\"312\" r=\"5\"/><circle cx=\"298\" cy=\"312\" r=\"5\"/><circle cx=\"322\" cy=\"312\" r=\"5\"/><circle cx=\"346\" cy=\"312\" r=\"5\"/><circle cx=\"370\" cy=\"312\" r=\"5\"/><circle cx=\"394\" cy=\"312\" r=\"5\"/><circle cx=\"418\" cy=\"312\" r=\"5\"/><circle cx=\"442\" cy=\"312\" r=\"5\"/></g>\n<g fill=\"#B23A2B\"><path d=\"M34 292 l6 -10 h-12 z\"/><path d=\"M130 292 l6 -10 h-12 z\"/><path d=\"M226 292 l6 -10 h-12 z\"/><path d=\"M322 292 l6 -10 h-12 z\"/><path d=\"M418 292 l6 -10 h-12 z\"/></g>\n<text x=\"24\" y=\"340\" font-size=\"11.5\" fill=\"#33504a\">시작</text><text x=\"416\" y=\"340\" font-size=\"11.5\" fill=\"#33504a\">1년</text>\n<circle cx=\"32\" cy=\"364\" r=\"5\" fill=\"#5C8073\"/><text x=\"44\" y=\"368\" font-size=\"12\" fill=\"#26403a\">주입일(3주 간격)</text>\n<path d=\"M190 368 l6 -10 h-12 z\" fill=\"#B23A2B\"/><text x=\"204\" y=\"368\" font-size=\"12\" fill=\"#26403a\">심장 검사(시작 전·약 3개월마다)</text>\n<text x=\"24\" y=\"404\" font-size=\"12.5\" fill=\"#26403a\">집에서: 매주 체중 · 발목 붓기 · 누우면 숨참 · 주입일 체온</text>\n<text x=\"24\" y=\"440\" font-size=\"11.5\" fill=\"#6B827B\">자료: J Clin Oncol 2002 · Lancet 2017(HERA) · 국가암정보센터</text>\n<text x=\"24\" y=\"458\" font-size=\"11.5\" fill=\"#6B827B\">온코케어 AI · 정보 목적, 개인 일정은 의료진이 정합니다</text>\n</svg></figure>"},{"type":"h2","id":"with-chemo","text":"함께 맞는 항암제 부작용과 구분하기 — 파클리탁셀·도세탁셀"},{"type":"p","text":"HER2 양성 유방암은 허셉틴 단독보다 항암제와 함께 시작하는 경우가 많습니다. 이 기간에 생기는 증상을 약별로 나눠 보면 무엇을 누구에게 물어야 할지 정리가 됩니다. 아래는 흔히 알려진 경향이며, 같은 증상이라도 원인은 의료진이 판단합니다."},{"type":"ul","items":["허셉틴 쪽 — 첫 주입 때 오한·발열, 피로, 두통, 가벼운 설사, 그리고 드물지만 중요한 심장 기능 저하.","파클리탁셀·도세탁셀 쪽 — 탈모, 손발저림(말초신경병증), 백혈구 감소와 그로 인한 열, 손발톱 변화, 몸이 붓는 부종(도세탁셀), 근육·관절통.","퍼투주맙을 함께 쓰는 경우 — 설사가 더 잦을 수 있어 하루 횟수를 적어 두는 것이 좋습니다.","겹치는 증상 — 피로와 설사는 양쪽 모두에서 올 수 있습니다. 시작한 날짜와 주입일의 관계를 기록하면 구분에 도움이 됩니다."]},{"type":"p","text":"특히 발이 붓는 증상은 도세탁셀의 부종일 수도, 심장 기능 저하의 신호일 수도 있어 혼자 판단하기 어렵습니다. 붓기가 시작된 날짜와 체중 변화, 숨참이 함께 있는지를 적어 가면 의료진이 원인을 가리는 데 큰 도움이 됩니다. 항암제별 부작용은 「유방암 항암」 글에서 수술 전후로 나눠 더 자세히 다룹니다."},{"type":"h2","id":"schedule","text":"얼마나 맞을까 — 3주 간격 1년, 그리고 피하주사"},{"type":"p","text":"수술 전후 보조요법에서는 보통 3주에 한 번, 모두 1년(약 17~18회)을 맞습니다 [2]. 처음에 조금 많은 용량으로 시작하고 이후 유지 용량으로 맞으며, 항암제와 함께 쓰는 기간에는 매주 맞는 일정도 있습니다. 전이성 유방암에서는 효과와 부작용을 보면서 기간을 정합니다. 정맥주사는 첫 회 약 90분, 이후 30분 정도로 줄이는 경우가 많고, 피하주사 제형은 몇 분이면 끝나 병원에 머무는 시간이 짧습니다. 어느 쪽을 쓸지는 의료진과 상의해 정합니다."},{"type":"p","text":"1년 동안 같은 일정이 반복되다 보면 주입일과 심장 검사일, 함께 먹는 약의 일정이 뒤섞이기 쉽습니다. 다음 주입일과 다음 심장 검사 예정일을 달력에 함께 적어 두면, 검사를 빠뜨려 주입이 미뤄지는 일을 줄일 수 있습니다."},{"type":"h2","id":"home-check","text":"1년 동안 집에서 확인할 것 — 체중·붓기·숨참·체온"},{"type":"ul","items":["체중 — 매주 같은 요일 아침에 잽니다. 며칠 사이에 2kg 넘게 늘면 몸에 물이 차는 신호일 수 있습니다.","발목·정강이 붓기 — 손가락으로 눌렀을 때 자국이 오래 남는지 봅니다.","숨참 — 계단을 오를 때 예전보다 숨이 찬지, 누우면 숨이 차서 베개를 높여야 하는지, 밤에 숨이 차서 깨는지.","가슴 두근거림·어지러움 — 언제, 몇 분 동안이었는지.","주입 당일 체온 — 오한이 있으면 시간과 함께 기록합니다.","설사·피로 — 하루 횟수와 일상생활이 가능한 정도를 숫자로(0~10) 남깁니다."]},{"type":"m3svg","html":"<!-- M3:SVG --><figure class=\"m3-card not-prose\" style=\"margin:2.2em 0\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 430\" width=\"100%\" role=\"img\" aria-label=\"이 글의 핵심: 첫 주입 때 생길 수 있는 허셉틴 부작용 / 부작용 중 가장 주의할 것 / 함께 맞는 항암제 부작용과 구분하기 / 얼마나 맞을까\" style=\"display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Noto Sans JP','Malgun Gothic',sans-serif\"><defs><linearGradient id=\"m3282500g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#26403a\"/><stop offset=\"1\" stop-color=\"#5C8073\"/></linearGradient><linearGradient id=\"m3282500v\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5C8073\"/><stop offset=\"1\" stop-color=\"#5C8073\" stop-opacity=\"0.15\"/></linearGradient><clipPath id=\"m3282500c\"><rect width=\"480\" height=\"430\" rx=\"18\"/></clipPath></defs><g clip-path=\"url(#m3282500c)\"><rect width=\"480\" height=\"430\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"106\" fill=\"url(#m3282500g)\"/><circle cx=\"446\" cy=\"18\" r=\"92\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.10\" stroke-width=\"18\"/><circle cx=\"446\" cy=\"18\" r=\"46\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.14\"/><circle cx=\"446\" cy=\"18\" r=\"140\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.07\" stroke-dasharray=\"3 7\"/><polyline points=\"0,90 249.60000000000002,90 264,76 278.4,102 292.8,82 302.4,90 480,90\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.45\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"24\" y=\"20\" width=\"117\" height=\"24\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"0.16\"/><circle cx=\"36\" cy=\"32\" r=\"4\" fill=\"#ffffff\" fill-opacity=\"0.85\"/><text x=\"46\" y=\"37\" fill=\"#ffffff\" font-size=\"12.5\" font-weight=\"800\" letter-spacing=\"0.5\">이 글의 핵심</text><text x=\"24\" y=\"76\" fill=\"#ffffff\" font-size=\"20.5\" font-weight=\"800\">허셉틴 부작용</text><line x1=\"39\" y1=\"145\" x2=\"39\" y2=\"343\" stroke=\"url(#m3282500v)\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"62\" y=\"126\" width=\"394\" height=\"70\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"136\" width=\"3.5\" height=\"50\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"150\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">첫 주입 때 생길 수</text><text x=\"76\" y=\"174\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"600\">있는 허셉틴 부작용</text><rect x=\"62\" y=\"208\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"218\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"232\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">부작용 중 가장 주의할 것</text><rect x=\"62\" y=\"266\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"276\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"290\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">함께 맞는 항암제 부작용과 구분하기</text><rect x=\"62\" y=\"324\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"334\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"348\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">얼마나 맞을까</text><circle cx=\"39\" cy=\"145\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"145\" r=\"12\" fill=\"url(#m3282500g)\"/><text x=\"39\" y=\"149.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">1</text><circle cx=\"39\" cy=\"227\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"227\" r=\"12\" fill=\"url(#m3282500g)\"/><text x=\"39\" y=\"231.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">2</text><circle cx=\"39\" cy=\"285\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"285\" r=\"12\" fill=\"url(#m3282500g)\"/><text x=\"39\" y=\"289.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">3</text><circle cx=\"39\" cy=\"343\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"343\" r=\"12\" fill=\"url(#m3282500g)\"/><text x=\"39\" y=\"347.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">4</text><rect x=\"0\" y=\"386\" width=\"480\" height=\"44\" fill=\"#26403a\" fill-opacity=\"0.05\"/><circle cx=\"31\" cy=\"408\" r=\"7\" fill=\"url(#m3282500g)\"/><text x=\"46\" y=\"413\" fill=\"#26403a\" font-size=\"13\" font-weight=\"800\">온코케어 AI</text><text x=\"456\" y=\"413\" fill=\"#26403a\" fill-opacity=\"0.7\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">한눈에 보는 요약</text></g><rect x=\"0.5\" y=\"0.5\" width=\"479\" height=\"429\" rx=\"18\" fill=\"none\" stroke=\"#26403a\" stroke-opacity=\"0.16\"/></svg></figure><!-- /M3:SVG -->"},{"type":"h2","id":"when-to-call","text":"이럴 땐 다음 주입일을 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["누우면 숨이 차거나 밤에 숨이 차서 깸, 가벼운 활동에도 숨이 참","며칠 사이 체중이 2kg 넘게 늘고 발목이 붓기 시작함","가슴이 아프거나 두근거림이 계속됨, 어지러워 쓰러질 것 같음","안내받은 기준 이상의 열(항암제를 함께 맞는 기간이라면 해열제를 먹기 전에 먼저 연락)","하루 4회 이상 늘어난 설사, 물도 넘기기 어려운 구토","마른기침과 숨참이 새로 생겨 계속됨"]},{"type":"p","text":"연락할 때는 「허셉틴(또는 함께 맞는 항암제 이름) 치료 중」이라는 사실과 마지막 주입일, 체중·체온 같은 숫자를 함께 전하세요. 숨이 몹시 차거나 가슴 통증이 심한 등 위급하다고 느껴지면 119나 가까운 응급실이 먼저입니다."},{"type":"h2","id":"record-with-app","text":"온코케어 AI로 허셉틴 일정과 심장 검사 결과를 함께 기록하는 법"},{"type":"p","text":"온코케어 AI의 항암 일정 기능에 허셉틴 주입일과 함께 맞는 항암제 일정을 넣고, 다음 심장 검사 예정일도 같이 적어 두면 1년 일정이 한 화면에 정리됩니다. 증상 체크인에는 주입 당일 체온과 오한, 매주 체중, 붓기와 숨참 정도를 남기고, 받은 심초음파 결과(박출률)는 검사 결과 정리 기능에 모아 이전 수치와 비교할 수 있습니다. 가족·보호자 연결을 해 두면 보호자도 같은 기록을 확인할 수 있습니다. 진료실에서는 이 기록을 그대로 보여 주면 됩니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 투여 일정과 용량, 휴약과 재개 여부는 반드시 담당 의료진·약사와 상의해 정하세요."}],"faq":[{"q":"허셉틴도 머리가 빠지나요?","a":"허셉틴 자체로는 탈모가 드뭅니다. 허셉틴을 시작할 때 함께 맞는 파클리탁셀·도세탁셀 같은 항암제 때문에 탈모가 생기며, 항암제가 끝나고 허셉틴만 맞는 기간에는 머리카락이 다시 자라기 시작합니다."},{"q":"허셉틴 부작용 중 심장은 얼마나 걱정해야 하나요?","a":"심장 기능 저하는 주의할 부작용이지만, 안트라사이클린 계열과 동시에 쓰지 않는 요즘 방식에서는 빈도가 낮고 대부분 치료나 휴약으로 회복됩니다. 그래서 시작 전과 치료 중 정기적으로 심초음파를 하며, 숨참·붓기·체중 증가가 있으면 바로 알리면 됩니다."},{"q":"첫 주입 날 밤에 오한과 열이 났어요.","a":"첫 주입 때 흔한 주입 반응일 수 있으며 두 번째부터는 줄어드는 경우가 많습니다. 체온과 시간을 기록해 치료 병원에 알리세요. 항암제를 함께 맞는 기간이라면 감염에 의한 열일 수 있으므로 안내받은 기준에 따라 바로 연락합니다."},{"q":"심장 수치가 떨어져 허셉틴을 쉬자고 합니다. 치료가 끝난 건가요?","a":"대부분은 아닙니다. 연구에서도 증상 없이 박출률만 떨어진 환자 다수가 짧게 쉰 뒤 다시 허셉틴을 이어 갔습니다. 재개 시점은 다음 심장 검사 결과를 보고 의료진이 정합니다."},{"q":"온코케어 AI가 허셉틴 일정을 정해 주나요?","a":"아니요. 온코케어 AI는 주입일·검사 일정·증상·검사 결과를 기록하고 정리하는 도구이며, 투여 계획은 담당 의료진이 정합니다. 날짜별 기록은 진료 때 상황을 빠르게 전하는 데 도움이 됩니다."}],"references":[{"label":"Seidman A, et al. Cardiac dysfunction in the trastuzumab clinical trials experience. J Clin Oncol 2002;20:1215-1221 (PMID 11870163)","url":"https://pubmed.ncbi.nlm.nih.gov/11870163/"},{"label":"Cameron D, et al. 11 years' follow-up of trastuzumab after adjuvant chemotherapy in HER2-positive early breast cancer: final analysis of the HERceptin Adjuvant (HERA) trial. Lancet 2017;389:1195-1205 (PMID 28215665)","url":"https://pubmed.ncbi.nlm.nih.gov/28215665/"},{"label":"Tolaney SM, et al. Adjuvant paclitaxel and trastuzumab for node-negative, HER2-positive breast cancer. N Engl J Med 2015;372:134-141 (PMID 25564897)","url":"https://pubmed.ncbi.nlm.nih.gov/25564897/"},{"label":"국가암정보센터. 항암화학요법 — 표적치료제(정의·분류·부작용)","url":"https://www.cancer.go.kr/lay1/S1T289C847/contents.do"},{"label":"약학정보원. 허셉틴주150mg(트라스투주맙) — 허가정보·사용상의 주의사항","url":"https://www.health.kr/drug/A11AMMMMM2096"}],"related":["breast-cancer-chemo-before-after-surgery-side-effects","verzenio-abemaciclib-side-effects-guide","when-to-call-your-oncology-team"]},
  // 2026-10-27 — 사용자 지시 「색인 원활 표면 신규 2편 · 선조사 후 작성」(온코케어 핵심 kw: 위암 항암)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-27","updatedAt":"2026-10-27","appLinks":true,"slug":"stomach-cancer-chemotherapy-adjuvant-stage4-guide","title":"위암 항암 — 수술 후 보조요법과 4기 치료, 부작용·식사 관리","description":"위암 항암치료를 수술 후 보조요법·수술 전 선행·4기와 재발 치료로 나눠 왜 하는지, 카페시타빈+옥살리플라틴과 S-1의 일정과 기간, HER2·면역항암제 검사, 위절제 뒤 식사와 부작용을 함께 관리하는 법을 연구 근거와 함께 정리했습니다.","category":"치료 가이드","categoryColor":"#B9560C","readMin":10,"hero":"stomach-chemo-light-snack-tea-still-life","heroAlt":"위암 항암 중 가벼운 간식 — 창가 탁자 위 따뜻한 차 한 잔과 크래커 한 접시, 작은 화분","tldr":["위암 항암은 목적이 셋입니다. 2·3기에서 수술로 암을 떼어 낸 뒤 남았을지 모를 암세포를 줄이는 보조요법, 수술 범위를 줄이거나 수술 가능성을 보려는 선행 항암, 그리고 4기·재발에서 병을 조절하고 생활을 지키는 항암입니다.","수술 후 보조요법은 카페시타빈+옥살리플라틴(3주 주기, 약 6개월) 또는 먹는 항암제 S-1(약 1년)이 대표적입니다. 큰 임상시험에서 수술만 한 경우보다 재발 없이 지내는 비율과 생존율을 높였습니다.","위를 잘라낸 뒤라 식사량이 줄어든 상태에서 구역·입맛 저하가 겹치기 쉽습니다. 적게 자주 먹기, 매주 체중 기록, 손발저림과 열을 날짜별로 남기는 것이 다음 회차 조정의 근거가 됩니다."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「위암 항암」을 찾아본 분, 특히 위 절제 수술을 마치고 「이제 항암을 하자」는 설명을 들은 환자와 가족, 혹은 4기 진단 뒤 항암 일정을 앞둔 분을 위해 썼습니다. 어떤 약을 쓸지는 의료진이 정하지만, 왜 하는지와 주기 안에서 무엇을 보면 되는지 알아 두면 불안이 줄어듭니다."},{"type":"h2","id":"why-after-surgery","text":"수술로 떼어 냈는데 왜 위암 항암을 또 할까"},{"type":"p","text":"위암 치료의 기본은 수술이고, 아주 이른 단계는 내시경 절제로 끝나기도 합니다 [5]. 그런데 암이 위벽 깊이 들어갔거나 주변 림프절까지 번진 2·3기에서는, 수술로 보이는 암을 모두 떼어 내도 영상검사에 잡히지 않을 만큼 작은 암세포가 몸 어딘가에 남아 있을 수 있습니다. 이 암세포가 자라면 재발로 이어집니다. 수술 후 보조 항암은 이렇게 보이지 않는 암세포를 줄여 재발 위험을 낮추려는 치료입니다."},{"type":"p","text":"그래서 보조 항암은 「암이 남아 있어서」가 아니라 「다시 생길 가능성을 줄이기 위해」 하는 치료입니다. 반대로 점막에 머문 1기 초반처럼 재발 위험이 낮으면 수술이나 내시경 절제 뒤 추적검사만 하는 경우가 많습니다. 내가 어느 쪽인지는 수술 후 조직검사(병리) 결과로 정해지므로, 결과지를 받을 때 병기와 림프절 전이 개수를 함께 물어보세요."},{"type":"h2","id":"goals-by-stage","text":"병기에 따라 달라지는 항암의 목적 — 보조·선행·4기"},{"type":"ul","items":["수술 후 보조 항암 — 2·3기 위암에서 수술을 마친 뒤 시작합니다. 회복 상태를 보고 보통 수술 후 몇 주 안에 첫 회차를 맞고, 정해진 기간(약 6개월~1년)을 채우는 것이 목표입니다.","수술 전 선행 항암 — 암이 크거나 주변으로 번져 바로 수술하기 부담스러울 때, 먼저 항암으로 범위를 줄인 뒤 수술을 검토합니다. 병원과 병기에 따라 수술 전후로 나눠 하기도 합니다.","4기·재발 위암의 항암 — 간·복막·먼 림프절 등으로 퍼진 경우에는 수술보다 전신 항암이 중심입니다. 암의 진행을 늦추고 증상을 줄이면서 먹고 움직이는 생활을 오래 지키는 것이 목표입니다."]},{"type":"callout","tone":"info","title":"먼저 알아 둘 점","text":"아래 숫자는 임상시험 참여자의 결과로, 수술 뒤 회복이 비교적 좋은 환자가 많이 포함되었습니다. 같은 병기라도 나이, 체력, 수술 뒤 식사량, 신장·간 기능에 따라 약과 용량이 달라집니다. 나에게 맞는 계획은 담당 의료진이 정합니다."},{"type":"m3svg","html":"<figure class=\"mag-figure\" data-oc-svg=\"topic\" style=\"margin:2em auto;max-width:560px\"><svg viewBox=\"0 0 480 460\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"gc-t gc-d\" style=\"width:100%;height:auto;font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif\">\n<title id=\"gc-t\">위암 항암, 목적별 구분과 대표 보조요법 일정</title>\n<desc id=\"gc-d\">2·3기 수술 후에는 재발을 줄이는 보조 항암, 수술이 부담스러우면 선행 항암, 4기·재발은 병을 조절하는 전신 항암. 카페시타빈+옥살리플라틴은 3주 주기 8회 약 6개월, S-1은 4주 복용 2주 휴약을 1년.</desc>\n<rect x=\"0\" y=\"0\" width=\"480\" height=\"460\" rx=\"18\" fill=\"#F4F7F5\"/>\n<text x=\"24\" y=\"40\" font-size=\"19\" font-weight=\"700\" fill=\"#26403a\">위암 항암, 목적은 세 가지</text>\n<text x=\"24\" y=\"64\" font-size=\"13\" fill=\"#5C8073\">국가암정보센터 치료 원칙 · 개인 계획은 의료진이 정합니다</text>\n<rect x=\"24\" y=\"80\" width=\"432\" height=\"46\" rx=\"10\" fill=\"#E3EEE8\"/>\n<text x=\"40\" y=\"108\" font-size=\"14\" font-weight=\"700\" fill=\"#2F6B4F\">수술 후 보조</text>\n<text x=\"160\" y=\"108\" font-size=\"13.5\" fill=\"#26403a\">2·3기 · 남은 암세포를 줄여 재발 ↓</text>\n<rect x=\"24\" y=\"132\" width=\"432\" height=\"46\" rx=\"10\" fill=\"#FBEFD9\"/>\n<text x=\"40\" y=\"160\" font-size=\"14\" font-weight=\"700\" fill=\"#A36A12\">수술 전 선행</text>\n<text x=\"160\" y=\"160\" font-size=\"13.5\" fill=\"#26403a\">범위를 줄인 뒤 수술 검토</text>\n<rect x=\"24\" y=\"184\" width=\"432\" height=\"46\" rx=\"10\" fill=\"#F8DEDA\"/>\n<text x=\"40\" y=\"212\" font-size=\"14\" font-weight=\"700\" fill=\"#B23A2B\">4기·재발</text>\n<text x=\"160\" y=\"212\" font-size=\"13.5\" fill=\"#26403a\">진행을 늦추고 생활 지키기 · HER2 검사</text>\n<text x=\"24\" y=\"268\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\">대표 보조요법의 한 주기</text>\n<text x=\"24\" y=\"298\" font-size=\"13\" font-weight=\"700\" fill=\"#33504a\">카페시타빈+옥살리플라틴</text>\n<text x=\"24\" y=\"316\" font-size=\"11.5\" fill=\"#5C8073\">3주 × 8회 ≈ 6개월</text>\n<rect x=\"210\" y=\"286\" width=\"20\" height=\"22\" rx=\"4\" fill=\"#5C8073\"/>\n<rect x=\"232\" y=\"286\" width=\"140\" height=\"22\" rx=\"4\" fill=\"#9DB8AE\"/>\n<rect x=\"374\" y=\"286\" width=\"70\" height=\"22\" rx=\"4\" fill=\"#E3EEE8\"/>\n<text x=\"210\" y=\"326\" font-size=\"11\" fill=\"#33504a\">주사</text><text x=\"262\" y=\"326\" font-size=\"11\" fill=\"#33504a\">먹는 약 2주</text><text x=\"384\" y=\"326\" font-size=\"11\" fill=\"#33504a\">쉬는 1주</text>\n<text x=\"24\" y=\"362\" font-size=\"13\" font-weight=\"700\" fill=\"#33504a\">S-1(먹는 항암제)</text>\n<text x=\"24\" y=\"380\" font-size=\"11.5\" fill=\"#5C8073\">6주 주기 · 1년</text>\n<rect x=\"210\" y=\"350\" width=\"156\" height=\"22\" rx=\"4\" fill=\"#9DB8AE\"/>\n<rect x=\"368\" y=\"350\" width=\"76\" height=\"22\" rx=\"4\" fill=\"#E3EEE8\"/>\n<text x=\"250\" y=\"390\" font-size=\"11\" fill=\"#33504a\">4주 복용</text><text x=\"380\" y=\"390\" font-size=\"11\" fill=\"#33504a\">쉬는 2주</text>\n<text x=\"24\" y=\"430\" font-size=\"11.5\" fill=\"#6B827B\">자료: CLASSIC(Lancet 2012) · ACTS-GC(NEJM 2007) · 국가암정보센터</text>\n<text x=\"24\" y=\"448\" font-size=\"11.5\" fill=\"#6B827B\">온코케어 AI · 정보 목적</text>\n</svg></figure>"},{"type":"h2","id":"regimens","text":"대표 요법 — 카페시타빈+옥살리플라틴과 S-1, 일정과 기간"},{"type":"p","text":"카페시타빈+옥살리플라틴(흔히 영문 약자로 부르는 병용 요법)은 3주를 한 주기로, 첫날 병원에서 옥살리플라틴 주사를 맞고 먹는 약인 카페시타빈을 2주 동안 하루 두 번 먹은 뒤 1주를 쉽니다. 보조요법에서는 이 주기를 8번, 약 6개월 반복하는 것이 일반적입니다. 위를 크게 절제(D2 림프절 절제)한 2·3기 환자 1,035명을 비교한 임상시험에서 이 병용 요법을 받은 군의 3년 무병생존율은 74%로, 수술만 받은 군(59%)보다 높았습니다 [1]."},{"type":"p","text":"S-1(티에스원)은 먹는 항암제로, 4주 동안 매일 먹고 2주를 쉬는 6주 주기를 수술 후 1년간 이어 가는 방식이 대표적입니다. 1,059명이 참여한 임상시험에서 3년 생존율은 80.1%로 수술만 받은 군(70.1%)보다 높았고, 3·4등급의 흔한 부작용은 식욕부진 6.0%, 구역 3.7%, 설사 3.1% 정도였습니다 [2]. 주사를 맞으러 오는 횟수가 적은 대신, 집에서 정해진 대로 빠짐없이 먹는 관리가 중요합니다."},{"type":"p","text":"두 요법 중 무엇을 쓸지는 병기, 수술 뒤 회복 속도, 신장 기능, 나이 등을 함께 보고 정합니다. 최근에는 다른 약을 더한 병용 요법도 병기에 따라 쓰이므로, 처방받은 요법의 이름과 주기, 총 몇 회차인지를 첫 상담에서 적어 두면 이후 일정을 가늠하기 쉽습니다."},{"type":"h2","id":"targeted-immuno","text":"표적치료제·면역항암제는 언제 쓰나 — HER2와 면역 검사"},{"type":"p","text":"4기나 재발 위암에서는 암 조직 검사 결과에 따라 약 조합이 달라집니다. 대표적인 것이 HER2 검사입니다. HER2라는 단백질이 많이 나오는 위암(HER2 양성)에서는 항암제에 표적치료제 트라스투주맙을 더하는 방법이 쓰이고, 진행성 위암 임상시험에서 생존 기간 중앙값이 13.8개월로 항암제만 쓴 군(11.1개월)보다 길었습니다 [3]."},{"type":"p","text":"면역항암제는 몸의 면역세포가 암을 공격하도록 돕는 약입니다. 진행성 위암 1차 치료에서 면역관문억제제 니볼루맙을 항암제와 함께 쓴 대규모 임상시험이 있었고, PD-L1 같은 검사 결과가 대상자를 고르는 데 쓰입니다 [4]. 이런 약은 부작용 양상도 세포독성 항암제와 달라서, 피부 발진·설사·숨참·피로가 새로 생기면 시기와 상관없이 알려야 합니다. 면역항암제 부작용은 「면역항암제 부작용」 글에서 따로 정리했습니다."},{"type":"h2","id":"side-effects","text":"위암 항암 부작용 — 약마다 두드러지는 것"},{"type":"ul","items":["옥살리플라틴 — 주사 뒤 며칠간 찬 것에 닿거나 찬 음료를 마시면 손발·입 주변이 찌릿한 느낌, 회차가 쌓이며 늘어나는 손발저림(말초신경병증), 구역.","카페시타빈 — 손바닥·발바닥이 붉어지고 벗겨지는 손발 피부 변화, 설사, 입안 헐음. 자세한 관리는 「젤로다 부작용」 글에 있습니다.","S-1 — 식욕부진, 구역, 설사, 피부가 어두워지는 변화, 눈물이 잦아지는 증상.","공통 — 호중구 감소로 인한 감염 위험, 피로, 체중 감소."]},{"type":"p","text":"부작용이 생기면 의료진은 용량을 줄이거나, 휴약 기간을 늘리거나, 일부 약을 잠시 빼서 치료를 이어 갑니다. 정해진 기간을 끝까지 채우는 것이 보조요법에서 중요하기 때문에, 참고 견디기보다 일찍 알리고 조정받는 편이 결과적으로 치료를 지키는 길입니다. 옥살리플라틴을 맞은 뒤 며칠은 미지근한 음료를 마시고 냉장고 물건을 꺼낼 때 장갑을 끼면 찌릿함을 줄이는 데 도움이 됩니다. 손발저림이 쌓이는 과정은 「항암 손발저림」 글에서 더 자세히 다룹니다."},{"type":"h2","id":"after-gastrectomy","text":"위를 잘라낸 뒤 항암을 버티는 식사 — 적게, 자주, 기록"},{"type":"p","text":"위암 항암이 다른 암과 가장 다른 점은, 위 일부 또는 전체를 잘라낸 상태에서 항암이 시작된다는 것입니다. 한 번에 먹을 수 있는 양이 줄고, 음식이 장으로 빨리 내려가면서 식후에 어지럽거나 식은땀이 나고 배가 아픈 덤핑 증상이 생기기도 합니다. 여기에 항암제의 구역과 입맛 저하가 겹치면 체중이 빠르게 줄 수 있습니다."},{"type":"ul","items":["하루 5~6번으로 나눠 조금씩 먹고, 천천히 오래 씹습니다.","단 음료·국물을 한꺼번에 많이 마시면 덤핑이 심해질 수 있어, 물과 국은 식사 사이로 옮깁니다.","매 끼 단백질(달걀·두부·생선·살코기)을 먼저 몇 숟가락 챙깁니다.","매주 같은 요일·같은 시간에 체중을 재고, 지난 회차보다 얼마나 줄었는지 숫자로 남깁니다."]},{"type":"p","text":"체중이 계속 줄거나 먹는 양이 평소의 절반 아래로 떨어지면 다음 진료를 기다리지 말고 영양 상담을 요청하세요. 입맛이 없을 때 열량과 단백질을 채우는 방법은 「항암 치료 중 잘 먹는 법」 글에 정리해 두었습니다."},{"type":"h2","id":"cycle-checklist","text":"한 주기 안에서 집에서 확인할 것"},{"type":"ul","items":["투여 당일~3일 — 구역·구토, 찬 것에 대한 찌릿함, 먹은 양과 덤핑 증상.","1~2주째 — 체온을 하루 1~2번 재고, 안내받은 기준 이상의 열이나 오한이 있으면 바로 연락. 먹는 약은 복용 날짜에 체크해 빠뜨린 날을 기록합니다.","쉬는 주·다음 회차 전 — 손발저림이 단추 채우기·젓가락질에 지장을 주는지, 손발 피부가 벗겨지는지, 체중 변화."]},{"type":"p","text":"「힘들었다」보다 「둘째 주에 설사 하루 4번, 체중 1kg 감소, 손끝 저림으로 단추가 어려움」처럼 전하면 짧은 진료에서도 용량 조정이 빨라집니다."},{"type":"m3svg","html":"<!-- M3:SVG --><figure class=\"m3-card not-prose\" style=\"margin:2.2em 0\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 406\" width=\"100%\" role=\"img\" aria-label=\"이 글의 핵심: 병기에 따라 달라지는 항암의 목적 / 대표 요법 / 표적치료제·면역항암제는 언제 쓰나 / 항암 부작용\" style=\"display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Noto Sans JP','Malgun Gothic',sans-serif\"><defs><linearGradient id=\"m38880g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#26403a\"/><stop offset=\"1\" stop-color=\"#5C8073\"/></linearGradient><linearGradient id=\"m38880v\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5C8073\"/><stop offset=\"1\" stop-color=\"#5C8073\" stop-opacity=\"0.15\"/></linearGradient><clipPath id=\"m38880c\"><rect width=\"480\" height=\"406\" rx=\"18\"/></clipPath></defs><g clip-path=\"url(#m38880c)\"><rect width=\"480\" height=\"406\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"106\" fill=\"url(#m38880g)\"/><circle cx=\"446\" cy=\"18\" r=\"92\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.10\" stroke-width=\"18\"/><circle cx=\"446\" cy=\"18\" r=\"46\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.14\"/><circle cx=\"446\" cy=\"18\" r=\"140\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.07\" stroke-dasharray=\"3 7\"/><polyline points=\"0,90 249.60000000000002,90 264,76 278.4,102 292.8,82 302.4,90 480,90\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.45\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"24\" y=\"20\" width=\"117\" height=\"24\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"0.16\"/><circle cx=\"36\" cy=\"32\" r=\"4\" fill=\"#ffffff\" fill-opacity=\"0.85\"/><text x=\"46\" y=\"37\" fill=\"#ffffff\" font-size=\"12.5\" font-weight=\"800\" letter-spacing=\"0.5\">이 글의 핵심</text><text x=\"24\" y=\"76\" fill=\"#ffffff\" font-size=\"20.5\" font-weight=\"800\">위암 항암</text><line x1=\"39\" y1=\"145\" x2=\"39\" y2=\"319\" stroke=\"url(#m38880v)\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"62\" y=\"126\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"136\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"150\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">병기에 따라 달라지는 항암의 목적</text><rect x=\"62\" y=\"184\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"194\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"208\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">대표 요법</text><rect x=\"62\" y=\"242\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"252\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"266\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">표적치료제·면역항암제는 언제 쓰나</text><rect x=\"62\" y=\"300\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"310\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"324\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">항암 부작용</text><circle cx=\"39\" cy=\"145\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"145\" r=\"12\" fill=\"url(#m38880g)\"/><text x=\"39\" y=\"149.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">1</text><circle cx=\"39\" cy=\"203\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"203\" r=\"12\" fill=\"url(#m38880g)\"/><text x=\"39\" y=\"207.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">2</text><circle cx=\"39\" cy=\"261\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"261\" r=\"12\" fill=\"url(#m38880g)\"/><text x=\"39\" y=\"265.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">3</text><circle cx=\"39\" cy=\"319\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"319\" r=\"12\" fill=\"url(#m38880g)\"/><text x=\"39\" y=\"323.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">4</text><rect x=\"0\" y=\"362\" width=\"480\" height=\"44\" fill=\"#26403a\" fill-opacity=\"0.05\"/><circle cx=\"31\" cy=\"384\" r=\"7\" fill=\"url(#m38880g)\"/><text x=\"46\" y=\"389\" fill=\"#26403a\" font-size=\"13\" font-weight=\"800\">온코케어 AI</text><text x=\"456\" y=\"389\" fill=\"#26403a\" fill-opacity=\"0.7\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">한눈에 보는 요약</text></g><rect x=\"0.5\" y=\"0.5\" width=\"479\" height=\"405\" rx=\"18\" fill=\"none\" stroke=\"#26403a\" stroke-opacity=\"0.16\"/></svg></figure><!-- /M3:SVG -->"},{"type":"h2","id":"when-to-call","text":"이럴 땐 다음 진료를 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["안내받은 기준 이상의 열이나 오한 — 해열제를 먹기 전에 먼저 연락하라는 안내를 받았다면 그 안내를 따릅니다.","하루 4회 이상 늘어난 설사, 물도 넘기기 어려운 구토, 어지러움","검은 변이나 피가 섞인 구토","손발바닥이 붓고 물집이 생겨 걷거나 물건을 쥐기 어려움","갑자기 숨이 차거나 가슴이 아픔, 한쪽 다리가 붓고 아픔","먹는 항암제를 며칠 빠뜨렸거나 두 번 먹었을 때"]},{"type":"p","text":"연락할 때는 요법 이름, 마지막 투여일(먹는 약이면 며칠째인지), 체온과 설사 횟수 같은 숫자를 함께 전하세요. 의식이 흐려지거나 숨이 몹시 차는 등 위급하다고 느껴지면 119나 가까운 응급실이 먼저입니다."},{"type":"h2","id":"record-with-app","text":"온코케어 AI로 위암 항암 일정과 체중·식사를 함께 기록하는 법"},{"type":"p","text":"보조요법은 6개월에서 1년까지 이어지는 긴 치료라, 몇 번째 주기 며칠째에 무엇이 있었는지 기억만으로 붙잡기 어렵습니다. 온코케어 AI의 항암 일정 기능에 요법과 투여일·복용 기간을 넣고, 증상 체크인에 체온·설사 횟수·손발저림 정도·식사량을 남기면 주기별 흐름이 한눈에 정리됩니다. 매주 잰 체중과 혈액검사 결과는 검사 결과 정리 기능으로 모아 이전 수치와 비교할 수 있고, 가족 보호자 연결을 해 두면 보호자도 같은 기록을 볼 수 있습니다. 진료실에서는 이 기록을 그대로 보여 주면 됩니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 항암 요법의 선택, 용량과 기간, 휴약과 복용 방법은 반드시 담당 의료진·약사와 상의해 정하세요."}],"faq":[{"q":"위암 수술 후 항암은 꼭 해야 하나요?","a":"병기에 따라 다릅니다. 2·3기처럼 재발 위험이 있는 경우에는 수술 후 보조 항암이 표준으로 권고되고, 임상시험에서 재발 없이 지내는 비율과 생존율을 높였습니다. 1기 초반처럼 위험이 낮으면 추적검사만 하기도 하므로, 병리 결과를 바탕으로 담당 의료진과 상의하세요."},{"q":"위암 항암은 얼마나 하나요?","a":"수술 후 보조요법은 카페시타빈+옥살리플라틴이면 3주 주기로 약 6개월, S-1이면 약 1년이 대표적입니다. 4기·재발 위암은 효과와 부작용을 보면서 기간을 정합니다."},{"q":"먹는 항암제는 주사보다 약한가요?","a":"먹는 약이라고 약한 것은 아닙니다. 카페시타빈과 S-1은 몸에서 주사 항암제와 비슷한 성분으로 바뀌어 작용하고, 설사·손발 피부 변화 같은 부작용도 생길 수 있습니다. 정해진 날짜에 빠짐없이 먹고 증상을 기록하세요."},{"q":"위를 잘라 식사량이 줄었는데 항암 중 체중이 계속 빠지면요?","a":"하루 5~6번 나눠 먹기, 단백질 먼저 먹기, 국물은 식사 사이로 옮기기를 해 보고, 매주 체중을 기록해 진료 때 보여 주세요. 계속 줄면 영양 상담이나 영양 보충을 요청할 수 있습니다."},{"q":"온코케어 AI가 항암 요법을 정해 주나요?","a":"아니요. 온코케어 AI는 일정·증상·체중·검사 결과를 기록하고 정리하는 도구이며, 요법 선택과 조정은 담당 의료진이 합니다. 날짜별 기록은 진료 때 상황을 빠르게 전하는 데 도움이 됩니다."}],"references":[{"label":"Bang YJ, et al. Adjuvant capecitabine and oxaliplatin for gastric cancer after D2 gastrectomy (CLASSIC). Lancet 2012;379:315-321 (PMID 22226517)","url":"https://pubmed.ncbi.nlm.nih.gov/22226517/"},{"label":"Sakuramoto S, et al. Adjuvant chemotherapy for gastric cancer with S-1, an oral fluoropyrimidine. N Engl J Med 2007;357:1810-1820 (PMID 17978289)","url":"https://pubmed.ncbi.nlm.nih.gov/17978289/"},{"label":"Bang YJ, et al. Trastuzumab in combination with chemotherapy versus chemotherapy alone for HER2-positive advanced gastric or gastro-oesophageal junction cancer (ToGA). Lancet 2010;376:687-697 (PMID 20728210)","url":"https://pubmed.ncbi.nlm.nih.gov/20728210/"},{"label":"Janjigian YY, et al. First-line nivolumab plus chemotherapy versus chemotherapy alone for advanced gastric, gastro-oesophageal junction, and oesophageal adenocarcinoma (CheckMate 649). Lancet 2021;398:27-40 (PMID 34102137)","url":"https://pubmed.ncbi.nlm.nih.gov/34102137/"},{"label":"국가암정보센터. 위암 — 치료 방법(내시경 절제·수술·항암화학요법·방사선)","url":"https://www.cancer.go.kr/lay1/program/S1T211C213/cancer/view.do?cancer_seq=4661&menu_seq=4677"}],"related":["stomach-cancer-symptoms-early-signs-screening","xeloda-capecitabine-side-effects-guide","eating-well-during-chemo"]},
  // 2026-10-27 — 사용자 지시 「색인 원활 표면 신규 2편 · 선조사 후 작성」(온코케어 핵심 kw: 대장암 항암)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-27","updatedAt":"2026-10-27","appLinks":true,"slug":"colorectal-cancer-chemotherapy-folfox-capox-duration","title":"대장암 항암 — 3개월·6개월 보조요법, 폴폭스·카폭스와 손발저림 관리","description":"대장암 항암치료를 병기별 목적(3기·고위험 2기 보조요법, 직장암 수술 전 항암방사선, 4기 전신 항암)으로 나누고, 폴폭스·카폭스의 일정과 3개월·6개월 기간이 정해지는 기준, RAS·MSI 검사와 표적·면역항암제, 옥살리플라틴 손발저림 점검법을 연구 근거와 함께 정리했습니다.","category":"치료 가이드","categoryColor":"#B9560C","readMin":10,"hero":"colorectal-chemo-warm-mug-notebook-still-life","heroAlt":"대장암 항암 중 일상 — 창가 탁자 위 따뜻한 머그잔 두 개와 기록 노트, 의자에 걸친 니트 담요","tldr":["대장암 항암은 병기에 따라 목적이 다릅니다. 3기와 재발 위험이 높은 2기는 수술 뒤 재발을 줄이는 보조요법, 직장암은 수술 전 항암방사선치료, 4기는 전신 항암으로 병을 조절하고 경우에 따라 수술 가능성을 다시 봅니다.","보조요법의 대표는 옥살리플라틴이 들어간 폴폭스(2주 주기)와 카폭스(3주 주기)입니다. 재발 위험이 낮은 3기에서는 카폭스 3개월이 6개월과 비슷한 효과를 보였고, 기간이 짧을수록 손발저림 부담이 줄어듭니다.","4기에서는 RAS 유전자·MSI 검사 결과에 따라 표적치료제나 면역항암제가 더해집니다. 회차가 쌓이며 늘어나는 손발저림은 단추·젓가락·계단 같은 일상 동작으로 점검해 일찍 알리는 것이 좋습니다."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「대장암 항암」을 찾아본 분, 특히 수술을 마치고 보조 항암 설명을 들었거나 4기 진단 뒤 항암 일정을 앞둔 환자와 가족을 위해 썼습니다. 요법 선택은 의료진이 하지만, 기간이 왜 그렇게 정해졌는지와 주기 안에서 무엇을 살필지 알면 긴 치료를 덜 막막하게 보낼 수 있습니다."},{"type":"h2","id":"goals-by-stage","text":"병기에 따라 달라지는 대장암 항암의 목적"},{"type":"p","text":"대장암 치료법을 정할 때 중요한 것은 종양의 크기보다 암세포가 장벽을 얼마나 깊이 파고들었는지, 림프절과 다른 장기로 번졌는지입니다. 치료는 수술을 중심으로 항암화학요법과 방사선치료를 병기에 맞춰 함께 씁니다 [4]. 외과·종양내과·방사선종양학과·영상의학과가 함께 보는 다학제 진료로 계획을 세우는 경우가 많습니다."},{"type":"ul","items":["1기 — 수술(또는 조기 병변은 내시경 절제)로 마무리하고 정기 추적검사를 하는 경우가 대부분입니다.","2기 — 대개 수술 뒤 경과를 보지만, 장이 막혔거나 뚫렸던 경우, 혈관·신경 침범처럼 재발 위험이 높은 소견이 있으면 보조 항암을 검토합니다.","3기 — 림프절 전이가 있는 단계로, 수술 후 보조 항암이 표준입니다.","직장암 — 골반 깊은 곳에 있어 국소 재발을 줄이기 위해 수술 전에 항암방사선치료를 먼저 하는 경우가 많습니다.","4기 — 간·폐 등으로 퍼진 경우로 전신 항암이 중심이며, 반응이 좋으면 전이 부위 수술을 다시 검토하기도 합니다."]},{"type":"callout","tone":"info","title":"먼저 알아 둘 점","text":"아래 숫자는 임상시험 참여자의 결과입니다. 같은 병기라도 나이, 체력, 수술 뒤 회복 정도, 장루 유무, 신장 기능에 따라 요법과 용량이 달라집니다. 나에게 맞는 계획은 담당 의료진이 정합니다."},{"type":"h2","id":"regimens","text":"대표 보조요법 — 폴폭스와 카폭스, 무엇이 다를까"},{"type":"p","text":"대장암 항암의 바탕 약은 플루오로우라실(5-FU)과 그 먹는 형태인 카페시타빈입니다. 여기에 옥살리플라틴을 더한 것이 보조요법의 대표 조합입니다."},{"type":"ul","items":["폴폭스(FOLFOX) — 2주마다 병원에서 옥살리플라틴과 류코보린을 맞고, 5-FU는 휴대용 펌프를 달고 집에서 이틀가량 천천히 들어갑니다. 6개월이면 12회입니다.","카폭스(CAPOX) — 3주마다 옥살리플라틴 주사를 맞고 카페시타빈을 2주 동안 하루 두 번 먹은 뒤 1주 쉽니다. 6개월이면 8회, 3개월이면 4회입니다.","카페시타빈 단독 — 옥살리플라틴을 쓰기 어려운 경우 등에서 의료진이 검토합니다."]},{"type":"p","text":"수술한 2·3기 대장암 환자 2,246명을 비교한 임상시험에서 폴폭스 군의 3년 무병생존율은 78.2%로, 5-FU와 류코보린만 쓴 군(72.9%)보다 높았습니다 [1]. 펌프를 다는 번거로움과 병원 방문 횟수, 먹는 약 관리 가능 여부를 함께 고려해 두 요법 중 하나를 고르게 됩니다."},{"type":"m3svg","html":"<figure class=\"mag-figure\" data-oc-svg=\"topic\" style=\"margin:2em auto;max-width:560px\"><svg viewBox=\"0 0 480 470\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"cr-t cr-d\" style=\"width:100%;height:auto;font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif\">\n<title id=\"cr-t\">대장암 항암, 병기별 목적과 폴폭스·카폭스 일정</title>\n<desc id=\"cr-d\">고위험 2기와 3기는 수술 후 보조 항암, 직장암은 수술 전 항암방사선, 4기는 전신 항암과 RAS·MSI 검사에 따른 표적·면역항암제. 폴폭스는 2주 주기로 6개월 12회, 카폭스는 3주 주기로 3개월 4회 또는 6개월 8회.</desc>\n<rect x=\"0\" y=\"0\" width=\"480\" height=\"470\" rx=\"18\" fill=\"#F4F7F5\"/>\n<text x=\"24\" y=\"40\" font-size=\"19\" font-weight=\"700\" fill=\"#26403a\">대장암 항암, 병기별 목적</text>\n<text x=\"24\" y=\"64\" font-size=\"13\" fill=\"#5C8073\">국가암정보센터 치료 원칙 · 개인 계획은 의료진이 정합니다</text>\n<rect x=\"24\" y=\"80\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#E3EEE8\"/>\n<text x=\"40\" y=\"107\" font-size=\"14\" font-weight=\"700\" fill=\"#2F6B4F\">고위험 2기·3기</text>\n<text x=\"176\" y=\"107\" font-size=\"13.5\" fill=\"#26403a\">수술 → 보조 항암(재발 ↓)</text>\n<rect x=\"24\" y=\"128\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#FBEFD9\"/>\n<text x=\"40\" y=\"155\" font-size=\"14\" font-weight=\"700\" fill=\"#A36A12\">직장암</text>\n<text x=\"176\" y=\"155\" font-size=\"13.5\" fill=\"#26403a\">수술 전 항암방사선 → 수술</text>\n<rect x=\"24\" y=\"176\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#F8DEDA\"/>\n<text x=\"40\" y=\"203\" font-size=\"14\" font-weight=\"700\" fill=\"#B23A2B\">4기</text>\n<text x=\"176\" y=\"203\" font-size=\"13.5\" fill=\"#26403a\">전신 항암 + RAS·MSI 맞춤 약</text>\n<text x=\"24\" y=\"256\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\">보조요법 한 주기와 기간</text>\n<text x=\"24\" y=\"286\" font-size=\"13\" font-weight=\"700\" fill=\"#33504a\">폴폭스 (2주)</text>\n<rect x=\"160\" y=\"272\" width=\"22\" height=\"22\" rx=\"4\" fill=\"#5C8073\"/><rect x=\"184\" y=\"272\" width=\"30\" height=\"22\" rx=\"4\" fill=\"#9DB8AE\"/>\n<rect x=\"216\" y=\"272\" width=\"120\" height=\"22\" rx=\"4\" fill=\"#E3EEE8\"/>\n<text x=\"344\" y=\"288\" font-size=\"12\" fill=\"#33504a\">6개월 = 12회</text>\n<text x=\"160\" y=\"310\" font-size=\"11\" fill=\"#33504a\">주사 · 펌프 이틀</text>\n<text x=\"24\" y=\"346\" font-size=\"13\" font-weight=\"700\" fill=\"#33504a\">카폭스 (3주)</text>\n<rect x=\"160\" y=\"332\" width=\"18\" height=\"22\" rx=\"4\" fill=\"#5C8073\"/><rect x=\"180\" y=\"332\" width=\"100\" height=\"22\" rx=\"4\" fill=\"#9DB8AE\"/>\n<rect x=\"282\" y=\"332\" width=\"54\" height=\"22\" rx=\"4\" fill=\"#E3EEE8\"/>\n<text x=\"344\" y=\"341\" font-size=\"12\" fill=\"#33504a\">3개월 = 4회</text>\n<text x=\"344\" y=\"357\" font-size=\"12\" fill=\"#33504a\">6개월 = 8회</text>\n<text x=\"160\" y=\"370\" font-size=\"11\" fill=\"#33504a\">주사 · 먹는 약 2주 · 쉬는 1주</text>\n<rect x=\"24\" y=\"386\" width=\"432\" height=\"40\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#C9D8D1\"/>\n<text x=\"40\" y=\"411\" font-size=\"12.5\" fill=\"#26403a\">저위험 3기 + 카폭스 → 3개월과 6개월 효과 비슷(IDEA)</text>\n<text x=\"24\" y=\"452\" font-size=\"11.5\" fill=\"#6B827B\">자료: MOSAIC(NEJM 2004) · IDEA(NEJM 2018) · 국가암정보센터 · 온코케어 AI</text>\n</svg></figure>"},{"type":"h2","id":"duration","text":"3개월이냐 6개월이냐 — 보조요법 기간이 정해지는 기준"},{"type":"p","text":"옥살리플라틴은 맞을수록 손발저림이 쌓이는 약이라, 기간을 줄여도 효과가 유지되는지 확인하려는 국제 공동 분석이 진행되었습니다. 3기 결장암 환자 12,834명을 모은 이 분석에서, 재발 위험이 비교적 낮은 경우(암이 장벽을 다 뚫지 않았고 전이 림프절이 1~3개)에는 3개월과 6개월의 3년 무병생존율이 83.1%와 83.3%로 비슷했습니다. 요법별로는 카폭스에서 3개월이 6개월과 비슷한 효과를 보였습니다 [2]."},{"type":"p","text":"그래서 진료실에서는 병리 결과(T 병기와 전이 림프절 개수)와 요법 종류를 보고 기간을 상의합니다. 재발 위험이 높은 3기나 폴폭스를 쓰는 경우에는 6개월을 권하는 경우가 많습니다. 내 결과지에 적힌 T·N 병기를 확인하고 「저는 3개월과 6개월 중 어느 쪽이 맞나요?」라고 물어보면 이해가 쉬워집니다."},{"type":"h2","id":"targeted-immuno","text":"4기 대장암 — RAS·MSI 검사와 표적·면역항암제"},{"type":"p","text":"4기 대장암에서는 폴폭스나 이리노테칸이 들어간 폴피리(FOLFIRI)에 표적치료제를 더하는 경우가 많고, 어떤 약을 더할지는 암 조직 검사로 정합니다. 혈관 생성을 막는 베바시주맙(아바스틴)은 비교적 넓게 쓰이고, 세툭시맙 같은 항EGFR 표적치료제는 RAS 유전자에 변이가 없는 경우에 고려됩니다. 베바시주맙의 혈압·단백뇨 관리는 「아바스틴 부작용」 글에서 따로 다뤘습니다."},{"type":"p","text":"MSI-H(현미부수체 불안정성이 높은) 또는 유전자 복구 기능이 떨어진 대장암은 면역항암제 치료를 검토하는 대상이 됩니다. 이런 전이성 대장암에서 면역항암제 펨브롤리주맙을 1차 치료로 쓴 대규모 임상시험 근거가 있습니다 [3]. 그래서 진단 초기에 RAS·BRAF·MSI 검사 결과를 받았는지 확인해 두면, 이후 치료 선택지를 이해하는 데 도움이 됩니다."},{"type":"h2","id":"side-effects","text":"대장암 항암 부작용 — 손발저림을 일상 동작으로 점검하기"},{"type":"p","text":"옥살리플라틴의 신경 부작용은 두 가지 모습으로 나타납니다. 주사 뒤 며칠간 찬 것에 닿거나 찬 음료를 마시면 손끝·입 주변·목이 찌릿한 급성 증상, 그리고 회차가 쌓이며 손발 끝이 저리고 감각이 둔해지는 누적 증상입니다. 폴폭스 임상시험에서 3등급 감각신경병증은 치료 중 12.4%였고, 치료 1년 뒤에는 1.1%로 줄었습니다 [1]. 시간이 지나며 회복되는 경우가 많지만, 심해지기 전에 알려 용량을 조정하는 것이 중요합니다."},{"type":"ul","items":["단추를 채우거나 동전을 집기 어려워졌나요?","젓가락질·글씨 쓰기가 전보다 서툴러졌나요?","계단을 내려갈 때 발바닥 감각이 둔해 난간을 잡게 되나요?","저림이 다음 회차 직전까지 가라앉지 않고 남아 있나요?"]},{"type":"p","text":"하나라도 해당되면 다음 회차 전에 꼭 알리세요. 그 밖에 5-FU·카페시타빈 쪽은 설사, 입안 헐음, 손발바닥이 붉어지고 벗겨지는 변화가 흔하고, 공통으로 호중구 감소와 피로가 따라옵니다. 손발저림 관리 요령은 「항암 손발저림」 글, 카페시타빈 피부 관리는 「젤로다 부작용」 글에서 더 자세히 볼 수 있습니다."},{"type":"h2","id":"cycle-checklist","text":"한 주기 안에서 집에서 확인할 것 — 날짜별 체크"},{"type":"ul","items":["투여 당일~3일 — 찬 것에 대한 찌릿함, 구역, 펌프를 달았다면 연결 부위·줄 꺾임과 제거 날짜. 이 기간에는 미지근한 음료를 마시고 냉장고 물건은 장갑을 끼고 꺼냅니다.","1~2주째 — 체온을 하루 1~2번 재고, 설사 횟수와 먹는 약 복용 여부를 날짜에 체크합니다. 호중구가 낮아지기 쉬운 시기입니다.","다음 회차 전 — 위의 손발저림 네 가지 질문, 손발바닥 피부, 체중 변화. 장루가 있다면 배출량이 늘었는지도 함께 적습니다."]},{"type":"p","text":"「힘들었다」보다 「둘째 주 설사 하루 5번, 저림으로 단추가 어려움, 체중 1kg 감소」처럼 숫자와 동작으로 전하면 짧은 진료에서도 조정이 빨라집니다."},{"type":"m3svg","html":"<!-- M3:SVG --><figure class=\"m3-card not-prose\" style=\"margin:2.2em 0\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 406\" width=\"100%\" role=\"img\" aria-label=\"이 글의 핵심: 대표 보조요법 / 3개월이냐 6개월이냐 / 4기 대장암 / 항암 부작용\" style=\"display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Noto Sans JP','Malgun Gothic',sans-serif\"><defs><linearGradient id=\"m373023g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#26403a\"/><stop offset=\"1\" stop-color=\"#5C8073\"/></linearGradient><linearGradient id=\"m373023v\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5C8073\"/><stop offset=\"1\" stop-color=\"#5C8073\" stop-opacity=\"0.15\"/></linearGradient><clipPath id=\"m373023c\"><rect width=\"480\" height=\"406\" rx=\"18\"/></clipPath></defs><g clip-path=\"url(#m373023c)\"><rect width=\"480\" height=\"406\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"106\" fill=\"url(#m373023g)\"/><circle cx=\"446\" cy=\"18\" r=\"92\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.10\" stroke-width=\"18\"/><circle cx=\"446\" cy=\"18\" r=\"46\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.14\"/><circle cx=\"446\" cy=\"18\" r=\"140\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.07\" stroke-dasharray=\"3 7\"/><polyline points=\"0,90 249.60000000000002,90 264,76 278.4,102 292.8,82 302.4,90 480,90\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.45\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"24\" y=\"20\" width=\"117\" height=\"24\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"0.16\"/><circle cx=\"36\" cy=\"32\" r=\"4\" fill=\"#ffffff\" fill-opacity=\"0.85\"/><text x=\"46\" y=\"37\" fill=\"#ffffff\" font-size=\"12.5\" font-weight=\"800\" letter-spacing=\"0.5\">이 글의 핵심</text><text x=\"24\" y=\"76\" fill=\"#ffffff\" font-size=\"20.5\" font-weight=\"800\">대장암 항암</text><line x1=\"39\" y1=\"145\" x2=\"39\" y2=\"319\" stroke=\"url(#m373023v)\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"62\" y=\"126\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"136\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"150\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">대표 보조요법</text><rect x=\"62\" y=\"184\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"194\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"208\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">3개월이냐 6개월이냐</text><rect x=\"62\" y=\"242\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"252\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"266\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">4기 대장암</text><rect x=\"62\" y=\"300\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"310\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"324\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">항암 부작용</text><circle cx=\"39\" cy=\"145\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"145\" r=\"12\" fill=\"url(#m373023g)\"/><text x=\"39\" y=\"149.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">1</text><circle cx=\"39\" cy=\"203\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"203\" r=\"12\" fill=\"url(#m373023g)\"/><text x=\"39\" y=\"207.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">2</text><circle cx=\"39\" cy=\"261\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"261\" r=\"12\" fill=\"url(#m373023g)\"/><text x=\"39\" y=\"265.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">3</text><circle cx=\"39\" cy=\"319\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"319\" r=\"12\" fill=\"url(#m373023g)\"/><text x=\"39\" y=\"323.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">4</text><rect x=\"0\" y=\"362\" width=\"480\" height=\"44\" fill=\"#26403a\" fill-opacity=\"0.05\"/><circle cx=\"31\" cy=\"384\" r=\"7\" fill=\"url(#m373023g)\"/><text x=\"46\" y=\"389\" fill=\"#26403a\" font-size=\"13\" font-weight=\"800\">온코케어 AI</text><text x=\"456\" y=\"389\" fill=\"#26403a\" fill-opacity=\"0.7\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">한눈에 보는 요약</text></g><rect x=\"0.5\" y=\"0.5\" width=\"479\" height=\"405\" rx=\"18\" fill=\"none\" stroke=\"#26403a\" stroke-opacity=\"0.16\"/></svg></figure><!-- /M3:SVG -->"},{"type":"h2","id":"when-to-call","text":"이럴 땐 다음 진료를 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["안내받은 기준 이상의 열이나 오한 — 해열제를 먹기 전에 먼저 연락하라는 안내를 받았다면 그 안내를 따릅니다.","하루 4회 이상 늘어난 설사, 장루 배출량이 갑자기 크게 늘어 어지러움","물도 넘기기 어려운 구토, 소변이 거의 나오지 않음","옥살리플라틴 투여 중이나 직후 숨이 차거나 두드러기·얼굴 부종이 생김","손발바닥에 물집이 생겨 걷거나 물건을 쥐기 어려움","펌프 연결 부위가 붓고 빨갛거나 약이 새는 것 같을 때"]},{"type":"p","text":"연락할 때는 요법 이름, 마지막 투여일, 체온과 설사 횟수 같은 숫자를 함께 전하세요. 의식이 흐려지거나 숨이 몹시 차는 등 위급하다고 느껴지면 119나 가까운 응급실이 먼저입니다."},{"type":"h2","id":"record-with-app","text":"온코케어 AI로 대장암 항암 주기와 손발저림을 함께 기록하는 법"},{"type":"p","text":"보조요법만 해도 3~6개월, 4기라면 더 긴 기간 동안 회차가 이어집니다. 온코케어 AI의 항암 일정 기능에 요법과 투여일·펌프 제거일·먹는 약 기간을 넣고, 증상 체크인에 체온·설사 횟수·손발저림 정도(위 네 가지 질문 중 몇 개에 해당하는지)를 남기면 회차별 변화가 정리됩니다. 혈액검사와 종양표지자 결과는 검사 결과 정리 기능으로 모아 이전 수치와 비교할 수 있고, 가족 보호자 연결을 해 두면 보호자도 같은 기록을 볼 수 있습니다. 진료실에서는 이 기록을 그대로 보여 주면 됩니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 항암 요법의 선택, 기간과 용량, 표적·면역항암제 사용은 반드시 담당 의료진과 상의해 정하세요."}],"faq":[{"q":"대장암 3기인데 항암을 3개월만 해도 되나요?","a":"재발 위험이 비교적 낮은 3기에서 카폭스를 쓰는 경우 3개월이 6개월과 비슷한 효과를 보였다는 대규모 분석이 있습니다. 다만 위험이 높은 경우나 폴폭스를 쓰는 경우에는 6개월이 권해지는 경우가 많아, 병리 결과를 보고 담당 의료진과 정하세요."},{"q":"폴폭스와 카폭스 중 무엇이 더 좋은가요?","a":"두 요법 모두 옥살리플라틴이 들어간 표준 보조요법입니다. 폴폭스는 2주마다 펌프를 달고, 카폭스는 3주마다 주사를 맞고 먹는 약을 2주 먹습니다. 생활 여건, 먹는 약 관리, 신장 기능 등을 보고 의료진이 함께 정합니다."},{"q":"옥살리플라틴 손발저림은 없어지나요?","a":"임상시험에서 3등급 감각신경병증은 치료 중 12.4%에서 치료 1년 뒤 1.1%로 줄었습니다. 시간이 지나며 회복되는 경우가 많지만, 단추 채우기나 젓가락질이 어려워지면 다음 회차 전에 알려 용량 조정을 상의하세요."},{"q":"직장암은 왜 수술 전에 항암방사선을 하나요?","a":"직장은 골반 깊은 곳에 있어 수술 뒤 같은 자리에 다시 생기는 국소 재발 위험이 있습니다. 수술 전 항암방사선치료로 종양을 줄이고 국소 재발을 낮추려는 목적이며, 대상과 순서는 병기에 따라 의료진이 정합니다."},{"q":"온코케어 AI가 항암 요법이나 기간을 정해 주나요?","a":"아니요. 온코케어 AI는 일정·증상·검사 결과를 기록하고 정리하는 도구이며, 요법과 기간은 담당 의료진이 정합니다. 날짜별 기록은 진료 때 상황을 빠르게 전하는 데 도움이 됩니다."}],"references":[{"label":"André T, et al. Oxaliplatin, fluorouracil, and leucovorin as adjuvant treatment for colon cancer (MOSAIC). N Engl J Med 2004;350:2343-2351 (PMID 15175436)","url":"https://pubmed.ncbi.nlm.nih.gov/15175436/"},{"label":"Grothey A, et al. Duration of Adjuvant Chemotherapy for Stage III Colon Cancer (IDEA). N Engl J Med 2018;378:1177-1188 (PMID 29590544)","url":"https://pubmed.ncbi.nlm.nih.gov/29590544/"},{"label":"André T, et al. Pembrolizumab in Microsatellite-Instability-High Advanced Colorectal Cancer (KEYNOTE-177). N Engl J Med 2020;383:2207-2218 (PMID 33264544)","url":"https://pubmed.ncbi.nlm.nih.gov/33264544/"},{"label":"국가암정보센터. 대장암 — 치료 방법(내시경 절제·수술·항암화학요법·방사선)","url":"https://www.cancer.go.kr/lay1/program/S1T211C213/cancer/view.do?cancer_seq=3797&menu_seq=3813"}],"related":["colorectal-cancer-symptoms-bowel-change-bleeding","chemo-neuropathy-hands-feet","avastin-bevacizumab-side-effects-guide"]},
  // 2026-10-26 — 사용자 지시 「색인 정체 없는 고객사 신규 2편 · 선조사 후 작성」(온코케어 핵심 kw: 시스플라틴 부작용)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-26","updatedAt":"2026-10-26","appLinks":true,"slug":"cisplatin-side-effects-guide","title":"시스플라틴 부작용 — 구토·신장·귀 울림, 시기별로 보고 언제 알릴까","description":"시스플라틴 부작용을 투여 당일, 2~5일째, 회차가 쌓인 뒤로 나눠 정리했습니다. 구역·구토 예방약을 미리 먹는 이유, 신장을 지키는 수액과 수분, 청력·이명과 손발저림을 언제 알릴지, 진료 때 가져가면 좋은 기록을 연구와 지침 근거로 안내합니다.","category":"항암제 정보","categoryColor":"#B9560C","readMin":9,"hero":"cisplatin-hydration-record-still-life","heroAlt":"시스플라틴 부작용 기록 — 창가 탁자 위 물병과 컵, 펼친 기록 노트, 체온계","tldr":["시스플라틴은 백금 계열 주사 항암제로, 구역·구토 위험이 높은 약으로 분류됩니다. 그래서 증상이 생기기 전에 여러 예방약을 함께 쓰며, 투여 뒤 2~5일째 늦게 오는 메스꺼움까지 대비하는 것이 기본입니다.","신장(콩팥) 보호를 위해 투여 전후 수액을 맞고, 혈액검사로 크레아티닌과 마그네슘·칼륨 같은 전해질을 확인합니다. 집에서는 마시는 양과 소변량을 함께 적어 두면 도움이 됩니다.","귀가 먹먹하거나 삐 소리(이명)가 나는 것, 손발이 저린 것은 회차가 쌓이며 나타나는 경우가 많아 처음 느낀 날을 기록해 알리는 것이 좋습니다. 하루 이상 거의 못 마시거나 소변이 크게 줄면 바로 연락할 신호입니다."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「시스플라틴 부작용」을 찾아본 분, 특히 처음 시스플라틴 일정을 받았거나 몇 차례 맞으면서 몸의 변화가 걱정되는 환자와 가족을 위해 썼습니다. 부작용 이름을 나열하기보다, 언제 무엇이 오는지, 집에서 무엇을 세고 적을지, 어느 선에서 연락할지를 순서대로 정리했습니다."},{"type":"h2","id":"what-is-cisplatin","text":"시스플라틴은 어떤 약이고, 왜 부작용 관리가 일정의 일부일까"},{"type":"p","text":"시스플라틴(cisplatin)은 백금 성분이 들어 있는 주사 항암제입니다. 암세포의 유전물질(DNA)에 달라붙어 세포가 나뉘지 못하게 하는 방식으로 작용합니다. 폐암, 위암·식도암, 두경부암, 방광암, 난소암·자궁경부암, 고환암 등 여러 고형암에서 다른 항암제와 함께, 또는 방사선치료와 같은 기간에 쓰입니다. 3주 간격으로 한 번에 맞는 일정도 있고, 방사선치료 기간에 매주 맞는 일정도 있어 사람마다 회차와 용량이 다릅니다."},{"type":"p","text":"이 약은 정상 세포 가운데서도 콩팥, 속귀(달팽이관)의 청각 세포, 손발의 감각 신경, 위장관에 영향을 주기 쉽습니다. 그래서 병원에서는 투여 전후 수액, 여러 가지 구토 예방약, 정기 혈액검사를 치료 일정 안에 함께 넣어 둡니다. 부작용 관리는 「참고 버티기」가 아니라 치료를 계획대로 이어 가기 위한 준비라고 보시면 됩니다."},{"type":"callout","tone":"info","title":"먼저 알아 둘 점","text":"아래 내용은 연구와 진료 지침을 바탕으로 한 일반적인 흐름입니다. 함께 쓰는 항암제, 방사선치료 여부, 평소 신장 기능과 나이에 따라 부작용의 종류와 정도가 달라집니다. 내 몸의 변화가 무엇을 뜻하는지는 담당 의료진이 진찰과 검사로 판단합니다."},{"type":"h2","id":"timeline","text":"시스플라틴 부작용이 나타나는 시기 — 당일, 2~5일째, 회차가 쌓인 뒤"},{"type":"p","text":"시기별로 나눠 보면 무엇을 언제 지켜봐야 할지 분명해집니다. 아래는 많은 환자에게서 보이는 대략적인 흐름이며, 실제로는 개인차가 있습니다."},{"type":"ul","items":["투여 당일~24시간 — 급성 구역·구토가 생길 수 있는 시기입니다. 병원에서 투여 전에 예방약을 주고, 수액을 함께 맞습니다.","2~5일째 — 늦게 오는(지연성) 메스꺼움과 입맛 저하, 피로가 이어지기 쉬운 시기입니다. 집에서 먹는 예방약을 안내대로 챙기고, 마시는 양과 소변량을 적어 둡니다.","1~2주째 — 함께 쓰는 항암제에 따라 백혈구·혈소판이 낮아질 수 있어 발열과 출혈 신호를 살핍니다.","회차가 쌓인 뒤 — 귀 먹먹함·이명·높은 소리가 잘 안 들리는 변화, 손발 저림처럼 누적 용량과 관련된 부작용이 나타나기 쉬운 시기입니다. 치료를 마친 뒤에도 한동안 이어지거나 늦게 느껴지기도 합니다."]},{"type":"m3svg","html":"<figure class=\"mag-figure\" data-oc-svg=\"topic\" style=\"margin:2em auto;max-width:560px\"><svg viewBox=\"0 0 480 440\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"cp-t cp-d\" style=\"width:100%;height:auto;font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif\">\n<title id=\"cp-t\">시스플라틴 부작용 시기별 흐름과 집에서 기록할 것</title>\n<desc id=\"cp-d\">투여 당일 급성 구역과 수액, 2~5일째 지연성 메스꺼움과 피로, 회차가 쌓인 뒤 이명·청력 변화와 손발 저림. 집에서는 구토 횟수, 마신 양과 소변, 귀 증상, 손발 저림을 기록.</desc>\n<rect x=\"0\" y=\"0\" width=\"480\" height=\"440\" rx=\"18\" fill=\"#F4F7F5\"/>\n<text x=\"24\" y=\"40\" font-size=\"19\" font-weight=\"700\" fill=\"#26403a\">시스플라틴 부작용, 언제 무엇을 볼까</text>\n<text x=\"24\" y=\"64\" font-size=\"13\" fill=\"#5C8073\">지침·연구에서 본 일반적인 흐름 · 개인차가 있습니다</text>\n<line x1=\"44\" y1=\"104\" x2=\"436\" y2=\"104\" stroke=\"#9DB8AE\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<circle cx=\"70\" cy=\"104\" r=\"11\" fill=\"#5C8073\"/><circle cx=\"240\" cy=\"104\" r=\"14\" fill=\"#C8553D\"/><circle cx=\"410\" cy=\"104\" r=\"11\" fill=\"#9DB8AE\"/>\n<text x=\"70\" y=\"140\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\" text-anchor=\"middle\">투여 당일</text>\n<text x=\"240\" y=\"140\" font-size=\"15\" font-weight=\"700\" fill=\"#C8553D\" text-anchor=\"middle\">2~5일째</text>\n<text x=\"410\" y=\"140\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\" text-anchor=\"middle\">회차가 쌓인 뒤</text>\n<text x=\"70\" y=\"162\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">수액 · 예방약</text>\n<text x=\"70\" y=\"180\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">급성 구역</text>\n<text x=\"240\" y=\"162\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">늦게 오는 메스꺼움</text>\n<text x=\"240\" y=\"180\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">입맛 저하 · 피로</text>\n<text x=\"410\" y=\"162\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">이명 · 청력 변화</text>\n<text x=\"410\" y=\"180\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">손발 저림</text>\n<text x=\"24\" y=\"226\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\">집에서 날짜별로 적을 것</text>\n<rect x=\"24\" y=\"242\" width=\"432\" height=\"44\" rx=\"10\" fill=\"#E3EEE8\"/>\n<text x=\"40\" y=\"270\" font-size=\"14\" font-weight=\"700\" fill=\"#2F6B4F\">구토</text>\n<text x=\"130\" y=\"270\" font-size=\"13.5\" fill=\"#26403a\">횟수 · 메스꺼움 점수 · 예방약 복용</text>\n<rect x=\"24\" y=\"294\" width=\"432\" height=\"44\" rx=\"10\" fill=\"#FBEFD9\"/>\n<text x=\"40\" y=\"322\" font-size=\"14\" font-weight=\"700\" fill=\"#A36A12\">신장</text>\n<text x=\"130\" y=\"322\" font-size=\"13.5\" fill=\"#26403a\">마신 양 · 소변 횟수와 색</text>\n<rect x=\"24\" y=\"346\" width=\"432\" height=\"44\" rx=\"10\" fill=\"#F8DEDA\"/>\n<text x=\"40\" y=\"374\" font-size=\"14\" font-weight=\"700\" fill=\"#B23A2B\">귀 · 손발</text>\n<text x=\"130\" y=\"374\" font-size=\"13.5\" fill=\"#26403a\">이명·먹먹함 처음 느낀 날 · 저림 점수</text>\n<text x=\"24\" y=\"420\" font-size=\"11.5\" fill=\"#6B827B\">자료: ASCO 구토 예방 지침(2020) · Crona 2017 · Sanchez 2024 · 온코케어 AI</text>\n</svg></figure>"},{"type":"h2","id":"nausea","text":"구역·구토 — 증상이 오기 전에 막는 것이 원칙"},{"type":"p","text":"시스플라틴은 진료 지침에서 구토 위험이 높은 항암제로 분류됩니다. 미국임상종양학회(ASCO) 구토 예방 지침은 이런 고위험 항암제에 대해 계열이 다른 예방약 여러 가지를 함께 쓰는 병합요법을 권고합니다 [3]. 대표적으로 NK1 수용체 길항제, 5-HT3 수용체 길항제, 스테로이드(덱사메타손), 그리고 올란자핀 같은 약이 조합됩니다."},{"type":"p","text":"올란자핀을 더한 효과는 무작위 대조 연구에서 확인되었습니다. 시스플라틴(70mg/m² 이상) 등 구토 위험이 높은 항암치료를 처음 받는 환자 380명을 분석한 결과, 투여 후 5일(120시간) 동안 메스꺼움이 전혀 없었던 비율이 올란자핀 군 37%, 위약 군 22%였고, 첫 24시간에는 74% 대 45%였습니다 [2]. 다만 올란자핀을 먹은 일부 환자는 둘째 날 졸림을 느꼈으므로, 처방을 받았다면 언제 먹을지 안내를 꼭 확인하세요."},{"type":"p","text":"집에서는 「메스꺼울 때 먹는 약」과 「정해진 날 미리 먹는 약」을 구분해 두는 것이 중요합니다. 예방약은 괜찮게 느껴져도 안내받은 날짜까지 챙기고, 그래도 메스꺼움이 이어지면 다음 회차 전에 알려 조합을 바꿀 수 있게 합니다. 음식은 한 번에 많이 먹기보다 조금씩 자주, 냄새가 덜한 차가운 음식이나 담백한 음식을 고르면 편한 경우가 많습니다."},{"type":"h2","id":"kidney","text":"신장(콩팥) — 수액과 수분, 크레아티닌·전해질 검사"},{"type":"p","text":"시스플라틴은 콩팥을 통해 몸 밖으로 나가는데, 이 과정에서 콩팥 세포가 손상될 수 있습니다. 그래서 투여 전후 수액을 맞는 것이 기본입니다. 24개 임상 연구를 검토한 체계적 문헌고찰은 모든 환자에게 수액이 신장 손상 예방에 필수적이며, 짧은 시간·적은 양의 외래 수액도 안전하게 쓸 수 있고, 마그네슘 보충이 콩팥 보호에 도움이 될 수 있다고 정리했습니다 [1]."},{"type":"p","text":"혈액검사에서는 신장 기능을 보여 주는 크레아티닌과 함께 마그네슘·칼륨·나트륨 같은 전해질을 확인합니다. 마그네슘이 낮아지면 쥐가 나거나 기운이 없고, 심하면 심장 박동에 영향을 줄 수 있어 의료진이 보충 여부를 정합니다. 집에서 할 수 있는 일은 안내받은 만큼 물을 나눠 마시고, 하루에 마신 양과 소변 횟수·색을 적는 것입니다. 구토 때문에 물조차 넘기기 어렵다면 그 자체가 콩팥에 부담이 되므로 기다리지 말고 연락하세요."},{"type":"p","text":"다른 병원에서 받은 진통소염제(이부프로펜 등)나 일부 항생제처럼 콩팥에 부담을 주는 약이 있습니다. 시스플라틴 치료 기간에는 새로 먹는 약과 일반의약품·건강기능식품을 모두 치료팀이나 약사에게 먼저 알리세요."},{"type":"h2","id":"hearing","text":"귀 울림과 청력 — 처음 느낀 날을 적어 두세요"},{"type":"p","text":"시스플라틴은 속귀의 청각 세포에 영향을 주어 이명(삐 소리), 귀 먹먹함, 높은 소리가 잘 안 들리는 변화를 일으킬 수 있습니다. 대개 높은 음역부터 시작해 일상 대화에서는 늦게 알아차리는 경우가 많습니다. 국내 종설에서도 누적 용량, 나이, 기존 청력, 함께 받는 머리·목 부위 방사선 등이 위험을 높이는 요인으로 정리되어 있습니다 [5]."},{"type":"p","text":"시스플라틴 치료를 받은 성인 생존자를 오래 추적한 연구는 치료 뒤에도 정기적으로 청력검사를 받을 것을 권했고, 누적 용량이 300mg/m² 이하였던 환자는 그보다 많았던 환자에 비해 시간이 지나며 청력이 나빠지는 정도가 적었다고 보고했습니다 [4]. 즉, 귀의 변화를 일찍 알리면 의료진이 청력검사를 잡고 다음 회차의 계획을 함께 검토할 수 있습니다."},{"type":"ul","items":["이명이 처음 들린 날짜와 하루 중 언제 심한지","TV 소리를 전보다 키우게 되었는지, 시끄러운 곳에서 대화가 어려워졌는지","한쪽 귀인지 양쪽 귀인지, 어지러움이 함께 있는지"]},{"type":"h2","id":"neuropathy","text":"손발 저림과 기타 부작용 — 피로·입맛·혈액 수치"},{"type":"p","text":"시스플라틴은 손끝·발끝의 감각 신경에 영향을 주어 저림, 찌릿함, 감각 둔해짐을 일으킬 수 있습니다. 회차가 쌓이면서 서서히 나타나는 경우가 많고, 단추 채우기나 젓가락질이 어려워졌다면 일상에 지장을 주는 단계입니다. 손발저림 관리와 생활 속 안전 수칙은 따로 정리한 「항암 손발저림」 글에서 더 자세히 보실 수 있습니다."},{"type":"p","text":"그 밖에 피로, 입맛 변화, 딸꾹질, 백혈구·적혈구·혈소판 감소 같은 혈액 수치 변화도 보고됩니다. 혈액 수치는 몸이 괜찮게 느껴져도 먼저 달라질 수 있으므로 검사 날짜를 지키고, 결과지를 모아 이전 수치와 비교해 두면 진료 시간이 짧아도 흐름을 빠르게 확인할 수 있습니다."},{"type":"m3svg","html":"<!-- M3:SVG --><figure class=\"m3-card not-prose\" style=\"margin:2.2em 0\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 406\" width=\"100%\" role=\"img\" aria-label=\"이 글의 핵심: 부작용이 나타나는 시기 / 구역·구토 / 신장(콩팥) / 귀 울림과 청력\" style=\"display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Noto Sans JP','Malgun Gothic',sans-serif\"><defs><linearGradient id=\"m3485907g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#26403a\"/><stop offset=\"1\" stop-color=\"#5C8073\"/></linearGradient><linearGradient id=\"m3485907v\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5C8073\"/><stop offset=\"1\" stop-color=\"#5C8073\" stop-opacity=\"0.15\"/></linearGradient><clipPath id=\"m3485907c\"><rect width=\"480\" height=\"406\" rx=\"18\"/></clipPath></defs><g clip-path=\"url(#m3485907c)\"><rect width=\"480\" height=\"406\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"106\" fill=\"url(#m3485907g)\"/><circle cx=\"446\" cy=\"18\" r=\"92\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.10\" stroke-width=\"18\"/><circle cx=\"446\" cy=\"18\" r=\"46\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.14\"/><circle cx=\"446\" cy=\"18\" r=\"140\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.07\" stroke-dasharray=\"3 7\"/><polyline points=\"0,90 249.60000000000002,90 264,76 278.4,102 292.8,82 302.4,90 480,90\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.45\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"24\" y=\"20\" width=\"117\" height=\"24\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"0.16\"/><circle cx=\"36\" cy=\"32\" r=\"4\" fill=\"#ffffff\" fill-opacity=\"0.85\"/><text x=\"46\" y=\"37\" fill=\"#ffffff\" font-size=\"12.5\" font-weight=\"800\" letter-spacing=\"0.5\">이 글의 핵심</text><text x=\"24\" y=\"76\" fill=\"#ffffff\" font-size=\"20.5\" font-weight=\"800\">시스플라틴 부작용</text><line x1=\"39\" y1=\"145\" x2=\"39\" y2=\"319\" stroke=\"url(#m3485907v)\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"62\" y=\"126\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"136\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"150\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">부작용이 나타나는 시기</text><rect x=\"62\" y=\"184\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"194\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"208\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">구역·구토</text><rect x=\"62\" y=\"242\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"252\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"266\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">신장(콩팥)</text><rect x=\"62\" y=\"300\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"310\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"324\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">귀 울림과 청력</text><circle cx=\"39\" cy=\"145\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"145\" r=\"12\" fill=\"url(#m3485907g)\"/><text x=\"39\" y=\"149.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">1</text><circle cx=\"39\" cy=\"203\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"203\" r=\"12\" fill=\"url(#m3485907g)\"/><text x=\"39\" y=\"207.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">2</text><circle cx=\"39\" cy=\"261\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"261\" r=\"12\" fill=\"url(#m3485907g)\"/><text x=\"39\" y=\"265.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">3</text><circle cx=\"39\" cy=\"319\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"319\" r=\"12\" fill=\"url(#m3485907g)\"/><text x=\"39\" y=\"323.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">4</text><rect x=\"0\" y=\"362\" width=\"480\" height=\"44\" fill=\"#26403a\" fill-opacity=\"0.05\"/><circle cx=\"31\" cy=\"384\" r=\"7\" fill=\"url(#m3485907g)\"/><text x=\"46\" y=\"389\" fill=\"#26403a\" font-size=\"13\" font-weight=\"800\">온코케어 AI</text><text x=\"456\" y=\"389\" fill=\"#26403a\" fill-opacity=\"0.7\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">한눈에 보는 요약</text></g><rect x=\"0.5\" y=\"0.5\" width=\"479\" height=\"405\" rx=\"18\" fill=\"none\" stroke=\"#26403a\" stroke-opacity=\"0.16\"/></svg></figure><!-- /M3:SVG -->"},{"type":"h2","id":"when-to-call","text":"이럴 땐 다음 진료를 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["구토로 하루 가까이 물이나 약을 거의 넘기지 못함, 예방약을 먹어도 계속 토함","소변이 눈에 띄게 줄거나 색이 매우 짙어짐, 일어설 때 어지러움","안내받은 기준 이상의 열, 오한, 목 통증·배뇨 통증 같은 감염 신호","갑자기 한쪽 또는 양쪽 귀가 잘 안 들림, 심한 어지러움","근육 경련이나 쥐가 자주 남, 가슴 두근거림","멍이 잘 들거나 잇몸·코에서 피가 멈추지 않음"]},{"type":"p","text":"연락할 때는 마지막 투여일, 구토 횟수와 마지막으로 마신 양, 소변 횟수, 체온 같은 숫자를 함께 전하세요. 의식이 흐려지거나 숨이 몹시 차는 등 위급하다고 느껴지면 119나 가까운 응급실이 먼저입니다."},{"type":"h2","id":"record-with-app","text":"온코케어 AI로 구토 횟수·마신 양·귀 증상을 함께 기록하는 법"},{"type":"p","text":"시스플라틴 회차 사이의 기록은 「며칠째에 무엇이 얼마나」가 보여야 쓸모가 있습니다. 온코케어 AI의 증상 체크인에 하루 구토 횟수, 메스꺼움 점수(0~10), 마신 양과 소변 횟수, 이명·손발 저림이 있었는지를 남기고, 복약 기록으로 예방약을 챙겼는지 표시해 두면 다음 회차 전에 흐름이 한눈에 보입니다. 크레아티닌·마그네슘 같은 검사 결과는 검사 결과 정리 기능으로 모아 이전 수치와 비교할 수 있고, 가족 보호자 연결을 해 두면 보호자도 같은 기록을 확인할 수 있습니다. 진료실에서는 이 기록을 그대로 보여 주면 됩니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 시스플라틴의 일정·용량, 수액, 구토 예방약과 전해질 보충은 반드시 담당 의료진·약사와 상의해 정하세요."}],"faq":[{"q":"시스플라틴 부작용은 언제 가장 힘든가요?","a":"구역·구토와 피로는 투여 당일부터 2~5일째 사이에 많이 나타나고, 귀 울림·청력 변화와 손발 저림은 회차가 쌓이면서 나타나는 경우가 많습니다. 사람마다 다르므로 날짜별로 증상을 기록해 두면 다음 회차 준비에 도움이 됩니다."},{"q":"메스꺼움이 없는데도 예방약을 먹어야 하나요?","a":"네, 안내받은 일정대로 드시는 것이 원칙입니다. 시스플라틴은 늦게 오는 메스꺼움이 흔해, 증상이 생긴 뒤보다 미리 막는 편이 조절이 잘 됩니다. 졸림 같은 불편이 있으면 의료진에게 말해 조정을 상의하세요."},{"q":"물을 많이 마시면 신장이 보호되나요?","a":"투여 전후 수액이 신장 보호의 기본이고, 집에서는 안내받은 만큼 물을 나눠 마시는 것이 도움이 됩니다. 다만 심장·신장 질환으로 수분 제한이 있는 분도 있으므로 마실 양은 치료팀의 안내를 따르세요."},{"q":"귀에서 삐 소리가 나면 치료를 멈추나요?","a":"스스로 멈추지 마시고 치료팀에 알리세요. 의료진이 청력검사를 하고 다음 회차의 계획을 검토합니다. 처음 느낀 날짜와 정도를 적어 가면 판단에 도움이 됩니다."},{"q":"온코케어 AI가 부작용을 판단해 주나요?","a":"아니요. 온코케어 AI는 증상·복약·검사 결과를 기록하고 정리하는 도구이며, 판단은 담당 의료진이 합니다. 구토 횟수·마신 양·소변·귀 증상을 날짜별로 남겨 두면 진료 때 상황을 빠르게 전할 수 있습니다."}],"references":[{"label":"Crona DJ, et al. A Systematic Review of Strategies to Prevent Cisplatin-Induced Nephrotoxicity. Oncologist 2017;22(5):609-619 (PMID 28438887)","url":"https://pubmed.ncbi.nlm.nih.gov/28438887/"},{"label":"Navari RM, et al. Olanzapine for the Prevention of Chemotherapy-Induced Nausea and Vomiting. N Engl J Med 2016;375(2):134-142 (PMID 27410922)","url":"https://pubmed.ncbi.nlm.nih.gov/27410922/"},{"label":"Hesketh PJ, et al. Antiemetics: ASCO Guideline Update. J Clin Oncol 2020;38(24):2782-2797 (PMID 32658626)","url":"https://pubmed.ncbi.nlm.nih.gov/32658626/"},{"label":"Sanchez VA, et al. Comprehensive Audiologic Analyses After Cisplatin-Based Chemotherapy. JAMA Oncol 2024;10(7):912-922 (PMID 38842797)","url":"https://pubmed.ncbi.nlm.nih.gov/38842797/"},{"label":"정다정. 시스플라틴 이독성 난청: 분자 메커니즘에 대한 최신 지견. 대한이비인후과학회지 2022;65(10):569-579","url":"https://www.kjorl.org/journal/view.php?number=8574"}],"related":["chemo-nausea-vomiting-management","chemo-neuropathy-hands-feet","when-to-call-your-oncology-team"]},
  // 2026-10-26 — 사용자 지시 「색인 정체 없는 고객사 신규 2편 · 선조사 후 작성」(온코케어 핵심 kw: 췌장암 항암)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-26","updatedAt":"2026-10-26","appLinks":true,"slug":"pancreatic-cancer-chemotherapy-regimens-side-effects","title":"췌장암 항암 — 병기별 목적과 폴피리녹스·젬시타빈, 부작용 관리","description":"췌장암 항암치료를 병기별 목적(수술 후 보조·수술 전 선행·국소 진행·전이성)으로 나누고, 폴피리녹스와 젬시타빈+아브락산의 일정과 흔한 부작용, 주기 안에서 집에서 확인할 것, 체중·식사 기록법을 연구 근거와 함께 정리했습니다.","category":"치료 가이드","categoryColor":"#B9560C","readMin":10,"hero":"pancreatic-chemo-cycle-planner-still-life","heroAlt":"췌장암 항암 일정 기록 — 탁자 위 달력 메모장과 체중계, 따뜻한 수프 그릇","tldr":["췌장암 항암은 병기에 따라 목적이 다릅니다. 수술한 경우에는 남은 암세포를 줄이려는 보조요법(대개 6개월), 혈관 침범으로 바로 수술하기 어려우면 선행 항암, 전이가 있으면 전신 항암으로 병을 조절하고 생활을 지키는 것이 중심입니다.","대표 요법은 폴피리녹스(2주 주기)와 젬시타빈+아브락산(4주에 3번)입니다. 큰 임상시험에서 기존 단독 요법보다 생존 기간을 늘렸고, 대신 호중구 감소·설사·손발저림·피로 같은 부작용 관리가 함께 따라옵니다.","주기 안에서는 첫 며칠의 설사·구역, 1~2주째의 발열(호중구 감소), 회차가 쌓이며 늘어나는 손발저림을 순서대로 살핍니다. 체중과 식사량을 숫자로 남기면 영양 상담과 소화 효소 처방 판단이 빨라집니다."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「췌장암 항암」을 찾아본 분, 특히 진단 직후 치료 계획 설명을 듣고 무엇을 준비해야 할지 막막한 환자와 가족을 위해 썼습니다. 어떤 요법을 고를지는 의료진이 정하지만, 왜 그 요법인지, 주기 안에서 몸에 무슨 일이 생기는지, 집에서 무엇을 기록하면 좋은지는 미리 알아 둘수록 덜 불안합니다."},{"type":"h2","id":"goals-by-stage","text":"병기에 따라 달라지는 췌장암 항암의 목적"},{"type":"p","text":"췌장암 치료는 외과, 소화기내과, 종양내과, 방사선종양학과, 영상의학과가 함께 보는 다학제 진료로 계획되는 경우가 많습니다. 항암치료의 역할은 암이 주변 혈관에 얼마나 닿아 있는지, 다른 장기로 퍼졌는지에 따라 달라집니다 [4]."},{"type":"ul","items":["절제 가능 — 먼저 수술하고, 눈에 보이지 않는 암세포를 줄이기 위해 수술 후 약 6개월간 보조 항암을 합니다.","경계성 절제 가능 — 혈관 침범이 일부 있어 바로 수술하면 암이 남을 가능성이 높을 때, 선행 항암으로 범위를 줄인 뒤 수술을 검토합니다.","국소 진행 — 전이는 없지만 주요 혈관을 넓게 감싸 수술이 어려운 경우로, 전신 항암을 먼저 하고 반응에 따라 수술 가능성을 다시 평가하기도 합니다.","전이성 — 간·복막·폐 등으로 퍼진 경우로, 전신 항암으로 병을 조절하면서 통증·영양 관리를 함께해 생활을 지키는 데 집중합니다."]},{"type":"callout","tone":"info","title":"먼저 알아 둘 점","text":"아래 수치는 임상시험 참여자의 결과로, 전신 상태가 비교적 좋은 환자가 많이 포함되었습니다. 같은 요법이라도 나이, 체력, 황달·담도 배액 여부, 영양 상태에 따라 용량과 일정이 조정됩니다. 나에게 맞는 요법은 담당 의료진이 정합니다."},{"type":"m3svg","html":"<figure class=\"mag-figure\" data-oc-svg=\"topic\" style=\"margin:2em auto;max-width:560px\"><svg viewBox=\"0 0 480 450\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"pc-t pc-d\" style=\"width:100%;height:auto;font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif\">\n<title id=\"pc-t\">췌장암 항암, 병기별 목적과 대표 요법의 일정</title>\n<desc id=\"pc-d\">절제 가능은 수술 후 약 6개월 보조 항암, 경계성은 선행 항암 후 수술 검토, 국소 진행은 전신 항암 후 재평가, 전이성은 전신 항암과 증상·영양 관리. 폴피리녹스는 2주마다, 젬시타빈과 아브락산은 4주 중 1·8·15일.</desc>\n<rect x=\"0\" y=\"0\" width=\"480\" height=\"450\" rx=\"18\" fill=\"#F4F7F5\"/>\n<text x=\"24\" y=\"40\" font-size=\"19\" font-weight=\"700\" fill=\"#26403a\">췌장암 항암, 병기별 목적</text>\n<text x=\"24\" y=\"64\" font-size=\"13\" fill=\"#5C8073\">국가암정보센터 치료 원칙 · 개인 계획은 의료진이 정합니다</text>\n<rect x=\"24\" y=\"80\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#E3EEE8\"/>\n<text x=\"40\" y=\"107\" font-size=\"14\" font-weight=\"700\" fill=\"#2F6B4F\">절제 가능</text>\n<text x=\"160\" y=\"107\" font-size=\"13.5\" fill=\"#26403a\">수술 → 약 6개월 보조 항암</text>\n<rect x=\"24\" y=\"128\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#E3EEE8\"/>\n<text x=\"40\" y=\"155\" font-size=\"14\" font-weight=\"700\" fill=\"#2F6B4F\">경계성</text>\n<text x=\"160\" y=\"155\" font-size=\"13.5\" fill=\"#26403a\">선행 항암 → 수술 검토</text>\n<rect x=\"24\" y=\"176\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#FBEFD9\"/>\n<text x=\"40\" y=\"203\" font-size=\"14\" font-weight=\"700\" fill=\"#A36A12\">국소 진행</text>\n<text x=\"160\" y=\"203\" font-size=\"13.5\" fill=\"#26403a\">전신 항암 → 반응 보고 재평가</text>\n<rect x=\"24\" y=\"224\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#F8DEDA\"/>\n<text x=\"40\" y=\"251\" font-size=\"14\" font-weight=\"700\" fill=\"#B23A2B\">전이성</text>\n<text x=\"160\" y=\"251\" font-size=\"13.5\" fill=\"#26403a\">전신 항암 + 통증·영양 관리</text>\n<text x=\"24\" y=\"300\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\">대표 요법의 한 주기</text>\n<text x=\"24\" y=\"328\" font-size=\"13\" font-weight=\"700\" fill=\"#33504a\">폴피리녹스 (2주)</text>\n<rect x=\"150\" y=\"314\" width=\"22\" height=\"20\" rx=\"4\" fill=\"#5C8073\"/><rect x=\"176\" y=\"314\" width=\"22\" height=\"20\" rx=\"4\" fill=\"#9DB8AE\"/>\n<rect x=\"202\" y=\"314\" width=\"150\" height=\"20\" rx=\"4\" fill=\"#E3EEE8\"/>\n<text x=\"360\" y=\"329\" font-size=\"12\" fill=\"#33504a\">투여 + 펌프 이틀</text>\n<text x=\"24\" y=\"372\" font-size=\"13\" font-weight=\"700\" fill=\"#33504a\">젬시타빈+아브락산 (4주)</text>\n<rect x=\"214\" y=\"358\" width=\"18\" height=\"20\" rx=\"4\" fill=\"#5C8073\"/><rect x=\"264\" y=\"358\" width=\"18\" height=\"20\" rx=\"4\" fill=\"#5C8073\"/><rect x=\"314\" y=\"358\" width=\"18\" height=\"20\" rx=\"4\" fill=\"#5C8073\"/>\n<rect x=\"364\" y=\"358\" width=\"72\" height=\"20\" rx=\"4\" fill=\"#E3EEE8\"/>\n<text x=\"214\" y=\"396\" font-size=\"11.5\" fill=\"#33504a\">1일</text><text x=\"264\" y=\"396\" font-size=\"11.5\" fill=\"#33504a\">8일</text><text x=\"314\" y=\"396\" font-size=\"11.5\" fill=\"#33504a\">15일</text><text x=\"374\" y=\"396\" font-size=\"11.5\" fill=\"#33504a\">쉬는 주</text>\n<text x=\"24\" y=\"430\" font-size=\"11.5\" fill=\"#6B827B\">자료: Conroy 2011·2018 · Von Hoff 2013 · 국가암정보센터 · 온코케어 AI</text>\n</svg></figure>"},{"type":"h2","id":"regimens","text":"대표 요법 두 가지 — 폴피리녹스와 젬시타빈+아브락산"},{"type":"p","text":"폴피리녹스(FOLFIRINOX)는 옥살리플라틴, 이리노테칸, 플루오로우라실(5-FU), 류코보린 네 가지 약을 함께 쓰는 요법으로 보통 2주마다 1회 맞습니다. 5-FU는 휴대용 약물 주입기(펌프)를 달고 집에서 이틀가량 천천히 들어가는 방식이 흔합니다. 전이성 췌장암 342명을 대상으로 한 임상시험에서 폴피리녹스 군의 생존 기간 중앙값은 11.1개월로 젬시타빈 단독 군(6.8개월)보다 길었고, 6개월 시점에 삶의 질이 확실히 나빠진 비율도 31%로 젬시타빈 군(66%)보다 낮았습니다 [1]."},{"type":"p","text":"젬시타빈+아브락산(nab-파클리탁셀)은 4주를 한 주기로 1·8·15일에 맞고 한 주를 쉬는 일정이 일반적입니다. 861명이 참여한 임상시험에서 생존 기간 중앙값은 8.5개월로 젬시타빈 단독(6.7개월)보다 길었고, 1년 생존율은 35% 대 22%였습니다 [2]. 체력이 비교적 좋은 환자에게는 폴피리녹스가, 나이·전신 상태를 고려해야 하는 환자에게는 젬시타빈+아브락산이 논의되는 경우가 많습니다."},{"type":"p","text":"수술 후 보조요법에서는 용량을 조정한 변형 폴피리녹스가 쓰입니다. 수술을 받은 493명을 비교한 연구에서 변형 폴피리녹스 군은 재발 없이 지낸 기간 중앙값 21.6개월(젬시타빈 군 12.8개월), 전체 생존 기간 중앙값 54.4개월(35.0개월)로 더 길었습니다 [3]. 이 연구에서 보조요법은 24주, 즉 약 6개월 동안 이어졌습니다."},{"type":"h2","id":"side-effects","text":"요법별로 흔한 부작용 — 무엇이 다를까"},{"type":"p","text":"두 요법 모두 백혈구 가운데 호중구가 낮아질 수 있어 발열에 주의해야 합니다. 그 밖에는 약 구성에 따라 두드러지는 부작용이 조금 다릅니다. 아래는 이해를 돕기 위한 일반적인 구분입니다."},{"type":"ul","items":["폴피리녹스 — 설사(이리노테칸), 찬 것에 닿거나 찬 음료를 마실 때 손발·목이 찌릿한 느낌(옥살리플라틴), 구역, 피로, 호중구 감소. 임상시험에서 발열성 호중구 감소는 5.4%였습니다 [1].","젬시타빈+아브락산 — 손발저림(말초신경병증), 피로, 호중구 감소, 탈모. 3등급 이상 신경병증은 17%였고, 생긴 경우에도 중앙값 29일 만에 가벼운 정도(1등급 이하)로 회복되었습니다 [2].","공통 — 입맛 저하와 체중 감소, 구내염, 혈소판 감소로 멍이 잘 드는 변화."]},{"type":"p","text":"부작용이 생기면 의료진은 용량을 줄이거나, 일정 간격을 늘리거나, 일부 약을 잠시 빼는 방식으로 조정합니다. 이런 조정은 치료를 오래 이어 가기 위한 흔한 방법이므로, 증상을 숨기기보다 일찍 알리는 편이 좋습니다. 옥살리플라틴을 맞은 뒤 며칠간은 찬 음료 대신 미지근한 음료를 마시고, 냉장고 물건을 꺼낼 때 장갑을 쓰면 찌릿함을 줄이는 데 도움이 됩니다."},{"type":"h2","id":"cycle-checklist","text":"한 주기 안에서 집에서 확인할 것 — 날짜별 체크"},{"type":"ul","items":["투여 직후~3일 — 구역·구토, 설사 횟수, 펌프를 달았다면 연결 부위와 줄이 꺾이지 않았는지, 펌프 제거 날짜.","1~2주째 — 체온을 하루 1~2번 재고, 안내받은 기준 이상의 열이나 오한이 있으면 바로 연락. 호중구가 가장 낮아지기 쉬운 시기입니다.","다음 회차 전 — 손발저림이 일상 동작(단추·젓가락·계단)에 지장을 주는지, 체중이 지난 회차보다 얼마나 변했는지, 먹은 양이 평소의 몇 할인지."]},{"type":"p","text":"이 기록은 다음 회차 당일 혈액검사 결과와 함께 용량과 일정을 정하는 근거가 됩니다. 「힘들었다」보다 「3일째 설사 5번, 체중 1.5kg 감소」처럼 숫자로 전하면 짧은 진료 시간에도 필요한 조정이 빨라집니다."},{"type":"h2","id":"nutrition","text":"체중·식사·소화 — 췌장암에서 영양이 특히 중요한 이유"},{"type":"p","text":"췌장은 음식을 소화시키는 효소를 만드는 기관이라, 췌장암이나 수술 뒤에는 기름진 음식이 잘 소화되지 않아 변이 기름지고 물에 뜨거나 냄새가 심해지는 경우가 있습니다. 이런 변화가 있으면 의료진이 소화 효소제를 처방하거나 식사 방법을 조정할 수 있으므로 진료 때 꼭 말씀하세요. 혈당이 갑자기 오르내리는 변화도 생길 수 있어 당뇨가 있던 분은 혈당 기록을 함께 가져가는 것이 좋습니다."},{"type":"p","text":"체중은 매주 같은 요일, 같은 시간에 재서 적어 두세요. 입맛이 없을 때는 한 끼를 크게 먹기보다 하루 5~6번 나눠 먹고, 단백질이 들어 있는 간식(달걀, 두부, 요거트, 영양 보충 음료)을 곁에 두면 도움이 됩니다. 체중이 계속 줄면 영양 상담을 요청하세요. 항암 중 식사 요령은 「항암 치료 중 잘 먹는 법」 글에서 더 자세히 다룹니다."},{"type":"m3svg","html":"<!-- M3:SVG --><figure class=\"m3-card not-prose\" style=\"margin:2.2em 0\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 406\" width=\"100%\" role=\"img\" aria-label=\"이 글의 핵심: 대표 요법 두 가지 / 요법별로 흔한 부작용 / 한 주기 안에서 집에서 확인할 것 / 체중·식사·소화\" style=\"display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Noto Sans JP','Malgun Gothic',sans-serif\"><defs><linearGradient id=\"m3446733g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#26403a\"/><stop offset=\"1\" stop-color=\"#5C8073\"/></linearGradient><linearGradient id=\"m3446733v\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5C8073\"/><stop offset=\"1\" stop-color=\"#5C8073\" stop-opacity=\"0.15\"/></linearGradient><clipPath id=\"m3446733c\"><rect width=\"480\" height=\"406\" rx=\"18\"/></clipPath></defs><g clip-path=\"url(#m3446733c)\"><rect width=\"480\" height=\"406\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"106\" fill=\"url(#m3446733g)\"/><circle cx=\"446\" cy=\"18\" r=\"92\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.10\" stroke-width=\"18\"/><circle cx=\"446\" cy=\"18\" r=\"46\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.14\"/><circle cx=\"446\" cy=\"18\" r=\"140\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.07\" stroke-dasharray=\"3 7\"/><polyline points=\"0,90 249.60000000000002,90 264,76 278.4,102 292.8,82 302.4,90 480,90\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.45\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"24\" y=\"20\" width=\"117\" height=\"24\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"0.16\"/><circle cx=\"36\" cy=\"32\" r=\"4\" fill=\"#ffffff\" fill-opacity=\"0.85\"/><text x=\"46\" y=\"37\" fill=\"#ffffff\" font-size=\"12.5\" font-weight=\"800\" letter-spacing=\"0.5\">이 글의 핵심</text><text x=\"24\" y=\"76\" fill=\"#ffffff\" font-size=\"20.5\" font-weight=\"800\">췌장암 항암</text><line x1=\"39\" y1=\"145\" x2=\"39\" y2=\"319\" stroke=\"url(#m3446733v)\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"62\" y=\"126\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"136\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"150\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">대표 요법 두 가지</text><rect x=\"62\" y=\"184\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"194\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"208\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">요법별로 흔한 부작용</text><rect x=\"62\" y=\"242\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"252\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"266\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">한 주기 안에서 집에서 확인할 것</text><rect x=\"62\" y=\"300\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"310\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"324\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">체중·식사·소화</text><circle cx=\"39\" cy=\"145\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"145\" r=\"12\" fill=\"url(#m3446733g)\"/><text x=\"39\" y=\"149.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">1</text><circle cx=\"39\" cy=\"203\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"203\" r=\"12\" fill=\"url(#m3446733g)\"/><text x=\"39\" y=\"207.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">2</text><circle cx=\"39\" cy=\"261\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"261\" r=\"12\" fill=\"url(#m3446733g)\"/><text x=\"39\" y=\"265.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">3</text><circle cx=\"39\" cy=\"319\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"319\" r=\"12\" fill=\"url(#m3446733g)\"/><text x=\"39\" y=\"323.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">4</text><rect x=\"0\" y=\"362\" width=\"480\" height=\"44\" fill=\"#26403a\" fill-opacity=\"0.05\"/><circle cx=\"31\" cy=\"384\" r=\"7\" fill=\"url(#m3446733g)\"/><text x=\"46\" y=\"389\" fill=\"#26403a\" font-size=\"13\" font-weight=\"800\">온코케어 AI</text><text x=\"456\" y=\"389\" fill=\"#26403a\" fill-opacity=\"0.7\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">한눈에 보는 요약</text></g><rect x=\"0.5\" y=\"0.5\" width=\"479\" height=\"405\" rx=\"18\" fill=\"none\" stroke=\"#26403a\" stroke-opacity=\"0.16\"/></svg></figure><!-- /M3:SVG -->"},{"type":"h2","id":"when-to-call","text":"이럴 땐 다음 진료를 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["안내받은 기준 이상의 열이나 오한 — 해열제를 먹기 전에 먼저 연락하라는 안내를 받았다면 그 안내를 따릅니다.","하루 4회 이상 늘어난 설사, 지사제를 먹어도 멈추지 않는 설사, 물을 마시기 어렵고 어지러움","눈이나 피부가 다시 노래짐, 소변 색이 짙어지고 열이 남(담도 스텐트를 넣은 경우 특히)","한쪽 다리가 붓고 아프거나 갑자기 숨이 참","펌프 연결 부위가 붓고 빨갛거나 약이 새는 것 같을 때","피가 섞인 구토나 검은 변, 멈추지 않는 출혈"]},{"type":"p","text":"연락할 때는 마지막 투여일, 요법 이름, 체온과 설사 횟수 같은 숫자를 함께 전하세요. 의식이 흐려지거나 숨이 몹시 차는 등 위급하다고 느껴지면 119나 가까운 응급실이 먼저입니다."},{"type":"h2","id":"record-with-app","text":"온코케어 AI로 항암 주기와 체중·증상을 함께 기록하는 법"},{"type":"p","text":"췌장암 항암은 주기가 길고 회차가 많아, 기억에만 의존하면 「몇 번째 주기 며칠째에 무엇이 있었는지」가 금방 흐려집니다. 온코케어 AI의 항암 일정 기능에 요법과 투여일을 넣고, 증상 체크인에 체온·설사 횟수·손발저림 점수·식사량을 남기면 주기별 흐름이 정리됩니다. 매주 잰 체중과 혈액검사 결과는 검사 결과 정리 기능으로 모아 이전 수치와 비교할 수 있고, 가족 보호자 연결을 해 두면 보호자도 같은 기록을 볼 수 있습니다. 진료실에서는 이 기록을 그대로 보여 주면 됩니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 항암 요법의 선택, 용량과 일정, 소화 효소제·지사제 사용은 반드시 담당 의료진·약사와 상의해 정하세요."}],"faq":[{"q":"췌장암 항암은 보통 얼마 동안 하나요?","a":"목적에 따라 다릅니다. 수술 후 보조요법은 대개 약 6개월 동안 하고, 선행 항암은 수술 전 몇 달간 진행한 뒤 재평가합니다. 전이성 췌장암은 효과와 부작용을 보면서 기간을 정하므로 담당 의료진과 주기마다 계획을 확인하세요."},{"q":"폴피리녹스와 젬시타빈+아브락산 중 무엇이 더 좋은가요?","a":"두 요법은 직접 우열을 정하기보다 환자의 나이, 체력, 간 기능, 황달 여부 등을 보고 선택합니다. 두 요법 모두 큰 임상시험에서 젬시타빈 단독보다 생존 기간을 늘린 근거가 있습니다. 어떤 요법이 나에게 맞는지는 담당 의료진이 설명해 줍니다."},{"q":"항암 중 체중이 계속 줄면 어떻게 하나요?","a":"매주 체중을 기록해 진료 때 보여 주고 영양 상담을 요청하세요. 변이 기름지거나 소화가 안 되면 소화 효소제가 도움이 될 수 있어 의료진이 처방 여부를 판단합니다. 나눠 먹기와 단백질 간식도 함께 활용해 보세요."},{"q":"옥살리플라틴을 맞은 뒤 찬물을 마시면 안 되나요?","a":"투여 뒤 며칠간은 찬 것에 닿거나 찬 음료를 마실 때 손발·목이 찌릿하거나 목이 조이는 느낌이 생길 수 있어 미지근한 음료를 권합니다. 증상이 오래가거나 심하면 다음 회차 전에 꼭 알리세요."},{"q":"온코케어 AI가 항암 요법을 정해 주나요?","a":"아니요. 온코케어 AI는 일정·증상·체중·검사 결과를 기록하고 정리하는 도구이며, 요법 선택과 조정은 담당 의료진이 합니다. 날짜별 기록은 진료 때 상황을 빠르게 전하는 데 도움이 됩니다."}],"references":[{"label":"Conroy T, et al. FOLFIRINOX versus gemcitabine for metastatic pancreatic cancer. N Engl J Med 2011;364(19):1817-1825 (PMID 21561347)","url":"https://pubmed.ncbi.nlm.nih.gov/21561347/"},{"label":"Von Hoff DD, et al. Increased survival in pancreatic cancer with nab-paclitaxel plus gemcitabine. N Engl J Med 2013;369(18):1691-1703 (PMID 24131140)","url":"https://pubmed.ncbi.nlm.nih.gov/24131140/"},{"label":"Conroy T, et al. FOLFIRINOX or Gemcitabine as Adjuvant Therapy for Pancreatic Cancer. N Engl J Med 2018;379(25):2395-2406 (PMID 30575490)","url":"https://pubmed.ncbi.nlm.nih.gov/30575490/"},{"label":"국가암정보센터. 췌장암 — 치료 방법(병기별 치료 원칙·항암화학요법)","url":"https://www.cancer.go.kr/lay1/program/S1T211C212/cancer/view.do?cancer_seq=5117&menu_seq=8723310"}],"related":["pancreatic-cancer-symptoms-when-to-get-checked","low-neutrophil-daily-life","eating-well-during-chemo"]},
  // 2026-10-20 — 사용자 지시 「색인 원활 표면 2편 · 등급 확인·상위 경쟁 조사 후 작성」(온코케어 핵심 kw: 버제니오 부작용)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-20","updatedAt":"2026-10-20","appLinks":true,"slug":"verzenio-abemaciclib-side-effects-guide","title":"버제니오 부작용 — 설사는 첫 달이 고비, 언제 병원에 알려야 하나","description":"버제니오(아베마시클립) 부작용을 시기별로 정리했습니다. 가장 흔한 설사가 언제 시작해 얼마나 가는지, 배변 횟수로 보는 연락 기준, 호중구 감소·간수치·혈전·폐 증상처럼 검사와 관찰이 필요한 부분, 진료 때 가져가면 좋은 기록을 연구 근거와 함께 안내합니다.","category":"항암제 정보","categoryColor":"#B9560C","readMin":9,"hero":"verzenio-daily-record-table","heroAlt":"버제니오 부작용 기록 — 아침 햇살이 드는 식탁 위의 물 한 컵, 칸이 나뉜 빈 약통, 펼친 노트","tldr":["버제니오(아베마시클립)에서 가장 흔한 부작용은 설사입니다. 연구에서는 복용을 시작하고 대개 1주 안팎에 나타났고, 첫 달에 가장 잦았다가 시간이 지나며 줄어드는 흐름이었습니다.","평소보다 하루 4회 이상 늘어난 설사, 지사제를 먹어도 멈추지 않는 설사, 열·오한, 숨이 차거나 새로 생긴 기침, 한쪽 다리가 붓고 아픈 증상은 다음 진료를 기다리지 말고 치료 병원에 알릴 신호입니다.","휴약이나 감량은 흔히 쓰이는 관리 방법이고, 연구에서 감량이 치료 이득을 줄이지 않았습니다. 다만 결정은 담당 의료진이 하며, 배변 횟수·지사제 복용·체온을 날짜별로 기록해 가면 판단이 빨라집니다."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「버제니오 부작용」을 검색한 분, 특히 처방을 막 받았거나 복용을 시작한 지 얼마 되지 않은 환자와 가족을 위해 썼습니다. 부작용 목록을 나열하기보다, 무엇이 언제쯤 나타나는지, 집에서 무엇을 세고 적어야 하는지, 어느 선을 넘으면 연락해야 하는지를 순서대로 정리했습니다."},{"type":"h2","id":"what-is-verzenio","text":"버제니오는 어떤 약이고, 왜 부작용 관리가 치료의 일부일까"},{"type":"p","text":"버제니오는 성분명 아베마시클립(abemaciclib)인 먹는 표적치료제입니다. 세포가 분열 단계로 넘어갈 때 필요한 CDK4/6이라는 효소를 막아 암세포의 증식을 늦추는 계열(CDK4/6 억제제)에 속합니다. 국내에서는 호르몬 수용체 양성(HR+)·HER2 음성 유방암에서 쓰이며, 단독으로 먹기보다 아로마타제 억제제·타목시펜·풀베스트란트 같은 내분비요법(항호르몬제)과 함께 처방되는 경우가 대부분입니다 [4]."},{"type":"p","text":"재발 위험이 높은 조기 유방암에서는 수술 뒤 보조요법으로 쓰입니다. 5,637명이 참여한 monarchE 연구에서 내분비요법에 버제니오를 더한 군은 침습적 질환 없이 지낸 비율이 2년 시점 92.2%로, 내분비요법만 한 군(88.7%)보다 높았습니다 [3]. 보조요법은 정해진 기간 동안 매일 이어 먹는 치료이므로, 부작용을 초기에 잘 다뤄 치료를 끝까지 이어 가는 것이 중요합니다. 부작용 관리를 「참고 버티기」가 아니라 치료 계획의 한 부분으로 보는 이유입니다."},{"type":"callout","tone":"info","title":"먼저 알아 둘 점","text":"아래 수치는 임상시험 참여자를 모은 결과입니다. 같은 약이라도 사람마다 나타나는 부작용과 정도가 다르고, 함께 먹는 항호르몬제의 영향도 섞여 있습니다. 내 몸에 나타난 변화가 어떤 의미인지는 담당 의료진이 진찰과 검사로 판단합니다."},{"type":"h2","id":"timeline","text":"버제니오 부작용이 나타나는 시기 — 첫 주, 첫 달, 그 이후"},{"type":"p","text":"부작용을 시기별로 보면 막연한 불안이 줄어듭니다. 진행성 유방암 환자를 대상으로 한 MONARCH 2·3 연구를 함께 분석한 결과, 2등급 이상(일상에 지장을 주는 정도)의 설사는 42.8%에서 보고되었고, 처음 나타나기까지 걸린 기간은 중앙값 1주였습니다. 한 번 시작된 설사는 정도와 연구에 따라 6~12일가량 이어졌고, 첫 주기에 가장 많았다가 이후 주기로 갈수록 줄었습니다 [1]."},{"type":"p","text":"조기 유방암 보조요법(monarchE)의 안전성 분석에서도 흐름은 비슷했습니다. 설사는 대부분 1·2등급으로 가벼운 편이었고, 2·3등급 설사는 복용 첫 달에 가장 많아(20.5%) 이 시기가 가장 신경 쓰이는 구간이었습니다. 대부분은 7일 안에 가라앉았고 다시 반복되지 않는 경우가 많았습니다 [2]."},{"type":"ul","items":["첫 주 — 배변이 잦아지거나 묽어지기 시작하는 시기입니다. 처방받을 때 받은 지사제 사용 안내를 냉장고나 휴대전화에 붙여 두면 당황하지 않습니다.","첫 달 — 설사가 가장 잦은 구간입니다. 수분 섭취와 배변 횟수 기록을 가장 꼼꼼히 할 때입니다. 혈액검사(호중구·간수치)도 이 시기에 자주 잡힙니다.","2개월 이후 — 설사는 대개 줄어들지만, 피로·식욕 저하는 길게 이어지기도 합니다. 혈전·폐 증상처럼 드문 부작용은 시기와 관계없이 나타날 수 있어 계속 살펴야 합니다."]},{"type":"m3svg","html":"<figure class=\"mag-figure\" data-oc-svg=\"topic\" style=\"margin:2em auto;max-width:560px\"><svg viewBox=\"0 0 480 430\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"vz-t vz-d\" style=\"width:100%;height:auto;font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif\">\n<title id=\"vz-t\">버제니오 부작용 시기별 흐름과 설사 연락 기준</title>\n<desc id=\"vz-d\">첫 주에는 설사가 시작되고, 첫 달에 가장 잦으며, 2개월 이후에는 줄어드는 흐름. 평소보다 하루 4회 미만은 기록, 4~6회는 병원에 알림, 7회 이상이나 열·탈수는 바로 연락.</desc>\n<rect x=\"0\" y=\"0\" width=\"480\" height=\"430\" rx=\"18\" fill=\"#F4F7F5\"/>\n<text x=\"24\" y=\"40\" font-size=\"19\" font-weight=\"700\" fill=\"#26403a\">버제니오 부작용, 언제 무엇을 볼까</text>\n<text x=\"24\" y=\"64\" font-size=\"13\" fill=\"#5C8073\">연구에서 본 일반적인 흐름 · 개인차가 있습니다</text>\n<line x1=\"44\" y1=\"104\" x2=\"436\" y2=\"104\" stroke=\"#9DB8AE\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<circle cx=\"70\" cy=\"104\" r=\"11\" fill=\"#5C8073\"/><circle cx=\"240\" cy=\"104\" r=\"14\" fill=\"#C8553D\"/><circle cx=\"410\" cy=\"104\" r=\"11\" fill=\"#9DB8AE\"/>\n<text x=\"70\" y=\"140\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\" text-anchor=\"middle\">첫 주</text>\n<text x=\"240\" y=\"140\" font-size=\"15\" font-weight=\"700\" fill=\"#C8553D\" text-anchor=\"middle\">첫 달</text>\n<text x=\"410\" y=\"140\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\" text-anchor=\"middle\">2개월 이후</text>\n<text x=\"70\" y=\"162\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">설사 시작</text>\n<text x=\"70\" y=\"180\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">지사제 안내 확인</text>\n<text x=\"240\" y=\"162\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">설사가 가장 잦음</text>\n<text x=\"240\" y=\"180\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">혈액검사 자주</text>\n<text x=\"410\" y=\"162\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">설사는 대개 줄어듦</text>\n<text x=\"410\" y=\"180\" font-size=\"12.5\" fill=\"#33504a\" text-anchor=\"middle\">피로·혈전 신호 관찰</text>\n<text x=\"24\" y=\"226\" font-size=\"15\" font-weight=\"700\" fill=\"#26403a\">설사 — 평소보다 하루에 늘어난 횟수</text>\n<rect x=\"24\" y=\"242\" width=\"432\" height=\"44\" rx=\"10\" fill=\"#E3EEE8\"/>\n<text x=\"40\" y=\"270\" font-size=\"14\" font-weight=\"700\" fill=\"#2F6B4F\">4회 미만</text>\n<text x=\"150\" y=\"270\" font-size=\"13.5\" fill=\"#26403a\">기록하며 수분 보충 · 다음 진료 때 이야기</text>\n<rect x=\"24\" y=\"294\" width=\"432\" height=\"44\" rx=\"10\" fill=\"#FBEFD9\"/>\n<text x=\"40\" y=\"322\" font-size=\"14\" font-weight=\"700\" fill=\"#A36A12\">4~6회</text>\n<text x=\"150\" y=\"322\" font-size=\"13.5\" fill=\"#26403a\">치료 병원에 알리고 안내 받기</text>\n<rect x=\"24\" y=\"346\" width=\"432\" height=\"44\" rx=\"10\" fill=\"#F8DEDA\"/>\n<text x=\"40\" y=\"374\" font-size=\"14\" font-weight=\"700\" fill=\"#B23A2B\">7회 이상</text>\n<text x=\"150\" y=\"374\" font-size=\"13.5\" fill=\"#26403a\">열·어지러움·탈수 동반 시 바로 연락</text>\n<text x=\"24\" y=\"414\" font-size=\"11.5\" fill=\"#6B827B\">자료: MONARCH 2·3 안전성 분석(2021) · monarchE 안전성 분석(2022) · 온코케어 AI</text>\n</svg></figure>"},{"type":"h2","id":"diarrhea","text":"설사 — 배변 횟수로 정도를 가늠하고, 지사제와 수분을 함께"},{"type":"p","text":"버제니오 설사의 정도는 「평소 배변 횟수보다 하루에 몇 번 더 늘었는가」로 가늠합니다. 항암 치료 부작용 등급에서 흔히 쓰는 기준을 쉽게 풀면 아래와 같습니다. 이 구분은 이해를 돕기 위한 일반 개념이며, 실제 등급 판정과 그에 따른 조정은 담당 의료진이 합니다."},{"type":"ul","items":["가벼운 정도 — 평소보다 하루 4회 미만으로 늘었고, 먹고 마시는 데 큰 지장이 없음","중간 정도 — 평소보다 하루 4~6회 늘었거나, 일상생활이 불편해짐 → 치료 병원에 알리고 안내를 받을 단계","심한 정도 — 평소보다 하루 7회 이상, 참기 어려움, 기운이 빠지고 어지러움 → 바로 연락할 단계"]},{"type":"p","text":"연구에서 설사는 대부분 지사제로 조절되었습니다. MONARCH 2·3 분석에서 설사가 생긴 사람의 72.8%가 지사제로 관리되었고, 휴약이나 감량이 필요했던 경우는 그보다 적었습니다 [1]. 지사제를 언제, 얼마나 먹을지는 처방 때 받은 안내를 따르고, 안내가 없다면 집에 있는 약을 임의로 고르기보다 치료팀이나 약사에게 먼저 물어보세요."},{"type":"p","text":"설사가 있는 날에는 물·보리차·이온 음료를 한 번에 많이 마시기보다 조금씩 자주 마시고, 기름진 음식·유제품·카페인·매운 음식은 잠시 줄이는 편이 편합니다. 쌀죽, 바나나, 삶은 감자처럼 부드러운 음식이 도움이 되기도 합니다. 소변량이 눈에 띄게 줄거나 일어설 때 어지럽다면 탈수 신호일 수 있으니 기다리지 말고 연락하세요."},{"type":"h2","id":"blood-tests","text":"호중구 감소와 간수치 — 증상보다 검사가 먼저 알려 주는 부작용"},{"type":"p","text":"버제니오는 백혈구 가운데 감염을 막는 호중구 수치를 떨어뜨릴 수 있습니다. MONARCH 2·3 분석에서 3등급 이상의 호중구 감소는 25.4%에서 보고되었지만, 열을 동반한 호중구 감소(발열성 호중구 감소증)는 0.7%로 드물었고, 대부분 휴약이나 감량으로 회복되었습니다 [1]. monarchE에서도 3등급 이상 부작용의 상당수는 혈액검사 수치 변화였고, 대개 임상적인 합병증 없이 지나갔습니다 [2]."},{"type":"p","text":"간수치(AST·ALT) 상승, 빈혈, 혈소판 감소도 혈액검사로 먼저 확인됩니다. 몸이 괜찮게 느껴져도 수치가 먼저 달라질 수 있어, 치료 초기 몇 달 동안은 혈액검사 일정이 촘촘하게 잡히는 경우가 많습니다. 검사 날짜를 빠뜨리지 않는 것, 결과지를 받아 두고 이전 수치와 비교해 보는 것이 집에서 할 수 있는 일입니다."},{"type":"callout","tone":"warn","title":"열이 나면 수치를 기다리지 마세요","text":"호중구가 낮은 시기의 발열은 감염의 첫 신호일 수 있습니다. 병원에서 안내받은 기준 체온 이상으로 열이 나거나 오한이 들면, 다음 검사일을 기다리지 말고 바로 치료 병원에 연락하세요. 해열제를 먼저 먹기 전에 연락하라는 안내를 받았다면 그 안내를 따릅니다."},{"type":"h2","id":"fatigue-appetite","text":"피로·식욕 저하·구역 — 날짜와 점수로 남기기"},{"type":"p","text":"피로감, 입맛 저하, 메스꺼움도 자주 보고되는 부작용입니다. 혈액검사 수치가 크게 바뀌지 않아도 이런 증상은 하루의 질을 조금씩 떨어뜨리고, 설사와 겹치면 먹는 양이 더 줄어듭니다. 그래서 「힘들다」는 말보다 숫자가 도움이 됩니다. 피로를 0~10점으로, 식사는 평소의 몇 할을 먹었는지로 적어 두면 의료진이 수액이나 영양 보충, 일정 조정이 필요한지 판단하기 쉬워집니다."},{"type":"p","text":"버제니오는 대개 하루 두 번, 정해진 시간에 복용합니다. 메스꺼움 때문에 시간을 놓쳤거나 복용 뒤 바로 토했다면 한 번 더 먹지 말고, 처방받을 때 받은 안내(보통 다음 정해진 시간에 평소 양을 복용)를 따르세요 [4]. 자몽과 자몽 주스는 약의 혈중 농도를 높일 수 있어 피하도록 안내됩니다. 일부 항진균제·항생제처럼 함께 먹는 약에 따라 용량 조정이 필요할 수 있으므로, 다른 병원에서 받은 약과 일반의약품·건강기능식품까지 모두 알리세요."},{"type":"h2","id":"rare-signs","text":"드물지만 바로 알려야 할 신호 — 혈전과 폐 증상"},{"type":"p","text":"정맥 혈전(다리 깊은 정맥이나 폐 혈관에 생기는 피떡)은 드물지만 알아 두어야 할 부작용입니다. monarchE에서는 버제니오를 더한 군 2.5%, 내분비요법만 한 군 0.6%에서 보고되었고, 버제니오와 함께 먹는 약이 타목시펜일 때가 아로마타제 억제제일 때보다 높았습니다(4.3% 대 1.8%) [2]. 한쪽 다리가 갑자기 붓고 아프거나 붉어질 때, 갑자기 숨이 차거나 가슴이 아플 때는 바로 연락하거나 응급실을 찾아야 합니다."},{"type":"p","text":"폐에 염증이 생기는 간질성 폐질환·폐렴도 드물게 보고되었습니다(MONARCH 2·3 분석 3.4%) [1]. 새로 생긴 기침이 가라앉지 않거나, 계단을 오를 때 전보다 숨이 차거나, 열과 함께 호흡이 불편하다면 감기로 넘기지 말고 치료 병원에 알리세요. 대부분 초기에 확인하면 휴약과 치료로 조절할 수 있습니다."},{"type":"h2","id":"dose-adjustment","text":"휴약과 감량 — 효과가 떨어질까 걱정될 때"},{"type":"p","text":"부작용 때문에 약을 며칠 쉬거나 용량을 줄이자는 말을 들으면, 치료 효과가 줄어들까 봐 걱정하는 분이 많습니다. 휴약과 감량은 이 약에서 흔히 쓰이는 관리 방법입니다. monarchE에서 부작용 관리를 위해 휴약한 경우는 61.7%, 감량한 경우는 43.4%였습니다 [2]. 그리고 MONARCH 2·3 분석에서는 감량이나 초기 부작용 발생이 무진행 생존 이득에 영향을 주지 않았습니다 [1]."},{"type":"p","text":"즉, 부작용을 숨기고 버티는 것보다 일찍 알리고 조절하는 쪽이 치료를 오래, 덜 힘들게 이어 가는 길에 가깝습니다. 언제 쉬고 어떤 용량으로 다시 시작할지는 혈액검사와 증상을 함께 본 담당 의료진이 정합니다. 스스로 약을 끊거나 줄이지 마세요."},{"type":"m3svg","html":"<!-- M3:SVG --><figure class=\"m3-card not-prose\" style=\"margin:2.2em 0\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 406\" width=\"100%\" role=\"img\" aria-label=\"이 글의 핵심: 부작용이 나타나는 시기 / 설사 / 호중구 감소와 간수치 / 피로·식욕 저하·구역\" style=\"display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Noto Sans JP','Malgun Gothic',sans-serif\"><defs><linearGradient id=\"m390413g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#26403a\"/><stop offset=\"1\" stop-color=\"#5C8073\"/></linearGradient><linearGradient id=\"m390413v\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5C8073\"/><stop offset=\"1\" stop-color=\"#5C8073\" stop-opacity=\"0.15\"/></linearGradient><clipPath id=\"m390413c\"><rect width=\"480\" height=\"406\" rx=\"18\"/></clipPath></defs><g clip-path=\"url(#m390413c)\"><rect width=\"480\" height=\"406\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"106\" fill=\"url(#m390413g)\"/><circle cx=\"446\" cy=\"18\" r=\"92\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.10\" stroke-width=\"18\"/><circle cx=\"446\" cy=\"18\" r=\"46\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.14\"/><circle cx=\"446\" cy=\"18\" r=\"140\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.07\" stroke-dasharray=\"3 7\"/><polyline points=\"0,90 249.60000000000002,90 264,76 278.4,102 292.8,82 302.4,90 480,90\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.45\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"24\" y=\"20\" width=\"117\" height=\"24\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"0.16\"/><circle cx=\"36\" cy=\"32\" r=\"4\" fill=\"#ffffff\" fill-opacity=\"0.85\"/><text x=\"46\" y=\"37\" fill=\"#ffffff\" font-size=\"12.5\" font-weight=\"800\" letter-spacing=\"0.5\">이 글의 핵심</text><text x=\"24\" y=\"76\" fill=\"#ffffff\" font-size=\"20.5\" font-weight=\"800\">버제니오 부작용</text><line x1=\"39\" y1=\"145\" x2=\"39\" y2=\"319\" stroke=\"url(#m390413v)\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"62\" y=\"126\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"136\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"150\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">부작용이 나타나는 시기</text><rect x=\"62\" y=\"184\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"194\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"208\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">설사</text><rect x=\"62\" y=\"242\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"252\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"266\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">호중구 감소와 간수치</text><rect x=\"62\" y=\"300\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"310\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"324\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">피로·식욕 저하·구역</text><circle cx=\"39\" cy=\"145\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"145\" r=\"12\" fill=\"url(#m390413g)\"/><text x=\"39\" y=\"149.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">1</text><circle cx=\"39\" cy=\"203\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"203\" r=\"12\" fill=\"url(#m390413g)\"/><text x=\"39\" y=\"207.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">2</text><circle cx=\"39\" cy=\"261\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"261\" r=\"12\" fill=\"url(#m390413g)\"/><text x=\"39\" y=\"265.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">3</text><circle cx=\"39\" cy=\"319\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"319\" r=\"12\" fill=\"url(#m390413g)\"/><text x=\"39\" y=\"323.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">4</text><rect x=\"0\" y=\"362\" width=\"480\" height=\"44\" fill=\"#26403a\" fill-opacity=\"0.05\"/><circle cx=\"31\" cy=\"384\" r=\"7\" fill=\"url(#m390413g)\"/><text x=\"46\" y=\"389\" fill=\"#26403a\" font-size=\"13\" font-weight=\"800\">온코케어 AI</text><text x=\"456\" y=\"389\" fill=\"#26403a\" fill-opacity=\"0.7\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">한눈에 보는 요약</text></g><rect x=\"0.5\" y=\"0.5\" width=\"479\" height=\"405\" rx=\"18\" fill=\"none\" stroke=\"#26403a\" stroke-opacity=\"0.16\"/></svg></figure><!-- /M3:SVG -->"},{"type":"h2","id":"when-to-call","text":"이럴 땐 다음 진료를 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["평소보다 하루 4회 이상 늘어난 설사, 지사제를 안내대로 먹었는데도 24시간 안에 나아지지 않는 설사","물도 잘 마시지 못하거나, 소변이 눈에 띄게 줄고 일어설 때 어지러움","안내받은 기준 이상의 열, 오한, 목 통증·배뇨 통증 같은 감염 신호","갑자기 숨이 차거나 가슴 통증, 가라앉지 않는 새로운 기침","한쪽 다리가 붓고 아프거나 붉어짐","눈이나 피부가 노래지거나, 소변 색이 짙어지고 오른쪽 윗배가 아픔"]},{"type":"p","text":"연락할 때는 마지막으로 약을 먹은 시각, 증상이 시작된 날짜, 하루 배변 횟수나 체온 같은 숫자, 먹은 지사제의 이름과 횟수를 함께 전하세요. 숨이 몹시 차거나 의식이 흐려지는 등 위급하다고 느껴지면 119나 가까운 응급실이 먼저입니다."},{"type":"h2","id":"record-with-app","text":"온코케어 AI로 설사 횟수와 복약을 함께 기록하는 법"},{"type":"p","text":"버제니오처럼 매일 먹는 약은 「먹었는지」와 「몸이 어땠는지」를 한 화면에서 볼 수 있어야 의미가 생깁니다. 온코케어 AI의 복약 기록으로 아침·저녁 복용 여부를 남기고, 증상 체크인에 하루 배변 횟수와 지사제 복용, 체온, 피로 점수를 적어 두면 첫 달의 흐름이 한눈에 보입니다. 혈액검사 결과지는 검사 결과 정리 기능으로 모아 이전 수치와 비교할 수 있고, 가족 보호자 연결을 해 두면 보호자도 같은 기록을 확인할 수 있습니다. 진료실에서는 이 기록을 그대로 보여 주면 됩니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 버제니오의 복용 일정·용량·휴약 여부, 지사제 사용, 함께 먹는 약의 조정은 반드시 담당 의료진·약사와 상의해 정하세요."}],"faq":[{"q":"버제니오 부작용은 언제부터 나타나나요?","a":"가장 흔한 설사는 연구에서 복용 시작 후 대개 1주 안팎에 나타났고, 첫 달에 가장 잦았다가 시간이 지나며 줄어드는 흐름이었습니다. 호중구 감소나 간수치 변화는 증상 없이 혈액검사로 먼저 확인되는 경우가 많아, 치료 초기 검사 일정을 지키는 것이 중요합니다."},{"q":"설사가 하루 몇 번이면 병원에 연락해야 하나요?","a":"평소보다 하루 4회 이상 늘었거나, 안내받은 대로 지사제를 먹어도 나아지지 않거나, 물을 마시기 어렵고 어지럽다면 다음 진료를 기다리지 말고 치료 병원에 알리세요. 가벼운 설사라도 처음 생겼다면 다음 진료 때 꼭 이야기합니다."},{"q":"용량을 줄이면 버제니오 효과가 떨어지나요?","a":"MONARCH 2·3 연구를 분석한 결과, 감량은 무진행 생존 이득에 영향을 주지 않았습니다. 휴약과 감량은 부작용을 다루는 흔한 방법이며, 언제 어떻게 조정할지는 담당 의료진이 검사와 증상을 보고 정합니다. 스스로 줄이거나 끊지 마세요."},{"q":"버제니오를 먹는 동안 피해야 할 음식이나 약이 있나요?","a":"자몽과 자몽 주스는 피하도록 안내됩니다. 일부 항진균제·항생제처럼 약의 혈중 농도를 바꾸는 약이 있어, 다른 병원에서 받은 약과 일반의약품·건강기능식품까지 모두 의료진과 약사에게 알려야 합니다."},{"q":"온코케어 AI가 부작용을 판단해 주나요?","a":"아니요. 온코케어 AI는 증상·복약·검사 결과를 기록하고 정리하는 도구이며, 판단은 담당 의료진이 합니다. 배변 횟수·지사제 복용·체온을 날짜별로 남겨 두면 진료 때 상황을 빠르고 정확하게 전할 수 있습니다."}],"references":[{"label":"Rugo HS, et al. Management of Abemaciclib-Associated Adverse Events in Patients with Hormone Receptor-Positive, Human Epidermal Growth Factor Receptor 2-Negative Advanced Breast Cancer: Safety Analysis of MONARCH 2 and MONARCH 3. Oncologist 2021;26(1):e53-e65 (PMID 32955138)","url":"https://pubmed.ncbi.nlm.nih.gov/32955138/"},{"label":"Rugo HS, et al. Adjuvant abemaciclib combined with endocrine therapy for high-risk early breast cancer: safety and patient-reported outcomes from the monarchE study. Ann Oncol 2022;33(6):616-627 (PMID 35337972)","url":"https://pubmed.ncbi.nlm.nih.gov/35337972/"},{"label":"Johnston SRD, et al. Abemaciclib Combined With Endocrine Therapy for the Adjuvant Treatment of HR+, HER2-, Node-Positive, High-Risk, Early Breast Cancer (monarchE). J Clin Oncol 2020;38(34):3987-3998 (PMID 32954927)","url":"https://pubmed.ncbi.nlm.nih.gov/32954927/"},{"label":"약학정보원. 버제니오정50mg 허가정보·복약정보(식품의약품안전처 자료)","url":"https://www.health.kr/searchDrug/result_drug.asp?drug_cd=2019050200004"}],"related":["breast-cancer-chemo-before-after-surgery-side-effects","chemo-diarrhea-constipation-care","low-neutrophil-daily-life"]},
  // 2026-10-20 — 사용자 지시 「색인 원활 표면 2편 · 등급 확인·상위 경쟁 조사 후 작성」(온코케어 핵심 kw: 아바스틴 부작용)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-20","updatedAt":"2026-10-20","appLinks":true,"slug":"avastin-bevacizumab-side-effects-guide","title":"아바스틴 부작용 — 혈압·단백뇨·출혈, 집에서 기록하고 바로 알릴 신호","description":"아바스틴(베바시주맙) 부작용은 함께 맞는 항암제 부작용과 성격이 다릅니다. 고혈압·단백뇨·출혈·상처 회복·혈전·장 천공처럼 혈관과 관련된 변화를 연구 수치로 차분하게 정리하고, 집에서 혈압과 증상을 기록하는 법, 수술·치과 치료 전 알릴 것, 바로 연락할 신호를 안내합니다.","category":"항암제 정보","categoryColor":"#B9560C","readMin":9,"hero":"avastin-home-blood-pressure-record","heroAlt":"아바스틴 부작용 기록 — 창가 나무 탁자 위에 놓인 가정용 혈압계와 펼친 노트, 물 한 컵","tldr":["아바스틴(베바시주맙)은 종양으로 가는 새 혈관이 자라는 신호(VEGF)를 막는 표적치료제라, 고혈압·단백뇨·코피 같은 출혈·상처 회복 지연·혈전처럼 혈관과 관련된 부작용이 특징입니다. 탈모나 심한 구역은 대개 함께 맞는 항암제 쪽 영향입니다.","고혈압과 단백뇨는 증상이 거의 없어 혈압 측정과 소변검사로 확인합니다. 집에서 같은 시간에 잰 혈압을 날짜별로 적어 가면 의료진이 조절 여부를 판단하기 쉽습니다.","갑자기 생긴 심한 배 통증, 피를 토하거나 검은 변, 멈추지 않는 코피, 한쪽 팔다리 힘 빠짐·말이 어눌해짐, 가슴 통증은 바로 연락하거나 응급실을 찾을 신호입니다. 수술·발치 일정은 미리 치료팀에 알리세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「아바스틴 부작용」을 찾아본 환자와 가족을 위해 썼습니다. 아바스틴은 단독보다 다른 항암제와 함께 쓰는 경우가 많아, 지금 겪는 증상이 어느 약 때문인지 헷갈리기 쉽습니다. 아바스틴에서 특히 살펴야 할 변화가 무엇인지, 얼마나 흔한지, 집에서 무엇을 재고 적어야 하는지, 어떤 신호에서 바로 연락해야 하는지를 차례로 정리했습니다."},{"type":"h2","id":"what-is-avastin","text":"아바스틴은 어떤 약이고, 부작용이 왜 다를까"},{"type":"p","text":"아바스틴은 성분명 베바시주맙(bevacizumab)인 주사 표적치료제입니다. 종양이 자라려면 영양을 공급할 새 혈관이 필요한데, 이 혈관이 자라도록 신호를 보내는 단백질(VEGF)에 달라붙어 그 신호를 막습니다. 대장암·폐암·난소암·자궁경부암에서는 세포독성 항암제와, 간암에서는 면역항암제와 함께 쓰이는 등 대부분 병용요법의 한 부분으로 2~3주 간격 정맥 주사로 맞습니다."},{"type":"p","text":"작용 방식이 혈관에 맞춰져 있다 보니, 부작용도 혈압·콩팥의 미세 혈관·출혈·상처 회복처럼 혈관과 관련된 쪽에 모여 있습니다. 반면 탈모, 심한 구역·구토, 백혈구 감소 같은 변화는 주로 함께 맞는 세포독성 항암제의 영향입니다. 이 구분을 알면 어떤 증상을 어느 쪽 기준으로 볼지 정리가 됩니다. 물론 실제로 어느 약의 영향인지는 담당 의료진이 판단합니다."},{"type":"p","text":"이런 부작용이 있다고 해서 이 약이 위험하기만 한 것은 아닙니다. 전이성 대장암 환자 813명을 대상으로 한 연구에서 항암제에 베바시주맙을 더한 군의 생존기간 중앙값은 20.3개월로, 항암제만 쓴 군(15.6개월)보다 길었습니다 [1]. 부작용을 미리 알고 일찍 확인하는 것이 치료를 안전하게 이어 가는 방법입니다."},{"type":"m3svg","html":"<figure class=\"mag-figure\" data-oc-svg=\"topic\" style=\"margin:2em auto;max-width:560px\"><svg viewBox=\"0 0 480 440\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"av-t av-d\" style=\"width:100%;height:auto;font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif\">\n<title id=\"av-t\">아바스틴 부작용 — 혈관 관련 변화와 확인 방법</title>\n<desc id=\"av-d\">아바스틴에서 살필 변화는 고혈압(혈압 측정), 단백뇨(소변검사), 출혈(코피·변 색), 상처 회복(수술·치과 일정 알림), 혈전과 장 천공(응급 신호). 탈모·심한 구역·백혈구 감소는 주로 함께 맞는 항암제의 영향.</desc>\n<rect x=\"0\" y=\"0\" width=\"480\" height=\"440\" rx=\"18\" fill=\"#F4F7F5\"/>\n<text x=\"24\" y=\"40\" font-size=\"19\" font-weight=\"700\" fill=\"#26403a\">아바스틴에서 살필 변화와 확인 방법</text>\n<text x=\"24\" y=\"64\" font-size=\"13\" fill=\"#5C8073\">혈관 신호(VEGF)를 막는 약이라 혈관 관련 변화가 중심</text>\n<g font-size=\"14\">\n<rect x=\"24\" y=\"82\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#E3EEE8\"/><text x=\"40\" y=\"108\" font-weight=\"700\" fill=\"#2F6B4F\">고혈압</text><text x=\"168\" y=\"108\" fill=\"#26403a\">주사 전·집에서 같은 시간에 혈압 측정</text>\n<rect x=\"24\" y=\"130\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#E3EEE8\"/><text x=\"40\" y=\"156\" font-weight=\"700\" fill=\"#2F6B4F\">단백뇨</text><text x=\"168\" y=\"156\" fill=\"#26403a\">주사 전 소변검사 · 붓기·거품뇨 관찰</text>\n<rect x=\"24\" y=\"178\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#FBEFD9\"/><text x=\"40\" y=\"204\" font-weight=\"700\" fill=\"#A36A12\">출혈</text><text x=\"168\" y=\"204\" fill=\"#26403a\">코피 20분 이상·검은 변은 연락</text>\n<rect x=\"24\" y=\"226\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#FBEFD9\"/><text x=\"40\" y=\"252\" font-weight=\"700\" fill=\"#A36A12\">상처 회복</text><text x=\"168\" y=\"252\" fill=\"#26403a\">수술·발치 일정 잡히면 바로 알림</text>\n<rect x=\"24\" y=\"274\" width=\"432\" height=\"42\" rx=\"10\" fill=\"#F8DEDA\"/><text x=\"40\" y=\"300\" font-weight=\"700\" fill=\"#B23A2B\">혈전·장 천공</text><text x=\"168\" y=\"300\" fill=\"#26403a\">드묾 · 마비·가슴 통증·심한 복통은 응급</text>\n</g>\n<line x1=\"24\" y1=\"338\" x2=\"456\" y2=\"338\" stroke=\"#C9D8D2\" stroke-width=\"1.5\" stroke-dasharray=\"5 5\"/>\n<text x=\"24\" y=\"366\" font-size=\"14\" font-weight=\"700\" fill=\"#26403a\">주로 함께 맞는 항암제 쪽 영향</text>\n<text x=\"24\" y=\"390\" font-size=\"13.5\" fill=\"#33504a\">탈모 · 심한 구역·구토 · 백혈구 감소</text>\n<text x=\"24\" y=\"424\" font-size=\"11.5\" fill=\"#6B827B\">자료: Hurwitz 2004 · Zhu 2007 · Hapani 2009 · Scappaticci 2005·2007 · 온코케어 AI</text>\n</svg></figure>"},{"type":"h2","id":"hypertension","text":"고혈압 — 가장 흔하고, 증상이 없어 재야 알 수 있습니다"},{"type":"p","text":"아바스틴에서 가장 자주 이야기되는 부작용은 혈압 상승입니다. 앞의 대장암 연구에서 치료가 필요한 3등급 고혈압은 베바시주맙을 더한 군 11.0%, 위약군 2.3%였고, 연구진은 대부분 쉽게 조절되었다고 보고했습니다 [1]. 7개 무작위 연구 1,850명을 모은 분석에서도 고혈압 위험은 용량이 높을수록 커지는 경향을 보였습니다 [2]."},{"type":"p","text":"고혈압은 대개 아무 느낌이 없습니다. 그래서 주사 맞는 날마다 병원에서 혈압을 재고, 필요하면 혈압약을 시작하거나 조정합니다. 집에 혈압계가 있다면 아침 같은 시간에 앉아서 1~2분 쉰 뒤 재고 날짜와 함께 적어 두세요. 다만 혈압약을 시작하거나 바꾸는 일, 아바스틴 투여를 미루는 일은 모두 의료진이 결정합니다. 심한 두통, 갑자기 흐려지는 시야, 가슴 두근거림이 높은 혈압과 함께 나타나면 바로 연락하세요."},{"type":"h2","id":"proteinuria","text":"단백뇨 — 소변검사로 확인하는 콩팥 신호"},{"type":"p","text":"아바스틴은 콩팥의 아주 작은 혈관에도 영향을 주어 소변으로 단백질이 새어 나오게 할 수 있습니다. 같은 분석에서 단백뇨 위험도 용량에 따라 높아졌습니다 [2]. 대부분은 증상이 없어 주사 전 소변검사로 확인하며, 결과에 따라 투여를 잠시 미루거나 더 자세한 검사를 합니다."},{"type":"p","text":"집에서 알아챌 수 있는 변화는 소변에 거품이 오래 남는 것, 눈두덩이나 발목이 붓는 것 정도입니다. 이런 변화가 보이면 다음 진료 때 꼭 이야기하고, 소변검사 결과지를 받아 두면 이전 결과와 비교하기 좋습니다."},{"type":"h2","id":"bleeding-wound","text":"출혈과 상처 회복 — 수술·치과 치료 일정은 미리 알리기"},{"type":"p","text":"코피나 잇몸 출혈처럼 가벼운 출혈은 비교적 흔한 편입니다. 대부분 몇 분 눌러 주면 멈추지만, 20분 넘게 멈추지 않거나 자주 반복된다면 알려야 합니다. 피가 섞인 가래나 피를 토하는 것, 검은 변이나 붉은 피가 섞인 변은 드물지만 심한 출혈 신호이므로 바로 연락하거나 응급실을 찾으세요. 아스피린 같은 항혈소판제나 항응고제를 먹고 있다면 처음부터 의료진에게 알려야 합니다."},{"type":"p","text":"새 혈관이 자라는 과정은 상처가 아무는 데도 필요해서, 아바스틴은 수술 상처의 회복에 영향을 줄 수 있습니다. 대장암 연구 두 건을 살펴본 분석에서, 암 수술 28~60일 뒤에 베바시주맙 치료를 시작한 경우 상처 합병증은 1.3%로 대조군(0.5%)과 크게 다르지 않았습니다. 반면 치료 도중 큰 수술을 받은 경우에는 13%로 대조군(3.4%)보다 높았습니다 [4]. 그래서 의료진은 수술 전후로 투여 간격을 조정합니다. 예정된 수술·내시경 시술·발치나 임플란트 같은 치과 치료가 있다면 날짜가 잡히는 즉시 치료팀에 알리세요."},{"type":"h2","id":"rare-serious","text":"드물지만 놓치면 안 되는 부작용 — 혈전과 장 천공"},{"type":"p","text":"동맥 혈전은 드물지만 알아 두어야 할 부작용입니다. 5개 무작위 연구 1,745명을 모은 분석에서 베바시주맙을 더한 군은 동맥 혈전(뇌졸중·심근경색 등) 위험이 약 2배였고, 정맥 혈전 위험은 늘지 않았습니다. 과거에 동맥 혈전을 겪었거나 65세 이상인 경우 위험이 더 높았습니다 [5]. 해당한다면 치료 전에 의료진과 이야기해 두는 것이 좋습니다."},{"type":"p","text":"위장관 천공(장에 구멍이 생기는 것)은 더 드뭅니다. 17개 무작위 연구 12,294명을 모은 분석에서 발생률은 0.9%였고, 대장암에서 상대적으로 위험이 높았습니다 [3]. 드문 만큼 신호를 알아 두는 것이 중요합니다. 갑자기 시작된 심한 배 통증, 배가 딱딱해지는 느낌, 열과 구토가 함께 오는 복통은 기다리지 말고 응급실로 가야 합니다."},{"type":"callout","tone":"info","title":"수치를 읽는 법","text":"0.9%는 1,000명 가운데 약 9명, 위험이 2배라는 것은 원래 낮은 위험이 그만큼 높아진다는 뜻입니다. 대부분의 사람은 겪지 않지만, 겪으면 빨리 대처해야 하는 부작용이라 신호를 알아 두는 것입니다."},{"type":"h2","id":"common-effects","text":"흔한 부작용 — 피로·두통·설사·입맛 변화"},{"type":"p","text":"피로, 두통, 설사, 입맛 변화, 입안 헐음 같은 증상도 자주 보고됩니다. 이 가운데 상당 부분은 함께 맞는 항암제의 영향이 섞여 있어, 증상이 주기의 어느 날에 심해지는지 기록해 두면 원인을 가늠하는 데 도움이 됩니다. 피로는 0~10점, 설사는 평소보다 하루 몇 번 늘었는지, 식사는 평소의 몇 할을 먹었는지로 적어 두세요. 평소보다 하루 4회 이상 늘어난 설사나 물을 마시기 어려운 상태는 알려야 할 신호입니다."},{"type":"m3svg","html":"<!-- M3:SVG --><figure class=\"m3-card not-prose\" style=\"margin:2.2em 0\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 406\" width=\"100%\" role=\"img\" aria-label=\"이 글의 핵심: 고혈압 / 단백뇨 / 출혈과 상처 회복 / 드물지만 놓치면 안 되는 부작용\" style=\"display:block;max-width:560px;height:auto;margin:0 auto;font-family:Pretendard,'Noto Sans KR','Noto Sans JP','Malgun Gothic',sans-serif\"><defs><linearGradient id=\"m3964353g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#26403a\"/><stop offset=\"1\" stop-color=\"#5C8073\"/></linearGradient><linearGradient id=\"m3964353v\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5C8073\"/><stop offset=\"1\" stop-color=\"#5C8073\" stop-opacity=\"0.15\"/></linearGradient><clipPath id=\"m3964353c\"><rect width=\"480\" height=\"406\" rx=\"18\"/></clipPath></defs><g clip-path=\"url(#m3964353c)\"><rect width=\"480\" height=\"406\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"106\" fill=\"url(#m3964353g)\"/><circle cx=\"446\" cy=\"18\" r=\"92\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.10\" stroke-width=\"18\"/><circle cx=\"446\" cy=\"18\" r=\"46\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.14\"/><circle cx=\"446\" cy=\"18\" r=\"140\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.07\" stroke-dasharray=\"3 7\"/><polyline points=\"0,90 249.60000000000002,90 264,76 278.4,102 292.8,82 302.4,90 480,90\" fill=\"none\" stroke=\"#ffffff\" stroke-opacity=\"0.45\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"24\" y=\"20\" width=\"117\" height=\"24\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"0.16\"/><circle cx=\"36\" cy=\"32\" r=\"4\" fill=\"#ffffff\" fill-opacity=\"0.85\"/><text x=\"46\" y=\"37\" fill=\"#ffffff\" font-size=\"12.5\" font-weight=\"800\" letter-spacing=\"0.5\">이 글의 핵심</text><text x=\"24\" y=\"76\" fill=\"#ffffff\" font-size=\"20.5\" font-weight=\"800\">아바스틴 부작용</text><line x1=\"39\" y1=\"145\" x2=\"39\" y2=\"319\" stroke=\"url(#m3964353v)\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"62\" y=\"126\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"136\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"150\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">고혈압</text><rect x=\"62\" y=\"184\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"194\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"208\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">단백뇨</text><rect x=\"62\" y=\"242\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#5C8073\" fill-opacity=\"0.07\" stroke=\"#5C8073\" stroke-opacity=\"0\"/><rect x=\"62\" y=\"252\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"266\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">출혈과 상처 회복</text><rect x=\"62\" y=\"300\" width=\"394\" height=\"46\" rx=\"12\" fill=\"#ffffff\" fill-opacity=\"1\" stroke=\"#5C8073\" stroke-opacity=\"0.18\"/><rect x=\"62\" y=\"310\" width=\"3.5\" height=\"26\" rx=\"2\" fill=\"#5C8073\" fill-opacity=\"0.55\"/><text x=\"76\" y=\"324\" fill=\"#1b2433\" font-size=\"16.5\" font-weight=\"800\">드물지만 놓치면 안 되는 부작용</text><circle cx=\"39\" cy=\"145\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"145\" r=\"12\" fill=\"url(#m3964353g)\"/><text x=\"39\" y=\"149.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">1</text><circle cx=\"39\" cy=\"203\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"203\" r=\"12\" fill=\"url(#m3964353g)\"/><text x=\"39\" y=\"207.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">2</text><circle cx=\"39\" cy=\"261\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"261\" r=\"12\" fill=\"url(#m3964353g)\"/><text x=\"39\" y=\"265.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">3</text><circle cx=\"39\" cy=\"319\" r=\"15\" fill=\"#ffffff\" stroke=\"#5C8073\" stroke-opacity=\"0.25\" stroke-width=\"5\"/><circle cx=\"39\" cy=\"319\" r=\"12\" fill=\"url(#m3964353g)\"/><text x=\"39\" y=\"323.5\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">4</text><rect x=\"0\" y=\"362\" width=\"480\" height=\"44\" fill=\"#26403a\" fill-opacity=\"0.05\"/><circle cx=\"31\" cy=\"384\" r=\"7\" fill=\"url(#m3964353g)\"/><text x=\"46\" y=\"389\" fill=\"#26403a\" font-size=\"13\" font-weight=\"800\">온코케어 AI</text><text x=\"456\" y=\"389\" fill=\"#26403a\" fill-opacity=\"0.7\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">한눈에 보는 요약</text></g><rect x=\"0.5\" y=\"0.5\" width=\"479\" height=\"405\" rx=\"18\" fill=\"none\" stroke=\"#26403a\" stroke-opacity=\"0.16\"/></svg></figure><!-- /M3:SVG -->"},{"type":"h2","id":"when-to-call","text":"이럴 땐 다음 진료를 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["갑자기 시작된 심한 배 통증, 배가 딱딱해짐, 복통과 함께 열·구토","피를 토하거나 피 섞인 가래, 검은 변이나 붉은 피가 섞인 변","20분 넘게 멈추지 않는 코피, 멍이 쉽게 들고 잘 낫지 않음","한쪽 팔다리 힘 빠짐·저림, 말이 어눌해짐, 얼굴 한쪽 처짐, 갑작스러운 심한 두통","가슴 통증이나 압박감, 갑자기 숨이 참","집에서 잰 혈압이 안내받은 기준보다 계속 높거나, 높은 혈압과 함께 시야가 흐려짐","수술 상처가 벌어지거나 진물이 나고 붉게 부어오름"]},{"type":"p","text":"뇌졸중이 의심되는 증상(한쪽 마비, 말 어눌함, 얼굴 처짐)이나 심한 가슴 통증은 치료 병원에 전화하기보다 119가 먼저입니다. 그 밖의 경우에는 마지막 주사 날짜, 증상이 시작된 시각, 혈압 수치처럼 숫자로 된 정보를 함께 전하면 판단이 빨라집니다."},{"type":"h2","id":"record-with-app","text":"온코케어 AI로 혈압과 증상을 함께 기록하는 법"},{"type":"p","text":"아바스틴 부작용 관리의 핵심은 증상이 없을 때도 꾸준히 남기는 기록입니다. 온코케어 AI의 증상 체크인에 그날 잰 혈압과 코피·두통·부종 여부를 적고, 소변검사와 혈액검사 결과지는 검사 결과 정리 기능으로 모아 두세요. 항암 일정 기능에 주사 날짜와 예정된 수술·치과 치료 날짜를 함께 넣어 두면 치료팀에 알릴 시점을 놓치지 않습니다. 가족 보호자 연결을 해 두면 보호자도 같은 기록을 보고 함께 챙길 수 있습니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 아바스틴의 투여 일정·연기 여부, 혈압약 시작이나 조정, 수술 전후 투여 간격은 반드시 담당 의료진과 상의해 정하세요."}],"faq":[{"q":"아바스틴 부작용 중 가장 흔한 것은 무엇인가요?","a":"혈압 상승이 가장 자주 이야기됩니다. 전이성 대장암 연구에서 치료가 필요한 정도의 고혈압은 베바시주맙을 더한 군의 11.0%에서 나타났고 대부분 조절되었습니다. 코피 같은 가벼운 출혈, 소변검사에서 보이는 단백뇨, 피로·두통도 흔한 편입니다."},{"q":"탈모나 구토도 아바스틴 때문인가요?","a":"아바스틴은 혈관 신호를 막는 표적치료제라 탈모나 심한 구토는 대개 함께 맞는 세포독성 항암제의 영향으로 봅니다. 다만 실제 원인은 사람마다 다를 수 있어, 증상이 주기의 어느 날에 심한지 기록해 담당 의료진과 이야기해 보세요."},{"q":"집에서 혈압을 재야 하나요?","a":"병원에서 주사 전마다 혈압을 재지만, 집에서 같은 시간에 잰 혈압을 날짜별로 적어 가면 의료진이 조절 여부를 판단하는 데 도움이 됩니다. 혈압약을 시작하거나 바꾸는 일은 스스로 하지 말고 의료진과 상의하세요."},{"q":"아바스틴을 맞는 중에 치과 치료나 수술을 받아도 되나요?","a":"아바스틴은 상처가 아무는 과정에 영향을 줄 수 있어, 의료진이 수술 전후로 투여 간격을 조정합니다. 발치·임플란트 같은 치과 치료나 시술·수술 일정이 잡히면 바로 치료팀에 알리고 일정을 함께 정하세요."},{"q":"온코케어 AI로 무엇을 기록하면 좋나요?","a":"그날 잰 혈압, 코피·두통·부종 같은 증상, 소변·혈액검사 결과, 주사 날짜와 예정된 수술·치과 일정을 함께 남겨 두면 좋습니다. 온코케어 AI는 기록을 정리하는 도구이며, 판단은 담당 의료진이 합니다."}],"references":[{"label":"Hurwitz H, et al. Bevacizumab plus irinotecan, fluorouracil, and leucovorin for metastatic colorectal cancer. N Engl J Med 2004;350(23):2335-42 (PMID 15175435)","url":"https://pubmed.ncbi.nlm.nih.gov/15175435/"},{"label":"Zhu X, et al. Risks of proteinuria and hypertension with bevacizumab, an antibody against vascular endothelial growth factor: systematic review and meta-analysis. Am J Kidney Dis 2007;49(2):186-93 (PMID 17261421)","url":"https://pubmed.ncbi.nlm.nih.gov/17261421/"},{"label":"Hapani S, et al. Risk of gastrointestinal perforation in patients with cancer treated with bevacizumab: a meta-analysis. Lancet Oncol 2009;10(6):559-68 (PMID 19482548)","url":"https://pubmed.ncbi.nlm.nih.gov/19482548/"},{"label":"Scappaticci FA, et al. Surgical wound healing complications in metastatic colorectal cancer patients treated with bevacizumab. J Surg Oncol 2005;91(3):173-80 (PMID 16118771)","url":"https://pubmed.ncbi.nlm.nih.gov/16118771/"},{"label":"Scappaticci FA, et al. Arterial thromboembolic events in patients with metastatic carcinoma treated with chemotherapy and bevacizumab. J Natl Cancer Inst 2007;99(16):1232-9 (PMID 17686822)","url":"https://pubmed.ncbi.nlm.nih.gov/17686822/"}],"related":["colorectal-cancer-symptoms-bowel-change-bleeding","when-to-call-your-oncology-team","reading-lab-results"]},
  // 2026-10-13 — 사용자 지시 「핵심키워드 상위노출」(온코케어 핵심 kw: 췌장암 증세)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-13","updatedAt":"2026-10-13","appLinks":true,"slug":"pancreatic-cancer-symptoms-when-to-get-checked","title":"췌장암 증세 — 황달·등 통증·체중감소, 언제 검사를 받아야 하나","description":"췌장암 증세로 알려진 황달, 명치·등 통증, 이유 없는 체중감소, 새로 생긴 당뇨, 기름진 변은 대부분 더 흔한 다른 원인에서도 나타납니다. 연구가 보여 준 증상의 의미, 검사 종류와 CA19-9의 한계, 진단 뒤 첫 진료 준비와 증상 기록법, 바로 연락해야 할 신호를 정리했습니다.","category":"암종별 정보","categoryColor":"#B9560C","readMin":9,"hero":"pancreatic-cancer-symptoms-notebook","heroAlt":"췌장암 증세 기록 — 진료 대기실 창가 탁자에 펼쳐 둔 노트와 펜, 물 한 컵","tldr":["췌장암 증세로 꼽히는 황달·상복부와 등 통증·체중감소·새로 생긴 당뇨·소화불량은 위염, 담석, 흔한 2형 당뇨처럼 훨씬 흔한 원인에서도 나타납니다. 증상 하나만으로 암을 짐작할 수는 없고, 검사로 확인해야 합니다.","연구에서 눈에 띄게 의미가 컸던 신호는 황달이었고, 다른 증상은 하나만 있을 때보다 여러 개가 겹치거나 점점 늘어날 때 더 주의 깊게 봐야 했습니다.","CA19-9 같은 혈액검사는 진단을 대신하지 못합니다. 영상검사(CT·MRI)와 내시경초음파, 필요하면 조직검사로 확인하며, 증상이 언제부터 어떻게 변했는지 기록해 가면 진료가 훨씬 수월해집니다."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「췌장암 증세」를 검색해 본 분, 그리고 가족이 검사를 앞두고 있거나 막 진단을 받은 분을 위해 썼습니다. 어떤 증상이 연구에서 의미가 있었는지, 그 증상이 다른 흔한 병에서도 왜 나타나는지, 어떤 검사로 확인하는지, 진료실에 무엇을 들고 가면 좋은지를 차례로 살펴봅니다."},{"type":"h2","id":"why-hard","text":"췌장암 증세가 늦게 알아차려지는 이유"},{"type":"p","text":"췌장은 위 뒤쪽, 배 깊숙한 곳에 있어 작은 변화가 바깥으로 잘 드러나지 않습니다. 초기에 생기는 증상도 「속이 더부룩하다」「입맛이 없다」「피곤하다」처럼 일상에서 자주 겪는 불편과 비슷합니다. 그래서 많은 사람이 소화제를 먹거나 시간이 지나기를 기다리다가, 증상이 여러 개로 늘어난 뒤에야 병원을 찾게 됩니다."},{"type":"p","text":"영국에서 췌장암이 의심되어 의뢰된 40세 이상 391명을 추적한 전향적 연구(SYMPTOM 췌장 연구)에서도 이 어려움이 그대로 드러났습니다. 실제로 췌장암으로 진단된 사람은 119명(30%)이었고, 225명(58%)은 암이 아니었습니다. 처음 나타난 증상만 놓고 보면 췌장암 환자와 암이 아닌 사람 사이에 뚜렷이 다른 증상이 없었습니다. 차이는 그 뒤에 더해진 증상에서 나타났습니다 [2]."},{"type":"callout","tone":"info","title":"먼저 기억할 점","text":"아래에 나오는 증상은 「췌장암이면 이런 증상이 있을 수 있다」는 뜻이지, 「이런 증상이 있으면 췌장암」이라는 뜻이 아닙니다. 같은 증상을 가진 사람 대부분은 다른 원인으로 확인됩니다."},{"type":"h2","id":"main-symptoms","text":"췌장암에서 나타날 수 있는 증상"},{"type":"p","text":"연구와 진료 현장에서 반복해 언급되는 증상은 다음과 같습니다. 종양이 췌장의 어느 부위(머리·몸통·꼬리)에 있는지에 따라 먼저 드러나는 증상이 다를 수 있습니다."},{"type":"ul","items":["황달 — 눈 흰자위와 피부가 노래지고, 소변이 콜라나 진한 홍차 색처럼 짙어지며, 변 색이 회색·흰색에 가깝게 옅어집니다. 피부 가려움이 함께 오기도 합니다. 췌장 머리 쪽 종양이 담즙이 내려가는 길(담관)을 누를 때 생길 수 있습니다.","상복부·등 통증 — 명치 부근이 묵직하거나 쑤시고, 그 통증이 등 가운데로 뻗치기도 합니다. 누우면 심해지고 몸을 앞으로 숙이면 덜하다고 표현하는 경우가 있습니다.","이유 없는 체중감소 — 식단이나 운동을 바꾸지 않았는데 몇 달 사이 체중이 계속 줄어듭니다.","입맛 저하·피로 — 먹고 싶은 마음이 줄고, 쉬어도 풀리지 않는 피곤함이 이어집니다.","소화불량·구역 — 조금만 먹어도 더부룩하고, 메스꺼움이나 구토가 생깁니다.","배변 변화와 지방변 — 변이 묽거나 기름기가 돌아 물에 뜨고, 냄새가 심하며 변기에 잘 씻겨 내려가지 않습니다. 췌장에서 나오는 소화효소가 부족해 지방이 덜 소화될 때 나타날 수 있습니다.","새로 생긴 당뇨 또는 갑자기 나빠진 혈당 — 가족력이나 체중 증가 같은 뚜렷한 이유 없이 나이 들어 당뇨가 새로 진단되거나, 잘 조절되던 혈당이 흔들립니다."]},{"type":"p","text":"영국 1차 진료 기록으로 췌장암 환자 3,635명과 대조군 16,459명을 비교한 연구에서는 진단 전 1년 동안 황달, 복통, 구역·구토, 등 통증, 변비, 설사, 체중감소, 무기력감, 새로 생긴 당뇨 아홉 가지가 췌장암과 관련이 있었습니다 [1]. 앞의 SYMPTOM 연구에서는 의뢰 이후 황달(췌장암 환자 49% 대 암이 아닌 사람 12%), 체중감소(55% 대 22%), 피로(51% 대 26%), 배변 습관 변화(41% 대 16%), 입맛 저하(48% 대 26%)가 췌장암 진단과 관련이 있었습니다 [2]."},{"type":"h2","id":"other-causes","text":"같은 증상, 더 흔한 다른 원인들"},{"type":"p","text":"위 증상을 하나 가지고 있다고 해서 췌장암 가능성이 크다는 뜻은 아닙니다. 앞의 영국 1차 진료 연구에서, 60세 이상에서 증상 하나가 있을 때 실제 췌장암일 확률(양성예측도)은 황달을 빼면 모두 1% 미만이었습니다. 황달은 22%로 눈에 띄게 높았고, 증상 두 가지가 겹치면 1%를 넘는 조합이 여럿 있었습니다 [1]. 즉, 황달은 그 자체로 빨리 검사해야 할 신호이고, 다른 증상은 「하나」보다 「여럿이 겹치거나 늘어나는지」를 보는 것이 의미가 있습니다."},{"type":"ul","items":["황달 — 담석이 담관을 막거나, 간염·약물 등 간 문제로도 생깁니다.","명치·등 통증 — 위염·위궤양, 담석, 근육이나 척추 문제가 훨씬 흔한 원인입니다.","소화불량·더부룩함 — 기능성 소화불량, 위식도역류처럼 오래 이어지는 흔한 질환이 많습니다.","체중감소 — 갑상선 기능 이상, 우울, 다른 소화기 질환, 조절되지 않는 당뇨에서도 나타납니다.","기름진 변 — 만성 췌장염, 담즙 분비 문제, 장에서 흡수가 잘 안 되는 다른 질환에서도 보입니다.","새로 생긴 당뇨 — 대부분은 흔한 2형 당뇨입니다."]},{"type":"p","text":"새로 생긴 당뇨에 대해서는 따로 설명이 필요합니다. 메이요 클리닉 연구진의 리뷰에 따르면 췌장암 환자의 최대 80%가 고혈당이나 당뇨 상태였고, 나이 들어 새로 당뇨가 생긴 사람은 일반 인구보다 췌장암 위험이 약 8배 높았습니다. 하지만 같은 리뷰는 2형 당뇨가 매우 흔하고 췌장암은 상대적으로 드물며, 두 당뇨를 진료실에서 구별하기 어렵다는 점도 함께 짚었습니다 [3]. 그래서 새로 당뇨를 진단받았다면 놀라기보다, 체중이 함께 빠지고 있는지 같은 동반 증상을 담당 의사에게 정확히 알려 판단을 돕는 편이 현실적입니다."},{"type":"h2","id":"when-to-check","text":"어떤 경우에 검사를 받아 보면 좋을까"},{"type":"p","text":"국가암검진 대상 암종에 췌장암은 들어 있지 않으며, 증상이 없는 일반인을 대상으로 한 췌장암 선별 방법은 아직 확립되어 있지 않습니다. 그래서 「증상이 생겼을 때 미루지 않고 진료를 받는 것」이 현실적인 첫걸음입니다. 다음과 같은 경우에는 소화기내과 등 진료를 받아 상의해 보세요."},{"type":"ul","items":["눈 흰자위나 피부가 노래졌을 때(이 경우는 기다리지 말고 빨리 진료)","몇 달 사이 이유 없이 체중이 계속 줄고 있을 때","명치·등 통증이 몇 주 넘게 이어지거나 점점 심해질 때","소화제를 먹어도 나아지지 않는 소화불량에 입맛 저하·체중감소가 겹칠 때","기름지고 물에 뜨는 변이 계속될 때","뚜렷한 이유 없이 당뇨가 새로 생겼는데 체중이 함께 줄고 있을 때","가까운 가족 중 췌장암 환자가 여럿 있거나, 유전 상담에서 위험이 높다는 이야기를 들었을 때"]},{"type":"h2","id":"tests","text":"어떤 검사로 확인할까 — CT·MRI·내시경초음파·CA19-9"},{"type":"p","text":"검사 순서와 종류는 증상, 나이, 다른 질환에 따라 의료진이 정합니다. 여기서는 각 검사가 무엇을 보는지 정도만 정리합니다."},{"type":"h3","text":"영상검사 — CT와 MRI"},{"type":"p","text":"조영제를 쓰는 복부 CT는 췌장에 덩어리가 있는지, 주변 혈관이나 다른 장기와 어떤 관계인지 살피는 데 흔히 쓰입니다. MRI와 담관·췌관을 자세히 보는 자기공명 담췌관 촬영(MRCP)은 담관이 막힌 위치를 보거나 CT로 애매한 부분을 보완할 때 쓰입니다. 신장 기능이 떨어져 있거나 조영제 알레르기가 있으면 검사 전에 꼭 알려야 합니다."},{"type":"h3","text":"내시경초음파(EUS)"},{"type":"p","text":"내시경 끝에 달린 초음파로 위·십이지장 벽 너머의 췌장을 가까이서 보는 검사입니다. 작은 병변을 살피거나, 바늘로 조직을 얻어 확인하는 데에도 쓰입니다. 진정 상태에서 하는 경우가 많아 보호자 동행 여부를 미리 확인해 두면 좋습니다."},{"type":"h3","text":"혈액검사 CA19-9 — 참고가 되지만 한계가 분명합니다"},{"type":"p","text":"CA19-9는 췌장암에서 가장 많이 연구된 혈액 종양표지자입니다. 근거를 정리한 리뷰에 따르면 증상이 있는 환자에서 CA19-9의 민감도는 79~81%, 특이도는 82~90% 정도였습니다. 그러나 증상이 없는 사람을 걸러 내는 선별 검사로 쓰기에는 양성예측도가 0.5~0.9%에 그쳐 적합하지 않았습니다. 또 루이스 항원 음성인 사람(5~10%)은 암이 있어도 수치가 오르지 않을 수 있고, 담관이 막혀 황달이 있을 때는 암이 아니어도 수치가 오르는 경우(10~60%)가 있었습니다 [4]."},{"type":"p","text":"정리하면 CA19-9가 정상이라고 안심할 수도, 높다고 바로 암이라고 단정할 수도 없습니다. 진단 뒤에는 치료 경과를 볼 때 참고 지표로 쓰이는 경우가 많으므로, 처음 측정한 값을 기록해 두면 이후 흐름을 의료진과 함께 보기가 쉽습니다. 최종 진단은 영상검사와 조직검사 결과를 종합해 내려집니다."},{"type":"h2","id":"first-visit","text":"진단 뒤 첫 진료, 무엇을 준비할까"},{"type":"p","text":"검사 결과를 듣는 날은 정보가 한꺼번에 쏟아집니다. 다음을 미리 준비해 두면 짧은 진료 시간에도 필요한 이야기를 놓치지 않을 수 있습니다."},{"type":"ul","items":["다른 병원에서 받은 검사 결과지와 영상 CD, 판독지 사본","지금 먹고 있는 약·영양제 목록(이름과 하루 몇 번 먹는지)","증상 기록 — 언제부터 무엇이 어떻게 변했는지(아래 「증상 기록법」 참고)","최근 몇 달의 체중 변화와 식사량","당뇨·간 질환·신장 질환 등 다른 지병과 가족 중 암 환자 여부","물어볼 질문 목록 — 병의 진행 정도, 앞으로 필요한 검사, 치료 선택지와 일정, 황달이나 통증이 있으면 먼저 조절할 방법, 영양 상담 연결 여부","함께 들을 가족 한 명과 받아 적을 노트"]},{"type":"p","text":"황달이 있는 상태라면 본격적인 치료에 앞서 막힌 담관을 먼저 풀어 주는 시술이 논의되기도 합니다. 어떤 순서로 진행할지는 의료진이 상태를 보고 정하므로, 「다음에 무엇을 하게 되는지」와 「그 사이에 어떤 변화가 생기면 연락해야 하는지」를 꼭 확인해 두세요."},{"type":"h2","id":"symptom-log","text":"증상 기록법 — 날짜·정도·변화를 한 줄로"},{"type":"p","text":"SYMPTOM 연구에서 첫 증상이 생긴 뒤 진단까지 걸린 기간의 중앙값은 117일, 약 4개월이었습니다 [2]. 그 사이 여러 번 진료를 받게 되는 만큼, 증상을 기억에 의존하지 않고 적어 두는 것이 도움이 됩니다. 복잡할 필요는 없습니다. 하루 한 줄이면 충분합니다."},{"type":"ul","items":["날짜와 시간 — 언제 시작되었고, 하루 중 언제 심한지","부위와 성격 — 명치인지 등인지, 쑤시는지 묵직한지, 자세에 따라 달라지는지","정도 — 0~10 사이 숫자로(0은 없음, 10은 상상할 수 있는 가장 심한 정도)","눈·피부·소변·변 색 — 달라졌다면 휴대폰으로 사진을 남겨 두기","체중 — 같은 시각, 같은 옷차림으로 주 1~2회","식사량 — 평소의 몇 분의 1을 먹었는지","혈당 — 측정하고 있다면 수치와 시각"]},{"type":"p","text":"이렇게 쌓인 기록은 「한 달 전부터 등이 아팠는데 2주 전부터 체중이 3kg 줄었다」처럼 증상이 겹치고 늘어나는 흐름을 보여 줍니다. 연구에서 의미가 컸던 것이 바로 이런 흐름이었습니다."},{"type":"h2","id":"call-now","text":"이럴 땐 바로 연락하거나 진료를 받으세요"},{"type":"ul","items":["눈 흰자위나 피부가 노래지고, 소변이 짙어지거나 변 색이 하얗게 옅어졌을 때","황달과 함께 열이나 오한이 날 때(담관 감염 가능성이 있어 응급 진료가 필요할 수 있습니다)","참기 어려운 심한 복통이나 등 통증이 갑자기 생겼을 때","구토가 반복되어 물도 넘기기 어려울 때","검은 변을 보거나 피를 토했을 때","갈증·잦은 소변과 함께 혈당이 평소보다 크게 높게 나올 때","이미 진단을 받았거나 담관 스텐트를 넣은 뒤라면, 열·황달 재발·통증 악화가 생겼을 때 안내받은 연락처로 바로"]},{"type":"p","text":"이런 신호는 집에서 지켜볼 문제가 아닐 수 있습니다. 어떤 검사나 처치가 필요한지는 의료진이 판단합니다. 밤이나 주말이라면 응급실 이용을 망설이지 마세요."},{"type":"h2","id":"app","text":"온코케어 AI로 증상 기록을 진료에 가져가는 법"},{"type":"p","text":"온코케어 AI의 증상 체크인에 통증 부위와 정도, 황달이나 변 색 변화, 체중과 식사량을 날짜별로 남겨 두면, 진료실에서 화면을 보여 주는 것만으로 「언제부터 어떻게 변했는지」를 설명할 수 있습니다. 식사 사진 기록으로 하루에 얼마나 먹었는지 남기고, 혈액검사 결과(CA19-9, 혈당, 간 수치 등)는 검사 결과 정리 기능에 모아 두면 수치의 흐름을 한눈에 볼 수 있습니다. 진단 뒤 치료가 시작되면 항암 일정과 복약 기록도 같은 곳에서 관리할 수 있고, 가족·보호자 연결 기능으로 진료에 동행하는 가족과 기록을 함께 볼 수 있습니다. 앱은 증상을 해석하거나 진단하지 않으며, 의료진과의 대화를 돕는 기록 도구입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단을 대신하지 않습니다. 증상이 있다면 스스로 판단하지 말고 의료진의 진료를 받으세요. 검사 종류와 순서, 치료 방법은 개인의 상태에 따라 담당 의료진이 정합니다."}],"faq":[{"q":"췌장암 초기 증세는 무엇인가요?","a":"초기에는 증상이 없거나 소화불량, 입맛 저하, 피로처럼 흔한 불편과 비슷한 경우가 많습니다. 연구에서는 첫 증상만으로 췌장암과 다른 원인을 구별하기 어려웠고, 황달·체중감소·배변 변화 같은 증상이 더해질 때 의미가 커졌습니다. 증상이 이어지거나 늘어나면 진료를 받아 확인하세요."},{"q":"등이 아프면 췌장암을 의심해야 하나요?","a":"등 통증은 근육이나 척추 문제처럼 훨씬 흔한 원인이 대부분입니다. 다만 명치 통증이 등으로 뻗치면서 체중감소, 입맛 저하, 황달 같은 다른 증상이 함께 있거나 점점 심해진다면 진료를 받아 상의해 보는 것이 좋습니다."},{"q":"CA19-9 수치가 정상이면 췌장암이 아닌가요?","a":"그렇게 단정할 수 없습니다. CA19-9는 암이 있어도 오르지 않는 사람이 있고, 담관이 막히거나 다른 질환이 있을 때 암이 아니어도 오를 수 있습니다. 증상이 있다면 혈액검사만으로 판단하지 말고 의료진이 권하는 영상검사 등을 함께 확인하세요."},{"q":"갑자기 당뇨 진단을 받았는데 췌장 검사를 해야 하나요?","a":"새로 생긴 당뇨의 대부분은 흔한 2형 당뇨입니다. 다만 나이 들어 이유 없이 당뇨가 생겼고 체중이 함께 줄거나 다른 소화기 증상이 있다면 그 사실을 담당 의사에게 알리고 추가 검사가 필요한지 상의해 보세요."},{"q":"온코케어 AI가 증상을 보고 췌장암인지 알려 주나요?","a":"아니요. 온코케어 AI는 증상 체크인, 검사 결과 정리, 식사 사진 기록 등을 돕는 정보·기록 도구로 진단을 하지 않습니다. 남긴 기록을 진료 때 보여 주어 의료진이 판단하는 데 참고하도록 쓰세요."}],"references":[{"label":"Stapley S, et al. The risk of pancreatic cancer in symptomatic patients in primary care: a large case-control study using electronic records. Br J Cancer 2012;106(12):1940-4 (PMID 22617126)","url":"https://pubmed.ncbi.nlm.nih.gov/22617126/"},{"label":"Walter FM, et al. Symptoms and patient factors associated with diagnostic intervals for pancreatic cancer (SYMPTOM pancreatic study): a prospective cohort study. Lancet Gastroenterol Hepatol 2016;1(4):298-306 (PMID 28404200)","url":"https://pubmed.ncbi.nlm.nih.gov/28404200/"},{"label":"Pannala R, et al. New-onset diabetes: a potential clue to the early diagnosis of pancreatic cancer. Lancet Oncol 2009;10(1):88-95 (PMID 19111249)","url":"https://pubmed.ncbi.nlm.nih.gov/19111249/"},{"label":"Ballehaninna UK, Chamberlain RS. The clinical utility of serum CA 19-9 in the diagnosis, prognosis and management of pancreatic adenocarcinoma: an evidence based appraisal. J Gastrointest Oncol 2012;3(2):105-19 (PMID 22811878)","url":"https://pubmed.ncbi.nlm.nih.gov/22811878/"}],"related":["tumor-marker-rise-what-to-do","reading-lab-results","when-to-call-your-oncology-team"]},
  // 2026-10-13 — 사용자 지시 「핵심키워드 상위노출」(온코케어 핵심 kw: 위암 증세)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-13","updatedAt":"2026-10-13","appLinks":true,"slug":"stomach-cancer-symptoms-early-signs-screening","title":"위암 증세 — 초기엔 조용한 이유와 검사를 받아야 할 신호","description":"위암 증세는 초기에 거의 없거나 흔한 소화불량과 구별하기 어렵습니다. 속쓰림·조기 포만감·체중감소·흑색변·빈혈 같은 증상과 그보다 흔한 다른 원인, 만 40세 이상 국가 위암검진, 검사를 미루지 말아야 할 때와 증상 기록법을 논문 근거로 정리했습니다.","category":"암종별 정보","categoryColor":"#B9560C","readMin":9,"hero":"stomach-cancer-symptoms-checkup","heroAlt":"위암 증세 — 검진 대기실 창가의 빈 의자와 탁자 위에 놓인 증상 기록 노트","tldr":["초기 위암은 증상이 없거나 흔한 소화불량과 비슷한 경우가 많아, 증상만으로 위암 여부를 가늠하기 어렵습니다. 그래서 정기 검진이 중요합니다.","속쓰림·더부룩함은 위염·역류 같은 다른 원인이 훨씬 흔합니다. 다만 체중감소·삼킴 곤란·흑색변·빈혈·반복 구토가 함께 있거나 증상이 이어지면 검사로 확인하세요.","국가암검진에서 위암 검진은 만 40세 이상 2년마다 받습니다. 증상이 있다면 검진 주기를 기다리지 말고 진료를 먼저 받으세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 「위암 증세」를 검색한 분들이 가장 궁금해하는 질문, 곧 지금 내 속쓰림이 혹시 위암 신호인지를 차분히 따져 보도록 돕기 위해 썼습니다. 증상을 나열하는 데서 그치지 않고, 그 증상이 다른 흔한 원인에서도 생긴다는 점과 언제 검사를 받아야 하는지, 진료 전에 무엇을 적어 가면 좋은지를 함께 다룹니다."},{"type":"h2","id":"silent-early","text":"초기 위암은 왜 조용할까 — 증상이 없는 경우가 많습니다"},{"type":"p","text":"위는 음식을 담아 두는 넓은 주머니 모양의 장기라, 안쪽 점막에 작은 병변이 생겨도 통로가 막히거나 출혈이 많아지기 전까지는 불편함을 거의 느끼지 못하는 경우가 많습니다. 증상과 위암의 관계를 검토한 리뷰는 초기 위암의 증상이 양성 소화불량과 구별되지 않을 수 있고, 반대로 뚜렷한 경고 증상이 나타났을 때는 이미 진행된 상태인 경우가 적지 않다고 설명합니다 [1]."},{"type":"p","text":"같은 리뷰는 일본처럼 검진 체계가 자리 잡은 나라에서는 증상이 없는 사람에게서 조기에 발견되는 경우가 많지만, 그렇지 않은 곳에서는 대부분 소화불량이나 경고 증상 때문에 진단에 이른다고 정리합니다 [1]. 「아픈 데가 없으니 괜찮다」는 판단이 위암에서는 잘 맞지 않는 이유가 여기에 있습니다. 증상을 기다리기보다 정해진 시기에 검진을 받는 것이 조기 발견의 기본 경로입니다."},{"type":"h2","id":"possible-symptoms","text":"위암에서 나타날 수 있는 증상들"},{"type":"p","text":"위암이 어느 정도 자라면 다음과 같은 증상이 나타날 수 있습니다. 한 가지만 나타나기도 하고 여러 가지가 겹치기도 합니다. 다만 아래 증상 하나하나는 위암이 아닌 경우가 훨씬 많다는 점을 먼저 기억해 주세요."},{"type":"ul","items":["명치(윗배) 쓰림이나 통증, 식후 더부룩함 같은 소화불량","조금만 먹어도 금방 배가 부른 느낌(조기 포만감), 식욕 저하","특별히 식사를 줄이지 않았는데 이어지는 체중감소","속이 메스껍거나 구토가 반복되는 증상, 음식이 내려가지 않는 느낌","삼킬 때 걸리는 느낌(위 윗부분 가까이에 병변이 있을 때 나타날 수 있음)","짜장처럼 검고 끈적한 변(흑색변), 피를 토하는 증상(토혈)","피로감·어지럼·숨참 — 서서히 생긴 출혈로 인한 빈혈 때문일 수 있음"]},{"type":"p","text":"영국 1차 진료 기록 약 4만 명을 분석한 환자-대조군 연구에서는 진단 전 1년 동안 삼킴 곤란, 역류, 명치 통증, 소화불량, 구역·구토, 체중감소, 낮은 혈색소(빈혈) 등이 식도·위암과 관련된 특징으로 확인되었습니다 [2]. 이 연구는 위암과 식도암을 함께 본 것이라, 위암만의 증상 목록으로 그대로 옮길 수는 없다는 점도 함께 기억해 두세요."},{"type":"h2","id":"other-causes","text":"같은 증상, 더 흔한 다른 원인들"},{"type":"p","text":"속쓰림이나 더부룩함은 아주 흔한 증상입니다. 같은 증상을 만드는 원인 가운데 위암은 일부에 불과하고, 대부분은 다음과 같은 다른 이유에서 비롯됩니다."},{"type":"ul","items":["기능성 소화불량 — 검사에서 뚜렷한 이상이 없는데 더부룩함·속쓰림이 반복되는 경우","위염·위궤양·십이지장궤양 — 헬리코박터 파일로리 감염이나 진통소염제 복용과 관련되는 경우가 많음","위식도역류질환 — 신물이 올라오고 가슴이 타는 듯한 느낌","과식·야식·음주·카페인, 스트레스와 수면 부족","담석 등 위 바깥 장기의 문제","철분 부족 빈혈의 다른 원인 — 월경, 식이 부족, 다른 부위의 출혈 등"]},{"type":"p","text":"그렇다면 경고 증상이 있으면 곧 암일까요? 그것도 아닙니다. 소화불량 환자 5만 7천여 명을 다룬 연구 15편을 모은 메타분석에서 실제 암이 확인된 사람은 0.8%였고, 체중감소·삼킴 곤란·빈혈 같은 경고 증상만으로 암을 가려내는 힘은 연구마다 차이가 크고 제한적이었습니다 [3]. 정리하면, 증상만으로 「암이다」 또는 「암이 아니다」를 판단할 수 없고 결국 내시경 같은 검사로 확인해야 한다는 뜻입니다."},{"type":"callout","tone":"info","title":"읽을 때 기억할 점","text":"이 글의 증상 목록은 「검사를 고려할 신호」를 알려 드리기 위한 것이지, 스스로 위암을 진단하는 기준이 아닙니다. 걱정되는 증상이 있다면 혼자 결론을 내리기보다 진료를 받아 확인하는 것이 가장 정확합니다."},{"type":"h2","id":"national-screening","text":"국가 위암검진 — 만 40세 이상 2년마다"},{"type":"p","text":"우리나라 국가암검진에서 위암 검진은 만 40세 이상 남녀를 대상으로 2년마다 시행하며, 위내시경 검사가 기본입니다. 대상 여부와 본인 부담은 국민건강보험공단 안내나 검진표에서 확인할 수 있습니다."},{"type":"p","text":"국가암검진 자료를 이용한 국내 연구에서는 검진을 받은 적이 없는 사람과 비교해 위내시경 검진을 받은 사람이 위암으로 사망할 위험이 낮았고(오즈비 0.53), 내시경 검진을 받은 횟수가 많을수록 그 위험은 더 낮아지는 경향을 보였습니다 [4]. 관찰 연구이므로 검진만의 영향이라고 단정할 수는 없지만, 정기적으로 내시경 검진을 받는 습관이 중요하다는 점을 뒷받침합니다."},{"type":"p","text":"가족 중 위암 환자가 있거나, 헬리코박터 감염·위축성 위염·장상피화생 같은 소견을 들은 적이 있다면 검진 간격을 어떻게 할지 담당 의사와 따로 상의해 보세요. 이런 경우의 간격은 개인 상태에 따라 의료진이 판단합니다."},{"type":"h2","id":"when-to-test","text":"검진 주기를 기다리지 말고 진료를 받아야 할 때"},{"type":"p","text":"국가검진은 증상이 없는 사람을 위한 제도입니다. 증상이 있다면 다음 검진 날짜를 기다릴 이유가 없습니다. 다음과 같은 경우에는 소화기내과 등에서 진료를 받고 검사가 필요한지 상의하세요."},{"type":"ul","items":["속쓰림·더부룩함이 몇 주 이상 이어지거나, 약을 먹어도 계속 되풀이될 때","특별한 이유 없이 체중이 줄고 있을 때","음식이 걸리는 느낌이나 삼키기 어려움이 생겼을 때","건강검진 혈액검사에서 빈혈이나 철분 부족을 처음 지적받았을 때","중년 이후 처음 생긴 소화불량이 예전과 다른 양상일 때","가족력이 있는데 최근 2년 안에 내시경을 받지 않았을 때"]},{"type":"p","text":"진료 자리에서는 시판 위장약이나 진통소염제를 먹고 있는지도 꼭 알리세요. 어떤 약은 증상을 잠시 가라앉혀 원인을 확인하는 시점을 늦출 수 있고, 어떤 약은 위 점막을 자극하기도 합니다. 복용 중인 약을 바꾸거나 끊는 결정은 스스로 하지 말고 의료진과 정하세요."},{"type":"h2","id":"symptom-log","text":"진료 전에 증상을 기록하는 법"},{"type":"p","text":"「요즘 속이 안 좋아요」라는 말만으로는 의사가 증상의 무게를 가늠하기 어렵습니다. 짧은 진료 시간에 정확히 전하려면 2~4주 정도 같은 방식으로 적어 가는 것이 도움이 됩니다."},{"type":"h3","text":"적어 두면 좋은 항목"},{"type":"ul","items":["날짜와 시각, 증상의 종류(쓰림·통증·더부룩함·메스꺼움 등)","정도 — 0~10 사이 숫자로 적으면 변화를 비교하기 쉽습니다","식사와의 관계 — 공복에 심한지, 식후에 심한지, 무엇을 먹은 뒤였는지","한 끼에 먹은 양의 변화 — 평소의 절반, 3분의 1 등","일주일에 한 번 같은 시간대의 체중","변 색깔 변화, 구토 여부와 내용물","복용한 약 이름과 시각, 먹은 뒤 증상 변화"]},{"type":"p","text":"변이 검게 보일 때는 철분제·일부 위장약 복용이나 특정 음식 때문일 수도 있으니, 무엇을 먹었는지 함께 적어 두면 의료진이 판단하는 데 도움이 됩니다. 사진이 남아 있으면 더 정확합니다."},{"type":"h2","id":"call-now","text":"이럴 땐 바로 연락하거나 응급실로 가세요"},{"type":"ul","items":["피를 토하거나 커피 찌꺼기 같은 것을 토했을 때(토혈)","검고 끈적한 변이 나오거나 변에 피가 섞여 나올 때","어지러워 쓰러질 것 같거나, 식은땀과 함께 얼굴이 창백해질 때","갑자기 칼로 찌르는 듯한 심한 복통이 생기고 배가 단단해질 때","음식이나 물을 넘기지 못하고 구토가 계속될 때","가슴 통증이나 숨이 차는 증상이 함께 있을 때"]},{"type":"p","text":"이런 신호는 위출혈, 천공, 장 막힘처럼 원인과 상관없이 빠른 처치가 필요한 상황일 수 있습니다. 위암 여부를 따지기 전에 먼저 응급 진료를 받으세요. 망설여질 때는 119에 상담을 요청할 수 있습니다."},{"type":"h2","id":"app","text":"온코케어 AI로 증상 기록을 진료에 가져가는 법"},{"type":"p","text":"위 내용처럼 날짜와 정도를 꾸준히 적는 일은 생각보다 번거롭습니다. 온코케어 AI의 증상 체크인에 속쓰림이나 더부룩함의 정도를 날짜별로 남기고, 식사 사진 기록으로 그날 먹은 양을 함께 쌓아 두면, 진료 때 「언제부터, 얼마나, 무엇과 함께」를 화면 하나로 보여 줄 수 있습니다. 복약 기록에는 먹고 있는 위장약과 진통제를, 검사 결과 정리에는 혈액검사의 빈혈 수치나 내시경 결과지를 모아 둘 수 있습니다. 가족·보호자 연결 기능을 쓰면 부모님의 증상을 자녀가 함께 확인할 수도 있습니다. 앱은 증상이 위암인지 판단하지 않으며, 진료 전에 기록을 정리하는 도구입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단을 대신하지 않습니다. 증상의 원인, 검사 시기와 방법은 반드시 의료진의 진료를 통해 확인하세요. 토혈·흑색변·쓰러질 듯한 어지럼 같은 응급 신호가 있으면 곧바로 응급 진료를 받으세요."}],"faq":[{"q":"위암 초기 증세는 어떤 것이 있나요?","a":"초기 위암은 증상이 없거나, 있더라도 가벼운 속쓰림·더부룩함처럼 흔한 소화불량과 구별하기 어려운 경우가 많습니다. 그래서 증상보다는 만 40세 이상 2년마다 받는 국가 위암검진 같은 정기 내시경 검진이 조기 발견에 중요합니다."},{"q":"속쓰림이 오래가면 위암일 가능성이 높은가요?","a":"속쓰림은 위염, 역류질환, 기능성 소화불량처럼 다른 원인이 훨씬 흔합니다. 다만 몇 주 이상 이어지거나 체중감소·삼킴 곤란·빈혈·흑색변이 함께 있다면 원인을 확인하기 위해 진료를 받고 검사가 필요한지 상의하세요."},{"q":"국가 위암검진은 언제, 어떻게 받나요?","a":"만 40세 이상 남녀가 2년마다 받으며 위내시경 검사가 기본입니다. 대상 여부는 국민건강보험공단 안내나 우편으로 오는 검진표에서 확인할 수 있습니다. 가족력 등 위험 요인이 있다면 검진 간격을 의사와 상의하세요."},{"q":"변이 검게 나오면 무조건 위암인가요?","a":"아닙니다. 흑색변은 위·십이지장 궤양 출혈처럼 다른 원인으로도 생기고, 철분제나 일부 약·음식 때문에 변이 검게 보이기도 합니다. 그래도 위장관 출혈 신호일 수 있으므로 어지럼이나 구토가 함께 있으면 곧바로 진료를 받으세요."},{"q":"온코케어 AI로 위암인지 알 수 있나요?","a":"아니요. 온코케어 AI는 증상 체크인, 식사 사진, 복약, 검사 결과를 기록하고 정리하는 정보·기록 도구이며 진단을 하지 않습니다. 정리한 기록을 진료 때 보여 주고 검사 여부는 의료진과 정하세요."}],"references":[{"label":"Maconi G, et al. Role of symptoms in diagnosis and outcome of gastric cancer. World J Gastroenterol 2008;14(8):1149-55 (PMID 18300338)","url":"https://pubmed.ncbi.nlm.nih.gov/18300338/"},{"label":"Stapley S, et al. The risk of oesophago-gastric cancer in symptomatic patients in primary care: a large case-control study using electronic records. Br J Cancer 2013;108(1):25-31 (PMID 23257895)","url":"https://pubmed.ncbi.nlm.nih.gov/23257895/"},{"label":"Vakil N, et al. Limited value of alarm features in the diagnosis of upper gastrointestinal malignancy: systematic review and meta-analysis. Gastroenterology 2006;131(2):390-401 (PMID 16890592)","url":"https://pubmed.ncbi.nlm.nih.gov/16890592/"},{"label":"Jun JK, et al. Effectiveness of the Korean National Cancer Screening Program in Reducing Gastric Cancer Mortality. Gastroenterology 2017;152(6):1319-1328.e7 (PMID 28147224)","url":"https://pubmed.ncbi.nlm.nih.gov/28147224/"}],"related":["reading-lab-results","when-to-call-your-oncology-team","cancer-care-app-what-to-record"]},
  // 2026-10-13 — 사용자 지시 「핵심키워드 상위노출」(온코케어 핵심 kw: 대장암 증세)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-13","updatedAt":"2026-10-13","appLinks":true,"slug":"colorectal-cancer-symptoms-bowel-change-bleeding","title":"대장암 증세 — 혈변·배변 변화·빈혈, 치질과 헷갈릴 때 확인할 것","description":"대장암 증세로 알려진 혈변, 배변 습관 변화, 가늘어진 변, 복통, 빈혈, 체중 감소는 치질이나 과민성 장 증후군 같은 흔한 원인에서도 나타납니다. 증상 하나가 암을 뜻하지는 않지만 검사로 확인해야 할 때가 있습니다. 1차 진료 연구와 젊은 연령 대장암 연구, 국가암검진 기준, 증상 기록법과 바로 진료를 받아야 할 신호를 정리했습니다.","category":"암종별 정보","categoryColor":"#B9560C","readMin":9,"hero":"colorectal-cancer-symptoms-notebook","heroAlt":"대장암 증세 기록 — 식탁 위에 펼쳐 둔 빈 노트와 펜, 물 한 잔","tldr":["대장암 증세로 자주 꼽히는 혈변·배변 습관 변화·복통·빈혈·체중 감소는 치질이나 장염 같은 흔한 질환에서도 나타나며, 증상만으로 원인을 가를 수는 없습니다.","그래도 혈변, 원인을 모르는 빈혈, 몇 주 이상 이어지는 배변 변화, 여러 증상이 겹치는 경우는 나이와 상관없이 진료를 받아 검사 여부를 상의하는 편이 안전합니다. 50세 미만에서도 이런 신호를 놓쳐 진단이 늦어지는 일이 연구에서 보고됩니다.","국가암검진에서는 만 50세 이상에게 1년마다 분변잠혈검사를 하고, 이상이 있으면 대장내시경을 안내합니다. 증상이 있다면 검진 주기를 기다리기보다 진료로 확인하세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 치료 중인 분들보다 한 걸음 앞, 「요즘 변이 좀 이상한데 혹시 대장암 증세일까」 하고 걱정하는 분과 가족을 위한 정리입니다. 어떤 증상이 왜 주목받는지, 흔한 다른 원인과는 어떻게 다른지, 언제 검사를 상의해야 하는지를 연구 근거와 함께 살펴봅니다."},{"type":"h2","id":"common-signs","text":"대장암 증세로 자주 꼽히는 여섯 가지"},{"type":"p","text":"대장은 길고 부위마다 하는 일이 조금씩 달라서, 혹이 어디에 생겼는지에 따라 드러나는 신호도 달라집니다. 일반적으로 많이 언급되는 변화는 다음과 같습니다."},{"type":"ul","items":["배변 습관 변화 — 평소와 달리 설사나 변비가 몇 주 이상 이어지거나, 둘이 번갈아 나타납니다.","혈변 — 변에 피가 묻거나 섞여 나오고, 때로는 변 색이 검붉게 보입니다.","가늘어진 변·잔변감 — 변이 예전보다 가늘어지거나, 보고 나서도 다 나오지 않은 느낌이 남습니다.","복통·더부룩함 — 배가 자주 아프거나 가스가 차고 불편한 느낌이 계속됩니다.","빈혈 — 눈에 보이지 않는 출혈이 오래 이어지면 철결핍 빈혈로 처음 발견되기도 하며, 어지럼이나 숨참, 쉽게 지치는 느낌으로 나타날 수 있습니다.","의도하지 않은 체중 감소 — 식사량을 줄이지 않았는데 몸무게가 빠집니다."]},{"type":"p","text":"중요한 점은 초기에는 아무 증상이 없는 경우도 많다는 것입니다. 그래서 증상이 없을 때의 검진과, 증상이 생겼을 때의 진료가 각각 따로 필요합니다."},{"type":"h2","id":"other-causes","text":"치질·장염·과민성 장 — 더 흔한 원인과 어떻게 다를까"},{"type":"p","text":"위의 증상들은 대장암보다 훨씬 흔한 질환에서도 나타납니다. 항문 쪽 출혈은 치핵(치질)이나 항문열상이 흔한 원인이고, 설사·복통은 감염성 장염이나 음식, 약 때문에도 생깁니다. 배변 습관이 들쭉날쭉한 것은 과민성 장 증후군에서도 흔합니다."},{"type":"p","text":"영국 1차 진료 기록을 분석한 환자-대조군 연구에서, 40세 이상이 항문 출혈로 동네 의원을 찾았을 때 실제 대장암으로 확인된 비율(양성 예측도)은 약 2.4%였습니다. 복통은 약 1.1%, 설사는 약 0.94%, 체중 감소는 약 1.2%였습니다 [1]. 다시 말해 같은 증상을 겪는 사람 대부분은 다른 원인이었다는 뜻입니다. 다만 같은 연구에서 분변잠혈검사 양성(약 7.1%)이나 혈색소가 크게 낮은 빈혈(약 2.3%)은 상대적으로 높은 값을 보였습니다."},{"type":"p","text":"1차 진료 연구 23편을 모은 체계적 문헌고찰에서는 50세 이상 항문 출혈의 양성 예측도를 합산한 값이 약 8.1%, 빈혈은 약 9.7%였고, 항문 출혈에 체중 감소나 배변 습관 변화가 함께 있으면 위험이 더 높아지는 경향이 보였습니다. 연구진은 항문 출혈이나 빈혈은 다른 증상이 없어도 검사를 진행할 근거가 된다고 결론지었습니다 [2]."},{"type":"callout","tone":"info","title":"눈으로 구분하기 어려운 이유","text":"흔히 「선홍색 피가 휴지에 묻으면 치질, 검붉은 피가 변에 섞이면 대장 쪽」이라고들 하지만, 이런 구분은 참고일 뿐입니다. 치질이 있는 사람에게 다른 원인이 함께 있을 수도 있습니다. 출혈의 원인은 진찰과 검사로 확인하는 것이 원칙입니다."},{"type":"h2","id":"young-onset","text":"50세 미만도 신호를 흘려보내지 마세요"},{"type":"p","text":"대장암은 나이가 들수록 많아지지만, 50세 미만에서 진단되는 이른바 젊은 연령 대장암도 늘고 있다는 보고가 이어지고 있습니다. 이 연령대는 검진 대상이 아닌 경우가 많고 「젊으니까 치질이겠지」 하고 넘기기 쉬워 진단이 늦어질 수 있다는 점이 문제로 지적됩니다."},{"type":"p","text":"미국 민간보험 가입자 자료로 50세 미만 대장암 5,075명을 분석한 환자-대조군 연구에서는 진단 3개월~2년 전에 나타난 복통, 항문 출혈, 설사, 철결핍 빈혈 네 가지가 위험 증가와 관련이 있었습니다. 이 가운데 한 가지가 있으면 약 1.9배, 두 가지면 약 3.6배, 세 가지 이상이면 약 6.5배로 관련성이 커졌습니다. 첫 증상이 이 시기에 나타난 사람들은 진단까지 중앙값 약 8.7개월이 걸렸습니다 [3]."},{"type":"p","text":"50세 미만 대장암 환자를 다룬 연구 81편을 묶은 메타분석에서도 진단 당시 혈변이 약 45%, 복통이 약 40%, 배변 습관 변화가 약 27%에서 보고되었고, 증상이 처음 나타난 뒤 진단까지 평균 4~6개월가량의 지연이 흔했습니다. 연구진은 다른 원인이 확인되지 않거나 증상이 가라앉지 않을 때 제때 검사를 진행할 필요가 있다고 강조했습니다 [4]."},{"type":"p","text":"이 연구들은 젊은 사람의 혈변이 대부분 암이라는 뜻이 아닙니다. 다만 「나이가 어려서」는 검사를 미룰 이유가 되지 않는다는 점, 증상이 겹치거나 오래 갈수록 확인이 필요하다는 점을 보여 줍니다."},{"type":"h2","id":"screening","text":"국가암검진의 대장암 검사 — 증상이 없을 때의 기준"},{"type":"p","text":"국가암검진에서는 만 50세 이상을 대상으로 1년마다 분변잠혈검사(대변으로 눈에 보이지 않는 혈액을 찾는 검사)를 시행하고, 결과에 이상이 있으면 대장내시경 검사를 안내합니다. 대상 여부와 본인부담은 국민건강보험공단 안내와 검진표에서 확인할 수 있습니다."},{"type":"p","text":"기억할 점은 검진이 「증상이 없는 사람」을 위한 제도라는 것입니다. 이미 혈변이나 빈혈, 오래가는 배변 변화가 있다면 다음 검진 차례를 기다리거나 분변잠혈검사 음성 결과에 기대기보다, 진료를 받아 증상에 맞는 검사를 상의하는 편이 맞습니다. 가족 중 대장암 환자가 있거나 염증성 장질환을 앓는 등 위험 요인이 있다면 검사 시작 시기와 간격을 의료진과 따로 정하기도 합니다."},{"type":"h2","id":"colonoscopy","text":"대장내시경은 언제 필요할까"},{"type":"p","text":"대장내시경은 대장 안을 직접 보고, 필요하면 조직을 떼어 확인하거나 용종을 제거할 수 있는 검사입니다. 어떤 경우에 바로 내시경을 할지, 혈액검사나 다른 검사를 먼저 할지는 나이, 증상의 종류와 기간, 가족력, 진찰 소견을 종합해 의료진이 정합니다. 일반적으로 상의가 필요한 상황은 다음과 같습니다."},{"type":"ul","items":["분변잠혈검사에서 이상 소견이 나왔을 때","원인을 모르는 철결핍 빈혈이 확인되었을 때","혈변이 반복되거나, 치질 치료 뒤에도 출혈이 계속될 때","배변 습관 변화나 가늘어진 변이 몇 주 이상 이어질 때","체중 감소나 복통 등 여러 증상이 함께 있을 때","가까운 가족 중 대장암 환자가 있어 검사 계획이 필요할 때"]},{"type":"p","text":"내시경 전에는 장을 비우는 준비가 필요하고, 복용 중인 약(특히 피를 묽게 하는 약, 당뇨약)은 검사 기관의 안내에 따라 조정 여부를 확인해야 합니다. 약을 스스로 끊거나 바꾸지 말고 처방한 의료진에게 먼저 물어보세요."},{"type":"h2","id":"symptom-log","text":"진료 전에 증상을 기록하는 법"},{"type":"p","text":"진료실에서 「언제부터, 얼마나 자주」를 물으면 막상 기억이 흐릿한 경우가 많습니다. 증상을 짧게라도 기록해 가면 의료진이 검사 필요성을 판단하는 데 도움이 됩니다. 아래 항목을 날짜별로 한 줄씩 적어 두세요."},{"type":"h3","text":"적어 두면 좋은 항목"},{"type":"ul","items":["날짜와 배변 횟수, 변의 굳기(묽음·보통·딱딱함)와 굵기 변화","피가 보였는지, 보였다면 휴지에 묻었는지·변에 섞였는지·변기 물이 붉었는지","복통이 있었다면 위치, 강도(0~10), 배변 뒤 나아졌는지","어지럼, 숨참, 쉽게 지침 같은 빈혈을 의심할 만한 느낌","한 달 간격의 체중","최근 바뀐 식사, 새로 먹기 시작한 약이나 보충제","가족 중 대장암·용종 진단을 받은 사람과 그 나이"]},{"type":"p","text":"변 상태가 걱정될 때 사진을 찍어 두는 분도 있지만, 사진보다 「언제·몇 번·어떤 모양」을 꾸준히 같은 방식으로 적는 쪽이 진료에 더 쓸모 있는 경우가 많습니다."},{"type":"h2","id":"call","text":"이럴 땐 미루지 말고 진료를 받으세요"},{"type":"ul","items":["혈변이 반복되거나 양이 많을 때, 검거나 짜장 같은 색의 변이 나올 때","어지러워 쓰러질 것 같거나 숨이 차고 가슴이 두근거릴 때(빈혈·출혈 의심)","배가 심하게 아프고 부풀어 오르며, 가스나 변이 전혀 나오지 않고 토할 때(장폐색 의심 — 응급실)","열이 나면서 복통이 심해질 때","몇 주 이상 배변 습관 변화나 가늘어진 변이 이어질 때","식사량이 그대로인데 체중이 계속 빠질 때"]},{"type":"p","text":"출혈이 많거나 의식이 흐려지는 느낌, 심한 복통과 구토가 함께 있다면 외래 예약을 기다리지 말고 응급실을 이용하세요. 그 밖의 증상은 가까운 내과나 소화기내과, 대장항문외과 진료에서 시작할 수 있습니다."},{"type":"h2","id":"app","text":"진단 뒤 치료가 시작된다면 — 온코케어 AI로 이어 가는 기록"},{"type":"p","text":"검사 결과 대장암 진단을 받고 수술이나 항암 치료가 시작되면, 배변 변화와 증상을 기록하는 일은 치료 기간 내내 이어집니다. 온코케어 AI의 증상 체크인에 설사 횟수나 복통 정도를 날짜별로 남기고, 혈액검사 결과를 검사 결과 정리 기능에 모아 두면 수치의 흐름을 진료 때 함께 볼 수 있습니다. 항암 일정과 복약 기록, 식사 사진 기록도 한곳에 정리되며, 가족·보호자 연결 기능으로 곁에서 돕는 가족과 같은 기록을 확인할 수 있습니다. 앱은 증상이 암인지 판단하거나 검사를 정해 주는 도구가 아니라, 진료실에서 보여 줄 기록을 정리하는 도구입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단을 대신하지 않습니다. 증상의 원인과 필요한 검사, 검진 시기는 반드시 의료진과 상의해 정하세요."}],"faq":[{"q":"혈변이 보이면 대장암일 가능성이 높은가요?","a":"그렇지 않은 경우가 훨씬 많습니다. 항문 출혈은 치질이나 항문열상 같은 흔한 원인에서 자주 생기며, 1차 진료 연구에서도 항문 출혈로 진료받은 사람 대부분은 다른 원인이었습니다. 다만 눈으로는 원인을 구분하기 어렵고, 출혈은 검사 여부를 상의할 근거가 되므로 진료를 받아 확인하세요."},{"q":"치질이 있는데 피가 나면 그냥 치질 때문이라고 생각해도 되나요?","a":"치질이 있다는 사실만으로 다른 원인을 배제할 수는 없습니다. 출혈이 반복되거나, 변 색이 검붉거나, 배변 습관 변화·빈혈·체중 감소가 함께 있다면 진료를 받아 추가 검사가 필요한지 확인하는 편이 안전합니다."},{"q":"30~40대도 대장암 증세를 신경 써야 하나요?","a":"50세 미만에서 진단되는 대장암이 늘고 있다는 보고가 있고, 이 연령대에서는 증상이 있어도 진단까지 시간이 걸리는 경우가 많다는 연구가 있습니다. 혈변, 복통, 설사, 빈혈 같은 증상이 이어지거나 겹치면 나이와 관계없이 진료를 받아 상의하세요."},{"q":"국가암검진 대장암 검사는 몇 살부터, 얼마나 자주 받나요?","a":"국가암검진에서는 만 50세 이상에게 1년마다 분변잠혈검사를 시행하고, 이상 소견이 있으면 대장내시경 검사를 안내합니다. 가족력 등 위험 요인이 있거나 이미 증상이 있다면 검진 주기와 별개로 의료진과 검사 계획을 상의하세요."},{"q":"분변잠혈검사가 음성이면 안심해도 되나요?","a":"분변잠혈검사는 증상이 없는 사람을 위한 선별검사입니다. 음성이어도 혈변, 빈혈, 오래가는 배변 변화 같은 증상이 있다면 결과만 믿고 넘기지 말고 진료를 받아 다른 검사가 필요한지 확인하세요."}],"references":[{"label":"Hamilton W, et al. Clinical features of colorectal cancer before diagnosis: a population-based case-control study. Br J Cancer 2005;93(4):399-405 (PMID 16106247)","url":"https://pubmed.ncbi.nlm.nih.gov/16106247/"},{"label":"Astin M, et al. The diagnostic value of symptoms for colorectal cancer in primary care: a systematic review. Br J Gen Pract 2011;61(586):e231-43 (PMID 21619747)","url":"https://pubmed.ncbi.nlm.nih.gov/21619747/"},{"label":"Fritz CDL, et al. Red-flag signs and symptoms for earlier diagnosis of early-onset colorectal cancer. J Natl Cancer Inst 2023;115(8):909-916 (PMID 37138415)","url":"https://pubmed.ncbi.nlm.nih.gov/37138415/"},{"label":"Demb J, et al. Red Flag Signs and Symptoms for Patients With Early-Onset Colorectal Cancer: A Systematic Review and Meta-Analysis. JAMA Netw Open 2024;7(5):e2413157 (PMID 38787555)","url":"https://pubmed.ncbi.nlm.nih.gov/38787555/"}],"related":["chemo-diarrhea-constipation-care","reading-lab-results","chemo-diary-app-how-to-keep"]},
  // 2026-10-13 — 사용자 지시 「핵심키워드 상위노출」(온코케어 핵심 kw: 유방암 항암, 수술 전과 후는 무엇이 다를까)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-13","updatedAt":"2026-10-13","appLinks":true,"slug":"breast-cancer-chemo-before-after-surgery-side-effects","title":"유방암 항암, 수술 전과 후는 무엇이 다를까 — 아형·부작용·일정 정리","description":"유방암 항암은 수술 전(선행)에 하기도, 수술 후(보조)에 하기도 합니다. 순서가 달라지는 이유, 호르몬 수용체·HER2 아형에 따라 치료가 갈리는 개요, 탈모·구역·호중구 감소·손발 저림·피로 같은 흔한 부작용의 생활 관리, 일정 관리와 바로 연락할 신호를 연구 근거와 함께 정리했습니다.","category":"암종별 정보","categoryColor":"#B9560C","readMin":10,"hero":"breast-cancer-chemo-treatment-day-still-life","heroAlt":"유방암 항암 — 창가 탁자 위에 접어 둔 니트 모자와 물컵, 펼쳐 둔 일정 노트","tldr":["유방암 항암은 수술 전(선행)에 종양 크기를 줄이려 하기도, 수술 후(보조)에 재발 위험을 낮추려 하기도 합니다. 같은 약을 순서만 바꾼 연구들을 모은 분석에서 원격 재발과 유방암 사망은 두 순서 사이에 뚜렷한 차이가 없었습니다.","호르몬 수용체와 HER2 여부(아형)에 따라 항암 외에 호르몬 치료·HER2 표적 치료가 함께 쓰이는지가 달라집니다. 내 치료 계획이 왜 그렇게 짜였는지는 담당 의료진에게 아형부터 물어보면 이해가 쉬워집니다.","탈모·구역·호중구 감소·손발 저림·피로는 흔한 부작용입니다. 날짜와 정도를 기록해 두었다가 진료 때 보여 주고, 38도 안팎의 발열처럼 바로 연락할 신호는 미리 알아 두세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 유방암 항암을 앞둔 분과 가족을 위해, 수술 전·후 항암이 각각 어떤 의미인지, 아형에 따라 치료가 어떻게 달라지는지, 치료 기간에 흔히 겪는 부작용을 생활 속에서 어떻게 살피고 기록할지 차례로 정리합니다. 구체적인 약제와 일정은 사람마다 다르므로 일반 정보로 읽어 주세요."},{"type":"h2","id":"before-or-after","text":"유방암 항암, 수술 전에 할까 후에 할까"},{"type":"p","text":"유방암 항암은 시점에 따라 두 가지로 부릅니다. 수술 전에 하는 항암을 선행 항암(neoadjuvant), 수술 뒤에 하는 항암을 보조 항암(adjuvant)이라고 합니다. 두 방식 모두 눈에 보이지 않는 미세한 암세포까지 겨냥해 재발 위험을 낮추려는 목적은 같고, 다른 점은 순서와 그 순서가 주는 정보입니다."},{"type":"p","text":"선행 항암은 수술 전에 종양 크기를 줄여 유방을 보존하는 수술의 가능성을 넓히고, 약에 종양이 어떻게 반응하는지를 수술 표본으로 확인할 수 있다는 점에서 선택됩니다. 보조 항암은 수술로 얻은 조직 검사 결과(크기·림프절 전이·아형 등)를 바탕으로 필요성과 강도를 정합니다. 어느 쪽을 택할지는 종양의 크기, 림프절 상태, 아형, 전신 상태를 함께 보고 의료진이 판단합니다."},{"type":"p","text":"같은 항암을 수술 전에 한 군과 수술 후에 한 군을 비교한 무작위 시험 10건(4,756명)의 개별 환자 자료를 모은 분석에서, 선행 항암군은 유방 보존 치료를 받은 비율이 더 높았습니다(65% 대 49%). 15년 동안의 원격 재발(38.2% 대 38.0%)과 유방암 사망(34.4% 대 33.7%)은 두 군 사이에 통계적으로 뚜렷한 차이가 없었습니다. 연구진은 선행 항암으로 크기가 줄어든 종양은 수술 범위 결정과 방사선치료를 더 세심하게 계획할 필요가 있다고 덧붙였습니다 [1]."},{"type":"callout","tone":"info","title":"선행 항암 뒤 수술 결과지를 읽을 때","text":"선행 항암 뒤 수술에서 유방과 림프절에 남은 암세포가 확인되지 않는 상태를 병리학적 완전 관해(pCR)라고 부릅니다. 12개 국제 임상시험 1만 1,955명을 모은 분석에서 이 상태에 이른 환자는 그렇지 않은 환자보다 이후 경과가 좋은 경향을 보였고, 그 연관성은 삼중음성 유방암과 HER2 양성·호르몬 수용체 음성 유방암에서 더 뚜렷했습니다 [2]. 다만 이는 집단의 경향이며, 내 결과지가 무엇을 뜻하는지는 담당 의료진의 설명으로 확인하세요."},{"type":"h2","id":"subtypes","text":"아형에 따라 치료 계획이 달라집니다 — 호르몬 수용체와 HER2"},{"type":"p","text":"유방암은 조직 검사에서 확인하는 몇 가지 표지에 따라 아형을 나눕니다. 대표적인 것이 에스트로겐·프로게스테론 수용체(호르몬 수용체)와 HER2 단백질입니다. 같은 병기라도 아형에 따라 항암이 필요한지, 항암에 무엇이 더해지는지가 달라지기 때문에, 치료 계획을 이해하려면 먼저 내 아형을 아는 것이 출발점입니다."},{"type":"ul","items":["호르몬 수용체 양성·HER2 음성 — 호르몬 치료가 치료의 큰 축이 됩니다. 항암은 재발 위험도, 병기, 필요한 경우 유전자 발현 검사 결과 등을 함께 보고 필요성을 판단합니다.","HER2 양성 — 항암과 함께 트라스투주맙 같은 HER2 표적 치료가 쓰이는 경우가 많습니다. 표적 치료는 항암이 끝난 뒤에도 일정 기간 이어질 수 있습니다.","삼중음성(호르몬 수용체·HER2 모두 음성) — 호르몬 치료나 HER2 표적 치료의 대상이 아니어서 항암이 중심이 됩니다. 최근에는 면역항암제가 함께 검토되기도 합니다."]},{"type":"p","text":"유방암 항암에 쓰이는 약으로는 독소루비신 같은 안트라사이클린 계열, 파클리탁셀·도세탁셀 같은 탁산 계열, 사이클로포스파마이드 등이 자주 언급됩니다. 여러 약을 묶은 다양한 조합을 비교한 무작위 시험 123건(약 10만 명)의 메타분석은 조합 사이의 장기 재발과 사망을 비교해, 오늘날 쓰이는 조합을 고르는 근거 가운데 하나가 되었습니다 [3]. 어떤 조합을 몇 차까지 맞을지, 용량을 어떻게 정할지는 개인의 상태와 아형에 따라 의료진이 정하므로, 이 글에 나온 약 이름은 「이런 이름을 듣게 될 수 있다」는 정도로만 참고하세요."},{"type":"h2","id":"schedule","text":"항암 일정 관리 — 주기, 채혈, 미뤄지는 날"},{"type":"p","text":"유방암 항암은 보통 「주사 맞는 날 + 회복 기간」을 한 주기로 묶어 일정한 간격으로 반복합니다. 약 조합에 따라 2주, 3주 간격이거나 매주 맞는 방식도 있습니다. 주사 전에는 대개 혈액검사로 백혈구·호중구·간 기능 등을 확인하고, 수치가 회복되지 않았으면 일정이 미뤄지거나 용량이 조정되기도 합니다. 일정이 밀리는 것은 드문 일이 아니며, 몸을 회복시키기 위한 판단이라고 이해하면 마음이 덜 조급합니다."},{"type":"ul","items":["달력에 주사일, 채혈일, 외래 진료일을 다른 색으로 표시해 둡니다.","주사 후 며칠째에 구역이 심했는지, 언제쯤 기운이 돌아왔는지 적어 두면 다음 주기 계획(약속·출근·장보기)을 세우기 쉽습니다.","HER2 표적 치료처럼 항암 뒤에도 이어지는 주사가 있다면, 전체 기간과 남은 횟수를 따로 적어 둡니다.","일정이 미뤄진 이유(수치, 감염, 기타)를 그때그때 메모해 두면 다음 진료에서 질문하기 좋습니다."]},{"type":"h2","id":"hair-loss","text":"탈모 — 언제 시작되고, 무엇을 준비할까"},{"type":"p","text":"안트라사이클린이나 탁산 계열 약을 쓰면 머리카락이 빠지는 경우가 흔합니다. 보통 첫 주사 후 몇 주 안에 시작되는 경우가 많고, 치료가 끝나면 다시 자라는 것이 일반적이지만 속도와 모양은 사람마다 다릅니다. 미리 짧게 자르거나 모자·두건을 준비해 두면 갑작스러운 변화에 덜 놀라게 됩니다. 두피는 순한 세정제로 씻고, 햇볕과 찬 바람을 가려 주세요."},{"type":"p","text":"두피를 차갑게 식혀 모낭에 닿는 약물을 줄이려는 두피 냉각 장치도 연구되었습니다. 탁산이나 안트라사이클린 항암을 받는 1~2기 유방암 여성의 무작위 시험 중간 분석에서, 4주기 후 머리카락 손실이 절반 미만으로 유지된 비율은 냉각군 50.5%(95명 중 48명), 대조군 0%(47명 중 0명)였습니다. 장치와 관련된 이상 반응은 경미한 수준(1~2등급)이었고, 연구진은 장기적인 결과와 안전성은 더 연구가 필요하다고 밝혔습니다 [4]. 사용 가능 여부와 비용, 내 약 조합에 맞는지는 치료 병원에 문의하세요."},{"type":"h2","id":"side-effects","text":"구역·호중구 감소·손발 저림·피로 — 생활에서 살필 것"},{"type":"h3","text":"구역·구토"},{"type":"p","text":"주사 당일이나 그 뒤 며칠 사이에 구역이 오기 쉽습니다. 처방받은 구토 예방약은 안내받은 시각에 맞춰 복용하고, 식사는 적은 양을 자주, 냄새가 강하지 않은 음식으로 시작하는 편이 수월합니다. 물을 조금씩 자주 마시는 것도 도움이 됩니다. 처방약을 먹었는데도 구토가 반복되면 참지 말고 치료팀에 알리세요."},{"type":"h3","text":"호중구 감소와 감염 예방"},{"type":"p","text":"항암 후 일정 기간 감염을 막는 백혈구, 특히 호중구가 줄어듭니다. 이 시기에는 손 씻기, 사람이 붐비는 곳 피하기, 익힌 음식 위주로 먹기, 상처 관리처럼 기본적인 감염 예방이 중요합니다. 의료진이 필요하다고 판단하면 백혈구 촉진 주사를 쓰기도 합니다. 집에 체온계를 두고 몸이 으슬으슬할 때마다 재어 기록하는 습관이 큰 도움이 됩니다."},{"type":"h3","text":"손발 저림(말초신경병증)"},{"type":"p","text":"파클리탁셀·도세탁셀 같은 탁산 계열 약은 손끝·발끝이 저리거나 감각이 둔해지는 말초신경병증과 관련이 있습니다. 미국임상종양학회(ASCO) 지침은 현재 예방 목적으로 권고되는 약은 없다고 정리하면서, 견디기 어려운 신경병증이나 기능 저하가 생기면 의료진이 항암 일정·용량 조정을 검토해야 한다고 밝혔습니다 [5]. 그래서 단추 잠그기, 젓가락질, 계단 오르기가 불편해지는 변화를 일찍 알리는 것이 중요합니다. 감각이 둔해진 발은 다쳐도 모르기 쉬우니 실내에서도 신발이나 양말을 신고, 뜨거운 물 온도는 팔꿈치로 확인하세요."},{"type":"h3","text":"피로"},{"type":"p","text":"항암 피로는 잠을 자도 쉽게 풀리지 않는다는 점에서 평소의 피곤함과 다릅니다. 하루 중 기운이 나는 시간에 중요한 일을 배치하고, 짧은 낮잠과 가벼운 걷기를 섞는 방식이 흔히 권유됩니다. 갑자기 숨이 차거나 어지러울 정도로 피로가 심해지면 빈혈 등 다른 원인이 있을 수 있으니 알리세요."},{"type":"h2","id":"questions","text":"첫 상담 때 물어 두면 좋은 질문"},{"type":"ul","items":["제 유방암의 아형(호르몬 수용체, HER2)은 무엇이고, 그래서 치료 순서가 어떻게 정해졌나요?","항암을 수술 전에 하나요, 수술 후에 하나요? 그렇게 정한 이유는 무엇인가요?","몇 주 간격으로 몇 차까지 맞게 되나요? 표적 치료나 호르몬 치료는 언제 이어지나요?","열이 나면 몇 도에서, 어디로(외래·응급실·전화) 연락해야 하나요?","탈모 대비(두피 냉각 포함)나 가임력 보존 상담이 필요한지 알고 싶습니다."]},{"type":"h2","id":"call","text":"이럴 땐 다음 진료까지 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["체온이 38도 안팎으로 오르거나 오한이 들 때 — 호중구가 낮은 시기의 발열은 응급일 수 있습니다","숨이 차거나 가슴이 답답하고 아플 때","처방약을 먹어도 구토가 계속되어 물도 넘기기 어려울 때","하루 여러 번 설사가 이어지거나 어지럽고 소변이 눈에 띄게 줄었을 때","케모포트나 주사 부위가 붓고 빨개지며 아플 때","손발 저림이 빠르게 심해져 걷기·물건 잡기가 어려울 때","한쪽 팔이나 다리가 갑자기 붓고 아플 때, 피가 멎지 않거나 멍이 이유 없이 많이 생길 때"]},{"type":"p","text":"어디로 연락해야 하는지(병동 전화, 외래, 응급실)는 병원마다 안내가 다르므로 첫 항암 전에 받은 안내문을 냉장고나 휴대전화 메모에 붙여 두세요."},{"type":"h2","id":"app","text":"온코케어 AI로 유방암 항암 기간을 기록하는 법"},{"type":"p","text":"주기가 반복되면 「지난번엔 며칠째가 힘들었더라」를 기억하기 어렵습니다. 온코케어 AI의 항암 일정 기능에 주사일과 채혈일을 넣고, 증상 체크인에 구역·피로·손발 저림·체온을 날짜별로 남기면 주기마다의 흐름이 한눈에 정리됩니다. 복약 기록으로 구토 예방약이나 처방약을 언제 먹었는지 남기고, 혈액검사 결과는 검사 결과 정리 기능에 모아 두면 수치 변화와 증상을 함께 볼 수 있습니다. 가족·보호자 연결 기능을 쓰면 함께 사는 가족이 체온이나 식사 기록을 같이 확인할 수 있습니다. 진료실에서는 이 기록을 그대로 보여 주면 짧은 시간에 필요한 이야기를 나누기 쉬워집니다. 앱은 증상을 판단하거나 치료를 정해 주지 않으며, 응급 신호가 있으면 기록보다 연락이 먼저입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내입니다. 항암 여부와 시점, 약 조합과 용량, 부작용 대응은 개인의 아형·병기·건강 상태에 따라 다르므로 반드시 담당 의료진과 상의해 정하세요."}],"faq":[{"q":"유방암 항암은 꼭 해야 하나요?","a":"모든 유방암 환자가 항암을 받는 것은 아닙니다. 아형(호르몬 수용체·HER2), 종양 크기, 림프절 전이, 필요한 경우 유전자 발현 검사 결과 등을 함께 보고 항암이 필요한지 의료진이 판단합니다. 내 경우 왜 항암이 권유되었는지 설명을 들어 두면 치료 과정을 이해하는 데 도움이 됩니다."},{"q":"수술 전 항암과 수술 후 항암 중 어느 쪽이 더 좋은가요?","a":"어느 한쪽이 모든 사람에게 낫다고 말하기는 어렵습니다. 같은 항암을 순서만 바꾼 연구들을 모은 분석에서 원격 재발과 유방암 사망은 두 순서 사이에 뚜렷한 차이가 없었고, 수술 전 항암은 유방 보존 치료 비율을 높였습니다. 종양 크기와 아형 등을 보고 의료진이 순서를 정합니다."},{"q":"유방암 항암을 하면 머리카락이 다 빠지나요?","a":"안트라사이클린이나 탁산 계열 약을 쓰면 탈모가 흔하지만 정도는 약 조합과 사람에 따라 다릅니다. 치료가 끝나면 다시 자라는 경우가 일반적입니다. 두피 냉각 장치는 연구에서 머리카락 손실을 줄인 결과가 있었으므로, 이용 가능 여부를 치료 병원에 물어보세요."},{"q":"항암 중 열이 나면 해열제부터 먹어도 되나요?","a":"항암 기간의 발열은 감염 신호일 수 있어, 해열제로 열을 먼저 내리면 상황 판단이 늦어질 수 있습니다. 병원에서 받은 발열 대처 안내를 따르고, 안내가 없다면 먼저 치료팀에 연락해 지시를 받으세요."},{"q":"온코케어 AI가 항암 일정을 정해 주나요?","a":"아니요. 일정은 담당 의료진이 정합니다. 온코케어 AI는 정해진 항암 일정과 증상·복약·검사 결과를 기록하고 정리해, 진료 때 보여 주기 쉽게 돕는 정보·기록 도구입니다."}],"references":[{"label":"Early Breast Cancer Trialists' Collaborative Group (EBCTCG). Long-term outcomes for neoadjuvant versus adjuvant chemotherapy in early breast cancer: meta-analysis of individual patient data from ten randomised trials. Lancet Oncol 2018;19(1):27-39 (PMID 29242041)","url":"https://pubmed.ncbi.nlm.nih.gov/29242041/"},{"label":"Cortazar P, et al. Pathological complete response and long-term clinical benefit in breast cancer: the CTNeoBC pooled analysis. Lancet 2014;384(9938):164-72 (PMID 24529560)","url":"https://pubmed.ncbi.nlm.nih.gov/24529560/"},{"label":"Early Breast Cancer Trialists' Collaborative Group (EBCTCG), Peto R, et al. Comparisons between different polychemotherapy regimens for early breast cancer: meta-analyses of long-term outcome among 100,000 women in 123 randomised trials. Lancet 2012;379(9814):432-44 (PMID 22152853)","url":"https://pubmed.ncbi.nlm.nih.gov/22152853/"},{"label":"Nangia J, et al. Effect of a Scalp Cooling Device on Alopecia in Women Undergoing Chemotherapy for Breast Cancer: The SCALP Randomized Clinical Trial. JAMA 2017;317(6):596-605 (PMID 28196254)","url":"https://pubmed.ncbi.nlm.nih.gov/28196254/"},{"label":"Loprinzi CL, et al. Prevention and Management of Chemotherapy-Induced Peripheral Neuropathy in Survivors of Adult Cancers: ASCO Guideline Update. J Clin Oncol 2020;38(28):3325-3348 (PMID 32663120)","url":"https://pubmed.ncbi.nlm.nih.gov/32663120/"}],"related":["chemo-hair-loss-timeline","neutropenic-fever-emergency","chemo-neuropathy-hands-feet"]},
  // 2026-10-13 — 사용자 지시 「핵심키워드 상위노출」(온코케어 핵심 kw: 젤로다 부작용)
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-13","updatedAt":"2026-10-13","appLinks":true,"slug":"xeloda-capecitabine-side-effects-guide","title":"젤로다 부작용 — 손발 피부·설사·입안 변화, 무엇을 보고 언제 알릴까","description":"젤로다(카페시타빈)는 집에서 먹는 항암제라 부작용을 처음 알아차리는 사람이 환자와 가족입니다. 수족증후군·설사·구내염·피로·구역을 단계별로 살피는 법, 생활 관리, DPD 결핍과 약물 상호작용에 관한 연구, 바로 연락할 신호와 기록 요령을 정리했습니다.","category":"항암제 정보","categoryColor":"#B9560C","readMin":9,"hero":"xeloda-home-oral-chemo-record","heroAlt":"젤로다 부작용 기록 — 창가 식탁 위에 놓인 물 한 컵과 노트, 펜","tldr":["젤로다(카페시타빈)는 먹는 항암제여서 손발 피부 변화(수족증후군), 설사, 입안 헐음, 피로, 메스꺼움 같은 변화를 집에서 먼저 보게 됩니다. 「얼마나 일상을 방해하는가」를 기준으로 정도를 적어 두면 의료진이 판단하기 쉽습니다.","평소보다 하루 4~6회 이상 늘어난 설사, 열, 먹거나 마시지 못하는 상태, 손발이 아파 걷거나 물건을 쥐기 힘든 상태는 다음 진료를 기다리지 말고 치료팀에 알릴 신호입니다.","복용을 멈출지, 용량을 바꿀지는 담당 의료진이 판단합니다. 와파린 같은 항응고제를 포함해 복용 중인 약은 모두 알리고, 증상은 날짜와 정도를 함께 기록하세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 젤로다(성분명 카페시타빈)를 먹으며 치료받는 분과 가족을 위해, 흔히 나타나는 부작용을 어떤 기준으로 살피고 언제 치료팀에 알려야 하는지 정리합니다. 약을 줄이거나 멈추라는 안내가 아니라, 의료진에게 정확히 전달하기 위한 관찰 요령입니다."},{"type":"h2","id":"what-is-xeloda","text":"젤로다는 어떤 약이고, 왜 집에서의 관찰이 중요할까"},{"type":"p","text":"젤로다는 몸 안에서 플루오로우라실(5-FU)로 바뀌어 작용하는 먹는 항암제로, 대장암·위암·유방암 등에서 단독 또는 다른 치료와 함께 쓰입니다. 정해진 기간 동안 하루 두 번 복용하고 쉬는 기간을 두는 일정이 흔하지만, 실제 일정과 용량은 사람마다 다르게 처방됩니다."},{"type":"p","text":"주사 항암과 달리 병원 밖에서 복용하는 시간이 길다 보니, 부작용의 시작을 가장 먼저 보는 사람은 환자 자신과 가족입니다. 같은 설사라도 「조금 무른 정도」인지 「하루에 몇 번이나 화장실에 가는지」에 따라 의료진의 판단이 달라지므로, 막연히 「불편하다」보다 숫자와 날짜로 남기는 습관이 도움이 됩니다."},{"type":"h2","id":"hand-foot-syndrome","text":"수족증후군 — 손바닥·발바닥 피부 변화를 단계로 보기"},{"type":"p","text":"젤로다와 관련해 자주 이야기되는 부작용이 수족증후군(손발증후군)입니다. 손바닥과 발바닥이 붉어지거나 화끈거리고, 저리거나 따끔거리며, 심해지면 붓고 갈라지거나 물집이 생기기도 합니다. 압력과 마찰을 많이 받는 부위에서 먼저 나타나는 경우가 많습니다."},{"type":"h3","text":"정도를 가늠하는 일반적인 기준"},{"type":"ul","items":["가벼운 단계 — 저림·따끔거림, 통증 없는 붉어짐이나 부기. 일상생활은 대체로 가능합니다.","중간 단계 — 붉어짐과 부기에 통증이 동반되어 단추 잠그기, 오래 걷기 같은 일상 동작이 불편해집니다.","심한 단계 — 피부가 벗겨지거나 진물·물집·궤양이 생기고, 통증 때문에 걷거나 물건을 쥐기 어렵습니다."]},{"type":"p","text":"이 구분은 부작용 등급을 이해하기 쉽게 풀어 쓴 일반 개념입니다. 실제 등급 판정과 그에 따른 치료 조정은 담당 의료진이 진찰해서 결정합니다. 가벼운 단계라도 처음 나타났다면 다음 진료 때 꼭 이야기하고, 중간 단계 이상으로 넘어가는 느낌이 들면 진료일 전이라도 치료팀에 연락하는 편이 안전합니다."},{"type":"h2","id":"skin-care","text":"손발 피부를 위한 생활 관리 — 보습과 압박 줄이기"},{"type":"p","text":"수족증후군 관리에서 가정에서 할 수 있는 일은 크게 두 가지, 피부를 촉촉하게 유지하는 것과 손발에 가해지는 열·압박·마찰을 줄이는 것입니다."},{"type":"p","text":"보습제와 관련해서는 카페시타빈 치료를 받는 위장관암·유방암 환자 152명을 무작위로 나눈 독일의 3상 시험이 있습니다. 치료 첫 6주 동안 10% 요소(우레아) 크림을 바른 군에서 수족증후군이 나타난 비율은 22.4%로, 다른 항산화 연고를 바른 군(39.5%)보다 낮았습니다 [3]. 다만 이 연구는 두 가지 바르는 제품을 서로 비교한 것이고, 어떤 보습제를 쓸지와 바르는 방법은 피부 상태에 따라 달라지므로 치료팀에 먼저 확인하세요."},{"type":"ul","items":["샤워나 설거지 뒤 물기를 가볍게 두드려 닦고, 안내받은 보습제를 손발에 자주 바릅니다.","뜨거운 물에 오래 손발을 담그거나 사우나처럼 열이 많은 환경은 피합니다.","발에 꽉 끼는 신발 대신 쿠션이 있는 편한 신발과 부드러운 양말을 신습니다.","망치질, 오래 걷기, 무거운 짐 들기처럼 손발에 반복 압박이 가는 일은 줄입니다.","설거지·청소 때는 면장갑 위에 고무장갑을 끼는 식으로 마찰과 세제 자극을 줄입니다.","물집을 터뜨리거나 갈라진 피부를 뜯지 말고, 상처가 생기면 치료팀에 알립니다."]},{"type":"h2","id":"diarrhea-mouth","text":"설사·구내염 — 횟수와 먹을 수 있는지를 기준으로"},{"type":"p","text":"젤로다 복용 중 설사는 흔한 부작용 가운데 하나이며, 가볍게 지나가기도 하지만 탈수로 이어질 수 있어 주의 깊게 봐야 합니다. 부작용 등급을 매길 때는 「평소 배변 횟수보다 하루에 몇 번 더 늘었는가」를 기준으로 삼습니다. 일반적으로 평소보다 하루 4~6회 늘어난 설사는 중간 단계, 그 이상은 심한 단계로 분류하며, 젤로다 제품 안내에서도 이런 정도의 설사가 생기면 의료진에게 바로 알리도록 안내합니다."},{"type":"p","text":"지사제를 먹어도 되는지, 어떤 약을 언제 먹을지는 미리 받아 둔 안내를 따르고, 안내가 없다면 임의로 고르기 전에 치료팀에 묻는 편이 안전합니다. 설사가 있는 동안에는 물과 전해질을 조금씩 자주 보충하고, 기름지거나 자극적인 음식은 잠시 줄이는 것이 일반적인 권고입니다."},{"type":"p","text":"입안이 붓거나 헐고 따가운 구내염도 나타날 수 있습니다. 부드러운 칫솔과 순한 가글로 입안을 깨끗이 유지하고, 맵고 뜨겁고 딱딱한 음식은 피하는 것이 기본입니다. 입안 통증 때문에 음식이나 물을 제대로 삼키지 못한다면 집에서 버틸 단계가 아니므로 연락하세요."},{"type":"h2","id":"fatigue-nausea","text":"피로와 메스꺼움 — 날짜별 흐름으로 기록하기"},{"type":"p","text":"피로와 메스꺼움, 입맛 저하도 흔히 보고됩니다. 피로는 복용 기간 후반이나 여러 주기가 쌓이면서 더 느껴지기도 하므로, 하루하루보다 「주기 안에서 언제 힘든가」를 보는 편이 유용합니다. 0~10점으로 그날의 피로를 적어 두면 패턴이 보입니다."},{"type":"p","text":"젤로다는 보통 식사 뒤 30분 안에 물과 함께 복용하도록 안내되는데, 메스꺼움 때문에 끼니를 거르게 되면 복용 시점도 흔들리기 쉽습니다. 이런 상황이 생기면 스스로 시간을 바꾸기보다 치료팀이나 약사에게 어떻게 할지 물어보세요. 구토로 약을 게워 냈을 때 다시 먹을지 역시 임의로 정하지 말고 받은 안내를 따릅니다."},{"type":"h2","id":"dpd-interactions","text":"DPD 결핍과 함께 먹는 약 — 치료 전후로 꼭 이야기할 것"},{"type":"p","text":"카페시타빈과 5-FU 계열 약은 몸에서 DPD(디하이드로피리미딘 탈수소효소)라는 효소가 분해합니다. 유전적으로 이 효소의 활성이 낮은 사람은 약이 몸에 더 오래, 더 많이 남아 심한 부작용을 겪을 위험이 높아질 수 있습니다."},{"type":"p","text":"8개 연구, 7,365명의 개인 자료를 모은 메타분석에서는 DPD 유전자(DPYD)의 몇 가지 변이가 3등급 이상의 심한 부작용과 유의하게 관련되어 있었고, 연구진은 치료 시작 전 변이 선별 검사를 권고했습니다 [2]. 네덜란드 17개 병원에서 평가 가능한 환자 1,103명을 대상으로 한 전향적 연구에서는 치료 전에 유전자 검사를 하고 변이가 있는 사람(약 8%)에게 처음부터 용량을 조정해 투여했으며, 연구진은 이 방식이 실제 진료에서 시행 가능하고 환자 안전을 높였다고 결론지었습니다 [1]. 이런 검사를 시행하는지, 결과를 어떻게 반영할지는 국가와 병원에 따라 다르므로 궁금하다면 담당 의료진에게 물어보세요."},{"type":"p","text":"함께 먹는 약도 중요합니다. 암 환자 4명을 대상으로 한 연구에서 카페시타빈 치료 중에는 와파린의 혈중 농도와 혈액 응고 수치(INR)에 대한 영향이 커졌고, 연구진은 함께 복용할 때 INR을 자주 확인하도록 권했습니다 [4]. 규모가 작은 연구지만, 항응고제처럼 상호작용이 알려진 약이 있다는 점을 보여 줍니다."},{"type":"callout","tone":"info","title":"처방받을 때 알릴 것","text":"항응고제, 뇌전증약, 다른 병원에서 받은 약, 일반의약품, 건강기능식품과 한약까지 복용 중인 것을 모두 목록으로 가져가세요. 조정이 필요한지는 의료진과 약사가 판단합니다."},{"type":"h2","id":"call-now","text":"이럴 땐 다음 진료를 기다리지 말고 바로 연락하세요"},{"type":"ul","items":["평소보다 하루 4~6회 이상 늘어난 설사, 밤에도 잠을 깨우는 설사, 피가 섞인 변","열이나 오한(병원에서 받은 기준 온도를 따르세요)","하루에 두 번 이상 토하거나, 먹거나 마시지 못하는 상태가 이어질 때","입안 통증으로 물이나 음식을 삼키기 힘들 때","손발이 붓고 아파서 걷기나 물건 쥐기가 어려울 때, 물집·진물이 생겼을 때","어지럽고 소변이 눈에 띄게 줄었을 때(탈수 의심)","가슴 통증, 숨참, 이유 없는 멍이나 출혈이 보일 때"]},{"type":"p","text":"이런 신호가 있을 때 복용을 계속할지, 쉬어야 할지, 용량을 바꿀지는 담당 의료진이 판단합니다. 연락할 때는 마지막으로 약을 먹은 시각, 증상이 시작된 날짜, 하루 횟수나 체온 같은 숫자를 함께 전하면 판단이 빨라집니다. 호흡이 힘들거나 의식이 흐려지는 등 위급하다고 느껴지면 119나 가까운 응급실을 이용하세요."},{"type":"h2","id":"app-record","text":"온코케어 AI로 복약과 증상을 함께 기록하는 법"},{"type":"p","text":"먹는 항암제는 「먹었는지」와 「어떤 증상이 있었는지」를 같이 봐야 의미가 생깁니다. 온코케어 AI의 복약 기록으로 아침·저녁 복용 여부를 남기고, 증상 체크인에 설사 횟수, 손발 피부 상태, 입안 통증, 피로 점수를 날짜별로 적어 두면 주기마다 언제 어떤 변화가 시작되는지 한눈에 보입니다. 항암 일정 기능으로 복용 기간과 쉬는 기간을 함께 표시해 두면 다음 주기의 흐름을 예상하기도 쉽습니다. 가족·보호자 연결 기능을 쓰면 함께 사는 가족이 같은 기록을 확인할 수 있습니다. 앱은 복용 여부를 결정하지 않으며, 진료 때 보여 줄 기록을 정리하는 도구입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내이며 진단이나 처방을 대신하지 않습니다. 젤로다의 복용 일정·용량·중단 여부, 보습제나 지사제 사용, 유전자 검사 여부는 반드시 담당 의료진·약사와 상의해 정하세요."}],"faq":[{"q":"젤로다 부작용은 언제부터 나타나나요?","a":"사람과 치료 일정에 따라 다릅니다. 설사나 메스꺼움은 첫 주기부터 나타날 수 있고, 손발 피부 변화나 피로는 여러 주기가 쌓이면서 뚜렷해지기도 합니다. 복용 시작일을 기준으로 증상을 날짜별로 기록해 두면 자신의 패턴을 파악하는 데 도움이 됩니다."},{"q":"손발이 붉어지기 시작했는데 약을 쉬어야 하나요?","a":"복용을 쉬거나 용량을 바꿀지는 담당 의료진이 판단합니다. 스스로 중단하지 말고, 붉어짐·통증·물집 여부와 일상생활이 얼마나 불편한지를 정리해 치료팀에 알리세요. 통증이나 물집이 있다면 진료일 전이라도 연락하는 편이 안전합니다."},{"q":"설사가 있으면 언제 병원에 연락해야 하나요?","a":"평소보다 하루 4~6회 이상 늘어난 설사, 밤에도 계속되는 설사, 피가 섞인 변, 열이나 어지러움이 함께 있는 경우는 바로 연락할 신호입니다. 그보다 가벼워도 이틀 이상 이어지면 치료팀에 알리고 안내를 받으세요."},{"q":"DPD 결핍 검사는 꼭 받아야 하나요?","a":"DPD 유전자 변이가 심한 부작용 위험과 관련 있다는 연구가 있어 일부 국가와 병원에서는 치료 전 검사를 시행합니다. 시행 여부와 결과 반영 방식은 병원마다 다를 수 있으니 담당 의료진에게 문의하세요."},{"q":"온코케어 AI가 젤로다 복용 여부를 알려 주나요?","a":"아니요. 온코케어 AI는 복약 기록과 증상 체크인, 항암 일정 정리를 돕는 정보·기록 도구입니다. 복용 여부와 용량은 담당 의료진이 판단하며, 앱 기록은 그 판단을 위해 진료 때 보여 드리는 자료로 쓰입니다."}],"references":[{"label":"Henricks LM, et al. DPYD genotype-guided dose individualisation of fluoropyrimidine therapy in patients with cancer: a prospective safety analysis. Lancet Oncol 2018;19(11):1459-1467 (PMID 30348537)","url":"https://pubmed.ncbi.nlm.nih.gov/30348537/"},{"label":"Meulendijks D, et al. Clinical relevance of DPYD variants c.1679T>G, c.1236G>A/HapB3, and c.1601G>A as predictors of severe fluoropyrimidine-associated toxicity: a systematic review and meta-analysis of individual patient data. Lancet Oncol 2015;16(16):1639-50 (PMID 26603945)","url":"https://pubmed.ncbi.nlm.nih.gov/26603945/"},{"label":"Hofheinz RD, et al. Mapisal Versus Urea Cream as Prophylaxis for Capecitabine-Associated Hand-Foot Syndrome: A Randomized Phase III Trial of the AIO Quality of Life Working Group. J Clin Oncol 2015;33(22):2444-9 (PMID 26124485)","url":"https://pubmed.ncbi.nlm.nih.gov/26124485/"},{"label":"Camidge R, et al. Significant effect of capecitabine on the pharmacokinetics and pharmacodynamics of warfarin in patients with cancer. J Clin Oncol 2005;23(21):4719-25 (PMID 16034047)","url":"https://pubmed.ncbi.nlm.nih.gov/16034047/"}],"related":["chemo-skin-nail-changes-care","chemo-diarrhea-constipation-care","when-to-call-your-oncology-team"]},
  // 2026-10-11 정체 실험 수정발행(A) — 본문 섹션·FAQ·전환 블록 보강, 날짜 최신순 맨 앞 이동. 원 발행 2026-07-08.
  {
    slug: "eating-well-during-chemo",
    title: "항암 치료 중 잘 먹는 법 — 입맛 없고 마를 때",
    description:
      "항암 치료 중 식욕이 떨어지고 체중이 줄 때, 무리 없이 영양을 챙기는 실용적인 방법을 공신력 있는 영양 지침을 바탕으로 정리했습니다. 소량씩 자주 먹기, 단백질 우선, 영양보충 활용까지.",
    category: "영양",
    categoryColor: "#B9560C",
    publishedAt: "2026-10-11",
    updatedAt: "2026-10-11",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 5,
    hero: "eating-well",
    heroAlt: "부드러운 죽과 두부·채소가 담긴 따뜻한 한 그릇",
    tldr: [
      "한 번에 많이 말고 소량씩 자주 — 하루 5~6번으로 나눠 드세요.",
      "단백질(달걀·두부·생선·살코기)을 매 끼니 조금씩 우선 챙기세요.",
      "식사가 어려우면 환자용 균형영양식(ONS)으로 부족분을 보충하고, 체중이 계속 줄면 반드시 의료진·영양사와 상의하세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 치료 중에는 구역·미각 변화·점막염 등으로 잘 못 먹게 되고, 이는 체중과 근육 감소로 이어져 치료 내약성과 회복에 영향을 줄 수 있습니다. ‘많이’ 드시는 것보다 ‘꾸준히·효율적으로’ 드시는 것이 핵심입니다.",
      },
      { type: "h2", id: "why", text: "왜 잘 먹는 것이 중요할까요?" },
      {
        type: "p",
        text: "먹는 양이 줄면 몸은 근육을 분해해 에너지를 얻습니다(암성 영양실조). 근육이 줄면 기운이 없고 치료 일정을 지키기 어려워질 수 있어, 치료 초기부터 영양을 챙기는 것이 좋습니다. 이는 암을 치료하는 것이 아니라, 치료를 더 잘 받도록 돕는 ‘보완 관리’입니다.",
      },
      { type: "svg", name: "plate" },
      { type: "h2", id: "how", text: "실용적인 식사 요령" },
      { type: "h3", text: "1. 소량씩 자주" },
      {
        type: "p",
        text: "한 끼에 많이 드시기 부담스럽다면 하루 3끼를 5~6번의 작은 끼니로 나누세요. 부담이 적고 총섭취량은 오히려 늘 수 있습니다.",
      },
      { type: "h3", text: "2. 단백질을 먼저" },
      {
        type: "ul",
        items: [
          "달걀찜·두부·흰살생선·닭가슴살 등 부드러운 단백질을 매 끼니 조금씩",
          "죽·미음에도 달걀·다진 고기·두부를 더해 ‘단백질 있는 죽’으로",
          "간식으로 두유·요거트·견과 등 소량 자주",
        ],
      },
      { type: "h3", text: "3. 향·온도·식감 조절" },
      {
        type: "p",
        text: "구역이 있으면 뜨겁고 향이 강한 음식보다 미지근하거나 차가운 음식이 편할 수 있습니다. 미각이 변했다면 레몬·생강 같은 산뜻한 향으로 입맛을 돕고, 금속 맛이 나면 플라스틱 수저를 써 보세요.",
      },
      {
        type: "callout",
        tone: "info",
        title: "영양보충(ONS)은 이렇게",
        text: "식사만으로 부족할 때 환자용 균형영양식(경구영양보충)으로 채울 수 있습니다. 제품 선택과 복용량은 영양사·의료진 감수를 거치는 것이 안전하며, 이는 질병 치료·예방이 아닌 식사관리·영양보충 용도입니다.",
      },
      { type: "h2", id: "warning", text: "이럴 땐 꼭 알리세요" },
      {
        type: "ul",
        items: [
          "1주에 체중이 뚜렷하게 줄 때",
          "거의 못 먹는 상태가 며칠 이어질 때",
          "삼키기 어렵거나 심한 구토·설사가 지속될 때",
        ],
      },
      // REV 2026-10-11 정체 실험(A) — 보강 섹션
      {"type":"h2","id":"rev-2026-10-11-1","text":"배고픔을 기다리지 말고 식사를 시간표로 바꾸기"},
      {"type":"p","text":"항암 치료 중에는 «배가 고프면 먹자»는 방식이 잘 통하지 않습니다. 입맛이 돌아오기를 기다리다 보면 하루가 그냥 지나가기 때문입니다. 미국 국립암연구소(NCI)는 식욕이 떨어졌을 때 2~3시간마다 작은 식사를 하루 5~6번 하고, 먹을 시간을 자주 잊는다면 알람을 맞춰 두라고 안내합니다."},
      {"type":"ul","items":["<b>알람을 정해 두기</b> — 예를 들어 오전 8시·10시 반·오후 1시·3시 반·6시·8시 반처럼 휴대폰에 시간을 맞춰 두고, 알람이 울리면 몇 숟가락이라도 드십니다","<b>씹기 힘든 날은 마시는 끼니로</b> — 고형식이 넘어가지 않을 때는 수프, 우유나 두유로 만든 셰이크, 스무디처럼 마시는 형태가 도움이 될 수 있습니다","<b>끼니 사이에는 영양 음료를 조금씩</b> — 환자용 영양 음료는 한 번에 비우기보다 끼니 사이에 나눠 마시는 편이 부담이 적습니다. 제품 선택은 의료진·영양사와 상의하세요","<b>먹는 자리를 편하게</b> — 좋아하는 음악을 틀거나 가족과 함께 앉는 것처럼 식사 분위기를 바꾸는 것도 NCI가 권하는 방법입니다"]},
      {"type":"p","text":"보호자가 함께 계시다면 알람 시간과 그때 드신 양을 같이 확인해 주시면 좋습니다. 무엇을 얼마나 드셨는지가 쌓이면 어느 시간대에 그나마 잘 드시는지, 어떤 형태가 잘 넘어가는지가 보이기 시작합니다."},
      {"type":"h2","id":"rev-2026-10-11-2","text":"체중은 일주일에 한 번, 같은 조건에서 — 의료진에게 알릴 기준"},
      {"type":"p","text":"잘 드시고 있는지 가장 객관적으로 보여 주는 숫자는 체중입니다. 다만 매번 다른 시간에 재면 옷이나 식사 여부에 따라 오르내려 판단이 어렵습니다. 같은 요일 아침, 화장실을 다녀온 뒤, 식사 전에, 같은 저울로 재는 것을 원칙으로 삼아 보세요."},
      {"type":"ul","items":["NCI는 일주일에 약 1.4~2.3kg(3~5파운드) 넘게 체중이 줄면 의사에게 알리라고 안내합니다","반대로 일주일에 약 2.3kg(5파운드)처럼 갑자기 늘거나 계속 늘어나는 경우도 바로 알리라고 권합니다 — 부기 등 다른 원인을 확인해야 할 수 있습니다","식욕이 떨어졌거나 먹는 데 어려움이 생긴 것 자체도 미루지 말고 진료 때 말씀하시는 것이 좋습니다"]},
      {"type":"p","text":"체중 숫자와 함께 그 주에 가장 힘들었던 식사 문제(구역, 입맛 변화, 입안 통증 등)를 한 줄로 적어 가시면, 의료진이 영양 상담이나 증상 조절이 필요한지를 판단하기가 훨씬 쉬워집니다. 기록은 온코케어 앱의 식사 기록에 함께 남겨 두셔도 됩니다."},
      // CONV:START 2026-10-11
      {"type":"h2","id":"rev-2026-10-11-conv","text":"이런 상황이라면 담당 의료진·영양사와 식사 문제를 상담하세요"},
      {"type":"p","text":"아래 항목 가운데 하나라도 해당된다면 다음 진료를 기다리지 말고 치료 병원에 식사·체중 문제를 알려 상담을 받아 보세요."},
      {"type":"ul","items":["일주일 사이 체중이 눈에 띄게(약 1.4kg 이상) 줄었다","하루 종일 거의 먹지 못하는 날이 이어지고 있다","삼키기 어렵거나 입안 통증 때문에 식사를 못 한다","구토나 설사 때문에 먹은 것을 유지하지 못한다","영양 음료나 보충제를 시작해도 되는지 판단이 서지 않는다"]},
      {"type":"callout","tone":"warn","title":"기다리지 말고 치료 병원에 바로 연락해야 하는 경우","text":"38도 이상의 발열이나 오한, 숨이 차는 증상, 약으로 조절되지 않는 통증, 멈추지 않는 출혈·구토·설사, 의식이 흐려지거나 갑자기 기운이 빠지는 경우는 앱에 적고 기다릴 일이 아닙니다. 치료받는 병원의 응급 연락처나 응급실로 바로 연락하세요. 온코케어 AI는 진단과 치료를 대신하지 않습니다."},
      {"type":"p","text":"<b>시작하는 방법</b> — <a href=\"https://play.google.com/store/apps/details?id=ai.oncocare.app\">Google Play</a>와 <a href=\"https://apps.apple.com/kr/app/id6780368713\">App Store</a>에서 「온코케어 AI」를 받아 무료로 시작할 수 있습니다. 어떤 기록을 남길 수 있는지는 <a href=\"https://oncocare.co.kr/#app\">공식 홈페이지 기능 소개</a>에서 먼저 확인해 보세요."},
      {"type":"p","text":"<b>문의</b> — 앱 이용 문의는 상담전화 <a href=\"tel:01099829941\">010-9982-9941</a>로 받습니다. 운영 의료기관은 서울온케어의원입니다. 치료와 관련된 결정은 치료받는 병원의 담당 의료진과 상의하세요."},
      // CONV:END
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 글은 정보·교육 목적의 일반적 안내이며 개인별 처방이 아닙니다. 영양 상태·식단은 담당 의료진·영양사와 상의해 결정하세요.",
      },
    ],
    faq: [
      {
        q: "입맛이 하나도 없는데 억지로라도 먹어야 하나요?",
        a: "억지로 많이 드시기보다, 소량씩 자주 그리고 단백질 위주로 ‘효율적으로’ 드시는 것이 좋습니다. 물 대신 두유·영양보충 음료처럼 열량·단백질이 있는 음료를 활용하면 부담이 적습니다. 며칠간 거의 못 드신다면 의료진과 상의하세요.",
      },
      {
        q: "체중이 계속 줄어요. 괜찮을까요?",
        a: "치료 중 체중·근육 감소는 회복과 치료 내약성에 영향을 줄 수 있어 방치하지 않는 것이 좋습니다. 1주 단위로 뚜렷이 줄거나 지속되면 반드시 의료진·영양사에게 알리고 영양 개입을 상의하세요.",
      },
      {
        q: "건강기능식품이나 보충제를 먹어도 되나요?",
        a: "일부 보충제는 항암제·간 기능과 상호작용할 수 있습니다. 복용 전 반드시 의료진·약사와 상의하고, 온코케어 앱에서 복용 중인 제품과 검사 수치의 상호작용을 함께 점검해 보세요.",
      },
      // REV-FAQ 2026-10-11
      {"q":"알람까지 맞춰 가며 먹는 게 정말 도움이 되나요?","a":"입맛이 없을 때는 배고픔 신호 자체가 약해져 끼니를 놓치기 쉽습니다. 미국 국립암연구소도 2~3시간마다 작은 식사를 하고 잊는다면 알람을 쓰라고 안내합니다. 한 번에 몇 숟가락이라도 시간에 맞춰 드시는 것이 목표입니다."},
      {"q":"체중은 얼마나 줄면 병원에 알려야 하나요?","a":"미국 국립암연구소는 일주일에 약 1.4~2.3kg(3~5파운드) 넘게 줄면 의사에게 알리라고 안내합니다. 다만 개인 상황에 따라 기준이 다를 수 있으니, 담당 의료진이 따로 정해 준 기준이 있다면 그것을 따르세요."},
    ],
    references: [
      {"label":"National Cancer Institute — Appetite Loss and Cancer Treatment","url":"https://www.cancer.gov/about-cancer/treatment/side-effects/appetite-loss"},
    ],
  },
  // 2026-10-11 정체 실험 수정발행(A) — 본문 섹션·FAQ·전환 블록 보강, 날짜 최신순 맨 앞 이동. 원 발행 2026-07-12.
  {
    slug: "chemo-hair-loss-timeline",
    title: "항암 탈모 — 언제 빠지고 언제 다시 자랄까",
    description:
      "항암 탈모가 대개 언제 시작되고(2~3주 무렵), 치료 종료 후 언제 회복되는지(1~3개월 재성장), 두피 관리와 가발·모자 준비 시기, 두피냉각까지 정직하게 정리했습니다.",
    category: "증상관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-10-11",
    updatedAt: "2026-10-11",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 5,
    hero: "chemo-hair-loss-timeline",
    heroAlt: "부드러운 스카프와 빗, 손거울이 놓인 정돈된 화장대",
    tldr: [
      "탈모는 약제에 따라 다르지만 대개 첫 투여 후 2~3주 무렵부터 시작됩니다.",
      "치료가 끝난 뒤 보통 1~3개월 안에 새 머리카락이 다시 자라기 시작하지만, 개인차가 큽니다.",
      "가발·모자는 탈모가 시작되기 전에 미리 준비해 두면 색과 스타일을 맞추기 쉽고 심리적으로도 대처가 수월합니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "탈모는 항암 치료 중 겉으로 가장 잘 드러나는 변화라서 마음의 준비가 필요합니다. 언제 시작되고 언제 돌아오는지 미리 알아 두면 갑작스러운 충격을 조금은 줄일 수 있습니다.",
      },
      { type: "h2", id: "when-starts", text: "언제부터 빠지나요" },
      {
        type: "p",
        text: "모든 항암제가 탈모를 일으키는 것은 아니며, 약제와 용량에 따라 정도가 다릅니다. 탈모가 있는 요법에서는 대개 첫 투여 후 2~3주 무렵부터 시작되는 경우가 많고, 며칠 사이 뭉텅이로 빠지기도 하고 서서히 가늘어지기도 합니다. 머리카락뿐 아니라 눈썹·속눈썹·체모에도 영향을 줄 수 있습니다.",
      },
      { type: "h2", id: "when-regrow", text: "언제 다시 자라나요" },
      {
        type: "p",
        text: "많은 경우 치료가 끝난 뒤 약 1~3개월 안에 새 머리카락이 다시 자라기 시작합니다. 처음 자라는 머리카락은 이전과 색이나 곱슬기가 다르게 느껴질 수 있고, 자연스러운 굵기와 숱으로 돌아오기까지는 다시 여러 달이 걸릴 수 있습니다. 회복 속도와 정도는 사람마다 차이가 크므로, 주변과 비교하기보다 내 몸의 속도를 인정하는 것이 도움이 됩니다.",
      },
      { type: "h2", id: "scalp-care", text: "두피 관리와 미리 준비하기" },
      {
        type: "ul",
        items: [
          "저자극·순한 샴푸 사용, 무리한 염색·펌은 피하기",
          "탈모가 시작되기 전 짧게 커트해 심리적 충격 줄이기",
          "외출 시 자외선 차단(모자·자외선차단제)으로 두피 보호",
          "가발·모자는 탈모 시작 전에 미리 준비하면 색·스타일을 맞추기 쉬움",
        ],
      },
      { type: "h2", id: "scalp-cooling", text: "두피냉각(스칼프 쿨링)이란" },
      {
        type: "p",
        text: "투여 중 두피를 차갑게 유지해 두피 혈류를 줄여 탈모 정도를 줄이는 방법입니다. 일부 요법(탁산·안트라사이클린 계열 등)에서 효과가 보고되지만 모든 사람에게서 탈모를 완전히 막아 주지는 않으며, 병원마다 장비 보유 여부와 비용이 다릅니다. 내 요법에 적합한지, 비용과 절차는 어떤지 담당 의료진·병원에 미리 문의해야 합니다.",
      },
      // REV 2026-10-11 정체 실험(A) — 보강 섹션
      {"type":"h2","id":"rev-2026-10-11-1","text":"머리카락이 빠지는 동안 — 빗·샴푸·드라이어 다루는 법"},
      {"type":"p","text":"탈모가 시작되면 머리를 감고 빗는 일상 동작 하나하나가 신경 쓰입니다. 미국 국립암연구소(NCI)는 이 시기에 머리카락과 두피를 부드럽게 다루라고 안내하며, 구체적으로 다음과 같은 방법을 제시합니다."},
      {"type":"ul","items":["<b>빗</b> — 솔이 부드러운 브러시나 빗살 간격이 넓은 빗을 쓰고, 엉킨 부분은 끝에서부터 천천히 풉니다","<b>세정</b> — 순한 샴푸로 감고, 부드러운 수건으로 문지르지 말고 눌러서 물기를 닦습니다","<b>열기구와 고정 도구</b> — 헤어드라이어·고데기 같은 열기구, 두피를 당기거나 자극하는 젤·핀은 피합니다","<b>가려움·당김</b> — 두피가 가렵거나 예민하게 느껴지면 로션이나 컨디셔너가 편안함에 도움이 될 수 있습니다","<b>외출</b> — 밖에 나갈 때는 모자를 쓰거나 자외선차단제를 발라 두피를 보호합니다"]},
      {"type":"p","text":"빠진 머리카락이 베개나 욕실에 남는 것이 마음을 더 힘들게 하기도 합니다. 그럴 때는 잠잘 때 얇은 면 모자를 쓰거나, 샤워 후 배수구를 바로 정리하는 식으로 눈에 띄는 순간을 줄이는 것도 방법입니다. 가발을 고려하신다면 NCI 안내처럼 머리카락이 남아 있을 때 미리 준비해 두면 원래 색에 맞추기 쉽습니다."},
      {"type":"h2","id":"rev-2026-10-11-2","text":"다시 자랄 때 — 새 머리카락 다루기와 진료 때 물어볼 질문"},
      {"type":"p","text":"NCI는 항암화학요법 뒤에는 치료가 끝나고 2~3개월 무렵, 방사선치료 뒤에는 치료 부위의 머리카락이 3~6개월 무렵 다시 자라는 경우가 많다고 안내합니다. 방사선치료는 치료하는 부위에서만 탈모가 생긴다는 점도 항암화학요법과 다릅니다. 처음 나는 머리카락은 아주 가늘고, 곱슬기나 색이 이전과 다를 수 있어 빗질·컬·드라이를 계속 부드럽게 하는 것이 좋습니다."},
      {"type":"p","text":"탈모의 정도와 회복은 받는 약제와 치료 방식에 따라 크게 달라집니다. 다음 진료 때 아래 질문을 메모해 가시면 내 치료에 맞는 답을 들을 수 있습니다."},
      {"type":"ul","items":["지금 받는 치료가 탈모를 일으킬 가능성이 높은가요?","두피를 어떻게 보호하면 좋을까요? 권하는 제품이나 피해야 할 제품이 있나요?","가발이나 두피를 가리는 제품은 어디서 알아보면 좋을까요?","내 경우 머리카락은 언제쯤 다시 자랄 것으로 보시나요?","도움을 받을 수 있는 환우 모임이나 상담 창구가 있나요?"]},
      // CONV:START 2026-10-11
      {"type":"h2","id":"rev-2026-10-11-conv","text":"이런 변화가 있다면 담당 의료진과 상담하세요"},
      {"type":"p","text":"탈모는 흔한 변화지만, 아래 항목처럼 일상이 힘들어질 정도라면 혼자 견디지 말고 다음 진료 전에라도 치료 병원에 알려 상담을 받아 보세요."},
      {"type":"ul","items":["두피에 상처·진물·심한 통증이 생겼다","두피가 붉게 붓거나 열감이 느껴진다","탈모 때문에 외출이나 사람 만나는 일을 피하게 되었다","잠을 못 이룰 정도로 불안하거나 우울한 날이 이어진다","치료가 끝나고 한참이 지나도 다시 자라는 기미가 없다"]},
      {"type":"callout","tone":"warn","title":"기다리지 말고 치료 병원에 바로 연락해야 하는 경우","text":"38도 이상의 발열이나 오한, 숨이 차는 증상, 약으로 조절되지 않는 통증, 멈추지 않는 출혈·구토·설사, 의식이 흐려지거나 갑자기 기운이 빠지는 경우는 앱에 적고 기다릴 일이 아닙니다. 치료받는 병원의 응급 연락처나 응급실로 바로 연락하세요. 온코케어 AI는 진단과 치료를 대신하지 않습니다."},
      {"type":"p","text":"<b>시작하는 방법</b> — <a href=\"https://play.google.com/store/apps/details?id=ai.oncocare.app\">Google Play</a>와 <a href=\"https://apps.apple.com/kr/app/id6780368713\">App Store</a>에서 「온코케어 AI」를 받아 무료로 시작할 수 있습니다. 어떤 기록을 남길 수 있는지는 <a href=\"https://oncocare.co.kr/#app\">공식 홈페이지 기능 소개</a>에서 먼저 확인해 보세요."},
      {"type":"p","text":"<b>문의</b> — 앱 이용 문의는 상담전화 <a href=\"tel:01099829941\">010-9982-9941</a>로 받습니다. 운영 의료기관은 서울온케어의원입니다. 치료와 관련된 결정은 치료받는 병원의 담당 의료진과 상의하세요."},
      // CONV:END
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "탈모의 시기·정도·회복 속도는 개인차가 매우 큽니다. 이 글은 일반적인 경향을 안내하는 정보이며, 내 치료 요법에서의 예상 경과는 담당 의료진에게 직접 확인하는 것이 가장 정확합니다.",
      },
    ],
    faq: [
      {
        q: "탈모가 안 오는 항암제도 있나요?",
        a: "네, 약제와 요법에 따라 탈모가 거의 없거나 경미한 경우도 있습니다. 내가 받는 요법에서 탈모 가능성이 어느 정도인지는 치료 시작 전 담당 의료진에게 물어보는 것이 가장 정확합니다.",
      },
      {
        q: "머리가 다시 안 자라면 어떡하죠?",
        a: "대부분 치료 종료 후 1~3개월 안에 재성장이 시작됩니다. 다만 회복 속도는 개인차가 크고 드물게 회복이 더딘 경우도 보고되므로, 치료 종료 후 상당 기간이 지나도 변화가 없다면 의료진과 상담하세요.",
      },
      {
        q: "가발은 언제 사는 게 좋을까요?",
        a: "탈모가 시작되기 전, 원래 머리색과 스타일을 참고할 수 있을 때 미리 준비하는 것을 권합니다. 미리 맞춰 두면 실제 탈모가 시작됐을 때 당황하지 않고 바로 사용할 수 있습니다.",
      },
      {
        q: "두피냉각은 모든 병원에서 가능한가요?",
        a: "아닙니다. 장비를 갖춘 병원에서만 가능하고 요법에 따라 적합성과 효과도 다릅니다. 관심이 있다면 치료 시작 전 담당 의료진에게 가능 여부와 비용을 확인하세요.",
      },
      // REV-FAQ 2026-10-11
      {"q":"탈모 중에 헤어드라이어를 써도 되나요?","a":"미국 국립암연구소는 탈모 시기에 헤어드라이어·고데기 같은 열기구를 피하라고 안내합니다. 부드러운 수건으로 눌러 물기를 닦고 자연 건조하는 편이 두피에 부담이 적습니다."},
      {"q":"방사선치료를 받아도 머리카락이 다 빠지나요?","a":"방사선치료는 치료하는 부위에서만 탈모가 생길 수 있습니다. 다시 자라는 데는 치료 종료 후 3~6개월 정도 걸리는 경우가 많다고 안내되지만, 개인차가 크므로 담당 의료진에게 내 경우를 확인하세요."},
    ],
    references: [
      {"label":"National Cancer Institute — Hair Loss (Alopecia) and Cancer Treatment","url":"https://www.cancer.gov/about-cancer/treatment/side-effects/hair-loss"},
    ],
  },
  // 2026-10-11 정체 실험 수정발행(B · 항암 중 배변 문제) — 본문 섹션·FAQ·전환 블록 보강, 날짜 최신순 맨 앞 이동. 원 발행 2026-08-20.
  {
    slug: "chemo-diarrhea-constipation-care",
    title: "항암 중 설사와 변비 — 언제 스스로 관리하고 언제 알려야 하나",
    description:
      "항암 치료 중 설사와 변비는 흔하지만 대응이 정반대입니다. 집에서 확인할 것과 병원에 알려야 하는 기준을 국제 진료지침 근거로 정리했습니다.",
    category: "증상 관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-10-11",
    updatedAt: "2026-10-11",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "side-effect",
    heroAlt: "항암 중 설사와 변비 관리 — 확인할 것과 알려야 할 신호",
    tldr: [
      "설사는 <b>탈수</b>가, 변비는 <b>원인 감별</b>이 핵심입니다 — 대응이 정반대입니다.",
      "지사제·완하제를 임의로 시작하면 다른 원인을 가릴 수 있습니다.",
      "배변과 가스가 <b>모두 멈추고</b> 배가 부르며 아프면 지체하지 말고 알리셔야 합니다.",
      "치료 주기와 함께 기록하면 다음 회차에 미리 대비할 수 있습니다.",
    ],
    blocks: [
      { type: "p", text: "항암 치료 중 배변 문제는 흔한데, 정작 진료실에서 말을 꺼내기 어려워하시는 증상이기도 합니다. 그런데 <b>설사와 변비는 대응이 정반대</b>라, 어느 쪽인지에 따라 집에서 하실 일과 알려야 할 시점이 완전히 달라집니다." },
      { type: "h2", id: "diarrhea", text: "설사 — 횟수보다 탈수를 봅니다" },
      { type: "p", text: "항암제에 따라 장 점막이 영향을 받으면서 설사가 나타날 수 있습니다. 항암화학요법의 위장관 독성을 정리한 문헌(<a href=\"https://pubmed.ncbi.nlm.nih.gov/35779873/\" target=\"_blank\" rel=\"noopener\">PMID 35779873</a>)이 이 기전과 관리 원칙을 다루고 있습니다. 집에서 확인하실 것은 다음과 같습니다." },
      { type: "ul", items: [
        "<b>기준선 대비 증가</b> — 평소보다 하루 몇 회 늘었는지",
        "<b>탈수 신호</b> — 어지럼, 소변량 감소, 입마름, 기운 없음",
        "<b>발열 동반</b> — 감염 가능성을 함께 봐야 합니다",
        "<b>혈변</b> — 즉시 알려야 하는 신호",
      ] },
      { type: "p", text: "수분은 한 번에 많이 드시기보다 <b>조금씩 자주</b>가 낫습니다. 기름지고 유당이 많은 음식, 카페인은 당분간 줄이시는 편이 편합니다." },
      { type: "h2", id: "constipation", text: "변비 — 원인이 여러 갈래입니다" },
      { type: "p", text: "암 치료 중 변비는 한 가지 이유로 생기지 않습니다. 진행암 환자의 변비를 다룬 유럽종양학회 진료지침(<a href=\"https://pubmed.ncbi.nlm.nih.gov/30016389/\" target=\"_blank\" rel=\"noopener\">PMID 30016389</a>)은 약물·수분 섭취·활동량·동반 질환을 함께 평가하도록 정리합니다." },
      { type: "ul", items: [
        "<b>마약성 진통제</b> — 진통제를 시작하거나 늘린 시점과 겹치는지",
        "<b>항구토제</b> — 치료 주기와 맞물려 반복되는지",
        "<b>수분·식사량 감소</b> — 먹는 양이 줄지 않았는지",
        "<b>활동량 감소</b> — 하루 중 움직이는 시간",
      ] },
      { type: "p", text: "특히 마약성 진통제로 인한 변비는 별도의 예방·치료 접근이 정리되어 있습니다(<a href=\"https://pubmed.ncbi.nlm.nih.gov/38452708/\" target=\"_blank\" rel=\"noopener\">PMID 38452708</a>). <b>진통제를 줄이는 것이 답이 아니라</b>, 통증 조절은 유지하면서 변비를 함께 관리하는 방향으로 봅니다." },
      { type: "h2", id: "home-care", text: "집에서 해볼 수 있는 것" },
      { type: "ul", items: [
        "가능한 범위에서 <b>규칙적으로 움직이기</b> — 짧은 산책도 도움이 됩니다",
        "아침 식사 후처럼 <b>일정한 시간</b>에 화장실에 앉는 습관",
        "복부 마사지 — 성인 만성 변비에서 효과를 검토한 체계적 문헌고찰이 있습니다(<a href=\"https://pubmed.ncbi.nlm.nih.gov/39531948/\" target=\"_blank\" rel=\"noopener\">PMID 39531948</a>). 다만 배에 통증이나 만져지는 덩어리가 있으면 하지 않습니다",
        "수분 섭취를 조금씩 늘리기",
      ] },
      { type: "h2", id: "otc", text: "지사제·완하제를 임의로 시작하지 않는 이유" },
      { type: "p", text: "둘 다 약국에서 살 수 있어 스스로 시작하기 쉽습니다. 그런데 항암 중에는 문제가 됩니다. <b>지사제</b>를 감염성 설사에 쓰면 원인균이 장에 더 오래 머뭅니다. 발열이 함께 있는 설사에서 특히 주의합니다. <b>완하제</b>는 자극성·삼투성·연변제 등 종류마다 작용이 다르고, 변비의 원인에 따라 맞는 것이 갈립니다." },
      { type: "callout", tone: "warn", title: "먼저 알리고 정하는 순서", text: "문제는 약 자체가 아니라 원인을 확인하기 전에 쓰는 것입니다. 치료 종류에 따라 지사제를 미리 처방받아 두는 경우가 있는데, 그때도 언제부터 어떤 용량으로 쓸지 담당 의료진과 미리 정해 두시는 편이 안전합니다." },
      { type: "h2", id: "pattern", text: "치료 주기와 함께 보면 패턴이 보입니다" },
      { type: "p", text: "배변 문제는 대개 치료 주기와 맞물려 반복됩니다. 항암 후 며칠째에 설사가 시작되는지, 항구토제를 쓴 뒤 며칠째에 변비가 오는지가 사람마다 어느 정도 일정합니다. 이 패턴을 알면 그 시기에 수분과 활동을 늘리고 필요한 약을 미리 상의해 두는 식으로 <b>미리 대비</b>하실 수 있습니다." },
      { type: "h2", id: "call", text: "지체하지 말고 알려야 하는 신호" },
      { type: "ul", items: [
        "설사와 함께 <b>38도 이상 발열</b>이 있을 때",
        "피가 섞인 변",
        "어지럽고 소변이 거의 안 나올 때",
        "<b>3일 이상 배변이 없고</b> 배가 부르며 구역이 동반될 때",
        "배변과 가스가 <b>모두 멈추고</b> 심한 복통이 있을 때",
      ] },
      { type: "p", text: "마지막 항목은 장이 막히는 상황을 배제해야 해서 기다리는 대상이 아닙니다." },
      { type: "h2", id: "record", text: "기록이 진료를 바꿉니다" },
      { type: "p", text: "배변 문제는 말로 설명하기 어렵습니다. <b>날짜·횟수·형태·동반 증상</b>을 간단히 적어 두시면 진료에서 원인을 좁히기가 훨씬 쉬워집니다. 진통제나 항구토제를 바꾼 날짜를 함께 적어 두시면 인과를 보기 좋습니다." },
      // REV 2026-10-11 정체 실험(B) — 보강 섹션
      {"type":"h2","id":"rev-2026-10-11-1","text":"항암 중 배변 문제, 진료실에서 꺼내기 어렵다면 — 이렇게 말해 보세요"},
      {"type":"p","text":"항암 중 배변 문제는 흔하지만 막상 진료실에서는 «좀 불편했어요» 한마디로 넘어가기 쉽습니다. 의료진이 원인을 좁히는 데 필요한 것은 부끄러운 묘사가 아니라 몇 가지 숫자와 사실입니다. 아래 순서대로 말씀하시면 짧은 진료 시간에도 정확하게 전달됩니다."},
      {"type":"ul","items":["<b>평소와 비교한 횟수</b> — «평소 하루 1번인데 요즘은 5번» 또는 «4일째 배변이 없음»","<b>형태</b> — 물 같은지, 묽은 편인지, 딱딱하고 작은 덩어리인지","<b>시작 시점</b> — 투여 후 며칠째부터였는지, 진통제나 구토약을 바꾼 날과 겹치는지","<b>함께 나타난 증상</b> — 발열, 복통, 어지럼, 혈변이나 점액","<b>집에서 해 본 것</b> — 먹은 약(이름·횟수), 바꾼 음식, 효과가 있었는지"]},
      {"type":"p","text":"미국 국립암연구소(NCI)도 배변 기록을 남겨 의료진과 공유하라고 권합니다. 특히 설사는 평소보다 하루 7번 이상 늘어나는 정도가 되면 생명을 위협할 수 있어 입원 치료가 필요할 수 있는 단계로 분류되므로, 횟수를 세어 두는 것만으로도 중요한 판단 근거가 됩니다. 언제 연락해야 하는지는 치료 병원마다 기준이 있을 수 있으니, 다음 진료 때 «설사가 몇 번이면 연락할까요»라고 미리 물어 두세요."},
      {"type":"h2","id":"rev-2026-10-11-2","text":"설사가 이어질 때 — 마실 것·먹을 것·항문 주변 피부 관리"},
      {"type":"p","text":"설사로 잃는 수분과 전해질을 채우는 것이 집에서 할 수 있는 가장 중요한 관리입니다. NCI가 안내하는 방법을 정리하면 다음과 같습니다."},
      {"type":"ul","items":["<b>마실 것</b> — 물이나 맑은 국물처럼 맑은 음료를 충분히, 위에 부담이 적은 실온 온도로 드십니다. 얼마나 마셔야 하는지는 의료진에게 확인하세요","<b>먹을 것</b> — 세 끼를 크게 먹기보다 작은 식사와 간식을 자주. 껍질 벗겨 삶은 감자, 바나나, 사과 퓌레, 크래커, 수프처럼 나트륨·칼륨을 채울 수 있는 음식이 예로 제시됩니다","<b>피할 것</b> — 술, 유제품, 맵거나 기름진 음식, 카페인 음료, 과일 주스, 무설탕 껌·사탕","<b>피부 관리</b> — 항문 주변을 깨끗하고 건조하게 유지하고, 미지근한 물과 순한 물티슈를 쓰며, 얕은 온수 좌욕이 편안함에 도움이 될 수 있습니다"]},
      {"type":"p","text":"변비 쪽으로 기울어 있다면 위 식사 원칙이 그대로 맞지 않을 수 있습니다. 설사와 변비가 번갈아 온다면 그 순서와 날짜를 적어 두었다가 의료진에게 보여 주세요. 어느 약을 언제 쓸지는 원인을 확인한 뒤 함께 정하는 것이 안전합니다."},
      // CONV:START 2026-10-11
      {"type":"h2","id":"rev-2026-10-11-conv","text":"항암 중 배변 문제가 이렇다면 치료 병원에 알리고 상담하세요"},
      {"type":"p","text":"아래 항목 가운데 하나라도 해당된다면 다음 진료를 기다리지 말고 치료 병원에 연락해 상담을 받으세요."},
      {"type":"ul","items":["설사가 평소보다 하루 여러 번 늘어난 상태가 이틀 이상 이어진다","변에 피나 점액이 섞여 나온다","어지럽거나 소변량이 눈에 띄게 줄었다","3일 이상 배변이 없고 배가 부르며 구역이 있다","배변과 가스가 모두 멈추고 배가 심하게 아프다"]},
      {"type":"callout","tone":"warn","title":"기다리지 말고 치료 병원에 바로 연락해야 하는 경우","text":"38도 이상의 발열이나 오한, 숨이 차는 증상, 약으로 조절되지 않는 통증, 멈추지 않는 출혈·구토·설사, 의식이 흐려지거나 갑자기 기운이 빠지는 경우는 앱에 적고 기다릴 일이 아닙니다. 치료받는 병원의 응급 연락처나 응급실로 바로 연락하세요. 온코케어 AI는 진단과 치료를 대신하지 않습니다."},
      {"type":"p","text":"<b>시작하는 방법</b> — <a href=\"https://play.google.com/store/apps/details?id=ai.oncocare.app\">Google Play</a>와 <a href=\"https://apps.apple.com/kr/app/id6780368713\">App Store</a>에서 「온코케어 AI」를 받아 무료로 시작할 수 있습니다. 어떤 기록을 남길 수 있는지는 <a href=\"https://oncocare.co.kr/#app\">공식 홈페이지 기능 소개</a>에서 먼저 확인해 보세요."},
      {"type":"p","text":"<b>문의</b> — 앱 이용 문의는 상담전화 <a href=\"tel:01099829941\">010-9982-9941</a>로 받습니다. 운영 의료기관은 서울온케어의원입니다. 치료와 관련된 결정은 치료받는 병원의 담당 의료진과 상의하세요."},
      // CONV:END
    ],
    faq: [
      { q: "설사가 하루 몇 번이면 연락해야 하나요?", a: "평소보다 하루 4회 이상 늘었거나 밤에 깨서 화장실을 가야 할 정도라면 알리시는 것이 좋습니다. 횟수만이 아니라 탈수 신호와 발열이 함께 있는지가 더 중요합니다." },
      { q: "지사제를 미리 받아 두면 되나요?", a: "치료 종류에 따라 미리 준비하는 경우가 있지만, 임의로 복용을 시작하면 감염성 설사나 다른 원인을 가릴 수 있습니다. 언제부터 어떤 용량으로 쓸지는 담당 의료진과 미리 정해 두시는 편이 안전합니다." },
      { q: "변비인데 시중 완하제를 먹어도 되나요?", a: "암 환자의 변비는 원인이 여러 갈래라 원인에 따라 선택이 달라집니다. 특히 마약성 진통제를 쓰는 경우 별도의 접근이 정리되어 있어, 먼저 알리고 정하시는 것이 좋습니다." },
      { q: "설사와 변비가 번갈아 오면요?", a: "치료 주기에 따라 번갈아 나타나는 경우가 있습니다. 다만 배가 부르면서 배변과 가스가 완전히 멈추거나 심한 복통이 있으면 다른 문제를 배제해야 하므로 지체하지 말고 알리십시오." },
      // REV-FAQ 2026-10-11
      {"q":"설사할 때 이온음료나 국물을 마셔도 되나요?","a":"미국 국립암연구소는 물이나 맑은 국물 같은 맑은 음료가 잃은 수분과 전해질을 보충하는 데 도움이 된다고 안내합니다. 다만 과일 주스나 카페인 음료는 설사를 악화시킬 수 있어 피하라고 하며, 마실 양은 의료진에게 확인하는 것이 좋습니다."},
      {"q":"배변 문제를 진료실에서 어떻게 설명하면 좋을까요?","a":"평소와 비교한 하루 횟수, 변의 형태, 시작한 날짜(투여 후 며칠째), 함께 나타난 증상, 집에서 먹은 약을 순서대로 말씀하시면 됩니다. 미리 메모나 앱에 적어 가면 짧은 진료 시간에도 빠짐없이 전달할 수 있습니다."},
    ],
    references: [
      {"label":"National Cancer Institute — Diarrhea and Cancer Treatment","url":"https://www.cancer.gov/about-cancer/treatment/side-effects/diarrhea"},
    ],
  },
  // 2026-10-11 정체 실험 수정발행(B · 항암치료 입원 보호자) — 본문 섹션·FAQ·전환 블록 보강, 날짜 최신순 맨 앞 이동. 원 발행 2026-07-12.
  {
    slug: "caregiver-first-chemo-prep",
    title: "보호자를 위한 첫 항암 준비 가이드 — 전날부터 귀가 후 72시간까지",
    description:
      "환자가 아니라 보호자 시점에서 정리한 첫 항암 준비 가이드입니다. 전날 확인할 것, 당일 보호자의 역할, 귀가 후 72시간 관찰법, 그리고 보호자 소진 경고 신호까지 다룹니다.",
    category: "보호자",
    categoryColor: "#B9560C",
    publishedAt: "2026-10-11",
    updatedAt: "2026-10-11",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "caregiver-first-chemo-prep",
    heroAlt: "환자 옆에서 메모하는 보호자의 손과 노트",
    tldr: [
      "첫 항암 전날엔 복용약 목록과 서류를 함께 챙기고, 당일엔 정보를 대신 기록할 준비를 하세요.",
      "귀가 후 72시간이 가장 중요한 관찰 구간 — 체온·식사·배변·기분을 매일 같은 시간에 확인하세요.",
      "보호자도 지칩니다. 혼자 다 짊어지지 말고, 교대할 사람과 쉬는 시간을 미리 정해두세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "환자 본인만큼이나 보호자도 첫 항암을 앞두고 무엇을 준비해야 할지 막막합니다. 이 글은 환자가 아니라 보호자의 시점에서, 전날부터 귀가 후 72시간까지 무엇을 기록하고 지켜봐야 하는지 정리했습니다.",
      },
      { type: "h2", id: "before", text: "전날 — 함께 확인할 것" },
      {
        type: "ul",
        items: [
          "복용 중인 약 전체 목록 정리(영양제·한약 포함)",
          "병원 서류·보험카드·신분증 챙기기",
          "담당 병동·응급 연락처를 휴대폰에 저장",
          "항암 스케줄과 예상 소요시간 확인",
          "편한 옷과 담요 등 짐을 함께 점검",
        ],
      },
      { type: "h2", id: "day", text: "당일 — 보호자의 역할" },
      {
        type: "p",
        text: "투여 중 환자가 놓치기 쉬운 정보(약 이름, 부작용 설명, 다음 방문일)를 대신 메모하는 것이 보호자의 중요한 역할입니다. 궁금한 점은 그 자리에서 바로 묻고, 나중에 헷갈리지 않도록 사진이나 메모로 남겨두세요.",
      },
      {
        type: "ul",
        items: [
          "처방받은 약(항구토제 등)의 이름·복용법 메모",
          "다음 검사·방문 일정 확인",
          "이상 반응 발생 시 병동에서 안내받은 대처법 메모",
        ],
      },
      { type: "h2", id: "after72", text: "귀가 후 72시간 — 가장 중요한 관찰 구간" },
      {
        type: "p",
        text: "항암제 부작용은 대부분 투여 후 며칠 안에 나타나기 시작합니다. 이 시기에 매일 같은 시간에 아래 항목을 확인해 기록해두면 변화를 가장 먼저 알아챌 수 있습니다.",
      },
      {
        type: "ul",
        items: [
          "체온(하루 1~2회, 열감이 느껴지면 즉시)",
          "식사량과 구역·구토 여부",
          "배변 상태(변비·설사)",
          "소변량과 색",
          "기운과 의식 상태의 변화",
          "새로 생긴 멍이나 출혈",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "보호자가 먼저 알아채는 신호",
        text: "환자 본인은 '괜찮다'고 말해도 옆에서 보면 평소보다 반응이 느리거나, 식은땀을 흘리거나, 말수가 눈에 띄게 줄어드는 경우가 있습니다. 본인이 괜찮다고 해도 이런 변화가 보이면 병원에 연락하세요.",
      },
      { type: "h2", id: "caregiver-burnout", text: "보호자도 지칩니다" },
      {
        type: "p",
        text: "보호자의 소진은 흔하고 자연스러운 반응입니다. 수면 부족, 짜증, 무기력함이 계속된다면 스스로를 돌보지 않고 있다는 신호일 수 있습니다. 혼자 모든 일정과 간병을 떠맡기보다 가족·지인과 역할을 나누고, 짧게라도 쉬는 시간을 의식적으로 확보하세요. 보호자가 무너지면 돌봄의 질도 함께 떨어집니다.",
      },
      { type: "svg", name: "moodweather" },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 앱 팁",
        text: "온코케어 앱은 환자뿐 아니라 보호자도 체온·식사·배변 같은 관찰 항목을 함께 기록할 수 있어, 매번 기억에 의존하지 않고 변화를 놓치지 않게 돕습니다.",
      },
      // REV 2026-10-11 정체 실험(B) — 보강 섹션
      {"type":"h2","id":"rev-2026-10-11-1","text":"항암치료 입원, 보호자가 병동에서 맡을 일"},
      {"type":"p","text":"항암치료로 입원하면 보호자는 «옆에 있어 주는 사람» 이상의 역할을 하게 됩니다. 투약 일정과 설명이 하루에도 여러 번 바뀌고, 환자는 피로나 구역으로 그 내용을 다 기억하기 어렵기 때문입니다. 병동에서 보호자가 맡으면 좋은 일은 크게 세 가지입니다."},
      {"type":"ul","items":["<b>설명 듣고 적기</b> — 회진 때 들은 내용, 바뀐 약 이름, 다음 검사 일정을 그 자리에서 메모합니다. 이해가 안 된 부분은 담당 간호사에게 다시 물어도 됩니다","<b>변화 알리기</b> — 열감, 오한, 주사 부위의 통증이나 부기, 평소와 다른 졸림이나 혼란처럼 환자가 «괜찮다»고 넘기는 변화를 간호사에게 바로 알립니다","<b>퇴원 준비</b> — 퇴원 전 집에서 먹을 약의 이름과 시간, 연락해야 할 증상, 응급 연락처를 확인해 사진으로 남겨 둡니다"]},
      {"type":"p","text":"반대로 보호자가 하지 않는 것이 좋은 일도 있습니다. 수액 속도를 만지거나, 의료진 확인 없이 집에서 가져온 약·영양제를 드리는 일입니다. 궁금하면 직접 하기보다 먼저 묻는 것이 원칙입니다."},
      {"type":"h2","id":"rev-2026-10-11-2","text":"보호자 상주가 어려운 병동도 있습니다 — 입원 전에 확인할 것"},
      {"type":"p","text":"모든 병동에 보호자가 머물 수 있는 것은 아닙니다. 간호·간병통합서비스 병동은 보호자나 간병인이 병실에 상주하지 않고 병원의 간호사·간호조무사·간병지원인력이 24시간 환자를 돌보는 국민건강보험 제도로 운영되며, 이용할 때는 정해진 병문안 시간을 지켜야 합니다(서울특별시 안내). 입원할 병동이 어떤 형태인지에 따라 보호자의 준비도 달라집니다."},
      {"type":"ul","items":["입원할 병동에 보호자가 상주할 수 있는지, 야간에도 머물 수 있는지","병문안·면회 시간과 출입 절차","보호자가 병실에 없을 때 병동에서 연락받을 번호(보호자 연락처 등록)","퇴원 설명을 들을 수 있는 시간에 맞춰 방문할 수 있는지"]},
      {"type":"p","text":"이런 기준은 병원과 병동마다 다르므로 입원 안내를 받을 때 입원 담당 부서나 병동에 직접 확인하는 것이 가장 정확합니다. 상주가 어렵다면 병동에서 들은 설명과 환자 상태를 보호자가 따로 받아 볼 방법을 미리 정해 두세요. 온코케어 앱처럼 환자와 보호자가 기록을 함께 보는 도구가 그 빈자리를 줄이는 데 도움이 됩니다."},
      // CONV:START 2026-10-11
      {"type":"h2","id":"rev-2026-10-11-conv","text":"항암치료 입원 중이거나 퇴원한 뒤 이런 변화가 보이면 바로 알리세요"},
      {"type":"p","text":"보호자가 아래와 같은 변화를 먼저 알아채는 경우가 많습니다. 입원 중이라면 담당 간호사에게, 퇴원 후라면 치료 병원에 연락해 상담을 받으세요."},
      {"type":"ul","items":["환자가 괜찮다고 하지만 반응이 느리거나 말수가 눈에 띄게 줄었다","주사 부위가 붓거나 아프거나 붉어졌다","식사나 물을 거의 넘기지 못하고 있다","퇴원 때 받은 약을 언제 어떻게 먹어야 하는지 헷갈린다","보호자 본인이 잠을 거의 못 자고 지쳐 돌봄을 이어 가기 어렵다"]},
      {"type":"callout","tone":"warn","title":"기다리지 말고 치료 병원에 바로 연락해야 하는 경우","text":"38도 이상의 발열이나 오한, 숨이 차는 증상, 약으로 조절되지 않는 통증, 멈추지 않는 출혈·구토·설사, 의식이 흐려지거나 갑자기 기운이 빠지는 경우는 앱에 적고 기다릴 일이 아닙니다. 치료받는 병원의 응급 연락처나 응급실로 바로 연락하세요. 온코케어 AI는 진단과 치료를 대신하지 않습니다."},
      {"type":"p","text":"<b>시작하는 방법</b> — <a href=\"https://play.google.com/store/apps/details?id=ai.oncocare.app\">Google Play</a>와 <a href=\"https://apps.apple.com/kr/app/id6780368713\">App Store</a>에서 「온코케어 AI」를 받아 무료로 시작할 수 있습니다. 어떤 기록을 남길 수 있는지는 <a href=\"https://oncocare.co.kr/#app\">공식 홈페이지 기능 소개</a>에서 먼저 확인해 보세요."},
      {"type":"p","text":"<b>문의</b> — 앱 이용 문의는 상담전화 <a href=\"tel:01099829941\">010-9982-9941</a>로 받습니다. 운영 의료기관은 서울온케어의원입니다. 치료와 관련된 결정은 치료받는 병원의 담당 의료진과 상의하세요."},
      // CONV:END
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 글은 보호자를 위한 일반적 안내이며 의학적 진단·처방이 아닙니다. 환자의 구체적 상태와 대응은 담당 의료진과 상의하세요.",
      },
    ],
    faq: [
      {
        q: "보호자가 매번 병원에 같이 가야 하나요?",
        a: "첫 항암은 정보량이 많아 동반을 권장하지만 필수는 아니며, 병원 방침과 환자 상태에 따라 다릅니다.",
      },
      {
        q: "환자가 괜찮다고 하는데 제가 너무 예민한 걸까요?",
        a: "아닙니다. 보호자가 알아챈 미세한 변화가 실제로 중요한 조기 신호인 경우가 많습니다. 애매하면 병원에 확인하는 편이 안전합니다.",
      },
      {
        q: "저도 힘든데 티 내도 될까요?",
        a: "네, 보호자의 소진은 자연스러운 반응이며 숨길수록 오래갑니다. 가족과 나누거나 필요하면 병원의 심리지지 자원을 활용하세요.",
      },
      {
        q: "기록은 어떻게 하는 게 좋을까요?",
        a: "매일 같은 시간에 체온·식사·배변 같은 몇 가지 항목만 간단히 기록해도 충분합니다. 종이 노트든 앱이든 형식보다 꾸준함이 핵심입니다.",
      },
      // REV-FAQ 2026-10-11
      {"q":"항암치료 입원 중에 보호자가 꼭 상주해야 하나요?","a":"병원과 병동에 따라 다릅니다. 간호·간병통합서비스 병동처럼 보호자가 상주하지 않고 병원 인력이 24시간 돌보는 병동도 있습니다. 입원 전에 병동 형태와 면회 시간, 보호자 연락처 등록 방법을 병원에 확인하세요."},
      {"q":"입원 중 보호자가 가장 먼저 챙겨야 할 것은 무엇인가요?","a":"회진과 투약 설명을 그 자리에서 적어 두는 것, 환자의 작은 변화를 간호사에게 바로 알리는 것, 퇴원 전 집에서 먹을 약과 연락해야 할 증상을 확인하는 것입니다. 집에서 가져온 약이나 영양제는 의료진 확인 없이 드리지 않습니다."},
    ],
    references: [
      {"label":"서울특별시 복지 누리집 — 간호간병통합서비스 안내","url":"https://news.seoul.go.kr/welfare/archives/557125"},
    ],
  },
  // 2026-10-11 정체 실험 수정발행(B · 항암 관리 앱) — 본문 섹션·FAQ·전환 블록 보강, 날짜 최신순 맨 앞 이동. 원 발행 2026-08-01.
  {
    slug: "chemo-diary-app-how-to-keep",
    title: "항암 일지, 3줄이면 됩니다 — 진료 3분을 2배로 쓰는 법",
    description:
      "일지를 열심히 썼는데 진료에서 안 쓰였다면 정리 방식이 문제입니다. 주기 기준으로 묶고 세 줄로 요약하는 법, 그리고 그 요약을 앱이 대신 만들어 주는 방법을 정리했습니다.",
    category: "정보·교육",
    categoryColor: "#B9560C",
    publishedAt: "2026-10-11",
    updatedAt: "2026-10-11",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "side-effect",
    heroAlt: "항암 주기별 증상 변화를 표로 정리한 일지 형태의 안내 이미지",
    tldr: [
      "일지가 진료에서 안 쓰이는 이유는 분량이 아니라 정리 방식입니다 — 날짜순이 아니라 주기순이어야 합니다.",
      "\"2주기 D3에 심했는데 3주기는 D2부터\" — 이 한 문장이 약 조절의 근거가 됩니다.",
      "온코케어는 이 주기 비교와 세 줄 요약을 자동으로 만들어 줍니다.",
    ],
    blocks: [
      { type: "p", text: "일지를 두 달 썼는데 진료에서 거의 안 봤다 — 이런 말씀을 종종 듣습니다. 억울하실 만합니다. 그런데 대개 <b>기록이 부족해서가 아니라 정리 방식이 진료 흐름과 안 맞아서</b>입니다." },
      { type: "h2", id: "cycle", text: "날짜순으로 적으면 안 읽힙니다" },
      { type: "p", text: "항암은 <b>주기로 돌아갑니다.</b> 그런데 달력에 날짜별로 적으면 주기 경계가 사라져 비교가 안 됩니다. 대신 \"투여 후 며칠째(D)\"로 적으면 이야기가 달라집니다." },
      { type: "ul", items: [
        "<b>D0</b> — 투여 당일, 주사 중과 직후",
        "<b>D1~D3</b> — 구역·피로가 가장 흔히 올라오는 구간",
        "<b>D4~D7</b> — 혈구 수치가 떨어지는 시기와 겹칩니다",
        "<b>D8 이후</b> — 회복 양상과 다음 주기 전 컨디션",
      ]},
      { type: "callout", tone: "info", title: "이 한 문장이 약을 바꿉니다", text: "\"2주기 때는 D3에 심했는데 3주기에는 D2부터 시작했습니다.\" 주기 기준으로 적어야 나오는 문장이고, 용량·예방약 조정의 직접적인 근거가 됩니다." },
      { type: "h2", id: "grade", text: "부작용은 '기능'으로 적으십시오" },
      { type: "p", text: "\"많이 힘들었다\"는 전달이 안 됩니다. 의료진은 부작용을 <b>일상 수행에 미친 영향</b>으로 판단하므로, 무엇을 할 수 있었고 못 했는지를 적으면 정확해집니다." },
      { type: "ul", items: [
        "구역 — 하루 몇 회, 먹을 수 있었는지, 약을 몇 번 썼는지",
        "피로 — 누워만 있었는지, 집안일은 했는지, 외출은 했는지",
        "손발 저림 — 단추를 잠글 수 있었는지, 물건을 떨어뜨렸는지",
        "구내염 — 물은 넘어갔는지, 식사가 가능했는지",
      ]},
      { type: "p", text: "\"피로 8/10\"보다 <b>\"화장실 가는 것 외에는 못 일어났다\"</b>가 더 많은 것을 알려 줍니다. 숫자와 함께 쓰시면 가장 좋습니다." },
      { type: "h2", id: "summary", text: "진료 전 세 줄" },
      { type: "p", text: "진료 3~5분에 두 달치를 넘겨가며 설명할 수는 없습니다. 미리 세 줄만 만들어 가시면 됩니다." },
      { type: "ul", items: [
        "가장 힘들었던 증상 하나와 <b>그 시점(D몇)</b>",
        "지난 주기 대비 <b>나아졌는지 심해졌는지</b>",
        "이번에 여쭤볼 것 <b>한 가지</b>",
      ]},
      { type: "callout", tone: "info", title: "이 세 줄, 앱이 만들어 드립니다", text: "온코케어는 주기별로 입력을 묶고 진료 전 요약을 자동 생성합니다. 직접 정리하실 필요가 없어 컨디션이 나쁜 주기에도 기록이 끊기지 않습니다." },
      { type: "h2", id: "keep", text: "완벽하게 쓰려다 멈추지 마십시오" },
      { type: "p", text: "치료 중에는 기록 자체가 일입니다. 컨디션이 나쁜 날일수록 적을 것이 많은데 손은 가장 무겁습니다. 그래서 <b>항목을 줄이고 한 줄이라도 남기는 쪽</b>이 완벽을 목표로 하다 2주 만에 멈추는 것보다 낫습니다." },
      { type: "callout", tone: "warn", title: "일지에 적고 기다리면 안 되는 것", text: "38도 이상의 발열, 오한, 호흡 곤란, 멈추지 않는 구토나 설사는 즉시 연락 대상입니다. 특히 혈구 수치가 떨어지는 D4~D7의 발열은 응급 상황일 수 있습니다." },
      { type: "p", text: "다음 주기가 시작되기 전에 준비해 두시면 첫 주기부터 비교가 됩니다. <a href=\"/#download\">앱 다운로드</a>에서 받으시고 D0부터 남겨 보십시오." },
      // REV 2026-10-11 정체 실험(B) — 보강 섹션
      {"type":"h2","id":"rev-2026-10-11-1","text":"항암 관리 앱으로 옮길 때 — 첫 주에 정해 둘 것"},
      {"type":"p","text":"종이 일지를 쓰다가 항암 관리 앱으로 옮기면 처음 며칠은 오히려 번거롭게 느껴질 수 있습니다. 항목이 많아 보이고 무엇부터 눌러야 할지 모르기 때문입니다. 첫 주에는 아래 네 가지만 정해 두면 그다음부터는 손이 덜 갑니다."},
      {"type":"ul","items":["<b>기준일</b> — 이번 주기의 투여일(D0)을 먼저 기록해 두면 이후 기록이 «며칠째»로 자연스럽게 묶입니다","<b>지켜볼 증상 두 가지</b> — 지금 가장 힘든 증상 두 개만 고르고, 나머지는 생겼을 때만 남깁니다","<b>기록하는 시간</b> — 체온과 복약은 매일 같은 시간(예: 아침 식후·잠들기 전)에 남기면 빠뜨리는 날이 줄어듭니다","<b>함께 볼 사람</b> — 보호자가 대신 기록하거나 같이 확인할지 정합니다. 컨디션이 나쁜 날에도 기록이 끊기지 않습니다"]},
      {"type":"p","text":"발진이나 부기처럼 말로 설명하기 어려운 변화는 사진으로 남겨 두는 편이 정확합니다. 기록이 몇 주 쌓이면 진료 전에 주기별로 정리된 요약을 보며 무엇을 여쭤볼지 미리 고를 수 있습니다."},
      {"type":"h2","id":"rev-2026-10-11-2","text":"종이 일지와 항암 관리 앱 — 무엇이 다를까"},
      {"type":"p","text":"기록의 원칙(주기 기준, 기능으로 적기, 진료 전 세 줄)은 종이든 앱이든 같습니다. 차이는 그 원칙을 지키는 데 드는 수고에 있습니다."},
      {"type":"ul","items":["<b>주기 비교</b> — 종이에서는 지난 주기의 같은 날을 찾아 넘겨 봐야 하지만, 앱은 투여일 기준으로 묶어 주기끼리 나란히 볼 수 있습니다","<b>입력 부담</b> — 증상 강도는 슬라이더로, 체온과 복약은 몇 번의 터치로 남길 수 있어 힘든 날에도 한 줄은 남기기 쉽습니다","<b>보호자와 공유</b> — 종이 일지는 한 사람이 들고 다니지만, 앱은 보호자와 함께 보고 대신 적을 수 있습니다","<b>보관과 이동</b> — 기록을 내보낼 수 있어 병원을 옮기거나 앱을 바꾸더라도 치료 경과가 남습니다"]},
      {"type":"p","text":"종이 일지가 더 편하다면 그대로 쓰셔도 됩니다. 중요한 것은 도구가 아니라 다음 진료 때 «지난 주기와 비교해 어땠는지»를 한 문장으로 말할 수 있느냐입니다. 앱은 그 문장을 만드는 시간을 줄여 주는 도구입니다. 처음 2주는 종이와 앱을 함께 써 보고 손에 맞는 쪽을 고르셔도 괜찮습니다."},
      // CONV:START 2026-10-11
      {"type":"h2","id":"rev-2026-10-11-conv","text":"이런 상황이라면 항암 관리 앱으로 기록을 시작해 보세요"},
      {"type":"p","text":"아래 항목 가운데 두 가지 이상 해당한다면 다음 주기의 투여일부터 앱으로 기록해 보세요. 궁금한 점은 아래 문의 창구로 물어보실 수 있습니다."},
      {"type":"ul","items":["일지를 쓰고는 있지만 진료에서 거의 쓰이지 않는다","지난 주기와 이번 주기의 부작용 시점을 비교하기 어렵다","컨디션이 나쁜 날에는 기록을 아예 건너뛰게 된다","보호자가 환자의 상태를 전화로만 전해 듣고 있다","병원을 옮기거나 다른 병원 진료를 함께 받을 예정이다"]},
      {"type":"callout","tone":"warn","title":"기다리지 말고 치료 병원에 바로 연락해야 하는 경우","text":"38도 이상의 발열이나 오한, 숨이 차는 증상, 약으로 조절되지 않는 통증, 멈추지 않는 출혈·구토·설사, 의식이 흐려지거나 갑자기 기운이 빠지는 경우는 앱에 적고 기다릴 일이 아닙니다. 치료받는 병원의 응급 연락처나 응급실로 바로 연락하세요. 온코케어 AI는 진단과 치료를 대신하지 않습니다."},
      {"type":"p","text":"<b>시작하는 방법</b> — <a href=\"https://play.google.com/store/apps/details?id=ai.oncocare.app\">Google Play</a>와 <a href=\"https://apps.apple.com/kr/app/id6780368713\">App Store</a>에서 「온코케어 AI」를 받아 무료로 시작할 수 있습니다. 어떤 기록을 남길 수 있는지는 <a href=\"https://oncocare.co.kr/#app\">공식 홈페이지 기능 소개</a>에서 먼저 확인해 보세요."},
      {"type":"p","text":"<b>문의</b> — 앱 이용 문의는 상담전화 <a href=\"tel:01099829941\">010-9982-9941</a>로 받습니다. 운영 의료기관은 서울온케어의원입니다. 치료와 관련된 결정은 치료받는 병원의 담당 의료진과 상의하세요."},
      // CONV:END
    ],
    faq: [
      { q: "항암 일지를 어떻게 정리해야 하나요?", a: "날짜순이 아니라 주기 기준으로 적으십시오. 투여 당일을 D0으로 두고 며칠째에 무엇이 있었는지 적으면 주기 간 비교가 되어, \"이번엔 더 빨리 시작했다\" 같은 판단이 가능해집니다." },
      { q: "부작용 정도를 어떻게 표현하나요?", a: "일상 수행에 미친 영향으로 적으시면 정확합니다. \"피로 8/10\"에 \"화장실 가는 것 외에는 못 일어났다\"를 더하면 훨씬 많은 것이 전달됩니다. 손발 저림은 단추를 잠글 수 있었는지가 기준이 됩니다." },
      { q: "진료 시간이 짧아 다 말하지 못합니다.", a: "세 줄 요약을 만들어 가십시오. 가장 힘들었던 증상과 시점, 지난 주기 대비 변화, 여쭤볼 것 한 가지면 충분합니다. 온코케어는 이 요약을 주기별 입력에서 자동으로 만들어 줍니다." },
      { q: "일지에 적어 두고 다음 진료를 기다려도 되나요?", a: "안 되는 경우가 있습니다. 38도 이상의 발열, 오한, 호흡 곤란, 멈추지 않는 구토·설사는 즉시 연락 대상입니다. 특히 혈구 수치가 떨어지는 D4~D7의 발열은 응급 상황일 수 있습니다." },
      // REV-FAQ 2026-10-11
      {"q":"항암 관리 앱은 종이 일지와 무엇이 다른가요?","a":"기록 원칙은 같지만, 앱은 투여일 기준으로 주기를 묶어 비교하고 진료 전 요약을 만들어 주며 보호자와 함께 볼 수 있다는 점이 다릅니다. 종이가 편하다면 그대로 쓰셔도 되고, 중요한 것은 주기별로 비교할 수 있게 남기는 것입니다."},
      {"q":"앱에 기록해 두면 병원에서 알아서 확인하나요?","a":"아닙니다. 앱 기록은 진료 때 보여 드리거나 말씀하실 내용을 정리하는 도구이며, 병원이 자동으로 확인하는 것이 아닙니다. 발열이나 호흡 곤란처럼 급한 증상은 앱에 적고 기다리지 말고 치료 병원에 바로 연락하세요."},
    ],
  },
  // 2026-10-10 수정발행(전환 블록·FAQ 보강) — 날짜 최신순으로 맨 앞 이동. 원 발행 2026-08-01.
  {
    slug: "cancer-care-app-what-to-record",
    title: "암 환자 관리, 아직 수첩으로 버티고 계신가요 — 진료 3분을 바꾸는 기록",
    description:
      "\"지난 2주 어떠셨어요\"에 \"그냥 좀 힘들었어요\"로 답하고 나오신 적 있으시죠. 기억은 3일이면 흐려집니다. 온코케어 앱이 무엇을 대신 정리해 주는지, 왜 그것이 진료를 바꾸는지 보여드립니다.",
    category: "정보·교육",
    categoryColor: "#B9560C",
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-10",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "chemo-cycle-schedule-management",
    heroAlt: "달력과 기록지를 앞에 두고 치료 일정을 정리하는 모습의 안내 이미지",
    tldr: [
      "진료 시간은 평균 3~5분. 그 안에 지난 2~3주를 전달해야 하는데 기억은 3일이면 흐려집니다.",
      "온코케어 앱은 증상·체온·식사·약 복용을 몇 번의 터치로 남기고, 진료 전 요약을 자동으로 만들어 줍니다.",
      "무료로 시작하실 수 있습니다 — 다음 진료 전에 2주만 써 보시면 차이가 보입니다.",
    ],
    blocks: [
      { type: "p", text: "\"지난 2주 어떠셨어요?\" — 진료실에서 이 질문을 받고 \"그냥 좀 힘들었어요\"라고 답하고 나오신 적, 한 번쯤 있으실 겁니다. 집에 와서야 \"아, 그 얘길 했어야 했는데\" 하고 떠오릅니다." },
      { type: "p", text: "성의가 없어서가 아닙니다. 사람의 기억은 <b>3일이면 흐려지고</b>, 남는 것은 가장 힘들었던 순간과 최근 며칠뿐입니다. 그런데 약 조절 판단에 필요한 정보는 대개 그 사이에 있습니다." },
      { type: "callout", tone: "info", title: "진료 시간은 생각보다 짧습니다", text: "외래 진료는 평균 3~5분입니다. 그 안에 지난 2~3주를 전달해야 하는데, 준비 없이 들어가면 절반은 \"괜찮았어요\"로 끝납니다. 기록은 그 3분의 밀도를 바꾸는 도구입니다." },
      { type: "h2", id: "loss", text: "기록이 없으면 무엇을 잃나" },
      { type: "ul", items: [
        "약 조절 시점 — 부작용이 며칠째 시작됐는지 모르면 용량 조정 근거가 없습니다",
        "패턴 — \"이번엔 더 빨리 왔다\"는 비교가 안 됩니다",
        "효과 확인 — 구토약을 언제 몇 번 썼는지 없으면 잘 듣는지 판단이 어렵습니다",
        "위험 신호 — 발열이 언제 시작됐는지가 응급 판단을 가릅니다",
      ]},
      { type: "p", text: "이 네 가지는 <b>기억으로 복원되지 않습니다.</b> 그날 남기지 않으면 사라집니다." },
      { type: "h2", id: "app", text: "온코케어 앱이 대신 하는 것" },
      { type: "p", text: "수첩에 적어 보신 분들은 아실 겁니다. 컨디션이 나쁜 날일수록 적을 것이 많은데 손은 가장 무겁습니다. 그래서 온코케어는 <b>입력을 최소로</b> 만들었습니다." },
      { type: "ul", items: [
        "증상 강도는 <b>슬라이더 한 번</b> — 0~10을 손가락으로 밀면 끝입니다",
        "체온·복약은 <b>2초</b> — 자주 쓰는 항목이 먼저 뜹니다",
        "사진 첨부 — 발진·부기는 글보다 사진이 정확합니다",
        "<b>진료 전 요약 자동 생성</b> — 주기별로 정리된 세 줄이 나옵니다",
      ]},
      { type: "callout", tone: "info", title: "가장 많이 듣는 반응", text: "\"이걸 보여드리니까 선생님이 바로 약을 바꿔 주셨어요.\" 말로 설명하려던 것이 화면 한 장으로 전달되기 때문입니다." },
      { type: "h2", id: "start", text: "2주만 써 보십시오" },
      { type: "p", text: "처음부터 다 채우실 필요 없습니다. 지금 가장 힘든 것 <b>두 가지만</b> 정해서 다음 진료까지 남겨 보십시오. 그 2주치 기록 한 장이 다음 진료를 바꿉니다." },
      { type: "ul", items: [
        "설치와 시작은 <b>무료</b>입니다",
        "보호자와 <b>함께 볼 수 있습니다</b> — 대신 기록해 주셔도 됩니다",
        "기록은 <b>내보낼 수 있습니다</b> — 병원을 옮기셔도 남습니다",
      ]},
      { type: "callout", tone: "warn", title: "기록보다 먼저 연락해야 할 때", text: "38도 이상의 발열, 호흡 곤란, 조절되지 않는 통증, 멈추지 않는 출혈은 앱에 적고 기다릴 일이 아니라 즉시 연락 대상입니다. 앱은 진료를 돕는 도구이지 진료를 대신하지 않습니다." },
      { type: "p", text: "다음 진료가 언제이신가요. 그 전까지 2주가 남았다면, 지금 시작하시면 됩니다. <a href=\"/#download\">앱 다운로드</a>에서 바로 받으실 수 있습니다." },
      // CONV:START 2026-10-10 수정발행 — 전환 블록(배너 caregiver 연결)
      {"type":"h2","id":"conv-start","text":"환자와 보호자가 함께 기록할 때 — 이런 상황이면 지금 시작해 보세요 (다운로드·문의·공식 홈페이지)"},
      {"type":"p","text":"글 중간 배너의 「환자와 보호자가 함께 기록해 보세요」는 아래와 같은 분들을 위한 안내입니다. 두 가지 이상 해당한다면 다음 진료 전 2주를 기록 기간으로 정해 보십시오."},
      {"type":"ul","items":["진료실에서 \"지난 2주 어떠셨어요\"라는 질문에 구체적으로 답하지 못하고 나온 적이 있다","부작용이 투여 후 며칠째 시작됐는지 기억나지 않는다","구토약·진통제처럼 필요할 때 먹는 약을 언제 몇 번 썼는지 적어 두지 않았다","보호자가 환자의 상태를 전화나 메신저로만 전해 듣고 있다","수첩·메모·달력에 기록이 흩어져 있어 진료 전에 한곳으로 모이지 않는다"]},
      {"type":"callout","tone":"warn","title":"기록보다 먼저 치료 병원에 연락해야 하는 경우","text":"38도 이상의 발열이나 오한, 숨이 차는 증상, 약으로 조절되지 않는 통증, 멈추지 않는 출혈·구토·설사, 의식이 흐려지거나 갑자기 기운이 빠지는 경우는 앱에 적고 기다릴 일이 아닙니다. 치료받는 병원의 응급 연락처나 응급실로 바로 연락하세요. 온코케어 AI는 진단과 치료를 대신하지 않습니다."},
      {"type":"p","text":"<b>시작하는 방법</b> — <a href=\"https://play.google.com/store/apps/details?id=ai.oncocare.app\">Google Play</a>와 <a href=\"https://apps.apple.com/kr/app/id6780368713\">App Store</a>에서 「온코케어 AI」를 받아 무료로 시작할 수 있습니다. 어떤 기록을 남길 수 있는지는 <a href=\"https://oncocare.co.kr/#app\">공식 홈페이지 기능 소개</a>에서 먼저 확인해 보세요."},
      {"type":"p","text":"<b>문의</b> — 앱 이용 문의는 상담전화 <a href=\"tel:01099829941\">010-9982-9941</a>로 받습니다. 운영 의료기관은 서울온케어의원입니다."},
      // CONV:END
    ],
    faq: [
      { q: "무료인가요?", a: "설치와 기록 기능은 무료로 시작하실 수 있습니다. 다음 진료 전 2주만 써 보시고 판단하셔도 됩니다." },
      { q: "매일 기록해야 하나요?", a: "아닙니다. 지금 가장 힘든 항목 두 가지만 정해 남기셔도 진료에서 쓰입니다. 빠뜨린 날은 넘어가셔도 되고, 온코케어는 그렇게 써도 요약이 만들어지도록 설계돼 있습니다." },
      { q: "보호자가 대신 적어도 되나요?", a: "됩니다. 보호자와 함께 보는 기능이 있어 대신 기록해 주실 수 있습니다. 치료 중에는 이 방식을 쓰시는 분이 많습니다." },
      { q: "기록한 내용을 나중에 가져갈 수 있나요?", a: "내보내기가 됩니다. 병원을 옮기시거나 앱을 바꾸셔도 기록이 남도록 만들었습니다. 몇 달치 치료 경과는 다시 만들 수 없는 자료입니다." },
      // CONV-FAQ 2026-10-10
      {"q":"온코케어 앱은 어떻게 시작하나요?","a":"Google Play 또는 App Store에서 「온코케어 AI」를 설치하면 무료로 시작할 수 있습니다. 처음에는 지금 가장 힘든 증상 두 가지만 정해 다음 진료까지 남겨 보시고, 기능 설명은 공식 홈페이지(oncocare.co.kr)의 기능 소개에서 확인하실 수 있습니다."},
      {"q":"앱 이용 중 궁금한 점은 어디로 문의하나요?","a":"상담전화 010-9982-9941로 문의하실 수 있습니다. 다만 열이나 호흡 곤란처럼 급한 증상은 앱 문의가 아니라 치료받는 병원에 바로 연락하셔야 합니다."},
    ],
  },
  // 2026-10-10 수정발행(전환 블록·FAQ 보강) — 날짜 최신순으로 맨 앞 이동. 원 발행 2026-08-01.
  {
    slug: "cancer-management-app-choosing-criteria",
    title: "암 관리 어플, 3가지만 확인하면 갈아타지 않습니다",
    description:
      "몇 달 기록했는데 앱을 바꾸면서 전부 날린 분들이 있습니다. 내보내기·개인정보·정보의 태도 — 이 3가지가 갈립니다. 온코케어가 각각을 어떻게 처리하는지 그대로 공개합니다.",
    category: "정보·교육",
    categoryColor: "#B9560C",
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-10",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "reading-lab",
    heroAlt: "휴대폰 화면의 기록과 종이 검사지를 나란히 놓고 비교하는 모습의 안내 이미지",
    tldr: [
      "6개월 기록했는데 앱을 바꾸며 전부 날리는 일이 실제로 일어납니다 — 내보내기부터 확인하십시오.",
      "진단명과 치료 기록은 민감정보입니다. 어디 저장되고 누구에게 가는지 처리방침에 적혀 있어야 합니다.",
      "효과를 단정하거나 특정 제품을 권하는 앱은 관리 도구가 아니라 판매 통로일 수 있습니다.",
    ],
    blocks: [
      { type: "p", text: "앱 스토어에서 \"암 관리\"를 검색하면 여러 개가 나옵니다. 화면은 다들 비슷해 보입니다. 그런데 <b>6개월쯤 쓰고 나면</b> 차이가 드러납니다 — 대개 옮기려 할 때입니다." },
      { type: "h2", id: "export", text: "① 기록을 가지고 나올 수 있는가" },
      { type: "p", text: "가장 많이 후회하시는 지점입니다. 매일 남긴 6개월치가 앱 안에만 있으면, 서비스가 바뀌거나 종료될 때 <b>그대로 사라집니다.</b> 치료 경과는 다시 만들 수 없는 자료입니다." },
      { type: "ul", items: [
        "파일이나 인쇄 형태로 <b>내보내기</b>가 되는지",
        "진료에 가져갈 <b>요약</b>이 나오는지",
        "탈퇴하면 데이터가 어떻게 되는지",
      ]},
      { type: "callout", tone: "info", title: "온코케어는", text: "기록 내보내기를 기본 기능으로 둡니다. 병원을 옮기시거나 다른 앱으로 가셔도 그동안의 기록이 남습니다 — 잠가두는 방식으로 붙잡지 않습니다." },
      { type: "h2", id: "privacy", text: "② 건강정보를 어떻게 다루는가" },
      { type: "p", text: "진단명과 치료 기록은 개인정보 중에서도 <b>민감정보</b>로 분류됩니다. 일반 앱보다 높은 기준이 적용돼야 하는 정보입니다." },
      { type: "ul", items: [
        "처리방침에 <b>수집 항목과 보관 기간</b>이 적혀 있는지",
        "<b>제3자 제공</b>이 있는지, 있다면 누구에게 무엇을",
        "마케팅 동의가 <b>필수로 묶여</b> 있지는 않은지",
        "탈퇴 시 <b>삭제 절차</b>가 안내되는지",
      ]},
      { type: "callout", tone: "warn", title: "동의를 한 번에 체크하지 마십시오", text: "필수와 선택은 다릅니다. 마케팅 활용이 선택인데 함께 묶여 있다면, 해제하고도 가입되는지 확인해 보십시오. 되지 않는다면 그 자체가 신호입니다." },
      { type: "h2", id: "attitude", text: "③ 정보가 어떤 태도로 쓰였는가" },
      { type: "p", text: "이 항목이 가장 중요한데 가장 덜 확인됩니다. 앱 안의 콘텐츠가 <b>효과를 단정하거나 특정 제품·요법을 권하는 방식</b>이라면, 그것은 관리 도구가 아니라 판매 통로일 수 있습니다." },
      { type: "ul", items: [
        "출처가 표시되는지",
        "\"주치의와 상의\" 프레임을 유지하는지",
        "보조요법을 치료 대체로 제시하지 않는지",
        "특정 제품 구매로 유도하는 구조가 아닌지",
      ]},
      { type: "p", text: "저희가 이 기준을 공개하는 이유는 단순합니다 — <b>온코케어에도 그대로 적용되는 기준</b>이기 때문입니다. 이 글의 항목으로 저희를 확인해 보셔도 됩니다." },
      { type: "h2", id: "fit", text: "그리고 결국은 계속 쓸 수 있는가" },
      { type: "ul", items: [
        "입력이 <b>2~3번의 동작</b>으로 끝나는지 — 치료 중에는 손이 무겁습니다",
        "글자 크기와 대비가 충분한지",
        "보호자와 <b>함께 볼 수 있는지</b>",
        "알림이 부담스럽지 않은 수준인지",
      ]},
      { type: "p", text: "기능이 많은 앱이 좋은 앱은 아닙니다. 지금 상태에서 <b>실제로 계속 쓸 수 있는 것</b>이 좋은 앱입니다. 세 가지 기준으로 비교해 보시고, 온코케어가 맞다고 판단되시면 <a href=\"/#download\">앱 다운로드</a>에서 시작하시면 됩니다." },
      // CONV:START 2026-10-10 수정발행 — 전환 블록(배너 caregiver 연결)
      {"type":"h2","id":"conv-start","text":"이런 상황이면 암 관리 어플을 지금 정해 보세요 — 다운로드·문의·공식 홈페이지"},
      {"type":"p","text":"글 중간 배너의 「환자와 보호자가 함께 기록해 보세요」로 이어지는 점검 목록입니다. 해당하는 항목이 있다면 앱을 고르는 일을 다음 주기로 미루지 않는 편이 좋습니다. 기록은 늦게 시작할수록 비교할 주기가 줄어듭니다."},
      {"type":"ul","items":["지금 쓰는 앱에서 기록 내보내기나 진료용 요약이 되는지 확인해 본 적이 없다","앱을 바꾸거나 지우면 지난 기록이 어떻게 되는지 모른다","개인정보 처리방침에서 건강정보의 보관 기간과 제3자 제공 항목을 찾지 못했다","보호자와 같은 기록을 함께 볼 방법이 없다","입력이 번거로워 컨디션이 나쁜 주기마다 기록이 끊긴다"]},
      {"type":"callout","tone":"warn","title":"앱을 고르기 전에 먼저 병원에 알려야 하는 경우","text":"38도 이상의 열, 숨이 가쁜 증상, 멈추지 않는 출혈이나 구토·설사, 진통제로 가라앉지 않는 통증이 있다면 앱 비교는 뒤로 미루고 치료받는 병원이나 응급실에 바로 연락하세요. 어떤 앱도 진료를 대신하지 않습니다."},
      {"type":"p","text":"<b>시작하는 방법</b> — 온코케어 AI는 <a href=\"https://play.google.com/store/apps/details?id=ai.oncocare.app\">Google Play</a>와 <a href=\"https://apps.apple.com/kr/app/id6780368713\">App Store</a>에서 무료로 받아 써 볼 수 있습니다. 위 세 가지 기준을 직접 대 보시려면 <a href=\"https://oncocare.co.kr/#app\">공식 홈페이지 기능 소개</a>와 <a href=\"/privacy\">개인정보처리방침</a>을 함께 확인해 보세요."},
      {"type":"p","text":"<b>문의</b> — 이용 문의는 상담전화 <a href=\"tel:01099829941\">010-9982-9941</a>로 받습니다."},
      // CONV:END
    ],
    faq: [
      { q: "암 관리 앱을 고를 때 가장 먼저 볼 것은 무엇인가요?", a: "기록을 내보낼 수 있는지입니다. 6개월치를 쌓았는데 앱을 바꾸며 전부 잃는 일이 실제로 일어납니다. 파일이나 인쇄 형태로 내보내지는지, 진료용 요약이 나오는지 먼저 확인하십시오." },
      { q: "온코케어는 기록을 내보낼 수 있나요?", a: "됩니다. 기본 기능으로 두었습니다. 병원을 옮기시거나 다른 앱으로 가셔도 기록이 남습니다. 데이터를 잠가두는 방식으로 붙잡지 않는 것이 저희 원칙입니다." },
      { q: "건강정보를 앱에 넣어도 되나요?", a: "진단명과 치료 기록은 민감정보로 분류되므로 기준을 확인하고 넣으셔야 합니다. 처리방침에 수집 항목·보관 기간·제3자 제공이 적혀 있는지, 마케팅 동의가 필수로 묶여 있지 않은지 보시면 됩니다." },
      { q: "앱 안의 치료 정보는 믿어도 되나요?", a: "출처 표시와 태도를 보십시오. 효과를 단정하거나 특정 제품을 권하는 방식이면 거리를 두시는 편이 안전합니다. 이 기준은 저희에게도 그대로 적용되니 같은 항목으로 온코케어를 확인해 보셔도 됩니다." },
      // CONV-FAQ 2026-10-10
      {"q":"다른 앱에서 온코케어로 옮기기 전에 무엇을 해 두어야 하나요?","a":"지금 쓰는 앱이나 수첩의 기록을 먼저 내보내거나 사진으로 남겨 두세요. 온코케어는 무료로 설치해 써 볼 수 있으니, 다음 진료 전 2주 동안 기존 방식과 나란히 써 보고 정하셔도 됩니다."},
      {"q":"온코케어의 개인정보 처리 기준과 이용 문의는 어디서 확인하나요?","a":"처리 기준은 공식 홈페이지의 개인정보처리방침(oncocare.co.kr/privacy)에 공개되어 있습니다. 이용 문의는 상담전화 010-9982-9941로 하실 수 있습니다."},
    ],
  },
  // 2026-10-07 오후 추가 — 사용자 지시 「항암 시 좋은 식단」: 적게 먹는 날(음식 보강·작은 끼니·영양음료) 근거 칼럼.
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-07","updatedAt":"2026-10-07","appLinks":true,"slug":"chemo-diet-small-appetite-energy-protein","title":"항암 식단, 밥이 잘 안 넘어가는 날 — 적은 양으로 열량·단백질 채우는 법","description":"입맛이 없어 한 공기를 다 못 비우는 날의 항암 식단은 양을 늘리기보다 한 숟가락의 밀도를 높이는 쪽이 현실적입니다. 평소 음식에 단백질을 더하는 요령, 작은 끼니 시간표, 영양음료(경구 영양보충)에 대한 연구 결과와 활용 요령을 정리했습니다.","category":"영양","categoryColor":"#B9560C","readMin":8,"hero":"chemo-diet-small-appetite","heroAlt":"항암 식단 — 달걀찜·두부·요거트·우유를 조금씩 담아 둔 작은 끼니 상차림","tldr":["먹는 양이 줄어든 날의 항암 식단은 「더 많이」보다 「같은 양에 더 촘촘히」 — 평소 음식에 단백질·열량을 보태는 방식이 부담이 적습니다.","세 끼를 다 채우기 어렵다면 하루를 작은 끼니 5~6번으로 나누고, 먹을 시각을 미리 정해 두면 거르는 끼니가 줄어듭니다.","영양음료(경구 영양보충)는 섭취량을 늘리는 데 도움이 될 수 있다는 연구가 있지만 효과는 꾸준히 마셨는지에 크게 좌우됩니다. 시작 여부와 종류는 의료진·영양사와 정하세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 항암 식단 가운데서도 「입맛이 없어 평소의 절반도 못 먹는 날」에 초점을 맞춥니다. 무엇을 먹어야 하는지보다, 적은 양으로도 열량과 단백질을 놓치지 않는 방법을 다룹니다."},{"type":"h2","id":"density","text":"적게 먹는 날의 항암 식단은 양보다 「밀도」를 봅니다"},{"type":"p","text":"항암 치료 중에는 구역, 입맛 변화, 피로, 일찍 배부른 느낌 때문에 한 번에 먹는 양이 줄어드는 시기가 흔히 찾아옵니다. 이때 「한 그릇을 다 비우자」고 목표를 세우면 식사가 숙제가 되고, 남긴 그릇을 보며 환자와 보호자 모두 지치기 쉽습니다."},{"type":"p","text":"그래서 방향을 바꿉니다. 그릇의 크기는 그대로 두거나 오히려 줄이고, 한 숟가락에 담기는 열량과 단백질을 높이는 것입니다. 영양 분야에서는 이를 음식 보강(fortification)이라고 부릅니다. 같은 죽 반 공기라도 물 대신 우유로 끓이고 달걀을 풀어 넣으면, 먹는 사람이 느끼는 양은 비슷해도 몸에 들어가는 단백질은 달라집니다. 암환자 영양 관리에서 개별 상담과 함께 자주 쓰이는 방법이며, 실제 연구에서도 상담·음식 보강·영양음료를 묶은 개별 영양 관리가 하나의 중재로 시험되었습니다(아래 「먹는 양이 늘어도 끝이 아닌 이유」 참고)."},{"type":"h2","id":"fortify","text":"한 숟가락에 더하는 법 — 평소 음식을 보강하는 요령"},{"type":"p","text":"새 요리를 배우기보다, 이미 잘 넘어가는 음식에 한 가지를 더하는 방식이 오래 갑니다. 아래는 가정에서 흔히 쓰는 예시입니다. 질감과 맛은 그날 상태에 맞춰 고르세요."},{"type":"ul","items":["죽·미음 — 물 대신 우유나 두유로 끓이고, 불을 끄기 직전 달걀을 풀어 넣거나 으깬 두부를 섞습니다.","국·찌개 — 건더기로 두부, 달걀, 연한 살코기나 흰살생선을 작게 썰어 넣어 국물만 마시는 날에도 단백질이 따라오게 합니다.","밥 — 진밥이나 비빔에 참기름·들기름을 한두 방울 더하면 열량이 오르고 목 넘김이 부드러워집니다.","간식 — 플레인 요거트에 바나나를 으깨 넣거나, 우유에 곡물 가루를 타서 마시는 식으로 한 컵에 두 가지를 담습니다.","달걀찜·스크램블 — 우유를 조금 넣고 부드럽게 익히면 입안이 불편한 날에도 비교적 먹기 쉽습니다."]},{"type":"p","text":"당뇨, 신장 질환, 지방 소화 문제처럼 따로 식이 제한을 안내받은 경우에는 기름·당·단백질을 더하는 방법이 맞지 않을 수 있습니다. 삼키기가 어렵다면 견과류나 딱딱한 재료는 피하고 질감을 먼저 의료진과 확인하세요."},{"type":"h2","id":"small-meals","text":"세 끼 대신 작은 끼니 여섯 번 — 시간표로 정해 둡니다"},{"type":"p","text":"배고픔을 잘 느끼지 못하는 시기에는 「배고프면 먹자」가 잘 통하지 않습니다. 하루를 작은 끼니 5~6번으로 나누고 시각을 미리 정해 두면, 식사 사이가 길어져 하루 섭취가 크게 비는 일을 줄일 수 있습니다. 아래는 하나의 예시이며, 치료 일정과 생활 리듬에 맞춰 바꿔 쓰면 됩니다."},{"type":"h3","text":"작은 끼니 시간표 예시"},{"type":"ul","items":["아침(7~8시) — 달걀을 푼 우유죽 반 공기","오전 간식(10시) — 요거트 작은 컵과 과일 몇 조각","점심(12~13시) — 진밥 반 공기와 두부·생선 반찬 한 가지","오후 간식(15~16시) — 우유나 두유 한 컵, 또는 안내받은 영양음료","저녁(18~19시) — 부드러운 국이나 찜 요리와 밥 조금","자기 전(21시, 원할 때만) — 따뜻한 우유나 미숫가루 한 컵"]},{"type":"p","text":"물은 식사 중에 많이 마시면 금방 배가 불러 먹는 양이 줄 수 있어, 끼니 사이에 나눠 마시는 편이 낫다는 안내가 많습니다. 다만 수분 섭취량에 대해 따로 안내받았다면 그 기준을 따르세요."},{"type":"h2","id":"ons-evidence","text":"영양음료(경구 영양보충)는 도움이 될까 — 연구가 말하는 것"},{"type":"p","text":"음식만으로 부족할 때 흔히 권유받는 것이 열량과 단백질을 농축한 영양음료, 곧 경구 영양보충입니다. 연구 결과는 「도움이 될 수 있지만 만능은 아니다」 쪽에 가깝습니다."},{"type":"p","text":"영양불량이거나 영양 위험이 있는 암 환자를 대상으로 한 무작위 시험 13건(1,414명)을 모은 메타분석에서, 식이 상담이나 영양음료 같은 경구 영양 중재는 일반 진료보다 하루 섭취 열량(평균 약 432kcal)과 체중(평균 약 1.86kg)을 늘린 것으로 나타났습니다. 다만 연구 간 차이가 큰 원인을 걸러 내자 이 차이는 통계적으로 뚜렷하지 않았고, 삶의 질 일부 항목(정서 기능, 식욕 저하 등)은 나아졌지만 사망률에는 차이가 없었습니다 [1]."},{"type":"p","text":"항암·방사선치료 기간에 한정한 무작위 시험 11건의 메타분석에서도 영양 중재 전체로는 체중이 평균 1.31kg 더 유지되었습니다. 흥미로운 점은 일반 상담이나 고열량 영양음료만 쓴 하위 그룹에서는 뚜렷한 차이가 없었는데, 연구진은 그 이유로 실제로 마신 양이 목표에 못 미친 점(순응도)을 꼽았습니다. 단백질과 오메가-3 지방산을 강화한 영양음료를 쓴 연구들에서는 체중 차이가 관찰되었지만, 연구 수가 적고 규모가 작아 치료 부작용이나 생존에 대한 효과는 확인되지 않았습니다 [2]."},{"type":"callout","tone":"info","title":"읽을 때 기억할 점","text":"위 연구들은 집단의 평균을 보여 줍니다. 어떤 영양음료가 나에게 맞는지, 하루 몇 번이 적당한지는 진단명·치료 내용·혈당·신장 기능 등에 따라 달라지므로 담당 의료진과 영양사가 판단합니다."},{"type":"h2","id":"ons-tips","text":"영양음료를 꾸준히 마시는 요령"},{"type":"p","text":"연구에서 효과를 가른 것이 「꾸준히 마셨는가」였던 만큼, 실제 생활에서는 마시기 쉬운 방법을 찾는 것이 중요합니다. 의료진이나 영양사가 영양음료를 권했다면 다음을 참고하세요."},{"type":"ul","items":["한 번에 한 병을 다 마시려 하지 말고 서너 번에 나눠 마십니다.","차갑게 하면 맛과 냄새가 덜 느껴진다는 분이 많습니다. 반대로 따뜻한 쪽이 편하다면 제품 안내에 맞는 방법인지 확인합니다.","식사 직전보다 끼니 사이에 마셔 식사량을 빼앗지 않게 합니다.","맛에 질리면 다른 맛으로 바꾸거나, 안내받은 범위에서 죽·수프에 섞어 쓰는 방법을 영양사에게 물어봅니다.","개봉 후 보관 시간과 온도는 제품 표시를 따르고, 오래 실온에 둔 것은 마시지 않습니다.","식사를 영양음료로 모두 대신하기보다, 먹을 수 있는 음식은 계속 먹으면서 부족한 부분을 메우는 용도로 씁니다."]},{"type":"h2","id":"beyond-intake","text":"먹는 양이 늘어도 끝이 아닌 이유"},{"type":"p","text":"영양 위험이 있는 외래 암 환자 58명을 무작위로 나눈 스위스의 연구에서, 영양사 상담·음식 보강·필요 시 영양음료를 3개월간 제공받은 군은 일반 진료군보다 하루 열량(약 379kcal)과 단백질(약 10.4g) 섭취가 늘었습니다. 하지만 체중 같은 영양 상태, 신체 기능, 삶의 질은 뚜렷이 달라지지 않았고, 연구진은 영양 상태가 이미 나빠진 뒤에 시작한 영양 관리만으로는 한계가 있다고 해석했습니다 [3]."},{"type":"p","text":"이 결과가 전하는 메시지는 두 가지입니다. 첫째, 먹는 양이 줄기 시작한 초기에 손을 쓰는 편이 낫습니다. 둘째, 식단은 활동량 유지, 증상 조절, 정기적인 체중 확인과 한 묶음일 때 의미가 커집니다. 식단만 바꾸고 체중이 계속 내려간다면 기다리지 말고 다음 진료 전에라도 치료팀에 알리세요."},{"type":"h2","id":"call","text":"이럴 땐 식단 조정보다 먼저 연락하세요"},{"type":"ul","items":["하루 이상 물이나 음식을 거의 넘기지 못할 때","구토가 반복되어 먹은 것을 계속 게워 낼 때","입안이나 목이 아파 삼키기가 어려울 때","어지럽고 소변 양이 눈에 띄게 줄었을 때(탈수 의심)","몇 주 사이 체중이 계속 빠지거나 옷이 눈에 띄게 헐거워졌을 때","열이 나거나 평소와 다른 심한 증상이 함께 있을 때"]},{"type":"p","text":"이런 신호는 식단을 바꿔 해결할 문제가 아닐 수 있습니다. 증상 조절이나 수액, 다른 영양 지원이 필요한지 판단은 의료진의 몫입니다."},{"type":"h2","id":"app","text":"온코케어 AI로 작은 끼니를 기록하는 법"},{"type":"p","text":"작은 끼니를 여러 번 먹으면 하루에 얼마나 먹었는지 기억하기가 오히려 어렵습니다. 온코케어 AI의 영양 관리 기능에서 끼니마다 식사 사진을 남기면 영양 상태를 함께 살피고 부족할 수 있는 영양소를 안내합니다. 영양음료를 몇 번에 나눠 얼마나 마셨는지, 그날의 구역이나 입맛 변화를 증상 체크인에 함께 적어 두면 「어떤 날 무엇이 잘 넘어갔는지」가 쌓여 다음 주기 식단을 짤 때 참고가 됩니다. 가족·보호자 연결 기능으로 식사를 준비하는 보호자와 같은 기록을 볼 수도 있습니다. 앱은 식단을 정해 주는 도구가 아니라 기록을 정리하는 도구입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내입니다. 영양음료 사용 여부와 종류, 식이 제한, 개인의 열량·단백질 목표는 담당 의료진·영양사와 상의해 정하세요."}],"faq":[{"q":"입맛이 없을 때 항암 식단은 어떻게 바꾸면 좋나요?","a":"양을 늘리려 애쓰기보다 같은 양에 열량과 단백질을 더하는 쪽이 부담이 적습니다. 죽을 우유로 끓이고 달걀이나 두부를 더하는 식의 음식 보강, 하루 5~6번의 작은 끼니가 흔히 쓰이는 방법입니다. 식이 제한이 있다면 먼저 의료진과 상의하세요."},{"q":"영양음료는 언제부터 마셔야 하나요?","a":"정해진 시점이 따로 있지는 않습니다. 음식만으로 평소 섭취량을 채우기 어려운 상태가 이어지거나 체중이 줄기 시작하면 의료진·영양사가 영양음료를 포함한 영양 지원을 검토합니다. 혈당이나 신장 기능 등에 따라 맞는 제품이 다르므로 임의로 고르기보다 상담을 받는 것이 안전합니다."},{"q":"영양음료를 마시면 체중이 늘어나나요?","a":"연구에서는 경구 영양 중재가 섭취 열량과 체중을 늘리는 데 도움이 될 수 있다는 결과가 있지만, 개인차가 크고 꾸준히 마시지 못하면 효과가 줄었습니다. 체중 변화는 치료와 증상에도 영향을 받으므로 기록해 두었다가 진료 때 함께 확인하세요."},{"q":"작은 끼니를 자주 먹으면 소화에 무리가 가지 않나요?","a":"한 번에 많이 먹는 것보다 위의 부담이 적다고 느끼는 분이 많습니다. 다만 속쓰림이나 더부룩함이 심해지면 끼니 간격과 음식 종류를 조정하고, 증상이 계속되면 치료팀에 알리세요."},{"q":"온코케어 AI가 영양음료를 추천해 주나요?","a":"아니요. 온코케어 AI는 식사 사진 기록과 부족할 수 있는 영양소 안내, 증상 기록을 돕는 정보·기록 도구입니다. 영양음료 사용 여부와 종류는 담당 의료진·영양사가 판단합니다."}],"references":[{"label":"Baldwin C, et al. Oral nutritional interventions in malnourished patients with cancer: a systematic review and meta-analysis. J Natl Cancer Inst 2012;104(5):371-85 (PMID 22345712)","url":"https://pubmed.ncbi.nlm.nih.gov/22345712/"},{"label":"de van der Schueren MAE, et al. Systematic review and meta-analysis of the evidence for oral nutritional intervention on nutritional and clinical outcomes during chemo(radio)therapy: current evidence and guidance for design of future trials. Ann Oncol 2018;29(5):1141-1153 (PMID 29788170)","url":"https://pubmed.ncbi.nlm.nih.gov/29788170/"},{"label":"Uster A, et al. Influence of a nutritional intervention on dietary intake and quality of life in cancer patients: a randomized controlled trial. Nutrition 2013;29(11-12):1342-9 (PMID 24103511)","url":"https://pubmed.ncbi.nlm.nih.gov/24103511/"}],"related":["chemo-diet-management-weekly-plan","chemo-nutrition-management-checklist","chemo-taste-change-appetite-care"]},
  // 2026-10-07 추가 — 사용자 지시 키워드 「항암 영양관리」「항암 식단 관리」「항암 임상 정보」(네이버 SERP 실측 후). 근거 칼럼(references).
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-07","updatedAt":"2026-10-07","appLinks":true,"slug":"chemo-nutrition-management-checklist","title":"항암 영양관리, 체중·단백질·섭취량 세 가지로 점검하는 법","description":"항암 영양관리는 많이 먹는 일보다 체중·단백질·섭취량을 정기적으로 확인하는 일에 가깝습니다. 유럽임상영양대사학회(ESPEN) 지침의 기준과 집에서 쓰는 주간 점검표, 영양 상담을 요청할 신호를 정리했습니다.","category":"영양","categoryColor":"#B9560C","readMin":7,"hero":"chemo-nutrition-management","heroAlt":"항암 영양관리 — 두부와 채소를 넣은 죽 한 그릇과 물 한 잔이 놓인 식탁","tldr":["항암 영양관리의 출발점은 체중·단백질·섭취량 세 가지를 같은 방식으로 꾸준히 적는 것입니다.","ESPEN 지침은 일반적인 단백질 목표를 하루 체중 1kg당 1g 이상, 가능하면 1.5g까지로 제시합니다 — 개인 목표는 의료진·영양사와 정합니다.","섭취가 크게 줄어든 상태가 1~2주 이어지거나 체중이 계속 내려가면 기다리지 말고 영양 상담을 요청하세요."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 항암 영양관리를 「무엇을 먹을까」가 아니라 「무엇을 확인할까」의 관점에서 정리합니다."},{"type":"h2","id":"why-check","text":"항암 영양관리가 「점검」에서 시작하는 이유"},{"type":"p","text":"유럽임상영양대사학회(ESPEN)의 암 환자 영양 지침은 영양불량과 근육 감소가 암 환자에게 흔하고 치료 경과에 나쁜 영향을 준다고 정리합니다. 원인으로는 먹는 양의 감소, 활동량 감소, 그리고 종양이나 치료가 만드는 대사 변화가 함께 꼽힙니다. 그래서 지침은 모든 암 환자를 정기적으로 영양 위험에 대해 선별하고, 필요한 경우 상담부터 시작해 단계적으로 영양 지원을 넓히도록 권고합니다."},{"type":"p","text":"점검이 먼저인 이유는 단순합니다. 치료 중에는 하루하루 컨디션이 달라서 「요즘 좀 덜 먹는 것 같다」는 느낌만으로는 변화의 크기를 알기 어렵습니다. 같은 기준으로 적어 둔 숫자가 있어야 진료실에서 「얼마나, 언제부터」를 설명할 수 있고, 의료진도 영양 상담이나 보충이 필요한 시점을 판단할 수 있습니다."},{"type":"p","text":"개별 영양 관리의 효과를 살핀 연구도 있습니다. 위장관이나 두경부 부위에 방사선치료를 받는 외래 환자 60명을 무작위로 나눈 연구에서, 영양사의 개별 상담(필요하면 경구 영양보충 포함)을 받은 군은 일반 안내만 받은 군보다 체중 감소와 영양 상태 악화, 삶의 질 저하가 더 작았습니다. 연구진은 이 시기에는 체중을 늘리는 것보다 유지하는 것이 더 적절한 목표일 수 있다고 제시했습니다."},{"type":"h2","id":"weight","text":"점검 1 — 체중: 숫자보다 변화의 속도"},{"type":"p","text":"체중은 가장 쉽게 얻을 수 있는 영양 지표입니다. 다만 하루 이틀의 오르내림은 수분 때문에 생기는 경우가 많아, 한 번의 값보다 몇 주에 걸친 흐름을 봐야 합니다."},{"type":"ul","items":["일주일에 한 번, 같은 요일 아침에, 화장실을 다녀온 뒤 같은 옷차림으로 잽니다.","치료 시작 전 평소 체중을 기준값으로 적어 둡니다. 기억이 정확하지 않다면 최근 건강검진 기록을 참고합니다.","변화는 kg과 함께 비율로도 적습니다. 예를 들어 평소 60kg에서 57kg이 되었다면 3kg, 약 5% 감소입니다.","다리나 배가 붓는 날은 체중이 실제 영양 상태보다 높게 나올 수 있으니 붓기 여부를 같이 메모합니다."]},{"type":"h2","id":"protein","text":"점검 2 — 단백질: 하루 목표를 끼니로 나누기"},{"type":"p","text":"ESPEN 지침은 암 환자의 일반적인 단백질 섭취 목표를 하루 체중 1kg당 1g 이상, 가능하면 1.5g까지로 제시하고, 에너지는 대략 체중 1kg당 25~30kcal를 출발점으로 삼습니다. 체중 60kg이라면 단백질은 하루 약 60~90g 범위가 됩니다. 신장 기능이나 동반 질환에 따라 목표가 달라질 수 있으므로, 실제 목표는 담당 의료진·영양사와 정하는 것이 원칙입니다."},{"type":"p","text":"하루 목표를 한 번에 채우려 하면 부담이 큽니다. 세 끼와 간식에 나눠 매번 단백질 식품이 하나씩 들어가는지만 확인해도 점검이 됩니다. 달걀, 두부, 생선, 살코기, 우유·요거트처럼 부드럽고 익숙한 식품이 치료 중에는 다루기 쉽습니다."},{"type":"ul","items":["오늘 단백질 식품이 들어간 끼니는 몇 번이었나 (0~4회 이상)","고기가 역하게 느껴진 날에는 무엇으로 대신했나","식사를 거의 못 한 날, 마시는 형태(우유·두유·균형영양음료 등)로 보충했나"]},{"type":"h2","id":"intake","text":"점검 3 — 섭취량: 평소의 몇 분의 몇으로 적기"},{"type":"p","text":"칼로리를 매번 계산할 필요는 없습니다. 끼니마다 평소 양과 비교해 「전부 / 절반 정도 / 절반 미만 / 거의 못 먹음」으로 적으면 충분합니다. 이렇게 적어 두면 섭취가 줄어든 기간이 며칠째인지 바로 보입니다."},{"type":"p","text":"ESPEN 지침은 먹는 양이 필요량에 크게 못 미치는 상태가 1~2주 이어지는 것을 영양 지원을 검토할 신호로 다룹니다. 상담과 식사 조정으로 시작하고, 그래도 부족하면 경구 영양보충, 그 이상은 의료진 판단에 따라 다른 경로를 고려하는 순서입니다. 어느 단계가 필요한지는 집에서 정할 일이 아니라, 기록을 가지고 의료진과 상의할 일입니다."},{"type":"callout","tone":"info","title":"주간 영양 점검표 — 일요일 저녁 5분","text":"① 이번 주 체중과 평소 대비 변화(kg·%) ② 절반 미만으로 먹은 날 수 ③ 단백질 식품이 들어간 끼니 수(하루 평균) ④ 식사를 방해한 증상(구역·입맛 변화·입안 통증·설사·변비 등) ⑤ 하루 걷기·활동량. 다섯 줄을 다음 진료 때 그대로 보여 주면 됩니다."},{"type":"h2","id":"ask","text":"이럴 땐 영양 상담을 요청하세요"},{"type":"ul","items":["주간 점검에서 체중이 몇 주 연속 줄어들고 있을 때","절반 미만으로 먹은 날이 한 주에 여러 번 반복될 때","삼키기 어렵거나 입안 통증 때문에 물 외에는 넘기기 힘들 때","구토나 설사가 이어져 먹은 것이 유지되지 않을 때","기운이 눈에 띄게 떨어져 평소 하던 일상 동작이 힘들어졌을 때"]},{"type":"p","text":"발열, 호흡 곤란, 멈추지 않는 구토처럼 즉시 연락해야 하는 증상은 영양 점검과 별개로 바로 치료팀에 알립니다."},{"type":"h2","id":"move","text":"영양관리는 움직임과 한 묶음입니다"},{"type":"p","text":"ESPEN 지침은 영양 관리를 운동·신체 활동과 함께 진행하도록 권고합니다. 먹은 단백질이 근육 유지로 이어지려면 몸을 쓰는 시간이 있어야 하기 때문입니다. 치료 중에는 컨디션이 좋은 날 짧게 걷는 정도부터 시작하고, 강도는 담당 의료진과 상의해 정합니다."},{"type":"h2","id":"app","text":"온코케어 AI로 기록을 이어 가는 방법"},{"type":"p","text":"온코케어 AI의 영양 관리 기능은 식사 사진을 기록해 영양 상태를 함께 살피고 부족할 수 있는 영양소를 안내합니다. 증상 체크인에는 구역·입맛 변화처럼 식사를 방해한 증상을 함께 남길 수 있고, 가족·보호자 연결 기능을 쓰면 식사를 챙기는 보호자도 같은 기록을 볼 수 있습니다. 앱이 개인의 영양 목표나 보충 방법을 정해 주지는 않습니다. 기록은 영양 상담과 진료에서 쓰기 위한 자료입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내입니다. 개인의 영양 목표, 영양보충 여부와 방법은 반드시 담당 의료진·영양사와 상의해 정하세요."}],"faq":[{"q":"항암 영양관리는 언제부터 시작해야 하나요?","a":"치료를 시작할 때부터가 좋습니다. ESPEN 지침은 모든 암 환자를 정기적으로 영양 위험에 대해 선별하도록 권고합니다. 집에서는 첫 치료 전에 평소 체중을 기준값으로 적어 두고, 매주 같은 방식으로 체중과 섭취량을 기록하는 것으로 시작하면 됩니다."},{"q":"단백질은 하루에 얼마나 먹어야 하나요?","a":"ESPEN 지침의 일반 기준은 하루 체중 1kg당 1g 이상, 가능하면 1.5g까지입니다. 체중 60kg이라면 약 60~90g입니다. 다만 신장 기능이나 동반 질환에 따라 달라질 수 있으므로 개인 목표는 담당 의료진·영양사와 정하세요."},{"q":"체중이 줄지 않으면 영양관리가 잘 되고 있는 건가요?","a":"체중만으로는 부족합니다. 붓기 때문에 체중이 유지되는 것처럼 보이거나, 지방은 유지되는데 근육이 줄어드는 경우도 있습니다. 섭취량, 단백질 끼니 수, 활동량을 함께 적어 두면 더 정확하게 상의할 수 있습니다."},{"q":"영양제나 건강기능식품을 따로 먹어도 되나요?","a":"일부 제품은 치료 약과 상호작용할 수 있습니다. 먹고 있거나 먹으려는 제품의 이름과 성분표를 그대로 의료진이나 약사에게 보여 주고 확인받은 뒤 결정하세요."},{"q":"온코케어 AI가 식단이나 영양 목표를 정해 주나요?","a":"아니요. 온코케어 AI는 식사 사진 기록과 부족할 수 있는 영양소 안내, 증상 기록을 돕는 정보·기록 도구입니다. 개인의 영양 목표와 보충 방법은 담당 의료진·영양사가 판단합니다."}],"references":[{"label":"Arends J, et al. ESPEN guidelines on nutrition in cancer patients. Clin Nutr 2017;36(1):11-48 (PMID 27637832)","url":"https://pubmed.ncbi.nlm.nih.gov/27637832/"},{"label":"Isenring EA, et al. Nutrition intervention is beneficial in oncology outpatients receiving radiotherapy to the gastrointestinal or head and neck area. Br J Cancer 2004;91(3):447-52 (PMID 15226773)","url":"https://pubmed.ncbi.nlm.nih.gov/15226773/"},{"label":"국가암정보센터 — 암환자 생활백서 · 치료 중의 식생활(일반적인 식생활)","url":"https://www.cancer.go.kr/lay1/S1T471C472/contents.do"}],"related":["eating-well-during-chemo","chemo-diet-management-weekly-plan","cancer-exercise-when-to-start"]},
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-07","updatedAt":"2026-10-07","appLinks":true,"slug":"chemo-diet-management-weekly-plan","title":"항암 식단 관리, 치료 주기에 맞춰 일주일 식단 짜는 법","description":"항암 식단 관리는 매 끼니를 새로 고민하는 일이 아니라 치료 주기에 맞춰 미리 짜 두는 일입니다. 투여 직후와 회복기에 다르게 준비하는 법, 한 끼 구성, 부작용별 조정, 배달 식단을 고를 때 볼 점을 정리했습니다.","category":"영양","categoryColor":"#B9560C","readMin":7,"hero":"chemo-diet-weekly-plan","heroAlt":"항암 식단 관리 — 부드러운 채소 두부죽과 나물 반찬으로 차린 한 끼","tldr":["항암 식단 관리는 치료 주기 안에서 먹기 힘든 날과 나아지는 날을 나눠 미리 준비하는 것이 핵심입니다.","한 끼는 단백질 한 가지를 먼저 정하고, 곡물·채소를 먹을 수 있는 만큼 더하는 순서로 구성합니다.","식단은 개인의 치료·검사 결과에 따라 달라지므로 담당 의료진·영양사의 안내가 우선입니다."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 항암 식단 관리를 치료 주기에 맞춘 일주일 계획으로 풀어 봅니다."},{"type":"h2","id":"cycle","text":"항암 식단 관리는 「주기」로 생각합니다"},{"type":"p","text":"많은 항암 치료는 투여일과 쉬는 기간이 반복되는 주기로 진행됩니다. 그래서 먹는 일도 주기를 탑니다. 투여 직후 며칠은 구역이나 피로, 입맛 변화로 먹기 힘들고, 다음 투여가 가까워지면 조금씩 나아지는 패턴을 겪는 분이 많습니다. 다만 약제와 개인에 따라 시기와 정도는 크게 다르므로, 첫 한두 주기에 자신의 패턴을 기록해 두는 것이 식단 계획의 출발점입니다."},{"type":"p","text":"ESPEN의 암 환자 임상영양 실무 지침은 영양 지원의 첫 단계로 개인에 맞춘 영양 상담과 식사 조정을 제시합니다. 방사선치료를 받는 대장암 환자를 대상으로 한 무작위 연구에서도 개인별 식이 상담을 받은 군은 방사선치료 종료 시점의 섭취량과 삶의 질 지표가 개선되었고, 그 효과가 치료 3개월 뒤까지 유지되었습니다. 정해진 「항암 식단표」를 그대로 따르기보다, 내 상태에 맞춰 조정하는 과정 자체가 관리라는 뜻입니다."},{"type":"h2","id":"week","text":"일주일 계획 — 힘든 날과 나아지는 날을 나눠 준비"},{"type":"h3","text":"투여 당일부터 먹기 힘든 며칠"},{"type":"ul","items":["새로 조리하기보다 미리 만들어 소분해 둔 음식을 데우거나 차게 꺼내 먹는 날로 정합니다.","냄새가 적고 부드러운 음식(죽, 달걀찜, 두부, 미음, 요거트 등)을 냉장·냉동해 둡니다.","한 번에 많이보다 조금씩 자주 — 2~3시간 간격으로 작은 양을 정해 둡니다.","물과 음료는 식사 사이에 나눠 마셔 탈수를 막습니다(수분 제한 안내를 받은 경우는 그에 따릅니다)."]},{"type":"h3","text":"입맛이 돌아오는 회복기"},{"type":"ul","items":["단백질 반찬과 채소를 다시 늘리고, 다음 투여 주간에 먹을 음식을 이때 미리 만들어 둡니다.","장보기는 이 시기에 몰아서 하고, 보호자와 메뉴를 나눠 정해 두면 힘든 날 결정할 일이 줄어듭니다.","지난 주기에 잘 넘어갔던 음식 목록을 다음 주기 계획에 그대로 옮겨 적습니다."]},{"type":"h2","id":"plate","text":"한 끼 구성 — 단백질을 먼저 정한다"},{"type":"svg","name":"plate"},{"type":"p","text":"한 접시를 채소·과일 절반, 단백질 4분의 1, 곡물 4분의 1로 나누는 그림은 균형을 떠올리는 데 도움이 됩니다. 하지만 치료 중 입맛이 없을 때는 이 비율을 다 채우기 어렵습니다. 그럴 때는 순서를 바꿉니다. 먼저 이번 끼니의 단백질 한 가지를 정하고(달걀·두부·생선·살코기·유제품 중), 그다음 밥이나 죽, 마지막으로 먹을 수 있는 만큼의 채소를 더하는 방식입니다."},{"type":"h2","id":"adjust","text":"부작용별로 식단을 조정하는 방향"},{"type":"ul","items":["구역이 있을 때 — 향이 강하거나 기름진 음식보다 미지근하거나 차가운 음식, 마른 크래커나 토스트처럼 담백한 것을 소량씩","입맛이 변했을 때 — 고기가 역하면 다른 단백질로 대체하고, 새콤한 맛이나 허브로 향을 조정(입안이 헐었다면 피함)","입안이 헐었을 때 — 뜨겁고 맵고 거친 음식 대신 부드럽고 미지근한 음식, 국물이나 소스로 촉촉하게","설사가 있을 때 — 수분 보충을 우선하고 기름진 음식은 줄이며, 횟수와 탈수 신호를 기록","변비가 있을 때 — 수분과 활동량을 함께 늘리고, 식이섬유는 상태에 맞게 서서히 조정"]},{"type":"p","text":"각 증상의 자세한 관리와 연락 기준은 매거진의 증상별 글에 따로 정리되어 있습니다. 증상이 심하거나 오래가면 식단 조정만으로 버티지 말고 치료팀에 알리세요."},{"type":"h2","id":"safety","text":"식품 위생과 약물 상호작용도 식단 관리입니다"},{"type":"p","text":"치료 중에는 감염에 약해지는 시기가 있습니다. 조리한 음식은 바로 먹거나 빠르게 냉장하고, 유통기한과 보관 온도를 지키며, 날음식이나 덜 익힌 음식은 담당 의료진의 안내에 따라 판단합니다. 혈구 수치가 낮다는 이야기를 들었다면 그 시기의 식품 위생 수칙을 따로 확인하세요. 또 자몽처럼 일부 약의 대사에 영향을 줄 수 있는 식품이 있으므로, 복용 중인 약과 함께 피해야 할 식품이 있는지 약사나 의료진에게 확인해 두면 안전합니다."},{"type":"h2","id":"delivery","text":"배달·도시락 식단을 고를 때 볼 점"},{"type":"p","text":"직접 조리하기 어려울 때 환자용 도시락이나 배달 식단을 이용하는 것도 방법입니다. 고를 때는 광고 문구보다 다음 항목을 확인합니다."},{"type":"ul","items":["한 끼의 단백질 양과 열량이 표시되어 있는가","죽·부드러운 식단 등 질감을 고를 수 있는가","나트륨·당 함량과 원재료가 공개되어 있는가","배송·보관 온도와 소비기한이 분명한가","특정 식품이 암을 치료하거나 막는다고 단정하는 표현을 쓰지 않는가"]},{"type":"h2","id":"app","text":"온코케어 AI로 식단 기록을 남기는 법"},{"type":"p","text":"온코케어 AI의 영양 관리 기능에서 식사 사진을 남기면 영양 상태를 함께 살피고 부족할 수 있는 영양소를 안내합니다. 증상 체크인에 투여 후 며칠째 어떤 증상이 있었는지 함께 적어 두면, 다음 주기 식단을 짤 때 「언제 무엇이 잘 넘어갔는지」를 되짚기 쉽습니다. 가족·보호자 연결 기능으로 식사를 준비하는 보호자와 기록을 함께 볼 수 있습니다. 앱은 식단을 정해 주는 도구가 아니라 기록을 정리하는 도구입니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 정보·교육 목적의 일반적인 안내입니다. 개인의 식단, 피해야 할 음식, 영양보충 여부는 담당 의료진·영양사와 상의해 정하세요."}],"faq":[{"q":"항암 식단 관리는 어떻게 시작하면 되나요?","a":"첫 한두 주기 동안 투여 후 며칠째 먹기 힘들었는지, 무엇이 잘 넘어갔는지를 기록하는 것부터 시작하세요. 그 패턴을 바탕으로 힘든 날에 먹을 음식을 회복기에 미리 준비해 두는 일주일 계획을 세우면 됩니다."},{"q":"항암에 좋은 음식이 따로 있나요?","a":"특정 식품 하나에 치료 효과를 기대하기보다, 끼니를 거르지 않고 단백질과 열량을 꾸준히 채우는 것이 치료 중 식단의 목표입니다. 특정 식품이나 제품을 많이 먹으려 한다면 먼저 담당 의료진과 상의하세요."},{"q":"배달 도시락으로 식단을 대신해도 되나요?","a":"조리가 어려울 때 도움이 될 수 있습니다. 단백질 양과 열량 표시, 질감 선택, 나트륨 함량, 보관 온도와 소비기한을 확인하고, 먹은 양을 기록해 두었다가 진료나 영양 상담 때 함께 보여 주세요."},{"q":"날음식이나 회를 먹어도 되나요?","a":"치료 시기와 혈구 수치에 따라 달라집니다. 감염 위험이 높은 시기에는 제한하는 경우가 있으므로, 담당 의료진이 안내한 기준을 따르세요."},{"q":"온코케어 AI가 항암 식단표를 만들어 주나요?","a":"아니요. 온코케어 AI는 식사 사진 기록과 부족할 수 있는 영양소 안내, 증상 기록을 돕는 정보·기록 도구입니다. 개인 식단은 담당 의료진·영양사가 판단합니다."}],"references":[{"label":"Muscaritoli M, et al. ESPEN practical guideline: Clinical Nutrition in cancer. Clin Nutr 2021;40(5):2898-2913 (PMID 33946039)","url":"https://pubmed.ncbi.nlm.nih.gov/33946039/"},{"label":"Ravasco P, et al. Dietary counseling improves patient outcomes: a prospective, randomized, controlled trial in colorectal cancer patients undergoing radiotherapy. J Clin Oncol 2005;23(7):1431-8 (PMID 15684319)","url":"https://pubmed.ncbi.nlm.nih.gov/15684319/"},{"label":"국가암정보센터 — 암환자 생활백서 · 치료 중의 식생활(건강식을 먹는 요령)","url":"https://www.cancer.go.kr/lay1/S1T474C475/contents.do"}],"related":["chemo-nutrition-management-checklist","chemo-taste-change-appetite-care","low-neutrophil-daily-life"]},
  {"author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","publishedAt":"2026-10-07","updatedAt":"2026-10-07","appLinks":true,"slug":"chemo-clinical-trial-info-search","title":"항암 임상 정보, 어디서 찾고 무엇을 확인할까 — 공식 조회 경로 4곳","description":"항암 임상 정보는 블로그 후기보다 공식 등록 사이트에서 확인하는 것이 정확합니다. 한국임상시험참여포털·의약품안전나라·질병관리청 CRIS·ClinicalTrials.gov의 차이와, 등록 정보를 읽는 법, 담당 의료진에게 가져갈 질문을 정리했습니다.","category":"임상시험","categoryColor":"#B9560C","readMin":7,"hero":"chemo-clinical-trial-info","heroAlt":"항암 임상 정보 확인 — 펼친 노트와 안경이 놓인 책상","tldr":["항암 임상 정보는 공식 등록 사이트 4곳(한국임상시험참여포털·의약품안전나라·CRIS·ClinicalTrials.gov)에서 확인할 수 있습니다.","등록 정보에서는 모집 상태, 단계, 선정·제외 기준, 실시 기관, 최종 업데이트 날짜를 먼저 봅니다.","검색 결과는 참여 가능 여부가 아니라 상의할 재료입니다 — 적격 여부는 담당 의료진과 시험 담당자가 판단합니다."],"blocks":[{"type":"p","text":"온코케어 AI는 항암 치료를 받는 환자와 보호자가 증상·식사·복약·검사 결과를 기록하고 정리하도록 돕는 모바일 앱입니다(Google Play·App Store 배포). 의학적 판단을 대신하지 않으며, 남긴 기록을 담당 의료진과 이야기할 때 쓰도록 정리해 주는 정보·기록 보조 도구입니다. 이 글은 특정 임상시험의 참여를 권하거나 연결하는 글이 아니며, 항암 임상 정보를 공식 경로에서 찾고 읽는 방법만 다룹니다."},{"type":"h2","id":"what","text":"「항암 임상 정보」로 찾는 것은 대개 세 가지입니다"},{"type":"ul","items":["내 암종과 치료 단계에 해당하는 임상시험이 지금 국내에서 진행되고 있는지","그 시험이 어떤 약이나 치료를 무엇과 비교하는지, 몇 상인지","어느 기관에서 진행하고 누구에게 문의하는지"]},{"type":"p","text":"이 세 가지는 카페 후기나 블로그보다 공식 등록 정보에 정확하게 나옵니다. 후기는 한 사람의 경험이라 모집이 이미 끝났거나 조건이 다른 시험일 수 있습니다. 임상시험이 무엇이고 단계가 어떻게 나뉘는지는 국가암정보센터의 「임상시험이란」 안내와 매거진의 임상시험 참여 가이드에 정리되어 있습니다."},{"type":"h2","id":"where","text":"공식 조회 경로 4곳 — 무엇이 다른가"},{"type":"h3","text":"1. 한국임상시험참여포털(국가임상시험지원재단)"},{"type":"p","text":"식품의약품안전처가 승인한 임상시험을 환자 입장에서 검색할 수 있도록 만든 포털입니다. 모집 중인 임상시험을 질환명으로 찾아볼 수 있어 처음 찾아보는 분이 시작하기 좋습니다."},{"type":"h3","text":"2. 의약품안전나라 임상시험 정보(식품의약품안전처)"},{"type":"p","text":"식약처의 임상시험 승인 정보를 공개하는 곳입니다. 승인 일자, 시험 제목, 단계, 의뢰자, 실시 기관 같은 승인 단위 정보를 확인할 수 있어, 포털에서 본 시험의 승인 내용을 대조할 때 유용합니다."},{"type":"h3","text":"3. 임상연구정보서비스 CRIS(질병관리청)"},{"type":"p","text":"국내에서 수행되는 임상연구를 등록·공개하는 국가 등록 시스템입니다. 의약품 시험뿐 아니라 연구자 주도 연구 등 다양한 임상연구가 등록되며, 등록 번호(KCT로 시작)로 같은 연구를 다른 곳에서 찾아 대조할 수 있습니다."},{"type":"h3","text":"4. ClinicalTrials.gov(미국 국립의학도서관)"},{"type":"p","text":"전 세계 임상시험을 가장 폭넓게 모아 둔 등록 사이트로, 국내 기관이 참여하는 다국가 시험도 여기에 함께 올라오는 경우가 많습니다. 미국은 일정 요건의 임상시험에 대해 등록과 결과 보고를 법으로 요구하고 있으며, 등록 정보와 함께 결과 데이터베이스도 운영됩니다. 영어 사이트지만 NCT로 시작하는 등록 번호와 국가(Korea) 조건으로 범위를 좁히면 읽을 항목이 크게 줄어듭니다."},{"type":"h2","id":"read","text":"등록 정보를 읽을 때 먼저 볼 다섯 항목"},{"type":"ul","items":["모집 상태 — 모집 중인지, 모집 예정인지, 모집이 끝나 진행만 하는지(영문: Recruiting, Not yet recruiting, Active, not recruiting, Completed)","단계 — 1상·2상·3상에 따라 시험의 목적이 다릅니다","선정·제외 기준 — 암종, 병기, 이전 치료 횟수, 특정 유전자 변이, 전신 상태 같은 조건이 적혀 있습니다","실시 기관과 연락처 — 국내 실시 기관이 포함되어 있는지 확인합니다","최종 업데이트 날짜 — 오래 갱신되지 않은 정보는 실제 모집 상황과 다를 수 있습니다"]},{"type":"callout","tone":"info","title":"검색 결과를 진료에 가져가는 법","text":"관심 있는 시험의 등록 번호(KCT 또는 NCT 번호), 시험 제목, 실시 기관을 한 장에 적어 다음 진료 때 보여 주세요. 등록 번호가 있으면 의료진이 같은 시험을 정확하게 찾아볼 수 있습니다."},{"type":"h2","id":"questions","text":"담당 의료진에게 확인할 질문"},{"type":"ul","items":["지금 제 치료 단계에서 임상시험을 함께 검토해 볼 시점인가요?","제가 찾아온 시험의 선정·제외 기준에 제가 해당될 가능성이 있나요?","이 시험에 참여한다면 지금 받는 치료 일정은 어떻게 되나요?","시험 기관이 다른 병원이라면 진료 기록은 어떻게 전달하나요?","참여하지 않는 경우 다음 치료 선택지는 무엇인가요?"]},{"type":"p","text":"임상시험 참여는 전적으로 본인의 선택이며, 실제 참여 가능 여부는 시험 담당 기관이 정한 절차(설명과 동의, 선별 검사 등)를 거쳐 판단됩니다. 온라인에서 찾은 정보만으로 참여 가능 여부를 단정하지 마세요."},{"type":"h2","id":"app","text":"온코케어 AI의 임상시험 찾기 기능"},{"type":"p","text":"온코케어 AI의 임상시험 찾기 기능은 앱에 입력한 프로필(암종 등)을 바탕으로 국내외 임상시험 후보를 검색해 보여 줍니다. AI 케어챗에서는 등록 정보의 어려운 용어를 출처를 표기해 쉬운 말로 설명받을 수 있습니다. 앱은 시험 신청을 대행하거나 특정 시험을 연결하지 않으며, 참여 적합성은 담당 의료진과 시험 담당자가 판단합니다."},{"type":"callout","tone":"warn","title":"안내","text":"이 글은 임상시험 정보를 찾는 방법에 대한 일반적인 안내이며, 특정 임상시험의 참여를 권유하거나 효과를 약속하지 않습니다. 참여 여부는 담당 의료진·시험 담당자와 충분히 상의해 결정하세요."}],"faq":[{"q":"항암 임상 정보는 어디서 볼 수 있나요?","a":"공식 등록 사이트 네 곳에서 확인할 수 있습니다. 환자용 검색은 한국임상시험참여포털, 식약처 승인 정보는 의약품안전나라 임상시험 정보, 국내 임상연구 등록 정보는 질병관리청 CRIS, 해외·다국가 시험은 ClinicalTrials.gov입니다."},{"q":"모집 중이라고 나오면 바로 참여할 수 있나요?","a":"아닙니다. 모집 중이라는 것은 시험이 대상자를 받고 있다는 뜻일 뿐입니다. 선정·제외 기준에 맞는지는 시험 기관의 설명·동의 절차와 선별 검사를 거쳐 판단되며, 지금 받는 치료와의 관계도 담당 의료진과 상의해야 합니다."},{"q":"ClinicalTrials.gov가 영어라 읽기 어렵습니다.","a":"등록 번호(NCT로 시작), 모집 상태, 국가 조건만 먼저 확인해도 범위가 크게 줄어듭니다. 등록 번호를 적어 담당 의료진에게 보여 주면 같은 시험을 정확히 확인할 수 있습니다."},{"q":"블로그나 카페의 임상 후기는 참고해도 되나요?","a":"경험을 이해하는 데는 도움이 될 수 있지만, 모집 상태와 조건은 시험마다 다르고 시간이 지나면 바뀝니다. 참여를 고민하는 시험의 정보는 반드시 공식 등록 정보와 담당 의료진을 통해 확인하세요."},{"q":"온코케어 AI가 임상시험에 신청해 주나요?","a":"아니요. 온코케어 AI는 프로필에 맞는 국내외 임상시험 후보를 검색해 보여 주는 정보 도구이며, 신청을 대행하거나 특정 시험을 연결하지 않습니다. 참여 적합성은 담당 의료진과 시험 담당자가 판단합니다."}],"references":[{"label":"국가임상시험지원재단 — 한국임상시험참여포털","url":"https://trialforme.konect.or.kr/"},{"label":"식품의약품안전처 의약품안전나라 — 임상시험 정보 검색","url":"https://nedrug.mfds.go.kr/searchClinic"},{"label":"질병관리청 — 임상연구정보서비스(CRIS)","url":"https://cris.nih.go.kr/cris/index/index.do"},{"label":"U.S. National Library of Medicine — ClinicalTrials.gov","url":"https://clinicaltrials.gov/"},{"label":"국가암정보센터 — 임상시험의 이해 · 임상시험이란","url":"https://www.cancer.go.kr/lay1/S1T303C304/contents.do"},{"label":"Zarin DA, et al. Trial Reporting in ClinicalTrials.gov - The Final Rule. N Engl J Med 2016;375(20):1998-2004 (PMID 27635471)","url":"https://pubmed.ncbi.nlm.nih.gov/27635471/"},{"label":"Zarin DA, et al. The ClinicalTrials.gov results database — update and key issues. N Engl J Med 2011;364(9):852-60 (PMID 21366476)","url":"https://pubmed.ncbi.nlm.nih.gov/21366476/"}],"related":["clinical-trials-guide","reading-lab-results","cancer-care-app-what-to-record"]},
  // 2026-09-20 추가 — 전 고객사 배치.
  {"slug":"cancer-return-to-work-planning","title":"치료를 마치고 일터로 돌아갈 때 — 준비와 속도를 정하는 법","description":"암 치료 후 복직을 준비할 때 고려할 체력·업무 조정·주변 소통을 단계별로 정리했습니다.","category":"마음 돌봄","categoryColor":"#B9560C","publishedAt":"2026-09-20","updatedAt":"2026-09-20","author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","readMin":6,"hero":"mind-care","heroAlt":"창가 책상에 놓인 노트와 달력","tldr":["담당 의료진과 복직 시점을 상의합니다.","현재 체력으로 하루 몇 시간 활동이 가능한지 가늠합니다.","남아 있는 증상이 업무에 어떤 영향을 줄지 정리합니다."],"blocks":[{"type":"p","text":"치료가 끝나면 「이제 예전처럼 돌아갈 수 있을까」를 생각하게 됩니다. 일터로 돌아가는 것은 회복의 중요한 부분이지만, 서두르면 오히려 오래 걸립니다."},{"type":"h2","id":"s1","text":"몸이 아직 회복 중입니다"},{"type":"p","text":"치료가 끝났다고 체력이 바로 돌아오지는 않습니다. 피로는 치료 후 가장 오래 남는 증상 중 하나이고, 몇 달에 걸쳐 서서히 좋아집니다. 이 시기를 고려하지 않고 이전과 같은 강도로 시작하면 무리가 됩니다."},{"type":"h2","id":"s3","text":"복직 전에 확인할 것"},{"type":"ul","items":["담당 의료진과 복직 시점을 상의합니다.","현재 체력으로 하루 몇 시간 활동이 가능한지 가늠합니다.","남아 있는 증상이 업무에 어떤 영향을 줄지 정리합니다.","정기 검진 일정과 근무 일정이 겹치지 않는지 확인합니다.","회사의 병가·단축근무 제도를 확인합니다."]},{"type":"h2","id":"s5","text":"단계적으로 늘리는 것이 원칙"},{"type":"p","text":"가능하다면 짧은 시간부터 시작하십시오. 주 며칠, 하루 몇 시간으로 시작해 몸의 반응을 보며 늘리는 방식이 안전합니다. 처음부터 전일 근무로 복귀하면 며칠 만에 지쳐 다시 쉬게 되는 경우가 있습니다."},{"type":"h2","id":"s7","text":"남아 있을 수 있는 증상"},{"type":"ul","items":["피로 — 가장 흔하고 오래갑니다.","집중력과 기억의 변화 — 치료 후 흔히 보고되는 어려움입니다.","손발 저림 — 세밀한 작업에 영향을 줄 수 있습니다.","관절이나 근육의 뻣뻣함","감염에 대한 주의 — 사람이 많은 환경에서의 고려"]},{"type":"h2","id":"s9","text":"업무 조정을 요청할 때"},{"type":"p","text":"무엇이 어려운지 구체적으로 말씀하시는 편이 조정을 받기 쉽습니다. 「몸이 안 좋다」보다 「오래 서 있는 것이 어렵다」, 「오후에 집중이 떨어진다」처럼 상황을 특정하면 현실적인 대안이 나옵니다."},{"type":"h2","id":"s11","text":"어디까지 알릴 것인가"},{"type":"p","text":"정해진 답은 없습니다. 업무 조정에 필요한 만큼만 알리는 분도 있고, 편하게 공유하는 분도 있습니다. 중요한 것은 본인이 편한 선을 정하는 것이며, 그 결정을 미리 해 두면 질문을 받았을 때 당황하지 않습니다."},{"type":"h2","id":"s13","text":"스스로 기록해 두면 좋은 것"},{"type":"ul","items":["하루 중 컨디션이 좋은 시간대","어떤 업무 뒤에 피로가 몰리는지","수면 시간과 회복 정도","증상이 심했던 날의 조건"]},{"type":"p","text":"이 기록이 쌓이면 근무 강도를 조절하는 근거가 되고, 진료에서도 구체적인 상담이 가능해집니다."},{"type":"h2","id":"s16","text":"돌아가지 않기로 정하는 것도 선택입니다"},{"type":"p","text":"이전 일로 복귀하는 것이 모두에게 정답은 아닙니다. 다른 형태의 일이나 시간을 고려하는 것도 회복의 한 방식입니다. 서둘러 결정하지 마시고 몸 상태를 보며 정하십시오."},{"type":"h2","id":"s18","text":"주변의 반응에 대비하기"},{"type":"p","text":"복직하면 「이제 괜찮아졌냐」는 질문을 여러 번 받게 됩니다. 매번 자세히 설명하기는 지치는 일입니다. 짧게 답할 문장을 하나 준비해 두시면 그 순간을 넘기기가 훨씬 수월합니다."},{"type":"p","text":"반대로 주변이 지나치게 조심스러워져 일을 주지 않는 상황도 생깁니다. 할 수 있는 일과 조정이 필요한 일을 분명히 말씀하시면 서로 편해집니다."},{"type":"h2","id":"s21","text":"제도를 미리 확인하기"},{"type":"p","text":"회사마다 병가, 휴직, 단축근무 제도가 다릅니다. 복직 전에 인사 담당 부서에 확인해 두시면 선택지가 넓어집니다. 「쉬거나 나가거나」 둘 중 하나로 생각하기 쉽지만 중간의 방법이 있는 경우가 많습니다."},{"type":"p","text":"필요한 서류가 있다면 진료 때 미리 요청하십시오. 발급에 시간이 걸리는 경우가 있어 복직 일정에 맞춰 준비하시는 편이 좋습니다."}],"faq":[{"q":"언제부터 일할 수 있나요","a":"치료 종류와 회복 상태에 따라 다릅니다. 담당 의료진과 상의해 시점을 정하시는 것이 원칙입니다."},{"q":"집중이 예전 같지 않습니다","a":"치료 후 흔히 보고되는 어려움입니다. 메모와 일정 관리 도구를 활용하고, 지속되면 진료에서 말씀하십시오."},{"q":"동료에게 말해야 하나요","a":"의무는 아닙니다. 업무 조정에 필요한 범위를 기준으로 정하시면 됩니다."},{"q":"무리했다는 신호는 무엇인가요","a":"다음 날까지 회복되지 않는 피로, 증상의 재발, 수면의 악화가 신호입니다. 강도를 낮추십시오."},{"q":"복직 후 검진은 어떻게 하나요","a":"정기 일정을 미리 확보해 두십시오. 검진을 미루지 않는 것이 중요합니다."},{"q":"휴직을 더 쓰는 것이 나을까요","a":"몸 상태와 회사 제도에 따라 다릅니다. 무리해서 복귀했다가 다시 쉬는 것보다 처음부터 여유를 두는 편이 나은 경우가 많습니다."}]},
  // 2026-09-20 추가 — 전 고객사 배치.
  {"slug":"cancer-sleep-hygiene-during-treatment","title":"치료 중 잠이 오지 않을 때 — 수면을 방해하는 요인부터 정리하기","description":"암 치료 과정에서 불면이 생기는 여러 원인과, 약에 의존하기 전에 조정할 수 있는 생활 요소를 정리했습니다.","category":"증상관리","categoryColor":"#B9560C","publishedAt":"2026-09-20","updatedAt":"2026-09-20","author":"온코케어 편집팀","reviewedBy":"온코케어 편집팀","readMin":6,"hero":"side-effect","heroAlt":"은은한 조명이 켜진 침실 협탁","tldr":["약물 — 일부 치료 약제와 스테로이드는 각성을 높입니다.","통증과 불편 — 자세를 바꾸기 어렵거나 특정 부위가 아플 때","속 불편 — 메스꺼움, 속쓰림"],"blocks":[{"type":"p","text":"치료를 받는 동안 잠을 제대로 못 자는 것은 매우 흔한 어려움입니다. 그런데 「걱정이 많아서」로만 설명되지 않는 경우가 많습니다. 원인을 나눠 보면 조정할 수 있는 부분이 보입니다."},{"type":"h2","id":"s1","text":"수면을 방해하는 요인들"},{"type":"ul","items":["약물 — 일부 치료 약제와 스테로이드는 각성을 높입니다.","통증과 불편 — 자세를 바꾸기 어렵거나 특정 부위가 아플 때","속 불편 — 메스꺼움, 속쓰림","야간 배뇨 — 수액이나 약의 영향","낮잠 — 피로해 낮에 오래 자면 밤 수면이 얕아집니다.","불안과 생각 — 검사 결과를 기다리는 시기에 특히"]},{"type":"h2","id":"s3","text":"스테로이드를 쓰는 날"},{"type":"p","text":"치료 일정에 따라 스테로이드를 함께 쓰는 경우, 그날 밤 잠들기 어려운 것이 흔합니다. 복용 시간을 조정할 수 있는지 담당 의료진에게 문의해 보십시오. 이유를 알면 불필요한 걱정이 줄어듭니다."},{"type":"h2","id":"s5","text":"낮의 습관이 밤을 정합니다"},{"type":"ul","items":["기상 시각을 일정하게 유지합니다. 잠든 시각과 무관하게 같은 시간에 일어납니다.","아침에 빛을 보십시오. 창가에 잠시 앉아 계시는 것으로도 도움이 됩니다.","낮잠은 30분 이내, 오후 이른 시간으로 제한합니다.","가능한 범위에서 몸을 움직입니다."]},{"type":"h2","id":"s7","text":"잠자리에서 하지 말 것"},{"type":"ul","items":["시계를 확인하는 것 — 몇 시인지 알면 조급해집니다.","휴대폰이나 태블릿 화면","잠이 오지 않는데 계속 누워 버티는 것","저녁 늦은 카페인과 과식"]},{"type":"p","text":"20분 이상 잠이 오지 않으면 잠자리에서 나와 조용한 활동을 하다 졸릴 때 다시 눕는 방법이 권장됩니다. 침대에서 뒤척이는 시간이 길어지면 잠자리 자체가 각성의 신호가 됩니다."},{"type":"h2","id":"s10","text":"기록이 도움이 되는 이유"},{"type":"p","text":"며칠간 잠든 시각, 깬 횟수, 낮잠, 그날의 약을 적어 보시면 패턴이 드러납니다. 「치료받은 날 밤에 특히 못 잔다」 같은 연결을 확인하면 대비할 수 있습니다."},{"type":"h2","id":"s12","text":"의료진에게 말씀하실 때"},{"type":"p","text":"「잠을 못 잔다」보다 「잠들기가 어렵다」, 「자다가 여러 번 깬다」, 「너무 일찍 깬다」를 구분해 말씀하시면 접근이 달라집니다. 각각 원인과 대응이 다르기 때문입니다."},{"type":"h2","id":"s14","text":"수면제를 쓸 때"},{"type":"p","text":"필요한 경우 도움이 됩니다. 다만 복용 중인 다른 약과의 관계를 확인해야 하므로 반드시 상의하십시오. 임의로 남은 약을 쓰거나 용량을 조절하지 마십시오."},{"type":"h2","id":"s16","text":"병실에서 지낼 때"},{"type":"p","text":"입원 중에는 소음과 조명, 활력징후 측정으로 수면이 자주 끊깁니다. 안대와 귀마개를 준비해 가시면 도움이 되고, 낮에 가능한 범위에서 몸을 움직이면 밤 수면의 질이 달라집니다."},{"type":"p","text":"병원의 일정에 맞추다 보면 이른 저녁에 잠들어 새벽에 깨는 패턴이 생기기 쉽습니다. 가능하면 취침 시각을 지나치게 앞당기지 마시고, 아침에는 커튼을 열어 빛을 들이십시오."},{"type":"h2","id":"s19","text":"보호자의 수면도 함께 무너집니다"},{"type":"p","text":"간병하는 가족은 환자의 수면에 맞춰 생활하게 됩니다. 밤에 여러 번 깨고 낮에 졸다 보면 보호자의 리듬도 함께 흔들립니다. 결국 둘 다 지칩니다."},{"type":"p","text":"가능하다면 교대할 사람을 정해 며칠에 한 번은 온전히 자는 밤을 확보하십시오. 보호자가 버티는 것이 환자에게도 도움이 됩니다."}],"faq":[{"q":"낮에 너무 피곤한데 자면 안 되나요","a":"짧은 낮잠은 괜찮습니다. 길어지면 밤 수면이 더 나빠지므로 시간을 정해 두십시오."},{"q":"잠을 못 자면 치료에 영향이 있나요","a":"수면 부족은 피로와 통증 인식에 영향을 줍니다. 회복을 위해서도 관리가 필요합니다."},{"q":"자기 전에 술을 마시면 도움이 되나요","a":"잠드는 데는 도움이 되는 듯하지만 수면의 질을 떨어뜨립니다. 치료 중에는 특히 권하지 않습니다."},{"q":"언제 상담해야 하나요","a":"몇 주 이상 이어져 낮 생활에 지장이 있으면 말씀하십시오. 참고 지낼 문제가 아닙니다."},{"q":"명상이나 호흡법이 효과가 있나요","a":"도움을 받는 분들이 있습니다. 잠들기 전 긴장을 낮추는 방법으로 시도해 보십시오."},{"q":"잠이 오지 않을 때 무엇을 하면 좋나요","a":"밝지 않은 조명에서 조용한 활동을 하다 졸릴 때 다시 누우십시오. 화면을 보는 것은 각성을 높여 권하지 않습니다."},{"q":"낮에 햇빛을 보는 것이 정말 도움이 되나요","a":"아침의 빛은 수면 리듬을 맞추는 데 관여합니다. 외출이 어려우면 창가에 잠시 앉아 계시는 것으로도 도움이 됩니다."}]},
  {
    // 2026-08-29 추가 — 확장 키워드 `면역항암제 부작용`. 기존 27건이 전부 세포독성 항암 축이라
    // 면역관문억제제 축이 통째로 비어 있었다(미커버 8건은 전부 가짜 갭으로 확인).
    slug: "immunotherapy-side-effects-irae",
    title: "면역항암제 부작용 — 세포독성 항암과 다른 이유, 무엇을 언제 알려야 하나",
    description:
      "면역항암제(면역관문억제제)의 부작용은 기존 항암제와 성격이 다릅니다. 왜 다른지, 언제 어디에 나타나는지, 어떤 신호를 지체 없이 알려야 하는지 국제 진료지침 근거로 정리했습니다.",
    category: "부작용관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-08-29",
    updatedAt: "2026-08-29",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 7,
    hero: "side-effect",
    heroAlt: "면역항암제 부작용 — 면역관련 이상반응이 나타나는 부위와 확인 신호",
    tldr: ["면역항암제 부작용은 <b>면역이 정상 장기를 공격</b>해 생깁니다 — 기존 항암제의 부작용과 기전이 다릅니다.","나타나는 <b>시기가 넓습니다</b> — 투여 직후가 아니라 몇 주~몇 개월 뒤에도 시작될 수 있습니다.","설사·발진·기침·심한 피로처럼 <b>흔한 증상처럼 보이는 것</b>이 첫 신호인 경우가 많습니다.","혼자 판단해 약을 쓰기 전에 알리는 것이 원칙 — 초기에 잡을수록 관리가 단순합니다."],
    blocks: [
      { type: "p", text: "면역항암제를 시작하면서 \"이건 부작용이 적다던데요\"라고 말씀하시는 분이 많습니다. 절반은 맞는 이야기입니다. 탈모나 심한 구역처럼 세포독성 항암제에서 흔한 부작용은 상대적으로 적습니다. 그런데 대신 <b>전혀 다른 종류의 부작용</b>이 생길 수 있고, 그것이 언제 어디에 나타날지가 넓게 열려 있습니다." },
      { type: "h2", id: "why", text: "왜 다른가 — 면역을 깨우는 약이기 때문입니다" },
      { type: "p", text: "세포독성 항암제는 빠르게 분열하는 세포를 직접 공격합니다. 그래서 부작용도 머리카락·점막·골수처럼 빨리 분열하는 조직에 몰려 나타나고, 시기도 투여 후 며칠 안에 비교적 예측 가능합니다." },
      { type: "p", text: "면역관문억제제는 방식이 다릅니다. 우리 몸의 면역이 암세포를 공격하지 못하도록 걸려 있던 <b>브레이크를 푸는</b> 약입니다. 브레이크가 풀린 면역은 암을 공격하지만, 때로는 <b>정상 장기까지 공격</b>합니다. 이렇게 생기는 것을 면역관련 이상반응(irAE)이라고 부릅니다. 즉 부작용이 아니라 <b>과하게 작동한 면역의 결과</b>에 가깝습니다." },
      { type: "h2", id: "where", text: "어디에 나타나나 — 사실상 전신입니다" },
      { type: "p", text: "면역이 공격할 수 있는 곳이라면 어디든 대상이 됩니다. 국제 진료지침들은 장기별로 나누어 관리 방법을 제시하고 있습니다." },
      { type: "ul", items: ["<b>피부</b> — 발진, 가려움. 가장 흔하고 대개 가장 먼저 나타납니다","<b>장</b> — 설사, 복통, 혈변(대장염)","<b>내분비</b> — 갑상선 기능 이상, 부신·뇌하수체 문제. 심한 피로로 시작되는 경우가 많습니다","<b>간</b> — 대개 증상 없이 혈액검사에서 먼저 확인됩니다","<b>폐</b> — 마른기침, 숨참(폐렴). 드물지만 중요한 축입니다","그 밖에 관절·신장·신경·심장 등 다양한 장기에서 보고됩니다"] },
      { type: "h2", id: "when", text: "언제 나타나나 — 시기가 넓습니다" },
      { type: "p", text: "가장 헷갈리는 부분입니다. 세포독성 항암제처럼 \"주사 맞고 며칠\"의 패턴이 아닙니다. 첫 투여 후 몇 주 안에 시작되는 경우도 있고, 몇 달이 지난 뒤 또는 <b>치료를 끝낸 뒤에</b> 나타나는 경우도 보고됩니다. 그래서 \"이제 괜찮겠지\" 하고 증상을 넘기다가 늦게 확인되는 일이 생깁니다. 치료 중은 물론 종료 후에도 새로운 증상이 생기면 면역항암제를 썼다는 사실을 의료진에게 알리는 것이 중요합니다." },
      { type: "callout", tone: "warn", title: "지체 없이 알려야 하는 신호", text: "하루 여러 차례의 설사나 혈변, 숨이 차거나 마른기침이 새로 생김, 소변량이 줄거나 색이 진해짐, 눈·피부가 노래짐, 심한 두통이나 시야 변화, 가라앉지 않는 극심한 피로, 넓게 번지는 발진이나 물집. 이 신호들은 다음 진료를 기다리기보다 먼저 연락하시는 편이 안전합니다." },
      { type: "h2", id: "selfcare", text: "스스로 약을 쓰기 전에 알려야 하는 이유" },
      { type: "p", text: "설사가 나면 지사제를, 발진이 생기면 가려움 약을 먼저 찾게 됩니다. 그런데 면역항암제를 쓰는 중에는 이 순서가 위험할 수 있습니다. 증상이 잠시 가려지면서 <b>진행 중인 대장염이나 다른 장기 문제를 늦게 발견</b>하게 되기 때문입니다. 국제 진료지침들은 이상반응의 중증도에 따라 치료 중단 여부와 스테로이드 사용을 단계적으로 정하고 있어, 판단의 출발점이 \"지금 어느 단계인가\"입니다. 그 판단은 증상을 감춘 상태에서는 할 수 없습니다." },
      { type: "h2", id: "record", text: "기록이 특히 중요한 이유" },
      { type: "p", text: "면역관련 이상반응은 시기가 넓고 증상이 평범해 보여서, <b>언제부터 어떻게 달라졌는지</b>가 판단의 핵심 정보가 됩니다. 진료 시간에 기억을 더듬어 말하기보다 짧게라도 적어 두시면 확인이 빨라집니다." },
      { type: "ul", items: ["증상이 <b>처음 시작된 날</b>과 그날 이후의 변화","설사는 하루 횟수, 발진은 범위, 기침은 언제 심한지처럼 <b>셀 수 있는 형태</b>로","체온 — 발열이 동반되는지","복용 중인 다른 약과 새로 먹기 시작한 것","직전 투여일과 회차"] },
      { type: "p", text: "온코케어 앱은 이런 기록을 증상별로 남겨 진료에서 바로 보여 드릴 수 있게 돕습니다. 기록이 있으면 \"며칠 전부터인가요\"라는 질문에서 시작하지 않아도 됩니다." },
      { type: "h2", id: "misunderstanding", text: "자주 있는 오해 세 가지" },
      { type: "ul", items: ["<b>\"부작용이 없으면 약이 안 듣는 것\"</b> — 이상반응 유무로 효과를 판단하지 않습니다. 없다고 걱정하실 일이 아닙니다.","<b>\"스테로이드를 쓰면 항암 효과가 사라진다\"</b> — 이상반응 관리를 위한 스테로이드 사용은 지침에 따라 이뤄지는 표준적인 대응입니다. 임의로 거부하거나 중단하는 것이 더 위험합니다.","<b>\"한 번 괜찮았으면 계속 괜찮다\"</b> — 회차가 쌓인 뒤에 처음 나타나는 경우가 있어, 매 회차 증상을 확인합니다."] },
      { type: "h2", id: "wrap", text: "정리" },
      { type: "p", text: "면역항암제의 부작용은 <b>드물지만 넓고, 늦게도 나타납니다</b>. 그래서 관리의 핵심은 겁내는 것이 아니라 <b>빨리 알리는 것</b>입니다. 대부분의 이상반응은 초기에 확인하면 관리가 단순하고, 늦어질수록 다루는 범위가 커집니다. 평소와 다른 증상이 생겼을 때 \"면역항암제 때문일 수도 있나\"를 한 번 떠올리는 것 — 그것만으로도 시점이 크게 앞당겨집니다. 경과와 나타나는 양상에는 개인차가 있습니다." },
      { type: "h2", id: "refs", text: "참고 문헌" },
      { type: "ul", items: ["면역관문억제제 치료 환자의 면역관련 이상반응 관리 — ASCO 진료지침 개정판. <i>Journal of Clinical Oncology</i> (2021). PMID <a href=\"https://pubmed.ncbi.nlm.nih.gov/34724392/\" target=\"_blank\" rel=\"noopener\">34724392</a>","면역관문억제제 관련 이상반응에 관한 SITC 임상진료지침. <i>Journal for ImmunoTherapy of Cancer</i> (2021). PMID <a href=\"https://pubmed.ncbi.nlm.nih.gov/34172516/\" target=\"_blank\" rel=\"noopener\">34172516</a>","면역관련 이상반응(irAEs) — 진단, 관리, 임상 요점. <i>Current Oncology Reports</i> (2020). PMID <a href=\"https://pubmed.ncbi.nlm.nih.gov/32200442/\" target=\"_blank\" rel=\"noopener\">32200442</a>"] },
    ],
    faq: [
      {
        "q": "면역항암제는 부작용이 적다고 들었는데요?",
        "a": "탈모나 심한 구역처럼 세포독성 항암제에서 흔한 부작용은 상대적으로 적습니다. 다만 면역이 정상 장기를 공격해 생기는 면역관련 이상반응이라는 다른 종류의 문제가 있고, 나타나는 시기와 부위가 넓습니다. 적다기보다 다르다고 보는 편이 정확합니다."
      },
      {
        "q": "설사가 시작됐는데 지사제를 먹어도 되나요?",
        "a": "임의로 시작하지 마시고 먼저 알려 주세요. 증상이 가려지면 진행 중인 대장염을 늦게 발견할 수 있습니다. 하루 횟수와 혈변 여부, 시작한 날짜를 함께 알려 주시면 판단이 빨라집니다."
      },
      {
        "q": "치료가 끝났는데도 부작용이 생길 수 있나요?",
        "a": "치료 종료 후에 처음 나타나는 경우가 보고됩니다. 이후에 새로운 증상이 생기면 다른 진료과를 가더라도 면역항암제를 사용했다는 사실을 알리시는 것이 좋습니다."
      },
      {
        "q": "부작용이 없으면 약이 안 듣는 건가요?",
        "a": "이상반응의 유무로 치료 효과를 판단하지 않습니다. 효과는 영상검사와 임상 경과로 평가하므로, 증상이 없다고 걱정하실 필요는 없습니다."
      }
    ],
  },
  {
    slug: "radiotherapy-side-effects-skin-fatigue-care",
    title: "방사선치료 부작용, 언제 나타나고 어떻게 관리하나 — 피부와 피로 중심으로",
    description:
      "방사선치료 부작용은 항암과 다릅니다. 치료받은 부위에 주로 나타나고, 시작 시점과 회복 시점이 대체로 정해져 있습니다. 피부 반응과 피로를 중심으로 무엇이 정상 경과이고 언제 알려야 하는지 정리했습니다.",
    category: "증상 관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-05",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 7,
    hero: "side-effect",
    heroAlt: "방사선치료 부작용 관리 — 피부와 피로",
    tldr: [
      "방사선 부작용은 대부분 <b>치료받은 부위</b>에 나타납니다 — 전신에 오는 항암과 다릅니다.",
      "피부 반응은 보통 2~3주차부터 시작해 치료 종료 후 1~2주에 가장 심하고, 그 뒤 회복됩니다.",
      "피로는 가장 흔한 증상이며 쉰다고 사라지지 않습니다 — 가벼운 활동이 오히려 도움이 됩니다.",
      "물집·진물·38도 이상의 열·삼키기 어려움은 참지 말고 알리셔야 합니다.",
    ],
    blocks: [
      { type: "p", text: "방사선치료를 앞두고 가장 많이 물으시는 것이 \"항암처럼 힘든가요\"입니다. 두 치료는 부작용이 나타나는 방식이 다릅니다. 항암제는 혈관을 타고 온몸을 돌기 때문에 전신 증상이 오지만, <b>방사선은 치료한 부위에 작용</b>하므로 부작용도 대개 그 부위에 나타납니다." },
      { type: "p", text: "그래서 가슴에 방사선을 받으면 피부와 식도 쪽 증상이, 골반에 받으면 배뇨·배변 관련 증상이 나타나는 식입니다. 어느 부위를 치료하는지에 따라 예상되는 증상이 정해지므로, 시작 전에 담당 의료진께 <b>내 경우 무엇을 지켜봐야 하는지</b> 여쭤보시면 대비가 됩니다." },
      { type: "h2", id: "timeline", text: "언제 시작해서 언제 좋아지나" },
      { type: "p", text: "방사선 부작용에는 <b>대체적인 시간표</b>가 있습니다. 이 흐름을 알고 계시면 \"점점 심해지는데 괜찮은 건가\" 하는 불안이 줄어듭니다." },
      { type: "ul", items: [
        "<b>1주차</b> — 대개 별다른 변화가 없습니다. 이때 증상이 없다고 해서 효과가 없는 것은 아닙니다",
        "<b>2~3주차</b> — 피부가 붉어지기 시작하고 피로가 쌓입니다",
        "<b>4주차 이후</b> — 피부 반응이 뚜렷해지고, 부위에 따라 삼킴 불편이나 배뇨 증상이 나타납니다",
        "<b>치료 종료 후 1~2주</b> — 증상이 가장 심한 시기입니다. 치료가 끝났는데 더 아파 당황하시는 분이 많은데, 예상되는 경과입니다",
        "<b>그 이후</b> — 대개 수 주에 걸쳐 서서히 회복됩니다",
      ] },
      { type: "callout", tone: "info", title: "치료가 끝났는데 왜 더 힘든가요", text: "방사선의 영향은 조사가 끝난 뒤에도 얼마간 이어집니다. 그래서 종료 직후가 증상의 정점인 경우가 많습니다. 이 시기를 넘기면 회복 국면으로 들어갑니다." },
      { type: "h2", id: "skin", text: "피부 반응 — 가장 흔하고 관리가 가능한 부분" },
      { type: "p", text: "치료 부위 피부가 햇볕에 그을린 것처럼 붉어지고, 건조해지며 가렵습니다. 심하면 벗겨지거나 물집이 생기기도 합니다. 관리의 원칙은 <b>자극을 줄이는 것</b> 하나입니다." },
      { type: "ul", items: [
        "<b>미지근한 물로 부드럽게</b> 씻고 문지르지 마십시오 — 수건은 눌러서 물기만 흡수시킵니다",
        "<b>순한 비누</b>를 쓰고, 치료 부위에 표시된 선은 지우지 마십시오",
        "<b>보습제</b>는 담당 의료진이 권한 제품을 쓰시고, <b>치료 직전에는 바르지 않습니다</b>",
        "<b>헐렁하고 부드러운 옷</b>을 입으십시오 — 마찰이 가장 큰 자극입니다",
        "<b>뜨거운 찜질·사우나·직사광선</b>은 피하십시오. 외출 시 치료 부위를 옷으로 가립니다",
        "면도기나 파스, 알코올이 든 제품은 <b>사용 전에 확인</b>받으십시오",
      ] },
      { type: "callout", tone: "warn", title: "이럴 때는 바로 알리십시오", text: "물집이 잡히거나 진물이 나올 때, 피부가 벗겨진 범위가 넓어질 때, 그 부위에 열감과 함께 통증이 심해질 때는 감염 여부를 확인해야 합니다. 임의로 연고를 바르지 마시고 먼저 알려 주십시오." },
      { type: "h2", id: "fatigue", text: "피로 — 쉰다고 사라지지 않습니다" },
      { type: "p", text: "방사선치료 중 피로는 <b>가장 흔한 증상</b>이며, 잠을 자거나 누워 있는다고 해결되지 않는 종류의 피로입니다. 치료가 누적되면서 서서히 쌓이고, 종료 후에도 얼마간 이어집니다." },
      { type: "p", text: "역설적이지만 <b>가벼운 활동이 피로를 줄이는 데 도움이 됩니다.</b> 하루 종일 누워 계시면 체력이 더 떨어져 피로가 깊어집니다. 짧은 산책이나 가벼운 스트레칭을 나누어 하시는 편이 낫습니다." },
      { type: "ul", items: [
        "<b>하루 계획을 줄이십시오</b> — 평소의 절반 정도로 잡고, 중요한 일을 컨디션이 좋은 시간대에 배치합니다",
        "<b>짧게 자주 쉬십시오</b> — 낮잠은 20~30분 이내가 밤잠에 영향을 덜 줍니다",
        "<b>가벼운 활동을 유지하십시오</b> — 걷기 정도면 충분합니다",
        "<b>도움을 요청하십시오</b> — 이 시기에 모든 일을 혼자 하실 필요가 없습니다",
      ] },
      { type: "p", text: "다만 피로가 <b>갑자기 심해지거나</b> 어지럼·숨참이 함께 온다면 빈혈이나 다른 원인을 확인해야 합니다. 피로를 당연한 것으로만 여기고 넘기지 마십시오." },
      { type: "h2", id: "byarea", text: "부위에 따라 달라지는 증상" },
      { type: "ul", items: [
        "<b>머리·목</b> — 입안 헐음, 침 분비 감소로 인한 입마름, 미각 변화, 삼킴 통증. 구강 위생과 수분 섭취가 중요합니다",
        "<b>가슴</b> — 식도 자극으로 삼킬 때 아플 수 있습니다. 뜨겁고 자극적인 음식은 피하십시오",
        "<b>배·골반</b> — 메스꺼움, 설사, 배뇨 시 불편감. 식이 조절과 수분 섭취를 함께 조정합니다",
        "<b>어느 부위든</b> — 치료 부위 피부 반응과 전반적인 피로는 공통으로 나타납니다",
      ] },
      { type: "h2", id: "record", text: "무엇을 기록해 두면 좋은가" },
      { type: "p", text: "치료 중에는 매주 진료를 보게 되는데, 그때 전달할 내용을 적어 두시면 조절이 빨라집니다." },
      { type: "ul", items: [
        "<b>피부 상태</b> — 언제부터 붉어졌는지, 지금 어느 정도인지(사진이 유용합니다)",
        "<b>통증·불편의 정도</b> — 0에서 10 중 몇 점인지",
        "<b>먹는 양과 체중</b> — 치료 중 체중 감소는 중요한 신호입니다",
        "<b>배뇨·배변 변화</b>와 새로 생긴 증상",
        "<b>복용 중인 약과 건강기능식품</b> — 새로 드시기 시작한 것이 있으면 알려 주십시오",
      ] },
      { type: "h2", id: "wrap", text: "정리" },
      { type: "p", text: "방사선치료 부작용은 <b>치료 부위에 나타나고, 시작과 회복 시점이 대체로 정해져 있습니다.</b> 피부 반응은 자극을 줄이는 관리로 상당 부분 완화되고, 피로는 완전한 휴식보다 가벼운 활동을 유지하는 편이 낫습니다. 종료 직후가 가장 힘든 시기라는 것을 알고 계시면 그 구간을 넘기기가 한결 수월합니다." },
      { type: "p", text: "다만 <b>물집·진물·38도 이상의 열·삼키기 어려움·급격한 체중 감소</b>는 참고 지켜볼 증상이 아닙니다. 그때는 바로 알리셔야 합니다. 온코케어 앱에 증상과 사진을 날짜별로 남겨 두시면 진료 때 그대로 보여 드릴 수 있어, 설명하지 못하고 지나가는 부분이 줄어듭니다." },
    ],
    faq: [
      { q: "방사선치료를 받으면 몸에 방사선이 남나요?", a: "체외에서 조사하는 일반적인 방사선치료는 치료가 끝나면 몸에 방사선이 남지 않습니다. 가족이나 아이와 접촉하셔도 됩니다. 다만 방사성 물질을 몸 안에 넣는 방식의 치료는 별도의 주의사항이 있으므로 담당 의료진의 안내를 따르십시오." },
      { q: "치료가 끝났는데 왜 더 힘든가요?", a: "방사선의 영향은 조사가 끝난 뒤에도 얼마간 이어져, 종료 후 1~2주가 증상의 정점인 경우가 많습니다. 예상되는 경과이며 그 시기를 지나면 대개 서서히 회복됩니다. 다만 나빠지는 속도가 빠르거나 열이 동반되면 확인이 필요합니다." },
      { q: "치료 부위에 로션을 발라도 되나요?", a: "담당 의료진이 권한 보습제는 대개 사용 가능하지만, 치료 직전에는 바르지 않는 것이 원칙입니다. 알코올이 들어간 제품, 파스, 연고는 사용 전에 확인받으십시오. 피부에 표시된 선은 지우지 마십시오." },
      { q: "피로할 때는 무조건 쉬어야 하나요?", a: "완전한 휴식만으로는 피로가 잘 줄지 않습니다. 짧은 산책이나 가벼운 스트레칭 같은 활동을 유지하는 편이 도움이 됩니다. 다만 피로가 갑자기 심해지거나 어지럼·숨참이 함께 오면 빈혈 등 다른 원인을 확인해야 합니다." },
    ],
  },

  {
    slug: "cancer-pain-opioid-myths-management",
    title: "암 통증, 참지 않아도 됩니다 — 진통제에 대한 오해 풀기",
    description:
      "마약성 진통제를 쓰면 중독되거나 나중에 들을 약이 없어진다는 걱정 때문에 통증을 참는 분이 많습니다. 무엇이 사실이고 무엇이 오해인지, 통증을 어떻게 기록해 전달하면 조절이 빨라지는지 정리했습니다.",
    category: "증상 관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-28",
    updatedAt: "2026-07-28",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 7,
    hero: "side-effect",
    heroAlt: "암 통증 조절과 진통제에 대한 이해",
    tldr: [
      "통증을 참는 것은 회복에 도움이 되지 않습니다 — 수면·식사·활동이 함께 무너집니다.",
      "암 통증 조절 목적으로 의료진 관리 하에 쓰는 마약성 진통제는 \"중독\"과 다른 문제입니다.",
      "\"나중을 위해 아껴 둔다\"는 개념은 통증 조절에 맞지 않습니다 — 용량은 필요에 따라 조정됩니다.",
      "숫자·시점·양상으로 기록해 전달하면 조절 속도가 확연히 빨라집니다.",
    ],
    blocks: [
      { type: "p", text: "진료실에서 \"많이 아프세요?\"라고 여쭤보면 \"참을 만해요\"라고 답하시는 분이 많습니다. 그런데 이어서 여쭤보면 밤에 몇 번씩 깨고, 식사량이 줄었고, 움직이기 싫어 하루 종일 누워 계셨다고 합니다. 이것은 참을 만한 상태가 아닙니다." },
      { type: "p", text: "통증을 참는 것이 의지의 문제로 여겨지는 경우가 있지만, 암 치료 과정에서 통증 조절은 <b>치료의 일부</b>입니다. 통증이 조절되지 않으면 잠을 못 자고, 못 먹고, 움직이지 않게 되어 체력과 면역이 함께 떨어집니다." },
      { type: "h2", id: "myths", text: "가장 흔한 세 가지 오해" },
      { type: "h3", text: "① \"마약성 진통제를 쓰면 중독된다\"" },
      { type: "p", text: "가장 많이 걱정하시는 부분입니다. 통증 조절을 목적으로 의료진의 관리 하에 용량과 간격을 정해 사용하는 것은, 흔히 말하는 중독과는 다른 상황으로 다룹니다. 몸이 약에 익숙해져 같은 용량의 효과가 줄어드는 현상(내성)이나, 갑자기 끊었을 때 나타나는 반응은 중독과 구분되는 별개의 개념이며 조절 가능한 부분입니다." },
      { type: "p", text: "다만 과거에 알코올이나 약물 문제를 겪으신 적이 있다면 그 사실을 알려 주십시오. 숨길 일이 아니라 <b>처방 계획에 반영해야 할 정보</b>입니다." },
      { type: "h3", text: "② \"지금 쓰면 나중에 들을 약이 없어진다\"" },
      { type: "p", text: "통증 조절에는 \"아껴 두는\" 개념이 맞지 않습니다. 통증이 심해지면 용량을 올리거나 다른 약제로 바꾸는 방식으로 대응하며, 선택지가 소진되는 구조가 아닙니다. 오히려 통증을 오래 방치하면 조절이 더 어려워지는 경우가 있습니다." },
      { type: "h3", text: "③ \"진통제를 달라고 하면 나약해 보인다\"" },
      { type: "p", text: "통증을 정확히 말씀해 주시는 것은 진료에 필요한 정보 제공입니다. 참으시면 의료진은 통증이 없다고 판단하게 되고, 그만큼 조절이 늦어집니다." },
      { type: "callout", tone: "warn", title: "이런 통증은 바로 알리십시오", text: "갑자기 시작된 심한 통증, 이전과 양상이 다른 통증, 마비·감각 저하가 함께 오는 등쪽 통증, 숨이 차면서 생기는 가슴 통증은 원인 확인이 먼저 필요합니다. 진통제만 늘리고 지켜볼 일이 아닙니다." },
      { type: "h2", id: "record", text: "어떻게 전달해야 조절이 빨라지나" },
      { type: "p", text: "\"그냥 아파요\"보다 아래 네 가지를 함께 말씀해 주시면 처방이 훨씬 정확해집니다." },
      { type: "ul", items: [
        "<b>숫자</b> — 0에서 10 중 지금 몇 점인지, 가장 심할 때 몇 점인지",
        "<b>시점</b> — 하루 중 언제 심한지, 약 먹고 몇 시간 뒤에 다시 아픈지",
        "<b>양상</b> — 쑤시는지, 타는 듯한지, 저릿한지(신경 통증은 접근이 다릅니다)",
        "<b>영향</b> — 통증 때문에 못 하게 된 것(수면·식사·걷기)",
      ] },
      { type: "p", text: "특히 <b>약효가 떨어지는 시점</b>은 중요한 정보입니다. 다음 복용 시간 전에 반복적으로 아프다면 용량이나 간격 조정이 필요하다는 신호입니다." },
      { type: "h2", id: "how", text: "통증 조절은 단계적으로 합니다" },
      { type: "p", text: "통증의 강도와 종류에 따라 약제를 단계적으로 조정합니다. 통증이 계속 있는 상태라면 <b>아플 때만 먹는 방식보다 정해진 시간에 규칙적으로 복용하는 방식</b>이 조절에 유리하고, 갑자기 심해질 때를 위한 약을 별도로 두기도 합니다." },
      { type: "p", text: "신경이 눌리거나 손상되어 생기는 통증은 일반 진통제에 잘 반응하지 않아 다른 계열의 약을 함께 씁니다. \"진통제를 먹어도 소용없다\"는 경우가 여기에 해당할 수 있으므로, 효과가 없다는 사실 자체를 알려 주셔야 합니다." },
      { type: "h2", id: "side", text: "부작용은 미리 대비합니다" },
      { type: "ul", items: [
        "<b>변비</b> — 가장 흔하고, 시간이 지나도 저절로 좋아지지 않는 편입니다. 약을 시작할 때 함께 대비합니다.",
        "<b>졸음·어지럼</b> — 초기에 흔하고 대개 며칠에 걸쳐 적응됩니다. 이 기간에는 운전을 피하십시오.",
        "<b>구역</b> — 초기에 나타날 수 있으며 필요 시 함께 조절합니다.",
        "<b>임의 중단 금지</b> — 좋아졌다고 갑자기 끊으면 불편한 반응이 올 수 있어, 줄이는 것도 상의해서 합니다.",
      ] },
      { type: "callout", tone: "info", title: "기록이 곧 조절 속도입니다", text: "통증 점수와 약 복용 시각을 며칠만 적어 오셔도 조절이 빨라집니다. 수첩 한 장, 휴대폰 메모면 충분합니다." },
      { type: "p", text: "이 글은 정보 제공을 위한 것이며 진단·처방을 대신하지 않습니다. 약제의 선택과 용량은 반드시 주치의와 상의해 결정하십시오." },
    ],
    faq: [
      { q: "마약성 진통제를 쓰면 중독되나요?", a: "통증 조절을 목적으로 의료진 관리 하에 용량과 간격을 정해 사용하는 것은 흔히 말하는 중독과 다른 상황으로 다룹니다. 몸이 익숙해지는 현상이나 갑자기 끊었을 때의 반응은 중독과 구분되는 별개 개념이며 조절이 가능합니다. 다만 과거 알코올·약물 문제가 있었다면 반드시 알려 주십시오." },
      { q: "지금 쓰면 나중에 들을 약이 없어지지 않나요?", a: "통증 조절에는 아껴 둔다는 개념이 맞지 않습니다. 통증이 심해지면 용량을 조정하거나 다른 약제로 바꾸는 방식으로 대응합니다. 오히려 통증을 오래 방치하면 조절이 더 어려워지는 경우가 있습니다." },
      { q: "진통제를 먹어도 효과가 없으면 어떻게 하나요?", a: "그 사실 자체가 중요한 정보입니다. 신경이 눌리거나 손상되어 생기는 통증은 일반 진통제에 잘 반응하지 않아 다른 계열의 약을 함께 써야 합니다. 효과가 없다고 참지 마시고 알려 주십시오." },
      { q: "통증이 좋아지면 약을 바로 끊어도 되나요?", a: "임의로 중단하지 마십시오. 갑자기 끊으면 불편한 반응이 나타날 수 있습니다. 줄이거나 중단하는 것도 조절의 일부이므로 의료진과 상의해 단계적으로 진행합니다." },
    ],
  },
  {
    slug: "chemo-taste-change-appetite-care",
    title: "항암 중 입맛이 변했어요 — 미각 변화와 식사 관리",
    description:
      "항암 치료 중 음식이 쇠맛처럼 느껴지거나 아무 맛이 없어지는 변화는 흔합니다. 왜 생기는지, 언제 회복되는지, 그리고 먹는 양을 지키기 위해 집에서 시도해 볼 수 있는 방법을 정리했습니다.",
    category: "영양",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-25",
    updatedAt: "2026-07-25",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "eating-well",
    heroAlt: "항암 치료 중 미각 변화와 식사 관리",
    tldr: [
      "미각·후각 변화는 항암제와 점막 세포 손상, 구강 건조가 겹쳐 생기는 흔한 부작용입니다.",
      "대개 치료 주기 안에서 오르내리고 치료 종료 후 서서히 회복되지만 개인차가 큽니다.",
      "'맛있게'보다 '먹을 수 있게'가 목표입니다 — 온도·질감·향을 바꿔 보는 것이 실질적입니다.",
      "체중이 계속 줄거나 물조차 넘기기 어려우면 의료진에게 알리세요.",
    ],
    blocks: [
      { type: "p", text: "항암 치료를 받는 중에 \"음식에서 쇠 맛이 난다\", \"평소 좋아하던 것이 역겹다\", \"아무 맛도 안 느껴진다\"고 말씀하시는 분이 많습니다. 이런 미각 변화는 치료 과정에서 흔하게 나타나는 부작용이며, 의지의 문제가 아닙니다. 다만 먹는 양이 줄면 체력과 회복에 직접 영향을 주기 때문에 그냥 두기보다 방법을 찾아보는 편이 좋습니다." },
      { type: "h2", id: "why", text: "왜 맛이 달라지나" },
      { type: "ul", items: [
        "혀의 미각 세포는 교체가 빠른 세포여서 항암제의 영향을 받기 쉽습니다.",
        "입안 점막이 헐거나 건조해지면 맛을 느끼는 조건 자체가 나빠집니다.",
        "침 분비가 줄면 음식이 잘 녹지 않아 맛이 전달되지 않습니다.",
        "후각 변화가 함께 오면 음식 냄새가 다르게 느껴져 식욕이 떨어집니다.",
        "일부 약제와 항구토제, 아연 등 미량영양소 상태도 영향을 줄 수 있습니다.",
      ] },
      { type: "p", text: "흔히 보고되는 양상은 몇 가지로 나뉩니다. 금속성 맛(특히 육류), 단맛이나 짠맛에 대한 민감도 변화, 전반적인 맛의 둔화, 특정 냄새에 대한 거부감입니다. 어떤 양상인지에 따라 대응이 달라지므로 스스로 관찰해 두시면 도움이 됩니다." },
      { type: "h2", id: "when", text: "언제 좋아지나" },
      { type: "p", text: "대체로 치료 주기 안에서 오르내립니다. 투여 직후 며칠간 심해졌다가 다음 주기 전에 조금 나아지는 패턴이 흔합니다. 치료가 끝난 뒤에는 서서히 회복되는 경우가 많지만, 수 주에서 수개월까지 걸릴 수 있고 개인차가 큽니다. 방사선치료를 머리·목 부위에 받은 경우에는 회복이 더 오래 걸릴 수 있습니다." },
      { type: "callout", tone: "info", title: "목표를 바꿔 보세요", text: "이 시기에 '맛있게 먹기'를 목표로 하면 실패감만 커집니다. '먹을 수 있는 것을, 먹을 수 있을 때, 조금씩'이 현실적인 목표입니다. 평소 식습관과 달라져도 괜찮습니다." },
      { type: "h2", id: "try", text: "집에서 시도해 볼 수 있는 것" },
      { type: "h3", text: "맛과 향 조절" },
      { type: "ul", items: [
        "금속성 맛이 느껴지면 금속 수저 대신 플라스틱이나 나무 수저를 써 보세요.",
        "육류가 역겹게 느껴지면 달걀·두부·생선·유제품으로 단백질을 대체합니다.",
        "레몬·식초 같은 새콤한 맛이나 허브·생강이 도움이 되는 경우가 있습니다(입안이 헐었다면 피하세요).",
        "냄새가 문제라면 뜨거운 음식보다 상온이나 차게 식힌 음식이 낫습니다.",
      ] },
      { type: "h3", text: "질감과 방식" },
      { type: "ul", items: [
        "입이 마르면 국물·소스를 곁들여 부드럽게 만듭니다.",
        "한 번에 많이보다 조금씩 자주 나눠 드세요.",
        "식사 전 물이나 연한 차로 입을 헹구면 맛 인지가 나아지기도 합니다.",
        "구강 청결을 유지합니다 — 부드러운 칫솔과 자극이 적은 가글을 사용하세요.",
        "컨디션이 가장 좋은 시간대에 가장 든든한 식사를 배치합니다.",
      ] },
      { type: "callout", tone: "warn", title: "이럴 때는 알리세요", text: "체중이 계속 줄거나, 하루 대부분 거의 먹지 못하거나, 입안이 헐어 물조차 삼키기 어렵거나, 삼킬 때 사레가 자주 들린다면 의료진에게 알려 주세요. 영양 상태와 구강 상태를 함께 확인해야 합니다." },
      { type: "h2", id: "family", text: "보호자가 도울 수 있는 것" },
      { type: "ul", items: [
        "\"이거라도 좀 먹어\"라는 권유는 부담이 될 수 있습니다. 선택지를 두세 가지 제시하는 편이 낫습니다.",
        "무엇을 먹을 수 있었는지 기록해 두면 다음에 준비하기 쉽습니다.",
        "조리 냄새가 힘들 수 있으니 환기하거나 다른 공간에서 조리합니다.",
        "먹지 못한 날을 지적하기보다, 먹을 수 있었던 것을 확인하는 대화가 도움이 됩니다.",
      ] },
      { type: "p", text: "미각 변화는 치료 과정에서 지나가는 경우가 대부분입니다. 그 기간 동안 체중과 체력을 지키는 것이 목표이므로, 평소의 식사 기준을 잠시 내려놓으셔도 괜찮습니다. 식사량이 계속 줄고 있다면 주치의와 상의해 영양 상담을 받아 보시기 바랍니다." },
    ],
    faq: [
      { q: "입맛은 언제쯤 돌아오나요?", a: "치료 주기 안에서 오르내리는 경우가 많고, 치료 종료 후 서서히 회복됩니다. 다만 수 주에서 수개월까지 걸릴 수 있고 개인차가 큽니다. 머리·목 부위 방사선치료를 받은 경우에는 더 오래 걸릴 수 있습니다." },
      { q: "고기에서 쇠 맛이 나는데 단백질을 어떻게 채우나요?", a: "달걀, 두부, 생선, 유제품처럼 금속성 맛이 덜 느껴지는 단백질원으로 대체해 보세요. 금속 수저를 플라스틱이나 나무 수저로 바꾸는 것만으로 나아지는 경우도 있습니다." },
      { q: "영양제를 먹어도 되나요?", a: "복용 중인 항암제와의 상호작용을 고려해야 하므로 임의로 시작하지 마시고 주치의와 상의하세요. 특히 고용량 항산화 보충제는 치료 시기에 따라 권고가 달라질 수 있습니다." },
      { q: "억지로라도 먹어야 하나요?", a: "억지로 많이 먹기보다 조금씩 자주 드시는 편이 현실적입니다. 다만 체중이 계속 줄고 있다면 의지의 문제가 아니라 관리가 필요한 상태이므로 의료진에게 알려 주세요." },
    ],
  },
  {
    slug: "cancer-fertility-preservation-counseling",
    title: "치료 전에 가임력 상담을 받아야 하는 이유",
    description:
      "암 치료는 생식 기능에 영향을 줄 수 있고, 보존 방법은 대부분 치료를 시작하기 전에 결정해야 합니다. 누구에게 필요한지, 어떤 선택지가 있는지, 언제 이야기를 꺼내야 하는지 정리했습니다.",
    category: "치료준비",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-25",
    updatedAt: "2026-07-25",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "mind-care",
    heroAlt: "암 치료 전 가임력 보존 상담",
    tldr: [
      "일부 항암제와 골반 부위 방사선치료는 생식 기능에 영향을 줄 수 있습니다.",
      "보존 방법은 대부분 치료 시작 전에 결정해야 하므로 진단 직후 이야기를 꺼내는 것이 중요합니다.",
      "나이·질환·치료 계획·현재 상태에 따라 가능한 선택지가 달라집니다.",
      "당장 계획이 없더라도 상담을 받아 두면 선택지가 남습니다.",
    ],
    blocks: [
      { type: "p", text: "암 진단을 받은 직후에는 치료를 시작하는 것만으로도 벅찹니다. 그래서 임신이나 출산에 대한 이야기는 뒤로 밀리기 쉽습니다. 그런데 가임력 보존은 <b>치료를 시작하기 전에</b> 결정해야 하는 경우가 대부분입니다. 시기를 놓치면 선택지 자체가 줄어들기 때문에, 부담스럽더라도 진단 초기에 한 번은 짚고 넘어갈 필요가 있습니다." },
      { type: "h2", id: "why", text: "치료가 생식 기능에 주는 영향" },
      { type: "ul", items: [
        "일부 항암제, 특히 알킬화제 계열은 생식세포에 영향을 줄 수 있습니다.",
        "골반 부위를 포함하는 방사선치료는 난소·고환 기능에 영향을 줄 수 있습니다.",
        "수술 범위에 생식기관이 포함되면 직접적인 영향이 있습니다.",
        "일부 호르몬 치료는 치료 기간 동안 임신을 미뤄야 합니다.",
      ] },
      { type: "p", text: "영향의 정도는 약제 종류와 누적 용량, 방사선 조사 부위와 선량, 그리고 치료 시작 시점의 나이에 따라 달라집니다. 모든 치료가 같은 영향을 주는 것은 아니므로, 막연히 걱정하기보다 <b>본인의 치료 계획에서 실제로 어떤지</b>를 확인하는 것이 먼저입니다." },
      { type: "callout", tone: "warn", title: "시기가 핵심입니다", text: "난자·정자·배아 동결 같은 방법은 대부분 항암 치료를 시작하기 전에 진행해야 합니다. 치료 일정과 조율이 필요하므로, 진단 후 치료 계획을 세우는 단계에서 함께 논의해야 선택지가 남습니다." },
      { type: "h2", id: "who", text: "누구에게 상담이 필요한가" },
      { type: "ul", items: [
        "가임기 연령이면서 향후 임신 가능성을 열어 두고 싶은 경우",
        "아직 자녀 계획이 확정되지 않은 젊은 환자",
        "소아·청소년 환자 — 보호자와 함께 상담이 필요합니다",
        "치료 계획에 생식 기능 영향이 알려진 약제나 방사선이 포함된 경우",
      ] },
      { type: "p", text: "\"지금은 생각이 없다\"는 경우에도 상담 자체는 권합니다. 몇 년 뒤 생각이 달라질 수 있고, 그때는 되돌릴 수 없기 때문입니다. 상담을 받는다고 반드시 시술을 해야 하는 것도 아닙니다." },
      { type: "h2", id: "options", text: "어떤 선택지가 있나" },
      { type: "p", text: "성별과 나이, 질환과 치료 일정에 따라 가능한 방법이 달라집니다. 아래는 일반적으로 논의되는 범주이며, 개별 적용 가능 여부는 반드시 담당 진료과와 난임·생식의학 전문의 상담에서 결정합니다." },
      { type: "ul", items: [
        "여성 — 난자 동결, 배아 동결, 난소 조직 동결 등이 상황에 따라 논의됩니다.",
        "남성 — 정자 동결이 대표적이며 비교적 빠르게 진행할 수 있습니다.",
        "사춘기 이전 소아 — 적용 가능한 방법이 제한적이므로 전문의 상담이 필요합니다.",
        "치료 중 생식샘 보호를 위한 약제나 수술적 방법이 상황에 따라 논의되기도 합니다.",
      ] },
      { type: "h2", id: "how", text: "어떻게 이야기를 꺼내나" },
      { type: "p", text: "먼저 물어봐 주기를 기다리다 시기를 놓치는 경우가 있습니다. 다음처럼 구체적으로 질문하시면 됩니다." },
      { type: "ul", items: [
        "\"제 치료 계획이 임신 가능성에 영향을 줄 수 있나요?\"",
        "\"가임력 보존을 고려한다면 언제까지 결정해야 하나요?\"",
        "\"관련 상담을 받을 수 있는 곳을 연계해 주실 수 있나요?\"",
        "\"치료 시작을 며칠 미룰 수 있는 상황인가요?\"",
      ] },
      { type: "callout", tone: "info", title: "혼자 결정하지 않아도 됩니다", text: "치료 시급성과 보존 가능성 사이의 균형은 담당 의료진이 함께 판단합니다. 배우자나 가족과 상의할 시간이 필요하다면 그 점도 알려 주세요." },
      { type: "h2", id: "after", text: "치료가 끝난 뒤" },
      { type: "ul", items: [
        "치료 종료 후 임신 시도 가능 시점은 질환과 치료 내용에 따라 달라지므로 반드시 주치의와 상의합니다.",
        "월경이 돌아왔다고 해서 가임력이 이전과 같다는 뜻은 아닙니다.",
        "일부 호르몬 치료는 정해진 기간을 마친 뒤에 계획하게 됩니다.",
        "임신을 고려하는 시점에 다시 한 번 생식의학 상담을 받는 것이 도움이 됩니다.",
      ] },
      { type: "p", text: "가임력 문제는 치료 결과만큼이나 이후의 삶에 오래 남는 주제입니다. 진단 초기에는 감당하기 버거울 수 있지만, 한 번 짚어 두면 나중에 선택할 수 있는 여지가 생깁니다. 부담 없이 주치의에게 먼저 말씀해 보시기 바랍니다." },
    ],
    faq: [
      { q: "항암 치료를 받으면 임신을 못 하나요?", a: "모든 치료가 같은 영향을 주지는 않습니다. 약제 종류와 누적 용량, 방사선 조사 부위, 치료 시작 시점의 나이에 따라 달라집니다. 본인의 치료 계획에서 실제 영향이 어느 정도인지 주치의에게 확인하시는 것이 먼저입니다." },
      { q: "가임력 보존은 언제까지 결정해야 하나요?", a: "난자·정자·배아 동결 같은 방법은 대부분 항암 치료 시작 전에 진행해야 합니다. 치료 일정과 조율이 필요하므로 진단 후 치료 계획을 세우는 단계에서 함께 논의하셔야 합니다." },
      { q: "지금은 자녀 계획이 없는데도 상담이 필요한가요?", a: "권합니다. 몇 년 뒤 생각이 달라질 수 있고 그때는 되돌리기 어렵기 때문입니다. 상담을 받는다고 반드시 시술로 이어지는 것도 아니므로, 선택지를 확인해 두는 의미가 있습니다." },
      { q: "치료를 미루면 위험하지 않나요?", a: "치료 시급성과 보존 가능성 사이의 균형은 담당 의료진이 함께 판단합니다. 질환과 병기에 따라 며칠의 조율이 가능한 경우도 있고 그렇지 않은 경우도 있으므로, 자가 판단 대신 상의하시기 바랍니다." },
    ],
  },
  {
    slug: "chemo-skin-nail-changes-care",
    title: "항암 중 피부와 손발톱 변화 — 건조·색소침착·손발톱 관리",
    description:
      "항암 치료 중 피부가 건조해지고 검어지거나, 손발톱이 갈라지고 들뜨는 변화는 흔합니다. 왜 생기는지, 집에서 어떻게 관리하는지, 어떤 신호일 때 의료진에게 연락해야 하는지 정리했습니다.",
    category: "부작용관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-23",
    updatedAt: "2026-07-23",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "chemo-neuropathy-hands-feet",
    heroAlt: "손과 손톱을 살펴보며 관리하는 모습의 안내 이미지",
    tldr: [
      "항암제는 빠르게 분열하는 세포에 영향을 주기 때문에 피부와 손발톱에도 변화가 나타날 수 있습니다.",
      "보습과 자외선 차단, 손발톱을 짧고 단정하게 유지하는 기본 관리만으로도 불편을 상당히 줄일 수 있습니다.",
      "손발톱 주위가 붉게 붓고 아프거나 진물이 나면 감염 가능성이 있어 바로 의료진에게 알려야 합니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 치료를 시작하고 몇 주가 지나면 \"피부가 유난히 당기고 가렵다\", \"손톱이 자꾸 갈라진다\", \"얼굴이 칙칙해진 것 같다\"는 이야기를 자주 듣게 됩니다. 탈모만큼 자주 언급되지는 않지만, 피부와 손발톱 변화는 치료 기간 내내 이어지기 쉬워 삶의 질에 꽤 영향을 줍니다. 대부분은 관리로 완화할 수 있고, 치료가 끝나면 서서히 회복되는 방향으로 진행합니다.",
      },
      { type: "h2", id: "why", text: "왜 피부와 손발톱이 변하나요" },
      {
        type: "p",
        text: "항암제는 빠르게 분열하는 세포를 표적으로 작용합니다. 암세포뿐 아니라 머리카락 뿌리, 입안 점막, 그리고 피부의 표피 세포와 손발톱을 만들어내는 조직도 분열이 빠른 편이라 함께 영향을 받습니다. 손발톱은 특히 자라는 속도가 느려서, 치료 중 받은 영향이 몇 달 뒤에야 눈에 보이는 경우가 많습니다.",
      },
      {
        type: "ul",
        items: [
          "피부 건조와 가려움 — 피부 장벽 기능이 떨어지면서 수분이 빠르게 날아갑니다.",
          "색소침착 — 얼굴·손등·주름 부위나 정맥 주사를 맞은 팔의 혈관을 따라 색이 짙어지기도 합니다.",
          "손발톱 변화 — 세로줄, 가로로 파인 홈, 색 변화, 갈라짐, 심하면 손톱이 들뜨거나 빠지는 경우도 있습니다.",
          "손발 피부 반응 — 일부 약제에서는 손바닥·발바닥이 붉어지고 화끈거리며 아플 수 있습니다.",
          "햇빛에 대한 민감도 증가 — 평소보다 쉽게 붉어지고 색소가 남습니다.",
        ],
      },
      { type: "h2", id: "skin", text: "피부 관리 — 기본을 자주" },
      {
        type: "ul",
        items: [
          "보습제는 하루 여러 번, 특히 목욕 직후 물기가 남아 있을 때 바르면 흡수가 좋습니다.",
          "샤워는 미지근한 물로 짧게. 뜨거운 물과 오래 담그는 목욕은 건조를 악화시킵니다.",
          "향이 강한 비누·스크럽·때수건은 피하고, 순한 세정제를 사용하세요.",
          "자외선 차단을 습관으로. 색소침착이 남는 것을 줄이는 데 도움이 되며, 모자와 긴소매 옷도 좋은 방법입니다.",
          "가려움이 심할 때 긁으면 상처가 생기고 감염 위험이 올라갑니다. 시원한 물수건으로 눌러 주고, 반복되면 진료에서 상의하세요.",
          "면도는 전기면도기를 쓰는 편이 상처를 덜 만듭니다.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "새 화장품은 치료 중에 시작하지 마세요",
        text: "치료 기간에는 피부가 평소보다 예민해져 있어, 처음 쓰는 제품에 반응이 나타나도 원인을 가리기 어렵습니다. 익숙하게 쓰던 순한 제품을 유지하는 편이 안전합니다.",
      },
      { type: "h2", id: "nail", text: "손발톱 관리 — 짧고 단정하게" },
      {
        type: "ul",
        items: [
          "손발톱은 짧게 유지하고, 자를 때 모서리를 너무 깊게 파지 마세요. 파고드는 손톱과 염증의 원인이 됩니다.",
          "설거지·청소 등 물과 세제를 다루는 일에는 장갑을 사용하세요.",
          "큐티클(손톱 주변 피부)을 밀거나 잘라내지 마세요. 세균이 들어가는 통로가 됩니다.",
          "손톱 주변에도 보습제를 발라 주면 갈라짐이 줄어듭니다.",
          "발톱은 정면으로 일자로 자르고, 발에 꽉 끼는 신발은 피하세요.",
          "네일 시술과 인조손톱은 치료 중에는 권하지 않습니다. 손톱 상태를 가려 문제를 늦게 발견하게 만들 수 있습니다.",
        ],
      },
      { type: "h2", id: "handfoot", text: "손발이 화끈거리고 아플 때" },
      {
        type: "p",
        text: "일부 항암제에서는 손바닥과 발바닥이 붉어지고 부으며 화끈거리는 반응이 나타날 수 있습니다. 심해지면 걷거나 물건을 쥐는 일상 동작이 힘들어질 수 있어 조기에 알리는 것이 중요합니다.",
      },
      {
        type: "ul",
        items: [
          "손발에 압력과 마찰이 가는 활동을 줄이세요 — 오래 걷기, 무거운 물건 들기, 조이는 신발.",
          "뜨거운 물과 사우나를 피하고, 시원하게 유지하세요.",
          "보습제를 자주 바르되 문지르기보다 부드럽게 누르듯 바릅니다.",
          "증상이 시작되면 참지 말고 진료에서 알리세요. 약제 용량이나 일정 조정이 필요한 경우가 있습니다.",
        ],
      },
      { type: "h2", id: "callteam", text: "바로 알려야 하는 신호" },
      {
        type: "ul",
        items: [
          "손발톱 주위가 붉게 붓고 아프거나 고름·진물이 나오는 경우 — 감염 가능성이 있습니다.",
          "피부에 물집이 잡히거나 넓게 벗겨지는 경우.",
          "발진이 갑자기 온몸으로 번지는 경우, 특히 호흡곤란·부기와 함께라면 즉시 연락이 필요합니다.",
          "상처가 아물지 않고 계속 진물이 나는 경우.",
          "발열이 동반되는 피부 증상 — 면역이 떨어진 시기에는 특히 중요합니다.",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "면역이 낮은 시기에는 작은 상처도 가볍지 않습니다",
        text: "호중구가 떨어져 있는 시기에는 손거스러미나 굳은살을 뜯다 생긴 작은 상처로도 감염이 시작될 수 있습니다. 발열이 함께 있다면 지체하지 말고 의료진에게 연락하세요.",
      },
      { type: "h2", id: "recovery", text: "치료가 끝난 뒤" },
      {
        type: "p",
        text: "대부분의 피부 변화는 치료가 끝나면 서서히 회복되는 방향으로 진행합니다. 색소침착은 옅어지는 데 여러 달이 걸리기도 하며, 이 기간의 자외선 차단이 회복 속도에 영향을 줍니다. 손발톱은 자라는 속도가 느려 손톱은 수개월, 발톱은 그보다 더 오래 걸려 완전히 새 것으로 바뀝니다. 그래서 치료가 끝난 뒤에도 한동안은 이전 흔적이 남아 있는 것이 자연스러운 경과입니다.",
      },
      {
        type: "p",
        text: "피부와 손발톱 변화는 \"참아야 하는 것\"으로 여겨지기 쉽지만, 관리로 달라지는 부분이 분명히 있고 일부는 치료 조정이 필요한 신호이기도 합니다. 불편이 있다면 다음 진료 때 미루지 말고 이야기해 주세요. 이 내용은 일반적인 정보 안내이며 개별 진단·치료를 대체하지 않습니다. 증상과 대처는 사용 중인 약제와 상태에 따라 다르므로 반드시 주치의와 상의하시기 바랍니다.",
      },
    ],
    faq: [
      {
        q: "항암 중 피부가 검어지는 것도 부작용인가요?",
        a: "네, 색소침착은 비교적 흔한 변화입니다. 얼굴·손등·주름 부위나 정맥 주사를 맞은 혈관을 따라 색이 짙어지기도 합니다. 대부분 치료가 끝나면 서서히 옅어지며, 그 기간에 자외선을 차단하면 회복에 도움이 됩니다.",
      },
      {
        q: "손톱이 들뜨는데 그냥 두어도 되나요?",
        a: "손톱이 들뜨는 변화 자체는 항암 치료 중 나타날 수 있는 경과지만, 그 부위로 세균이 들어가면 감염이 생길 수 있습니다. 주위가 붉게 붓고 아프거나 진물·고름이 나오면 바로 의료진에게 알리세요. 억지로 뜯거나 잘라내지 마시고 짧고 단정하게 유지하는 것이 안전합니다.",
      },
      {
        q: "치료 중에 네일아트나 인조손톱은 괜찮나요?",
        a: "권하지 않습니다. 손톱 상태를 가려 감염이나 변화를 늦게 발견하게 만들 수 있고, 시술 과정에서 큐티클이 손상되면 세균이 들어갈 통로가 생깁니다. 치료 기간에는 짧게 정돈하고 보습하는 정도로 유지하시는 편이 좋습니다.",
      },
      {
        q: "손발이 화끈거리는데 참아야 하나요?",
        a: "참지 마시고 알리세요. 일부 약제에서 나타나는 손발 피부 반응은 심해지면 걷기나 물건 쥐기 같은 일상 동작이 어려워질 수 있고, 약제 용량이나 일정 조정이 필요한 경우가 있습니다. 초기에 알릴수록 대처 선택지가 넓습니다.",
      },
    ],
  },

  {
    slug: "chemo-side-effect-selfcare",
    title: "항암 부작용 셀프케어 — 구역·피로·점막염 다스리기",
    description:
      "구역·구토, 피로, 입안 점막염 등 흔한 항암 부작용을 집에서 다스리는 생활 수칙과, 언제 병원에 연락해야 하는지(레드플래그)를 근거 기반으로 정리했습니다.",
    category: "증상관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-08",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "side-effect",
    heroAlt: "생강차와 담요, 물 한 잔이 놓인 따뜻한 탁자",
    tldr: [
      "구역엔 소량씩 자주·생강·미지근한 음식, 피로엔 짧은 산책과 규칙적 휴식이 도움이 됩니다.",
      "처방받은 항구토제는 ‘참았다’가 아니라 예정대로 챙기는 것이 효과적입니다.",
      "38℃ 이상 발열·호흡곤란·심한 출혈 등은 응급 신호 — 즉시 119·의료진에게 연락하세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 부작용은 대부분 예측 가능하고 관리할 수 있습니다. 핵심은 ‘증상이 심해지기 전에’ 미리 다스리고, 위험 신호를 놓치지 않는 것입니다.",
      },
      { type: "h2", id: "nausea", text: "구역·구토" },
      {
        type: "ul",
        items: [
          "소량씩 자주, 미지근하거나 차가운 음식으로",
          "생강차·생강사탕 등 생강을 활용",
          "기름지고 향이 강한 음식은 피하기",
          "처방된 항구토제는 예정 시간에 규칙적으로 복용",
        ],
      },
      { type: "h2", id: "fatigue", text: "피로" },
      {
        type: "p",
        text: "암 피로는 ‘쉰다고 사라지지 않는’ 경우가 많습니다. 역설적이지만 가벼운 신체활동이 피로를 줄이는 데 도움이 된다는 근거가 강합니다(ASCO 권고). 하루 10~15분의 짧은 산책부터 시작해 보세요.",
      },
      { type: "svg", name: "traffic" },
      { type: "h2", id: "mucositis", text: "입안 점막염" },
      {
        type: "ul",
        items: [
          "부드러운 칫솔로 살살, 자극적인(맵고 신) 음식 피하기",
          "식염수나 처방 가글로 자주 헹구기",
          "부드럽고 촉촉한 음식(죽·달걀찜) 위주로",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "즉시 연락해야 하는 응급 신호(레드플래그)",
        text: "항암 중 38℃ 이상의 발열(발열성 호중구감소 위험), 호흡곤란, 가슴 통증, 멈추지 않는 출혈, 심한 탈수·의식 저하는 응급입니다. 119를 우선 고려하고, 온코케어 앱의 응급 안내로 가까운 가용 응급실을 확인하세요.",
      },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 앱 팁",
        text: "매일 체크인에 증상을 남기면 표준 척도(PRO-CTCAE) 기반으로 변화를 살피고, 위험 신호가 감지되면 케어팀·응급으로 연결합니다.",
      },
    ],
    faq: [
      {
        q: "항구토제는 토할 때만 먹으면 되나요?",
        a: "아닙니다. 구역·구토는 시작되고 나면 다스리기 어려워, 처방된 항구토제를 예정 시간에 규칙적으로 복용하는 것이 더 효과적입니다. 복용법은 처방에 따르고, 잘 듣지 않으면 의료진과 상의하세요.",
      },
      {
        q: "피곤한데 운동을 해도 되나요?",
        a: "무리하지 않는 선의 가벼운 활동(짧은 산책 등)은 오히려 암 피로를 줄이는 데 도움이 된다는 근거가 있습니다. 다만 빈혈·발열 등이 있을 땐 무리하지 말고, 운동 강도는 의료진과 상의해 정하세요.",
      },
      {
        q: "열이 나면 해열제를 먹고 지켜봐도 되나요?",
        a: "항암 치료 중 38℃ 이상 발열은 응급일 수 있습니다(발열성 호중구감소증). 해열제로 열을 감추기보다 즉시 의료진에게 연락하거나 응급실을 고려하세요.",
      },
    ],
  },

  {
    slug: "clinical-trials-guide",
    title: "임상시험, 나에게 맞을까? — 쉽게 이해하는 참여 가이드",
    description:
      "임상시험이 무엇인지, 상(phase) 구분과 참여 절차, 이점과 유의점, 그리고 내게 맞는 시험을 찾아 주치의와 상의하는 방법까지 쉬운 말로 정리했습니다.",
    category: "임상시험",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-08",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "clinical-trials",
    heroAlt: "노트와 펜, 안경과 차가 놓인 차분한 책상",
    tldr: [
      "임상시험은 새로운 치료·검사법의 효과와 안전성을 확인하는 연구입니다.",
      "1상(안전성)→2상(효과 탐색)→3상(표준치료와 비교)으로 단계가 나뉩니다.",
      "참여는 자발적이며 언제든 중단할 수 있습니다 — 결정은 반드시 주치의·시험 담당자와 상의하세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "‘임상시험’이라는 말이 막연하게 느껴질 수 있지만, 오늘의 표준 치료도 모두 임상시험을 거쳐 만들어졌습니다. 임상시험은 정해진 규칙과 안전장치(심의·동의) 아래 진행되는 연구입니다.",
      },
      { type: "h2", id: "phase", text: "임상시험의 단계(상)" },
      { type: "svg", name: "phases" },
      {
        type: "ul",
        items: [
          "1상: 주로 안전성과 적절한 용량을 확인",
          "2상: 특정 암종에서 효과가 있는지 탐색",
          "3상: 기존 표준치료와 효과·안전성을 비교",
        ],
      },
      { type: "h2", id: "pros-cons", text: "이점과 유의점" },
      {
        type: "p",
        text: "새로운 치료 기회를 먼저 접하고, 체계적인 관찰과 관리를 받을 수 있다는 이점이 있습니다. 다만 새로운 치료의 효과가 아직 확립되지 않았고 예상치 못한 부작용 가능성도 있어, 이점과 위험을 함께 이해하고 결정하는 것이 중요합니다.",
      },
      {
        type: "callout",
        tone: "info",
        title: "참여자의 권리",
        text: "임상시험 참여는 전적으로 자발적이며, 이유를 밝히지 않고 언제든 중단할 수 있습니다. 중단하더라도 기존에 받을 수 있는 표준 치료에는 불이익이 없습니다.",
      },
      { type: "h2", id: "find", text: "내게 맞는 시험 찾기" },
      {
        type: "p",
        text: "서울온케어의원의 AI 케어 앱 OnCoCare는 내 암종·상태를 바탕으로 국내 의료기관에서 모집 중인 임상시험(CRIS·식약처 승인 정보 등)을 근거와 함께 찾아 쉬운 말로 안내합니다. 관심 있는 시험은 담당 주치의·시험 책임자와 적격 여부를 반드시 상의하세요.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 글은 임상시험에 대한 일반적 정보·교육이며, 특정 시험의 참여를 권유하지 않습니다. 참여 여부와 적격성은 주치의·시험 담당자의 판단이 필요합니다.",
      },
    ],
    faq: [
      {
        q: "임상시험에 참여하면 ‘실험 대상’이 되는 건가요?",
        a: "임상시험은 윤리위원회(IRB) 심의와 사전 설명·동의 절차, 정해진 안전 관리 아래 진행되는 연구입니다. 참여자는 충분한 설명을 듣고 스스로 결정하며, 언제든 중단할 권리가 있습니다.",
      },
      {
        q: "위약(가짜약)만 받게 될까 봐 걱정돼요.",
        a: "암 임상시험에서는 표준치료를 받지 못하게 하는 경우는 드물며, 보통 표준치료에 새로운 치료를 더하거나 비교하는 방식이 많습니다. 위약 사용 여부는 시험마다 다르므로 동의 전 담당자에게 정확히 확인하세요.",
      },
      {
        q: "비용은 어떻게 되나요?",
        a: "시험 관련 약제·검사 비용의 부담은 시험마다 다릅니다. 참여 전 어떤 비용이 지원되고 어떤 비용이 본인 부담인지 시험 담당자에게 서면으로 확인하는 것이 좋습니다.",
      },
    ],
  },

  {
    slug: "reading-lab-results",
    title: "검사·판독지 쉽게 읽기 — 혈액검사부터 영상까지",
    description:
      "혈액검사·영상·병리 결과지의 흔한 용어와 수치를 쉬운 말로 풀이합니다. 정상범위의 의미, 추세를 보는 법, 그리고 스스로 판단하지 말아야 하는 이유까지.",
    category: "정보·교육",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-08",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 5,
    hero: "reading-lab",
    heroAlt: "폴더와 간단한 그래프, 돋보기가 놓인 정돈된 책상",
    tldr: [
      "수치 하나가 아니라 ‘추세(변화)’와 전체 맥락이 더 중요합니다.",
      "정상범위를 살짝 벗어나도 임상적으로 문제없는 경우가 많습니다.",
      "결과 해석과 판단은 반드시 주치의의 몫 — 이 글은 이해를 돕기 위한 것입니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "검사 결과지를 받으면 낯선 약어와 숫자에 마음이 덜컥할 수 있습니다. 용어의 큰 그림만 알아도 불필요한 불안을 줄이고, 진료 때 더 좋은 질문을 할 수 있습니다.",
      },
      { type: "h2", id: "blood", text: "혈액검사에서 자주 보는 것" },
      {
        type: "ul",
        items: [
          "WBC(백혈구)·ANC(호중구): 감염 방어와 관련 — 항암 중 낮아질 수 있어요",
          "Hb(혈색소): 빈혈 여부 — 낮으면 피로·어지럼",
          "PLT(혈소판): 지혈과 관련 — 낮으면 멍·출혈 주의",
          "ALT/AST: 간 기능, Cr: 신장 기능의 참고 지표",
        ],
      },
      { type: "svg", name: "labtrend" },
      { type: "h2", id: "trend", text: "‘한 번의 수치’보다 ‘추세’" },
      {
        type: "p",
        text: "수치는 몸 상태·수분·검사 시점에 따라 오르내립니다. 한 번 정상범위를 벗어났다고 곧바로 문제라고 보기 어렵고, 여러 번의 흐름과 증상, 다른 검사와 함께 해석해야 합니다. 온코케어 앱은 검사 기록을 시계열로 모아 추세를 함께 보여드립니다.",
      },
      { type: "h2", id: "imaging", text: "영상·병리 판독지" },
      {
        type: "p",
        text: "CT·MRI 판독문의 ‘특이소견 없음’, ‘안정적’ 같은 표현은 좋은 신호일 수 있지만, 표현 하나로 병기나 예후를 단정할 수는 없습니다. 병리 결과 역시 전체 맥락 속에서 주치의가 종합해 판단합니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "중요",
        text: "이 글과 앱의 해석은 ‘이해를 돕는 교육’이며 진단이 아닙니다. 수치·판독의 의미와 다음 계획은 반드시 담당 주치의와 상의하세요.",
      },
    ],
    faq: [
      {
        q: "정상범위를 벗어났는데 많이 걱정해야 하나요?",
        a: "정상범위는 통계적 기준일 뿐, 살짝 벗어나도 임상적으로 문제없는 경우가 많습니다. 값 하나보다 추세와 증상, 다른 검사와의 종합이 중요하므로 주치의의 해석을 확인하세요.",
      },
      {
        q: "검사지를 사진으로 올리면 앱이 진단해 주나요?",
        a: "온코케어는 어려운 용어를 쉬운 말로 풀어 ‘이해’를 돕고 근거를 함께 보여줄 뿐, 진단하지 않습니다. 진단·치료 결정은 주치의의 영역입니다. 원본 사진은 분석 후 즉시 삭제해 개인정보를 보호합니다.",
      },
      {
        q: "호중구(ANC)가 낮다고 나왔어요. 무엇을 조심하죠?",
        a: "호중구가 낮으면 감염에 취약할 수 있어 손 위생·익힌 음식·사람 많은 곳 주의가 도움이 됩니다. 특히 38℃ 이상 발열은 응급 신호이니 즉시 의료진에게 연락하세요.",
      },
    ],
  },

  {
    slug: "mind-care-during-treatment",
    title: "치료와 마음 — 불안·우울을 돌보는 법",
    description:
      "암 치료 과정의 불안·우울·수면 문제는 흔하고 자연스러운 반응입니다. 스스로 마음을 돌보는 방법과, 전문적 도움이 필요한 신호, 위기 시 도움받는 곳을 정리했습니다.",
    category: "마음돌봄",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-08",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 5,
    hero: "mind-care",
    heroAlt: "아침 햇살이 드는 창가의 작은 화분과 컵",
    tldr: [
      "치료 중 불안·우울·수면 문제는 흔하며, 약함의 표시가 아닙니다.",
      "규칙적인 생활·가벼운 활동·감정 표현이 도움이 됩니다.",
      "2주 이상 지속되거나 일상이 어려우면 전문가의 도움을, 위기 생각이 들면 즉시 도움을 요청하세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "진단과 치료를 겪으며 마음이 흔들리는 것은 지극히 자연스러운 일입니다. 감정을 억누르기보다 알아차리고 돌보는 것이 회복의 한 부분입니다.",
      },
      { type: "h2", id: "self", text: "스스로 마음을 돌보는 법" },
      {
        type: "ul",
        items: [
          "규칙적인 수면·식사·가벼운 활동으로 하루의 리듬 만들기",
          "느끼는 감정을 글·대화로 표현하기(참지 않기)",
          "호흡·이완·짧은 산책으로 긴장 풀기",
          "믿을 수 있는 사람이나 보호자와 마음 나누기",
        ],
      },
      { type: "svg", name: "moodweather" },
      { type: "h2", id: "help", text: "전문적 도움이 필요한 신호" },
      {
        type: "ul",
        items: [
          "2주 이상 지속되는 우울·불안으로 일상이 힘들 때",
          "잠들기 어렵거나 자주 깨는 수면 문제가 계속될 때",
          "식욕·의욕이 크게 떨어지고 흥미를 잃을 때",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 심리 지지",
        text: "온코케어 앱의 심리 상담은 암환자 심리종양학 지식을 근거로 마음을 들어주는 대화형 지지입니다. 다만 이는 전문 치료를 대체하지 않으며, 필요할 때 전문기관 연결을 돕습니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "위기 상황이라면",
        text: "죽고 싶은 생각이 들거나 스스로를 해치고 싶다면 혼자 견디지 마세요. 자살예방상담 109(24시간), 정신건강상담 1577-0199에 지금 연락하거나 가까운 사람에게 알리세요. 온코케어는 위기 신호 감지 시 안전자원으로 연결합니다.",
      },
    ],
    faq: [
      {
        q: "치료만으로도 벅찬데 마음까지 챙길 여유가 없어요.",
        a: "마음 돌봄은 거창한 것이 아니라 규칙적인 리듬, 짧은 산책, 감정 표현처럼 작은 것에서 시작합니다. 불안·우울은 치료 경과와 삶의 질에도 영향을 줄 수 있어, 힘들 땐 도움을 청하는 것이 회복의 일부입니다.",
      },
      {
        q: "우울한 게 오래가는데 병원에 말해도 되나요?",
        a: "네. 디스트레스(심리적 어려움)는 흔하고 관리 대상입니다. 2주 이상 지속되거나 일상이 어려우면 주치의·정신건강 전문가에게 알리세요. 부끄러운 일이 아니며 적절한 도움을 받을 수 있습니다.",
      },
      {
        q: "앱의 심리 상담이 전문 상담을 대신하나요?",
        a: "아닙니다. 앱의 심리 지지는 마음을 나누고 대처를 돕는 보조 수단이며, 전문 심리·정신건강 치료를 대체하지 않습니다. 위기나 지속되는 어려움은 전문기관의 도움이 필요합니다.",
      },
    ],
  },
{
    slug: "chemo-admission-checklist",
    title: "항암 입원 준비물 체크리스트 — 1차 vs 2차 이후, 뭐가 다를까",
    description:
      "항암 입원 준비물을 차수별·상황별로 정리한 실전 체크리스트입니다. 기본 준비물부터 1차 입원 때 특히 챙길 것, 2차 이후 겪어본 부작용에 맞춘 맞춤 준비물까지 인쇄·저장해 쓸 수 있게 구성했습니다.",
    category: "치료준비",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-12",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "chemo-admission-checklist",
    heroAlt: "병원 가방에 담긴 세면도구·서류·충전기와 체크리스트 메모",
    tldr: [
      "신분증·보험증·복용약 목록·세면도구는 몇 차든 항상 기본 준비물입니다.",
      "1차 입원은 '무엇이 필요한지 모르는 상태'라 여유 있게, 2차 이후는 지난 회차에 겪은 부작용에 맞춰 필요한 것만 챙기세요.",
      "체크리스트를 사진으로 저장해두면 입원 당일 아침 허둥대지 않습니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "첫 항암 입원을 앞두고 짐을 싸다 보면 무엇이 꼭 필요하고 무엇이 불필요한 짐인지 감이 오지 않습니다. 아래 체크리스트는 몇 차 입원이든 공통으로 필요한 기본 준비물과, 1차와 2차 이후에 각각 달라지는 준비물을 나눠 정리했습니다.",
      },
      { type: "h2", id: "basic", text: "기본 준비물 — 몇 차든 공통" },
      {
        type: "ul",
        items: [
          "신분증·건강보험증·진료의뢰서(있다면)",
          "복용 중인 약 전체 목록 — 약국 봉투 그대로 가져가면 확인이 빠릅니다",
          "실손보험 관련 서류(필요시)",
          "휴대폰 충전기·보조배터리, 여유 있는 멀티탭",
          "편한 옷과 환자복 위에 걸칠 얇은 겉옷, 미끄럼 방지 슬리퍼",
          "세면도구·수건, 개인 컵과 빨대(구역이 있을 때 물 마시기 편함)",
          "이어폰, 마스크 여벌",
        ],
      },
      { type: "h2", id: "first", text: "1차 입원 때 특히 챙기면 좋은 것" },
      {
        type: "p",
        text: "1차 입원은 내 몸이 항암제에 어떻게 반응할지 아직 모르는 상태입니다. 그래서 특정 부작용에 맞춘 물품보다는 범용적인 대비물과, 앞으로의 기록을 위한 도구를 챙기는 것이 좋습니다.",
      },
      {
        type: "ul",
        items: [
          "담당의·병동 직통 연락처를 휴대폰에 저장",
          "증상을 남길 노트나 메모 앱(또는 온코케어 앱)",
          "구역이 있을 수 있으니 향이 강하지 않은 소량 간식",
          "생리대 등 개인 위생용품",
          "병실 냉방에 대비한 무릎담요",
        ],
      },
      { type: "h2", id: "after2", text: "2차 이후 — 겪어본 부작용에 맞춘 준비" },
      {
        type: "p",
        text: "2차부터는 지난 회차에서 실제로 겪은 반응을 알고 있으므로, 짐을 무겁게 챙기기보다 필요했던 것만 정확히 채우는 편이 낫습니다. 지난 입원 후 기록해둔 증상을 다시 보고 아래에서 해당하는 항목을 챙기세요.",
      },
      {
        type: "ul",
        items: [
          "구역이 있었다면 — 생강차 티백, 무향 물티슈",
          "입안이 헐었다면 — 부드러운 칫솔, 처방받은 가글액",
          "변비·설사가 있었다면 — 의료진이 처방한 관련 상비약",
          "손발 저림이 있었다면 — 두꺼운 양말, 얇은 장갑",
          "탈모가 진행 중이면 — 비니나 스카프, 두피 자극이 적은 순한 샴푸",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "짐 싸기 전에 확인",
        text: "병동마다 반입 금지 물품(생화분, 특정 음식, 전열기구 등)이 다를 수 있습니다. 입원 전 병동에 전화로 확인하는 것이 가장 정확합니다.",
      },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 앱 팁",
        text: "회차마다 겪은 증상을 온코케어 앱에 기록해두면, 다음 입원 전에 지난번 경험을 바탕으로 한 맞춤 체크리스트를 자동으로 만들어 드립니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 체크리스트는 일반적인 준비 안내이며, 실제 필요한 준비물은 항암요법 종류와 병원 규정에 따라 다를 수 있습니다. 정확한 목록은 담당 의료진·병동에 확인하세요.",
      },
    ],
    faq: [
      {
        q: "며칠 입원하는지에 따라 짐 양이 달라지나요?",
        a: "네. 입원 기간은 처방받은 항암요법에 따라 하루~여러 날로 크게 다릅니다. 정확한 예상 기간은 담당의에게 확인하고, 애매하면 하루 이틀 여유분을 더 챙기는 편이 안전합니다.",
      },
      {
        q: "화장품이나 향수를 가져가도 되나요?",
        a: "향이 강한 제품은 본인의 구역을 유발하거나 같은 병실 다른 환자에게 불편을 줄 수 있어 무향이나 순한 제품을 권장합니다.",
      },
      {
        q: "보호자도 짐을 챙겨야 하나요?",
        a: "보호자가 상주할 경우 별도의 간단한 세면도구·충전기·간식을 챙기면 좋습니다. 보호자를 위한 준비는 '보호자를 위한 첫 항암 준비 가이드'에서 더 자세히 다룹니다.",
      },
      {
        q: "뭔가 빠뜨렸어요. 병원에서 살 수 있나요?",
        a: "대부분의 병원에는 매점이나 편의점이 있어 세면도구·간식 등 기본적인 것은 현장에서 구입할 수 있습니다. 다만 서류나 복용약 목록처럼 대체가 어려운 것은 미리 챙기는 것이 좋습니다.",
      },
    ],
  },

  {
    slug: "neutropenic-fever-emergency",
    title: "호중구 감소증 발열 — 몇 도부터 응급실인가",
    description:
      "발열성 호중구감소증의 정확한 체온 기준(단회 38.3℃ 이상, 또는 38.0℃ 이상 1시간 지속)과 즉시 해야 할 행동, 해열제를 먼저 먹으면 안 되는 이유를 정리했습니다. 항암 환자 보호자와 환자 모두를 위한 응급 대응 가이드입니다.",
    category: "응급·안전",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-12",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 5,
    hero: "neutropenic-fever-emergency",
    heroAlt: "체온계와 시계가 함께 놓인 긴박한 분위기의 사진",
    tldr: [
      "구강 체온이 단 한 번이라도 38.3℃ 이상, 또는 38.0℃ 이상이 1시간 넘게 지속되면 발열성 호중구감소증을 의심하고 즉시 병원에 연락하세요.",
      "해열제를 먼저 먹고 지켜보지 마세요 — 열을 가리면 진짜 위험 신호를 놓칠 수 있습니다.",
      "항암제 투여 후 감염 방어력이 가장 낮아지는 시기(흔히 투여 후 7~14일경)에는 체온계를 항상 곁에 두세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 치료 중의 발열은 단순 감기와 다르게 다뤄야 합니다. 호중구가 낮은 상태에서의 열은 몸이 감염과 싸울 방어력을 거의 갖추지 못했다는 신호일 수 있고, 짧은 시간 안에 위중한 상태로 진행할 수 있어 국내외 종양학회·감염학회가 이를 응급 상태로 규정하고 있습니다.",
      },
      { type: "h2", id: "threshold", text: "정확한 기준: 몇 도부터 응급인가" },
      {
        type: "p",
        text: "발열성 호중구감소증(febrile neutropenia)은 다음 중 하나에 해당하면 의심합니다.",
      },
      {
        type: "ul",
        items: [
          "구강 체온이 단 한 번이라도 38.3℃(101°F) 이상으로 측정될 때",
          "구강 체온이 38.0℃(100.4°F) 이상으로 1시간 이상 지속될 때",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "측정 부위에 주의하세요",
        text: "겨드랑이(액와) 체온은 구강 체온보다 낮게 측정되는 경향이 있습니다. 평소 쓰는 체온계와 측정 부위를 담당 병원에 미리 확인해두고, 수치가 애매하면 오한·컨디션 저하 같은 동반 증상도 함께 고려해 판단하세요.",
      },
      { type: "h2", id: "why", text: "왜 응급인가" },
      {
        type: "p",
        text: "호중구는 세균 감염과 맞서 싸우는 백혈구입니다. 항암제로 수치가 급격히 낮아지면(특히 500/mm³ 미만) 몸은 감염을 막아낼 방어력을 거의 갖추지 못합니다. 이 상태의 발열은 이미 진행 중인 감염의 신호일 수 있고, 치료가 늦어지면 패혈증으로 빠르게 악화될 수 있어 '시간이 곧 안전'인 상황입니다.",
      },
      { type: "h2", id: "dontdo", text: "해열제부터 먹으면 안 되는 이유" },
      {
        type: "ul",
        items: [
          "해열제로 열을 낮추면 감염이 진행 중이라는 신호가 가려져 병원 도착이 늦어질 수 있습니다",
          "이부프로펜 등 소염진통제(NSAID) 계열은 혈소판 수치가 낮을 때 출혈 위험을 높이고 신장에 부담을 줄 수 있어 임의로 복용해서는 안 됩니다",
          "해열제 복용 여부는 담당 병원의 지시를 먼저 받아야 합니다 — 의료진이 사전에 안내한 경우가 아니라면 스스로 판단해 먹지 마세요",
        ],
      },
      { type: "h2", id: "whattodo", text: "지금 해야 할 것" },
      {
        type: "ul",
        items: [
          "체온을 한 번 더 정확히 재서 확인",
          "담당 병원의 항암 병동 또는 응급 연락처로 즉시 전화 — 야간·주말에도 대표번호나 응급실이 있습니다",
          "오한과 함께 혈압이 떨어지거나 의식이 흐려지면 119",
          "병원 도착 시 '항암 치료 중이며 발열이 있다'고 가장 먼저 알리기 — 혈액배양 등 우선 처치가 필요합니다",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 앱 팁",
        text: "온코케어 앱은 체온을 기록하면 기준을 넘는 순간 즉시 알림을 띄우고 담당 병원 연락처를 한 번에 보여줍니다. 체온계를 잡는 순간 앱을 여는 것이 가장 빠른 첫 행동입니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 글은 일반적인 기준 안내이며 개인별 진단이 아닙니다. 정확한 대응 기준은 담당 항암 병동에서 안내받은 지침(항암치료 동의서·응급연락카드)을 우선하세요.",
      },
    ],
    faq: [
      {
        q: "미열(37.5℃)인데도 병원에 연락해야 하나요?",
        a: "38.0℃ 미만이라도 오한, 몸살, 컨디션이 급격히 나빠지는 느낌이 있으면 기준 체온에 도달하지 않았더라도 먼저 병원에 전화해 상담하는 것이 안전합니다.",
      },
      {
        q: "밤에 열이 나면 무조건 응급실로 가야 하나요?",
        a: "대부분의 항암 병동은 24시간 연락 가능한 대표번호나 응급 연락체계를 갖추고 있습니다. 우선 그곳으로 전화하고, 연결이 안 되거나 상태가 급격히 나빠지면 응급실로 가세요.",
      },
      {
        q: "호중구 수치를 모르는데 열이 나면 무조건 응급인가요?",
        a: "항암제 투여 후 특히 7~14일경(수치가 가장 낮아지는 시기)에는 정확한 수치를 몰라도 발열 자체를 응급 신호로 간주하고 병원에 연락하는 것이 안전합니다. 이 시기는 항암요법마다 다르므로 담당의에게 본인의 예상 시기를 확인해두세요.",
      },
      {
        q: "타이레놀(아세트아미노펜)은 먹어도 되나요?",
        a: "담당 의료진이 특정 상황에서 미리 복용을 지시한 경우가 아니라면, 자의로 복용하기 전에 반드시 병원에 먼저 연락하세요. 해열제로 열을 가리는 것 자체가 위험 신호를 놓치는 원인이 될 수 있습니다.",
      },
    ],
  },

  {
    slug: "low-neutrophil-daily-life",
    title: "호중구 낮을 때 — 감염 예방 생활수칙 (수치별 가이드)",
    description:
      "호중구(ANC) 수치가 낮을 때 수치 구간별로 무엇을 조심해야 하는지 정리했습니다. 음식·외출·사람 만나기·구강·상처 관리까지, 과잉 격리 없이 필요한 만큼만 지키는 실용 수칙입니다.",
    category: "증상관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-12",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "low-neutrophil-daily-life",
    heroAlt: "손 씻는 모습과 마스크, 완전히 익힌 음식이 담긴 식탁",
    tldr: [
      "호중구(ANC) 수치가 낮을수록 감염 예방 수칙을 더 철저히 지켜야 하지만, 무조건 집에만 있을 필요는 없습니다.",
      "날음식·회·비살균 유제품은 피하고, 손 위생과 익힌 음식이 가장 확실한 예방법입니다.",
      "38℃ 이상 발열은 수치와 무관하게 즉시 응급입니다 — 응급 기준은 별도 글에서 확인하세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 치료를 받으면 정기 혈액검사에서 호중구(ANC) 수치를 확인하게 됩니다. 낮게 나오면 막연히 불안해지기 쉽지만, 수치별로 무엇을 조심해야 하는지 알면 막연한 공포 대신 구체적인 행동으로 바꿀 수 있습니다.",
      },
      { type: "h2", id: "numbers", text: "호중구 수치, 어느 정도부터 조심해야 하나" },
      {
        type: "p",
        text: "병원·검사기관마다 표기 범위가 조금씩 다를 수 있지만, 임상에서 흔히 참고하는 대략적인 구간은 다음과 같습니다. 아래는 이해를 돕는 참고용이며, 정확한 해석은 담당 의료진의 몫입니다.",
      },
      {
        type: "ul",
        items: [
          "1,500/mm³ 이상 — 대체로 정상 범위",
          "1,000~1,500/mm³ — 경도 감소, 평소 위생수칙 정도로 충분",
          "500~1,000/mm³ — 중등도 감소, 감염 예방 수칙을 적극적으로",
          "500/mm³ 미만 — 중증 감소, 감염에 매우 취약한 상태",
        ],
      },
      { type: "svg", name: "labtrend" },
      { type: "h2", id: "dos", text: "수치별로 뭘 조심하나" },
      { type: "h3", text: "음식" },
      {
        type: "ul",
        items: [
          "고기·생선·달걀은 완전히 익혀서",
          "회·육회·날달걀·저온살균하지 않은 유제품은 피하기",
          "껍질을 벗겨 먹을 수 있는 과일 위주로",
          "끓인 물이나 정수된 물을 마시기",
        ],
      },
      { type: "h3", text: "외출과 사람 만나기" },
      {
        type: "p",
        text: "수치가 500 미만처럼 매우 낮을 때만 사람이 몹시 붐비는 곳이나 환기가 안 되는 밀폐된 공간을 피하면 됩니다. 마스크와 손소독제를 챙기면 대부분의 일상 외출은 가능하며, 실제로 조심해야 할 것은 '많은 사람'보다 '감기·독감 증상이 있는 사람과의 접촉'입니다.",
      },
      { type: "h3", text: "구강·상처 관리" },
      {
        type: "ul",
        items: [
          "부드러운 칫솔로 하루 2~3회 양치",
          "상처나 긁힌 곳은 바로 소독하고 덮어두기",
          "손톱은 짧게 유지",
          "화단 흙이나 반려동물 배설물을 만질 땐 장갑 착용",
        ],
      },
      { type: "h2", id: "overisolation", text: "과잉 격리는 오히려 해롭습니다" },
      {
        type: "p",
        text: "수치가 낮다는 불안감 때문에 가족과의 접촉을 완전히 끊거나 집 밖을 전혀 나가지 않는 경우가 있습니다. 하지만 이는 근거가 부족할 뿐 아니라 심리적 고립과 우울로 이어질 수 있습니다. 필요한 것은 전면 격리가 아니라 위에서 소개한 표적화된 예방 수칙입니다. 손 위생, 익힌 음식, 아픈 사람과의 접촉 회피 — 이 세 가지가 핵심입니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "발열은 예외입니다",
        text: "수치와 상관없이 38℃ 이상의 열이 나면 예방 수칙을 잘 지켰는지와 무관하게 응급 신호입니다. 즉시 담당 병원에 연락하세요.",
      },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 앱 팁",
        text: "최근 혈액검사 수치를 온코케어 앱에 입력하면 현재 수치에 맞는 예방 수칙을 자동으로 안내하고, 다음 검사 전까지 지켜야 할 기간을 함께 알려드립니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 글은 일반적인 안내이며 개인별 위험도는 암종·치료 단계·동반 질환에 따라 다릅니다. 구체적인 생활 범위는 담당 의료진과 상의하세요.",
      },
    ],
    faq: [
      {
        q: "호중구 수치가 낮으면 무조건 마스크를 써야 하나요?",
        a: "1,000/mm³ 미만처럼 중등도 이상 감소 시에는 사람이 많은 곳에서 마스크 착용을 권장하지만 항상 필수인 것은 아닙니다. 담당 의료진의 구체적인 지침을 따르세요.",
      },
      {
        q: "반려동물을 키우는데 계속 함께 지내도 되나요?",
        a: "대부분 가능합니다. 다만 배설물 처리나 목욕은 가급적 다른 가족에게 맡기거나 장갑을 착용하고, 만진 뒤에는 손을 철저히 씻으세요.",
      },
      {
        q: "수치가 낮을 때 예방접종을 해도 되나요?",
        a: "생백신은 피해야 하는 경우가 많고, 접종 시기와 종류는 반드시 담당 의료진과 상의해 결정해야 합니다.",
      },
      {
        q: "다음 항암 스케줄이 늦어질 수도 있나요?",
        a: "네, 수치가 기준 이상으로 회복되지 않으면 투여를 연기하거나 용량을 조절할 수 있습니다. 이는 담당의가 검사 결과를 보고 판단합니다.",
      },
    ],
  },

  {
    slug: "when-to-call-your-oncology-team",
    title: "항암 부작용, 언제 병원에 연락해야 하나 — 신호등 표",
    description:
      "항암 부작용을 집에서 관찰해도 되는 것, 오늘 중 연락할 것, 즉시 응급인 것 세 단계로 나눈 신호등 표입니다. 한밤중에도 30초 안에 판단할 수 있도록 만든 실용 기준입니다.",
    category: "응급·안전",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-12",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 5,
    hero: "when-to-call-your-oncology-team",
    heroAlt: "초록·노랑·빨강 신호등 아이콘과 전화기가 놓인 이미지",
    tldr: [
      "증상을 세 단계(관찰/오늘 중 연락/즉시 응급)로 나누면 언제 전화할지 헷갈리지 않습니다.",
      "38℃ 이상 발열, 심한 호흡곤란, 멈추지 않는 출혈은 무조건 즉시 응급입니다.",
      "애매하면 참지 말고 병동에 먼저 전화하세요 — 사소해 보이는 질문도 환영받습니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 치료 중 겪는 증상 하나하나가 응급인지, 하루 지켜봐도 되는지 판단하기는 쉽지 않습니다. 아래 표는 흔한 증상을 세 단계로 나눈 것으로, 이 표 하나만 저장해두면 한밤중에도 빠르게 판단할 수 있습니다.",
      },
      { type: "svg", name: "traffic" },
      { type: "h2", id: "green", text: "집에서 관찰해도 되는 신호 (초록)" },
      {
        type: "ul",
        items: [
          "37.5℃ 미만의 가벼운 미열감",
          "식사는 가능한 정도의 가벼운 메스꺼움",
          "평소보다 약간 더한 피로감",
          "변비나 묽은 변이 1~2회",
          "가벼운 손발 저림",
        ],
      },
      { type: "h2", id: "yellow", text: "오늘 중 병원에 연락할 신호 (노랑)" },
      {
        type: "ul",
        items: [
          "37.5~38.0℃ 사이 미열이 몇 시간 이상 지속",
          "하루 3회 이상 구토, 또는 24시간 넘게 지속되는 설사",
          "입안이 헐어 식사가 힘든 상태",
          "평소와 다른 무기력함이나 어지럼",
          "소변량이 눈에 띄게 줄어듦",
        ],
      },
      { type: "h2", id: "red", text: "즉시 응급 — 지금 전화하거나 119 (빨강)" },
      {
        type: "ul",
        items: [
          "구강 체온이 단 한 번이라도 38.3℃ 이상, 또는 38.0℃ 이상이 1시간 이상 지속",
          "숨이 차거나 가슴 통증",
          "멈추지 않는 출혈(코피·잇몸 출혈·혈변 등)",
          "의식이 흐려지거나 반응이 느려짐",
          "심한 오한과 함께 온몸이 떨림",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "애매할 때의 원칙",
        text: "두 단계 사이에서 애매하면 항상 더 급한 단계로 판단하세요. 밤이라서, 사소해 보여서 망설이지 마세요 — 담당 병동은 이런 연락을 위해 존재합니다.",
      },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 앱 팁",
        text: "온코케어 앱은 매일 체크인한 증상을 자동으로 신호등 단계에 대입해, 노랑·빨강에 해당하면 담당 병원 연락처를 바로 띄워줍니다. 판단을 대신하는 것이 아니라 판단할 시간을 벌어주는 도구입니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 표는 흔한 상황을 단순화한 일반 안내이며, 실제 위급도는 개인 병력·현재 치료·복용 약물에 따라 다를 수 있습니다. 최종 판단은 담당 의료진의 몫입니다.",
      },
    ],
    faq: [
      {
        q: "밤 11시에 노랑 단계 증상이면 다음 날 아침까지 기다려도 되나요?",
        a: "아닙니다. 노랑 단계는 '오늘 중' 연락이 원칙입니다. 야간에도 당직이나 응급실로 연결 가능한 대표번호로 지금 연락하는 것을 권장합니다.",
      },
      {
        q: "신호등 표에 없는 증상이 생겼어요. 어떻게 하나요?",
        a: "이 표는 흔한 증상을 예시로 정리한 것일 뿐입니다. 목록에 없는 낯선 증상이 새로 생겼다면 그 자체로 병원에 물어볼 이유가 됩니다.",
      },
      {
        q: "응급실에 가면 항암 환자라고 먼저 말해야 하나요?",
        a: "네, 반드시 알려야 합니다. 항암 치료 중이라는 것과 마지막 투여일을 알리면 감염 위험군으로 분류되어 더 신속한 처치를 받을 수 있습니다.",
      },
    ],
  },

{
    slug: "chemo-cycle-schedule-management",
    title: "항암 차수 일정 관리하는 법 — 왜 밀리고, 어떻게 기록할까",
    description:
      "항암 치료의 '차수(사이클)'가 무엇인지, 일정이 왜 미뤄지는지(혈액수치 미회복 등), 지연됐을 때 무엇을 확인해야 하는지와 스스로 만드는 일정표 구조를 정리했습니다.",
    category: "치료준비",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-12",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "chemo-cycle-schedule-management",
    heroAlt: "탁상 달력에 항암 일정과 체크 표시가 되어 있고 옆에 물잔이 놓인 모습",
    tldr: [
      "차수(사이클)는 '약물 투여 + 회복(휴약) 기간'이 한 단위이며, 전체 치료 계획은 이 단위가 몇 번 반복되는지로 짜입니다.",
      "일정이 가장 자주 밀리는 이유는 투여 전 혈액검사에서 호중구·혈소판 수치가 충분히 회복되지 않았기 때문입니다.",
      "일정이 밀렸다면 이유와 다음 검사일을 확인해 기록해 두면, 다음 진료에서 더 정확히 질문할 수 있습니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "'다음 차수가 미뤄졌어요'라는 말을 들으면 치료가 잘못되고 있는 건 아닌지 불안해지기 쉽습니다. 하지만 차수 일정은 원래도 몸 상태에 따라 조정되도록 설계되어 있습니다. 구조를 알면 불안 대신 '무엇을 확인해야 하는지'가 보입니다.",
      },
      { type: "h2", id: "what-is-cycle", text: "차수(사이클)란 무엇인가요" },
      {
        type: "p",
        text: "항암 치료 한 '차수(사이클)'는 보통 약물을 투여하는 날(또는 며칠)과, 몸이 회복하도록 쉬는 휴약 기간을 합친 단위입니다. 예를 들어 '3주 간격 6차'라면 3주가 한 사이클이고, 이를 6번 반복하는 계획입니다. 총 차수 수와 간격은 암종·병기·약제에 따라 담당 의료진이 정하며, 치료 반응이나 부작용에 따라 도중에 조정될 수 있습니다.",
      },
      { type: "svg", name: "phases" },
      { type: "h2", id: "why-delay", text: "일정이 왜 밀릴까요" },
      {
        type: "p",
        text: "가장 흔한 이유는 다음 차수 투여 전 혈액검사입니다. 항암제는 골수 기능을 일시적으로 억제해 백혈구(특히 호중구)와 혈소판 수치를 떨어뜨릴 수 있는데, 이 수치가 충분히 회복되지 않은 상태에서 약을 그대로 투여하면 감염이나 출혈 위험이 커집니다. 그래서 수치가 기준에 못 미치면 의료진이 안전을 위해 투여를 며칠에서 1~2주 정도 미루는 경우가 많습니다.",
      },
      {
        type: "ul",
        items: [
          "호중구·혈소판 등 혈액수치가 충분히 회복되지 않았을 때",
          "발열·감염이 있거나 의심될 때",
          "간·신장 기능 수치가 기준을 벗어났을 때",
          "이전 차수의 부작용(구내염·설사 등)이 아직 남아 있을 때",
          "컨디션(전신 상태)이 투여를 견디기 어려울 만큼 저하됐을 때",
        ],
      },
      { type: "h2", id: "check-when-delayed", text: "일정이 밀렸을 때 확인할 것" },
      {
        type: "ul",
        items: [
          "어떤 수치·이유 때문에 미뤄졌는지",
          "다음 혈액검사와 재방문 예정일",
          "연기 기간이 며칠인지, 전체 치료 일정에 영향이 있는지",
          "집에서 다음 방문까지 특별히 조심할 점이 있는지",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "스스로 만드는 일정표",
        text: "차수번호·예정일·실제 투여일·지연 사유·다음 검사일 이렇게 5개 칸만 있어도 충분합니다. 진료 때 헷갈리지 않고 바로 확인할 수 있고, 온코케어 앱에서는 이 과정을 자동으로 기록해 캘린더로 보여줍니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 글은 일정 구조를 이해하기 위한 일반 정보이며, 실제 투여 여부와 일정 조정은 검사 결과를 바탕으로 담당 의료진이 판단합니다. 스스로 판단해 투여를 서두르거나 미루지 마세요.",
      },
    ],
    faq: [
      {
        q: "차수가 밀리면 치료 효과가 떨어지나요?",
        a: "며칠에서 1~2주 정도의 지연은 흔하며, 대부분 몸이 안전하게 회복하도록 돕기 위한 조치입니다. 지연이 반복되거나 길어지는 경우에는 의료진이 용량이나 일정을 재검토하므로, 걱정보다는 지연 이유를 확인하는 것이 도움이 됩니다.",
      },
      {
        q: "총 몇 차수를 받는지 언제 정확히 알 수 있나요?",
        a: "치료 시작 시 계획된 총 차수 수를 안내받지만, 이는 치료 반응이나 부작용에 따라 도중에 조정될 수 있는 '계획'입니다. 정확한 진행 상황은 매 방문 시 담당 의료진에게 확인하세요.",
      },
      {
        q: "일정표는 종이 수첩과 앱 중 뭐가 나을까요?",
        a: "본인이 꾸준히 확인할 수 있는 방식이면 무엇이든 좋습니다. 온코케어 앱은 검사일·투여일·지연 사유를 자동으로 기록해 다음 진료 전 미리 정리해 보여드립니다.",
      },
      {
        q: "검사 수치가 기준에 못 미치면 무조건 연기되나요?",
        a: "꼭 그렇지는 않습니다. 수치 정도에 따라 용량을 조절하거나 조혈보조 주사를 병행하는 등 다른 방법을 쓰기도 합니다. 어떤 방식이 적절한지는 담당 의료진의 판단이 필요합니다.",
      },
    ],
  },

  {
    slug: "chemo-neuropathy-hands-feet",
    title: "항암 손발저림(말초신경병증) — 방치하면 안 되는 이유",
    description:
      "탁산계·백금계·빈카알칼로이드 계열 항암제에서 흔한 손발저림(말초신경병증)이 왜 생기는지, 언제 알려야 하는지, 낙상·화상을 예방하는 일상 대처법을 정리했습니다.",
    category: "증상관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-12",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "chemo-neuropathy-hands-feet",
    heroAlt: "손끝을 조심스럽게 감싸쥔 손 클로즈업, 따뜻한 실내 조명",
    tldr: [
      "탁산계(파클리탁셀·도세탁셀), 백금계(옥살리플라틴·시스플라틴), 빈카알칼로이드계(빈크리스틴)에서 손발저림이 흔히 나타납니다.",
      "저림이 심해지거나 지속되면 반드시 의료진에게 알려야 합니다 — 방치하면 치료가 끝난 뒤에도 감각 변화가 남을 수 있습니다.",
      "낙상·화상 예방이 중요하고, 효과가 확실히 입증되지 않은 민간요법은 기대만큼 효과를 확신하지 마세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "손끝이나 발끝이 저리고 따끔거리는 증상은 사소해 보여 그냥 넘어가기 쉽지만, 항암제가 말초신경에 영향을 주면서 생기는 흔한 부작용입니다. 이를 항암제 유발 말초신경병증(CIPN)이라고 부릅니다.",
      },
      { type: "h2", id: "which-drugs", text: "어떤 약제에서 잘 생기나요" },
      {
        type: "p",
        text: "말초신경병증은 특정 계열의 항암제에서 특히 잘 나타납니다. 탁산계(파클리탁셀·도세탁셀), 백금계(옥살리플라틴·시스플라틴), 빈카알칼로이드계(빈크리스틴)가 대표적입니다. 약제와 누적 투여량에 따라 증상이 나타나는 시기와 정도가 다르며, 옥살리플라틴의 경우 찬 것에 닿을 때 저림이 심해지는 특징이 잘 알려져 있습니다.",
      },
      {
        type: "ul",
        items: [
          "손끝·발끝의 저림·따끔거림·감각 둔화",
          "단추 잠그기, 물건 집기 같은 세밀한 동작이 서툴어짐",
          "옥살리플라틴 등에서는 찬물·찬 공기 접촉 시 증상 악화",
          "근력 약화나 걸을 때 균형감이 떨어지는 느낌",
        ],
      },
      { type: "h2", id: "why-report-early", text: "왜 미리 알려야 할까요" },
      {
        type: "p",
        text: "저림이 가볍다고 참고 넘기면 신경 손상이 누적될 수 있습니다. 증상 정도를 미리 알리면 의료진이 용량이나 투여 일정을 조정해 악화를 막을 여지가 생기지만, 알리지 않고 계속 진행하면 치료가 끝난 뒤에도 감각 변화나 저림이 오래 남는 경우가 있습니다. 즉, 초기에 알리는 것이 이후 삶의 질을 지키는 데 중요합니다.",
      },
      { type: "svg", name: "traffic" },
      { type: "h2", id: "daily-care", text: "일상 대처와 낙상·화상 예방" },
      {
        type: "ul",
        items: [
          "미끄럼방지 양말·신발, 계단 난간, 야간 조명으로 낙상 예방",
          "뜨거운 물 온도를 손이 아닌 온도계나 팔꿈치로 먼저 확인",
          "요리·설거지 시 두꺼운 장갑으로 화상·상처 예방",
          "단추 잠그기 등 세밀한 동작은 서두르지 말고 천천히",
          "무리하지 않는 선에서 가벼운 스트레칭으로 혈액순환 돕기",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "민간요법, 솔직한 근거 수준",
        text: "비타민 B군 보충제, 침, 냉각장갑·양말(크라이오테라피) 등이 손발저림에 도움이 된다는 이야기가 있지만, 아직 근거가 충분히 쌓이지 않았거나 연구마다 결과가 엇갈립니다. 일부 보충제는 항암제와 상호작용할 수 있어, 시도 전 반드시 의료진·약사와 상의하세요.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 글은 정보·교육 목적의 일반적 안내이며 진단·치료가 아닙니다. 저림의 정도와 대처, 약물 조정 여부는 반드시 담당 의료진과 상의해 결정하세요.",
      },
    ],
    faq: [
      {
        q: "손발저림이 있으면 항암제를 못 쓰게 되나요?",
        a: "꼭 그렇지는 않습니다. 저림의 정도(등급)에 따라 용량을 줄이거나 투여 간격을 조정하는 등 방법이 다양합니다. 스스로 판단해 참거나 투여를 거부하지 말고, 증상을 정확히 알려 의료진과 함께 결정하세요.",
      },
      {
        q: "저림이 없어지긴 하나요?",
        a: "많은 경우 치료가 끝난 뒤 수 주에서 수개월에 걸쳐 서서히 호전됩니다. 다만 개인차가 크고, 일부에서는 감각 변화가 오래 남기도 합니다. 회복 양상은 담당 의료진과 확인하는 것이 좋습니다.",
      },
      {
        q: "손발저림에 좋다는 영양제나 찜질, 효과 있나요?",
        a: "일부는 도움이 될 가능성이 연구되고 있지만 아직 확실한 근거는 부족합니다. 특히 영양제는 항암제와 상호작용할 수 있어 임의로 복용하지 말고 의료진·약사와 먼저 상의하세요.",
      },
      {
        q: "저림 때문에 넘어질까 걱정돼요. 어떻게 예방하나요?",
        a: "미끄럼방지 양말과 충분한 조명, 계단 난간 사용이 기본입니다. 균형감이 눈에 띄게 떨어졌다면 이 또한 의료진에게 알려, 필요하면 보조기구나 재활 상담을 받는 것이 안전합니다.",
      },
    ],
  },

  {
    slug: "tumor-marker-rise-what-to-do",
    title: "종양표지자 수치가 올랐을 때 — 바로 재발일까요",
    description:
      "종양표지자 수치가 올랐을 때 왜 흔들리는지(염증·흡연·양성질환·측정 편차), 단일 수치가 아니라 추세와 영상검사로 판단하는 원칙을 정리했습니다. 판단은 반드시 주치의의 몫입니다.",
    category: "정보·교육",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-12",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "tumor-marker-rise-what-to-do",
    heroAlt: "검사결과지와 완만한 상승 곡선을 차분히 들여다보는 손",
    tldr: [
      "종양표지자 한 번의 상승이 곧 재발을 의미하지는 않습니다 — 염증·흡연·양성질환 등으로도 오를 수 있습니다.",
      "판단은 '한 번의 수치'가 아니라 '여러 번에 걸친 추세'와 영상검사 등 다른 근거를 함께 보고 이뤄집니다.",
      "수치가 걱정되면 스스로 검색해 결론 내리지 말고, 다음 진료에서 주치의와 확인하세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "검사 결과에서 종양표지자 수치가 지난번보다 올라 있으면 순간 심장이 내려앉는 느낌이 듭니다. 이 불안은 자연스럽습니다. 다만 수치 하나가 무엇을 뜻하고, 무엇을 뜻하지 않는지를 알면 그 불안을 다룰 수 있습니다.",
      },
      { type: "h2", id: "what-is-marker", text: "종양표지자란 무엇인가요" },
      {
        type: "p",
        text: "종양표지자는 혈액에서 측정하는 특정 물질로, 일부 암에서 함께 높아지는 경향이 있어 치료 경과를 지켜보는 보조 지표로 쓰입니다. 다만 그 자체만으로 암을 진단하거나 재발을 확정할 만큼 특이적이지 않습니다. 그래서 국내외 진료 지침에서도 표지자는 단독이 아니라 증상·영상검사와 함께 해석하도록 권고합니다.",
      },
      { type: "h2", id: "why-fluctuate", text: "왜 흔들릴까요" },
      {
        type: "ul",
        items: [
          "감염·염증이 있을 때 일시적으로 오를 수 있음",
          "흡연 — 특히 CEA는 흡연자에서 기저치가 높게 나오는 경향",
          "표지자별로 다르지만 일부 양성 질환에서도 상승 가능",
          "검사기관·시약 차이, 채혈 시점에 따른 측정상의 편차",
        ],
      },
      { type: "h2", id: "how-judged", text: "'추세'와 영상검사로 판단하는 원칙" },
      {
        type: "p",
        text: "그래서 의료진은 한 번의 수치보다 여러 번에 걸친 변화의 흐름(추세)을 봅니다. 표지자가 지속적으로 상승하는 추세를 보이면 증상·진찰과 함께 CT·PET 등 영상검사로 확인하는 절차를 밟는 것이 일반적인 원칙입니다. 즉 표지자 상승은 '더 살펴볼 신호'이지, 그 자체로 결론이 아닙니다.",
      },
      { type: "svg", name: "labtrend" },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 앱 팁",
        text: "검사 수치를 시계열로 기록해 추세를 시각적으로 보여드립니다. 이는 진료 때 더 정확히 질문하도록 돕는 '이해 지원' 용도이며, 앱이 재발 여부를 판단하지 않습니다.",
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "수치가 올랐다고 스스로 재발이라 단정하거나, 반대로 정상범위라며 안심하고 다음 진료를 미루지 마세요. 표지자 결과의 해석과 다음 검사·조치 여부는 반드시 담당 의료진과 함께 결정해야 합니다.",
      },
    ],
    faq: [
      {
        q: "수치가 정상범위인데도 재발일 수 있나요?",
        a: "네, 표지자가 낮은데도 재발이 있는 경우가 있습니다. 모든 암·모든 사람에게서 표지자가 민감하게 반응하는 것은 아니어서, 증상이나 영상 소견이 더 중요한 단서가 될 때도 있습니다. 이상 증상이 있다면 표지자 수치와 무관하게 의료진에게 알리세요.",
      },
      {
        q: "담배를 피우면 수치가 오른다는 게 사실인가요?",
        a: "특히 CEA는 흡연자에서 비흡연자보다 기저 수치가 높게 나오는 경향이 알려져 있습니다. 흡연 여부를 의료진에게 알리면 수치를 해석할 때 참고가 됩니다.",
      },
      {
        q: "재검사는 언제 다시 하나요?",
        a: "보통 담당 의료진이 정한 정기 추적 일정에 따라 검사합니다. 불안하다고 임의로 추가 검사를 요청하기보다, 걱정되는 부분을 다음 진료에서 이야기하고 필요성을 함께 판단하는 것이 좋습니다.",
      },
      {
        q: "수치가 계속 올라가는 추세면 무조건 재발인가요?",
        a: "지속적인 상승 추세는 더 살펴봐야 할 신호로 받아들여져 영상검사 등 추가 확인으로 이어지는 경우가 많습니다. 다만 최종 판단은 표지자 하나가 아니라 영상·조직 검사 등을 종합해 의료진이 내립니다.",
      },
    ],
  },


  {
    slug: "cancer-exercise-when-to-start",
    title: "암환자 운동 — 언제부터, 어떻게 시작할까",
    description:
      "침상안정이 정답이 아니라는 근거, 권장 운동량(주당 중강도 유산소 150분 안팎)과 근력운동 빈도, 그리고 혈소판 저하·발열·심한 빈혈 등 운동을 멈춰야 하는 신호를 정리했습니다.",
    category: "생활관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-12",
    updatedAt: "2026-07-12",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "cancer-exercise-when-to-start",
    heroAlt: "공원을 천천히 걷는 뒷모습, 편안한 운동화와 부드러운 오후 햇살",
    tldr: [
      "침상안정이 정답이 아닙니다 — 가벼운 운동은 오히려 치료 관련 피로를 줄이는 데 도움이 된다는 근거가 있습니다.",
      "권장량은 주당 중강도 유산소 운동 150분 안팎과 주 2~3회 근력운동이 일반적 기준이지만, 내 몸 상태에 맞춰 조절해야 합니다.",
      "혈소판 저하·발열·심한 빈혈 등이 있을 때는 운동을 멈추고 먼저 의료진과 상의하세요.",
    ],
    blocks: [
      {
        type: "p",
        text: "'치료 중엔 무조건 푹 쉬어야 한다'는 생각이 여전히 흔하지만, 최근의 운동종양학 권고는 다릅니다. 상태가 허락하는 범위에서 몸을 움직이는 것이 오히려 회복에 도움이 된다는 근거가 쌓여 있습니다.",
      },
      { type: "h2", id: "why-exercise", text: "왜 운동이 도움이 될까요" },
      {
        type: "p",
        text: "미국스포츠의학회(ACSM)와 미국임상종양학회(ASCO) 등 국제 학회는 암 치료 중과 치료 후에도 규칙적인 신체활동이 대부분의 환자에게 안전하며, 치료 관련 피로를 줄이고 신체 기능과 삶의 질을 높이는 데 도움이 된다고 권고합니다. 즉 '기운이 없으니 쉬어야 한다'는 직관과 달리, 적절한 움직임이 오히려 기운을 회복시켜 줍니다.",
      },
      { type: "h2", id: "how-much", text: "얼마나, 어떻게 하나요" },
      {
        type: "ul",
        items: [
          "주당 중강도 유산소 운동 150분 안팎 (예: 하루 20~30분 걷기)",
          "주 2~3회 근력운동(맨몸·가벼운 저항밴드 등)",
          "처음엔 하루 10분처럼 짧게 시작해 몸 상태를 보며 서서히 늘리기",
          "대화를 나눌 수 있는 정도의 강도 유지, 숨이 심하게 차면 강도 낮추기",
        ],
      },
      {
        type: "p",
        text: "위 수치는 일반적인 권고 기준이며, 수술 회복 단계, 심폐 기능, 골 전이 여부 등에 따라 개인별로 조정이 필요합니다. 시작 전 어떤 운동이, 어느 정도 강도가 적절한지 담당 의료진과 함께 정하는 것이 안전합니다.",
      },
      { type: "h2", id: "when-to-stop", text: "언제 멈춰야 하나요 — 운동을 피해야 하는 신호" },
      { type: "svg", name: "traffic" },
      {
        type: "ul",
        items: [
          "혈소판 수치가 많이 낮을 때 (출혈 위험)",
          "심한 빈혈로 어지럽거나 숨이 많이 찰 때",
          "38℃ 이상 발열이나 감염 징후가 있을 때",
          "평소와 다른 가슴 통증·심한 어지럼이 있을 때",
          "뼈전이가 있어 골절 위험이 있는 부위에 부담을 주는 동작",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "안내",
        text: "이 글은 일반적인 운동 권고를 소개하는 정보이며 개인별 처방이 아닙니다. 특히 검사 수치 이상, 수술 직후, 심장·폐 질환이 있는 경우에는 반드시 운동 시작 전 담당 의료진과 상의하세요.",
      },
      {
        type: "callout",
        tone: "info",
        title: "온코케어 앱 팁",
        text: "가벼운 활동 기록과 그날의 피로도를 함께 남기면 어떤 날 컨디션이 더 나았는지 스스로 패턴을 확인하기 쉬워집니다. 검사 수치가 낮게 기록된 시기에는 강도를 낮추라는 일반적 안내도 함께 보여드립니다.",
      },
    ],
    faq: [
      {
        q: "너무 피곤한데 그래도 운동해야 하나요?",
        a: "역설적으로 들리지만, 완전히 쉬는 것보다 가벼운 활동이 치료 관련 피로를 줄이는 데 도움이 된다는 근거가 있습니다. 다만 강도는 몸 상태에 맞춰야 하므로, 짧게 시작해 반응을 보고 조절하세요.",
      },
      {
        q: "수술 직후에도 바로 운동해도 되나요?",
        a: "수술 부위와 회복 단계에 따라 허용되는 운동 범위가 다릅니다. 언제부터, 어떤 동작이 가능한지는 수술을 담당한 의료진에게 직접 확인해야 합니다.",
      },
      {
        q: "헬스장처럼 사람 많은 곳에 가도 될까요?",
        a: "백혈구·호중구 수치가 낮은 시기에는 감염 위험이 있는 밀집 공간을 피하는 것이 좋습니다. 이런 시기에는 집이나 한적한 야외에서 걷기 등으로 대체하고, 시기별 적절성은 의료진과 상의하세요.",
      },
      {
        q: "어떤 운동이 안전한가요?",
        a: "걷기, 가벼운 스트레칭, 저항밴드를 이용한 근력운동이 일반적으로 안전한 시작점입니다. 골 전이가 있거나 균형감이 떨어진 경우에는 낙상·골절 위험이 있는 고강도·충격 운동은 피하고, 구체적인 운동 종류는 의료진과 상의해 정하세요.",
      },
    ],
  },
  {
    slug: "chemo-nausea-vomiting-management",
    title: "항암 구역·구토 — 참지 말고 미리 막는 법",
    description:
      "항암 구역·구토는 참는 것이 아니라 예방하는 증상입니다. 급성·지연성·예기성의 차이, 예방약을 거르면 안 되는 이유, 식사 요령과 탈수·응급 신호까지 정리했습니다.",
    category: "증상관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "side-effect",
    heroAlt: "따뜻한 물컵과 크래커, 생강차가 놓인 조용한 식탁",
    tldr: [
      "구역·구토는 생긴 뒤 잡는 것보다 미리 막는 것이 훨씬 쉽습니다 — 처방된 예방약은 증상이 없어도 정해진 시간에 드세요.",
      "치료 당일뿐 아니라 2~5일 뒤에 오는 지연성 구역이 흔합니다. 이 시기 약을 임의로 중단하지 마세요.",
      "24시간 이상 물조차 넘기지 못하거나 소변이 크게 줄면 탈수 위험이 있어 의료진에게 바로 연락해야 합니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 치료에서 가장 걱정되는 것을 물으면 많은 분이 구역·구토를 꼽습니다. 다행히 이 증상은 지난 수십 년간 조절 방법이 가장 많이 발전한 영역이기도 합니다. 다만 한 가지 전제가 있습니다 — 이미 심해진 뒤에 잡는 것보다, 시작되기 전에 막는 것이 훨씬 쉽고 효과적입니다.",
      },
      { type: "h2", id: "types", text: "세 가지 구역은 서로 다릅니다" },
      {
        type: "p",
        text: "구역·구토는 언제 오느냐에 따라 성격이 다르고, 대응도 달라집니다. 내가 어떤 유형인지 알면 의료진에게 설명하기도 쉬워집니다.",
      },
      {
        type: "ul",
        items: [
          "급성: 투여 후 몇 시간 안에 시작해 24시간 이내에 가장 심해지는 유형입니다. 예방약으로 상당 부분 조절합니다.",
          "지연성: 투여 24시간 이후, 대개 2~5일 사이에 나타납니다. 집에 돌아온 뒤라 놓치기 쉽고, '약을 그만 먹어도 되나' 싶어 중단했다가 힘들어지는 경우가 많습니다.",
          "예기성: 치료를 몇 차례 겪은 뒤, 병원 냄새를 맡거나 가는 길에 미리 메스꺼워지는 유형입니다. 조건반사에 가까워 이전 주기의 구역을 잘 막는 것이 최선의 예방입니다.",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "예방약은 '증상이 없어도' 드세요",
        text: "가장 흔한 실수가 '괜찮아서 안 먹었다'입니다. 예방 목적의 약은 증상을 기다렸다 먹는 약이 아니라, 증상이 생기지 않게 미리 막는 약입니다. 처방된 일정대로 드시고, 임의로 중단하거나 간격을 늘리지 마세요.",
      },
      { type: "h2", id: "medication", text: "약을 제대로 쓰는 법" },
      {
        type: "ul",
        items: [
          "정해진 시간에 규칙적으로: 치료 주기마다 며칠간 복용하도록 처방되는 경우가 많습니다. 알람을 맞춰 두는 것이 확실합니다.",
          "효과가 없으면 참지 말고 알리기: 약이 잘 안 듣는다면 다른 계열로 조정할 여지가 있습니다. '원래 힘든 것'이라 여기고 버티지 마세요.",
          "변비에 주의: 일부 구역 억제제는 변비를 유발할 수 있습니다. 배변 상태도 함께 살피고 힘들면 알리세요.",
          "임의로 다른 약을 더하지 않기: 상호작용 가능성이 있어, 시중 약이나 건강기능식품을 추가하기 전에 반드시 의료진과 상의하세요.",
        ],
      },
      { type: "h2", id: "eating", text: "먹는 방법을 바꾸면 덜 힘듭니다" },
      {
        type: "ul",
        items: [
          "소량씩 자주: 위가 비어 있어도, 가득 차 있어도 메스꺼움이 심해집니다. 하루 5~6번으로 나눠 조금씩 드세요.",
          "차갑거나 미지근하게: 뜨거운 음식은 냄새가 강하게 올라옵니다. 식은 음식이 오히려 넘기기 편한 경우가 많습니다.",
          "냄새 피하기: 조리 냄새가 유발 요인이라면 조리는 가족에게 맡기고 그 시간에는 다른 방에 계시는 편이 낫습니다.",
          "담백하고 마른 음식부터: 크래커, 토스트, 흰죽처럼 기름기와 향이 적은 것으로 시작합니다.",
          "식후 바로 눕지 않기: 30분 정도는 상체를 세우고 계시는 것이 좋습니다.",
          "수분은 식사와 따로: 식사 중에 물을 많이 마시면 배가 불러 먹기 힘들어집니다. 식간에 조금씩 나눠 드세요.",
        ],
      },
      {
        type: "p",
        text: "생강차나 페퍼민트 같은 방법이 도움이 된다는 분들도 있습니다. 다만 이런 방법은 처방된 약을 대신하는 것이 아니라 보조로 쓰는 것이며, 효과에는 개인차가 큽니다. 생강 보충제 형태로 고용량 섭취하는 것은 다른 약과의 상호작용 가능성이 있어 의료진과 상의가 필요합니다.",
      },
      { type: "h2", id: "when-to-call", text: "바로 연락해야 하는 신호" },
      {
        type: "ul",
        items: [
          "24시간 이상 물조차 넘기지 못하는 경우",
          "소변량이 뚜렷하게 줄거나 8시간 이상 소변을 보지 않은 경우",
          "어지럽고 일어설 때 핑 돌거나, 입안이 계속 마르는 경우 — 탈수 신호입니다",
          "구토물에 피가 섞이거나 커피 찌꺼기 같은 색이 보이는 경우",
          "심한 복통이나 열이 함께 있는 경우",
          "처방된 약을 먹었는데도 구토가 조절되지 않는 경우",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "기록이 조절을 바꿉니다",
        text: "언제(투여 후 며칠째), 하루 몇 번, 무엇을 먹은 뒤에 심했는지 간단히 적어 두세요. 다음 주기에 예방약을 조정하는 근거가 됩니다. 기억에 의존하면 대개 '그냥 힘들었다'로만 전달됩니다.",
      },
      {
        type: "p",
        text: "이 글은 정보·교육 목적이며 진단이나 치료를 대신하지 않습니다. 사용 중인 항암제 종류와 개인 상태에 따라 예방약 구성이 다르므로, 구체적인 조절은 주치의·담당 의료진과 상의해 결정하시기 바랍니다.",
      },
    ],
    faq: [
      {
        q: "메스껍지 않은데도 약을 먹어야 하나요?",
        a: "네. 예방 목적의 약은 증상이 생긴 뒤 먹는 약이 아니라 생기지 않게 막는 약입니다. 증상이 없다는 것은 약이 작동하고 있다는 뜻일 수 있으므로, 처방된 일정대로 드시고 임의로 중단하지 마세요.",
      },
      {
        q: "치료 며칠 뒤에 메스꺼운데 정상인가요?",
        a: "투여 24시간 이후 2~5일 사이에 나타나는 지연성 구역은 흔합니다. 이 시기에 약을 중단했다가 힘들어지는 경우가 많으니, 처방 기간을 끝까지 지키고 조절이 안 되면 의료진에게 알리세요.",
      },
      {
        q: "생강차나 민트가 도움이 되나요?",
        a: "도움이 된다는 분들이 있지만 개인차가 크고, 처방된 약을 대신하지 않습니다. 특히 생강을 보충제 형태로 고용량 섭취하는 것은 상호작용 가능성이 있어 의료진과 상의 후 결정하세요.",
      },
      {
        q: "구토 때문에 약을 토했는데 다시 먹어야 하나요?",
        a: "약 종류와 토한 시점에 따라 재복용 여부가 달라 자체 판단이 어렵습니다. 임의로 다시 드시지 말고 담당 의료진이나 약사에게 연락해 확인하시기 바랍니다.",
      },
    ],
  },
  {
    slug: "chemo-oral-mucositis-care",
    title: "항암 구내염 — 입안이 헐어 먹기 힘들 때",
    description:
      "항암 구내염은 대개 투여 후 5~10일에 나타나 2~4주에 회복됩니다. 하루 여러 번 헹구기, 피해야 할 가글과 음식, 감염 위험 신호와 미리 시작하는 예방까지 정리했습니다.",
    category: "증상관리",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "eating-well",
    heroAlt: "부드러운 죽과 미지근한 물이 놓인 조용한 식탁",
    tldr: [
      "구내염은 대개 항암 투여 후 5~10일에 가장 심하고, 혈구 수치가 회복되면서 2~4주 안에 아뭅니다.",
      "가장 근거 있는 관리는 단순합니다 — 부드러운 칫솔질과 하루 여러 번 생리식염수·베이킹소다 물 헹구기.",
      "알코올이 든 시중 구강청결제는 점막을 자극해 피해야 하며, 열이 나거나 하얀 백태·물집이 생기면 감염 가능성이 있어 바로 알려야 합니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 치료 중 입안이 헐어 물조차 삼키기 힘들어지면, 먹는 것이 무서워지고 체중이 빠지면서 치료 자체가 흔들립니다. 구내염은 단순히 '입이 좀 아픈' 문제가 아니라 영양과 치료 일정에 직접 영향을 주는 증상이라, 미리 알고 준비하면 차이가 큽니다.",
      },
      { type: "h2", id: "why", text: "왜 입안이 헐까요" },
      {
        type: "p",
        text: "항암제는 빠르게 분열하는 세포를 공격합니다. 암세포가 대표적이지만, 입안 점막 세포도 몸에서 가장 빠르게 교체되는 세포 중 하나라 함께 영향을 받습니다. 점막이 새로 만들어지는 속도가 느려지면서 얇아지고 헐게 되는 것입니다. 방사선 치료를 머리·목 부위에 받는 경우에는 더 흔하고 심할 수 있습니다.",
      },
      { type: "h2", id: "timeline", text: "언제 시작해서 언제 낫나요" },
      {
        type: "ul",
        items: [
          "시작: 대개 투여 후 5~10일 무렵부터 나타납니다. 처음에는 화끈거리거나 뜨거운 음식이 유난히 아픈 정도로 시작합니다.",
          "가장 심한 시기: 백혈구 수치가 가장 낮아지는 시기와 대체로 겹칩니다. 이때 감염 위험도 함께 올라갑니다.",
          "회복: 혈구 수치가 올라오면서 대개 2~4주 안에 아뭅니다. 다음 주기에 다시 반복될 수 있습니다.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "치료 시작 전에 치과 검진을",
        text: "가능하다면 항암 시작 전에 치과에서 충치·잇몸 상태를 확인하고 필요한 처치를 마쳐 두는 것이 좋습니다. 치료 중에는 혈구 수치가 낮아 치과 처치가 어려워지고, 기존 구강 문제가 구내염을 악화시키는 요인이 됩니다.",
      },
      { type: "h2", id: "core-care", text: "핵심은 '헹구기' — 하루 여러 번" },
      {
        type: "p",
        text: "화려한 제품보다, 자극 없는 용액으로 자주 헹구는 것이 가장 근거가 확실한 관리입니다. 입안을 깨끗하고 촉촉하게 유지하는 것이 목적입니다.",
      },
      {
        type: "ul",
        items: [
          "생리식염수 또는 베이킹소다 물로 하루 4회 이상, 식후와 자기 전에 헹구세요. 물 한 컵에 베이킹소다 1/2 작은술 정도로 만들면 됩니다.",
          "부드러운 칫솔로 하루 2~3회 닦되, 아프면 힘을 빼고 천천히 합니다. 아프다고 칫솔질을 아예 중단하면 세균이 늘어 오히려 나빠집니다.",
          "칫솔은 사용 후 잘 말리고 자주 교체하세요.",
          "입술은 자극 없는 보습제로 마르지 않게 관리합니다.",
          "물을 자주 조금씩 마셔 입안이 마르지 않게 합니다.",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "피해야 할 것 — 좋다고 알려진 것 중에도 있습니다",
        text: "알코올이 든 시중 구강청결제는 점막을 자극해 더 아프게 합니다. 과산화수소를 희석해 쓰는 방법도 점막 회복을 방해할 수 있어 권장되지 않습니다. 담배와 술은 물론 피해야 합니다.",
      },
      { type: "h2", id: "eating", text: "먹는 것을 포기하지 않으려면" },
      {
        type: "ul",
        items: [
          "부드럽고 미지근하게: 죽, 달걀찜, 두부, 으깬 감자, 요거트처럼 넘기기 편한 것으로. 뜨거운 음식은 통증을 키웁니다.",
          "피할 것: 감귤·토마토 같은 신 것, 매운 것, 짠 것, 딱딱하고 바삭한 것(과자·튀김·마른 빵)은 상처를 자극합니다.",
          "빨대 활용: 통증 부위를 피해 넘기는 데 도움이 될 수 있습니다.",
          "차갑게: 얼음 조각이나 차가운 음식이 일시적으로 통증을 줄여주기도 합니다.",
          "단백질 우선: 점막이 새로 만들어지려면 재료가 필요합니다. 먹는 양이 줄어도 단백질은 챙기시고, 어려우면 환자용 균형영양식(ONS)을 활용하세요.",
        ],
      },
      { type: "h2", id: "when-to-call", text: "바로 알려야 하는 신호" },
      {
        type: "ul",
        items: [
          "38도 이상의 열 — 혈구 수치가 낮은 시기라면 응급 상황일 수 있습니다",
          "입안이나 혀에 하얀 백태·덩어리가 끼는 경우 — 곰팡이(칸디다) 감염 가능성",
          "물집이 잡히거나 입술 주변에 궤양이 생기는 경우 — 바이러스 감염 가능성",
          "통증 때문에 물조차 삼키지 못해 하루 이상 수분 섭취가 어려운 경우",
          "잇몸에서 피가 멎지 않는 경우",
        ],
      },
      {
        type: "p",
        text: "통증이 심하면 참지 말고 알리세요. 국소 도포제나 진통 조절 방법을 조정할 여지가 있고, 감염이 동반됐다면 그에 맞는 치료가 필요합니다. 시중 연고나 가글을 임의로 사용하기 전에 반드시 의료진과 상의하시기 바랍니다.",
      },
      {
        type: "p",
        text: "이 글은 정보·교육 목적이며 진단이나 치료를 대신하지 않습니다. 사용 중인 약제와 개인 상태에 따라 관리 방법이 달라질 수 있으므로, 구체적인 결정은 주치의·담당 의료진과 상의하시기 바랍니다.",
      },
    ],
    faq: [
      {
        q: "입이 아픈데 양치를 계속해야 하나요?",
        a: "네. 아프다고 칫솔질을 중단하면 세균이 늘어 오히려 나빠지고 감염 위험이 올라갑니다. 부드러운 칫솔로 힘을 빼고 천천히 닦고, 헹구기를 자주 병행하세요.",
      },
      {
        q: "시중 구강청결제를 써도 되나요?",
        a: "알코올이 든 제품은 점막을 자극해 더 아프게 하므로 피하는 것이 좋습니다. 생리식염수나 베이킹소다 물로 자주 헹구는 것이 더 권장되며, 특정 제품 사용은 의료진과 상의하세요.",
      },
      {
        q: "구내염은 얼마나 가나요?",
        a: "대개 투여 후 5~10일에 가장 심하고, 혈구 수치가 회복되면서 2~4주 안에 아뭅니다. 다만 다음 치료 주기에 다시 반복될 수 있어 예방 관리를 이어가는 것이 좋습니다.",
      },
      {
        q: "입안이 하얗게 됐는데 구내염인가요?",
        a: "하얀 백태나 덩어리는 곰팡이(칸디다) 감염일 수 있어 단순 구내염과 구분이 필요합니다. 자체 판단하지 말고 의료진에게 알려 확인받으시기 바랍니다.",
      },
    ],
  },
  {
    slug: "chemoport-care-daily",
    title: "케모포트(항암 주사포트) 관리 — 삽입 후 일상과 감염 신호",
    description:
      "케모포트를 삽입한 뒤 샤워·운동·수면 등 일상에서 지켜야 할 것과, 붓기·열감·발열 같은 감염 신호, 사용하지 않을 때도 정기 세척이 필요한 이유, 언제 병원에 연락해야 하는지 정리했습니다.",
    category: "치료준비",
    categoryColor: "#B9560C",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    author: "온코케어 편집팀",
    reviewedBy: "이찬용 · 서울온케어의원 대표원장",
    readMin: 6,
    hero: "chemo-admission-checklist",
    heroAlt: "가슴 위쪽에 부착된 작은 원형 포트를 손으로 가리키는 모습의 안내 이미지",
    tldr: [
      "케모포트는 가슴 피부 밑에 심는 작은 주사 포트로, 매번 팔에 바늘을 꽂지 않고 항암제를 안정적으로 투여하기 위한 통로입니다.",
      "삽입 부위가 붉게 붓거나 열이 나고 진물·발열이 동반되면 감염 신호일 수 있어 바로 의료진에게 연락해야 합니다.",
      "치료 사이에 포트를 한동안 쓰지 않아도, 막힘을 막기 위한 정기 세척(플러싱) 일정을 지키는 것이 중요합니다.",
    ],
    blocks: [
      {
        type: "p",
        text: "항암 치료를 시작하면서 가슴에 작은 포트를 심는다는 설명을 들으면 처음에는 낯설고 겁이 나기 쉽습니다. 하지만 케모포트는 매 치료마다 팔 혈관을 찾아 바늘을 꽂는 부담을 덜고, 혈관이 약한 약물이 새어 조직을 상하게 하는 위험을 줄이기 위한 장치입니다. 어떤 물건인지, 일상에서 무엇을 조심해야 하는지 알아 두면 훨씬 편하게 지낼 수 있습니다.",
      },
      { type: "h2", id: "what", text: "케모포트란 무엇인가요" },
      {
        type: "p",
        text: "케모포트(중심정맥 포트)는 동전만 한 크기의 작은 저장고를 가슴 위쪽 피부 아래에 심고, 거기서 나온 가느다란 관(카테터)을 굵은 중심정맥까지 연결한 장치입니다. 치료할 때는 피부 위에서 특수 바늘로 포트를 찔러 약을 넣기 때문에, 매번 팔 혈관을 새로 찾을 필요가 없습니다. 항암제뿐 아니라 수액·수혈·채혈에도 쓸 수 있어 치료 기간 동안 혈관을 보호하는 역할을 합니다.",
      },
      {
        type: "callout",
        tone: "info",
        title: "왜 팔 주사 대신 포트를 권할까요",
        text: "일부 항암제는 혈관 자극이 강해 팔의 가는 혈관으로 반복 투여하면 혈관이 상하거나 약물이 새어 조직 손상을 일으킬 수 있습니다. 중심정맥은 혈류가 빨라 약물이 빠르게 희석되므로 이런 위험이 줄어듭니다. 포트 삽입 여부와 시점은 치료 계획에 따라 다르므로 주치의와 상의해 결정합니다.",
      },
      { type: "h2", id: "first-days", text: "삽입 직후 며칠은 이렇게" },
      {
        type: "p",
        text: "포트는 국소 마취 아래 작은 시술로 심습니다. 삽입 직후 며칠은 삽입 부위와 목·쇄골 주변이 뻐근하거나 당기는 느낌이 들 수 있는데, 대개 시간이 지나며 가라앉습니다. 다음 사항을 지키면 회복이 수월합니다.",
      },
      {
        type: "ul",
        items: [
          "시술 부위 드레싱(반창고)은 의료진이 안내한 기간까지 유지하고, 젖지 않게 관리합니다.",
          "며칠간은 삽입한 쪽 팔을 어깨 위로 크게 들거나 무거운 것을 드는 동작을 피합니다.",
          "부기·통증이 심해지거나 멍이 점점 커지면 참지 말고 알립니다.",
          "실밥이나 피부 접착 상태는 예정된 외래에서 확인받고, 임의로 떼지 않습니다.",
        ],
      },
      { type: "h2", id: "daily-life", text: "일상에서 지킬 것" },
      {
        type: "p",
        text: "회복이 되고 나면 포트를 심은 상태로도 대부분의 일상생활이 가능합니다. 다만 몇 가지는 습관적으로 조심하는 것이 좋습니다.",
      },
      {
        type: "ul",
        items: [
          "샤워: 삽입 부위 상처가 아물고 드레싱을 뗀 뒤에는 대개 샤워가 가능합니다. 다만 치료를 위해 바늘이 꽂혀 있고 드레싱이 붙어 있는 동안에는 그 부위가 젖지 않도록 방수 처리하거나 의료진 안내를 따릅니다.",
          "운동: 걷기·가벼운 운동은 괜찮지만, 삽입한 쪽으로 무거운 것을 반복해 들거나 어깨에 강한 마찰이 가는 운동(수영에서 강한 팔 젓기, 무거운 배낭 메기 등)은 상의 후 조절합니다.",
          "수면: 처음에는 삽입한 쪽으로 눕는 것이 불편할 수 있습니다. 편한 자세로 자되 포트를 세게 누르거나 문지르지 않습니다.",
          "안전벨트·가방끈: 벨트나 가방끈이 포트 위를 직접 눌러 쓸리지 않도록 위치를 살짝 바꿔 줍니다.",
          "일상 확인: 하루 한 번 정도 삽입 부위 피부색과 부기를 가볍게 살펴보는 습관을 들이면 이상을 일찍 알아챌 수 있습니다.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "쓰지 않는 동안에도 정기 세척(플러싱)",
        text: "치료 주기 사이에 포트를 한동안 사용하지 않더라도, 관이 막히지 않도록 정해진 간격으로 세척(플러싱)을 받아야 합니다. 세척 간격은 병원 방침에 따라 다르므로, 다음 세척 예정일을 잊지 않도록 온코케어 앱에 일정을 기록해 두시길 권합니다.",
      },
      { type: "h2", id: "warning", text: "이럴 땐 감염·이상 신호" },
      {
        type: "p",
        text: "포트는 몸 안에 삽입된 장치이므로 감염이 생기면 빠르게 대처해야 합니다. 아래 신호는 스스로 판단해 지켜보지 말고, 담당 의료진이나 치료받는 병원에 바로 연락하는 것이 안전합니다.",
      },
      { type: "svg", name: "traffic" },
      {
        type: "ul",
        items: [
          "삽입 부위가 붉게 부어오르거나 만졌을 때 뜨겁고 아픈 경우",
          "삽입 부위에서 진물·고름이 나오거나 냄새가 나는 경우",
          "38도 이상의 열이 나거나 오한이 드는 경우 — 특히 항암 후 혈구 수치가 낮은 시기라면 응급 상황일 수 있습니다",
          "포트 주변이나 같은 쪽 팔·목·얼굴이 붓고 통증이 있는 경우",
          "세척이나 채혈이 갑자기 안 되거나, 약물 투여 중 삽입 부위가 아프고 붓는 경우 — 관이 막혔거나 약물이 새는 신호일 수 있습니다",
        ],
      },
      {
        type: "callout",
        tone: "warn",
        title: "발열은 특히 주의하세요",
        text: "항암 치료 중 포트를 가진 분에게 열이 나면 포트 관련 감염 가능성을 반드시 함께 따져야 합니다. 해열제로 열을 눌러 두고 지켜보기보다, 먼저 치료받는 병원에 연락해 안내를 받으시기 바랍니다.",
      },
      { type: "h2", id: "removal", text: "포트는 언제 제거하나요" },
      {
        type: "p",
        text: "포트는 계획된 치료가 모두 끝나고, 이후에도 정맥 통로가 필요하지 않다고 판단되면 간단한 시술로 제거합니다. 치료 종료 후에도 경과 관찰을 위해 한동안 유지하는 경우도 있으므로, 제거 시점은 자체적으로 결정하지 말고 주치의와 상의하세요. 유지하는 동안에는 앞서 설명한 정기 세척을 계속 받아야 합니다.",
      },
      {
        type: "p",
        text: "이 글은 정보·교육 목적이며 진단이나 치료를 대신하지 않습니다. 포트 종류와 병원 방침, 개인 상태에 따라 관리 방법과 세척 간격이 다르므로, 구체적인 관리는 주치의·담당 의료진과 상의해 결정하시기 바랍니다.",
      },
    ],
    faq: [
      {
        q: "포트를 심으면 샤워나 목욕을 해도 되나요?",
        a: "삽입 부위 상처가 아물고 드레싱을 뗀 뒤에는 대개 샤워가 가능합니다. 다만 치료를 위해 바늘이 꽂혀 있는 동안이나 상처가 아직 아물지 않은 시기에는 그 부위가 젖지 않도록 관리해야 하므로, 목욕·수영 등 물에 잠기는 활동은 담당 의료진의 안내를 먼저 확인하세요.",
      },
      {
        q: "한동안 항암을 쉬는데 포트를 그냥 둬도 되나요?",
        a: "치료를 쉬는 동안에도 관이 막히지 않도록 정해진 간격의 정기 세척(플러싱)이 필요합니다. 세척 간격은 병원마다 다르니 다음 예정일을 확인해 두고, 일정이 밀리지 않도록 기록해 관리하세요.",
      },
      {
        q: "삽입 부위가 조금 붉은데 병원에 가야 하나요?",
        a: "붉은 기가 번지거나 붓고 열감·통증·진물이 동반되면 감염 신호일 수 있어 바로 연락하는 것이 안전합니다. 특히 열이 함께 난다면 지켜보지 말고 치료받는 병원에 연락해 안내를 받으세요.",
      },
      {
        q: "포트가 있으면 팔 운동이나 무거운 것을 들면 안 되나요?",
        a: "걷기나 가벼운 운동은 대체로 괜찮습니다. 다만 삽입한 쪽으로 무거운 것을 반복해 들거나 어깨에 강한 마찰이 가는 동작은 포트에 부담을 줄 수 있어, 일상 범위를 넘는 운동은 담당 의료진과 상의해 조절하세요.",
      },
    ],
  },
];

export const getArticle = (slug: string): Article | undefined =>
  MAGAZINE.find((a) => a.slug === slug);

export const allSlugs = (): string[] => MAGAZINE.map((a) => a.slug);
