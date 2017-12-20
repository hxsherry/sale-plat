import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../../components/index/Index.vue'
import DetailLayout from '../../components/detail/DetailLayout.vue'
import Analyze from '../../components/detail/widget/Analyze.vue'
import Count from '../../components/detail/widget/Count.vue'
import Forecast from '../../components/detail/widget/Forecast.vue'
import Publish from '../../components/detail/widget/Publish.vue'

Vue.use(Router);
const routes = [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      redirect: '/detail/analyse',
      component: DetailLayout,
      children: [
        {
          path: 'analyse',
          component: Analyze
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          component: Publish
        },
      ]
    },


  ]
;

export default new Router({
  mode: 'history',
  routes,
})
