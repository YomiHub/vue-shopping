<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <!-- 在src中以变量开始会自动拼接本服务的http地址 -->
        <img :src="'' + baseUrl + '' + item.imageurl" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    homeContent
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
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
      this.$http.get(this.baseUrl + '/getSwipe').then(result => {
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
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: skyblue;
    }
    &:nth-child(2) {
      background-color: green;
    }
    &:nth-child(3) {
      background-color: red;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
