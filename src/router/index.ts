import Vue from 'vue';
import VueRouter from 'vue-router';
import InstancesView from '@/views/InstancesView.vue';
import StatisticsView from '@/views/StatisticsView.vue';
import NodesView from '@/views/NodesView.vue';
import DashboardView from '@/views/DashboardView.vue';
import JobsView from '@/views/JobsView.vue';
import PageNames from '@/data/enum/PageNames';
import LoginView from '@/views/LoginView.vue';

Vue.use(VueRouter);

export const REDIRECT_TO_QUERY_KEY = 'redirect-to';

const routes = [
  {
    path: '/login',
    name: PageNames.Login,
    component: LoginView
  },
  {
    path: '/:cluster',
    component: DashboardView,
    children: [
      {
        path: 'statistics',
        name: PageNames.Statistics,
        component: StatisticsView
      },
      {
        path: 'instances',
        name: PageNames.Instances,
        component: InstancesView
      },
      {
        path: 'nodes',
        name: PageNames.Nodes,
        component: NodesView
      },
      {
        path: 'jobs',
        name: PageNames.Jobs,
        component: JobsView
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
