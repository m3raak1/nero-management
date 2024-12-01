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
                    <div class="h-auto">
                        <span class="text-white h-full block flex items-center bg-sapphire-gradient px-4 rounded-3xl text-sm">Responsável: {{ search.responsible }}</span>
                    </div>
                </div>
                <p class="text-white mt-2 mb-4">
                    {{ search.summary }}
                </p>
                <h2 class="text-white">Responsável: {{ search.responsible }}</h2>
            </a>
        </div>
    </div>
</template>