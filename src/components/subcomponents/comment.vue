<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <hr />
    <textarea
      placeholder="请输入要评论的内容（最多输入120个字）"
      v-model="msg"
    ></textarea>
    <mt-button type="primary" size="large" @click="sendComment"
      >发表评论</mt-button
    >
    <div class="comment-list">
      <div class="comment-item" v-for="(item, i) in comments" :key="i">
        <div class="comment-title">
          第{{ i + 1 }}楼 用户：{{ item.username }} 发表时间：{{
            item.add_time | dateFormat
          }}
        </div>
        <div class="comment-content">
          {{ item.content }}
        </div>
      </div>
    </div>
    <mt-button
      class="get-more"
      type="danger"
      size="large"
      plain
      @click="getMore"
      v-show="moreBtnShow"
    >
      加载更多···
    </mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      moreBtnShow: true, //控制加载更多按钮的显示隐藏
      commentsTotal: 0,
      pageindex: 1,
      pagesize: 2,
      comments: [],
      msg: '' //双向绑定输入的评论内容
    }
  },
  created() {
    this.getComment()
  },
  methods: {
    getComment() {
      console.log(this.id)
      this.$http
        .get(
          'getNewsComment?articleid=' +
            this.id +
            '&pageindex=' +
            this.pageindex +
            '&pagesize=' +
            this.pagesize
        )
        .then(result => {
          if (result.status === 200) {
            if (result.body.status === 0) {
              //防止在加载更多时数据被清空替换，所以需要拼接上原来的数据
              this.commentsTotal = result.body.message.total
              this.comments = this.comments.concat(result.body.message.data)
              if (
                this.pageindex == Math.ceil(this.commentsTotal / this.pagesize)
              ) {
                this.moreBtnShow = false
              }
            } else {
              Toast({
                message: '数据获取失败',
                position: 'bottom',
                duration: 3000
              })
            }
          } else {
            Toast({
              message: '请求失败' + result,
              position: 'bottom',
              duration: 3000
            })
          }
        })
    },
    getMore() {
      this.pageindex++
      this.getComment()
    },
    sendComment() {
      //article_id可以通过路由this.$route.params.id获取或者通过父组件传递的Id获取
      let time = new Date()
      this.$http
        .post('addComment', {
          article_id: this.id,
          add_time: time.toUTCString(),
          username: 'hym',
          content: this.msg.trim()
        })
        .then(result => {
          if (result.status === 200) {
            if (result.body.status === 0) {
              console.log(result.body.message)
              this.comments.unshift(result.body.message)
              this.msg = '' //评论成功，清空输入框的数据
            } else {
              Toast({
                message: '数据加载失败',
                position: 'bottom',
                duration: 3000
              })
            }
          } else {
            Toast({
              message: '请求失败' + result,
              position: 'bottom',
              duration: 3000
            })
          }
        })
    }
  },
  props: ['id']
}
</script>

<style lang="scss" scoped>
.comment-container {
  padding: 6px 0;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    line-height: 16px;
    height: 85px;
    margin: 0;
  }
  .comment-item {
    margin-top: 8px;
    padding: 6px;
    background: #ccc;
    font-size: 14px;
    line-height: 26px;
    .comment-content {
      text-indent: 2em;
    }
  }
  .get-more {
    margin-top: 10px;
  }
}
</style>
