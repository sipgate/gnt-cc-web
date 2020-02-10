<template>
  <div id="nav">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" to="/">
          <img class="brand-logo" src="../assets/ganeti-logo.png" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ name: 'Instances' }">
          Instances
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Cluster' }">
          Cluster
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'Jobs' }">
          Jobs
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

export default {
  name: 'NavBar',
  components: { ClusterSelector }
};
</script>

<style scoped>
.brand-logo {
  max-height: 3rem;
}
</style>
