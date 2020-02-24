<template>
  <div class="shopcar-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div
          class="mui-card-content-inner goods-list"
          v-for="(item, i) in carList"
          :key="item.id"
        >
          <mt-switch
            v-model="$store.getters.getGoodsSelected[item.id]"
            @change="
              changeSelected(item.id, $store.getters.getGoodsSelected[item.id])
            "
          ></mt-switch>
          <img :src="GLOBALVAL.baseUrl + '' + item.image_url" alt="" />
          <div class="detail-info">
            <h2>{{ item.title }}</h2>
            <p>
              <span>￥{{ item.sell_price }}</span>
              <num-box
                :initcount="$store.getters.getGoodsCount[item.id]"
                :goodsId="item.id"
              ></num-box>
              <a href="#" @click.prevent="delCarGoods(item.id, i)">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner calculate">
          <div class="cal-left">
            <p>总计（不包含运费）</p>
            <p>
              已勾选商品<span class="color-red">
                {{ $store.getters.getSelectedAmount.count }}
              </span>
              件，总价<span class="color-red"
                >￥{{ $store.getters.getSelectedAmount.amount }}</span
              >
            </p>
          </div>
          <mt-button type="danger">结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberBox from '../subcomponents/carNumberBox.vue'
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      carList: []
    }
  },
  created() {
    this.getCarList()
  },
  methods: {
    getCarList() {
      // var goodsCar = JSON.parse(localStorage.getItem('goodsCar') || '[]')  可以从store中取出购物车数据
      var ids = []
      this.$store.state.goodsCar.forEach(item => {
        ids.push(item.goodsId)
      })

      //当购物车为空的时候就不发送请求
      if (ids.length <= 0) {
        return
      }
      this.$http.get('getGoodsCarList?ids=' + ids.join(',')).then(result => {
        if (result.status === 200) {
          if (result.body.status == 0) {
            this.carList = result.body.message
            // console.log(this.$store.getters.getGoodsCount)  获取商品id对应的购买数量
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
    },
    delCarGoods(id, index) {
      //删除购物车中的商品，同时还要删除store中的数据
      this.carList.splice(index, 1)
      this.$store.commit('removeCarGoods', id)
    },
    changeSelected(id, val) {
      this.$store.commit('changeCarSelected', { id: id, selected: val })
    }
  },
  components: {
    'num-box': numberBox
  }
}
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #fff;
  .goods-list {
    display: flex;
    align-items: center;
    img {
      max-width: 60px;
      height: 60px;
    }
    .detail-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        margin-bottom: 0;
      }
      h2 {
        font-size: 14px;
        line-height: 18px;
      }
      span {
        color: red;
        font-weight: bold;
      }
      .mui-numbox {
        height: 24px;
      }
    }
  }
  .calculate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .color-red {
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
