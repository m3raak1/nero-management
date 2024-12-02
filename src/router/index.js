import { createRouter, createWebHistory } from 'vue-router';
import PesquisasView from '../views/PesquisasView.vue';
import HomeView from '../views/HomeView.vue';
import AbrirPesquisaView from '../views/AbrirPesquisaView.vue';
import ExperimentsView from '@/views/ExperimentsView.vue';
import NovaPesquisa from '@/components/Pesquisas/NovaPesquisa.vue';
import RelatoriosView from '@/views/RelatoriosView.vue';

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
        },
        {
            path: '/pesquisa/nova',
            name: 'novapesquisa',
            component: NovaPesquisa
        },
        {
            path: '/experimentos',
            name: 'experimentos',
            component: ExperimentsView 
        },
        {
            path: '/relatorios',
            name: 'relatorios',
            component: RelatoriosView
        }
    ]
});

export default router;