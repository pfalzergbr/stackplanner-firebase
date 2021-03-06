import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import { auth } from "../firebase/config.js";

const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) {
    next({ name: "Home" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component:() => import( "../views/Login.vue"),
  },
  // TODO -implement this later
  // {
  //   path: "/profile",
  //   name: "UserProfile",
  //   beforeEnter: requireAuth,
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/UserProfile.vue"),
  // },
  {
    path: "/projects",
    name: "Projects",
    beforeEnter: requireAuth,
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/projects/:id",
    name: "ProjectDetails",
    beforeEnter: requireAuth,
    component: () => import("../views/ProjectDetails.vue"),
  },
  {
    path: "/new-project",
    name: "NewProject",
    beforeEnter: requireAuth,
    component: () => import("../views/NewProject.vue"),
  },
  // {
  //   path: '*',
  //   name: 'NotFound',
  //   component: () => import('../views/NotFound.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
