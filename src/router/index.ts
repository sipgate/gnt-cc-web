import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '*', redirect: '/0' },
  {
    path: '/:cluster',
    name: 'Home',
    component: Home
  },
  {
    path: '/:cluster/instances',
    name: 'Instances',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Instances.vue')
  },
  {
    path: '/:cluster/cluster',
    name: 'Cluster',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cluster.vue')
  },
  {
    path: '/:cluster/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Jobs.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
