<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>
    <div class="card-body">
      <ButtonRound icon="minus" @click="onDecrease"/>
      <slot />
      <ButtonRound icon="plus" @click="onIncrease"/>
    </div>
    <div class="card-subtitle">{{ subtitle }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ButtonRound from "@/components/ButtonRound.vue";

@Component({
  name: "Card",
  components: {ButtonRound}
})
export default class Card extends Vue {
  @Prop(String)
  readonly title!: string;

  @Prop(String)
  readonly subtitle!: string;

  onIncrease() {

  }

  onDecrease() {

  }
}
</script>

<style scoped lang="scss">
div.card {
  border-radius: 4px;
  padding: 30px;
  flex: 1 0 auto;
  box-sizing: border-box;
  border: 1px solid #eaedf3;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div.card-title {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.125rem;
    margin-bottom: 5px;
    font-weight: 500;
    color: #9ea0a5;
    text-align: center;
  }
  div.card-body {
    font-size: 2.25rem;
    color: #3e3f42;
    line-height: 3.125rem;
    text-align: center;
    margin-top: 8px;
  }
  div.card-subtitle {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.125rem;
    margin-top: 5px;
    font-weight: 500;
    color: #9ea0a5;
    text-align: center;
    height: 18px;
  }
}
</style>
