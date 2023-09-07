/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-09-06
 *
 */
import { requireAllModule } from "@/utils/common.js";
/**
 * 注册所有插件
 */
requireAllModule({
    requireContext: require.context("./modules/", true, /\.js$/),
    exclude: [],
});
