import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入MUI的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需引入 Mint UI
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router  //挂载路由对象
})