<template>
  <div class="goods-list-wrap">
    <div class="goods-list" v-for="(item, index) in goodlist" :key="index">
      <goods-list-items :goodlistitem="goodlist[index]" />
    </div>
  </div>
</template>
<script>
import GoodsListItems from "components/content/goods/GoodsListItems";
export default {
  name: "GoodsList",
  props: {
    goodlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItems,
  },
};
</script>
<style scoped>
.goods-list-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 2px;
}
.goods-list {
  flex: 48%;
  padding: 4px;
  font-size: 14px;
  text-align: center;
}
</style>