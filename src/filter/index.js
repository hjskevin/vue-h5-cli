import Vue from "vue";
import * as filter from "./filter";

Object.keys(filter).forEach(item => Vue.filter(item, filter[item]));

Vue.prototype.$formatDate = Vue.filter("formatDate");
Vue.prototype.$hidePhone = Vue.filter("hidePhone");
