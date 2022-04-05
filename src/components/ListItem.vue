<script lang="ts">
export default {
  props: ["product"],
  data() {
    return {
      productToDisplay: this.$props.product,
    };
  },
};
</script>

<template>
  <li>
    <section class="itemWrapper">
      <div class="itemText">
        <h3>{{ this.productToDisplay.name }}</h3>
        <p>{{ this.productToDisplay.desc }}</p>
      </div>
    </section>
    <section class="checkboxContainer">
      <label class="switch">
        <input type="checkbox" v-model="productToDisplay.isChecked" />
        <span class="slider round"></span>
      </label>
    </section>
  </li>
</template>

<style scoped>
li {
  display: flex;
  direction: rtl;
}

.itemText {
  text-align: right;
  padding-right: 5vw;
}

.itemWrapper {
  display: inline;
  line-height: 0.5;
  width: 50%;
}

.checkboxContainer {
  display: inline;
  padding-top: 2vh;
  width: 50%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
