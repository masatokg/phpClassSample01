# phpClassSample01
## HTMLとPHPクラスとMySQLとBootstrapの連携例

## 動作例URL
http://aso-kuga.watson.jp/phpClassSample01/

## SQLフォルダには、userテーブル構築用のSQLを置いています。
## ファイル構成(サーバーに直接以下の構成で配置してください)
### ただしhtaccessは、「.htaccess」とリネームしてサーバーへ配置してください。
### htmp拡張子でphp文を実行するための隠しファイルです。
DBconnect.php内のhost名やデータベース名、ユーザー名/パスワードなどは、自分の環境に合わせて更新してください。

```
│  htaccess
│  index.html
│  
├─css
│      myStyle.css
│      
└─php
        DBconnect.php
        TBL_User.php
        User.php
```

