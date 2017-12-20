<template>
  <div>
    <ul class="chooser-list">
      <li v-for="(item,index) in selections"
          :class="{active:index===nowIndex}"
          @click="chooseSelection(index)"
      >
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      selections: {
        type: Array,
        default: [
          {
            label: "test",
            value: 0
          }
        ]
      }
    },
    data() {
      return {
        nowIndex: 0
      }
    },
    methods: {
      chooseSelection(index) {
        this.nowIndex = index;
        this.$emit('on-change', this.selections[index])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../../assets/css/variable";
</style>
