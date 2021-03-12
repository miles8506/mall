<template>
  <div class="nav-bar">
    <div class="nav-bar-left"><slot name="left"></slot></div>
    <div class="nav-bar-center"><slot name="center"></slot></div>
    <div class="nav-bar-right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "navBar",
};
</script>
<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  z-index: 99;
}
.nav-bar .nav-bar-left,
.nav-bar .nav-bar-right {
  width: 44px;
  height: 100%;
}
.nav-bar .nav-bar-center {
  flex: 1;
}
</style>