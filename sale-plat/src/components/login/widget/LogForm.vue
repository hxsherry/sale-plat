<template>
  <div>
    <div class="login-form ">
      <div class="login-line">
        <label>用户名：
          <input type="text"
                 v-model="usernameModel"
                 placeholder="请输入用户名">
        </label>
        <span class="form-error">{{userError.errorText}}</span>
      </div>
      <div class="login-line">
        <label>密&nbsp;&nbsp;&nbsp;码：
          <input type="password"
                 v-model="passwordModel"
                 placeholder="请输入密码">
        </label>
        <span class="form-error">{{passwordError.errorText}}</span>
      </div>
    </div>
    <div class="login-info">
      <a class="button" @click="onLogin">登录</a>
      <p>{{loginErrorText}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    props: {},
    data() {
      return {
        usernameModel: '',
        passwordModel: '',
        loginErrorText: '',
      }
    },
    computed: {
      userError() {
        let status, errorText;
        if (!/@/g.test(this.usernameModel)) {
          status = false;
          errorText = '登录名必须包含@'
        } else {
          status = true;
          errorText = '';
        }
        if (!this.errorFlag) {
          errorText = '';
          this.errorFlag = true;
        }
        return {
          status, errorText
        }
      },
      passwordError() {
        let status, errorText;
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false;
          errorText = '密码必须1-6位'
        } else {
          status = true;
          errorText = '';
        }
        if (!this.passwordFlag) {
          errorText = '';
          this.passwordFlag = true;
        }
        return {
          status, errorText
        }
      }

    },
    methods: {
      onLogin() {
        if (!this.userError.status || !this.passwordError.status) {
          this.loginErrorText = '部分选项未通过'
        } else {
          this.loginErrorText = '';
          this.$http.get('/static/json/user.json').then((res) => {
            this.$emit('has-log', res.data)
          }, (error) => {
            console.log(error)
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../assets/css/variable";
  .login-info {
    margin-left: 100px;
  }

</style>
