<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view /></keep-alive>
  </div>
</template>
<script>
export default {};
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
