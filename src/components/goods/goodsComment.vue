<template>
  <div class="goods-comment">
    <comment-wrap :id="id" :commentType="commentType"></comment-wrap>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      commentType: 2
    }
  },
  components: {
    'comment-wrap': comment
  }
}
</script>

<style lang="scss" scoped>
.goods-comment {
  padding: 4px;
}
</style>
