# 開発

## 環境構築
asdfを使ってツールのバージョンを管理します。
### asdfのインストール
https://asdf-vm.com/guide/getting-started.html

### Nodeのインストール
```shell
$ asdf plugin-add nodejs
$ asdf install
```
Nodeがインストールされていることを確認する。
```shell
$ node --version
v18.16.0
```

### .envの作成
`.env.example`ファイルをコピーして`DISCORD_TOKEN`の値を書き換えてください。
```shell
$ cp .env.example .env
```


## コマンド
```shell
# ビルド
$ npm run build

# ビルド済みのファイルを実行
$ npm start
$ npm run start

# ファイルの変更を検知して自動ビルド & 実行
$ watch:start
```
