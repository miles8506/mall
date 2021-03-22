<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
//步驟一：引入BScroll內的ObservDOM包，原先第一版是直接將所有的插件放入
//步驟二：better-scroll中，導致第三方包檔案過大的情況
import ObserveDOM from "@better-scroll/observe-dom";
import Pullup from "@better-scroll/pull-up";
import ObserveImage from "@better-scroll/observe-image";
BScroll.use(ObserveDOM);
BScroll.use(Pullup);
BScroll.use(ObserveImage);

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //步驟三：使用$refs的方式去取得該標籤元素，可以避免當多個組件有同一類名的
    //問題
    this.scroll = new BScroll(this.$refs.wrapper, {
      //步驟四：better-scroll在第2版以上，最好是直接將observDOM配置上，
      //因為observeDOM可以防止當前端向後端發送請求而尚未響應時，
      //而先停止執行better-scroll
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      observeImage: true,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scrolltop", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("loadmore");
      this.scroll.finishPullUp();
      this.scroll.refresh();
    });
  },
  methods: {
    scrollto(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped>
</style>