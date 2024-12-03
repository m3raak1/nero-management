<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import QuantityTable from '../QuantityTable.vue';

const route = useRoute();
const experimentId = Number(route.params.id);

const experiment = ref({})

onMounted(async () => {
    const experimentResponse = await fetch(`http://localhost:3000/experimentsCatalog?experimentId=${experimentId}`)
    const experimentArrayJson = await experimentResponse.json();
    const experimentJson = experimentArrayJson[0]

    const researchResponse = await fetch(`http://localhost:3000/researchCatalog?researchId=${experimentId}`)
    const researchArrayJson = await researchResponse.json();

    experimentJson.research = researchArrayJson[0];

    const userResponse = await fetch(`http://localhost:3000/users?userId=${experimentId}`)
    const userArrayJson = await userResponse.json();

    experimentJson.responsible = userArrayJson[0];

    const teamResponse = await fetch(`http://localhost:3000/teams?teamId=${experimentId}`)
    const teamArrayJson = await teamResponse.json();

    experimentJson.team = teamArrayJson[0];

    experiment.value = experimentJson;
    console.log(experiment.value)
})

</script>

<template>
    <div class="flex-1 h-screen overflow-y-scroll scroll-m-1 relative" v-if="experiment.research && experiment.responsible && experiment.team">
        
        <section class="px-12 pt-12 text-4xl font-sans">
            <span class="text-transparent bg-silver-gradient bg-clip-text">Experimento</span>
        </section>
        <section class="py-8 px-12">
            
            <div
                class="  border rounded-b-3xl rounded-tl-3xl bg-indigoNavbarBg border-indigoNavbarSt relative">
                <div class="absolute bg-indigoNavbarBg bottom-full right-0 p-3 rounded-t-2xl border border-borderColor">
                    <p class="bg-clip-text text-transparent bg-silver-gradient">{{ experiment.research.title }}</p>
                </div>
                <!-- Titulo/Primeira Sessão -->
                <div class=" p-7">
                    <div class="flex justify-between">
                        <h2 class="text-3xl text-transparent bg-red-gradient bg-clip-text font-bold">
                            {{ experiment.experimentTitle }}</h2>
                    </div>
                    <p class="pt-10 text-white">
                        {{ experiment.objective }}
                    </p>
                    <div class="pt-10 flex justify-between text-white">
                        <div class="flex items-center gap-2">
                            <p>Data de inicio </p>
                            <span
                                class="text-white flex items-center justify-between bg-ruby-gradient py-2 px-4 rounded-3xl text-sm">
                                <p class="my-auto">{{ experiment.startDate }}</p> <Svg name="date"
                                    class="ml-2 -mt-1" />
                            </span>
                        </div>
                        <div class="h-auto flex">
                            <span
                                class="text-white flex items-center bg-metal-gradient py-2 px-4 rounded-3xl text-sm">Equipe:
                                {{ experiment.team.name }}</span>
                            <span
                                class="text-white h-full flex items-center bg-sapphire-gradient px-4 ml-4 rounded-3xl text-sm">Responsável:
                                {{ experiment.responsible.name }}</span>
                            <span
                                class="text-white h-full flex items-center bg-emerald-gradient px-4 ml-4 rounded-3xl text-sm">Status:
                                {{ String(experiment.status).charAt(0).toUpperCase() +
                                    String(experiment.status).slice(1)
                                }}</span>
                        </div>
                    </div>
                </div>
                <!-- Protocolo/Segunda Sessão -->
                <div class=" p-7 border-t border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold mb-6">Protocolo</h2>
                    <div class="bg-indigoButtomColor p-6 rounded-2xl">
                        <h2 class="text-transparent bg-clip-text bg-silver-gradient font-semibold">1. Meteriais Necessários</h2>
                        <ul class="px-4">
                            <li v-for="(element, i) in experiment.protocol.materials" key="i" class="font-light">➝ {{ element }}</li>
                        </ul>
                    </div>
                    <div class="bg-indigoButtomColor p-6 rounded-2xl my-6">
                        <h2 class="text-transparent bg-clip-text bg-silver-gradient font-semibold">2. Procedimentos Passo a Passo:</h2>
                        <ul class="px-4">
                            <li v-for="(element, i) in experiment.protocol.procedures" key="i" class="font-light"> {{(i + 1) + ". " + element }}</li>
                        </ul>
                    </div>
                    <div class="bg-indigoButtomColor p-6 rounded-2xl">
                        <h2 class="text-transparent bg-clip-text bg-silver-gradient font-semibold">3. Medições e Ferramentas:</h2>
                        <ul class="px-4">
                            <li v-for="(element, i) in experiment.protocol.measurementsAndTools" key="i" class="font-light">➝ {{ element }}</li>
                        </ul>
                    </div>
                </div>

                <!-- Variáveis -->
                <div class=" p-7 border-t border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold mb-6">Variáveis</h2>
                    <div class="bg-indigoButtomColor p-6 rounded-2xl">
                        <h2 class="text-transparent bg-clip-text bg-silver-gradient font-semibold">Independentes</h2>
                        <ul class="px-4">
                            <li v-for="(element, i) in experiment.variables.independent" key="i" class="font-light">➝ {{ element }}</li>
                        </ul>
                    </div>
                    <div class="bg-indigoButtomColor p-6 rounded-2xl my-6">
                        <h2 class="text-transparent bg-clip-text bg-silver-gradient font-semibold">Dependentes</h2>
                        <ul class="px-4">
                            <li v-for="(element, i) in experiment.variables.dependents" key="i" class="font-light">➝ {{ element }}</li>
                        </ul>
                    </div>
                    <div class="bg-indigoButtomColor p-6 rounded-2xl">
                        <h2 class="text-transparent bg-clip-text bg-silver-gradient font-semibold">Controladas</h2>
                        <ul class="px-4">
                            <li v-for="(element, i) in experiment.variables.controlled" key="i" class="font-light">➝ {{ element }}</li>
                        </ul>
                    </div>
                </div>
                
                <!-- RESULTADOS QUANTITATIVOS -->
                <div class=" p-7 border-t border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Resultados Quantitativos</h2>
                    <QuantityTable :results="experiment.results"/>
                </div>
                <!-- Observações-->
                <div class=" p-7 border-t border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold mb-6">Observações</h2>
                    <div v-for="(element, i) in experiment.observations" :key="i" class="bg-indigoButtomColor px-6 py-3 my-6 rounded-2xl">
                        <p>● {{ element }}</p>
                    </div>
                </div>
                <!-- CONCLUSÃO -->
                <div v-if="experiment.conclusion" class=" p-7 border-t border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Considerações Finais</h2>
                    <p class="pb-5 pt-10 text-white">
                        {{ experiment.conclusion }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style>

</style>