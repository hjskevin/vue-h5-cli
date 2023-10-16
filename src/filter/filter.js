/*
 * @Author       : zxr
 * @Date         : 2023-10-12
 * @LastEditTime : 2023-10-12
 *
 */
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

// 格式化时间
export function formatDate(time, fmt) {
  if (time === undefined || "") {
    return;
  }
  const date = new Date(time);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
}

// 隐藏手机号中间4位
export function hidePhone(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
