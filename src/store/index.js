/**
 * 初始化vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  title: '前端技术聊天室',
  isLogin: false,
  currentPage: 'chat',
  userInfo: {},
  messageList: [],
  newMessage: 0
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
