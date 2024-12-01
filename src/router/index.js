import { createRouter, createWebHistory } from 'vue-router';
import PesquisasView from '../views/PesquisasView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/pesquisas.html',
            name: 'pesquisas',
            component: PesquisasView
        }
    ]
});

export default router;