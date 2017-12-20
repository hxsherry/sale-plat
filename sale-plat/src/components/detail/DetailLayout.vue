<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <img :src="productIcon">
      <ul>
        <router-link tag="li"
                     v-for="(item,index) in products"
                     :key="index"
                     :to="{path: item.path }"
                     active-class="active">
          {{item.name}}
        </router-link>
      </ul>

    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    created() {
      this.$http.get('/static/json/detail.json').then((res) => {
        this.products = res.data.products;
        this.imgMap = res.data.imgMap;
      }, (error) => {
        console.log(error)
      })
    },
    data() {
      return {
        products: [],
        imgMap: {}
      }
    },
    computed: {
      productIcon() {
//        console.log(this.$route.path)
        return this.imgMap[this.$route.path]

      }


    },

    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/css/variable";

  .detail-wrap {
    .funcWrap;
    padding-top: 20px;
    .detail-left {
      float: left;
      width: 200px;
      text-align: center;
      padding: 20px 0;
      background-color: @white;
      font-size: @font-title;
      li {
        list-style: none;
        text-align: left;
        cursor: pointer;
        padding: 10px 60px;
        &:hover {
          background-color: #4fc08d;
        }
        &.active {
          color: #f43d2b;
        }
      }

    }
    .detail-right {
      float: left;
      width: 980px;
      margin-left: 20px;
    }

  }

</style>
