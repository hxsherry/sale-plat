<template>
  <div class="bank-component">
    <ul>
      <li v-for="(item,index) in banks"
          @click="chooseSelection(index)"
          :class="[item.name,{active:index===nowIndex}]"
          :title="item.label"
      >
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    props: {},
    data() {
      return {
        banks: [],
        nowIndex: 0,

      }
    },
    created() {
      this.$http.get('/static/json/bank.json').then((res) => {
          this.banks = res.data;
        },
        (err) => {
          console.log(err);
        })
    }
    ,
    methods: {
      chooseSelection(index) {
        this.nowIndex = index;
        this.$emit('on-change', this.banks[index])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../assets/css/variable";

  .bank-component {
    display: inline-block;
    position: relative;
    li {
      display: inline-block;
      width: 117px;
      height: 32px;
      margin: 5px;
      border: 1px solid @border;
      cursor: pointer;
      background: url("../../../assets/img/banks/banks.png") no-repeat;
    }
    .active {
      border: 1px solid @titleColor;
    }
    .zhaoshang {
      background-position: -2160px 0;
    }
    .jianshe {
      background-position: -720px 0;
    }
    .pufa {
      background-position: -1800px 0;
    }
    .jiaotong {
      background-position: -3120px 0;
    }
    .minsheng {
      background-position: -2760px 0;
    }
    .pingan {
      background-position: -2400px 0;
    }
    .beijing {
      background-position: -960px 0;
    }
    .xingye {
      background-position: 0 0;
    }
    .shanghai {
      background-position: -1560px 0;
    }
    .guangfa {
      background-position: -840px 0;
    }
    .gongshang {
      background-position: -2640px 0;
    }
    .nongye {
      background-position: -1680px 0;
    }
    .guangda {
      background-position: -2280px 0;
    }
    .zhongguo {
      background-position: -2520px 0;
    }
    .zhongxin {
      background-position: -480px 0;
    }
    .chuxu {
      background-position: -120px 0;
    }
    .bnongshang {
      background-position: -1440px 0;
    }
    .huaxia {
      background-position: -2040px 0;
    }
    .snongshang {
      background-position: -2880px 0;
    }
    .baifubao {
      background-position: -1320px 0;
    }
  }

</style>
