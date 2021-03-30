<template>
  <div id="Detail">
    <scroll class="detail-scroll" :pullUpLoad="pullUpLoad">
      <detail-bar :detailbar="detailBar" />
      <detail-banner :topimage="topimage"></detail-banner>
      <detail-info :goodInfo="goodInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info />
      <detail-params :params="params" />
      <deta-comment-info :comment="comment" />
      <goods-list :goodlist="recommend" />
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
import DetaCommentInfo from "./detailChild/DetaCommentInfo";
import GoodsList from "components/content/goods/GoodsList";

import Scroll from "components/common/scroll/Scroll";
//network
import {
  DetailData,
  goodInfo,
  shopInfo,
  params,
  Recommend,
} from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      detailBar: ["商品", "參數", "評論", "推薦"],
      topimage: [],
      goodInfo: {},
      shopInfo: {},
      params: {},
      comment: {},
      recommend: [],
      pullUpLoad: true,
    };
  },
  components: {
    DetailBar,
    DetailBanner,
    DetailInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetaCommentInfo,
    GoodsList,
    Scroll,
  },
  created() {
    this.iid = this.$route.params.iid;
    DetailData(this.iid).then((res) => {
      const data = res.data.result;
      this.topimage = data.itemInfo.topImages;
      this.goodInfo = new goodInfo(data);
      this.shopInfo = new shopInfo(data);
      this.$store.commit("goodsImgInfo", data.detailInfo);
      this.params = new params(data);
      if (data.rate.cRate !== 0) {
        this.comment = data.rate;
      }
    });
    Recommend().then((res) => {
      this.recommend = res.data.data.list;
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