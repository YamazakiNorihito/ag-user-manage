# project

## project name

angular user manager

## 概要

ユーザー管理機能
ユーザー登録・閲覧・更新を MongoDb で管理する。

# 作成時のメモ

## プロジェクト作成

1. コマンド実行

```shell
$> ng new ag-user-manage --skip-git true --prefix aum

? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
```

2. module install エラー対応

   1. jasmine-core のバージョン互換性がないためエラー
   エラー内容

```shell
⠹ Installing packages (npm)...npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: ag-user-manage@0.0.0
npm ERR! Found: jasmine-core@3.7.1
npm ERR! node_modules/jasmine-core
npm ERR!   dev jasmine-core@"~3.7.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer jasmine-core@">=3.8" from karma-jasmine-html-reporter@1.7.0
npm ERR! node_modules/karma-jasmine-html-reporter
npm ERR!   dev karma-jasmine-html-reporter@"^1.5.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /root/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2021-07-31T02_17_39_502Z-debug.log
✖ Package install failed, see above.
The Schematic workflow failed. See above.
```

jasmine-core のバージョンを”~3.8.0”に設定

```json
  "devDependencies": {
    "@angular-devkit/build-angular": "~12.0.5",
    "@angular/cli": "~12.0.5",
    "@angular/compiler-cli": "~12.0.5",
    "@types/jasmine": "~3.6.0",
    "@types/node": "^12.11.1",
    "jasmine-core": "~3.8.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.0.3",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "^1.5.0",
    "typescript": "~4.2.3"
  }
```

## packge install

* boostrap ngx
```shell
npm install ngx-bootstrap
```

* jw-bootstrap-switch-ng2
  * https://www.npmjs.com/package/jw-bootstrap-switch-ng2
```shell
npm i jw-bootstrap-switch-ng2
```

* core-js
  * https://www.npmjs.com/package/core-js
```shell
npm i core-js
```
* nouislider
  * https://www.npmjs.com/package/nouislider
```shell
npm i nouislider
```

* chart.js
  * https://www.chartjs.org/docs/3.1.1/getting-started/installation.html

```shell
npm install chart.js

npm install --save-dev @types/chart.js
```
https://qiita.com/chase0213/items/4e3f53167744b4fa9897

chart.js 3.5.0以降使う場合、Option 2:の対応を行わないとエラーになる
https://stackoverflow.com/questions/67058279/chart-js-types-of-property-type-are-incompatible-type-string-is-not-assigna



3. routing 

* [useHash はNot Found(404)エラー発生時にはindex.htmlを返すようデフォルトで設定](https://tech-lab.sios.jp/archives/7983)
```typescript
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
```

### package.json 

基本項目
http://liberty-technology.biz/PublicItems/npm/package.json.html

### angular.json

基本項目
https://angular.jp/guide/workspace-config

### Karma

[Karmaを使うことでフロントエンドの単体テストを楽しくかつ機能的に行うことができます](https://qiita.com/howdy39/items/b9d704e7f84053924da3)

### BrowserAnimationsModule

[/[Angular/]ページ遷移にアニメーションをつける](https://qiita.com/ozaki25/items/7f2922d9366ebb222bba)


### WAI-ARIA

- 記事
  - [今日から始める負担にならないWAI-ARIA](https://qiita.com/k__watanabe/items/70502233e25b3fa9e8c8)

### angular tags

- [aria-expanded](http://www.webcreativepark.net/html/wai-aria/aria-expanded/)
  - 要素の開閉の状態を示すためのWAI-ARIAの属性
- [aria-controls](http://www.webcreativepark.net/html/wai-aria/aria-controls/)
  - 指定した要素が値に指定した要素を制御することを示すWAI-ARIAの属性です
- [collapse](https://getbootstrap.jp/docs/4.2/components/collapse/)
  - Collapse(コラプス)は,クラスとJavaScriptのプラグインを使用して, コンテンツの折り畳みができます。
  - [angular 使い方](https://ng-bootstrap.github.io/#/components/collapse/examples)
- [Tabset](https://ng-bootstrap.github.io/#/components/tabset/examples)
  - タブセットはバージョン以降非推奨です.
  - [Navディレクティブ](https://ng-bootstrap.github.io/#/components/nav/overview)を使用してください。
- [Progressbar](https://valor-software.com/ngx-bootstrap/#/progressbar)
  - シンプルでありながら柔軟なプログレスバーを使用して、ワークフローまたはアクションの進行状況に関する最新のフィードバックを提供します。
   
   ```typescript
    import { ProgressbarModule } from "ngx-bootstrap/progressbar";
    
    @NgModule({
      imports: [
        ProgressbarModule,
      ],
      declarations: [],
      exports: [],
      providers: []
    })
   ```
- [Pagination](https://ng-bootstrap.github.io/#/components/pagination/overview)
   
   ```typescript
    import { PaginationModule } from "ngx-bootstrap/pagination";
    
    @NgModule({
      imports: [
        PaginationModule.forRoot(),
      ],
      declarations: [],
      exports: [],
      providers: []
    })
   ```
- [AlertModule](https://valor-software.com/ngx-bootstrap/#/alerts)
   - アラートを表示する
- [BsDatepickerModule](https://valor-software.com/ngx-bootstrap/#/datepicker)
  - 日付の形式と言語をカスタマイズしたり、選択可能な日付範囲を制限したりできます。
- [Modals](https://valor-software.com/ngx-bootstrap/#/modals) 
  - 必要最小限の機能とスマートなデフォルトを備えた柔軟なダイアログプロンプ
- [jw-bootstrap-switch-ng2](https://www.npmjs.com/package/jw-bootstrap-switch-ng2)
  - チェックボックスをより面白くする


### OnDestroy
インスタンスが破棄されたときに実行する必要があるカスタムクリーンアップに使用します

公式サイト　[OnDestroy](https://angular.jp/api/core/OnDestroy)


### angular vscode debug
https://watermargin.net/programming/angular/visual-studio-code-debug/

上記の設定をしてから npm start コマンド実行し、Vscodeのでバック実行を
行うことで実施できる




### Window.pageYOffset 
垂直方向のスクロール量
https://lab.syncer.jp/Web/API_Interface/Reference/IDL/Window/pageYOffset/


### Window.pageXOffset 
水平方向のスクロール量
https://lab.syncer.jp/Web/API_Interface/Reference/IDL/Window/pageXOffset/