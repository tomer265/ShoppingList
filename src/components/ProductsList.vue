<template>
  <ul v-if="products && products.length > 0">
    <list-item
      v-for="p in products.sort((a, b) => a.categoryId - b.categoryId)"
      v-bind:key="new Date() + p.name"
      :product="p"
    ></list-item>
  </ul>
</template>

<script lang="ts">
import { Product } from '@/models/product';
import ListItem from "./ListItem.vue";

export default {
  props: ["productsArr"],
  data() {
    return {
      title: "asdef" as string,
      products: this.$props.productsArr,
    };
  },
  components: {
    ListItem,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: contents;
}
</style>
