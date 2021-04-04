<template>
  <div id="bottom-bar">
    <div class="bottom-left">
      <div class="customer icon">
        <div class="pic"></div>
        <span class="text">客服</span>
      </div>
      <div class="store icon">
        <div class="pic"></div>
        <span class="text">店鋪</span>
      </div>
      <div class="save icon">
        <div class="pic"></div>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="join-cart icon">加入購物車</div>
      <div class="buy icon">購買</div>
    </div>
  </div>
</template>
<script>
export default {
  name: " DetailBottomBar",
};
</script>
<style scoped>
#bottom-bar {
  display: flex;
}

.bottom-left,
.bottom-right {
  display: flex;
  flex: 1;
}

.bottom-left {
  background-color: #fff;
}

.bottom-left .icon {
  flex: 1;
  text-align: center;
}

.bottom-left .icon .pic {
  width: 22px;
  height: 22px;
  margin: 5px auto 0;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat;
  background-size: 22px auto;
}

.customer .pic {
  background-position: 0 -52px !important;
}

.store .pic {
  background-position: 0 -98px !important;
}

.save .pic {
  background-position: 0 0 !important;
}

.icon .text {
  display: inline-block;
  margin-top: 3px;
  font-size: 14px;
}

.bottom-right {
  background-color: blue;
  display: flex;
}

.bottom-right .icon {
  flex: 1;
  line-height: 49px;
  text-align: center;
  font-size: 14px;
}
.bottom-right .join-cart {
  background-color: #fde934;
}

.bottom-right .buy {
  background-color: #fb76a4;
  color: #fff;
}
</style>