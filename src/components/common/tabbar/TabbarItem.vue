<template>
  <div class="tabbar-item" @click="click_item">
    <div class="tab-bar-item" v-if="!optionImg">
      <slot name="baseItem"></slot>
    </div>
    <div class="tab-bar-item" v-else><slot name="activeItem"></slot></div>
    <div class="tab-bar-item" :style="activeColor">
      <slot name="itemName"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  methods: {
    click_item() {
      this.$router.replace(this.path);
    },
  },
  props: {
    path: String,
  },
  computed: {
    optionImg() {
      return this.$route.path.includes(this.path);
    },
    activeColor() {
      return this.optionImg ? { color: "red" } : {};
    },
  },
};
</script>
<style scoped>
#tab-bar .tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>