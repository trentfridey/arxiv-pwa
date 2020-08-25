<template>
  <div>
    <div class="detail-body">
      {{ paper.summary }}
    </div>
    <div class="detail-footer">
      <a v-if="paper.pdf" :href="paper.pdf" class="detail-btn">
        <font-awesome-icon icon="download" />
      </a>
      <a :href="vanity" class="detail-btn">
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
  computed: {
    vanity() {
      return this.paper.id.replace(/arxiv/, "arxiv-vanity");
    }
  }
};
</script>

<style>
.detail-body {
  padding: 10px;
}
.detail-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
}
.detail-btn {
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  flex: 1 1 auto;
  padding: 5px 10px;
  cursor: pointer;
  color: grey;
}
</style>
