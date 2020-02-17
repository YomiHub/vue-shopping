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
      <router-link
        v-for="item in photoList"
        :key="item.id"
        :to="'/home/photos/photoDetail/' + item.id"
        tag="li"
      >
        <img v-lazy="'' + baseUrl + '' + item.image_url" class="photo-img" />
        <div class="photo-info">
          <h3 class="photo-title">{{ item.title }}</h3>
          <p class="photo-abstract">{{ item.abstract }}</p>
        </div>
      </router-link>
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
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0px; //img下会有10px的margin-bottom
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    .photo-img {
      width: 100%;
      vertical-align: middle;
    }
    img.photo-img[lazy='loading'] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .photo-info {
      width: 100%;
      color: #fff;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .photo-title {
        font-size: 16px;
      }
      .photo-abstract {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
