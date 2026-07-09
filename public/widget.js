/* 온코케어 AI — 임베드 위젯 (드롭인)
 * 사용법(한 줄): <script src="https://oncocare.co.kr/widget.js" defer></script>
 * 동작: 우하단 플로팅 "온코케어 AI 앱" 버튼. OS 감지 →
 *   Android=Play, iOS=App Store, 데스크톱=두 스토어 카드 팝업.
 * Shadow DOM으로 격리해 삽입 사이트 CSS와 충돌하지 않음.
 */
(function () {
  if (window.__oncocareWidgetLoaded) return;
  window.__oncocareWidgetLoaded = true;

  var PLAY = "https://play.google.com/store/apps/details?id=ai.oncocare.app";
  var APPSTORE = "https://apps.apple.com/kr/app/id6780368713";
  var SITE = "https://oncocare.co.kr";

  var ua = navigator.userAgent || "";
  var isAndroid = /android/i.test(ua);
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var isMobile = isAndroid || isIOS || /Mobi/i.test(ua);

  function mount() {
    if (document.getElementById("oncocare-widget-root")) return;
    var host = document.createElement("div");
    host.id = "oncocare-widget-root";
    host.style.cssText = "position:fixed;right:0;bottom:0;z-index:2147483000;";
    document.body.appendChild(host);
    var root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;

    root.innerHTML = [
      "<style>",
      ":host,*{box-sizing:border-box;}",
      ".wrap{position:fixed;right:20px;bottom:20px;font-family:'Pretendard',-apple-system,BlinkMacSystemFont,'Malgun Gothic',sans-serif;}",
      ".fab{display:inline-flex;align-items:center;gap:9px;border:none;cursor:pointer;",
      "background:#3F5D52;color:#fff;font-size:15px;font-weight:700;letter-spacing:-.01em;",
      "padding:13px 20px 13px 16px;border-radius:9999px;box-shadow:0 8px 24px rgba(42,37,32,.28);",
      "transition:transform .18s ease, box-shadow .2s ease;}",
      ".fab:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(42,37,32,.34);}",
      ".fab .leaf{width:26px;height:26px;border-radius:50%;background:#E4ECE7;display:inline-flex;align-items:center;justify-content:center;flex:none;}",
      ".fab small{display:block;font-size:11px;font-weight:600;opacity:.85;line-height:1.1;}",
      ".fab b{font-size:15px;line-height:1.15;}",
      ".card{position:absolute;right:0;bottom:64px;width:280px;background:#fff;border:1px solid #E5DDD0;",
      "border-radius:18px;box-shadow:0 16px 44px rgba(42,37,32,.22);padding:18px;display:none;}",
      ".card.open{display:block;}",
      ".card h4{margin:0 0 4px;font-size:15.5px;color:#2A2520;font-weight:800;}",
      ".card p{margin:0 0 14px;font-size:12.5px;color:#5C544A;line-height:1.5;}",
      ".store{display:flex;align-items:center;gap:11px;padding:11px 13px;border:1px solid #E5DDD0;",
      "border-radius:12px;text-decoration:none;margin-bottom:9px;transition:border-color .15s,transform .15s;}",
      ".store:hover{border-color:#A8BFB5;transform:translateY(-1px);}",
      ".store .ic{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex:none;}",
      ".store .ic.app{background:#2A2520;} .store .ic.play{background:#F1EADF;}",
      ".store .tx{line-height:1.25;} .store .tx small{display:block;font-size:11px;color:#8C8378;font-weight:600;}",
      ".store .tx b{font-size:14.5px;color:#2A2520;font-weight:700;}",
      ".close{position:absolute;top:12px;right:12px;border:none;background:none;color:#8C8378;font-size:18px;cursor:pointer;line-height:1;}",
      ".note{font-size:11px;color:#8C8378;text-align:center;margin-top:4px;}",
      ".note a{color:#3F5D52;font-weight:600;text-decoration:none;}",
      "@media (max-width:520px){.wrap{right:14px;bottom:14px;}.fab{padding:12px 18px 12px 14px;}.card{width:min(280px,86vw);}}",
      "</style>",
      '<div class="wrap">',
      '  <button class="fab" type="button" aria-label="온코케어 AI 앱 설치">',
      '    <span class="leaf">',
      '      <svg width="18" height="18" viewBox="0 0 48 48" fill="none"><path d="M40 8C22 9 10.5 19.5 8.5 39.5 28 41 38.5 28 40 8z" fill="#B7D0C2" stroke="#3F5D52" stroke-width="3" stroke-linejoin="round"/><path d="M10.5 37.5C17 27 25 18 37 10.5" stroke="#3F5D52" stroke-width="3" stroke-linecap="round"/></svg>',
      "    </span>",
      "    <span><small>서울온케어의원 AI 케어</small><b>온코케어 AI 앱</b></span>",
      "  </button>",
      '  <div class="card" role="dialog" aria-label="앱 다운로드">',
      '    <button class="close" type="button" aria-label="닫기">×</button>',
      "    <h4>온코케어 AI 앱</h4>",
      "    <p>증상·영양·검사지 해석·임상시험까지, 진료 사이를 잇는 AI 케어 동반자.</p>",
      '    <a class="store" href="' + APPSTORE + '" target="_blank" rel="noopener">',
      '      <span class="ic app"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.03-3.77-1-1.94.03-3.73 1.13-4.72 2.86-2.02 3.5-.52 8.68 1.44 11.52.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 2-.93 3.75-.93s2.25.93 3.78.9c1.56-.03 2.55-1.41 3.5-2.8.94-1.36 1.35-2.6 1.4-2.71 0-.02-2.87-1.1-2.9-5.17zM14.6 4.5c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.24-1.22 3.55 1.29.1 2.61-.65 3.41-1.63z"/></svg></span>',
      '      <span class="tx"><small>App Store</small><b>iPhone 다운로드</b></span>',
      "    </a>",
      '    <a class="store" href="' + PLAY + '" target="_blank" rel="noopener">',
      '      <span class="ic play"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3.6 2.4 13.6 12 3.6 21.6c-.37-.25-.6-.7-.6-1.26V3.66c0-.56.23-1.01.6-1.26z" fill="#00C4FF"/><path d="M17 8.8 5.2 2.15c-.55-.3-1.16-.2-1.6.25L13.6 12 17 8.8z" fill="#00E676"/><path d="M3.6 21.6c.44.45 1.05.55 1.6.25L17 15.2 13.6 12z" fill="#FFC400"/><path d="m20.9 10.7-3.9-2-3.4 3.3 3.4 3.2 3.9-2c1.3-.66 1.3-1.84 0-2.5z" fill="#FF3D57"/></svg></span>',
      '      <span class="tx"><small>Google Play</small><b>Android 다운로드</b></span>',
      "    </a>",
      '    <div class="note">또는 <a href="' + SITE + '" target="_blank" rel="noopener">oncocare.co.kr</a> 방문</div>',
      "  </div>",
      "</div>",
    ].join("");

    var fab = root.querySelector(".fab");
    var card = root.querySelector(".card");
    var closeBtn = root.querySelector(".close");

    fab.addEventListener("click", function () {
      if (isAndroid) { window.open(PLAY, "_blank"); return; }
      if (isIOS) { window.open(APPSTORE, "_blank"); return; }
      card.classList.toggle("open");
    });
    closeBtn.addEventListener("click", function () { card.classList.remove("open"); });
    document.addEventListener("click", function (e) {
      if (!host.contains(e.target)) card.classList.remove("open");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
