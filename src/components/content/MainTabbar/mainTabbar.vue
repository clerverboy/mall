<!--  -->
<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbarItem path="/home">
        <template v-slot:item-icon>
          <img class="item-img" src="@/assets/img/tabbar/首页.png" alt />
        </template>

        <template v-slot:item-icon-on>
          <img class="item-img" src="@/assets/img/tabbar/首页-on.png" alt />
        </template>

        <template v-slot:item-text>
          <p>首页</p>
        </template>
      </tabbarItem>

      <tabbarItem path="/classify" activeColor="deeppink">
        <template v-slot:item-icon>
          <img class="item-img" src="@/assets/img/tabbar/分类.png" alt />
        </template>
        <template v-slot:item-icon-on>
          <img class="item-img" src="@/assets/img/tabbar/分类-on.png" alt />
        </template>
        <template v-slot:item-text>
          <p>分类</p>
        </template>
      </tabbarItem>

      <tabbarItem path="/shopcar">
        <template v-slot:item-icon>
          <img class="item-img" src="@/assets/img/tabbar/购物车满.png" alt />
        </template>
        <template v-slot:item-icon-on>
          <img class="item-img" src="@/assets/img/tabbar/购物车满-on.png" alt />
        </template>
        <template v-slot:item-text>
          <p>购物车</p>
        </template>
      </tabbarItem>

      <tabbarItem path="/profile">
        <template v-slot:item-icon>
          <img class="item-img" src="@/assets/img/tabbar/我的.png" alt />
        </template>
        <template v-slot:item-icon-on>
          <img class="item-img" src="@/assets/img/tabbar/我的-on.png" alt />
        </template>
        <template v-slot:item-text>
          <p>我的</p>
        </template>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar";
import tabbarItem from "components/common/tabbar/tabbarItem";

export default {
  data() {
    return {};
  },
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>

<style scoped>
.item-img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
