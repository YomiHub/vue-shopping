<template>
  <div class="news-container">
    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        v-for="item in newsList"
        :key="item.id"
      >
        <router-link :to="'/home/news/newsDetail/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.image_url" />
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              {{ item.abstract }}
            </p>
            <p class="explain">
              <span
                >发表时间：{{ item.add_time | dateFormat('YYYY-MM-DD') }}</span
              >
              <span>点击：{{ item.click_times }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    this.getLists()
  },
  methods: {
    getLists() {
      this.$http.get('getNewsList').then(result => {
        if (result.status === 200) {
          console.log(result.body)
          if (result.body.status === 0) {
            this.newsList = result.body.message
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
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view .mui-media-object {
  line-height: 66px;
  height: 66px;
  max-width: 66px;
}
.mui-table-view .mui-media-body {
  h1 {
    font-size: 14px;
  }
  .explain {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: #226aff;
    }
  }
}
</style>
