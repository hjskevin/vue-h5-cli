<template>
  <div class="tab-box">
    <van-tabbar v-model="currentCheckedMenu" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" @click="handleToPage('/medService')">医疗服务</van-tabbar-item>
      <van-tabbar-item icon="search" @click="handleToPage('/hospital-info')"
        >医院介绍</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" @click="handleToPage('/my')">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "g-tabbar",
  data() {
    return {
      currentCheckedMenu: "",
      // 菜单数据
      menuData: [
        { iconName: "yiliaofuwu", name: "医疗服务", url: "/medService" },
        { iconName: "yiyuanjieshao", name: "医院介绍", url: "/infoHospital" },
        { iconName: "gerenzhongxin", name: "个人中心", url: "/pCenter" },
      ],
      activeStyle: {
        color: "#4291F7",
      },
    };
  },

  methods: {
    handleToPage(url) {
      this.$router.push(url);
    },
  },
};
</script>
