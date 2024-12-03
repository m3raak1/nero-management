<script setup>
import Svg from '../Svg.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
//Obtém o id desejado
const route = useRoute();
const reportId = Number(route.params.id);
//Obtém resposta de JSON Server
const reportsCatalog = ref([]);
onMounted(async () => {
    const response = await fetch('http://localhost:3000/reportsCatalog')
    const reportJson = await response.json();

    for (let element of reportJson) {
        const responsibleResponse = await fetch(`http://localhost:3000/users?userId=${element.responsible}`);
        const responsibleArray = await responsibleResponse.json();
        element.responsible = responsibleArray[0]

        const teamResponse = await fetch(`http://localhost:3000/teams?teamId=${element.team}`);
        const teamArray = await teamResponse.json();
        element.team = teamArray[0]
    }
    reportsCatalog.value = reportJson;
})
//Obtém elemento desejado
const reportById = computed(() => {
    return reportsCatalog.value.filter((research) =>
        research.reportId === reportId
    );
});
</script>

<template>
    <div class="flex-1 h-screen overflow-y-scroll scroll-m-1">
        <section class="px-12 pt-12 text-4xl font-sans">
            <span class="text-transparent bg-silver-gradient bg-clip-text">Pesquisas</span>
        </section>
        <section class="py-8 px-12">
            <div v-if="reportById.length > 0" class="  border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt">
                <!-- Titulo/Primeira Sessão -->
                <div class=" p-7">
                    <div class="flex justify-between">
                        <h2 class="text-3xl text-transparent bg-red-gradient bg-clip-text font-bold">{{
                            reportById[0].reportTitle }}</h2>
                        <div class="h-auto flex">
                            <span
                                class="text-white h-full flex items-center bg-sapphire-gradient px-4 ml-4 rounded-3xl text-sm">Responsável:
                                {{ reportById[0].responsible.name }}</span>
                            <span
                                class="text-white flex items-center justify-between bg-ruby-gradient py-2 px-4 rounded-3xl text-sm">
                                <p class="my-auto">{{ reportById[0].reportDate }}</p> <Svg name="date"
                                    class="ml-2 -mt-1" />
                            </span>
                        </div>
                    </div>
                    <h2 class=" pt-2 text-xl text-transparent bg-light-red-gradient bg-clip-text font-bold">{{
                            reportById[0].reportSubtitle }}</h2>
                    <p class="pt-10 text-white">
                        {{ reportById[0].reportGoal }}
                    </p>
                </div>
                <!-- Resumo/Segunda Sessão -->
                <div class=" p-7 border-t border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Introdução</h2>
                    <p class="pb-5 pt-10 text-white">
                        {{ reportById[0].reportIntroduction }}
                    </p>
                </div>
                <!-- CONCLUSÃO -->
                <div v-if="reportById[0].reportConclusion" class=" p-7 border-t border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Conclusão
                    </h2>
                    <p class="pb-5 pt-10 text-white">
                        {{ reportById[0].reportConclusion }}
                    </p>
                </div>
                <!-- REFERÊNCIAS -->
                <div v-if="reportById[0].reportConclusion" class=" p-7 border-t border-indigoNavbarSt">
                    <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Referências
                    </h2>
                </div>
            </div>
        </section>
    </div>
</template>

<style></style>