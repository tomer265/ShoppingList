import { createApp } from "vue";
import TheHeader from "./components/TheHeader.vue";
import AddProduct from "./components/AddProduct.vue";
import ProductsList from "./components/ProductsList.vue";
import BaseButton from "./components/BaseButton.vue";
import App from "./App.vue";

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("add-product", AddProduct);
app.component("products-list", ProductsList);
app.component("base-button", BaseButton);
app.mount("#app");
