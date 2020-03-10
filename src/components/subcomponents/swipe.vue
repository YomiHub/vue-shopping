<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in swipeList" :key="item.id">
      <!-- 在src中以变量开始会自动拼接本服务的http地址 -->
      <img
        :src="GLOBALVAL.baseUrl + '' + item.imageurl"
        alt=""
        srcset=""
        :class="{ full: isFull }"
      />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props: { swipeList: Array, isFull: Boolean }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;
    overflow: hidden;
    /*     &:nth-child(1) {
      background-color: skyblue;
    }
    &:nth-child(2) {
      background-color: green;
    }
    &:nth-child(3) {
      background-color: red;
    } */
    img {
      /* width: 100%; */
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>
