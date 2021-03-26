<template>
  <div id="Detail">
    <scroll class="detail-scroll">
      <detail-bar :detailbar="detailBar" />
      <detail-banner :topimage="topimage"></detail-banner>
      <detail-info :goodInfo="goodInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info :goodsImg="goodsImg" />
      <detail-params :params="params" />
    </scroll>
  </div>
</template>

<script>
import DetailBar from "views/detail/detailChild/DetailBar.vue";
import DetailBanner from "./detailChild/DetailBanner";
import DetailInfo from "./detailChild/DetailInfo";
import DetailShopInfo from "./detailChild/DetailShopInfo";
import DetailGoodsInfo from "./detailChild/DetailGoodsInfo";
import DetailParams from "./detailChild/DetailParams";

import Scroll from "components/common/scroll/Scroll";
//network
import { DetailData, goodInfo, shopInfo, params } from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      detailBar: ["商品", "參數", "評論", "推薦"],
      topimage: [],
      goodInfo: {},
      shopInfo: {},
      goodsImg: {},
      params: {},
    };
  },
  components: {
    DetailBar,
    DetailBanner,
    DetailInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    Scroll,
  },
  created() {
    this.iid = this.$route.params.iid;
    DetailData(this.iid).then((res) => {
      const data = res.data.result;
      this.topimage = data.itemInfo.topImages;
      this.goodInfo = new goodInfo(data);
      this.shopInfo = new shopInfo(data);
      this.goodsImg = data.detailInfo;
      this.params = new params(data);
    });
  },
};
</script>

<style scoped>
#Detail {
  position: relative;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
}
.detail-scroll {
  height: 100vh;
}
</style>