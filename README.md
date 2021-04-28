## はじめに
### ちょっと酷くない？
喫煙するなんて非合理的だと認知はしているが、理解しようと努めていたある日、  
受動喫煙対策法という素晴らしい法律が可決されたことで、喫煙可能スペースを探すのが大変面倒になってしまった。  
友人とご飯に行くとき、文句を言いながら探し回っていた訳です。  
そんな未だに理解しないニコチン中毒者が、文句を垂れないために作ったwebアプリです。

## アプリ概要

https://yaninavi.com/

__喫煙できてwifiのあるカフェの快適さや、
喫煙しながら飲むお酒の美味しさを知っている方へ__  
_ログイン不要でお使いいただけます。_
ジャンル、現在地、地名、キーワードなどからお店を探すことができます。
詳細ボタンを押していただくと、googleMapとhotpepperへのリンクをご用意しております。

＊[ホットペッパーapi](<https://webservice.recruit.co.jp/doc/hotpepper/reference.html>)を使用しております。
### プレビュー
![yaniGif (1)](https://user-images.githubusercontent.com/56298353/116371943-ea7a6900-a846-11eb-83f8-aea1f002852a.gif)

### 前提
- ポートフォリオとして提示する
- 実際に私自身や友人の喫煙者達が使う

### 使用技術
言語：javascript  
フロント：react
バックエンド：node.js express  
見た目：[material ui](https://material-ui.com/)  
  &emsp;&emsp;&emsp;&emsp;[react-loadingg](https://github.com/Summer-andy/react-loading)  
インフラ：フロントにはfirebase Hostingを、バックエンドにはherokuを使用

#### 本番環境
![スクリーンショット 2021-04-20 16.46.35.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/510294/2901dd61-7517-c9e1-44d0-501bd079b8c4.png)

## 最後に
[fullstackopen](https://fullstackopen.com/en/)というヘルシンキ大学が提供している教材に大変な影響を受けて開発しました。  
