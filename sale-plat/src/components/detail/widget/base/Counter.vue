<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus"> - </div>
    <div class="counter-show">
      <input id="ipt" type="text" v-model.number="number" @keyup.enter="fixNumber" @blur="fixNumber"><br/>
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>

<script>
  export default {
    props: {
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        number: this.min
      }
    },
    watch: {
      number() {
        this.$emit('on-change', this.number)
      }
    },
    methods: {
      minus() {
        if (this.number <= this.min) {
          return;
        }
        this.number--;
      },
      add() {
        if (this.number >= this.max) {
          return;
        }
        this.number++;
      },
      fixNumber() {
        let fix;
        document.getElementById('ipt').blur();
        if (typeof this.number === 'string') {
          fix = Number(this.number.replace(/\D/g, ''))
        } else {
          fix = this.number;
        }
        if (fix > this.max || fix < this.min) {
          fix = this.min
        }
        this.number = fix;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../../assets/css/variable";

  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    .counter-btn {
      border: 1px solid @border;
      float: left;
      height: 25px;
      line-height: 25px;
      width: 25px;
      text-align: center;
      cursor: pointer;
      &:hover {
        border-color: @titleColor;
        background: @titleColor;
        color: @white;
      }
    }
    .counter-show {
      float: left;
      input {
        border: none;
        border-top: 1px solid @border;
        border-bottom: 1px solid @border;
        height: 23px;
        line-height: 23px;
        width: 30px;
        outline: none;
        text-indent: 4px;
      }
    }

  }


</style>
