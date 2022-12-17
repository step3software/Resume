<template>
  <div class="grid container actions border">
    <div class="row">
      Resource number: {{ resources.number }}
    </div>
  </div>
</template>
<script>

import {GameState} from "@/store/GameState";

export default {
  name: "NumbersPane",
  data() {
    return {
      resources: GameState.resources,
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
</style>
