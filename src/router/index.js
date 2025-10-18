import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksView from '../views/WorksView.vue'
// import ArticlesView from '../views/ArticlesView.vue'
import ContactView from '../views/ContactView.vue'
import FormView from '../views/FormView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
    },
    // {
    //   path: '/articles',
    //   name: 'articles',
    //   component: ArticlesView,
    // },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/Form',
      name: 'Form',
      component: FormView,
    },
    {
      path: '/blog/:slug',
      name: 'blog-detail',
      component: () => import('../views/BlogDetailView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router