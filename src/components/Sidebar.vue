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
    <section class="w-64 bg-indigoNavbarBg border-r border-indigoNavbarSt">
        <div class="py-4 px-6">
            <!-- User Profile -->
            <router-link class="flex justify-center pt-8" to="/index">
                <img class=" h-15 w-auto" v-bind:src="userpic" alt="User Picture" />
            </router-link>
            <!-- User Name -->
            <p class="flex justify-center pt-4 text-white text-2xl font-sans">
                {{ username }}
            </p>
        </div>

        <div class=" place-self-end ">
            <router-link class="" to="/pesquisas">
                <Svg name="Pesquisas" class="transition-all drop-shadow-md hover:drop-shadow-xl rounded-l-full hover:bg-indigoHoverButton" />
            </router-link>
        </div>
        <div class=" place-self-end">
            <router-link class="" to="/experimentos">
                <Svg name="Experimentos" class="transition-all drop-shadow-md hover:drop-shadow-xl rounded-l-full hover:bg-indigoHoverButton" />
            </router-link>
        </div>
        <div class=" place-self-end ">
            <router-link class="" to="/relatorios">
                <Svg name="Relatórios" class="transition-all drop-shadow-md hover:drop-shadow-xl rounded-l-full hover:bg-indigoHoverButton" />
            </router-link>
        </div>
        <div class=" place-self-end ">
            <router-link class="" to="/equipes">
                <Svg name="Equipes" class="transition-all drop-shadow-md hover:drop-shadow-xl rounded-l-full hover:bg-indigoHoverButton fill-black" />
            </router-link>
        </div>
        <div class=" absolute bottom-8 left-20 drop-shadow-md hover:drop-shadow-3xl rounded-full ">
            <router-link class="flex justify-center text-white font-sans " to="/logout">
                <img v-bind:src="sair">
                <span class="pl-3">Logout</span>  
            </router-link>
        </div>
    </section>
</template>