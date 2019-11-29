# webp-converter

## 概要
.png、.jpg、.gif画像を.webpに変換します。

[webp-converter](https://github.com/scionoftech/webp-converter) に依存します。

## 手順
`src` ディレクトリに対象画像（.png, .jpg, .gif）を格納します。

`$ npm run convert` コマンドを入力することで `dist` ディレクトリに.webpに変換された同名ファイルが格納されます。

## マークアップ

```html
<picture>
  <source type="image/webp" srcset="sample.webp">
  <img src="sample.jpg" alt="">
</picture>
```

.webpに非対応のブラウザは `img` 要素に指定した画像が表示されます。