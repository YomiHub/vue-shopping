<template>
  <div class="goods-detail">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swipe :swipeList="swipeList" :isFull="false"></swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{ detailInfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价：￥<del>{{ detailInfo.market_price }}</del
            >&nbsp&nbsp 销售价：<span class="red-mark"
              >￥{{ detailInfo.sell_price }}</span
            >
          </p>
          <div>
            购买数量：
            <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
              <button class="mui-btn mui-btn-numbox-minus" type="button">
                -
              </button>
              <input
                id="test"
                class="mui-input-numbox"
                type="number"
                value="5"
              />
              <button class="mui-btn mui-btn-numbox-plus" type="button">
                +
              </button>
            </div>
          </div>
          <div class="operate-btn">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ detailInfo.goods_num }}</p>
          <p>库存情况：{{ detailInfo.stock_quantity }}</p>
          <p>上架时间：{{ detailInfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import swipe from '../subcomponents/swipe.vue'
export default {
  data() {
    return {
      goodsId: this.$route.params.id,
      swipeList: [],
      detailInfo: {}
    }
  },
  created() {
    this.getGoodsSwipe()
    this.getGoodsDetail()
  },
  methods: {
    getGoodsSwipe() {
      this.$http.get('getGoodsSwipe?goodsId=' + this.goodsId).then(result => {
        if (result.status === 200) {
          if (result.body.status == 0) {
            this.swipeList = result.body.message
            console.log(this.swipeList)
          } else {
            Toast({
              messge: '请求失败'
            })
          }
        } else {
          Toast({
            messge: '请求失败'
          })
        }
      })
    },
    getGoodsDetail() {
      this.$http.get('getGoodsDetail?goodsId=' + this.goodsId).then(result => {
        if (result.status === 200) {
          if (result.body.status == 0) {
            this.detailInfo = result.body.message[0]
          } else {
            Toast({
              message: '数据加载失败'
            })
          }
        } else {
          Toast({
            message: '请求失败！'
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
.goods-detail {
  background-color: #eee;
  overflow: hidden; /* 清除超出容器的margin-top */
  .red-mark {
    color: red;
    font-weight: bold;
    font-size: 16px;
  }
  .mui-numbox {
    height: 26px;
  }
  .operate-btn {
    margin-top: 6px;
  }
  .mui-card-footer {
    display: block;
    button {
      margin-bottom: 10px;
    }
  }
}
</style>
