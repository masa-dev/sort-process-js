# sort-process-js

- [概要](#概要)
- [ソートの種類](#ソートの種類)
- [使ったライブラリなど](#使ったライブラリなど)
- [公開しているサイト](#公開しているサイト)

## 概要

ソートプログラムに対して、過程をコードと図で分かりやすく表示するプログラムです。

## ソートの種類

今回使っているソートの種類は以下の通りです。

| ソート | 平均計算時間 | 最悪計算時間 |
| --- | :---: | :---: |
| 選択ソート | n^2 | n^2 |
| 挿入ソート | n+d | n^2 |
| クイックソート | n log n | n^2 |
| バブルソート | n^2 | n^2 |
| シェーカーソート | n^2 | n^2 |
| ボゴソート | n*n! | ∞ |

※ k : 桁数<br>
参考 : [Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%BC%E3%83%88)

## 使ったライブラリなど

- ### vue.js

    コードの表示をリアクティブに表示するために使用しています。

- ### jQuery

    DOM操作をするために使用しています。<br>
    主に色の変更や要素の移動など。

- ### bootstrap

    ボタンやフォームなどのスタイルに使用しています。

## 公開しているサイト

https://masa-dev.github.io/sort-process-js/