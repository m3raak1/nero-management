<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const teamsCatalog = ref([]);
const usersCatalog = ref([]);

onMounted(async () => {
  // Fetching teams and users data on component mount
  const teamsResponse = await fetch('http://localhost:3000/teams');
  const teamsData = await teamsResponse.json();
  teamsCatalog.value = teamsData;

  const usersResponse = await fetch('http://localhost:3000/users');
  const usersData = await usersResponse.json();
  usersCatalog.value = usersData;
});

const inputData = ref({
    title: 'Algum Ai',
    team: 'Alfa',
    startDate: '',
    responsible: 'Ayla Nogueira',
    objective: 'algum ai',
    summaryTitle: 'algum ai',
    summary: 'algum ai'
});

const tried = ref(false);

async function postData(data = {}) {
    console.log("Enviando dados:", JSON.stringify(data));
    const response = await fetch('http://localhost:3000/researchCatalog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

const transformObj = async (obj) => {
    const newObj = {
        researchId: 0,
        title: obj.title,
        objective: obj.objective,
        summary: obj.summary,
        responsible: 0,
        team: 0,
        startDate: obj.startDate,
        endDate: null,
        status: "Em andamento",
        conclusion: ''
    };

    // Get the total number of research items (to set researchId)
    const response = await fetch('http://localhost:3000/researchCatalog');
    const data = await response.json();
    newObj.researchId = data.length + 1; // Number of items in the researchCatalog

    // Fetch user data to get responsible userId
    const response2 = await fetch(`http://localhost:3000/users?name=${obj.responsible}`);
    const data2 = await response2.json();
    if (data2.length > 0) {
        newObj.responsible = data2[0].userId;
    } else {
        console.error("User not found");
    }

    // Fetch team data to get teamId
    const response3 = await fetch(`http://localhost:3000/teams?name=${obj.team}`);
    const data3 = await response3.json();
    if (data3.length > 0) {
        newObj.team = data3[0].teamId;
    } else {
        console.error("Team not found");
    }

    return newObj;
};

// Submit research data
const submitResearch = async (e) => {
    tried.value = true;
    // Check if any of the inputData fields are empty
    if (Object.values(inputData.value).includes('')) {
        console.error("Por favor, preencha todos os campos.");
        return;
    }
    
    // Transform the inputData object
    const transformedData = await transformObj(inputData.value);
    
    // Send the transformed data to the server
    const result = await postData(transformedData);
    console.log("Dados enviados com sucesso:", result);
};
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
                        <input v-model="inputData.title" :class="['text-xl py-2 px-2 border-b ', inputData.title === '' && tried ? 'border-red-700' : 'border-transparent']" type="text" placeholder="Inserir Titulo">
                        <div class="flex gap-10">
                            <!-- Equipe -->
                            <div class="flex items-center gap-2">
                                <label :class="['border-b', inputData.team === '' && tried ? 'border-red-700' : 'border-transparent']">Equipe</label>
                                <select v-model="inputData.team" class="px-4 py-1 bg-metal-gradient rounded-3xl">
                                    <option class="bg-indigoNavbarBg" v-for="(team, i) in teamsCatalog" :key="i" :value="team.name">{{ team.name }}</option>
                                </select>
                            </div>
                            <!-- Data -->
                            <div class="flex items-center gap-2">
                                <label :class="['border-b', inputData.startDate === '' && tried ? 'border-red-700' : 'border-transparent']">Data de Inicio</label>
                                <input v-model="inputData.startDate" class="bg-ruby-gradient rounded-2xl px-4 py-1" type="date">
                            </div>
                        </div>
                    </div>
                    <!-- Responsavel-->
                    <div class="my-6">
                        <input v-model="inputData.responsible" :class="['text-lg py-2 px-2 border-b border-borderColor', inputData.responsible === '' && tried ? 'border-red-700' : 'border-transparent']" list="users" placeholder="Responsavel">
                        <datalist id="users" placeholder="Responsavel">
                            <option v-for="(user, i) in usersCatalog" :key="i" :value="user.name"></option>
                        </datalist>
                    </div>
                    <!-- Objetivo -->
                    <textarea v-model="inputData.objective" :class="['w-full bg-indigoBackground rounded-2xl p-4 border', inputData.objective === '' && tried ? 'border-red-700' : 'border-transparent']" rows="5" placeholder="Objetivo da Pesquisa"></textarea>
                    <!-- Titulo Resumo -->
                    <input v-model="inputData.summaryTitle" :class="['text-xl py-2 px-2 my-6 w-2/5 border-b border-borderColor', inputData.summaryTitle === '' && tried ? 'border-red-700' : 'border-transparent']" type="text" placeholder="Inserir Titulo do Resumo">
                    <!-- Resumo -->
                    <textarea v-model="inputData.summary" :class="['w-full bg-indigoBackground rounded-2xl p-4 border', inputData.summary === '' && tried ? 'border-red-700' : 'border-transparent']" rows="5" placeholder="Resumo da Pesquisa"></textarea>
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