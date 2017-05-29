/**
 * 计算属性 -- 获取数据
 */

export default {
  title: state => state.title,
  isLogin: state => state.isLogin,
  currentPage: state => state.currentPage,
  userInfo: state => state.userInfo,
  messageList: state => state.messageList,
  newMessage: state => state.newMessage
}
