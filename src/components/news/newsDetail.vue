<template>
  <div class="detail-container">
    <h1 class="title">{{ detail.title }}</h1>
    <p class="sub-detail">
      <span>发表时间：{{ detail.add_time | dateFormat }}</span>
      <span>浏览{{ detail.click_times }}次</span>
    </p>
    <div class="detail-content" v-html="detail.detail"></div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      id: this.$route.params.id,
      detail: {}
    }
  },
  created() {
    this.getNewsDetail()
  },
  methods: {
    getNewsDetail() {
      this.$http
        .get('getNewsDetail', { params: { id: this.id } })
        .then(result => {
          if (result.status === 200) {
            if (result.body.status === 0) {
              console.log(result.body)
              this.detail = result.body.message[0]
            } else {
              Toast({
                message: '数据获取失败',
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
  }
}
</script>

<style lang="scss" scoped>
.detail-container {
  padding: 0 6px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 14px 0;
  }
  .sub-detail {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #226aff;
  }
  .detail-content {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
