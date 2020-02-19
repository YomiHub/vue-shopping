import VueRouter from 'vue-router'
import homeContent from './components/tabbar/homeContent.vue'
import memberContent from './components/tabbar/memberContent.vue'
import shopcarContent from './components/tabbar/shopcarContent.vue'
import searchContent from './components/tabbar/searchContent.vue'
import newsList from './components/news/newsList.vue'
import newsDetail from './components/news/newsDetail.vue'
import photoList from './components/photos/photoList.vue'
import photoDetail from './components/photos/photoDetail.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsDetail from './components/goods/goodsDetail.vue'

//创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeContent },
    { path: '/member', component: memberContent },
    { path: '/shopcar', component: shopcarContent },
    { path: '/search', component: searchContent },
    { path: '/home/news', component: newsList },
    { path: '/home/news/newsDetail/:id', component: newsDetail },
    { path: '/home/photos', component: photoList },
    { path: '/home/photos/photoDetail/:id', component: photoDetail },
    { path: '/home/goodsList', component: goodsList },
    { path: '/home/goods/goodsDetail/:id', component: goodsDetail, name: 'goodsDetail' }
  ],
  linkActiveClass: 'mui-active' //默认高亮的类 router-link-active
})

//将路由对象暴露出去
export default router
