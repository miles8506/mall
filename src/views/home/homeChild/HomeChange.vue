<template>
  <div class="home-change-wrap">
    <div class="home-change" v-for="(item, index) in changeItem" :key="index">
      <span
        class="home-change-item"
        :class="{ active: index === currentIndex }"
        @click="GetChangeItem(index)"
      >
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