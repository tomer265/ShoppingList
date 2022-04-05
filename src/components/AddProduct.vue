<script lang="ts">
import { Product } from "@/models/product";
export default {
  props: ["categories"],
  emits: ["addProduct", "cancel"],
  // eslint-disable-next-line
  data(): any {
    return {
      headLine: "הוספת מוצר" as string,
      addedProductTitle: "" as string,
      addedProductDescription: "" as string,
      addedProductCategoryId: 1 as number,
    };
  },
  methods: {
    addProduct(): void {
      let p = new Product();
      p.name = this.addedProductTitle;
      p.desc = this.addedProductDescription;
      p.categoryId = this.addedProductCategoryId;
      this.clearForm();
    },
    clearForm() {
      this.addedProductTitle = "";
      this.addedProductDescription = "";
      this.addedProductCategoryId = 1;
    },
  },
};
</script>

<template>
  <div id="addProductPopup">
    <h2>
      {{ headLine }}
    </h2>
    <select
      class="fieldElement"
      id="addProductTypeSelect"
      v-model="addedProductCategoryId"
    >
      <option
        v-for="c of this.$props.categories"
        v-bind:key="c.id"
        :value="c.id"
      >
        {{ c.name }}
      </option>
    </select>

    <input
      placeholder="הכנס כותרת מוצר"
      class="fieldElement"
      type="text"
      v-model="addedProductTitle"
    />

    <textarea
      placeholder="הכנס פירוט מוצר"
      type="text"
      v-model="addedProductDescription"
    ></textarea>

    <div class="btnsWrapper">
      <base-button
        class="cancelBtn"
        btn-text="מחק"
        @emitting-event="addProduct"
      ></base-button>
      <base-button
        class="addBtn"
        btn-text="הוסף"
        @emitting-event="clearForm"
      ></base-button>
    </div>
  </div>
</template>

<style scoped>
#addProductPopup {
  background-color: white;
  padding-bottom: 20px;
  padding-left: 3vw;
  padding-right: 3vw;
  width: -webkit-fill-available;
  border-radius: 10px;
  margin-top: 5vh;
}

h6 {
  color: black;
}

select {
  direction: rtl;
  font-weight: 600;
  border-radius: 15px;
}

.cancelBtn {
  background-color: indianred;
}

.addBtn {
  background-color: #42b883;
}

.test {
  display: none;
}

.btnsWrapper {
  margin-top: 5vh;
}

textarea {
  font-size: 18px;
  direction: rtl;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: -webkit-fill-available;
  height: 7vh;
}

.fieldElement {
  height: 4rem;
  font-size: 25px;
  text-align: center;
  width: -webkit-fill-available;
}

select,
input,
textarea {
  margin-top: 3vh;
}
</style>
