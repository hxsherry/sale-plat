<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据统计</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :selections="buyTypes"
                     v-if="buyTypes.length>0"></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          适用地区：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="districts" v-if="districts.length>0"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          半年
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          500 元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left"></div>
        <div class="sales-board-line-right">
          <div class="button">
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <table cellpadding="10" cellspacing="5">
        <colgroup>
          <col width="110">
          <col width="110">
          <col width="110">
          <col width="110">
          <col width="110">
          <col width="110">
          <col width="110">
        </colgroup>
        <tbody>
        <tr>
          <td>
            安全安保
          </td>
          <td>
            办公文教
          </td>
          <td>
            彩票
          </td>
          <td>
            车辆物流
          </td>
          <td>
            成人用品
          </td>
          <td>
            出版传媒
          </td>
          <td>
            电脑硬件
          </td>
        </tr>
        <tr>
          <td>
            安全安保
          </td>
          <td>
            办公文教
          </td>
          <td>
            彩票
          </td>
          <td>
            车辆物流
          </td>
          <td>
            成人用品
          </td>
          <td>
            出版传媒
          </td>
          <td>
            电脑硬件
          </td>
        </tr>
        <tr>
          <td>
            安全安保
          </td>
          <td>
            办公文教
          </td>
          <td>
            彩票
          </td>
          <td>
            车辆物流
          </td>
          <td>
            成人用品
          </td>
          <td>
            出版传媒
          </td>
          <td>
            电脑硬件
          </td>
        </tr>
        <tr>
          <td>
            安全安保
          </td>
          <td>
            办公文教
          </td>
          <td>
            彩票
          </td>
          <td>
            车辆物流
          </td>
          <td>
            成人用品
          </td>
          <td>
            出版传媒
          </td>
          <td>
            电脑硬件
          </td>
        </tr>
        <tr>
          <td>
            安全安保
          </td>
          <td>
            办公文教
          </td>
          <td>
            彩票
          </td>
          <td>
            车辆物流
          </td>
          <td>
            成人用品
          </td>
          <td>
            出版传媒
          </td>
          <td>
            电脑硬件
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import VSelection from './base/Selection.vue'
  import VChooser from './base/Chooser.vue'


  export default {
    components: {
      VSelection,
      VChooser
    },
    props: {},
    data() {
      return {
        districts: [],
        buyTypes: []
      }
    },
    created() {
      this.$http.get('/static/json/count.json').then((res) => {
        this.districts = res.data.districts;
        this.buyTypes = res.data.buyTypes;
      }, (error) => {
        console.log(error)
      })
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../assets/css/variable";


</style>
