<template>
  <div id="Detail">
    <detail-bar
      :detailbar="detailBar"
      class="detail-bar"
      @getDetailIndex="detailBarIndex"
      ref="detailBar"
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
    <back-up v-if="scrollIcon" @click.native="clickTop" />
    <bottom-bar class="bottom-bar" @goToCart="goCart" />
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
import BottomBar from "./detailChild/DetailBottomBar";
import BackUp from "components/content/goods/BackUp";

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
      detailOffset: [],
      offsetTopIndex: 0,
      scrollIcon: false,
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
    BottomBar,
    BackUp,
    Scroll,
  },
  mounted() {
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
    this.$bus.$on("detailImgY", () => {
      this.imgcomplete();
    });
  },
  methods: {
    detailBarIndex(index) {
      this.$refs.detailScroll.scrollto(0, -this.detailOffset[index]);
    },
    imgcomplete() {
      this.detailOffset = [];
      this.detailOffset.push(this.$refs.goodsOffset.$el.offsetTop);
      this.detailOffset.push(this.$refs.paramsOffset.$el.offsetTop);
      this.detailOffset.push(this.$refs.commentOffset.$el.offsetTop);
      this.detailOffset.push(this.$refs.recommendOffset.$el.offsetTop);
      this.detailOffset.push(Number.MAX_VALUE);
    },
    scrollContent(position) {
      let positionY = -position.y;
      let length = this.detailOffset.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.offsetTopIndex !== i &&
          this.detailOffset[i] < positionY &&
          this.detailOffset[i + 1] > positionY
        ) {
          this.offsetTopIndex = i;
          this.$refs.detailBar.currentIndex = i;
        }
      }
      positionY > 1000 ? (this.scrollIcon = true) : (this.scrollIcon = false);
    },
    clickTop() {
      this.$refs.detailScroll.scrollto(0, 0);
    },
    //加入購物車
    goCart() {
      const goodlist = {};
      goodlist.iid = this.goodInfo.iid;
      goodlist.title = this.goodInfo.title;
      goodlist.desc = this.goodInfo.desc;
      goodlist.price = this.goodInfo.newprice;
      goodlist.img = this.goodInfo.sevenDayImg;
      goodlist.pic = this.topimage[0];
      this.$store.dispatch("gooditem", goodlist);
    },
  },
  destroyed() {
    this.$bus.$off("detailImgY");
  },
};
</script>

<style scoped>
#Detail {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  padding-top: 44px;
  background: #fff;
  z-index: 99;
}
.detail-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 49px;
  height: 100vh;
  overflow: hidden;
}
.detail-bar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 99999;
}
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  background-color: red;
}
</style>