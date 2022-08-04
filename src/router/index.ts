import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import EditPage from '../pages/EditPage.vue';
import PreviewPage from '../pages/PreviewPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Preview',
    component: PreviewPage,
  },
  {
    path: '/edit',
    name: 'Edit',
    component: EditPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
