<template>
  <div>
    <swipe :swipeList="swipeList" :isFull="true"></swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <img src="images/menuicon/menu1.png" alt="" srcset="" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photos">
          <img src="images/menuicon/menu2.png" alt="" srcset="" />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="images/menuicon/menu3.png" alt="" srcset="" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="images/menuicon/menu4.png" alt="" srcset="" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="images/menuicon/menu5.png" alt="" srcset="" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="images/menuicon/menu6.png" alt="" srcset="" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import swipe from '../subcomponents/swipe.vue'
export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:3000',
      swipeList: []
    }
  },
  created() {
    this.getSwipe()
  },
  methods: {
    getSwipe() {
      //获取轮播图
      this.$http.get('getSwipe').then(result => {
        if (result.status === 200) {
          console.log(result.body)
          if (result.body.status === 0) {
            this.swipeList = result.body.message
          } else {
            Toast({
              message: '数据加载失败',
              position: 'bottom',
              duration: 3000
            })
          }
        } else {
          Toast({
            message: '请求失败' + result,
            position: 'bottom',
            duration: 3000
          })
        }
      })
    }
  },
  components: {
    swipe
  }
}
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: 0;
  img {
    width: 60px;
  }
  mui-media-body {
    font-size: 14px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>
