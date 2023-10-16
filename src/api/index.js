/*
 * @Author       : zxr
 * @Date         : 2023-10-16
 * @LastEditTime : 2023-10-16
 *
 */
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/api/user/login",
    method: "post",
    data,
  });
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: "/api/getUserName",
    method: "get",
    params,
});
}
