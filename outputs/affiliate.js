(() => {
  const ready = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  };

  const shopPatterns = {
    amazon: /amazon|アマゾン/i,
    rakuten: /rakuten|楽天/i,
    yahoo: /yahoo|ヤフー|paypay/i,
  };

  const getData = () => window.IPHONE_LIFE_DATA || {};
  const getAffiliateConfig = () => getData().affiliate || {};
  const getProduct = (productId) => getData().products?.[productId];

  const normalizeRel = (link) => {
    const config = getAffiliateConfig();
    link.setAttribute("rel", config.rel || "sponsored nofollow noopener");
    link.setAttribute("target", config.target || "_blank");
  };

  const detectShop = (anchor) => {
    const label = `${anchor.textContent || ""} ${anchor.href || ""} ${anchor.title || ""}`;
    return Object.entries(shopPatterns).find(([, pattern]) => pattern.test(label))?.[0] || "";
  };

  const extractHrefFromHtml = (html, expectedShop) => {
    if (!html) return "";
    const template = document.createElement("template");
    template.innerHTML = html;
    const anchors = [...template.content.querySelectorAll("a[href]")];
    const matched = anchors.find((anchor) => detectShop(anchor) === expectedShop);
    return matched?.href || anchors[0]?.href || "";
  };

  const productShopEntry = (product, shop) => {
    const config = getAffiliateConfig();
    const templateName = product?.affiliate?.template || "default";
    const templateEntry = config.moshimoTemplates?.[templateName]?.[shop] || {};
    const shopEntry = product?.affiliate?.shops?.[shop] || {};
    return {
      url: shopEntry.url || extractHrefFromHtml(shopEntry.html, shop) || templateEntry.url || extractHrefFromHtml(templateEntry.html, shop) || config.fallbackUrl || "#",
      html: shopEntry.html || templateEntry.html || "",
    };
  };

  const productHref = (product, shop) => productShopEntry(product, shop).url || "#";

  const primaryHref = (product) => {
    const config = getAffiliateConfig();
    const order = config.primaryShopOrder || ["amazon", "rakuten", "yahoo"];
    return order.map((shop) => productHref(product, shop)).find((href) => href && href !== "#") || "#";
  };

  const applyLink = (button, href) => {
    if (!href || href === "#") return;
    button.href = href;
    normalizeRel(button);
  };

  const createShopButton = (productId, shop) => {
    const config = getAffiliateConfig();
    const shopConfig = config.shops?.[shop] || {};
    const product = getProduct(productId);
    const button = document.createElement("a");
    button.className = `shop-button ${shopConfig.className || shop}`;
    button.href = productHref(product, shop);
    button.dataset.productLink = productId;
    button.dataset.shop = shop;
    button.textContent = shopConfig.label || shopConfig.shortLabel || shop;
    if (button.href && button.getAttribute("href") !== "#") normalizeRel(button);
    return button;
  };

  const renderShopButtons = (container) => {
    const productId = container.dataset.productActions;
    if (!productId || !getProduct(productId)) return;
    const config = getAffiliateConfig();
    const shops = Object.keys(config.shops || { amazon: {}, rakuten: {}, yahoo: {} });
    container.replaceChildren(...shops.map((shop) => createShopButton(productId, shop)));
    container.dataset.affiliateManaged = "site-data";
  };

  ready(() => {
    document.querySelectorAll("[data-product-actions]").forEach(renderShopButtons);

    document.querySelectorAll("[data-product-link]").forEach((button) => {
      const product = getProduct(button.dataset.productLink);
      if (!product) return;
      applyLink(button, productHref(product, button.dataset.shop));
    });

    document.querySelectorAll("[data-product-primary]").forEach((button) => {
      const product = getProduct(button.dataset.productPrimary);
      if (!product) return;
      applyLink(button, primaryHref(product));
    });
  });
})();
