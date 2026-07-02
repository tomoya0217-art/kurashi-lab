# kurashi-lab

「買ってから後悔しない、暮らしのアイテム選び」をコンセプトにしたSEOアフィリエイトブログです。

## 内容

- 静的HTMLサイト: `outputs/`
- SEO記事ページ: `outputs/articles/`
- WordPressテーマ: `outputs/kurashi-choice-lab-theme/`
- WordPressテーマZIP: `outputs/kurashi-choice-lab-theme.zip`

## Cloudflare Pages

Cloudflare Pagesでは以下の設定で公開できます。

- Framework preset: `None`
- Build command: 空欄
- Build output directory: `outputs`

`wrangler.toml` にも `pages_build_output_dir = "outputs"` を設定しています。

## ローカル確認

```bash
cd outputs
python -m http.server 4173 --bind 127.0.0.1
```

ブラウザで `http://127.0.0.1:4173/` を開きます。

## WordPressテーマ

WordPressで使う場合は、`outputs/kurashi-choice-lab-theme.zip` を管理画面の `外観 > テーマ > 新規追加 > テーマのアップロード` からアップロードしてください。
