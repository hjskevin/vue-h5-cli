/*
 * @Author       : zxr
 * @Date         : 2023-09-19
 * @LastEditTime : 2023-10-12
 *
 */
import { SET_USER_INFO } from "../mutation-types";
const state = {
  userInfo: "",
};

const mutations = {
  [SET_USER_INFO](state, info) {
    state.userInfo = info;
  },
};

const actions = {
  setUserInfo({ commit }, info) {
    commit("SET_USER_INFO", info);
  },
};

export default {
  state,
  mutations,
  actions,
};
