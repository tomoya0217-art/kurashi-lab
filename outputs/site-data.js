// iPhoneライフ共通データ
// 商品画像、価格、もしもアフィリエイト広告HTML/URLはこのファイルだけを更新します。
// 記事側は data-product-* の商品IDだけを持つため、100記事に増えても1か所の変更で全ページへ反映できます。
window.IPHONE_LIFE_DATA = {
  priceUpdated: "2026/07/02",
  managedBrands: ["Apple", "Sony", "Bose", "Anker", "Beats"],
  affiliate: {
    fallbackUrl: "#",
    rel: "sponsored nofollow noopener",
    target: "_blank",
    primaryShopOrder: ["amazon", "rakuten", "yahoo"],
    shops: {
      amazon: {
        label: "在庫を確認する",
        shortLabel: "Amazon",
        className: "amazon",
      },
      rakuten: {
        label: "ポイント還元を見る",
        shortLabel: "楽天市場",
        className: "rakuten",
      },
      yahoo: {
        label: "PayPay還元を見る",
        shortLabel: "Yahoo!ショッピング",
        className: "yahoo",
      },
    },
    moshimoTemplates: {
      // 共通テンプレート。商品別HTMLを未設定にした場合、この中のHTMLからリンクを抽出します。
      // もしもアフィリエイトの「かんたんリンク」HTMLをショップ別に貼る場合は、
      // amazon / rakuten / yahoo の html に貼り付けてください。
      default: {
        amazon: { url: "#", html: "" },
        rakuten: { url: "#", html: "" },
        yahoo: { url: "#", html: "" },
      },
    },
  },
  products: {
    "airpods-4": {
      name: "AirPods 4",
      brand: "Apple",
      imageSrc: "",
      imageAlt: "AirPods 4の製品画像プレースホルダー",
      prices: {
        official: "¥21,800",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Apple公式価格。ANC搭載モデルは¥29,800",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "airpods-pro-3": {
      name: "AirPods Pro 3",
      brand: "Apple",
      imageSrc: "",
      imageAlt: "AirPods Pro 3の製品画像プレースホルダー",
      prices: {
        official: "¥39,800",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Apple公式価格",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "airpods-max": {
      name: "AirPods Max",
      brand: "Apple",
      imageSrc: "",
      imageAlt: "AirPods Maxの製品画像プレースホルダー",
      prices: {
        official: "¥89,800",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Apple公式価格",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "sony-wf-1000xm6": {
      name: "Sony WF-1000XM6",
      brand: "Sony",
      imageSrc: "",
      imageAlt: "Sony WF-1000XM6の製品画像プレースホルダー",
      prices: {
        official: "¥39,600",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "ソニーストア価格（税込）",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "sony-wh-1000xm6": {
      name: "Sony WH-1000XM6",
      brand: "Sony",
      imageSrc: "",
      imageAlt: "Sony WH-1000XM6の製品画像プレースホルダー",
      prices: {
        official: "¥59,400",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "ソニーストア価格（税込）",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "bose-qc-ultra-earbuds": {
      name: "Bose QuietComfort Ultra Earbuds",
      brand: "Bose",
      imageSrc: "",
      imageAlt: "Bose QuietComfort Ultra Earbudsの製品画像プレースホルダー",
      prices: {
        official: "公式価格確認中",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Bose公式価格は確認後に更新",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "bose-qc-ultra-headphones": {
      name: "Bose QuietComfort Ultra Headphones",
      brand: "Bose",
      imageSrc: "",
      imageAlt: "Bose QuietComfort Ultra Headphonesの製品画像プレースホルダー",
      prices: {
        official: "公式価格確認中",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Bose公式価格は確認後に更新",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "anker-liberty-4-pro": {
      name: "Anker Soundcore Liberty 4 Pro",
      brand: "Anker",
      imageSrc: "",
      imageAlt: "Anker Soundcore Liberty 4 Proの製品画像プレースホルダー",
      prices: {
        official: "¥19,990",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Anker Japan公式価格（税込）",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "anker-space-one-pro": {
      name: "Anker Soundcore Space One Pro",
      brand: "Anker",
      imageSrc: "",
      imageAlt: "Anker Soundcore Space One Proの製品画像プレースホルダー",
      prices: {
        official: "¥26,990",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Anker Japan公式価格（税込）",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "beats-studio-buds-plus": {
      name: "Beats Studio Buds+",
      brand: "Beats",
      imageSrc: "",
      imageAlt: "Beats Studio Buds+の製品画像プレースホルダー",
      prices: {
        official: "公式価格確認中",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Apple/Beats公式価格は確認後に更新",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
    "beats-fit-pro": {
      name: "Beats Fit Pro",
      brand: "Beats",
      imageSrc: "",
      imageAlt: "Beats Fit Proの製品画像プレースホルダー",
      prices: {
        official: "公式価格確認中",
        amazon: "価格未取得",
        rakuten: "価格未取得",
        yahoo: "価格未取得",
      },
      priceNote: "Apple/Beats公式価格は確認後に更新",
      priceCheckedAt: "2026/07/02",
      affiliate: {
        template: "default",
        shops: {
          amazon: { url: "#", html: "" },
          rakuten: { url: "#", html: "" },
          yahoo: { url: "#", html: "" },
        },
      },
    },
  },
};
