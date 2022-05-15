import Home from "@/views/Home.vue";
import Services from "@/views/Services.vue";
// import About from "@/views//About.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: About,
  // },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
];
