<template>
  <div id="Detail">
    <detail-bar :detailbar="detailBar" />
    <detail-banner :topimage="topimage"></detail-banner>
    <detail-info :goodInfo="goodInfo" />
  </div>
</template>

<script>
import DetailBar from "views/detail/detailChild/DetailBar.vue";
import DetailBanner from "./detailChild/DetailBanner";
import DetailInfo from "./detailChild/DetailInfo";
//network
import { DetailData, goodInfo } from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      detailBar: ["商品", "參數", "評論", "推薦"],
      topimage: [],
      goodInfo: {},
    };
  },
  components: {
    DetailBar,
    DetailBanner,
    DetailInfo,
  },
  created() {
    this.iid = this.$route.params.iid;
    DetailData(this.iid).then((res) => {
      const data = res.data.result;
      this.topimage = data.itemInfo.topImages;
      console.log(res);
      this.goodInfo = new goodInfo(data);
    });
  },
};
</script>

<style scoped>
#Detail {
  padding-bottom: 50px;
}
</style>