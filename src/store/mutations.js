/**
 * 状态提交
 */

import * as types from './mutations-type'

export default {
  // 更新聊天记录
  'UPDATE_MESSAGELIST' (state, payload) {
    state.messageList.push(payload)
  },
  // 更新用户信息
  'LOGIN_SUCCESS' (state, payload) {
    state.userInfo = payload
    state.isLogin = true
  },
  // 登出
  'LOGOUT' (state) {
    state.isLogin = false
  },
  // 更改顶部标题
  'UPDATE_TITLE' (state, payload) {
    state.title = payload
  },
  /**
   * 改变右上角按钮的方法
   * @param {Function} payload 一个方法
   */
  [types.RIGHTBTN_FUNCTION] (state, payload) {
    state.rightBtn = payload
  },
  /**
   * 重置右上角按钮方法
   */
  [types.RESET_RIGHTBTN_FUNCTION] (state) {
    state.rightBtn = () => false
  },
  /**
   * 改变是否参与的状态
   */
  'UPDATE_CURRENTPAGE' (state, payload) {
    state.currentPage = payload
  },
  'UPDATE_NEWMESSAGE' (state, payload) {
    state.newMessage = payload
  }
}
