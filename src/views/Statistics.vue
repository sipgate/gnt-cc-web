<template>
  <div class="statistics">
    <ClusterStatsDigits />
  </div>
</template>

<script>
import ClusterStatsDigits from '../components/ClusterStatsDigits';

export default {
  name: 'Statistics',

  components: {
    ClusterStatsDigits
  }
};
</script>

<style scoped>
  .statistics {}
</style>
