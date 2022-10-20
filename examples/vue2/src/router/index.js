/*
 * @Author: lee
 * @Date: 2022-09-13 16:53:31
 * @LastEditTime: 2022-10-19 18:15:34
 */
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/dialog",
    name: "dialog",
    component: () => import(/* webpackChunkName: "Page1" */ "../views/Dialog.vue"),
  },
  {
    path: "/communication",
    name: "communication",
    component: () => import(/* webpackChunkName: "Page2" */ "../views/Communication.vue"),
  },
  {
    path: "/location",
    name: "location",
    component: () => import(/* webpackChunkName: "Page3" */ "../views/Location.vue"),
  },
  {
    path: "/nest",
    name: "nest",
    component: () => import(/* webpackChunkName: "Page3" */ "../views/nest.vue"),
  },
];

export default routes;
