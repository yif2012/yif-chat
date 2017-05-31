<style>
  .mainIndex {height: 100vh;overflow: hidden;}
</style>
<template>
  <div class="mainIndex">
    <top-head></top-head>
      <router-view></router-view>    
    <foot></foot>
  </div>
</template>

<script>
import topHead from '@/components/topHead'
import foot from '@/components/footer'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    topHead,
    foot
  },
  created () {
    console.log(1)
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.LOGIN_SUCCESS(userInfo)
      this.$socket.emit('join', {
        userId: userInfo.id,
        nickname: userInfo.nickname
      })
    }
  },
  mounted () {
    console.log(2)
    if (!this.isLogin) {
      this.$router.push({name: 'login'})
    }
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ])
  },
  methods: {
    ...mapMutations([
      'LOGIN_SUCCESS'
    ])
  }
}
</script>
