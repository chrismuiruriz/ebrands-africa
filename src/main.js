import { createApp } from "vue";
import "@/styles/tailwind.css";
import "@/styles/index.scss";
import App from "@/App.vue";
import { routes } from "@/routes/index.js";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  //history: createWebHashHistory(),
  routes,
});

app.use(router);
app.mount("#app");
