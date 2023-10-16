/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-09-08
 *
 */
import Vue from "vue";
import Router from "vue-router";
import AppRouter from "./modules/index";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

const router = new Router({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: AppRouter,
});

console.log(router);

export default router;
