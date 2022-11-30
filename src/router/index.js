import {createRouter, createWebHistory} from "vue-router";
import GamePage from "../views/GamePage";

const routes = [
  {
    path: "/",
    name: "main",
    component: GamePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
