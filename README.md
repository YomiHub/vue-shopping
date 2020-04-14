### 基于 Vue.js 的项目练习

#### 基于 node 开发后台接口

- 创建空项目文件夹 vue-project-data，在文件夹下新建入口文件 index.js，然后初始化项目`npm init -y`
- 安装使用到的包`npm install express body-parser mysqljs/mysql -S`
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

</br>

#### 添加组件切换的动画

> 切换组件改变的实际是 router-view，所以只需要给 router-view 设置动画

- 首先希望访问根目录的时候展示的是 home 组件，所以需要在 router.js 中设置路由重定向即`path:'/',redirect:'/home'`
- 给 router-view 标签外包 transition 标签，在样式中设置.v-enter、.v-leave-to、.v-enter-active、.v-leave-active
- 需要解决滚动条（设置 container 的 overflow-x 为 hidden）、动画右进和右出（分别设置 v-enter 与 v-leave-to 的 translateX）、解决上进下出（在 v-leave-to 设置 position 为 absolute）

</br>

#### 完成新闻资讯的路由跳转

- 将跳转按钮改造为 router-link，设置 to 属性为'home/news'，并在 components 下创建对应的 news.vue 组件
- 在 router.js 下配置 path 和 component
- 完成页面列表布局，采用 MUI 的 media-list.html 代码，完成初步布局，再设置字体等样式
- 从后台接口获取资讯列表的数据并循环渲染到页面，可以在 main.js 配置全局根路径，避免每次 http 请求都要拼写全路径，具体设置参考 vue-resource 的[github 链接](https://github.com/pagekit/vue-resource/blob/develop/docs/config.md)
  - 需要注意的是该配置需要放在 vue-resource 注册之后
  - 在 this.\$http.get 请求填写路径的时候使用相对路径，不能以'/'开头
- `npm install moment -S`安装 moment 时间格式化工具包，通过全局过滤器 Vue.filter 将资讯时间进行格式化处理`moment(dateStr).format(pattern)`

</br>

#### 完成资讯列表跳转详情

- 将列表链接改为 router-link，通过 to 属性拼接 id，并创建对应的详情组件，配置到 router.js 中（'/home/news/newsDetail/:id'）
- 在详情 newsDetail.vue 组件中通过`this.$route.params.id`获取到 id，通过 id 从后台获取资讯的详情信息（注意：这里后台返回数据是数组，所以需要取第一个对象，即 result.body.message[0]）

</br>

#### 完成评论子组件的开发

> 因为评论组件会在多处使用，所以封装成单独的子组件

- 先创建单独的 comment.vue 组件模板
- 在需要使用 comment 组件的页面中导入 comment +`import comment from './components/subcomponents/comment.vue'`
- 在父组件中使用'components'属性，将导入的 comment 子组件注册为自己的子组件
- 在页面中用标签形式引用注册组件时的子组件名称即可
- 在评论子组件中创建获取数据的方法 this.\$http.get

</br>

#### 实现加载更多的功能

- 给按钮绑定事件@click="getMore"，事件处理中需要将页数加一，再调用数据请求
- 在数据获取的方法中，需要注意的是要将新获取的数据拼接到 data 中，避免在加载更多的时候原有的数据被替换

```js
//通过链接拼接参数进行get请求
this.$http
  .get(
    'getNewsComment?articleid=' +
      this.id +
      '&pageindex=' +
      this.pageindex +
      '&pagesize=' +
      this.pagesize
  )
  .then(result => {})

//通过对象进行get请求传参
this.$http.get('getNewsDetail', { params: { id: this.id } }).then(result => {})
```

</br>

#### 实现发表评论功能

- 给文本框做双向数据绑定 v-model="msg"
- 为发表按钮绑定事件
- 校验评论内容是否为空，为空则 Toast 提示
- 通过 vue-resource 发送 post 请求，将评论内容提交到服务器（注意在 main.js 中全局设置 post 提交的数据格式`Vue.http.options.emulateJSON = true; //默认类型application/x-www-form-urlencoded`）
- 评论发表后刷新列表展示最新的评论
  - 如果直接调用获取评论列表的方法，则无法获取到已经请求的前几页数据，只能获取最后一页评论
  - 在这里选择手动拼接一个最新的评论对象，调用数组的 unshift 方法，将最新的评论追加到 data 的 comments 中

</br>

#### 完成图片分享路由跳转

- 将链接修改为 router-link，并设置 to 属性为"/home/photos"
- 创建 photos 文件夹，并添加 photolist.vue 组件，在 router.js 中配置对应的路由

</br>

#### 使用 MUI 中的 tab-top-webview-main（顶部可左右滑动的选项卡）

- 需要注意如果希望 tab 距离屏幕顶部有一定距离则可以设置样式 top，或者直接移除 html 标签中的类 mui-fullscreen
- 因为顶部滑动组件是 JS 组件，需要在 photolist.vue 组件导入 mui.js 文件，并且需要在 mouted 钩子中（组件的 DOM 结构被渲染好且已经挂载到页面时）注册 mui 滚动事件，具体可以参考官网[文档]("https://dev.dcloud.net.cn/mui/ui/#scroll")
- 解决导入 mui.min.js 时报错，因为 bundule.js 中默认是启用严格模式的（原因是 babel-loader 编译 js 文件时使用了严格模式），但是 mui.min.js 中使用了'callee'、'caller'、'arguments'
  - 方案一：把 mui.js 中非严格模式的代码改掉（比较不现实）
  - 方案二：禁用 webpack 打包时候的严格模式（babel@7 版本可以使用插件 babel-plugin-transform-remove-strict-mode，使用方法参考[链接](https://github.com/genify/babel-plugin-transform-remove-strict-mode)）
    - `npm install babel-plugin-transform-remove-strict-mode -D`
    - 这里使用的是 babel，所以只需要在 babelrc 中配置`{"plugins": ["transform-remove-strict-mode"]}`
  - 方案三：如果安装的是 babel-loader@8，可以修改 babelrc，打包时忽略某个文件`"ignore": ["./src/assets/webuploader/*.js"]`，关于 babel 版本可以参考另一边[笔记]("https://github.com/YomiHub/learning-notes/blob/master/webpack/problem.md")
- 解决滑动警告：添加样式`*{touch-action:pan-y;}`，touch-action 是 chrome 为了提高页面流畅度，用于指定某个给定区域是否允许用户操作

</br>

#### 滑动选项卡填坑

- 解决使用 mui.js 时，导致的底部 tabbar 无法切换的问题

  > 解决：修改控制 tabbar 样式的类名，将原有的样式复制并定义到新的类中，将样式类.mui-tab-item 替换为新的类名

- 实现滑动选项卡的高亮样式（默认只有第一个选项高亮）
  > 解决：三目运算符，通过 item 的 id 判断默认高亮显示的项`:class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"`

</br>

#### 获取对应分类的图片列表

- 使用 mint-ui 中的 Lazy Load 实现图片的懒加载，具体使用参考官方文档[链接](https://mint-ui.github.io/docs/#/zh-cn2/lazyload)
  - 注意设置加载时的样式时使用的是 img 而不是示例中的 image
  - 如果希望出现懒加载效果，需要完全导入 mint-ui，不能按需引入，并且还需要引入样式文件
  - 除了基本样式调整，还需要注意 img 垂直方向上的居中显示 vertical-align:center;
- 在 created 钩子中请求图片数据，并给滑动选项卡设置@click 点击事件，当点击选项卡则重新加载对应分类的图片
- 使用手机进行调试的时候，会发现滑动选项卡的点击事件失效，解决办法是将@click 绑定改为 MUI 框架带的@tap 事件

</br>

#### 点击图片列表跳转详情

- 改写列表 li 标签为 router-link，注意因为使用了 mint-ui 样式，需要给 router-link 设置属性 tag 值为'li'，其中 to 属性要携带参数 id，用于查询图片详情
- 在详情页通过 this.\$route.params.id 获取到路由中的 id 参数，并发起请求获取到详情
- 详情页中的图片详情带有标签，应该使用 v-html 属性设置内容
- 评论模板可以直接使用资讯中的方式，注册子组件，即添加 components 属性，然后在组件内通过:id 和:type 传递参数给子评论子组件
- 通过 vue-preview 插件（这里用的版本是"^1.1.3"），实现图片缩略图，具体使用可以参考[github 链接]("https://github.com/LS1231/vue-preview")
  - vue-preview 组件的样式要在全局设置才有效（例如：这里是在 index.html 中设置的）
  - 缩略图的样式可以自行设置
  - :slides 数组中的对象数据，需要包含字段 src、msrc、w、h（其中 w,h 是预览大图的宽高）

#### 商品购买列表页

- 使用 css3 的 flex 布局，与 flex 的相关用法参考阮一峰老师的[文章](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- 要点一：结合 flex-direction 属性设置垂直方向上的布局；要点二：设置 min-height，防止出现图片加载前的标签元素堆积的状态
- 通过 http 请求数据的 image_url 需要拼接路径，可以单独创建文件 globalvalue 来放全局变量，具体使用参考另一篇笔记[vue 项目开发知识点]()

</br>

#### 商品购买详情页

> 了解网页中两种跳转方式：其一是使用 a 标签，称为标签跳转；其二是使用 window.location.href 称为编程式导航

- 使用编程式导航完成详情页的跳转，使用具体可以参考官网文档[链接](https://router.vuejs.org/zh/guide/essentials/navigation.html)
  - 注意 this.$route 是路由【参数对象】，包含路由中的参数例如params、query；而this.$router 是路由的【导航对象】，方便在 JS 代码中实现路由的前进 forward、后退 back/go(-1)、跳转到新的地址 push
  - 例如在触发事件即跳转方法中，使用导航对象跳转`this.$router.push("router.js中注册的路由地址"+参数变量)`，也可以 push 对象{path:"router.js 中注册的路由地址"+参数变量}，还可以将路径 name 和参数 params（路由规则中需要添加属性 name）分开或者 path 和 query，具体可参考官网文档
- 页面设计采用 mui 中的卡片视图布局 card.html
- 在商品详情页面也有和首页相似的轮播，所以需要将轮播封装成为组件，并在组件中通过 props 接收从父组件中传递的轮播图列表数据（通过:isFull 设置是否将轮播图的宽度设置为 100%，并通过:class="['full':isFull]"设置子组件中的轮播是否有类 full）
- 关于商品数量加减布局可以使用 mui 框架中的 numbox

</br>

#### 商品详情页面的图文介绍和评论详情跳转

- 创建组件，并设置路由规则，通过编程式导航完成跳转
- 图文页面的详情内容用 v-html
- 评论部分直接使用评论子组件

</br>

#### 加入购物车的动画效果

- 小球样式设计时注意 z-index
- 在点击加入购物车时触发事件，将小球显示出来
- 将小球标签使用 transition 包起来，注意是半场动画要用钩子动画不能使用类动画，可以参考[链接](https://github.com/YomiHub/learning-notes/blob/master/Vue/vue%E5%AE%9E%E7%8E%B0%E5%8A%A8%E7%94%BB.md)
- trasition 可以使用到贝塞尔曲线 el.style.transition = 'all 1s cubic-bezier(.73,.24,.25,1)'，具体可以参考[网址](https://cubic-bezier.com/#.73,.24,.25,1)
- 对于小球的位置可以使用 dom.getBoundingClientRect()获取，使用可以参考[链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
- 注意在 vue 中操作 dom 可以使用 ref 属性进行注册，通过 this.\$refs.refname 获取到 dom 元素（如果是组件之外的极少数不涉及数据渲染的 dom，也可以通过绑定 id，然后通过操作 dom 来获取元素）
- 获取数字框中的数据时，涉及到子组件向父组件传值，需要父组件向子组件传递方法，子组件调用方法并通过参数将数据返回
  - 在父组件中通过@getcount = "方法名"，定义方法，在子组件中通过 this.\$emit('getcount',参数)调用父组件传递的方法
- 将库存量设置为数字选择框可选最大值，因为库存量是异步请求返回的值，所以需要在子组件中监听 watch 父组件传递的值，再将值设置到选择框的可选最大值中
  - 子组件中通过 setOption(options)设置数字选择框的最大值

</br>

#### 使用 vuex 实现加入购物车时的数据共享

- 安装 vuex，并注册到 vue 中`Vue.use(Vuex)`
- 在加入购物车的事件中将商品信息（商品 id，要买的数量，price，selected 是否选中）保存到对象中，然后通过 this.\$store.commit()将数据对象存到共享数据 store.state 的数组中
  - 加入购物车的方法中，判断购物车中是否已经有对应的商品了，如果有的话就只需要更新数组对应对象的数量
  - 如果购物车中没有对应的商品，则将传递的对象 push 到数组中
- 购物车图标显示数量可以通过 getters 计算 store 存储数组中 count 的总合（组件页面通过\$store.getters.getSelected）
  - 为持久化存储，所以要将购物车信息存储到 localStorage 中（localStorage.setItem('goodsCar',JSON.stringify(state.goodsCar))）
  - 要刚进入页面就有购物车数据，所以在 main 中需要在 store 初始化 state 的时候就从本地获取数据并设置

</br>

#### 实现购物车页面（商品数量、选中数量）

- 使用 mint-ui 中 form components 中的 switch 实现商品选中与否的状态
- 购物车页面中数字选择框的逻辑和商品页面中数字选择框的逻辑不同，所以需要新建一个数字选择框的组件
- 因为购物车数据是存储在本地，所以需要在请求数据时携带本地购物车所有商品 id，根据 id 返回商品列表
- 获取到的列表不包含加入购物车的商品数，需要知道商品对应的选择数量，要从本地中查询。在 getters 创建方法，以商品 id 为属性，选择数为属性值保存到对象中，将商品 id 与选择的商品数联系起来
- 监听购物车页面商品选择数量，同步到 store 中
- 删除商品时，除了移除 store 中的商品还要删除 list 对应位置的商品，所以要在调用方法的时候传递商品在 goodList 列表中的索引位置（store 中数据的移除需要在 mutations 中定义方法）

</br>

#### 实现购物车选中样式状态、选中金额与本地存储一致（计算总价）

- 类似获取选中数量，在 getter 中创建方法拼接商品 id 和选中状态（id 为属性，选中状态为值）
- 通过 getter 可以将选中状态通过 v-model 显示，但是修改状态之后的 selected 不能同步更新，因为不能通过 getter 直接修改 store 中的数据。要通过 mt-switch 中的 change 事件绑定方法调用 store 中的 mutations，更新状态
- 在 getters 中创建方法用于计算选中数量以及选中商品总价并自动更新

</br>

#### 实现返回按钮

- 在 mint-ui 中找到 header 组件，将返回的标签添加到 app.vue 中
- 修改 router-link 为 span,给返回按钮添加自定义事件`this.$router.go(-1)`
- 为避免首页也出现返回按键，需要 watch 监听路由路径\$route.path 是否等于'/home'，是的时候就隐藏（注意在 created 钩子函数中就应该判断路由状态）

</br>

#### 将项目托管到 Apache 并启用

- 运行`wepack`命令，将项目打包到 dist 目录下
- 启动 apache 服务器，将 dist 目录下的文件复制到服务器的 web 目录中，默认使用 127.0.0.1:80 访问项目
- 启动 apache 服务器的 gzip 压缩技术，优化用户请求（开启 gzip 参考另一篇笔记[链接](文档：开启 apache 服务的 gzip 压缩技术.md
  链接：http://note.youdao.com/noteshare?id=1f40f79ac61fe0719cfd0e3757ecb264&sub=FB2051700017406DACFC8F2AF00F1B0B)）
- 通过 ngrok 将本机映射为一个外网的 Web 服务器（默认是美国服务器，访问速度很慢）
  - 下载 ngrok，点击 ngrok.exe 运行
  - 运行命令`ngrok http 运行在本机的端口号`
