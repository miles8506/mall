<template>
  <div>
    <tabbar>
      <tabbar-item path="/home">
        <template v-slot:baseItem>
          <img src="@/assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:activeItem>
          <img src="@/assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:itemName>
          <span>首頁</span>
        </template>
      </tabbar-item>
      <tabbar-item path="/category">
        <template v-slot:baseItem>
          <img src="@/assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:activeItem>
          <img src="@/assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:itemName>
          <span>種類</span>
        </template>
      </tabbar-item>
      <tabbar-item path="/shopcart">
        <template v-slot:baseItem>
          <img src="@/assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:activeItem>
          <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:itemName>
          <span>購物車</span>
        </template>
      </tabbar-item>
      <tabbar-item path="/profile">
        <template v-slot:baseItem>
          <img src="@/assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:activeItem>
          <img src="@/assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:itemName>
          <span>我的</span>
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>
<style scoped>
</style>