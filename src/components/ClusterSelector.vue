<template>
  <div>
    <div class="columns">
      <div class="column" v-if="clusters !== undefined && $route.params.cluster !== undefined">
        <p v-text="$route.params.cluster"/>
      </div>
      <b-navbar-dropdown label="Cluster">
        <b-navbar-item v-for="cluster in clusters" v-bind:key="cluster">
          <router-link :to="{params: { cluster: cluster }}" class="dropdown-item">{{ cluster }}</router-link>
        </b-navbar-item>
      </b-navbar-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import { State } from '@/store';

@Component({
  name: 'ClusterSelector',
  computed: mapState({
    clusters: (state: State): string[] => state.clusters
  })
})
export default class ClusterSelector extends Vue {
  clusters!: string[]
};
</script>

<style scoped>
  .column {
    margin-right: 2em;
  }
</style>
