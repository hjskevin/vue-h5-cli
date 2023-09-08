/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-09-08
 *
 */
import Vue from "vue";
import Router from "vue-router";
import AppRouter from "./modules/index";

Vue.use(Router);

const router = new Router({
    routes: AppRouter,
});

console.log(router);

export default router;
