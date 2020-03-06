<template>
  <div class="about">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Nodes</p>
          <p class="title information">12</p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Instances</p>
          <p class="title information">184</p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">CPU Cores</p>
          <p class="title information">584</p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Disk Space</p>
          <p class="title information">24 TB</p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Memory</p>
          <p class="title information">2 TB</p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Inst. per Node</p>
          <p class="title information">10 / 15 / 20</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'ClusterStatsDigits'
})
export default class ClusterStatsDigits extends Vue {
  async created () {
    // const response = await fetch('/api/v1/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: 'admin',
    //     password: 'admin'
    //   })
    // });
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODM1MDg4NDYsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTU4MzQ5MDg0Nn0.uWEZ2Rc2TvqmF18X5fpprGTZdt98au6_OnyxfuO84L4';
    const response = await fetch('/api/v1/clusters', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    const json = await response.json();
    console.log(json);
  }
};
</script>

<style scoped>
.tile {
  margin: 5px;
}

.information {
  font-weight: normal;
}
</style>
