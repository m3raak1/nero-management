<script setup>
import Svg from './Svg.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import Experimentos from './Experimentos.vue';
//Obtém o id desejado
const route = useRoute();
const researchId = Number(route.params.id);
console.log(researchId);
//Obtém resposta de JSON Server
const researchCatalog = ref([]);
const experimentsCatalog = ref([]);
onMounted(async () => {
    const response = await fetch('http://localhost:3000/researchCatalog')
    researchCatalog.value = await response.json();
    const response2 = await fetch('http://localhost:3000/experimentsCatalog')
    experimentsCatalog.value = await response2.json();
})
//Obtém elemento desejado
const researchById = computed(() => {
    return researchCatalog.value.filter((research) =>
        research.researchId === researchId
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
                        <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">{{
                            researchById[0].title }}</h2>
                        <div class="h-auto flex">
                            <span
                                class="text-white flex items-center bg-metal-gradient py-2 px-4 rounded-3xl text-sm">Equipe:
                                Alfa</span>
                            <span
                                class="text-white h-full flex items-center bg-sapphire-gradient px-4 ml-4 rounded-3xl text-sm">Responsável:
                                {{ researchById[0].responsible }}</span>
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
                    <h2 class="p-7 text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">Experimentos Realizados</h2>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4 px-12 pb-12 rounded-lg">
                        <!-- EXPERIMENTOS REALIZADOS -->
                        <Experimentos :experiments="experimentsCatalog" />
                    </div>
                </div>
                <div class=" min-h-64 border-b-2 border-indigoNavbarSt">

                </div>
                <div class=" min-h-64 border-b-2 border-indigoNavbarSt">

                </div>
                <div class=" min-h-64 border-indigoNavbarSt">

                </div>
            </div>
        </section>
    </div>
</template>