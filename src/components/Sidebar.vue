<script setup>
import userpic from '@/assets/img/userpic.png'
import pesquisaspic from '@/assets/img/abapesquisas.png'
import { defineProps } from 'vue';

defineProps({
    username: {
        type: String,
        default: 'Toninho Ferreira',
    },
});
</script>

<template>
    <div class="flex min-h-screen">
        <div class="w-64 bg-indigo-900 border-r border-indigo-500">
            <!-- User Profile -->
            <a class="flex justify-center items-center mr-4" href="index.html">
                <img class="pt-10 h-15 w-auto" v-bind:src="userpic" alt="User Picture" />
            </a>
            <!-- User Name -->
            <a class="flex justify-center items-center mr-4">
                <span class="pt-5 hidden md:block text-white text-2xl font-bold ml-2">
                    {{username}}
                </span>
            </a>
            <!-- Pesquisas -->
            <a class="flex justify-center items-center mr-4">
                <img class="pt-10 h-7 w-auto" v-bind:src="pesquisaspic" alt="Pesquisas" />
                <span class="pt-5 hidden md:block text-white text-1xl ml-2">
                    Pesquisas
                </span>
            </a>
        </div>
    </div>
</template>