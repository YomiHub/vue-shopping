<template>
  <div class="goodsinfo-container">
    <h1 class="info-title">{{ info.title }}</h1>
    <hr />
    <div class="content" v-html="info.info"></div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      info: {}
    }
  },
  created() {
    this.getGoodsInfo()
  },
  methods: {
    getGoodsInfo() {
      this.$http
        .get('getGoodsInfo?goodsId=' + this.$route.params.id)
        .then(result => {
          if (result.status === 200) {
            if (result.body.status == 0) {
              this.info = result.body.message[0]
            } else {
              Toast({
                message: '数据加载失败'
              })
            }
          } else {
            Toast({
              message: '请求失败'
            })
          }
        })
    }
  }
}
</script>

<style lang="scss">
.goodsinfo-container {
  padding: 4px;
  .info-title {
    text-align: center;
    font-size: 16px;
    color: #226aff;
    margin: 10px 0;
  }
  img {
    width: 100%; //设置v-html中图片时不能使用局部样式scoped
  }
}
</style>
