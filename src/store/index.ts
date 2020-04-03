import Vue from "vue";
import Vuex from "vuex";
import Api from "@/store/api";
import GntInstance from "@/model/GntInstance";
import GntNode from "@/model/GntNode";

Vue.use(Vuex);

export interface StoreState {
  clusters: string[];
  nodes: Record<string, GntNode[]>;
  instances: Record<string, GntInstance[]>;
}

const initialState: StoreState = {
  clusters: [],
  nodes: {},
  instances: {}
};

export const Actions = {
  LoadClusters: "loadClusters",
  LoadNodes: "loadNodes",
  LoadInstances: "loadInstances"
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setClusters(state, clusters: string[]) {
      state.clusters = clusters;
    },
    setNodes(state, { cluster, nodes }: { cluster: string; nodes: GntNode[] }) {
      state.nodes = {
        ...state.nodes,
        [cluster]: nodes
      };
    },
    setInstances(state, { cluster, instances }: { cluster: string; instances: GntInstance[] }) {
      state.instances = {
        ...state.instances,
        [cluster]: instances
      };
    },
    setToken(state, token: string) {
      localStorage.setItem(Api.tokenStorageKey, token);
    }
  },
  actions: {
    async saveToken({ commit }, token: string) {
      commit("setToken", token);
    },
    async [Actions.LoadClusters]({ commit }) {
      const response = await Api.get("clusters");
      commit("setClusters", response.clusters);
      return response.clusters;
    },
    async [Actions.LoadNodes]({ commit }, { cluster }) {
      const response = await Api.get(`clusters/${cluster}/nodes`);
      commit("setNodes", {
        cluster,
        nodes: response.nodes
      });
    },
    async [Actions.LoadInstances]({ commit }, { cluster }) {
      const response = await Api.get(`clusters/${cluster}/instances`);
      commit("setInstances", {
        cluster,
        instances: response.instances
      });
    }
  }
});
