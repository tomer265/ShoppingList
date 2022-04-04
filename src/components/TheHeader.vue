<script lang="ts">
export default {
  emits: ["toggle-add-product"],
  // eslint-disable-next-line
  data(): any {
    return {
      headLine: "רשימת קניות" as string,
    };
  },
  methods: {
    toggleAddProductDisplay(): void {
      this.$emit("toggle-add-product");
    },
  },
};
</script>

<template>
  <nav>
    <button id="addBtn" @click="toggleAddProductDisplay">+</button>
    <h4 id="headerTitle">{{ headLine }}</h4>
  </nav>
</template>

<style scoped>
nav {
  direction: rtl;
  background-color: #42b883;
  height: 8vh;
  font-weight: bold;
}

#headerTitle {
  color: white;
  font-size: 26px;
  margin: 0;
  padding-top: 2vh;
}

#addBtn {
  color: #42b883;
  float: left;
  margin-top: 2vh;
  background-color: white;
  border-radius: 25px;
  border: none;
  margin-left: 5vw;
  font-size: 2em;
  width: 65px;
}
</style>
