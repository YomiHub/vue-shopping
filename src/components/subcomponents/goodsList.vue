<template>
  <div class="goods-list">
    <div
      class="goods-item"
      v-for="item in goodsList"
      :key="item.id"
      @click="toGoodsDetail(item.id)"
    >
      <div class="goods-img">
        <img :src="GLOBALVAL.baseUrl + '' + item.image_url" alt="" />
      </div>
      <h2 class="goods-title">{{ item.title }}</h2>
      <div class="goods-about">
        <p class="price">
          <span class="new-price">￥{{ item.sell_price }}</span>
          <span class="old-price">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>剩：{{ item.stock_quantity }}</span>
          <span>已售：{{ item.sold_quantity }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toGoodsDetail(id) {
      //this.$router.push('/home/goods/goodsDetail/' + id)
      //this.$router.push({ path: '/home/goods/goodsDetail/' + id })
      this.$router.push({ name: 'goodsDetail', params: { id } }) //使用该方式需要在router.js配置中添加name属性
    }
  },
  props: { goodsList: Array }
}
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
  padding: 6px;
  h2 {
    line-height: 18px;
  }
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    margin-top: 4px;
    padding: 2px;
    box-shadow: 0 0 8px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 240px; /* 设置最小高度，防止图片加载前挤在一起 */
    .goods-img {
      max-height: 114px;
      overflow: hidden;
    }
    img {
      width: 100%;
    }
    .goods-title {
      font-size: 14px;
    }
    .goods-about {
      background-color: #eee;
      p {
        margin: 0;
        padding: 4px;
      }
      .price {
        .new-price {
          font-size: 16px;
          color: red;
          font-weight: 600;
        }
        .old-price {
          font-size: 12px;
          text-decoration: line-through;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .more-btn {
    margin-top: 10px;
  }
}
</style>
