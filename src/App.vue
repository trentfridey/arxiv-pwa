<template>
  <div id="app">
    <div class="container">
      <DateHeader />
      <Vignette v-for="paper in papers" :key="paper.id" :paper="paper" />
      <InfoFooter />
    </div>
  </div>
</template>

<script>
import Vignette from "@/components/Vignette.vue";
import DateHeader from "@/components/DateHeader.vue";
import InfoFooter from "@/components/InfoFooter.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { Vignette, DateHeader, InfoFooter },
  created() {
    this.$store.dispatch("fetchLatestPapers");
  },
  computed: mapGetters({ papers: "getPapers" })
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.container {
  display: grid;
  place-items: center;
  border: 1px solid black;
}
</style>
