// GA4 Measurement ID:
// Replace only the value below, for example "G-XXXXXXXXXX", after creating a GA4 web data stream.
const KURASHI_GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

if (KURASHI_GA_MEASUREMENT_ID && KURASHI_GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  const googleTag = document.createElement("script");
  googleTag.async = true;
  googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(KURASHI_GA_MEASUREMENT_ID)}`;
  document.head.appendChild(googleTag);

  gtag("js", new Date());
  gtag("config", KURASHI_GA_MEASUREMENT_ID);
}
