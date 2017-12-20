// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './common/router/index.js'
import VueResource from 'vue-resource'
import Layout from './components/Layout.vue'


Vue.use(VueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout></Layout>',
  components: {
    Layout
  }
});
