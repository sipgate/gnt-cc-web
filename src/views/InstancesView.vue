<template>
  <div class="instances">
    <ClusterNodesTable />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ClusterNodesTable from '@/components/ClusterNodesTable.vue';

@Component({
  name: 'InstancesView',
  components: {
    ClusterNodesTable
  }
})
export default class InstancesView extends Vue {
};
</script>
