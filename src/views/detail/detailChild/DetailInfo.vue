<template>
  <div id="detail-info" v-if="Object.keys(goodInfo).length !== 0">
    <div class="info-top">
      <p class="title">{{ goodInfo.title }}</p>
      <div class="wrap">
        <span class="price">{{ goodInfo.price }}</span>
        <span class="old-price">{{ goodInfo.oldPrice }}</span>
        <span
          :style="{ background: goodInfo.discountColor }"
          class="discount-color"
          >{{ goodInfo.discountDesc }}</span
        >
      </div>
    </div>
    <div class="info-center">
      <span class="salse">{{ goodInfo.sales }}</span>
      <span class="save">{{ goodInfo.save }}</span>
      <span class="return">{{ goodInfo.returnGoods }}</span>
    </div>
    <div class="info-bottom">
      <span>
        <img :src="goodInfo.sevenDayImg" alt="" class="good-img" />
        <i class="prompt">{{ goodInfo.sevenDayContent }}</i>
      </span>
      <span>
        <img :src="goodInfo.seventyTwoDayImg" alt="" class="good-img" />
        <i class="prompt">{{ goodInfo.seventyTwoContent }}</i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailInfo",
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    // this.goodInfo.sevenDayImg += "https://";
  },
};
</script>
<style scoped>
#detail-info {
  padding: 15px 10px 0;
  font-size: 16px;
}
/* info-top */
.info-top {
  margin-bottom: 25px;
}
.info-top .title {
  color: #333;
  text-align: justify;
  margin-bottom: 15px;
}

.wrap {
  height: 25px;
  line-height: 25px;
}

.info-top .price {
  font-size: 26px;
  color: var(--color-tint);
}

.info-top .old-price {
  margin-left: 10px;
  font-size: 14px;
  text-decoration: line-through;
}

.info-top .discount-color {
  display: inline-block;
  height: 20px;
  padding: 4px 6px;
  border-radius: 9px;
  font-size: 14px;
  margin-left: 10px;
  color: #fff;
  line-height: 12px;
  vertical-align: top;
}

/* info-center */
.info-center {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
  font-size: 14px;
}

.info-center span {
  flex: 1;
  text-align: center;
}

.info-center span:nth-child(1) {
  text-align: left;
}
.info-center span:nth-child(3) {
  text-align: right;
}

/* info-bottom */
.info-bottom {
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
  font-size: 14px;
}
.info-bottom span .good-img {
  width: 18px;
  height: 18px;
  vertical-align: bottom;
}
</style>