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

    <section class="stats section" v-if="instance">
      <div class="container">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Memory</p>
              <p class="title">{{ instance.memoryTotal }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Following</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Followers</p>
              <p class="title">456K</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        </nav>
      </div>
    </section>

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



          <!--<ul>
            <li>
              <router-link class="node" to="#">{{ instance.primaryNode }}</router-link>
                <b-tag type="is-dark">Primary</b-tag>
            </li>
            <li v-for="node in instance.secondaryNodes" :key="node">
              <router-link class="node" to="#">{{ node }}</router-link>
            </li>
          </ul>-->
        </div>
      </div>
    </section>
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

@Component({
  name: "InstanceDetailView"
})
export default class InstanceDetailView extends Vue {
  @State((state: StoreState) => state.instances) allInstances!: Record<string, GntInstance[]>;

  @Watch("currentCluster")
  onCurrentClusterChanged() {
    this.loadInstance();
  }

  async created() {
    if (this.currentCluster) {
      this.loadInstance();
    }
  }

  async loadInstance() {
    // TODO: only load single instance
    await this.$store.dispatch(Actions.LoadInstances, {
      cluster: this.currentCluster
    });
  }

  get instance(): GntInstance | undefined {
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
</style>
