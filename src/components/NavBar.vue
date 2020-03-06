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

<script>
import ClusterSelector from '@/components/ClusterSelector';
import PageNames from '@/data/enum/PageNames';

export default {
  name: 'NavBar',
  components: { ClusterSelector },

  computed: {
    links () {
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
  }
};
</script>

<style scoped>
.brand-logo {
  max-height: 3rem;
}
</style>
