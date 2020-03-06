import Vue from 'vue';
import VueRouter from 'vue-router';
import Instances from '@/views/InstancesView.vue';
import StatisticsView from '@/views/StatisticsView.vue';
import Nodes from '@/views/NodesView.vue';
import Wrapper from '@/views/WrapperView.vue';
import Jobs from '@/views/JobsView.vue';
import PageNames from '@/data/enum/PageNames';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:cluster',
    component: Wrapper,
    children: [
      {
        path: 'statistics',
        name: PageNames.Statistics,
        component: StatisticsView
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
