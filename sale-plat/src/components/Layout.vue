<template>
  <div>
    <div class="app-header">
      <div class="app-inner">
        <router-link to="/">
          <img src="../assets/img/logo.png" alt="logo">
        </router-link>
        <ul>
          <li>{{username}}</li>
          <li class="nav-tag" v-if="username!==''"> |</li>
          <li @click="showDialog('isShowLogDialog')" v-if="username===''">登录</li>
          <li class="nav-tag" v-if="username===''"> |</li>
          <li @click="quitClick" v-if="username!==''">退出</li>
          <li @click="showDialog('isShowRegDialog')" v-if="username===''">注册</li>
          <li class="nav-tag">|</li>
          <li @click="showDialog('isShowAboutDialog')">关于</li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      2016-2017 LISHMAN
    </div>
    <my-dialog :isShow="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

    <my-dialog :isShow="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog :isShow="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>
        本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
    </my-dialog>
  </div>
</template>

<script>
  import MyDialog from './login/MyDialog.vue'
  import LogForm from './login/widget/LogForm.vue'
  import RegForm from './login/widget/RegForm.vue'

  export default {
    components: {
      MyDialog,
      LogForm,
      RegForm,
    },
    data() {
      return {
        isShowLogDialog: false,
        isShowRegDialog: false,
        isShowAboutDialog: false,
        username: ''
      }
    },
    methods: {
      logClick() {
        this.isShowLogDialog = true;
      },
      regClick() {
        this.isShowRegDialog = true;
      },
      aboutClick() {
        this.isShowAboutDialog = true;
      },

      showDialog(param) {
        this[param] = true;
      },
      closeDialog(param) {
        this[param] = false
      },
      quitClick() {
        this.username = ''
      },
      onSuccessLog(data) {
        this.username = data.username;
        this.closeDialog('isShowLogDialog')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../assets/css/app.less";

  body {
    background: #f0f2f5;
    font-size: @font-normal;
    color: #444;
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  .app-header {
    width: 100%;
    height: 90px;
    background-color: @bgc;
    .app-inner {
      margin: 0 auto;
      width: @width;
      img {
        width: 50px;
        float: left;
        margin-top: 20px;
      }
      ul {
        float: right;
        margin-top: 35px;
        li {
          list-style: none;
          float: left;
          cursor: pointer;
          font-size: @font-title;
          &:hover {
            color: @hover;
          }
        }
        .nav-tag {
          padding: 0 10px;
          &:hover {
            color: #444;
          }

        }
      }
    }
  }

  .app-footer {
    width: 100%;
    height: 40px;
    background-color: @bgc;
    text-align: center;
    line-height: 40px;
    padding: 5px;
  }

</style>
