import qs from "qs";
import router from "@/router";
import store from "@/store";
import wechatAuth from "@/utils/wechatAuth";

wechatAuth.setAppId(process.env.VUE_APP_WECHAT_APPID);
const whiteList = ["/404", "/medService", "/my", "/hospital-info"];

router.beforeEach(async (to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    return next();
  }
  const { loginStatus } = store.getters;

  switch (Number(loginStatus)) {
    case 0:
      // 获取跳转地址
      wechatAuth.redirect_uri = processUrl();
      await store.dispatch("user/setLoginStatus", 1);
      window.location.href = wechatAuth.authUrl;
      break;
    case 1:
      try {
        wechatAuth.returnFromWechat(window.location.href);
        const code = wechatAuth.code;
        console.log(code);
        // 通过code换取token
        // await store.dispatch('user/loginWechatAuth', code)
        await store.dispatch("user/setLoginStatus", 2);
        // hash
        if (process.env.NODE_ENV !== "development" && router.mode === "hash") {
          window.location.href =
            window.location.origin + window.location.pathname + window.location.hash;
        } else {
          next();
        }
      } catch (err) {
        await store.dispatch("user/setLoginStatus", 0);
        next("/404");
      }
      break;
    case 2:
      next();
      break;
    default:
      break;
  }
});

// 处理url链接
function processUrl() {
  // 本地环境换通过auth.html拿code
  if (process.env.NODE_ENV === "development") {
    // 中间授权页地址
    return `${process.env.VUE_APP_WECHAT_AUTH_URL}?backUrl=${window.location.href}`;
  }
  const url = window.location.href;
  // 解决多次登录url添加重复的code与state问题
  const urlParams = qs.parse(url.split("?")[1]);
  let redirectUrl = url;
  if (urlParams.code && urlParams.state) {
    delete urlParams.code;
    delete urlParams.state;
    const query = qs.stringify(urlParams);
    if (query.length) {
      redirectUrl = `${url.split("?")[0]}?${query}`;
    } else {
      redirectUrl = `${url.split("?")[0]}`;
    }
  }
  return redirectUrl;
}
