<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("fetchLatestPapers");
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.container {
  border: 1px solid black;
}
</style>
