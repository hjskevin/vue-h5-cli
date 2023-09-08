/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-09-08
 *
 */
export const routes = [
    {
        path: "/inspectReport",
        name: "inspectReport",
        component: () => import("@/views/index"),
        meta: {
            keepAlive: false,
            showHeader: false,
            title: "检验报告明细",
            noAuth: true,
        },
    },
    {
        path: "/inspectReport",
        name: "inspectReport",
        component: () => import("@/views/index"),
        meta: {
            keepAlive: false,
            showHeader: false,
            title: "检验报告明细",
            noAuth: true,
        },
    },
];
