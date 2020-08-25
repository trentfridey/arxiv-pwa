<template>
  <div class="vignette" @click="e => viewDetail(paper)">
    <div class="vignette-preview">
      <div class="vignette-header">
        <div class="vignette-header-text" id="title">{{ paper.title }}</div>
        <div class="vignette-header-text" id="author">{{ paper.authors }}</div>
        <div class="vignette-header-text" id="date">{{ paper.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paper: Object
  },
  methods: {
    viewDetail(paper) {
      this.$store.commit("setDetail", paper);
      this.$router.push("/detail");
    }
  }
};
</script>

<style lang="scss" scoped>
.vignette {
  position: relative;
  width: 100%;
  background-color: #efefef;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 106px;
  &.expanded {
    height: auto;
    max-height: 1000px;
  }
}
.vignette-preview {
  width: 100%;
}
.vignette-header {
  padding: 10px 0px;
  height: 70px;
}
.vignette-header-text {
  text-align: left;
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &#author {
    font-size: 12px;
    color: black;
  }
  &#date {
    font-size: 12px;
    color: grey;
  }
}
</style>
