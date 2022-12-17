<template>
  <div class="grid container">
    <div v-for="(action, name) in actions.map" :key="name"
         :class="{active : name === actions.active}"
         class="row border clickable"
         @click="setAction(name)">
      {{ action.buttonText }}
    </div>
  </div>
</template>
<script>
import {GameState} from "@/store/GameState";

export default {
  name: "ActionsPane",
  data() {
    return {
      actions: GameState.actions,
      actionFrame: '',
    }
  },
  mounted() {
    this.loadStatus();
  },
  methods: {
    loadStatus() {
    },
    setAction(actionKey) {
      console.log('active action set to ' + actionKey)
      this.actions.setActive(actionKey);
    }
  }
}
</script>
<style scoped>
a {
  padding-right: 4px;
  text-decoration: underline;
  cursor: pointer;
}

.row {
  margin-bottom: 1rem;
}

.container {
  justify-items: center;
}

.active {
  background-color: var(--color-3);
}
</style>
