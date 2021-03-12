<template>
  <div id="Home">
    <nav-bar class="home-nav-bar">
      <template v-slot:center>購物街</template>
    </nav-bar>
    <home-swiper :childBanner="banner" />
    <home-recommend :childRecommend="recommend" />
    <home-feature />
    <home-change :changeItem="['流行', '新款', '精選']" class="homeChange" />
    <ul>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>
<script>
// common-commponents
import navBar from "components/common/navbar/navBar";

// Home-commponents
import HomeSwiper from "./homeChild/HomeSwiper";
import HomeRecommend from "views/home/homeChild/HomeRecommend";
import HomeFeature from "views/home/homeChild/HomeFeature";
import HomeChange from "views/home/homeChild/HomeChange";

// axios-network
import { getHomeData, getGoodsData } from "../../network/home";

export default {
  name: "Home",
  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
    };
  },
  components: {
    navBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    HomeChange,
  },
  created() {
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  methods: {
    // homeBanner、homeFeature
    getHome() {
      getHomeData().then((res) => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    //homeGoods
    getGoods(type) {
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.data.list);
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
#Home {
  padding-top: 44px;
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.homeChange {
  position: sticky;
  top: 44px;
}
</style>