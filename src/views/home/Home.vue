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
    //步驟三 在這裡要注意原來會在create內將業務執行內容寫在這裡，但是一般原則上created只負責調用函數的部分
    //所以說我們要利用methods方法還去封裝create的函數，並在created中去單純調用該函數
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
    // 在封裝的時候需要傳入兩個參數(因為這是get請求，但也需要適每個get請求而定)
    getGoods(type) {
      //原先page是0，所以在調用一開始先把page++
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        //then完成後代表已經請求到數據，這時候將data中的page+1，之後在第二次調用時系統就知道是從第一頁的
        //基礎+1
        this.goods[type].page += 1;
        //並使用es6中的解構來請求到的數組數據推向data中，原先要將A數組的資料push到B數組中必須使用for循環
        //去遍歷，然而使用es6解構的方式會更簡單
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