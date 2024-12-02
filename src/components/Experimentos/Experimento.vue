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
    <div v-for="search in filteredResults" :key="search.experimentId">
        <div class="transition-all hover:scale-105 transform-gpu bg-indigoButtomColor p-6 rounded-2xl shadow-md border-borderColor border">
            <router-link :to="`pesquisas/${search.experimentId}`">
                <div class="flex justify-between">
                    <h2 class="text-xl text-transparent bg-red-gradient bg-clip-text font-bold w-4/6">{{ search.experimentTitle }}</h2>
                    <div class="flex">
                        <span class="text-white h-fit py-2 flex items-center bg-emerald-gradient px-4 ml-4 rounded-3xl text-sm">Status: {{ String(search.status).charAt(0).toUpperCase() + String(search.status).slice(1) }}</span>
                    </div>
                </div>
                <p class="text-white my-4">
                    {{ search.objective }}
                </p>
                <div class="flex justify-between text-white">
                    <div class="flex gap-5">
                        <span class="text-white flex items-center bg-sapphire-gradient px-4 rounded-3xl text-sm">Responsável: {{ search.responsible.name }}</span>
                        <span class="text-white flex items-center bg-metal-gradient py-2 px-4 rounded-3xl text-sm">Equipe: {{  search.research.team.name }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <p>Data de inicio </p>
                        <span class="text-white flex items-center justify-between bg-ruby-gradient py-2 px-4 rounded-3xl text-sm"><p class="my-auto">{{ search.startDate }}</p> <Svg name="date" class="ml-2 -mt-1"/></span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>