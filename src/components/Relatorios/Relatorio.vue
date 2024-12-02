<script setup>
import Svg from '../Svg.vue';


defineProps({
    filteredResults: {
        type: Object,
        required: true
    }
});
</script>


<template>
    <div v-for="search in filteredResults" :key="search.reportId">
        <div class="transition-all hover:scale-105 transform-gpu bg-indigoButtomColor p-6 rounded-2xl shadow-md border-borderColor border">
            <router-link :to="`relatorios/${search.reportId}`">
                <div class="flex justify-between">
                    <h2 class="text-xl text-transparent bg-red-gradient bg-clip-text font-bold">{{ search.reportTitle }}</h2>
                    <div class="h-auto flex">
                        <span class="text-white h-full flex items-center bg-sapphire-gradient px-4 rounded-3xl text-sm">Responsável: {{ search.reportAuthor }}</span>
                    </div>
                </div>
                <p class="text-white mt-2 mb-4">
                    {{ search.reportConclusion }}
                </p>
                <div class="flex justify-between text-white">
                    <div class="flex items-center gap-2">
                        <p>Data de publicação </p>
                        <span class="text-white flex items-center justify-between bg-ruby-gradient py-2 px-4 rounded-3xl text-sm"><p class="my-auto">{{ search.reportDate }}</p> <Svg name="date" class="ml-2 -mt-1"/></span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>