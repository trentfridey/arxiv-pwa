<template>
  <div class="vignette">
    <div class="vignette-preview">
      <div class="vignette-toggle" @click="toggle">
        <font-awesome-icon v-if="expanded" icon="caret-up" />
        <font-awesome-icon v-else icon="caret-down" />
      </div>
      <div class="vignette-header">
        <div class="vignette-header-text">{{ paper.title[0] }}</div>
        <div class="vignette-header-text" id="author">{{ author }}</div>
      </div>
    </div>
    <div v-if="expanded" class="vignette-body">
      {{ paper.summary[0] }}
    </div>
    <div v-if="expanded" class="vignette-footer">
      <a :href="download" class="vignette-btn">
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
    author: function() {
      return this.paper.author.map(author => author.name[0]).join(", ");
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
  padding: 5px 10px;
  background-color: black;
  color: white;
}
.vignette-header {
  flex: 0 1 auto;
}
.vignette-header-text {
  text-align: left;
  &#author {
    font-size: 12px;
  }
}
.vignette-body {
  padding: 10px;
}
.vignette-footer {
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.vignette-btn {
  height: 20px;
  flex: 0 1 auto;
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  background-color: black;
  color: white;
}
</style>
