# generator-tinper-bee
[![npm version](https://img.shields.io/npm/v/neoui.svg)](https://www.npmjs.com/package/generator-tinper-bee)
[![Build Status](https://img.shields.io/travis/iuap-design/generator-tinper-bee/master.svg)](https://travis-ci.org/iuap-design/generator-tinper-bee)
[![devDependency Status](https://img.shields.io/david/dev/iuap-design/generator-tinper-bee.svg)](https://david-dm.org/iuap-design/generator-tinper-bee#info=devDependencies)

`tinper-bee` 标准react组件脚手架生成器

## 功能特性

* 支持 eslint
* 支持 Enzyme



## 使用方式

```
npm install yo generator-tinper-bee -g
mkdir test
cd test
yo tinper-bee --port=8000 --author=GuoYongfeng --tb_version=1.0.0
```



## 配置说明
API介绍
| 参数         | 说明          | 默认值  |
|-------------|:----------------:| -----:|
| port        | 开发时服务监听端口 | 8000 |
| author      | 作者名字          |   空字符串 |
| beeVersion  | 版本号            |    0.0.1 |
| pkgName     | 包名            |    bee-组件名 |
| repoUrl     | 仓库地址     |    https://github.com/tinper-bee/ + 包名|



## 产出目录结构

```
-demo
 -TestDemo.js
 -TestDemo.scss
 -index.js
-src
 -Test.js
 -Test.scss
 -index.js
-test
 -setup.js
 -index.test.js
-.eslintignore
-.eslintrc
-.npmignore
-gulpfile.js
-HISTORY.md
-index.html
-package.json
-README.md
-webpack.dev.js
```

## 源码目录说明

- 在 src 目录中写源程序代码，在 demo 目录下写使用用例，在 tests 目录下写 测试用例，build目录产出打包组件，代码规范参考 airbnb.
- 根目录 中的 html 不可修改，通过 js 中的 jsx 渲染页面，通过 require css 引入 css
- 开发中用到其他公共库，通过 `npm install --save` 以及 `npm install --save-dev` 来安装


## 开发调试

- 在项目根目录执行 `npm install` 安装必要模块
- 在项目根目录执行 `npm run dev` 查看demo用例
- 在项目根目录执行 `gulp` 产出build目录代码
- 在项目根目录执行 `npm test` 执行测试


## 浏览器支持版本

- ie8, ie8+, chrome, firefox 最新版
- 可适当渐进降级，如 css 动画可以不支持 ie8


## 支持 HISTORY.md

- 通过在根目录运行 `npm run history` 生成 HISTORY.md
- 需要建立必要的 milestone，issue，label，参见： https://github.com/iuap-design/generator-neoui-react
- milestone 标题为语义化版本号，issue 属于某个 milestone，并且具备 label
- label 为枚举，包括
 - `new` 新增的属性、功能、方法、特性等等
 - `fixed` 修复 bug 和影响使用的性能问题等
 - `improved` 接口增强、健壮性和性能提升、代码优化、依赖模块升级等。
 - `changed` 涉及到兼容性变化的改动。

## 发布

- 在根目录运行 npm publish
