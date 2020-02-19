import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import moment from 'moment' //时间格式化处理

//导入MUI的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

/* //按需引入 Mint UI
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload); */

//使用图片懒加载时 ，用到懒加载图标，需要全局引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import mui from './lib/mui/js/mui.min.js'
//缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
/* Vue.use(preview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: { top: 0, bottom: 0 },
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
}) */

import globalval from './globalvalue.js'
Vue.prototype.GLOBALVAL = globalval

import router from './router.js'
import app from './App.vue'

Vue.http.options.root = 'http://127.0.0.1:3000';
Vue.http.options.emulateJSON = true;  //设置post提交数据类型
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern)
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router  //挂载路由对象
})