<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'WrapperView'
})
export default class WrapperView extends Vue {
};
</script>

<style scoped>

</style>
