<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
        v-for="(item, index) in selections"
        @click="toggleSelection(index)"
        :class="{active:item.selected}"
      >{{ item.label }}
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
      return {}
    },
    methods: {
      toggleSelection(index) {
        this.selections[index].selected = !this.selections[index].selected;
        let nowObjArray = [];
        this.selections.map((item, index) => {
          if (item.selected) {
            nowObjArray.push(item)
          }
        });
        this.$emit('on-change', nowObjArray)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../../assets/css/variable";


</style>
