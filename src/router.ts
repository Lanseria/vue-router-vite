import { createRouter, createWebHistory } from "vue-router";
import Hello from "./Components/Hello.vue";
import First from "./Components/First.vue";
import Second from "./Components/Second.vue";

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      component: Hello,
    },
    {
      path: "/First",
      component: First,
    },
    {
      path: "/Second",
      component: Second,
    },
  ],
});
