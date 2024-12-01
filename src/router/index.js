import { createRouter, createWebHistory } from 'vue-router';
import PesquisasView from '../views/PesquisasView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/pesquisas.html',
            name: 'pesquisas',
            component: PesquisasView
        },
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
});

export default router;