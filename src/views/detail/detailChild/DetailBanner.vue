<template>
  <swiper class="detail-banner">
    <swiper-item v-for="item in topimage" :key="item">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "DetailBanner",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topimage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.detail-banner {
  height: 300px;
  overflow: hidden;
}
</style>