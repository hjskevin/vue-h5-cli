/*
 * @Author       : zxr
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-10-16
 *
 */
/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-10-16
 *
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 引入全局样式
import "@/assets/css/index.scss";

// import "@/plugins";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import "amfe-flexible";

import "@/permission";
import "./filter";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount("#app");
