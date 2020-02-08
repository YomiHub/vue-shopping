import VueRouter from 'vue-router'
import homeContent from './components/tabbar/homeContent.vue'
import memberContent from './components/tabbar/memberContent.vue'
import shopcarContent from './components/tabbar/shopcarContent.vue'
import searchContent from './components/tabbar/searchContent.vue'


//创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/home', component: homeContent },
    { path: '/member', component: memberContent },
    { path: '/shopcar', component: shopcarContent },
    { path: '/search', component: searchContent }
  ],
  linkActiveClass: 'mui-active' //默认高亮的类 router-link-active
})

//将路由对象暴露出去
export default router
