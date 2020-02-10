<template>
  <section>
    <b-table
      :data="data"
      :columns="columns"
      :paginated="true"
      :pagination-simple="false"
      :pagination-position="bottom"
      :default-sort-direction="asc"
      :sort-icon-size="small"
      :sort-icon="arrow-up"
      :per-page="20">
    </b-table>
  </section>
</template>

<script>
export default {
  name: 'ClusterNodesTable',
  data() {
    return {
      data: [
        {
          name: 'abcd.srv.efgh.net', primaryInstance: 11, secondaryInstance: 12, cpus: 64, memoryFree: '14.2 GB', memoryTotal: '32 GB', diskFree: '1.2 TB', diskTotal: '2 TB', group: 'newHardware',
        },
        {
          name: 'hijk.srv.efgh.net', primaryInstance: 24, secondaryInstance: 14, cpus: 64, memoryFree: '6.8 GB', memoryTotal: '64 GB', diskFree: '522 GB', diskTotal: '2 TB', group: 'newHardware',
        },
        {
          name: 'lmno.srv.dev.net', primaryInstance: 2, secondaryInstance: 23, cpus: 24, memoryFree: '28.4 GB', memoryTotal: '32 GB', diskFree: '945 GB', diskTotal: '2 TB', group: 'oldHardware',
        },
      ],
      columns: [
        {
          field: 'name',
          label: 'Name',
          searchable: true,
          sortable: true,
        },
        {
          field: 'primaryInstance',
          label: 'Primary Instance',
          numeric: true,
          sortable: true,
        },
        {
          field: 'secondaryInstance',
          label: 'Secondary Instance',
          numeric: true,
          sortable: true,
        },
        {
          field: 'cpus',
          label: 'CPUs',
          numeric: true,
          sortable: true,
        },
        {
          field: 'memoryFree',
          label: 'Memory Free',
          sortable: true,
        },
        {
          field: 'memoryTotal',
          label: 'Memory Total',
          sortable: true,
        },
        {
          field: 'diskFree',
          label: 'Disk Free',
          sortable: true,
        },
        {
          field: 'diskTotal',
          label: 'Disk Total',
          sortable: true,
        },
        {
          field: 'group',
          label: 'Group',
          sortable: true,
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
