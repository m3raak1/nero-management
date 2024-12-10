<script setup>
import { ref, onMounted, inject } from 'vue';
import Svg from '../Svg.vue';

const props = defineProps({
    filters: Object
})

console.log(props.filters)

const dataFilter = ref({
    users: [],
    research: [],
});
onMounted(async () => {
  const usersResponse = await fetch('http://localhost:3000/users');
  dataFilter.value.users = await usersResponse.json()

  const researchResponse = await fetch('http://localhost:3000/researchCatalog');
  dataFilter.value.research= await researchResponse.json();
});

const active = ref(false);

const toggleFilter = () => {
    active.value = !active.value;
};


const sendFilter = inject("sendFilter")

const sendData = (event) => {
    if (sendFilter) {
        sendFilter(event.target.name, event.target.value)
    }
}

</script>

<template>
  <div class="absolute -translate-x-1/2 left-1/2 top-full z-10 flex items-center flex-col w-5/6 h-[300%] overflow-clip pointer-events-none">
    <div
      :class="[
        'w-full bg-indigoBackground border-borderColor border p-4 rounded-b-2xl absolute transition-transform duration-300 pointer-events-auto',
        active ? 'translate-y-0' : '-translate-y-full'
      ]"
    >
      <h2 class="text-transparent bg-clip-text bg-silver-gradient text-xl font-semibold">Filtros</h2>
      <div class="w-full flex gap-10 my-3">
        <div v-if="!(filters.team === undefined)">
          <label for="">Equipe: </label>
          <select
            name="team"
            class="outline-none bg-transparent border-borderColor border rounded-2xl py-1 px-2"
            @change="sendData"
          >
            <option value="" class="bg-indigoBackground">Desligado</option>
            <option v-for="(el, i) in dataFilter.teams" :value="el.name" class="bg-indigoBackground">{{ el.name }}</option>
          </select>
        </div>
        <div v-if="!(filters.responsible === undefined)">
          <label for="">Responsável: </label>
          <select
            name="responsible"
            class="outline-none bg-transparent border-borderColor border rounded-2xl py-1 px-2"
            @change="sendData"
          >
            <option value="" class="bg-indigoBackground">Desligado</option>
            <option v-for="(el, i) in dataFilter.users" :value="el.name" class="bg-indigoBackground">{{ el.name }}</option>
          </select>
        </div>
      </div>
      <div v-if="!(filters.research === undefined)">
          <label for="">Pesquisa: </label>
          <select
            name="research"
            class="outline-none bg-transparent border-borderColor border rounded-2xl py-1 px-2 w-1/4"
            @change="sendData"
          >
            <option value="" class="bg-indigoBackground">Desligado</option>
            <option v-for="(el, i) in dataFilter.research" :value="el.title" class="bg-indigoBackground">{{ el.title }}</option>
          </select>
        </div>
    </div>
  </div>

  <span
    :class="[
      'absolute bg-indigoBackground px-2 py-3 rounded-b-2xl border-borderColor border-b border-x hover:cursor-pointer z-20 -translate-x-1/2 left-1/2 transition-transform duration-300',
      !active ? 'translate-y-[100%]' : 'translate-y-[460%]'
    ]"
    @click="toggleFilter"
  >
    <Svg name="down-pointer" :class="['transition-all', active ? 'rotate-180' : 'rotate-0']" />
  </span>
</template>
