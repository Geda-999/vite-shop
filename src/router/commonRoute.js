export const routes = [
  {
    path: "/",
    alias: "/home",
    component: () => import("@/views/home/home.vue"),
  },
  {
    path: "/list",
    component: () => import("@/views/list/list.vue"),
  },
  {
    path: "/shopcar",
    component: () => import("@/views/shopcar/shopcar.vue"),
  },
  {
    path: "/user",
    component: () => import("@/views/user/user.vue"),
  },
];
