<script setup>
import { ref } from 'vue';
import searchIcon from '../assets/img/procurar 1.png'
import SearchBarFilter from './SearchBarFilter.vue';
import Svg from './Svg.vue';

const emit = defineEmits(['search'])
const search = (e) => {
    console.log(Object.entries(computers.value).filter(([key, value]) => value[0] === true)[0]);
    emit('search', {
        value: e.target.value,
        computer: `${Object.entries(computers.value).filter(([key, value]) => value[0] === true).map(([key]) => key)}`
    })
};

const computers = ref({
    alphabetic: [false, "down"],
    time: [true, "down"]
})

const toggleAlphabetic = () => {
    computers.value.time = [false, !computers.value.time[1]]
    computers.value.alphabetic = [true, computers.value.alphabetic[1] === 'down' ? "up" : "down"];
}

const toggleTime = () => {
    computers.value.alphabetic = [false, !computers.value.alphabetic[1]]
    computers.value.time = [true, computers.value.time[1] === 'down' ? "up" : "down"];
}

</script>

<template>
    <form class="flex items-center w-full rounded-full bg-indigoBackground border border-borderColor relative">
        <label class="sr-only">Buscar pesquisas</label>
        <img :src="searchIcon" class=" z-10 pointer-events-none pl-4"/>
        <div class="pl-3 w-full flex items-center justify-between">
            <input type="text" @input="search" class="py-3 pl-1 w-4/6 outline-none rounded-full bg-indigoBackground text-gray-200 text-xl font-sans" placeholder="Buscar">
            <div class="flex items-center px-8 gap-8">
                <span class="relative cursor-pointer" @click="toggleAlphabetic">
                    <Svg name="alphabetical"/>
                    <Svg name="pointer" :class="['absolute -top-2 -right-3 cursor-pointer transition-all', !computers.alphabetic[0] ? 'hidden' : 'block', computers.alphabetic[1] === 'up' ? 'rotate-180' : 'rotate-0']"/>
                </span>
                <span class="relative cursor-pointer" @click="toggleTime">
                    <Svg name="clock"/>
                    <Svg name="pointer" :class="['absolute -top-2 -right-3 cursor-pointer transition-all', !computers.time[0] ? 'hidden' : 'block', computers.time[1] === 'up' ? 'rotate-180' : 'rotate-0']"/>
                </span>
            </div>
        </div>
        <SearchBarFilter />
    </form>
</template>