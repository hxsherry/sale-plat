<template>
  <div >
    <div>
      <div class="login-form ">
        <div class="login-line">
          <label>用户名：
            <input type="text"
                   placeholder="请输入用户名"
                  class="mgl"
            >
          </label>
          <span class="form-error"></span>
        </div>
        <div class="login-line">
          <label>密&nbsp;&nbsp;&nbsp;码：
            <input type="password"

                   placeholder="请输入密码"
                   class="mgl"
            >
          </label>
          <span class="form-error"></span>
        </div>
        <div class="login-line">
          <label>确认密码：
            <input type="password"
                   placeholder="请输入密码">
          </label>
          <span class="form-error"></span>
        </div>
      </div>
      <a class="button">注册</a>
      <p></p>
    </div>
  </div>
</template>

<script>
  export default {
    props:{

    },
    data() {
      return {}
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../assets/css/variable";



</style>
