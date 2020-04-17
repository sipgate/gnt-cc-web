<template>
  <button class="button-round" @click.prevent="onClick">
    <b-icon :icon="icon" :size="iconSize" />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  name: "ButtonRound"
})
export default class ButtonRound extends Vue {
  @Prop(String)
  readonly icon!: string;
  @Prop({ default: "is-small" })
  readonly iconSize!: string;
  @Prop({ default: false })
  readonly disabled!: boolean;

  onClick() {
    if (!this.disabled) {
      this.$emit("click");
    }
  }
}
</script>

<style scoped lang="scss">
.button-round {
  border: 1px solid #3e3f42;
  background: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
