<template>
  <div id="nav">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" to='/'>
          <img
            class="brand-logo"
            src="../assets/ganeti-logo.png"
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">
          About
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-dropdown label="Cluster">
          <b-navbar-item href="#">
            HQ
          </b-navbar-item>
          <b-navbar-item href="#">
            RZ1
          </b-navbar-item>
          <b-navbar-item href="#">
            RZ2
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
  .brand-logo {
    max-height: 3rem;
  }
</style>
