<template>
  <div class="instances">
    <ClusterNodesTable />
  </div>
</template>

<script>
import ClusterNodesTable from '@/components/ClusterNodesTable';

export default {
  name: 'Instances',
  components: {
    ClusterNodesTable
  }
};
</script>
