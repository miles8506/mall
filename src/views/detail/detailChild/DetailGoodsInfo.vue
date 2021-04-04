<template>
  <div class="detail-goods-info">
    <div class="wrap">
      <hr class="left-line" />
      <div class="desc">{{ $store.state.goodsImg.desc }}</div>
      <hr class="right-line" />
      <div class="image-key" v-if="$store.state.goodsImg.detailImage">
        {{ $store.state.goodsImg.detailImage[0].key }}
      </div>
    </div>
    <div v-if="$store.state.goodsImg.detailImage">
      <img
        :src="item"
        alt=""
        v-for="item in $store.state.goodsImg.detailImage[0].list"
        :key="item"
        @load="imgload"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  methods: {
    imgload() {
      this.$emit("imgcomplete");
    },
  },
};
</script>
<style scoped>
/* left&right-line desc */
.detail-goods-info {
  background-color: #fff;
}
.wrap {
  padding: 30px 10px;
  border-top: 5px solid #e7e7e9;
}

.wrap .desc {
  padding: 15px 0;
}

.left-line {
  float: left;
}

.right-line {
  float: right;
}

.left-line,
.right-line {
  position: relative;
  width: 30%;
}

.left-line::before,
.right-line::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: black;
}

.left-line::before {
  top: -8px;
  left: -1px;
}

.right-line::after {
  top: -8px;
  right: -1px;
}

/* image-key */
.image-key {
  margin-top: 15px;
}
</style>