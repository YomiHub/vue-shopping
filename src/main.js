import Vue from 'vue'

//导入MUI的样式文件
import './lib/mui/css/mui.min.css'

//按需引入 Mint UI
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)


import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app)
})