<template>
  <div id="cart">
    <nav-bar>
      <template v-slot:center class="nav-bar">購物車({{ length }})</template>
    </nav-bar>
    <scroll
      :pullUpLoad="true"
      :probeType="3"
      class="scroll"
      ref="scroll"
      style="padding-bottom: 140px"
    >
      <cart-list :list="cartList" />
    </scroll>
    <cart-tabbar class="tabbar" />
  </div>
</template>
<script>
import navBar from "components/common/navbar/navBar.vue";
import cartList from "./cartchild/CartList";
import cartTabbar from "./cartchild/CartTabbar";
import scroll from "components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      cartList: [],
    };
  },
  components: {
    navBar,
    cartList,
    cartTabbar,
    scroll,
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
    }),
  },
  activated() {
    // 接收vuex數據並將cartList傳送給子組件
    this.cartList = this.$store.state.goodsitem;

    this.$refs.scroll.scrollrefresh();
  },
};
</script>
<style scoped>
#cart {
  position: relative;
  top: 0;
  left: 0;
  bottom: 49px;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.scroll {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 44px;
  left: 0px;
  bottom: 49px;
  overflow: hidden;
}

.tabbar {
  position: fixed;
  left: 0;
  bottom: 50px;
  width: 100%;
  height: 40px;
  background: rgb(222, 221, 221);
}
</style>