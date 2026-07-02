(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".article-card").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });

  const data = window.IPHONE_LIFE_DATA;
  if (data) {
    document.querySelectorAll("[data-price-updated]").forEach((node) => {
      node.textContent = data.priceUpdated || "未更新";
    });
    document.querySelectorAll("[data-product-image]").forEach((img) => {
      const product = data.products?.[img.dataset.productImage];
      if (!product) return;
      img.alt = product.imageAlt || img.alt;
      if (product.imageSrc) img.src = product.imageSrc;
    });
    document.querySelectorAll("[data-price]").forEach((cell) => {
      const product = data.products?.[cell.dataset.product];
      const value = product?.prices?.[cell.dataset.price];
      cell.textContent = value || "価格未取得";
    });
    document.querySelectorAll("[data-product-link]").forEach((link) => {
      const product = data.products?.[link.dataset.productLink];
      const href = product?.affiliate?.[link.dataset.shop];
      if (href && href !== "#") {
        link.href = href;
        link.target = "_blank";
        link.rel = "sponsored nofollow noopener";
      }
    });
    document.querySelectorAll("[data-product-primary]").forEach((link) => {
      const product = data.products?.[link.dataset.productPrimary];
      const href = product?.affiliate?.amazon || product?.affiliate?.rakuten || product?.affiliate?.yahoo;
      if (href && href !== "#") {
        link.href = href;
        link.target = "_blank";
        link.rel = "sponsored nofollow noopener";
      }
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = document.querySelector("#form-message");
      if (message) message.textContent = "送信機能は現在準備中です。掲載内容の修正依頼は運営者メール設定後に受け付けます。";
    });
  }
})();
