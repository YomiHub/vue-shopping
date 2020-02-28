import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//从本地存储获取购物车数据，需要考虑为空的情况
var goodsCar = JSON.parse(localStorage.getItem('goodsCar') || '[]');
var store = new Vuex.Store({
  state: {
    //可以通过this.$store.state.变量名访问
    goodsCar: goodsCar
  },
  mutations: {
    //通过this.$store.commit('方法名',传递的参数)
    addToCar (state, goodsInfo) {
      //假设商品不在购物车中
      var ifInCar = false;
      // console.log(goodsInfo)
      state.goodsCar.some(item => {
        if (item.goodsId == goodsInfo.goodsId) {
          ifInCar = true;
          //改变数量
          item.count += parseInt(goodsInfo.count)
          return true;
        }
      })
      //如果循环完毕还是false，则表示购物车中没有该商品
      if (!ifInCar) {
        state.goodsCar.push(goodsInfo)
      }
      //将购物车数据存储到本地中
      localStorage.setItem('goodsCar', JSON.stringify(state.goodsCar))
    },
    updateCar (state, goodsInfo) {
      //更新购物车中的数据并重新保存到本地
      state.goodsCar.some(item => {
        if (item.goodsId == goodsInfo.goodsId) {
          item.count = goodsInfo.count;
          localStorage.setItem('goodsCar', JSON.stringify(state.goodsCar))
          return true;
        }
      })
    },
    removeCarGoods (state, id) {
      state.goodsCar.some((item, i) => {
        if (item.goodsId == id) {
          state.goodsCar.splice(i, 1);
          localStorage.setItem('goodsCar', JSON.stringify(state.goodsCar))
          return true;
        }
      })
    },
    changeCarSelected (state, info) {
      state.goodsCar.some(item => {
        if (item.goodsId == info.id) {
          item.selected = info.selected;
          localStorage.setItem('goodsCar', JSON.stringify(state.goodsCar))
          return true;
        }
      })
    }
  },
  getters: {
    //通过this.$store.getters.方法名访问处理后的数据
    getSelected (state) {
      var total = 0;
      state.goodsCar.forEach(item => {
        if (item.selected) {
          total += item.count
        }
      })
      return total
    },
    getGoodsCount (state) {
      var count = {};
      state.goodsCar.forEach(item => {
        count[item.goodsId] = item.count
      })
      return count;
    },
    getGoodsSelected (state) {
      var selected = {};
      state.goodsCar.forEach(item => {
        selected[item.goodsId] = item.selected;
      })
      return selected;
    },
    getSelectedAmount (state) {
      var total = {
        count: 0,//选择的商品数
        amount: 0//选择商品的总价
      }

      state.goodsCar.forEach(item => {
        if (item.selected) {
          total.count += item.count;
          total.amount += item.price;
        }
      })
      return total;
    }
  }
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import moment from 'moment' //时间格式化处理

//导入MUI的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import mui from './lib/mui/js/mui.min.js'

/* //按需引入 Mint UI
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload); */

//使用图片懒加载时 ，用到懒加载图标，需要全局引入
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'

Vue.use(MintUI);


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
  router,  //挂载路由对象
  store
})