import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/store/api';

Vue.use(Vuex);

export interface StoreState {
  clusters: string[];
  nodes: Record<string, GntNode[]>;
}

const initialState: StoreState = {
  clusters: [],
  nodes: {}
};

export const Actions = {
  LoadClusters: 'loadClusters',
  LoadNodes: 'loadNodes'
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setClusters (state, clusters: string[]) {
      state.clusters = clusters;
    },
    setNodes (state, { cluster, nodes }: { cluster: string; nodes: GntNode[] }) {
      state.nodes = {
        ...state.nodes,
        [cluster]: nodes
      };
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
      return response.clusters;
    },
    async [Actions.LoadNodes] ({ commit }, { cluster }) {
      const response = await Api.get(`clusters/${cluster}/nodes`);
      commit('setNodes', {
        cluster,
        nodes: response.nodes
      });
      return response.clusters;
    }
  }
});
