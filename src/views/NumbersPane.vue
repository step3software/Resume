<template>
  <div class="grid container actions border">
    <div class="row">
      Resource number: {{ resourceNumber.value }}
    </div>
  </div>
</template>
<script>

import {GameState} from "@/store/GameState";

export default {
  name: "NumbersPane",
  data() {
    return {
      resourceNumber: GameState.resources.resourceNumber,
      allResources: GameState.resources.resourceMap,
    };
  },
  mounted() {
    this.loadStatus();
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
</style>
