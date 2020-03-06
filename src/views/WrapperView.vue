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

@Component({
  name: 'WrapperView',
  components: { NavBar }
})
export default class WrapperView extends Vue {};
</script>

<style scoped>

</style>
