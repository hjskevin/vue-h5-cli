/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-09-08
 *
 */
const routes = [
    {
        path: "/",
        component: () => import("@/views/index"),
        meta: {},
    },
    {
        path: "/my",
        component: () => import("@/views/my/my"),
        meta: {},
    },
];

export default routes;
