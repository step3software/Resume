<template>
  <div>
    <div>Hours passed: {{ this.hoursPassed }}</div>
    <Numbers class="pane border"/>
    <Actions ref="actions" class="pane border"/>
    <Resources class="pane border"/>
    <Population class="pane border"/>
  </div>
</template>
<script>
/* eslint-disable */
import ActionsPane from "@/views/ActionsPane";
import ResourcesPane from "@/views/ResourcesPane";
import NumbersPane from "@/views/NumbersPane";
import {GameState} from "@/store/GameState";
import PopulationPane from "@/views/PopulationPane";

const GAME_HOUR_INTERVAL = 600;

export default {
  name: "GamePage",
  data() {
    return {
      referenceTime: 0,
      hoursPassed: 0,
    };
  },
  mounted() {
    requestAnimationFrame(this.gameLoop);
  },
  components: {
    Actions: ActionsPane,
    Numbers: NumbersPane,
    Resources: ResourcesPane,
    Population: PopulationPane,
  },
  computed: {},
  methods: {
    gameLoop(timestamp) {
      const timeElapsed = timestamp - this.referenceTime;
      let unprocessedTime = timeElapsed;

      while (unprocessedTime > GAME_HOUR_INTERVAL) {
        GameState.gameHour();
        this.hoursPassed += 1;
        this.referenceTime += GAME_HOUR_INTERVAL;
        unprocessedTime -= GAME_HOUR_INTERVAL;
      }
      requestAnimationFrame(this.gameLoop);
    },
    gameHour() {
      this.$refs.actions?.gameHour();
    }
  }
};
</script>
<style scoped>
.pane {
  padding: 1rem 4rem 1rem 4rem;
}
</style>
