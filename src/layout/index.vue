<!--
 * @Author       : zxr
 * @Date         : 2023-10-13
 * @LastEditTime : 2023-10-13
 * 
-->
<template>
  <div>
    <router-view></router-view>
    <g-tabbar />
  </div>
</template>

<script>
import GTabbar from "@/components/tabbar/index";
export default {
  components: {
    GTabbar,
  },
  data() {
    return {};
  },
};
</script>
