/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-09-06
 *
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./plugins";

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
