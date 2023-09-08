/*
 * @Author       : 张向荣
 * @Date         : 2023-09-08
 * @LastEditTime : 2023-09-08
 *
 */
import axios from "axios";
import { Loading } from "vant";
import { config } from "vue/types/umd";

export const request = createAxiosInstance();

function createAxiosInstance() {
    const instance = axios.create({
        baseURL: "",
        timeout: 5000,
        headers: {
            post: {
                "Content-Type": "application/json",
            },
        },
    });

    // 请求拦截器
    instance.interceptors.request.use(config => {
        loading.open();
        token && (config.headers.Authorization = token);
        cleanObject();
        return config;
    });

    // 响应拦截器
    instance.interceptors.response.use(
        response => {
            loading.close();
            const res = response.data;
            const validateStatus = /^(2|3)\d{2}$/;
            if (validateStatus.test(res.code)) {
                return res.data;
            }
            if (res.code === 401) {
                message.error(res.msg);
            } else {
                message.warning(res.msg);
            }
            return Promise.reject(res);
        },
        error => {
            if (res.code === 401) {
                message.error("token失效，请重新登录！");
                removeStorageToken();
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);
            } else {
                if (!window.navigator.onLine) {
                    message.warning("网络异常，请检查网络是否正常连接");
                } else if (error.code === "ECONNABORTED") {
                    message.warning("请求超时");
                } else {
                    message.warning("服务器异常，请联系管理员");
                }
            }
            return Promise.reject(error);
        }
    );
    return instance;
}
