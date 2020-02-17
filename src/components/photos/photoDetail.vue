<template>
  <div class="photo-detail">
    <h2>{{ detail.title }}</h2>
    <p class="abstract">
      <span>发表时间：{{ detail.add_time | dateFormat }}</span>
      <span>点击：{{ detail.click_times }}次</span>
    </p>

    <hr />

    <!-- 图片详情下的缩略图 -->
    <div class="photo-compress">
      <vue-preview
        :slides="compress"
        @close="handleClose"
        class="preview"
      ></vue-preview>
    </div>

    <!-- 图片详细内容 -->
    <div class="content" v-html="detail.detail"></div>

    <!-- 图片详情下的评论模块 -->
    <comment-wrap :id="id" :commentType="commentType"></comment-wrap>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:3000',
      id: this.$route.params.id,
      detail: {},
      commentType: 1,
      compress: [] //缩略图
    }
  },
  created() {
    this.getPhotoDetail()
    this.getPthotoCompress()
  },
  methods: {
    getPhotoDetail() {
      this.$http.get('getPhotoDetail?photoId=' + this.id).then(result => {
        if (result.status === 200) {
          if (result.body.status === 0) {
            this.detail = result.body.message[0]
          } else {
            Toast({
              message: '数据获取失败'
            })
          }
        } else {
          Toast({
            message: '数据获取失败'
          })
        }
      })
    },
    getPthotoCompress() {
      this.$http.get('getPhotoGroup?photoId=' + this.id).then(result => {
        if (result.status === 200) {
          if (result.body.status === 0) {
            result.body.message.forEach(item => {
              item.src = this.baseUrl + '' + item.photo_url
              item.msrc = this.baseUrl + '' + item.photo_url
            })
            this.compress = result.body.message
            console.log(this.compress)
          } else {
            Toast({
              message: '数据获取失败'
            })
          }
        } else {
          Toast({
            message: '数据获取失败'
          })
        }
      })
    },
    handleClose() {
      console.log('close event')
    }
  },
  components: {
    'comment-wrap': comment
  }
}
</script>

<style lang="scss" scoped>
.photo-detail {
  padding: 0 6px;
  font-size: 14px;
  h2 {
    color: #26a2ff;
    font-size: 16px;
    margin: 14px 0;
    text-align: center;
  }
  .abstract {
    display: flex;
    justify-content: space-between;
  }
  .content {
    line-height: 30px;
  }
}
</style>
