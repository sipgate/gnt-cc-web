<template>
  <div>
    <b-tabs type="is-toggle-rounded" position="is-centered" class="block">
      <b-tab-item label="Statistics">
        <ClusterStatsDigits />
      </b-tab-item>
      <b-tab-item label="Instances"></b-tab-item>
      <b-tab-item label="Information"></b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import ClusterStatsDigits from '../components/ClusterStatsDigits.vue';

export default {
  name: 'Cluster',
  components: {
    ClusterStatsDigits,
  },
};
</script>

<style scoped>
</style>
