import {RouteRecordRaw} from "vue-router";
import {HomePage} from "@/pages/home-page";
const routes: RouteRecordRaw[] = [
  {
    path: "",
    name: "base",
    component: HomePage,
    meta: {
      title: "дом",
    },
  },

];

export default routes;
