/*
 * @Description: 
 * @Author: chiwenda
 * @Date: 2022-10-23 20:27:32
 * @LastEditTime: 2022-10-24 23:32:20
 * @LastEditors: chiwenda
 * @FilePath: /go-sombrero/Users/cwd/Documents/project/vue/sombrero-vue/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
