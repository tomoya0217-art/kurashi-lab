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

  const applyLink = (button, href) => {
    if (!href || href === "#") return;
    button.href = href;
    normalizeRel(button);
  };

  const primaryLink = (links) => links.amazon || links.rakuten || links.yahoo || "";

  document.querySelectorAll(".article-page, main").forEach((scope) => {
    const templateLinks = collectLinks(scope.querySelector(".moshimo-ad-source"));

    scope.querySelectorAll("[data-moshimo-primary]").forEach((button) => {
      applyLink(button, primaryLink(templateLinks));
    });

    scope.querySelectorAll("[data-shop]:not([data-product-link])").forEach((button) => {
      applyLink(button, templateLinks[button.dataset.shop]);
    });
  });
})();
