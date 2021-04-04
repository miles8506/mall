<template>
  <nav-bar>
    <template v-slot:left>
      <img
        src="@/assets/img/common/back.svg"
        class="back-img"
        @click="backBtn"
      />
    </template>
    <template v-slot:center>
      <div class="detailbar-center">
        <div
          class="detail-item"
          v-for="(item, index) in detailbar"
          :key="index"
          @click="itemclick(index)"
          :href="'#' + index"
          :class="{ currentColor: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/navBar.vue";

export default {
  name: "DetailBar",
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  props: {
    detailbar: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit("getDetailIndex", index);
    },
    backBtn() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.currentColor {
  color: var(--color-tint);
}

.detailbar-center {
  display: flex;
  justify-content: center;
  padding: 0 10px;
}
.detailbar-center .detail-item {
  flex: 1;
  line-height: 44px;
  font-size: 14px;
}
.back-img {
  width: 23px;
  height: 23px;
  margin-top: 10px;
}
</style>