<script setup>
import userpic from '@/assets/img/userpic.png'
import pesquisasicon from '@/assets/img/abapesquisas.png'
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
    <div class="flex min-h-screen bg-indigo-950 border-r">
        <div class="itens items-baseline justify bg-indigo-900">
            <div class="py-4 px-6">
                <!-- User Profile -->
                <a class="flex justify-center items-center" href="index.html">
                    <img class="pt-10 h-15 w-auto" v-bind:src="userpic" alt="User Picture" />
                </a>
                <!-- User Name -->
                <a class="pt-5 flex justify-center items-center text-white text-2xl font-bold" href="index.html">
                    {{ username }}
                </a>
            </div>

            <div class=" place-self-end ">
                <a class="" href="pesquisas.html">
                    <Svg name="Pesquisas" />
                </a>
            </div>
            <div class=" place-self-end ">
                <a class="" href="experimentos.html">
                    <Svg name="Experimentos"/>
                </a>
            </div>
            <div class=" place-self-end ">
                <a class="" href="relatorios.html">
                    <Svg name="Relatórios" />
                </a>
            </div>
            <div class=" place-self-end ">
                <a class="" href="equipes.html">
                    <Svg name="Equipes" />
                </a>
            </div>
        </div>
    </div>
</template>