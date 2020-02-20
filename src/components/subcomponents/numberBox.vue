<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">
      -
    </button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
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
      //当选择的数字框改变时就将数字传递给父组件
      this.$emit('getcount', parseInt(this.$refs.countNum.value))
    }
  },
  props: ['max'],
  watch: {
    //监听属性
    max: function(newVal, oldVal) {
      mui('.mui-numbox')
        .numbox()
        .setOption('max', newVal)
    }
  }
}
</script>

<style lang="scss" scoped></style>
