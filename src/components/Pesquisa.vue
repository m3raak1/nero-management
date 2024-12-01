<script setup>

defineProps({
    filteredResults: {
        type: Object,
        required: true
    }
}); 
</script>


<template>
    <div v-for="search in filteredResults" :key="search.researchId">
        <div class="transition-all hover:scale-105 transform-gpu bg-indigoButtomColor p-6 rounded-2xl shadow-md border-borderColor border">
            <a :href="`pesquisa${search.researchId}.html`">
                <div class="flex justify-between">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">{{ search.title }}</h2>
                    <div class="h-auto flex">
                        <span class="text-white h-full block flex items-center bg-sapphire-gradient px-4 rounded-3xl text-sm">Responsável: {{ search.responsible }}</span>
                        <span class="text-white h-full block flex items-center bg-emerald-gradient px-4 ml-4 rounded-3xl text-sm">Status: {{ String(search.status).charAt(0).toUpperCase() + String(search.status).slice(1) }}</span>
                    </div>
                </div>
                <p class="text-white mt-2 mb-4">
                    {{ search.summary }}
                </p>
                <div class="flex justify-between">
                    <span class="text-white  block flex items-center bg-metal-gradient py-2 px-4 rounded-3xl text-sm">Equipe: Alfa</span>
                </div>
            </a>
        </div>
    </div>
</template>