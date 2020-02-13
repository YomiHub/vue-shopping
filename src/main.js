import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import moment from 'moment' //时间格式化处理

//导入MUI的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需引入 Mint UI
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

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