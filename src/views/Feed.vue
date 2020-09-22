<template>
  <div class="container">
  <!-- TODO: in order to have multiple days worth of
  papers available, need to have a v-for wrapping the following: -->
    <DateHeader />
    <Vignette v-for="paper in papers" :key="paper.id" :paper="paper" />
    <!-- <InfoFooter /> -->
  </div>
</template>

<script>
import Vignette from "@/components/Vignette.vue";
import DateHeader from "@/components/DateHeader.vue";
// import InfoFooter from "@/components/InfoFooter.vue";
import { mapGetters } from "vuex";

export default {
  name: "Feed",
  components: { Vignette, DateHeader, /* InfoFooter */ },
  created() {
    this.$store.dispatch("fetchLatestPapers");
  },
  computed: mapGetters({ papers: "getPapers" })
};
</script>

<style></style>
