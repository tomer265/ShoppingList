<template>
  <div class="fixedDivWrapper">
    <the-header @toggle-add-product="toggleAddProduct"></the-header>
    <keep-alive>
      <transition class="addProductWrapper" name="slide-fade">
        <add-product
          v-if="isAddProductOn"
          :categories="categories"
          @add-product-to-list="addProductToList"
        ></add-product>
      </transition>
    </keep-alive>
  </div>
  <div class="productsListWrapper" v-bind:class="{ overlay: isAddProductOn }">
    <products-list
      v-if="productsArr.length > 0"
      :products-arr="productsArr"
      :categories-to-display="categoriesToDisplay"
    ></products-list>
  </div>
</template>

<script lang="ts">
import { Category } from "./models/category";
import { Product } from "./models/product";

export default {
  name: "App",
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
      productsArr: [] as Product[],
      categoriesToDisplay: [] as Category[],
      isAddProductOn: false as boolean,
    };
  },
  methods: {
    toggleAddProduct(): void {
      this.isAddProductOn = !this.isAddProductOn;
    },
    getCookie(name: string) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts && parts.length === 2) {
        const partsData = parts?.pop() ?? "none";
        if (partsData === "none") {
          return partsData;
        }
        return partsData.split(";").shift();
      }
    },
    addProductToList(product: Product) {
      let productindex;
      if (!this.productsArr) {
        productindex = 0;
        this.productsArr = [];
      } else {
        productindex = this.productsArr.length;
      }
      this.productsArr[productindex] = product;

      let productCategoryIdToCheck = product.categoryId;
      let isCategoryExistsInCategoriesToDisplay =
        this.categoriesToDisplay.filter(
          (c: Category) => c.id === productCategoryIdToCheck
        );
      if (
        !isCategoryExistsInCategoriesToDisplay ||
        isCategoryExistsInCategoriesToDisplay.length === 0
      ) {
        let categoryToAdd = this.categories.filter(
          (c: Category) => c.id === productCategoryIdToCheck
        );
        let categoryIndex;
        if (!this.categoriesToDisplay) {
          categoryIndex = 0;
        } else {
          categoryIndex = this.categoriesToDisplay.length;
        }
        this.categoriesToDisplay[categoryIndex] = categoryToAdd[0];
      }
    },
  },
  mounted() {
    const cookieValue = this.getCookie("productsCookie");
    if (!cookieValue || cookieValue === "none") {
      this.products = cookieValue;
    }
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

.addProductWrapper {
  position: absolute;
  margin-right: 15px;
  margin-left: 15px;
}

.fixedDivWrapper {
  position: fixed;
  width: 100%;
  right: 0vw;
  top: 0;
  z-index: 2;
}

.overlay {
  background-color: gray;
  min-height: 89vh;
}

.productsListWrapper {
  padding-top: 9vh;
  position: relative;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.5, 0.3, 0.3, 0.5);
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
