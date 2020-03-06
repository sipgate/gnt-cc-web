import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/store/api';

Vue.use(Vuex);

export interface State {
  clusters: string[];
}

const initialState: State = {
  clusters: []
};

export const Actions = { LoadClusters: 'loadClusters' };

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setClusters (state, clusters: string[]) {
      state.clusters = clusters;
    },
    setToken (state, token: string) {
      localStorage.setItem(Api.tokenStorageKey, token);
    }
  },
  actions: {
    async saveToken ({ commit }, token: string) {
      commit('setToken', token);
    },
    async [Actions.LoadClusters] ({ commit }) {
      const response = await Api.get('clusters');
      commit('setClusters', response.clusters);
    }
  }
});
