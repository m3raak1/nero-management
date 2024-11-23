<script setup>
import userpic from '@/assets/img/userpic.png'
import { defineProps } from 'vue';

defineProps({
    username: {
        type: String,
        default: 'User Name',
    },
});
</script>

<template>
    <div class="flex min-h-screen">
        <div class="w-64 bg-indigo-900 border-r border-indigo-950">
            <!-- User Profile -->
            <a class="flex justify-center items-center mr-4" href="index.html">
                <img class="pt-10 h-15 w-auto" v-bind:src="userpic" alt="Vue Jobs" />
            </a>
            <a class="flex justify-center items-center mr-4">
                <span class="pt-5 hidden md:block text-white text-2xl font-bold ml-2">
                    {{username}}
                </span>
            </a>
        </div>
    </div>
</template>