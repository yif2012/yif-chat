const sockets = {
  connect: function () {
    console.log('socket connected')
  },
  stockchallenge: function (val) {
    if (this.$store.state.isLogin) {
      this.$store.state.messageList.push(val)
      if (this.$store.state.currentPage !== 'chat') this.$store.state.newMessage++
    }
  },
  join: function (val) {
    this.$store.state.messageList.push(val)
  },
  logout: function (val) {
    this.$store.state.messageList.push(val)
  }
}

export default sockets
