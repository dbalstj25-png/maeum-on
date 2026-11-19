/**
 * 선택형 Google Analytics 4 연결
 * - config.js의 googleAnalyticsId가 G-로 시작할 때만 로드됩니다.
 * - 자가점검 응답이나 개인별 결과는 전송하지 않습니다.
 */
(() => {
  const measurementId = window.MAUMON_CONFIG?.googleAnalyticsId || "";
  if (!/^G-[A-Z0-9]+$/i.test(measurementId)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: true
  });
})();
