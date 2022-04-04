<template>
  <div class="fixedDivWrapper">
    <the-header @toggle-add-product="toggleAddProduct"></the-header>
    <keep-alive>
      <transition name="slide-fade">
        <add-product
          v-if="isAddProductOn"
          :categories="categories"
        ></add-product>
      </transition>
    </keep-alive>
  </div>
  <div class="productsListWrapper">
    <products-list></products-list>
  </div>
  <div class="overlay"></div>
</template>

<script lang="ts">
import { Category } from "./models/category";

export default {
  name: "App",
  // eslint-disable-next-line
  data() {
    return {
      categories: [
        { id: 1, name: "בשר ועוף" },
        { id: 2, name: "חד פעמי" },
        { id: 3, name: "חומרי ניקוי" },
        { id: 4, name: "חטיפים ומתוקים" },
        { id: 5, name: "יבשים" },
        { id: 6, name: "כלי בית" },
        { id: 7, name: "לחמים" },
        { id: 8, name: "מוצרי חלב" },
        { id: 9, name: "מוצרי יסוד" },
        { id: 10, name: "מוצרי תינוקות" },
        { id: 11, name: "מעדנייה" },
        { id: 12, name: "משקאות" },
        { id: 13, name: "פירות וירקות" },
        { id: 14, name: "קפואים" },
        { id: 15, name: "שימורים" },
        { id: 16, name: "תבלינים" },
        { id: 17, name: "שונות" },
      ] as Category[],
      isAddProductOn: false as boolean,
    };
  },
  methods: {
    toggleAddProduct(): void {
      this.isAddProductOn = !this.isAddProductOn;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fixedDivWrapper {
  position: fixed;
  width: 100%;
  right: 0vw;
  top: 0;
}

.overlay {
  background-color: lightgray;
  height: 100%;
}

.productsListWrapper {
  top: 9vh;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

the-header {
  direction: rtl;
  background-color: #42b883;
  height: 8vh;
  font-weight: bold;
  position: fixed;
  width: 100%;
  margin-top: 2em;
}
</style>
