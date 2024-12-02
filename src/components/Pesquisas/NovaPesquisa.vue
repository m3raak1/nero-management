<script setup>
import { ref, onMounted } from 'vue';

const teamsCatalog = ref([]);
const usersCatalog = ref([]);

onMounted(async () => {
  const teamsResponse = await fetch('http://localhost:3000/teams');
  const teamsData = await teamsResponse.json();

  teamsCatalog.value = teamsData;

  const usersResponse = await fetch('http://localhost:3000/users');
  const usersData = await usersResponse.json();

  usersCatalog.value = usersData;
});

const inputData = ref({
    title: '',
    team: '',
    startDate: '',
    responsible: '',
    objective: '',
    summaryTitle: '',
    summary: ''
})

const submitResearch = (e) => {
    console.log(inputData.value)
}

</script>

<template>
    <div class="flex-1 h-screen overflow-y-scroll scroll-m-1">
        <section class="px-12 pt-12 text-4xl font-sans">
            <span class="text-transparent bg-silver-gradient bg-clip-text">Nova Pesquisa</span>
        </section>
        <section class="py-8 px-12 flex flex-col items-end">
            <div class="border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt w-full">
                <div class=" p-7">
                    <div class="w-full flex justify-between items-center gap-10">
                        <!-- Titulo da Pesquisa-->
                        <input v-model="inputData.title" :class="['text-xl py-2 px-2 border-b ', inputData.title !== '' ? 'border-borderColor' : 'border-red-600']" type="text" placeholder="Inserir Titulo">
                        <div class="flex gap-10">
                            <!-- Equipe -->
                            <div class="flex items-center gap-2">
                                <label :class="['border-b', inputData.team !== '' ? 'border-transparent' : 'border-red-600']">Equipe</label>
                                <select v-model="inputData.team" class="px-4 py-1 bg-metal-gradient rounded-3xl">
                                    <option class="bg-indigoNavbarBg" v-for="(team, i) in teamsCatalog" :key="i" :value="team.name">{{ team.name }}</option>
                                </select>
                            </div>
                            <!-- Data -->
                            <div class="flex items-center gap-2">
                                <label :class="['border-b', inputData.startDate !== '' ? 'border-transparent' : 'border-red-600']">Data de Inicio</label>
                                <input v-model="inputData.startDate" class="bg-ruby-gradient rounded-2xl px-4 py-1" type="date">
                            </div>
                        </div>
                    </div>
                    <!-- Responsavel-->
                    <div class="my-6">
                        <input v-model="inputData.responsible" :class="['text-lg py-2 px-2 border-b border-borderColor', inputData.responsible !== '' ? 'border-borderColor' : 'border-red-600']" list="users" placeholder="Responsavel">
                        <datalist id="users" placeholder="Responsavel">
                            <option v-for="(user, i) in usersCatalog" :key="i" :value="user.name"></option>
                        </datalist>
                    </div>
                    <!-- Objetivo -->
                    <textarea v-model="inputData.objective" :class="['w-full bg-indigoBackground rounded-2xl p-4 border', inputData.objective !== '' ? 'border-transparent' : 'border-red-600']" rows="5" placeholder="Objetivo da Pesquisa"></textarea>
                    <!-- Titulo Resumo -->
                    <input v-model="inputData.summaryTitle" :class="['text-xl py-2 px-2 my-6 w-2/5 border-b border-borderColor', inputData.summaryTitle !== '' ? 'border-borderColor' : 'border-red-600']" type="text" placeholder="Inserir Titulo do Resumo">
                    <!-- Resumo -->
                    <textarea v-model="inputData.summary" :class="['w-full bg-indigoBackground rounded-2xl p-4 border', inputData.summary !== '' ? 'border-transparent' : 'border-red-600']" rows="5" placeholder="Resumo da Pesquisa"></textarea>
                </div>
            </div>
            <button @click="submitResearch" class=" bg-indigoNavbarBg border border-borderColor rounded-2xl py-2 px-4 font-semibold my-4">
                <span class="text-transparent  bg-emerald-gradient bg-clip-text">Salvar</span>
            </button>
        </section>
    </div>
</template>

<style scoped>
    input, select{
        @apply bg-transparent outline-none
    }

    textarea {
        outline: none;
    }
</style>