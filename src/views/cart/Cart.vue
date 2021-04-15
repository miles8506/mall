<template>
  <div id="cart">
    <nav-bar>
      <template v-slot:center class="nav-bar">購物車({{ length }})</template>
    </nav-bar>
    <scroll :pullUpLoad="true" :probeType="3" class="scroll" ref="scroll">
      <cart-list />
    </scroll>
  </div>
</template>
<script>
import navBar from "components/common/navbar/navBar.vue";
import cartList from "./cartchild/CartList";
import scroll from "components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    navBar,
    cartList,
    scroll,
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
    }),
  },
  activated() {
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
</style>