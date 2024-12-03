<script setup>
import Pesquisa from '@/components/Experimentos/Experimento.vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import { onMounted, ref, computed, provide } from 'vue';

const experimentCatalog = ref([]);

onMounted(async () => {
    const response = await fetch('http://localhost:3000/experimentsCatalog');
    const data = await response.json();

    for (let element of data) {
        const researchResponse = await fetch(`http://localhost:3000/researchCatalog?researchId=${element.researchId}`);
        const researchArray = await researchResponse.json();
        element.research = researchArray[0]

        const responsibleResponse = await fetch(`http://localhost:3000/users?userId=${element.responsible}`);
        const responsibleArray = await responsibleResponse.json();
        element.responsible = responsibleArray[0]
    } 

    for (let element of data) {
        const teamResponse = await fetch(`http://localhost:3000/teams?teamId=${element.research.team}`);
        const teamArray = await teamResponse.json();
        element.research.team = teamArray[0]
        element.team = element.research.team
    }

    experimentCatalog.value = data;
    console.log(experimentCatalog.value);
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
      return sortedCatalog.sort((a, b) => a.experimentTitle.localeCompare(b.experimentTitle));
    case 'alphabet-up':
      return sortedCatalog.sort((a, b) => b.experimentTitle.localeCompare(a.experimentTitle));
    case 'time-up':
      return sortedCatalog.sort((a, b) => b.experimentId - a.experimentId);
    case 'time-down':
      return sortedCatalog.sort((a, b) => a.experimentId - b.experimentId);
  }
};

const filteredResults = computed(() => {
  let results = experimentCatalog.value;

  if (searchFilter.value !== '') {
    results = results.filter(experiment =>
      experiment.experimentTitle.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      experiment.objective.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
      experiment.responsible.name.toLowerCase().includes(searchFilter.value.toLowerCase())
    );
  }

  results = results.filter(experiment => {
    return Object.entries(filters.value).every(([key, value]) =>
      !value || (experiment[key].name && experiment[key].name === value)
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
            <span class="text-transparent bg-silver-gradient bg-clip-text">Experimentos</span>
        </section>
        <!-- Aba de pesquisas -->
        <section class="py-8 px-12">
            <div class=" border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt">
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-12 rounded-lg">
                    <!-- Obtém valor digitado na SearchBar -->
                    <SearchBar @search="handleSearch"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 px-12 pb-12 rounded-lg">
                    <!-- Recebe valores do catálogo ou valores filtrados -->
                    <Pesquisa :filteredResults="filteredResults"/>
                </div>
            </div>
        </section>
    </div>
</template>