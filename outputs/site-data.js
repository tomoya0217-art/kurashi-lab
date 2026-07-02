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
        label: "Amazonで見る",
        shortLabel: "Amazon",
        className: "amazon",
      },
      rakuten: {
        label: "楽天市場で見る",
        shortLabel: "楽天市場",
        className: "rakuten",
      },
      yahoo: {
        label: "Yahoo!ショッピングで見る",
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
      imageSrc: "assets/product-airpods-pro-3-generated.webp",
      imageAlt: "AirPods Pro 3向けの白いワイヤレスイヤホンと充電ケースのオリジナル製品画像",
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
          rakuten: {
            url: "https://item.rakuten.co.jp/keitai-god2a/o549995635232/",
            html: "",
          },
          yahoo: {
            url: "https://shopping.yahoo.co.jp/search?first=1&p=%E3%80%90%E6%96%B0%E5%93%81%E6%9C%AA%E9%96%8B%E5%B0%81%E3%83%BB%E4%BF%9D%E8%A8%BC%E9%96%8B%E5%A7%8B%E6%B8%88%E3%81%BF%E3%80%91AirPods%20Pro%203%20MFHP4J%2FA%20%E3%80%90%E6%97%A5%E6%9B%9C%E6%97%A5%E4%BB%A5%E5%A4%96%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81%E3%80%91%E3%80%90%E9%80%81%E6%96%99%E7%84%A1%E6%96%99%E3%80%91",
            html: "",
          },
        },
        easyLinkHtml: String.raw`<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");
msmaflink({"n":"【新品未開封・保証開始済み】AirPods Pro 3 MFHP4J\/A 【日曜日以外即日発送】【送料無料】","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"","p":["\/@0_mall\/keitai-god2a\/cabinet\/4549995635232.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/keitai-god2a\/o549995635232\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":2,"u_tx":"Yahoo!ショッピングで見る","u_bc":"#66a7ff","u_url":"https:\/\/shopping.yahoo.co.jp\/search?first=1\u0026p=%E3%80%90%E6%96%B0%E5%93%81%E6%9C%AA%E9%96%8B%E5%B0%81%E3%83%BB%E4%BF%9D%E8%A8%BC%E9%96%8B%E5%A7%8B%E6%B8%88%E3%81%BF%E3%80%91AirPods%20Pro%203%20MFHP4J%2FA%20%E3%80%90%E6%97%A5%E6%9B%9C%E6%97%A5%E4%BB%A5%E5%A4%96%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81%E3%80%91%E3%80%90%E9%80%81%E6%96%99%E7%84%A1%E6%96%99%E3%80%91","a_id":5663518,"p_id":1225,"pl_id":27061,"pc_id":1925,"s_n":"yahoo","u_so":0},{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/keitai-god2a\/o549995635232\/","a_id":5663517,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1}],"eid":"F2SpD","s":"s"});
</script>
<div id="msmaflink-F2SpD">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->`,
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
