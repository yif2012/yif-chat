<style scoped>
  .login {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex {
    height: 50vh;
  }
  .submit {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .submit button {
    width: 90%;
  }
  .tip {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .tip .t {
    color: #1685FE;
  }
  .tip .t2 {
    color: #999;
    margin: 0 15px;
  }
</style>

<template>
  <div class="login">
    <div class="flex">
      <mt-field label="用户名" v-model="username" placeholder="请输入用户名"></mt-field>
      <mt-field label="密码" v-model="password" placeholder="请输入密码" type="password"></mt-field>
      <div class="submit">
        <mt-button type="primary" @click="login">立即登录</mt-button>
      </div>
      <div class="tip">
        <router-link to="/register"><span class="t">注册账号</span></router-link>
        <span class="t2">|</span>
        <span class="t">忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    created () {
    },
    computed: mapGetters([
      'isLogin'
    ]),
    watch: {
      isLogin (isLogin) {
        if (isLogin) {
          this.$router.push({name: 'chat'})
        }
      }
    },
    methods: {
      ...mapMutations([
        'LOGIN_SUCCESS'
      ]),
      login () {
        const { username, password } = this
        this.$store.dispatch('_POST', {
          url: '/login',
          data: {
            username,
            password
          }
        }).then((res) => {
          Toast({
            message: '登录成功',
            position: 'bottom',
            duration: 2000
          })
          this.LOGIN_SUCCESS(res.var)
          localStorage.setItem('userInfo', JSON.stringify(res.var))
        }).catch((e) => {
          console.log(e)
          Toast({
            message: e.status,
            position: 'bottom',
            duration: 2000
          })
        })
      }
    }
  }
</script>
