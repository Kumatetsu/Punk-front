import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/presentation/views/HomeView.vue";
import { BeerContract } from "@/infrastructure/http/punkTypes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/presentation/views/AboutView.vue"),
    },
    {
      path: "/beers",
      name: "beers",
      component: () => import("@/presentation/views/BeerListView.vue"),
    },
    {
      path: "/beers/:id",
      name: "beer",
      component: () => import("@/presentation/views/BeerView.vue"),
      props: (route) => ({
        beer: BeerContract,
        ...route.params,
      })
    }
  ],
});

export default router;
