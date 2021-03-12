<template>
  <div class="home-change-wrap">
    <div class="home-change" v-for="(item, index) in changeItem" :key="index">
      <span
        class="home-change-item"
        :class="{ active: index === currentIndex }"
        @click="GetChangeItem(index)"
      >
        <!-- 動態綁定class，並使用對象去判斷active為要改變的顏色而以對象形式去判斷index與data中
      的currentIndex是否相等，倘若相等就為true則該item就會獲取active類名
      補充 index 是v-for中獲得的 而currentIndex默認為0就是代表畫面刷新時item的地一個會變色
      然而當點擊後就可以去在點擊事件裡面修改currentIndex，其數據就是從函數調用時傳入index即可 -->
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeChange",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    changeItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    GetChangeItem(index) {
      //前面調用時獲取的index
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
#Home .home-change-wrap {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  font-size: 15px;
}
#Home .home-change-wrap .home-change {
  flex: 1;
  text-align: center;
}
#Home .home-change-wrap .home-change .home-change-item {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>