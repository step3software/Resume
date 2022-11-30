<template>
  <div class="grid container actions border border-slate-100">
    <div v-for="(resource, name) in resources" :key="name" class="row">
      {{ name }} : {{ resource.amount }}
    </div>
  </div>
</template>
<script>

import {GameState} from "@/store/GameState";

export default {
  name: "ResourcesPane",
  data() {
    return {
      resources: GameState.resources.resourceMap,
      resourceNumber: GameState.resources.resourceNumber
    };
  },
  mounted() {
  },
  methods: {
    loadStatus() {
    },
    setAction() {
    }
  }
};
</script>
<style scoped>
a {
  padding-right: 4px;
  text-decoration: underline;
  cursor: pointer;
}

.action {
  padding-x: 40px;
  padding-y: 4px;
}

.actions {
  justify-items: center;
}
</style>
