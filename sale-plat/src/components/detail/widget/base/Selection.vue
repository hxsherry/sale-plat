<template>
  <div class="select-comp">
    <div class="select-show" @click="toggleDrop">
      <span>{{ selections[nowIndex].label }}</span>
      <div class="arrow-wrap">
        <div class="arrow"></div>
      </div>
    </div>
    <ul v-if="isDrop">
      <li v-for="(item,index) in selections" :key="index"
          @click="chooseSelection(index)">
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
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data() {
      return {
        nowIndex: 0,
        isDrop: false

      }
    },
    methods: {
      toggleDrop() {
        this.isDrop = !this.isDrop
      },
      chooseSelection(index) {
        this.nowIndex = index;
        this.isDrop = false;
        this.$emit('on-change', this.selections[index])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../../assets/css/variable";
  .select-comp {
    position: relative;
    display: inline-block;
    .select-show {
      position: relative;
      border: 1px solid @border;
      border-radius: 3px;
      height: 25px;
      line-height: 25px;
      cursor: pointer;
      span {
        padding: 10px;
      }
      .arrow-wrap {
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        background: @border;
        .arrow {
          width: 0;
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 12px solid #698483;
        }
      }
    }
    ul {
      width: 98%;
      position: absolute;
      background: @white;
      top: 25px;
      border: 1px solid #e3e3e3;
      z-index: 5;
      li {
        padding: 5px 10px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
          background-color: @border;
        }
      }

    }

  }

</style>
