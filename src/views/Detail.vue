<template>
  <div class="detail">
    <header>
      <span class="detail-header-text" id="detail-title">{{ paper.title }}</span>
      <span class="detail-header-text" id="detail-authors">{{ paper.authors }}</span>
      <span class="detail-header-text" id="detail-date">{{ paper.date }}</span>
    </header>
    <main>
      {{ paper.summary }}
    </main>
    <footer>
      <a v-if="paper.pdf" :href="paper.pdf" class="detail-btn">
        <font-awesome-icon icon="download" />
      </a>
      <a :href="vanity" class="detail-btn">
        <font-awesome-icon icon="external-link-alt" />
      </a>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    paper: Object
  },
  computed: {
    vanity() {
      return this.paper.id.replace(/arxiv/, "arxiv-vanity");
    },
    ...mapState({
      paper: state => state.paperDetail
    })
  }
};
</script>

<style lang="scss" scoped>
#detail-title {
  font-weight: bold;
  font-size: 22px;
}
#detail-authors {
}
#detail-date {
  color: grey;
  font-size: 12px;
}
header {
  padding: 10px;
  font-family: sans-serif;
}
.detail-header-text {
  display: inline-block;
}
main {
  padding: 10px;
  font-size: 22px;
  margin-bottom: 50px;
}
footer {
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  background-color: white;
}
.detail-btn {
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  flex: 1 1 auto;
  padding: 5px 10px;
  cursor: pointer;
  color: grey;
}
</style>
