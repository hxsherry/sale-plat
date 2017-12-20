<template>
  <div>
    <my-dialog :isShow="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </my-dialog>

    <my-dialog :isShow="isShowSuccBuyDialog" @on-close="closeDialog('isShowSuccBuyDialog')">
      购买成功！
    </my-dialog>

    <my-dialog :isShow="isShowFailBuyDialog" @on-close="closeDialog('isShowFailBuyDialog')">
      购买失败！
    </my-dialog>
  </div>
</template>

<script>
  import MyDialog from '../../../login/MyDialog.vue'

  export default {
    components: {
      MyDialog
    },
    props: {
      isShowCheckDialog: {
        type: Boolean,
        default: false
      },
      orderId: {
        type: [String, Number]
      }

    },
    data() {
      return {
        isShowSuccBuyDialog: false,
        isShowFailBuyDialog: false
      }
    },
    methods: {
      checkStatus() {
        this.$http.get('/static/json/analyze.json', {
          orderId: this.orderId
        }).then((res) => {
          this.isShowSuccBuyDialog = true;
          this.$emit('on-close-check-dialog')
        }, (err) => {
          this.isShowFailBuyDialog = true;
          this.$emit('on-close-check-dialog')
        });
        console.log(this.orderId)
      },
      closeDialog(params) {
        this[params] = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../../assets/css/variable";


</style>
