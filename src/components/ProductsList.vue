<template>
  <ul>
    <list-item
      v-for="p in productsList"
      :key="p.categoryId + new Date()"
      is-checked="false"
      item-name="test"
      item-desc="cool"
    ></list-item>
  </ul>
</template>

<script lang="ts">
import { Product } from '@/models/product';
import ListItem from "./ListItem.vue";

export default {
  props: ["productsList"],
  data() {
    return {
      title: "asdef" as string,
    };
  },
  components: {
    ListItem,
  },
  computed: {
    productsList(): Product[]{
      console.log(this.$props.productsList)
      return this.$props.productsList.sort((p: Product) => p.categoryId);
    }
  }
};
</script>

<style scoped>
ul {
  z-index: -1;
  list-style-type: none;
  display: contents;
}
</style>
