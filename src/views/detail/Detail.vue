<template>
  <div id="Detail">
    <detail-bar
      :detailbar="detailBar"
      class="detail-bar"
      @getDetailIndex="detailBarIndex"
    />
    <scroll
      class="detail-scroll"
      :pullUpLoad="pullUpLoad"
      ref="detailScroll"
      :probe-type="3"
      @scrolltop="scrollContent"
    >
      <detail-banner :topimage="topimage" class="detail-banner"></detail-banner>
      <detail-info :goodInfo="goodInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info
        ref="goodsOffset"
        class="goodsOffset"
        @imgcomplete="imgcomplete"
      />
      <detail-params :params="params" ref="paramsOffset" />
      <deta-comment-info :comment="comment" ref="commentOffset" />
      <goods-list
        :goodlist="recommend"
        ref="recommendOffset"
        @imgcomplete="imgcomplete"
      />
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
      detailOffset: {
        goods: 0,
        params: 0,
        comment: 0,
        suggest: 0,
      },
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
  mounted() {
    this.$bus.$on("detailImgY", () => {
      this.imgcomplete();
    });
  },
  methods: {
    detailBarIndex(index) {
      switch (index) {
        case 0:
          this.$refs.detailScroll.scrollto(0, -this.detailOffset.goods);
          break;
        case 1:
          this.$refs.detailScroll.scrollto(0, -this.detailOffset.params);
          break;
        case 2:
          this.$refs.detailScroll.scrollto(0, -this.detailOffset.comment);
          break;
        case 3:
          this.$refs.detailScroll.scrollto(0, -this.detailOffset.suggest);
          break;
      }
    },
    imgcomplete() {
      this.detailOffset.goods = this.$refs.goodsOffset.$el.offsetTop;
      this.detailOffset.params = this.$refs.paramsOffset.$el.offsetTop;
      this.detailOffset.comment = this.$refs.commentOffset.$el.offsetTop;
      this.detailOffset.suggest = this.$refs.recommendOffset.$el.offsetTop;
    },
    scrollContent(position) {
      let positionY = position.y;
      // let length = Object.keys(this.detailOffset).length;
      // for (let i = 0; i < length; i++) {
      //   console.log(Object.keys(this.detailOffset)[i]);
      // }

      // for (let k in this.detailOffset) {
      //   console.log(k);
      // }
    },
  },
};
</script>

<style scoped>
#Detail {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 44px;
  background: #fff;
  z-index: 99;
}
.detail-scroll {
  position: relative;
  height: 100vh;
}
.detail-bar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 99999;
}
</style>