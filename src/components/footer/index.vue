<template>
  <div>
    <form v-show="isSelected === 'chat'" style="position:absolute;bottom:50px;left:0;right:0;" onsubmit="return false" @click="show">
      <mt-field label="" v-model="content" :placeholder="'输入聊天内容'" autofocus="autofocus">
        <mt-button type="primary" size="small" @click.stop="send()">发送</mt-button>
      </mt-field>
    </form>
    <mt-tabbar>
        <mt-tab-item id="tab1" :class="{'is-selected': isSelected === 'chat'}" @click.native="router('chat')">
            <i class="icon iconfont chat"><span class="circle" v-show="newMessage">{{newMessage < 99 ? newMessage : '...'}}</span>&#xe601;</i>
            聊天室
        </mt-tab-item>        
        <mt-tab-item id="tab4" :class="{'is-selected': isSelected === 'me'}" @click.native="router('me')">
            <i class="icon iconfont">&#xe6c3;</i>
            ???
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      isSelected: 'chat',
      content: ''
    }
  },
  computed: {
    ...mapGetters([
      'newMessage'
    ]),
    routeName () {
      const fullPath = this.$route.fullPath
      const name = fullPath.split('index/')[1].split('/')[0]
      return name
    }
  },
  created () {
  },
  mounted () {
    this.isSelected = this.routeName
  },
  methods: {
    ...mapMutations([
      'UPDATE_NEWMESSAGE',
      'UPDATE_CURRENTPAGE'
    ]),
    router (name) {
      this.isSelected = name
      if (this.$route.name === name) return
      if (name === 'income') {
        this.$router.push({ name: 'income', params: { type: 0 } })
      } else {
        this.$router.push({ name })
      }
      this.$router.push({name})
    },
    send () {
      this.$socket.emit('messageClient', {
        userId: this.$store.state.userInfo.id,
        nickname: this.$store.state.userInfo.nickname,
        content: this.content
      })
      this.content = ''
    },
    show () {
      console.log(document.getElementById('bg'))
    }
  },
  watch: {
    routeName (val) {
      this.isSelected = this.routeName
      this.UPDATE_CURRENTPAGE(this.routeName)
      if (this.routeName === 'chat') this.UPDATE_NEWMESSAGE(0)
    }
  }
}
</script>
<style>
    .iconfont {font-size: 20px !important;display: block;margin-bottom: 5px;}
    .is-selected {background-color: #fafafa!important;border-top: 1px solid #eaeaea;}
    .chat {position: relative;}
    .chat .circle {
      position: absolute;
      top: -5px;
      width: 16px;
      height: 16px;
      line-height: 18px;
      border-radius: 50%;
      background: red;
      margin-left: 20px;
      font-size: 12px;
      color: #FFF;
    }
</style>
