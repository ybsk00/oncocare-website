/* 서울온케어의원 OnCoCare — 앱 다운로드 전환 측정(GA4). 2026-10-14 · 2026-10-31 리브랜딩(동작 동일, 색 없음)
 * 정본 = 이 파일 1곳(oncocare.co.kr/oncocare-cro.js). 테넌트 oncocare.lumiaeo.com 도 이 URL 을 불러 쓴다.
 * 이벤트: download_app_store(아이폰) · download_google_play(안드로이드) · download_apk(APK 직접)
 * 파라미터: store · cta_location(hero·download_section·magazine_callout·store_card·header·footer·body) · link_url
 * 테스트: 주소 뒤에 ?ga_debug=1 → 이 브라우저는 debug_mode 로 전송(GA4 관리 > DebugView 에 바로 뜸, 탭을 닫을 때까지 유지).
 */
(function () {
  if (window.__oncocareCro) return;
  window.__oncocareCro = true;

  var DEBUG = false;
  try {
    if (/[?&]ga_debug=1/.test(location.search)) sessionStorage.setItem("oc_ga_debug", "1");
    if (/[?&]ga_debug=0/.test(location.search)) sessionStorage.removeItem("oc_ga_debug");
    DEBUG = sessionStorage.getItem("oc_ga_debug") === "1";
  } catch (e) {}

  function storeOf(href) {
    if (!href) return null;
    if (/apps\.apple\.com\//i.test(href)) return "app_store";
    if (/play\.google\.com\/store\/apps/i.test(href)) return "google_play";
    if (/\/api\/download\/android/i.test(href)) return "apk";
    return null;
  }

  var EVENT = { app_store: "download_app_store", google_play: "download_google_play", apk: "download_apk" };

  function locationOf(a) {
    if (a.closest(".stores-hero, .hero")) return "hero";
    if (a.closest("#download")) return "download_section";
    if (a.closest(".mag-callout")) return "magazine_callout";
    if (a.closest(".store-card")) return "store_card";
    if (a.closest("header, .site-header, nav")) return "header";
    if (a.closest("footer")) return "footer";
    var sec = a.closest("section[id]");
    return sec ? "section_" + sec.id : "body";
  }

  function send(name, params) {
    if (DEBUG) params.debug_mode = true;
    params.transport_type = "beacon";
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("event", name, params);
    if (DEBUG && window.console) console.log("[oncocare-cro]", name, params);
  }

  document.addEventListener(
    "click",
    function (ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest("a[href]") : null;
      if (!a) return;
      var store = storeOf(a.getAttribute("href"));
      if (!store) return;
      // 같은 버튼 연타(1.5초 안) 중복 집계 방지
      var now = Date.now();
      if (a.__ocLast && now - a.__ocLast < 1500) return;
      a.__ocLast = now;
      send(EVENT[store], {
        store: store,
        cta_location: locationOf(a),
        link_url: a.href,
        page_path: location.pathname,
      });
    },
    true
  );
})();
