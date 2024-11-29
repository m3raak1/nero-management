<script setup>
import data from '@/assets/json/test.json';
import { ref } from 'vue';

const searchData = ref(data);
console.log(searchData.value);
</script>

<template>
    <div v-for="search in searchData" :key="search.searchId">
        <div class="transition-all hover:scale-105 transform-gpu bg-indigoButtomColor p-6 rounded-2xl shadow-md">
            <a :href="`${search.searchId}.html`">
                <h2 class="text-2xl text-red-600 font-bold">{{ search.title }}</h2>
                <p class="text-white mt-2 mb-4">
                    {{ search.summary }}
                </p>
                <h2 class="text-white">Responsável: {{ search.responsible }}</h2>
            </a>
        </div>
    </div>
</template>