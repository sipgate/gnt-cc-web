<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'App',
  components: { NavBar }
})
export default class App extends Vue {
};
</script>
