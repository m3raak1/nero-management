<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
//Obtém o id desejado
const route = useRoute();
const researchId = Number(route.params.id);
console.log(researchId);
//Obtém resposta de JSON Server
const researchCatalog = ref([]);
onMounted(async () => {
    const response = await fetch('http://localhost:3000/researchCatalog')
    researchCatalog.value = await response.json();
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
        <section class="px-12 pt-12 text-white text-4xl font-sans">
            <span>Pesquisas: {{ $route.params.id }}</span>
        </section>
        <section class="py-8 px-12">
            <div class=" min-h-screen border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt">
                <div class=" p-7 min-h-64 border-b-2 border-indigoNavbarSt">
                    <div v-if="researchById.length > 0" class="flex justify-between">
                        <h2 class="text-2xl text-transparent bg-red-gradient bg-clip-text font-bold">{{
                            researchById[0].title }}</h2>
                        <div class="h-auto flex">
                            <span
                                class="text-white h-full flex items-center bg-sapphire-gradient px-4 rounded-3xl text-sm">Responsável:
                                {{ researchById[0].responsible }}</span>
                            <span
                                class="text-white h-full flex items-center bg-emerald-gradient px-4 ml-4 rounded-3xl text-sm">Status:
                                {{ String(researchById[0].status).charAt(0).toUpperCase() +
                                    String(researchById[0].status).slice(1)
                                }}</span>
                        </div>
                    </div>
                </div>
                <div class=" min-h-64 border-b-2 border-indigoNavbarSt">

                </div>
                <div class=" min-h-64 border-b-2 border-indigoNavbarSt">

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