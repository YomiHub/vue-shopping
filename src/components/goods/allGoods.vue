<template>
  <div class="goods-wrap">
    <goods-list :goodsList="goodsList" :moreBtnShow="moreBtnShow"></goods-list>
    <mt-button
      type="danger"
      size="large"
      v-show="moreBtnShow"
      class="more-btn"
      @click="getMore"
      >加载更多</mt-button
    >
  </div>
</template>

<script>
import goodsList from '../subcomponents/goodsList.vue'
export default {
  data() {
    //data是组件内部挂载私有数据的
    return {
      pagesize: 2,
      pageindex: 1,
      goodsTotal: 0,
      goodsList: [],
      moreBtnShow: true
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      this.$http
        .get(
          'getGoodsList?pageindex=' +
            this.pageindex +
            '&pagesize=' +
            this.pagesize
        )
        .then(results => {
          if (results.status === 200) {
            if (results.body.status == 0) {
              this.goodsTotal = results.body.message.total
              this.goodsList = this.goodsList.concat(results.body.message.data)
              if (
                this.pageindex == Math.ceil(this.goodsTotal / this.pagesize)
              ) {
                this.moreBtnShow = false
              }
            } else {
              Toast({
                message: '数据获取失败'
              })
            }
          } else {
            Toast({ message: '请求失败' })
          }
        })
    },
    getMore() {
      this.pageindex++
      this.getGoodsList()
    }
  },
  components: {
    'goods-list': goodsList
  }
}
</script>

<style lang="scss" scoped></style>
