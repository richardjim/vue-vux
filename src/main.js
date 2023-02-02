import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// global styles
import "./assets/main.css";

// import store
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
