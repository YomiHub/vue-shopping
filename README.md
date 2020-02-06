### 基于 Vue.js 的项目练习

#### 创建空项目并进行基本配置

- 创建空文件夹 vue-project-demo，运行`npm init -y`初始化，在项目文件夹下创建 src、dist 文件夹，然后在 src 文件夹下新建 index.html、main.js、router.js 文件
- 安装 webpack 相关的包`npm i webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev`，然后在项目文件夹下新建 webpack.config.js，并配置打包的入口和出口、创建生成内存 html 页面的 plugins 节点；然后在 package.json 文件中配置打包命令`"dev":"webapck-dev-server --open --port 3000 --contentBase src --hot"`，更多详细参考[链接]("https://github.com/YomiHub/learning-notes/blob/master/webpack/webpack%E4%BB%8B%E7%BB%8D%E4%B8%8E%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE.md")
- 安装 vue 相关的包 `npm i vue vue-router --save`,详细介绍参考[链接]("https://github.com/YomiHub/learning-notes/blob/master/webpack/webpack%E4%B8%8EVue%E7%9A%84%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8.md")
- 安装 babel 处理相关的包
  - 安装 babel-core 相关 `npm i babel-loader @babel/core -D`
  - 安装 babel-preset 相关 `npm i @babel/preset-react @babel/preset-env babel-preset-mobx -D`
  - 安装 babel-plugin 相关 `npm i @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-runtime -D`
  - `npm install @babel/runtime -S`
  - 在 src 目录先新建文件'.babelrc'，在文件内通过 json 配置规则

</br>

#### 安装配置基本使用的 loader

- 安装常用的 loader，并在 webpack.config.js 中配置匹配规则
  - `npm i style-loader css-loader -D`
  - `npm i sass-loader sass node-sass -D` sass-loader 依赖于 node-sass，当无法安装时可 nrm 切换至 cnpm 镜像地址
  - `npm i file-loader url-loader -D`
  - `npm i vue-loader vue-template-compiler -D`需要引入'vue-loader/lib/plugin'，并在节点 plugins 创建 VueLoaderPlugin()，然后添加 resolve 配置 arias，使得在导入 vue 结尾的报包名时使用的是完整的包
- 安装 Mint UI `npm i mint-ui -S`和需要的包`npm i babel-plugin-component -D`并在 babelrc 中配置按需引入，具体参考[链接]("https://github.com/YomiHub/learning-notes/blob/master/Vue/%E5%9F%BA%E4%BA%8EVue.js%E7%9A%84Mint%20UI%E7%BB%84%E4%BB%B6%E5%BA%93.md")

</br>

#### 页面搭建

- 按需使用 mint-ui，以及 MUI 框架，其中 MUI 的使用参考[链接]("https://github.com/YomiHub/learning-notes/blob/master/Vue/MUI%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6.md")
- 使用 mint-ui 实现 header 部分，需要在 main.js 中按需引入 `import { Header } from 'mint-ui'; Vue.component(Header.name, Header)`
- 底部 tab 使用 MUI 实现，需要在 main 中导入 css 样式 `import './lib/mui/css/mui.min.css'`
- 将项目关联到 github 仓库（关于创建和使用 github 仓库参考[链接](https://github.com/YomiHub/learning-notes/tree/master/Git)）
  - 在 src 目录即 main.js 同目录下新建 .gitignore 文件，用于放置忽略上传的文件，例如：node_modules、.idea、.vscode、.git
  - 在 src 目录下放开源协议（可以直接使用 mint-ui 下的 MIT 协议），协议的区别参考[链接](https://www.zhihu.com/question/19568896/answer/507675584)
  - 创建 REDEME.md 文件，编辑项目相关介绍
  - 运行`git init`初始化本地仓库，并将更改 add 和 commit 到本地仓库
  - `git remote add origin https://github.com/YomiHub/vue-shopping.git`添加远程仓库
  - `git push -u origin master`将本地仓库的内容推送到远程仓库
- 后续项目提交更改参考[链接](https://github.com/YomiHub/learning-notes/blob/master/%E5%B7%A5%E5%85%B7%E7%9A%84%E4%BD%BF%E7%94%A8/Git%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81%E5%88%B0%E8%BF%9C%E7%A8%8B%E5%BA%93.md)，若使用 vscode 编辑器可以直接可视化提交，先 commit 然后在更多中选择 push
