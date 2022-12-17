<template>
  <div></div>
</template>
<script>

import {GameState} from "@/store/GameState";

export default {
  name: "PopulationPane",
  data() {
    return {
      population: GameState.population,
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
</style>
