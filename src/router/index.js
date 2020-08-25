import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Feed",
    component: () => import("../views/Feed.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
