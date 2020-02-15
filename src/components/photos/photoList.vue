<template>
  <div class="photo-container">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in categoryList"
            :key="item.id"
            @click="getPhotoList(item.id)"
          >
            {{ item.category_name }}
          </a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <li v-for="item in photoList" :key="item.id">
        <img v-lazy="'' + baseUrl + '' + item.image_url" />
      </li>
    </ul>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:3000',
      categoryList: [],
      photoList: []
    }
  },
  created() {
    //获取图片分类
    this.getCategory()
    //默认获取全部类别的图片
    this.getPhotoList(0)
  },
  mounted() {
    //初始化滑动组件
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  methods: {
    getCategory() {
      //获取分类
      this.$http.get('getCategory').then(result => {
        if (result.status === 200) {
          if (result.body.status === 0) {
            result.body.message.unshift({ id: 0, category_name: '全部' })
            this.categoryList = result.body.message
          } else {
            Toast({
              message: '数据获取失败',
              position: 'bottom',
              duration: 3000
            })
          }
        } else {
          Toast({
            message: '数据获取失败',
            position: 'bottom',
            duration: 3000
          })
        }
      })
    },
    getPhotoList(categoryId) {
      //根据分类获取图片列表
      this.$http.get('getPhotoList?categoryId=' + categoryId).then(result => {
        if (result.status === 200) {
          if (result.body.status === 0) {
            this.photoList = result.body.message
          } else {
            Toast({ message: '数据获取失败' })
          }
        } else {
          Toast({ message: '数据获取失败' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  img[lazy='loading'] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  ul,
  li {
    list-style: none;
  }
}
</style>
