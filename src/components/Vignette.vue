<template>
  <div class="vignette">
    <div class="vignette-preview">
      <div class="vignette-toggle" @click="toggle">
        <font-awesome-icon v-if="expanded" icon="caret-up" />
        <font-awesome-icon v-else icon="caret-down" />
      </div>
      <div class="vignette-header">
        <div class="vignette-header-text">{{ paper.title }}</div>
        <div class="vignette-header-text" id="author">{{ paper.authors }}</div>
        <div class="vignette-header-text" id="date">{{ paper.date }}</div>
      </div>
    </div>
    <div v-if="expanded" class="vignette-body" v-katex:auto>
      {{ paper.summary }}
    </div>
    <div v-if="expanded" class="vignette-footer">
      <a v-if="paper.pdf" :href="paper.pdf" class="vignette-btn">
        <font-awesome-icon icon="download" />
      </a>
      <a :href="vanity" class="vignette-btn">
        <font-awesome-icon icon="external-link-alt" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paper: Object
  },
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    vanity() {
      return this.paper.id.replace(/arxiv/, "arxiv-vanity");
    }
  },
  methods: {
    toggle: function() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
.vignette {
  border: 1px solid black;
  width: 100%;
}
.vignette-preview {
  display: flex;
  flex-direction: row;
}
.vignette-toggle {
  flex: none;
  cursor: pointer;
  border: 1px solid white;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  background-color: black;
  font-size: 30px;
  color: white;
}
.vignette-header {
  flex: 0 1 auto;
}
.vignette-header-text {
  text-align: left;
  padding: 0 10px;
  &#title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &#author {
    font-size: 12px;
    color: black;
  }
  &#date {
    font-size: 12px;
    color: grey;
  }
}
.vignette-body {
  padding: 10px;
  border: 1px solid black;
}
.vignette-footer {
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.vignette-btn {
  height: 30px;
  text-align: center;
  line-height: 30px;
  flex: 0 1 auto;
  border: 1px solid white;
  padding: 5px 10px;
  cursor: pointer;
  background-color: black;
  color: white;
  width: 50px;
}
</style>
