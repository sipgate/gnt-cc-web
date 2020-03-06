import Vue from 'vue';
import VueRouter from 'vue-router';
import Instances from '../views/Instances.vue';
import Statistics from '../views/Statistics.vue';
import Nodes from '../views/Nodes.vue';
import Wrapper from '../views/Wrapper.vue';
import Jobs from '../views/Jobs.vue';
import PageNames from '../data/enum/PageNames';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:cluster',
    component: Wrapper,
    children: [
      {
        path: 'statistics',
        name: PageNames.Statistics,
        component: Statistics
      },
      {
        path: 'instances',
        name: PageNames.Instances,
        component: Instances
      },
      {
        path: 'nodes',
        name: PageNames.Nodes,
        component: Nodes
      },
      {
        path: 'jobs',
        name: PageNames.Jobs,
        component: Jobs
      }
    ]
  },
  { path: '*', redirect: '/0' }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
