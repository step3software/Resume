<template>
  <div class="grid container actions">
    <div v-for="(action, name) in actions" :key="name"
         :class="{active: name === active}"
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
      actions: {
        scavenge: {
          buttonText: "scavenge",
          onPerform: () => {
            console.log("scavenged");
            GameState.resources.addResource({key: 'berries', amount: 5});
          }
        },
        hunt: {
          buttonText: "hunt",
          onPerform: () => {
            console.log("hunt");
            GameState.resources.addResource({key: 'meat', amount: 5});
          }
        },
        chop: {
          buttonText: "chop",
          onPerform: () => {
            console.log("chop");
            GameState.resources.addResource({key: 'wood', amount: 5});
          }
        }
      },
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
      console.log('selectedAction set to ' + actionKey)
      this.active = actionKey;
    },
    performAction() {
      if (this.active) {
        this.actions[this.active].onPerform();
      }
    },
    gameHour() {
      this.performAction();
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
