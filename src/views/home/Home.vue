<template>
  <div id="Home">
    <nav-bar class="home-nav-bar">
      <template v-slot:center>購物街</template>
    </nav-bar>
    <home-change
      :changeItem="['流行', '新款', '精選']"
      class="homeChange"
      @getIndex="getChangeIndex"
      ref="homechange1"
      :class="{ showChangeMask: fixed }"
      v-show="fixed"
    />
    <!-- 步驟一：import封裝好的scroll並且加入至components裡後，將scroll標籤
    插入相對應位置，並且該標籤即代表wrapper -->
    <scroll
      class="home-scroll"
      ref="scrolltop"
      :probe-type="3"
      :pullUpLoad="true"
      @scrolltop="scrolltop"
      @loadmore="loadMore"
    >
      <home-swiper :childBanner="banner" ref="aaa" @loadswiper="loadswiper" />
      <home-recommend :childRecommend="recommend" />
      <home-feature />
      <home-change
        :changeItem="['流行', '新款', '精選']"
        class="homeChange"
        @getIndex="getChangeIndex"
        ref="homechange2"
        v-show="!fixed"
      />
      <goods-list :goodlist="changeindexShow" />
    </scroll>
    <back-up @click.native="setBackUp" v-show="showBackUp" />
    <main-tabbar />
  </div>
</template>
<script>
// commponents/common-
import navBar from "components/common/navbar/navBar";
import Scroll from "components/common/scroll/Scroll";

// content-com
import GoodsList from "components/content/goods/GoodsList";
import BackUp from "components/content/goods/BackUp";
import MainTabbar from "components/common/tabbar/MainTabbar";

// commponents-Home
import HomeSwiper from "./homeChild/HomeSwiper";
import HomeRecommend from "views/home/homeChild/HomeRecommend";
import HomeFeature from "views/home/homeChild/HomeFeature";
import HomeChange from "views/home/homeChild/HomeChange";

// network-axios
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
      changeIndex: "pop",
      showBackUp: false,
      HomeChangeTop: 0,
      fixed: false,
      positionY: 0,
    };
  },
  components: {
    navBar,
    Scroll,
    GoodsList,
    BackUp,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    HomeChange,
    MainTabbar,
  },
  created() {
    this.getHome();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  methods: {
    //監聽事件
    getChangeIndex(index) {
      switch (index) {
        case 0:
          this.changeIndex = "pop";
          break;
        case 1:
          this.changeIndex = "new";
          break;
        case 2:
          this.changeIndex = "sell";
          break;
      }
      this.$refs.homechange1.currentIndex = index;
      this.$refs.homechange2.currentIndex = index;
    },
    setBackUp() {
      this.$refs.scrolltop.scrollto(0, 0);
    },
    clickdiv() {
      console.log("click");
    },
    scrolltop(position) {
      position.y < -1000 ? (this.showBackUp = true) : (this.showBackUp = false);
      position.y <= -this.HomeChangeTop
        ? (this.fixed = true)
        : (this.fixed = false);
    },
    loadMore() {
      this.getGoods(this.changeIndex);
    },
    loadswiper() {
      this.HomeChangeTop = this.$refs.homechange2.$el.offsetTop;
    },

    //network
    getHome() {
      getHomeData().then((res) => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getGoods(type) {
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.data.list);
      });
    },
  },
  computed: {
    changeindexShow() {
      return this.goods[this.changeIndex].list;
    },
  },
  activated() {
    this.$refs.scrolltop.scrollto(0, this.positionY, 100);
    this.$refs.scrolltop.scroll.refresh();
  },
  deactivated() {
    this.positionY = this.$refs.scrolltop.scroll.y;
  },
};
</script>
<style scoped>
#Home {
  height: 100vh;
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.home-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 49px;
  overflow: hidden;
  /* 步驟二：必須將content部分移到tabbar與navbar的中間，所以可以使用絕對定位的方式
  再搭配top bottom把content撐開，並且在父標籤#HOME中寫下相對定位且要有高度
  不然撐不開這個盒子，故使用vh該單位，該單位是表示可視區域的單位，若為100則
  代表螢幕上可視區域佔屏100% */
}

.showChangeMask {
  position: relative;
  z-index: 9;
}
</style>