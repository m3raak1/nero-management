<script setup>
import Pesquisa from '@/components/Pesquisas/Pesquisa.vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import { onMounted, ref, computed, provide } from 'vue';
import { dataManager } from '@/utils/dataManager.js';


const researchCatalog = ref([]);

onMounted(async () => {
  const response = await fetch(`${dataManager.url}/researchCatalog`);
  const data = await response.json();

  for (let element of data) {
    const responsibleResponse = await fetch(`${dataManager.url}/users?userId=${element.responsible}`);
    const responsibleArray = await responsibleResponse.json();
    element.responsible = responsibleArray[0]

    const teamResponse = await fetch(`${dataManager.url}/teams?teamId=${element.team}`);
    const teamArray = await teamResponse.json();
    element.team = teamArray[0]
  }

  researchCatalog.value = data;
});

const searchFilter = ref('');
const filterOrder = ref('time-down');
const filters = ref({
    responsible: '',
    team: ''
});

const sortResults = (catalog, type) => {
  const sortedCatalog = [...catalog]; 
  switch (type) {
    case 'alphabet-down':
      return sortedCatalog.sort((a, b) => a.title.localeCompare(b.title));
    case 'alphabet-up':
      return sortedCatalog.sort((a, b) => b.title.localeCompare(a.title));
    case 'time-up':
      return sortedCatalog.sort((a, b) => b.researchId - a.researchId);
    case 'time-down':
      return sortedCatalog.sort((a, b) => a.researchId - b.researchId);
  }
};

const filteredResults = computed(() => {
  let results = researchCatalog.value;

  if (searchFilter.value !== '') {
    results = results.filter(research =>
      research.title.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      research.summary.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      research.responsible.name.toLowerCase().includes(searchFilter.value.toLowerCase())
    );
  }

  console.log(filters.value)

  results = results.filter(research => {
    return Object.entries(filters.value).every(([key, value]) =>
      !value || (research[key].name && research[key].name === value)
    );
  });

  return sortResults(results, filterOrder.value);
});

const handleSearch = (search) => {
  searchFilter.value = search.value;
  filterOrder.value = search.order.type + '-' + search.order.direction;
};

const handleFilter = (key, value) => {
    filters.value[key] = value;
    console.log(key, value, filters.value)
}

provide("sendFilter", handleFilter)
</script>


<template>
    <div class="flex-1 h-screen overflow-y-scroll scroll-m-1">
        <section class="px-12 pt-12 text-4xl font-sans">
            <span class="text-transparent bg-silver-gradient bg-clip-text">Pesquisas</span>
        </section>
        <!-- Aba de pesquisas -->
        <section class="py-8 px-12">
            <div class=" border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt">
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-12 rounded-lg">
                    <!-- Obtém valor digitado na SearchBar -->
                    <SearchBar @search="handleSearch" :filters="filters"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 px-12 pb-12 rounded-lg">
                    <!-- Recebe valores do catálogo ou valores filtrados -->
                    <Pesquisa :filteredResults="filteredResults"/>
                </div>
            </div>
        </section>
    </div>
</template>