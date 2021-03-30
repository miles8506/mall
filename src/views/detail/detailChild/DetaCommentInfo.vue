<template>
  <div class="deta-comment-info" v-if="comment.cRate !== 0">
    <div class="comment-hd">
      <span class="title">用戶評價</span>
      <span class="more" v-if="comment.cRate > 1">更多</span>
    </div>
    <div class="comment-bd" v-if="comment.list">
      <div class="user">
        <img :src="comment.list[0].user.avatar" alt="" class="user-img" />
        <span class="user-name">{{ comment.list[0].user.uname }}</span>
      </div>
      <div class="comment">{{ comment.list[0].content }}</div>
      <div class="comment-info">
        <span class="date">{{ format }}</span>
        <span class="goods-info">{{ comment.list[0].style }}</span>
      </div>
      <img
        :src="Imgsrc"
        alt=""
        class="goods-img"
        v-for="(Imgsrc, index) in comment.list[0].images"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import { formatDate } from "components/common/date/utils.js";
export default {
  name: "DetaCommentInfo",
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    format() {
      let date = new Date(this.comment.list[0].created * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>
<style scoped>
.deta-comment-info {
  padding: 0 10px;
}

.deta-comment-info .comment-hd {
  height: 60px;
  margin-bottom: 10px;
  line-height: 60px;
  border-top: 3px solid #e7e7e9;
  border-bottom: 1px solid #e7e7e9;
}

.deta-comment-info .title {
  float: left;
}

.deta-comment-info .more {
  float: right;
}

.comment-bd .user {
  margin-bottom: 10px;
}

.comment-bd .user .user-img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  vertical-align: middle;
  border-radius: 25px;
}

.comment-bd .comment {
  font-size: 14px;
  text-align: justify;
}

.comment-bd .comment-info {
  margin: 15px 0;
  font-size: 14px;
  color: gray;
}

.comment-bd .goods-img {
  width: 75px;
  height: 75px;
}
</style>