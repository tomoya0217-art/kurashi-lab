(() => {
  const shopPatterns = {
    amazon: /amazon|アマゾン/i,
    rakuten: /rakuten|楽天/i,
    yahoo: /yahoo|ヤフー/i,
  };

  const normalizeRel = (link) => {
    link.setAttribute("rel", "sponsored nofollow noopener");
    link.setAttribute("target", "_blank");
  };

  const detectShop = (anchor) => {
    const label = `${anchor.textContent || ""} ${anchor.href || ""} ${anchor.title || ""}`;
    return Object.entries(shopPatterns).find(([, pattern]) => pattern.test(label))?.[0] || "";
  };

  const collectLinks = (source) => {
    const links = {};
    if (!source) return links;

    source.content.querySelectorAll("a[href]").forEach((anchor) => {
      const shop = detectShop(anchor);
      if (shop && !links[shop]) links[shop] = anchor.href;
    });

    return links;
  };

  const primaryLink = (links) => links.amazon || links.rakuten || links.yahoo || "";

  document.querySelectorAll(".article-page").forEach((article) => {
    const links = collectLinks(article.querySelector(".moshimo-ad-source"));
    const mainHref = primaryLink(links);

    article.querySelectorAll("[data-moshimo-primary]").forEach((button) => {
      if (!mainHref) return;
      button.href = mainHref;
      normalizeRel(button);
    });

    article.querySelectorAll("[data-shop]").forEach((button) => {
      const href = links[button.dataset.shop];
      if (!href) return;
      button.href = href;
      normalizeRel(button);
    });
  });
})();
