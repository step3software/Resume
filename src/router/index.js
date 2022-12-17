import {createRouter, createWebHistory} from "vue-router";
import GamePage from "../views/GamePage";
import ResumePage from "../views/Resume";

const routes = [
  {
    path: "/",
    name: "main",
    component: GamePage
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
