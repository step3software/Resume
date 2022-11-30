<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--color-4);
  color: var(--color-1);
}

.border {
  border: 1px solid var(--color-3);
}

.clickable {
  cursor: pointer;
}
</style>
