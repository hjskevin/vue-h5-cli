/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-10-16
 *
 */
const routes = [
  {
    path: "/", // 链接路径
    name: "首页", // 路由名称
    component: () => import("@/layout/index"), // 对应的组件模板
    redirect: "/medService",
    children: [
      {
        path: "/medService",
        name: "医疗服务",
        meta: {
          noAuth: true,
        },
        component: () => import("@/views/index/index"),
      },
      {
        path: "/hospital-info",
        name: "医院介绍",
        meta: {
          noAuth: true,
        },
        component: () => import("@/views/hospital-info/index"),
      },
      {
        path: "/my",
        name: "个人中心",
        meta: {
          noAuth: false,
        },
        component: () => import("@/views/my/my"),
      },
    ],
  },

  // {
  //   path: "/",
  //   component: () => import("@/views/index"),
  //   meta: {},
  // },
  // {
  //   path: "/my",
  //   component: () => import("@/views/my/my"),
  //   meta: {},
  // },
];

export default routes;
