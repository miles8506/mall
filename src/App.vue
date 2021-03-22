<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view /></keep-alive>
    <main-tabbar />
  </div>
</template>
<script>
import MainTabbar from "components/common/tabbar/MainTabbar";
export default {
  components: {
    MainTabbar,
  },
};
</script>
<style>
@import "assets/css/base.css";
.tabbar-item {
  flex: 1;
}
img {
  height: 100%;
  width: 100%;
}
</style>
