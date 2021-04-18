<template>
  <div class="cartTabbar">
    <div class="allcheck">
      <div class="checkbtn">
        <img src="@/assets/img/cart/tick.svg" alt="" />
      </div>
      <span>全選</span>
    </div>
    <div class="totlePrice">合計: {{ total }}</div>
    <div class="calculate">去結帳({{ goodsCount }})</div>
  </div>
</template>
<script>
export default {
  name: "CartTabbar",
  computed: {
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
    goodsCount() {
      const goodslist = this.$store.state.goodsitem;
      const result = goodslist.filter((item) => {
        return item.status === true;
      });
      return result.length;
    },
  },
};
</script>
<style scoped>
.cartTabbar {
  display: flex;
  padding: 0 10 0 0px;
}

/* allcheck */
.allcheck {
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
}
.checkbtn {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border: 1px solid #999;
  border-radius: 50%;
}

.allcheck img {
  width: 20px;
  height: 20px;
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
</style>