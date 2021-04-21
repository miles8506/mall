<template>
  <div id="tab-bar" class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabber",
};
</script>
<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0px;
  height: 49px;
  width: 100%;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  background-color: #f6f6f6;
}
</style>