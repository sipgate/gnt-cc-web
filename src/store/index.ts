import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/store/api';

Vue.use(Vuex);

const initialState = {

};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    // setClusters (state, clusters: Array<ClusterModel>) {
    //   state.clusters = clusters;
    // }
    setToken (state, token: string) {
      localStorage.setItem(Api.tokenStorageKey, token);
    }
  },
  actions: {
    // setClusters (context, clusters: Array<ClusterModel>) {
    //   context.commit('setClusters', clusters);
    // },
    async saveToken (context, token: string) {
      context.commit('setToken', token);
    }
  }
});
