<style scoped>
    .bg {
      height: 100%;
      overflow: auto;
    }
    p {
      margin: 16px;
    }
    
    .other {
      text-align: left;
      margin-bottom: 10px;
    }
    
    .me {
      text-align: right;
      margin-bottom: 10px;
    }
    
    .content {
      position: relative;
      color: #000;
      border-radius: 5px;
      padding: 10px;
      display: inline-block;
      max-width: 150px;
      word-break: break-all;
      font-size: 12px;
    }
    
    .other .content {
      margin-left: 11px;
      background-color: #FFF;
    }
    
    .me .content {
      margin-right: 11px;
      background-color: #26a2ff;
      color: #FFF;
      text-align: left;
    }
    
    .name {
      font-size: 12px;
      color: #777;
      padding-bottom: 3px;
    }
    .other .name {
      padding-left: 3px;
    }
    .me .name {
      padding-right: 3px;
    }
    .arrow {
      position: absolute;
      top: 2px;
      /* 圆角的位置需要细心调试哦 */
      width: 0;
      height: 0;
      font-size: 0;
      border: solid 6px;
    }
    
    .me .arrow {
      right: -11px;
      border-color: transparent transparent transparent #26a2ff;
    }
    
    .other .arrow {
      left: -11px;
      border-color: transparent #FFF transparent transparent;
    }
    #contentList {
      margin-bottom: 150px;
    }
    #contentList p {
      text-align: center;
    }
    
    #contentList p span {
      background-color: #ddd;
      border-radius: 5px;
      padding: 2px 5px;
      font-size: 12px;
      display: inline-block;
      color: #444;
    }
    .input {
      position: fixed;
      bottom: 51px;
      width: 100%;
    }
</style>
<template>
  <div class="bg" id="bg" ref="bg">
    <div id="contentList" ref="contentList">
      <template v-for="(item, key) in messageList">
        <template v-if="item.type === 'message'">
          <div :class="item.userId == userInfo.id ? 'me':'other'">
            <div class="name">{{ item.nickname }}</div>
            <div class="content">
              <div class="arrow"></div>{{ item.content }}
            </div>
          </div>
        </template>
        <template v-else>
          <p><span>{{ item.nickname }}{{ item.type == 'join' ? '加入了聊天室':'离开了聊天室'}}</span></p>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  mounted () {
    this.UPDATE_TITLE('前端技术聊天室')
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'messageList'
    ])
  },
  methods: {
    ...mapMutations([
      'UPDATE_TITLE'
    ])
  },
  watch: {
    messageList (val) {
      this.$nextTick(() => {
        console.log(this.$el.clientHeight)
        this.$el.scrollTop = this.$refs.contentList.clientHeight
      })
    }
  }
}
</script>
