<template>
  <div class="cartTabbar">
    <div class="allcheck">
      <div
        class="checkbtn"
        :class="{ current: !allcheck }"
        @click="getCheckAll"
      >
        <img src="@/assets/img/cart/tick.svg" alt="" v-if="allcheck" />
      </div>
      <span>全選</span>
    </div>
    <div class="totlePrice">合計: {{ total }}</div>
    <div class="calculate" @click="goCount">去結帳({{ goodsCount }})</div>
  </div>
</template>
<script>
export default {
  name: "CartTabbar",
  props: {
    cartLength: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    // 總價錢
    total() {
      const goodslist = this.$store.state.goodsitem;
      let count = 0;
      const result = goodslist.filter((item) => {
        return item.status === true;
      });
      result.forEach((item) => {
        count += parseFloat(item.price);
      });
      return "￥" + count;
    },

    // 已被勾選的商品總數(去結帳)
    goodsCount() {
      const goodslist = this.$store.state.goodsitem;
      const result = goodslist.filter((item) => {
        return item.status === true;
      });
      return result.length;
    },
    // 全選判斷
    allcheck() {
      if (this.cartLength === 0) return false;
      const data = this.$store.state.goodsitem;
      let status = data.some((item) => item.status === false);
      return !status;
    },
  },
  methods: {
    getCheckAll() {
      this.allcheck === true
        ? this.$store.commit("setStatusFalse")
        : this.$store.commit("setStatusTrue");
    },
    goCount() {
      if (this.total === "￥0") {
        this.$toast.show("請至少選擇一項商品前往結帳");
      }
    },
  },
};
</script>
<style scoped>
.cartTabbar {
  display: flex;
}

/* allcheck */
.allcheck {
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  padding-left: 10px;
}
.checkbtn {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
}

.allcheck img {
  width: 20px;
  height: 20px;
  background-color: var(--color-tint);
  border-radius: 50%;
}

/* totlePrice */
.totlePrice {
  flex: 1;
  padding-left: 30px;
  line-height: 40px;
}

/* calculate */
.calculate {
  width: 100px;
  line-height: 40px;
  text-align: center;
  background-color: var(--color-tint);
  color: #fff;
}

/* 全選框border */
.current {
  border: 1px solid #999;
}
</style>