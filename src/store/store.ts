import Vue from 'vue';
import Vuex from 'vuex';
import StateModel from '@/models/StateModel';
import ClusterModel from '@/models/ClusterModel';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: new StateModel(),
  mutations: {
    setClusters (state, clusters: Array<ClusterModel>) {
      state.clusters = clusters;
    }
  },
  actions: {
    setClusters (context, clusters: Array<ClusterModel>) {
      context.commit('setClusters', clusters);
    }
  }
});
