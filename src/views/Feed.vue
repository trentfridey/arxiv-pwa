<template>
  <v-container class="pa-0">
    <v-subheader>Hello</v-subheader>
    <v-expansion-panels>
    <v-expansion-panel v-for="paper in papers" :key="paper.id" :paper="paper">
      <v-expansion-panel-header>{{ paper.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
      <div>{{ paper.summary }}</div>
      <v-btn depressed class="float-left">Hello!</v-btn>
      <v-btn depressed class="float-right">World!</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Feed",
  created() {
    this.$store.dispatch("fetchLatestPapers");
  },
  computed: mapGetters({ papers: "getPapers" })
};
</script>

<style></style>
