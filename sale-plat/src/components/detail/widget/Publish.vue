<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>广告发布</h2>
      <p>
        广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter :max="100" :min="20"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          行业：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="tradeList"
                       v-if="tradeList.length>0"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <v-mul-chooser :selections="versionList"
                         v-if="versionList.length>0"
          ></v-mul-chooser>
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
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button">
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>
        广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>

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
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import VSelection from './base/Selection.vue'
  import VCounter from './base/Counter.vue'
  import VMulChooser from './base/MultiChooser.vue'

  export default {
    components: {
      VSelection,
      VCounter,
      VMulChooser
    },
    created() {
      this.$http.get('/static/json/publish.json').then((res) => {
        this.tradeList = res.data.tradeList;
        this.versionList = res.data.versionList
      }, (err) => {
        console.log(err)
      })
    },
    data() {
      return {
        tradeList: [],
        versionList: []
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../assets/css/variable";


</style>
