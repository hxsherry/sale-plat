<template>
  <div>
    <div class="dialog-cover" v-if="isShow" @click="closeSelf"></div>
    <transition name="drop">
      <div class="dialog-content" v-if="isShow">
        <p class="dialog-close" @click="closeSelf">X</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    methods: {
      closeSelf() {
        this.$emit('on-close')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/css/variable";

  .drop-enter-active, .drop-leave-active{
    transition: all .5s ease;
  }
  .drop-enter{
    transform: translateY(-500px);
  }
  .drop-leave-to{
    transform: translateY(-500px);
  }

  .dialog-cover {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .3;
    top: 0;
    left: 0;
    z-index: 5;
  }
  .dialog-content {
    position: fixed;
    width: 50%;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
    .dialog-close {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 20px;
      height: 20px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: @hover
      }
    }

  }


</style>
