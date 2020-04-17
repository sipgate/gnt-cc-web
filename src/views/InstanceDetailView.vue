<template>
  <div class="instance-details">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">{{ instanceName }}</h1>
            </div>
            <div class="column">
              <div class="test">
                <b-button type="is-light">Migrate</b-button>
                <b-button type="is-light">Failover</b-button>
                <b-button type="is-danger">Shutdown</b-button>
                <b-button type="is-danger">Kill</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="grid" v-if="instance">
      <Card title="memory" subtitle="MB">{{ instance.memoryTotal }}</Card>
      <Card title="vcpu">{{ instance.cpuCount }}</Card>
      <Card title="Dummy" subtitle="GB">42</Card>
      <Card title="Dummy">12345</Card>

      <section class="quick-info  cards" v-if="instance">
        <Card title="Nodes" :subtitle="`Total: ${instance.secondaryNodes.length + 1}`">
          <div class="nodes">
            <div class="node">
              {{ instance.primaryNode }}
              <b-tag rounded>primary</b-tag>
            </div>
            <div class="node" v-for="node in instance.secondaryNodes" :key="node">
              <span>{{ node }}</span>
            </div>
          </div>
        </Card>
      </section>
    </div>
    <!--
    <section class="quick-info" v-if="instance">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="nodes card">
              <header class="card-header">
                <p class="card-header-title">Nodes</p>
              </header>

              <div class="card-content">
                <div class="content">
                  <div class="node field">
                    <b-taglist attached>
                      <b-tag type="is-dark">{{ instance.primaryNode }}</b-tag>
                      <b-tag type="is-success">primary</b-tag>
                    </b-taglist>
                  </div>

                  <div class="node field" v-for="node in instance.secondaryNodes" :key="node">
                    <b-taglist attached>
                      <b-tag type="is-dark">{{ node }}</b-tag>
                      <b-tag type="is-info">secondary</b-tag>
                    </b-taglist>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <router-link class="node" to="#">{{ instance.primaryNode }}</router-link>
                <b-tag type="is-dark">Primary</b-tag>
            </li>
            <li v-for="node in instance.secondaryNodes" :key="node">
              <router-link class="node" to="#">{{ node }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Actions, StoreState } from "@/store";
import { State } from "vuex-class";
import GntInstance from "@/model/GntInstance";
import { Watch } from "vue-property-decorator";
import Params from "@/data/enum/Params";
import Card from "@/components/Card.vue";

@Component({
  name: "InstanceDetailView",
  components: { Card }
})
export default class InstanceDetailView extends Vue {
  @State((state: StoreState) => state.instances) allInstances!: Record<string, GntInstance[]>;

  @Watch("instanceName")
  onInstanceNameChanged() {
    this.loadInstance();
  }

  async created() {
    this.loadInstance();
  }

  async loadInstance() {
    await this.$store.dispatch(Actions.LoadInstance, {
      cluster: this.currentCluster,
      instance: this.instanceName
    });
  }

  get instance(): GntInstance | undefined {
    if (!this.allInstances[this.currentCluster]) {
      return undefined;
    }

    return this.allInstances[this.currentCluster].find(
      instance => instance.name === this.instanceName
    );
  }

  get instanceName(): string {
    return this.$route.params[Params.InstanceName];
  }

  get currentCluster(): string {
    return this.$route.params[Params.Cluster];
  }
}
</script>

<style scoped lang="scss">
.instance-details {
  .test {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    .button {
      margin-left: 1rem;
    }
  }
}

section.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  grid-area: stats;
}

section.quick-info {
  grid-area: quickstats;
}

div.nodes {
  font-size: 1rem;
  text-align: left;
  margin: 0.5rem 0;
  div.node {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 2.5rem;
  }
}

div.grid {
  display: grid;
  margin: 3rem;
  row-gap: 3rem;
  column-gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "stats stats stats stats"
    "quickstats none none none";
}
</style>
