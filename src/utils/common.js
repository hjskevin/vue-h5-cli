/**
 * 自动化注册 需要模块
 * @param requireContext 语法require.context(目录,是否递归目录, 文件筛选条件)所有参数必须是直接字符串，变量无效。
 * @param exclude 只引入包括的模块
 * @param include 排除的模块 include 和 exclude不能同时共用
 * @returns {*}  Array
 */
export const requireAllModule = ({ requireContext, exclude = [], include = [] }) => {
    if (!Array.isArray(exclude)) {
        console.error("[warning] exclude字段类型应为Array");
        exclude = [];
    }
    if (!Array.isArray(include)) {
        console.error("[warning] include字段类型应为Array");
        include = [];
    }
    const isNoEmptyArray = function () {
        return !!(Array.isArray(this) && this.length);
    };
    const isEmptyArray = function () {
        return !!(Array.isArray(this) && this.length === 0);
    };
    if (isNoEmptyArray.apply(exclude) && isNoEmptyArray.apply(include)) {
        throw new Error("include 和 exclude字段不能同时共用");
    }
    const requireAll = context =>
        context.keys().reduce((pre, cur) => {
            const _key = cur.replace(/^\.\/(.*)\.\w+$/, "$1");
            if (isNoEmptyArray.apply(include)) {
                include.some(v => new RegExp(v).test(_key)) && pre.push(context(cur));
            } else if (isNoEmptyArray.apply(exclude)) {
                exclude.every(v => !new RegExp(v).test(_key)) && pre.push(context(cur));
            } else if (isEmptyArray.apply(include) && isEmptyArray.apply(exclude)) {
                pre.push(context(cur));
            }
            return pre;
        }, []);
    return requireAll(requireContext);
};

/**
 * 解析url传递的参数
 * @param name 参数名称
 * @returns {*} String
 */
export const getUrlParam = name => {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const value = window.location.search.substr(1).match(reg);
    if (value != null) {
        // 对参数值进行解码
        return decodeURIComponent(value[2]);
    }
    return null;
};

/**
 * 隐藏身份证号
 * @param id 身份证号
 * @returns {*} String
 */
export const hideIdCard = id => {
    const temp = id.substring(4, 15); // 03199901015 提取身份证的第5位(下标为4)到第14位（结束位为15）
    return id.replace(temp, "***********"); // 将身份证中中间的11位替换成***********（11个*号）
};

/**
 * 身份证中解析出生年月
 * @param id 身份证号
 * @returns {*} String
 */
export const getBirthFromIdCard = idCard => {
    let birthday = "";
    if (idCard != null && idCard !== "") {
        if (idCard.length === 15) {
            birthday = "19" + idCard.slice(6, 12);
        } else if (idCard.length === 18) {
            birthday = idCard.slice(6, 14);
        }
        birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
        // 通过正则表达式来指定输出格式为:1990-01-01
    }
    return birthday;
};

/**
 * 身份证中解析性别
 * @param id 身份证号
 * @returns {*} String
 */
export const getSexFromIdCard = idCard => {
    let sexStr = "";
    if (parseInt(idCard.slice(-2, -1)) % 2 === 1) {
        sexStr = "男";
    } else {
        sexStr = "女";
    }
    return sexStr;
};

/**
 * 动态加载css文件
 * @param {*} url
 * @param {*} isCache
 */
export function loadCSS(url, isCache = true) {
    let element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    if (isCache) {
        element.setAttribute("href", url + "?t=" + new Date().getTime());
    } else {
        element.setAttribute("href", url);
    }
    document.getElementsByTagName("head")[0].append(element);
    // document.head.appendChild(element)
}

/**
 * 动态加载js文件
 * @param {*} src
 * @param {*} callback
 *   loadScript("",function(){
 *   console.log("加载成功")
 * })
 * var that = this; 在方法里面使用that
 */
export function loadJS(jsUrl, callback, isCache = true) {
    const script = document.createElement("script");
    script.type = "text/JavaScript";
    if (isCache) {
        script.src = jsUrl + "?t=" + new Date().getTime();
    } else {
        script.src = jsUrl;
    }
    if (script.addEventListener) {
        script.addEventListener("load", callback, false);
    }
    document.getElementsByTagName("head")[0].append(script);
    // head.appendChild(script)
}

/**
 * 移除引用的JS/CSS文件
 * @param filename 文件名称
 * @param filetype 文件类型 js/css
 */
export const removeFileJSandCSS = (filename, filetype) => {
    const targetElement = filetype === "js" ? "script" : filetype === "css" ? "link" : "none";
    const targetAttr = filetype === "js" ? "src" : filetype === "css" ? "href" : "none";
    const allSuspects = document.getElementsByTagName(targetElement);
    for (let i = allSuspects.length; i >= 0; i--) {
        if (
            allSuspects[i] &&
            allSuspects[i].getAttribute(targetAttr) != null &&
            allSuspects[i].getAttribute(targetAttr).indexOf(filename) != -1
        )
            allSuspects[i].parentNode.removeChild(allSuspects[i]);
    }
};
