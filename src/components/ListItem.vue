<script lang="ts">
export default {
  props: ["itemName", "itemDesc", "isChecked"],
};
</script>

<template>
  <div class="itemWrapper">
    <h3>{{ this.$props.itemName }}</h3>
    <p>{{ this.$props.itemDesc }}</p>
  </div>
</template>

<style scoped>
.itemWrapper {
  display: inline;
  line-height: 0.5;
}
</style>
