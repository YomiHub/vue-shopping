<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="http://localhost:3000/www/newsimage/cat.jpg"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？
            </p>
            <p class="explain">
              <span>发表时间：2020-2-10 23:00:11</span>
              <span>点击：1次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="http://localhost:3000/www/newsimage/garlic.jpg"
          />
          <div class="mui-media-body">
            <h1>大蒜</h1>
            <p class="mui-ellipsis">
              这是一个让我又爱又恨的食物，喜欢拿它当调味料，但是很不喜欢直接啃它
            </p>
            <p class="explain">
              <span>发表时间：2020-2-10 23:00:11</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="http://localhost:3000/www/newsimage/hamburger.jpg"
          />
          <div class="mui-media-body">
            <h1>汉堡</h1>
            <p class="mui-ellipsis">
              现在是晚上十一点，这个时候要是能吃上一个热腾腾的汉堡一定是一件很幸福的事情···
            </p>
            <p class="explain">
              <span>发表时间：2020-2-10 23:00:11</span>
              <span>点击：1次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
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
