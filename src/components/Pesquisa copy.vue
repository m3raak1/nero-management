<script setup>
import { ref, onMounted } from 'vue';

defineProps({
    userInputTitle: {
        type: String,
        default: null
    }
})
const researchCatalog = ref([]);

onMounted(() => {
  fetch('http://localhost:3000/researchCatalog')
    .then(res => res.json())
    .then(data => researchCatalog.value = data)
    .catch(err => console.log(err.message));
});
</script>


<template>
    <div v-for="search in researchCatalog" :key="search.searchId">
        <div class="transition-all hover:scale-105 transform-gpu bg-indigoButtomColor p-6 rounded-2xl shadow-md">
            <a :href="`pesquisa${search.searchId}.html`">
                <h2 class="text-2xl text-red-600 font-bold">{{ search.title }}</h2>
                <p class="text-white mt-2 mb-4">
                    {{ search.summary }}
                </p>
                <h2 class="text-white">Responsável: {{ search.responsible }}</h2>
            </a>
        </div>
    </div>
</template>