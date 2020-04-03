<template>
  <div class="instances">
    <b-table
      :data="instances"
      :columns="columns"
      default-sort-direction="asc"
      sort-icon-size="small"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Actions, StoreState } from '@/store';
import { State } from 'vuex-class';
import GntInstance from '@/model/GntInstance';
import { Watch } from 'vue-property-decorator';

@Component({
  name: 'InstancesView'
})
export default class InstancesView extends Vue {
  @State((state: StoreState) => state.instances) allInstances!: Record<string, GntInstance[]>;

  @Watch('currentCluster')
  onCurrentClusterChanged () {
    this.loadInstances();
  }

  async created () {
    if (this.currentCluster.length > 0) {
      this.loadInstances();
    }
  }

  async loadInstances () {
    await this.$store.dispatch(Actions.LoadInstances, {
      cluster: this.currentCluster
    });
  }

  get instances (): GntInstance[] {
    return this.allInstances[this.currentCluster];
  }

  get currentCluster (): string {
    return this.$route.params.cluster;
  }

  get columns () {
    return [
      {
        field: 'name',
        label: 'Name',
        searchable: true,
        sortable: true
      },
      {
        field: 'primaryNode',
        label: 'Primary Node',
        searchable: false,
        sortable: true
      },
      {
        field: 'secondaryNodes',
        label: 'Secondary Nodes',
        searchable: false,
        sortable: true
      }
    ];
  }
};
</script>
