<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="left-one">
        <h2>全部产品</h2>
        <template v-for="category in productList">
          <h3 class="bold">{{category.title}}</h3>
          <ul>
            <li v-for="item in category.list" >
              <a :href="item.url">{{item.name}}</a>
              <span v-if="item.hot" class="hot bold">HOT</span>
            </li>
          </ul>
          <div class="hr" v-if="!category.last"></div>
        </template>
      </div>
      <div class="left-one lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList" v-if="newsList.length>0">
            <a :href="item.url">{{ item.name }}</a>
            <span v-if="item.hot" class="hot">HOT</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="invTime"
                  v-if="slides.length>0"></slide-show>
      <div class="board-list">
        <div class="board-item "
             v-for="(item,index) in boardList"
        >
          <div class="item-inner" :style="'background:url('+item.bg+') no-repeat'">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="item-button">
              <router-link class="button" :to="{path: '/detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import SlideShow from './widget/SlideShow.vue'

  export default {
    components: {
      SlideShow
    },
    data() {
      return {
        invTime: 2000,
        productList: [],
        newsList: [],
        slides: [],
        boardList: [],
      }
    },
    created() {
      this.$http.get('/static/json/list.json').then((res) => {
        this.productList = res.data.all;
        this.newsList = res.data.news;
        this.boardList = res.data.desc;
        this.slides = res.data.slides;
        console.log(this.newsList);
      }, (err) => {
        this.newsListLoading = false;
        console.log(err)
      });

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/css/variable.less";

  .index-wrap {
    .funcWrap;
    .index-left {
      .lastest-news {
        min-height: 512px;
      }
      width: 300px;
      float: left;
      text-align: left;
      .left-one {
        margin: 15px;
        background: @white;
        box-shadow: 0 0 1px #ddd;
        h2 {
          background: #4fc08d;
          color: #fff;
          padding: 10px 15px;
          margin-bottom: 20px;
        }
        h3 {
          padding: 0 0 5px 15px;
          color: #222;
        }
        ul {
          padding: 0 20px;
          li {
            padding: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            a {
              text-decoration: none;
              color: #222;
              &:hover {
                color: @hover;
              }
            }
            .hot {
              color: white;
              background: #f43d2b;
            }
          }
        }
        .hr {
          margin-bottom: 20px;
          width: 100%;
          height: 1px;
          background: #ddd;
        }
      }
    }
    .index-right {
      .board-list {
        .board-item {
          margin: 20px 0 0 0;
          &:nth-child(odd) {
            margin: 20px 20px 0 0;
          }
          float: left;
          width: 400px;
          background: white;
          box-shadow: 0 0 1px #ddd;
          padding: 20px;
          .item-inner {
            min-height: 125px;
            padding-left: 120px;
            h2 {
              font-size: 18px;
              margin-bottom: 15px;
            }
            .item-button {
              margin-top: 20px;
              a{
                text-decoration: none;
              }
            }
          }
        }

      }
    }
  }


</style>
