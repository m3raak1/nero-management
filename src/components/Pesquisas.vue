<script setup>
import Pesquisa from '@/components/Pesquisa.vue';
import SearchBar from '@/components/SearchBar.vue';
import { onMounted, ref, computed } from 'vue';

//Faz comunicação com o banco de dados. Obtém todas as pesquisas.
const researchCatalog = ref([])
onMounted( async() => {
    const response = await fetch('http://localhost:3000/researchCatalog')
    researchCatalog.value = await response.json();
})
//Filtra resultados de pesquisa com base no valor digitado na search bar. Filtra por título, sumário e responsável
const filteredResults = computed(() => {
    if (searchFilter.value != '') {
        return researchCatalog.value.filter(research => research.title.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
            research.summary.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
            research.responsible.toLowerCase().includes(searchFilter.value.toLowerCase()));
    }
    return researchCatalog.value;
})
//Obtém valor digitado na search bar
const searchFilter = ref('')
const handleSearch = (search) => {
    searchFilter.value = search;
};
</script>

<template>
    <div class="flex-1 h-screen overflow-y-scroll scroll-m-1">
        <section class="px-12 pt-12 text-white text-4xl font-sans">
            <span>Pesquisas</span>
        </section>
        <!-- Aba de pesquisas -->
        <section class="py-8 px-12">
            <div class=" border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt">
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-12 rounded-lg">
                    <!-- Obtém valor digitado na SearchBar -->
                    <SearchBar @search="handleSearch" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 px-12 pb-12 rounded-lg">
                    <!-- Recebe valores do catálogo ou valores filtrados -->
                    <Pesquisa :filteredResults="filteredResults"/>
                </div>
            </div>
        </section>
    </div>
</template>