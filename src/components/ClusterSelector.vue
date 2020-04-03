<template>
  <div class="cluster-selector">
    <b-navbar-dropdown :label="currentCluster">
      <b-navbar-item v-for="cluster in clusters" v-bind:key="cluster">
        <router-link :to="{ params: { cluster: cluster } }" class="dropdown-item">{{
          cluster
        }}</router-link>
      </b-navbar-item>
    </b-navbar-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";
import { StoreState } from "@/store";
import Params from '@/data/enum/Params';

@Component({
  name: "ClusterSelector"
})
export default class ClusterSelector extends Vue {
  @State((state: StoreState) => state.clusters) clusters!: string[];

  get currentCluster(): string {
    return this.$route.params[Params.Cluster] || "";
  }
}
</script>

<style scoped>
.cluster-selector {
}
</style>
