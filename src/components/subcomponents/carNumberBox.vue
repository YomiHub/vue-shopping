<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">
      -
    </button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="initcount"
      @change="countChange"
      ref="countNum"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">
      +
    </button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  mounted() {
    //初始化数字选择框
    mui('.mui-numbox').numbox()
  },
  methods: {
    countChange() {
      //当选择的数字框改变时就要将最新的数据覆盖到store中，并更新本地数据存储
      this.$store.commit('updateCar', {
        goodsId: this.goodsId,
        count: parseInt(this.$refs.countNum.value)
      })
    }
  },
  props: { initcount: Number, goodsId: Number }
}
</script>

<style lang="scss" scoped></style>
