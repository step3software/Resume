<template>
  <div class="grid container border border-slate-100">
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
      resources: GameState.resources.map,
    };
  }
};
</script>
<style scoped>
a {
  padding-right: 4px;
  text-decoration: underline;
  cursor: pointer;
}

.container {
  justify-items: center;
}
</style>
