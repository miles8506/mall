<template>
  <div class="goods-list-items" @click="routerDetail">
    <a href="javascript:;">
      <img :src="option" alt="" @load="imgload" />
      <p class="title">{{ goodlistitem.title }}</p>
      <span class="price">{{ goodlistitem.price }}</span
      ><span class="cfav">{{ goodlistitem.cfav }}</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "GoodsListItems",
  props: {
    goodlistitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    routerDetail() {
      if (this.goodlistitem.show && this.goodlistitem.show.img) {
        this.$router.push("/detail/" + this.goodlistitem.iid);
      }
    },
    imgload() {
      this.$bus.$emit("detailImgY");
    },
  },
  computed: {
    option() {
      return (
        (this.goodlistitem.show && this.goodlistitem.show.img) ||
        this.goodlistitem.image
      );
    },
  },
};
</script>
<style scoped>
.goods-list-items .title {
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: center;
  margin-top: 5px;
}
.goods-list-items .price {
  padding-right: 5px;
  color: var(--color-high-text);
}

.goods-list-items .cfav {
  position: relative;
  padding-left: 20px;
}

.goods-list-items .cfav::before {
  position: absolute;
  top: -3px;
  left: 0;
  content: "";
  width: 20px;
  height: 20px;
  background: url(../../../assets/img/common/collect.svg) no-repeat center
    center;
  background-size: 15px 15px;
}
</style>