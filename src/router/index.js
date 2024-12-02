import { createRouter, createWebHistory } from 'vue-router';
import PesquisasView from '../views/PesquisasView.vue';
import HomeView from '../views/HomeView.vue';
import AbrirPesquisaView from '../views/AbrirPesquisaView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/pesquisas',
            name: 'pesquisas',
            component: PesquisasView
        },
        {
            path: '/pesquisas/:id',
            name: 'abrirpesquisa',
            component: AbrirPesquisaView
        }
    ]
});

export default router;