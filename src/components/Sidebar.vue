<script setup>
import userpic from '@/assets/img/userpic.png'
import sair from '@/assets/img/sair 1.png'
import Svg from '@/components/Svg.vue'
import { defineProps } from 'vue';

defineProps({
    username: {
        type: String,
        default: 'Toninho Ferreira',
    },
});
</script>

<template>
    <section class="w-64 itens items-baseline justify  bg-indigoNavbarBg border-r border-indigoNavbarSt">
        <div class="py-4 px-6">
            <!-- User Profile -->
            <a class="flex justify-center pt-8" href="index.html">
                <img class=" h-15 w-auto" v-bind:src="userpic" alt="User Picture" />
            </a>
            <!-- User Name -->
            <a class="flex justify-center pt-4 text-white text-2xl font-sans" href="index.html">
                {{ username }}
            </a>
        </div>

        <div class=" place-self-end ">
            <a class="" href="pesquisas.html">
                <Svg name="Pesquisas" class="transition-all drop-shadow-md hover:drop-shadow-xl rounded-l-full hover:bg-indigoHoverButton" />
            </a>
        </div>
        <div class=" place-self-end">
            <a class="" href="experimentos.html">
                <Svg name="Experimentos" class="transition-all drop-shadow-md hover:drop-shadow-xl rounded-l-full hover:bg-indigoHoverButton" />
            </a>
        </div>
        <div class=" place-self-end ">
            <a class="" href="relatorios.html">
                <Svg name="Relatórios" class="transition-all drop-shadow-md hover:drop-shadow-xl rounded-l-full hover:bg-indigoHoverButton" />
            </a>
        </div>
        <div class=" place-self-end ">
            <a class="" href="equipes.html">
                <Svg name="Equipes" class="transition-all drop-shadow-md hover:drop-shadow-xl rounded-l-full hover:bg-indigoHoverButton fill-black" />
            </a>
        </div>
        <div class=" absolute bottom-8 left-20 drop-shadow-md hover:drop-shadow-3xl rounded-full ">
            <a class="flex justify-center text-white font-sans " href="logout.html">
                <img v-bind:src="sair">
                <span class="pl-3">Logout</span>  
            </a>
        </div>
    </section>
</template>