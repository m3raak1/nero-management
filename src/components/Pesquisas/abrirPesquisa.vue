<script setup>
import Svg from '../Svg.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import Experimentos from '../Pesquisas/Experimentos.vue';
import Relatorios from '../Pesquisas/Relatorios.vue';
import QuantityTable from '../QuantityTable.vue';
//Obtém o id desejado
const route = useRoute();
const researchId = Number(route.params.id);
console.log(researchId);
//Obtém resposta de JSON Server
const researchCatalog = ref([]);
const experimentsCatalog = ref([]);
const resultsCatalog = ref([])
const reportsCatalog = ref([]);
onMounted(async () => {
    const response = await fetch('http://localhost:3000/researchCatalog')
    const researchJson = await response.json();

    for (let element of researchJson) {
        const responsibleResponse = await fetch(`http://localhost:3000/users?userId=${element.responsible}`);
        const responsibleArray = await responsibleResponse.json();
        element.responsible = responsibleArray[0]

        const teamResponse = await fetch(`http://localhost:3000/teams?teamId=${element.team}`);
        const teamArray = await teamResponse.json();
        element.team = teamArray[0]
    }

    researchCatalog.value = researchJson;

    const response2 = await fetch('http://localhost:3000/experimentsCatalog')
    const experimentJson = await response2.json();

    for (let element of experimentJson) {
        const responsibleResponse = await fetch(`http://localhost:3000/users?userId=${element.responsible}`);
        const responsibleArray = await responsibleResponse.json();
        element.responsible = responsibleArray[0]
    } 

    let resultsArray = []

    experimentJson.forEach(element => {
        resultsArray = resultsArray.concat(element.results)
    });

    resultsCatalog.value = resultsArray;
    experimentsCatalog.value = experimentJson;

    const response3 = await fetch('http://localhost:3000/reportsCatalog')
    reportsCatalog.value = await response3.json();
})
//Obtém elemento desejado
const researchById = computed(() => {
    return researchCatalog.value.filter((research) =>
        research.researchId === researchId
    );
});
const experimentByResearchId = computed(() => {
    return experimentsCatalog.value.filter((experiment) =>
        experiment.researchId === researchId
    );
});
const reportsByResearchId = computed(() => {
    return reportsCatalog.value.filter((report) =>
        report.researchId === researchId
    );
});
</script>

<template>
    <div class="flex-1 h-screen overflow-y-scroll scroll-m-1">
        <section class="px-12 pt-12 text-4xl font-sans">
            <span class="text-transparent bg-silver-gradient bg-clip-text">Pesquisas</span>
        </section>
        <section class="py-8 px-12">
            <div v-if="researchById.length > 0"
                class=" min-h-screen border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt">
                <div class=" p-7  border-b-2 border-indigoNavbarSt">
                    <div class="flex justify-between">
                        <h2 class="text-3xl text-transparent bg-red-gradient bg-clip-text font-bold">{{
                            researchById[0].title }}</h2>
                        <div class="h-auto flex">
                            <span
                                class="text-white flex items-center bg-metal-gradient py-2 px-4 rounded-3xl text-sm">Equipe:
                                {{ researchById[0].team.name }}</span>
                            <span
                                class="text-white h-full flex items-center bg-sapphire-gradient px-4 ml-4 rounded-3xl text-sm">Responsável:
                                {{ researchById[0].responsible.name }}</span>
                            <span
                                class="text-white h-full flex items-center bg-emerald-gradient px-4 ml-4 rounded-3xl text-sm">Status:
                                {{ String(researchById[0].status).charAt(0).toUpperCase() +
                                    String(researchById[0].status).slice(1)
                                }}</span>
                        </div>
                    </div>
                    <p class="pt-10 text-white">
                        {{ researchById[0].objective }}
                    </p>
                    <div class="pt-10 flex justify-between text-white">
                        <div class="flex items-center gap-2">
                            <p>Data de inicio </p>
                            <span
                                class="text-white flex items-center justify-between bg-ruby-gradient py-2 px-4 rounded-3xl text-sm">
                                <p class="my-auto">{{ researchById[0].startDate }}</p> <Svg name="date"
                                    class="ml-2 -mt-1" />
                            </span>
                        </div>
                    </div>
                </div>
                <div class=" p-7 border-b-2 border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Introdução</h2>
                    <p class="pb-5 pt-10 text-white">
                        {{ researchById[0].summary }}
                    </p>
                </div>
                <div class="border-b-2 border-indigoNavbarSt">
                    <h2 class="p-7 text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Experimentos
                        Realizados</h2>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4 px-12 pb-12 rounded-lg">
                        <!-- EXPERIMENTOS REALIZADOS -->
                        <Experimentos :experiments="experimentByResearchId" />
                    </div>
                </div>
                <div class="border-b-2 border-indigoNavbarSt">
                    <h2 class="p-7 text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Relatórios</h2>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4 px-12 pb-12 rounded-lg">
                        <!-- RELATÓRIOS -->
                        <Relatorios :reports="reportsByResearchId" />
                    </div>
                </div>
                <div class=" p-7 border-b-2 border-indigoNavbarSt">
                    <!-- RESULTADOS QUANTITATIVOS -->
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Resultados Quantitativos</h2>
                    <QuantityTable :results="resultsCatalog"/>
                </div>
                <div class=" p-7">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Considerações Finais</h2>
                    <p class="pb-5 pt-10 text-white">
                        {{ researchById[0].conclusion }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style>

</style>