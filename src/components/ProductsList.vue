<template>
  <ul v-if="productCategories && productCategories.length > 0">
    <div v-for="c in productCategories.sort((a, b) => a.id - b.id)" :key="c.id">
      <h3>{{ c.name }}</h3>
      <div v-if="products && products.length > 0">
        <list-item
          v-for="p in products.filter((p) => p.categoryId === c.id)"
          v-bind:key="new Date() + p.name"
          :product="p"
        ></list-item>
      </div>
    </div>
  </ul>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import ListItem from "./ListItem.vue";
import { Category } from "@/models/category";

export default {
  props: ["productsArr", "categoriesToDisplay"],
  data() {
    return {
      title: "asdef" as string,
      productCategories: this.$props.categoriesToDisplay,
      products: this.$props.productsArr,
    };
  },
  components: {
    ListItem,
  },
};
</script>

<style scoped>
h3 {
  color: #42b883;
  text-align: right;
  padding-right: 2vw;
  text-decoration: underline;
  font-weight: bold;
  margin-top: 5vh;
  margin-bottom: 0;
}

ul {
  list-style-type: none;
  display: contents;
}
</style>
