<script lang="ts">
export default {
  props: ["categories"],
  // eslint-disable-next-line
  data(): any {
    return {
      headLine: "הוסף מוצר" as string,
      addedProductTitle: "" as string,
      addedProductDescription: "" as string,
      addedProductCategoryId: 1 as number,
    };
  },
};
</script>

<template>
  <div id="addProductWrapper">
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
    <p>{{ addedProductCategoryId }}</p>
  </div>
</template>

<style scoped>
#addProductWrapper {
  margin-top: 10px;
  background-color: lightyellow;
  display: inline-grid;
  width: 80%;
  position: absolute;
  right: 10vw;
}

h6 {
  color: black;
}

select {
  direction: rtl;
  font-weight: 600;
  border-radius: 15px;
}

textarea {
  font-size: 18px;
  direction: rtl;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.fieldElement {
  height: 4rem;
  font-size: 25px;
  text-align: center;
}

select,
input,
textarea {
  margin-top: 2vh;
}
</style>
