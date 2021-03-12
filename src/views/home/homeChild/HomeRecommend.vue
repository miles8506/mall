<template>
  <div class="recommend-wrap">
    <div
      v-for="(item, index) in childRecommend"
      :key="index"
      class="recommend-bar"
    >
      <a :href="item.link" class="recommend-item"
        ><img :src="item.image" alt="" />{{ item.title }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    childRecommend: {
      type: Array,
      defualt() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
#Home .recommend-wrap {
  display: flex;
  width: 100%;
  padding: 15px 0 15px;
  border-bottom: 8px solid #eee;
}
#Home .recommend-bar {
  flex: 1;
  margin: 0 10px;
  text-align: center;
  font-size: 14px;
}
#Home .recommend-bar .recommend-item img {
  display: inline-block;
  height: 73%;
  margin-bottom: 8px;
}
</style>