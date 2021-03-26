<template>
  <div class="detail-shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt="" class="shop-img" />
      <span class="shop-name">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-info">
      <div class="info-left">
        <div class="wrap">
          <span class="left">{{ shopInfo.sells }} <span>總銷量</span></span>
          <span class="right"
            >{{ shopInfo.goodsCount }}<span>總銷量</span></span
          >
        </div>
      </div>
      <div class="line"></div>
      <div class="info-right">
        <div
          v-for="(item, index) in shopInfo.score"
          :key="index"
          class="right-wrap"
        >
          <span>{{ item.name }}</span>
          <span :class="showColor(index)" class="info-score">{{
            item.score
          }}</span>
          <span class="mark-high" v-if="item.isBetter">高</span>
          <span class="mark-low" v-else>低</span>
        </div>
      </div>
    </div>
    <a href="javascript:;" class="go-shopping">來去逛逛</a>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    clickbtn() {
      console.log(this.shopInfo);
    },
    showColor(index) {
      return this.shopInfo.score[index].isBetter ? "high" : "low";
    },
  },
};
</script>
<style scoped>
.detail-shop-info {
  padding: 0 10px 30px;
  background-color: #fff;
}

.shop-logo {
  padding-top: 20px;
  border-top: 5px solid #e7e7e9;
}

.shop-logo .shop-img {
  width: 75px;
  height: 75px;
  vertical-align: middle;
}
.shop-name {
  margin-left: 10px;
}

.shop-info {
  position: relative;
  display: flex;
  line-height: 75px;
}
.info-left,
.info-right {
  display: flex;
  flex: 1;
  height: 100px;
  text-align: center;
}
.info-left .wrap {
  display: flex;
  width: 100%;
  height: 100px;
}
.wrap .left {
  flex: 60%;
}
.wrap .right {
  flex: 40%;
}
.wrap .left,
.wrap .right {
  position: relative;
  font-size: 24px;
  font-weight: 700;
}
.wrap .right span,
.wrap .left span {
  position: absolute;
  width: 100%;
  bottom: 20px;
  left: 0;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
}
.info-right {
  display: flex;
  flex-direction: column;
}
.info-right .right-wrap {
  position: relative;
  flex: 1;
  height: 33.33px;
  line-height: 33.33px;
  text-align: left;
  margin-left: 35px;
  font-size: 14px;
}
.info-right .right-wrap span:nth-child(2) {
  margin-left: 10px;
}
.mark-high,
.mark-low {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  color: #fff;
}
.mark-high {
  background: red;
}
.mark-low {
  background-color: rgb(15, 129, 15);
}

.low {
  color: #5ea732;
}
.high {
  color: #f13e3a;
}
.line {
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 50px;
  background-color: #e7e7e9;
}
.go-shopping {
  display: block;
  width: 40%;
  height: 30px;
  margin: 20px auto;
  background-color: #e3e3e6;
  text-align: center;
  line-height: 30px;
}
</style>
