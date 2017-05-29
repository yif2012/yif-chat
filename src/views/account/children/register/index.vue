<template>
  <div class="register">
    <div class="flex">
      <mt-field v-model="username" label="用户名" placeholder="请输入用户名"></mt-field>
      <mt-field v-model="nickname" label="昵称" placeholder="请输入昵称"></mt-field>
      <mt-field v-model="password" label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field v-model="confirmPassword" label="确认密码" placeholder="请再次输入密码" type="password"></mt-field>
      <p class="tip">{{this.errorMsg}}</p>
      <div class="submit">
        <mt-button @click="register" type="primary">立即注册</mt-button>
      </div>
      <div class="to-login">
        <span class="">已有账号?</span>
        <router-link to="/login"><span class="t">立即登录</span></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .register {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex {
    height: 60vh;
  }
  .submit {
      margin-top: 30px;
      display: flex;
      justify-content: center;
  }
  .submit button {
    width: 90%;
  }
  .to-login {
      margin-top: 20px;
      display: flex;
      justify-content: center;
  }
  .to-login .t {
    color: #1685FE;
    margin-left: 10px;
  }
  .tip {
    margin-top: 10px;
    color: red;
    text-align: center;
  }
</style>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        username: '',
        nickname: '',
        password: '',
        confirmPassword: '',
        errorMsg: ''
      }
    },
    methods: {
      test () {
        console.log(this.username)
        console.log(this.password)
      },
      register () {
        const { username, nickname, password, confirmPassword } = this
        if (!username) {
          this.errorMsg = '请输入用户名'
          return false
        }
        if (!nickname) {
          this.errorMsg = '请输入昵称'
          return false
        }
        if (!password) {
          this.errorMsg = '请输入密码'
          return false
        }
        if (!confirmPassword) {
          this.errorMsg = '请再次输入密码'
          return false
        }
        if (password !== confirmPassword) {
          this.errorMsg = '两次输入的密码不一致'
          return false
        }
        const url = '/register'
        const data = {username, password, nickname}
        this.$store.dispatch('_POST', {url, data}).then((res) => {
          console.log(res)
          Toast({
            message: '注册成功',
            position: 'bottom',
            duration: 2000
          })
          this.$router.push({name: 'login'})
        }).catch((e) => {
          console.log('注册失败')
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
