/*
 * @Author       : 张向荣
 * @Date         : 2023-09-06
 * @LastEditTime : 2023-09-06
 *
 */

const plugins = [
    "import",
    {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
    },
    "vant",
];

module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [plugins],
};
