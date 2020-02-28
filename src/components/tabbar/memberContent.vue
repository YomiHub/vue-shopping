<template>
  <div class="member-container">
    <div class="mui-card">
      <div class="mui-card-header user-info">
        <img src="images/member/defaultImg.png" alt="" />
        <div class="text-info">
          <p>Yomi</p>
          <span>生活就是买买买！！！</span>
        </div>
      </div>
      <div class="icon-list">
        <p>
          <span>66</span>
          <span>收藏夹</span>
        </p>
        <p>
          <span>62</span>
          <span>关注店铺</span>
        </p>
        <p>
          <span>100</span>
          <span>足迹</span>
        </p>
        <p>
          <span>18</span>
          <span>历史订单</span>
        </p>
      </div>
    </div>

    <div class="mui-card my-book">
      <div class="mui-card-header">我的订单</div>
      <div class="mui-card-content icon-list">
        <p>
          <span class="mui-icon mui-icon-navigate"></span>
          <span>待付款</span>
        </p>
        <p>
          <span class="mui-icon mui-icon-loop"></span>
          <span>待发货</span>
        </p>
        <p>
          <span class="mui-icon mui-icon-checkmarkempty"></span>
          <span>待收货</span>
        </p>
        <p>
          <span class="mui-icon mui-icon-chatbubble"></span>
          <span>评价</span>
        </p>
        <p>
          <span class="mui-icon mui-icon-info"></span>
          <span>退款/售后</span>
        </p>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">
        推荐商品
      </div>
      <div class="mui-card-content">
        <p class="dev-tip">
          (该页面后台接口尚未完成，使用的是所有商品列表数据)
        </p>
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
      </div>
    </div>
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

<style lang="scss" scoped>
.member-container {
  background: #eee;
  overflow: hidden;
  .user-info {
    justify-content: flex-start;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
    p {
      font-size: 16px;
      padding-left: 10px;
      font-weight: bold;
      margin-bottom: 0;
    }
    span {
      font-size: 14px;
      padding-left: 10px;
      color: #ccc;
    }
  }
  .icon-list {
    display: flex;
    justify-content: space-around;
    p {
      margin: 0;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
  .my-book {
    font-size: 14px;
    .icon-list {
      p {
        padding: 6px;
        .mui-icon {
          color: orange;
        }
      }
    }
  }
  .dev-tip {
    margin: 0;
    text-align: center;
  }
}
</style>
