<template>
  <div class="goods-detail">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="ballShow" ref="ballposition"></div>
    </transition>

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
            <num-box
              @getcount="getSelectNum"
              :max="detailInfo.stock_quantity"
            ></num-box>
          </div>
          <div class="operate-btn">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCar"
              >加入购物车</mt-button
            >
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
        <mt-button
          type="primary"
          size="large"
          plain
          @click="toInfo(detailInfo.id)"
        >
          图文介绍
        </mt-button>
        <mt-button
          type="danger"
          size="large"
          plain
          @click="toComment(detailInfo.id)"
        >
          商品评论
        </mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import swipe from '../subcomponents/swipe.vue'
import numBox from '../subcomponents/numberBox.vue'
export default {
  data() {
    return {
      goodsId: this.$route.params.id,
      swipeList: [],
      detailInfo: {},
      ballShow: false, //控制添加购物车时小球的显示隐藏
      selectCount: 1 //默认选中商品为1件
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
    },
    toInfo(id) {
      //跳转到图文介绍
      this.$router.push({ name: 'goodsInfo', params: { id } })
    },
    toComment(id) {
      //跳转到评论详情
      this.$router.push({ name: 'goodsComment', params: { id } })
    },
    addShopCar() {
      this.ballShow = !this.ballShow
    },
    beforeEnter(el) {
      el.style.transform = 'translate(0,0)'
    },
    enter(el, done) {
      el.offsetWidth
      el.style.transition = 'all 1s cubic-bezier(.73,.24,.25,1)'
      done()
    },
    afterEnter(el) {
      //通过操作dom获取到dom元素（vue是不推荐操作dom的但是这里不涉及数据双向绑定可少量使用）
      const endPosition = document
        .getElementById('end-point')
        .getBoundingClientRect()
      const beginPosition = this.$refs.ballposition.getBoundingClientRect()
      var changeLeft = endPosition.left - beginPosition.left
      var changeTop = endPosition.top - beginPosition.top
      el.style.transform = `translate(${changeLeft}px, ${changeTop}px)`
      this.ballShow = !this.ballShow
    },
    getSelectNum(count) {
      //获取数字框中选择的数量
      this.selectCount = count
    }
  },
  components: {
    swipe,
    'num-box': numBox
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
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 386px;
    left: 152px;
  }
}
</style>
