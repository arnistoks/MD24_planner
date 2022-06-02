import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/ServicesView.vue"),
  },
  {
    path: "/todolist",
    name: "toDoList",
    component: () => import("../views/ToDoListView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
