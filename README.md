# pronunciation
日本語話者向けの英語発音辞典。30日のカリキュラムと全文検索を持つ静的 Web アプリ。

## 開発

```bash
npm install
npm run dev
```

## 構成

- `src/data/phonemes/` `rules/` `topics/` — 1エントリ1ファイル。ファイル名がそのまま id。
- `src/data/index.ts` — 全エントリを集めた索引。**アプリからは参照しない**（参照するとチャンク分割が無効になる）。メタデータ生成とリンク検査の入力専用。
- `src/data/lazy.ts` — アプリが使う遅延読み込み層。`import.meta.glob` で1エントリ1チャンクに分割する。
- `src/data/meta.generated.ts` — 一覧表示用の軽量メタデータ。`npm run gen:meta` で自動生成（build / dev の前に自動実行）。手で編集しない。

## エントリを追加したら

1. `src/data/<種別>/<id>.ts` を作る（export は1つ）。
2. `src/data/index.ts` に import と登録を足す。
3. `npm run build` を実行する。メタデータ再生成・型チェック・リンク検査・ビルドがこの順で走る。

`npm run check-links` は全エントリの相互参照を走査し、実在せず30日カリキュラムにも予定されていない id があればビルドを落とす。
