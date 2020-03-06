<template>
  <div id="nav">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" to="/">
          <img class="brand-logo" src="../assets/ganeti-logo.png" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="links.instances">
          Instances
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="links.statistics">
          Statistics
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="links.jobs">
          Jobs
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="links.nodes">
          Nodes
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <ClusterSelector/>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import PageNames from '@/data/enum/PageNames';
import Vue from 'vue';
import Component from 'vue-class-component';
import ClusterSelector from '@/components/ClusterSelector.vue';

@Component({
  name: 'NavBar',
  components: { ClusterSelector }
})
export default class NavBar extends Vue {
  get links () {
    return {
      instances: {
        name: PageNames.Instances
      },
      statistics: {
        name: PageNames.Statistics
      },
      jobs: {
        name: PageNames.Jobs
      },
      nodes: {
        name: PageNames.Nodes
      }
    };
  }
};
</script>

<style scoped>
.brand-logo {
  max-height: 3rem;
}
</style>
