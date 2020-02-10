### 基于 Vue.js 的项目练习

#### 基于 node 开发后台接口

- 创建空项目文件夹 vue-project-data，在文件夹下新建入口文件 index.js，然后初始化项目`npm init -y`
- 安装使用到的包`npm istall express body-parser mysqljs/mysql -S`
- 创建数据库，数据表以及字段参考 mysql.sql，关于路由 router.js 和业务逻辑部分可参考[另一篇笔记](https://github.com/YomiHub/learning-notes/blob/master/nodejs/Node%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E9%A1%B9%E7%9B%AE.md)
- 监控变动文件的脚本:nodemon，为了这个命令全局可用，最好我们进行全局安装: npm install -g nodemon
  然后进入你的项目根目录: nodemon server.js 启动应用了，并且在文件有变化之后会自动重启服务。

</br>

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

#### 首页 header 与底部 tab

- 按需使用 mint-ui，以及 MUI 框架，其中 MUI 的使用参考[链接]("https://github.com/YomiHub/learning-notes/blob/master/Vue/MUI%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6.md")
- 使用 mint-ui 实现 header 部分，需要在 main.js 中按需引入 `import { Header } from 'mint-ui'; Vue.component(Header.name, Header)`
- 底部 tab 使用 MUI 实现，需要在 main 中导入 css 样式 `import './lib/mui/css/mui.min.css'`
  - 使用 MUI 更换底部图标的时候，可以在 examples\hello-mui\examples 找到 icon.html 和 icon-extra.html，使用对应的 class 类，需要注意的是复制对应的.css 文件与.ttf 文件，并在 main 中 import 图标对应的样式
- 将项目关联到 github 仓库（关于创建和使用 github 仓库参考[链接](https://github.com/YomiHub/learning-notes/tree/master/Git)）
  - 在项目根目录下新建 .gitignore 文件，用于放置忽略上传的文件，例如：node_modules、.idea、.vscode、.git
  - 在项目根目录下放开源协议（可以直接使用 mui 下的 MIT 协议），协议的区别参考[链接](https://www.zhihu.com/question/19568896/answer/507675584)
  - 创建 README.md 文件，编辑项目相关介绍
  - 运行`git init`初始化本地仓库，并将更改 add 和 commit 到本地仓库
  - `git remote add origin https://github.com/YomiHub/vue-shopping.git`添加远程仓库
  - `git push -u origin master`将本地仓库的内容推送到远程仓库
- 后续项目提交更改参考[链接](https://github.com/YomiHub/learning-notes/blob/master/%E5%B7%A5%E5%85%B7%E7%9A%84%E4%BD%BF%E7%94%A8/Git%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81%E5%88%B0%E8%BF%9C%E7%A8%8B%E5%BA%93.md)，若使用 vscode 编辑器可以直接可视化提交，先 commit 然后在更多中选择 push

</br>

#### 首页 tab 路由

> tabbar 实际上就是点击路由链接，展示对应的路由组件

- 在 main 中 import 引入 vue-router 包，并注册 use 到 Vue 中，然后在 vue 实例 vm 挂载引入的 router.js
- 给每个 tab 创建对应的.vue 组件，然后在 router.js 中导入，并创建路由对象配置 routes 数组中的 path 和对应 component，以及设置 router-link 选中时的样式 linkActiveClass，最后 export default 导出路由对象
- 将 App.vue 中的 tab 链接修改为 router-link，并设置 to 属性值为路由中对应的 path，然后添加 router-view 标签

</br>

#### 首页轮播

> 使用 mint-ui 中 JS Component 的 Swipe 组件实现，具体可以参考官方文档[链接](https://mint-ui.github.io/docs/#/zh-cn2/swipe)

- 在 main.js 中导入需要使用的 swipe 组件，并 Vue.component()注册到 Vue 中
- 在首页的 home.vue 中放轮播的 HTML 结构，参考官方文档
- 在 style 中设置每张轮播图的样式
- 首先`npm install vue-resource -S`，然后在 main 中导入 vue-resource，使用可参考 github[链接](https://github.com/pagekit/vue-resource#readme)，用 this.\$http.get 获取后台轮播图数据
- 将返回的数据保存到 data 中，在组件页面中使用 v-for="item in data"循环渲染数据轮播图数据列表（注意使用 v-for 的时候要设置:key 值）

</br>

#### 九宫格按钮

> 使用 MUI 中的 grid-default 布局，使用参考 MUI[官网链接](https://dev.dcloud.net.cn/mui/getting-started/)

- 找到 MUI 包对应的 grid 布局，放到 home 组件中，并做相应的调整
- 通过在浏览器中预览找到需要改变样式的类，并进行样式调整
- 将字体图标更换为图片，并设置图片和字体的大小（注意图片 src 是以 src 文件夹作为根目录的绝对路径）
