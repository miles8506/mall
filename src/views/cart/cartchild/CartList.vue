<template>
  <div class="cart_wrap">
    <div class="cart_item" v-for="(item, index) in cartList" :key="index">
      <div class="check">
        <img src="@/assets/img/cart/tick.svg" alt="" />
      </div>
      <div class="goodsImg"><img :src="'https:' + item.pic" alt="" /></div>
      <div class="goodsInfo">
        <h4 class="title">{{ item.title }}</h4>
        <p class="desc">{{ item.desc }}</p>
        <span class="price">{{ "￥" + item.price }}</span>
        <span class="count">{{
          "x" + $store.state.goodsitem[index].count
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartList",
  data() {
    return {
      cartList: [],
    };
  },
  activated() {
    this.cartList = this.$store.state.goodsitem;
  },
};
</script>
<style scoped>
.cart_item {
  padding: 10px 15px 10px 5px;
  display: flex;
  height: 150px;
  border-bottom: 1px solid #999;
}

/* check */
.check {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 55px 5px 0 0;
  background-color: var(--color-tint);
  border-radius: 50%;
}

/* img */
.goodsImg {
  flex: 30%;
  height: 100%;
}

.goodsImg img {
  width: 110px;
  height: 100%;
  border-radius: 5%;
}

/* info */
.goodsInfo {
  flex: 70%;
  padding-left: 10px;
}

.title,
.desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: 38px;
}

.price {
  float: left;
  font-size: 18px;
  color: rgb(234, 157, 14);
}

.count {
  float: right;
}
</style>