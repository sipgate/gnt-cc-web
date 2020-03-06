<template>
  <div>
    <NavBar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NavBar from '@/components/NavBar.vue';
import { Actions } from '@/store';

@Component({
  name: 'DashboardView',
  components: { NavBar }
})
export default class DashboardView extends Vue {
  async created () {
    await this.$store.dispatch(Actions.LoadClusters);
  }
};
</script>

<style scoped>

</style>
