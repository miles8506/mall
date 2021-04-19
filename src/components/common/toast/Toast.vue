<template>
  <div class="toast" v-show="isshow">
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      isshow: false,
      message: "",
    };
  },
  methods: {
    show(text, timer = 1500) {
      this.isshow = true;
      this.message = text;
      setTimeout(() => {
        this.isshow = false;
        this.massage = "";
      }, timer);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 18px;
  text-align: center;
  z-index: 99999;
}
</style>