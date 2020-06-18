<template>
  <div class="seach-container">
    <!-- 包裹form兼容IOS，prevent阻止页面表单提交的刷新事件 -->
    <form action="" v-on:submit.prevent="">
      <mt-search
        v-model="searchValue"
        cancel-text="取消"
        placeholder="输入搜索关键字"
        style="width:100%;height:auto;"
      >
        <div class="goods-wrap">
          <goods-list
            :goodsList="goodsList"
            :moreBtnShow="moreBtnShow"
          ></goods-list>
          <mt-button
            type="danger"
            size="large"
            v-show="moreBtnShow"
            class="more-btn"
            @click="getMore"
            >加载更多</mt-button
          >
        </div>
      </mt-search>
    </form>
  </div>
</template>

<script>
import goodsList from '../subcomponents/goodsList.vue'
export default {
  data() {
    return {
      searchValue: '',
      pagesize: 2,
      pageindex: 1,
      goodsTotal: 0,
      goodsList: [],
      moreBtnShow: false,
      ifGetMore: false
    }
  },
  methods: {
    getListBykey() {
      this.$http
        .get('getGoodsByKey', {
          params: {
            key: this.searchValue,
            pageindex: this.pageindex,
            pagesize: this.pagesize
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          }
        })
        .then(results => {
          if (results.status === 200) {
            if (results.body.status == 0) {
              this.goodsTotal = results.body.message.total
              //如果是加载更多，则在原来的数据上添加
              if (this.ifGetMore) {
                this.goodsList = this.goodsList.concat(
                  results.body.message.data
                )
              } else {
                this.goodsList = results.body.message.data
              }
              if (
                this.pageindex == Math.ceil(this.goodsTotal / this.pagesize)
              ) {
                this.moreBtnShow = false
              } else {
                this.moreBtnShow = true
              }
              //初始化
              this.ifGetMore = false
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
      this.ifGetMore = true //加载更多
      this.getListBykey()
    }
  },
  components: {
    'goods-list': goodsList
  },
  watch: {
    searchValue: function(newVal, oldVal) {
      if ((newVal != oldVal) & (newVal.length != 0)) {
        this.getListBykey()
      }
    }
  }
}
</script>

<style lang="scss">
.seach-container {
  height: 100%;
  input[type='search'].mint-searchbar-core {
    text-align: left;
    margin-bottom: 0;
    height: auto;
    padding: 0 4px;
    background-color: #fff;
  }
  .mint-search-list {
    padding-top: 84px;
  }
}
</style>
