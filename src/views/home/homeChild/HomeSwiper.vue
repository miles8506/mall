<template>
  <swiper>
    <swiper-item v-for="(item, index) in childBanner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadswiper" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperflag: true,
    };
  },
  props: {
    childBanner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    loadswiper() {
      if (this.swiperflag) {
        this.$emit("loadswiper");
        this.swiperflag = false;
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
</style>