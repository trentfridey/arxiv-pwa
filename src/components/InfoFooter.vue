<template>
  <div class="footer">Last Updated: {{ lastUpdated }}</div>
</template>

<script>
export default {
  computed: {
    lastUpdated() {
      return "Never";
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 20px;
  font-size: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  line-height: 20px;
  font-family: mono;
}
</style>
