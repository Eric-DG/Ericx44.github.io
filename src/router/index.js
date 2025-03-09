import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Projects from '../views/ProjectsView.vue';
import Activities from '../views/ActivitiesView.vue';
import Certificates from '../views/CertificatesView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/activities', component: Activities },
  { path: '/certificates', component: Certificates },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
