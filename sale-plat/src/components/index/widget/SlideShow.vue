<template>
  <div class="slide" @mouseout=" runInv" @mouseover="clearInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans" mode="out-in">
          <img v-if="show" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old" mode="out-in">
          <img v-if="!show" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>

    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-page bold">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item ,index) in slides" @click="goto(index)">
        <a :class="{on:index===nowIndex}">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }

    },
    data() {
      return {
        nowIndex: 0,
        show: true
      }
    },
    computed: {
      prevIndex() {
        if (this.nowIndex === 0) {
          return this.slides.length - 1;
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex() {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1;
        }
      }
    },
    methods: {
      goto(index) {
        this.show = false;
        setTimeout(() => {
          this.show = true;
          this.nowIndex = index
        }, 10)
      },
      prev(index) {
        this.nowIndex = index - 1
      },
      runInv() {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv() {
        clearInterval(this.invId)
      }
    },
    mounted() {
      this.runInv();
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../assets/css/variable";

  .slide {
    width: 900px;
    height: 500px;
    position: relative;
    margin: 15px 0 0 300px;
    background: @white;
    overflow: hidden;
    .slide-img {
      width: 100%;
      position: absolute;
      top: 0;
      a {
        position: relative;
        img {
          position: absolute;
        }
      }

    }
    h2 {
      position: absolute;
      width: 100%;
      color: @white;
      background: #000;
      opacity: .5;
      bottom: 0;
      height: 30px;
      text-align: left;
      padding-left: 15px

    }
    .slide-page {
      position: absolute;
      bottom: 3px;
      right: 50px;
      color: @white;
      li {
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          color: @hover;
        }
        .on {
          text-decoration: underline;
        }
        a {
          text-decoration: none;
          font-size: 16px;
          color: @white;
          &:hover {
            color: @hover;
          }

        }
      }

    }

  }

  .slide-trans-enter-active, .slide-trans-old-leave-active {
    transition: all 1s;
  }

  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-to {
    transform: translateX(-900px);
    opacity: 0;
  }

</style>
