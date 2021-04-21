<template>
  <div class="cart_wrap">
    <div class="cart_item" v-for="(item, index) in cartList" :key="index">
      <div
        class="check"
        :class="{ current: !$store.state.goodsitem[index].status }"
        @click="showImg(index)"
      >
        <img
          src="@/assets/img/cart/tick.svg"
          v-if="$store.state.goodsitem[index].status"
        />
      </div>
      <div class="goodsImg"><img v-lazy="'https:' + item.pic" alt="" /></div>
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
      cartList: null,
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  activated() {
    this.cartList = this.list;
  },
  methods: {
    showImg(index) {
      const itemStatus = !this.$store.state.goodsitem[index].status;
      this.$store.commit("setStatus", { itemStatus, index });
    },
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
  border-radius: 50%;
}

.check img {
  background-color: var(--color-tint);
  border-radius: 50%;
}

.current {
  border: 1px solid #999;
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