/*
 * @Description: 
 * @Version: 2.0
 * @Date: 2022-08-22 09:33:52
 * @LastEditTime: 2022-09-27 15:12:54
 * @Author: Auerbach
 * @LastEditors: Auerbach
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 8,
    requireConfigFile: false
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'html', 'prettier'],
  globals: {
    nationality: true,
    flowSurvey: true,
    bannerConfig: true,
    config: true,
    require: true,
    ping: true,
    Tkits: true,
    _: true,
    $: true,
    tinymce: true,
    PUBLIC_URL: true,
    __webpack_public_path__: true
  },
  // add your custom rules here
  rules: {
    'vue/custom-event-name-casing': [
      0,
      'kebab-case' | 'camelCase',
      {
        ignores: []
      }
    ],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef':'off',
    'no-console': 0, // 禁用 console
    'no-unused-vars': 1, // 禁止出现未使用过的变量

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // 不同系统换行符不一致
        tabWidth: 2, //一个tab代表几个空格数，默认为80
        useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
        singleQuote: true, // //字符串是否使用单引号，默认为false，使用双引号
        printWidth: 120, // 换行字符串阈值
        semi: false, // 句末加分号,默认为true
        trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
        bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
        jsxBracketSameLine: false, // jsx > 是否另起一行
        arrowParens: 'avoid', // (x) => {} 是否要有小括号
        requirePragma: false, // 是否要注释来决定是否格式化代码
        proseWrap: 'preserve' // 是否要换行
      }
    ]
  }
}
