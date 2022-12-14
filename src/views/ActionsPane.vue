<template>
  <div class="grid container actions">
    <div v-for="(action, name) in actions.list" :key="name"
         :class="{active: name === actions.active}"
         class="row action border clickable"
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
      active: '',
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
      GameState.actions.setActive(actionKey);
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

.action {
  margin-bottom: 1rem;
}

.actions {
  justify-items: center;
}

.active {
  background-color: var(--color-2);
}
</style>
