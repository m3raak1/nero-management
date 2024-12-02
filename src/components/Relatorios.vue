<script setup>
import Svg from './Svg.vue';


defineProps({
    reports: {
        type: Object,
        required: true
    }
}); 
</script>


<template>
    <div v-for="search in reports" :key="search.reportId">
        <div class="transition-all hover:scale-105 transform-gpu bg-indigoButtomColor p-6 rounded-2xl shadow-md border-borderColor border">
            <a :href="`experimento/${search.reportId}.html`">
                <div class="flex justify-between">
                    <h2 class="text-2xl text-transparent bg-silver-gradient bg-clip-text font-bold">{{ search.reportTitle }}</h2>
                    <div class="h-auto flex">
                        <span class="text-white h-full flex items-center bg-sapphire-gradient px-4 ml-4 rounded-3xl text-sm">Autor: {{ search.reportAuthor }}</span>
                        <div class="px-2"></div>
                        <span class="text-white flex items-center justify-between bg-ruby-gradient py-2 px-4 rounded-3xl text-sm"><p class="my-auto">{{ search.reportDate }}</p> <Svg name="date" class="ml-2 -mt-1"/></span>
                    </div>
                </div>
                <p class="py-5 text-white mt-2 mb-4">
                    {{ search.reportConclusion }}
                </p>
            </a>
        </div>
    </div>
</template>