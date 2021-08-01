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
