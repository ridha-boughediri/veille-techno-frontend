import { createRouter, createWebHistory } from "vue-router";

// Utilisation de la fonction () => import() pour le lazy loading
const Home = () => import("../views/Home.vue");
const Login = () => import("../views/Login.vue");
const Inscription = () => import("../views/Inscription.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/inscription", component: Inscription },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
