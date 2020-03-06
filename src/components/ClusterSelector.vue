<template>
  <div>
    <div class="columns">
      <div class="column" v-if="$store.state.clusters !== undefined && $route.params.cluster !== undefined">
        <p v-text="$store.state.clusters[$route.params.cluster].name"/>
      </div>
      <b-navbar-dropdown label="Cluster">
        <b-navbar-item v-for="cluster in $store.state.clusters" v-bind:key="cluster.id">
          <router-link :to="{params: { cluster: cluster.id }}" class="dropdown-item">{{ cluster.name }}</router-link>
        </b-navbar-item>
      </b-navbar-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'ClusterSelector'
})
export default class ClusterSelector extends Vue {
};
</script>

<style scoped>
  .column {
    margin-right: 2em;
  }
</style>
