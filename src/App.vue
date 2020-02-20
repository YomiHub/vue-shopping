<template>
  <div class="app-container">
    <!-- header部分 -->
    <mt-header fixed title="速购 · 快速找到心仪商品"></mt-header>

    <!-- content部分 -->
    <transition>
      <router-view>app.vue模板</router-view>
    </transition>

    <!-- tab部分 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-change" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-change" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>

      <router-link class="mui-tab-item-change" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="end-point">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-change" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow: hidden;
  .mint-header {
    z-index: 99; //避免“图片分享”的滑动选项卡将其覆盖
  }
  /* 使用新的类名，解决使用mui框架js组件后tabbar切换失效的问题 */
  .mui-bar-tab .mui-tab-item-change.mui-active {
    color: #007aff;
  }

  .mui-bar-tab .mui-tab-item-change {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }

  .mui-bar-tab .mui-tab-item-change .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-change .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>
