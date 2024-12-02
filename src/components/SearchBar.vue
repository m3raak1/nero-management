<script setup>
import { ref } from 'vue';
import searchIcon from '../assets/img/procurar 1.png'
import SearchBarFilter from './SearchBarFilter.vue';
import Svg from './Svg.vue';


const emit = defineEmits(['search'])
const search = (e) => {
    emit('search', {
        value: e.target.value,
        order: order.value
    })
};

const order = ref({
    type: 'time',
    direction: 'down'
})

const inputSearch = ref('')
const toggleOrder = (type) => {
    order.value = {
        type: type,
        direction: order.value.direction === 'up' ? "down" : "up"
    }
    search({
        target: {
            value: inputSearch.value
        }
    })
}


</script>

<template>
    <form class="flex items-center w-full rounded-full bg-indigoBackground border border-borderColor relative">
        <label class="sr-only">Buscar pesquisas</label>
        <img :src="searchIcon" class=" z-10 pointer-events-none pl-4"/>
        <div class="pl-3 w-full flex items-center justify-between">
            <input type="text" @input="search" v-model="inputSearch" class="py-3 pl-1 w-4/6 outline-none rounded-full bg-indigoBackground text-gray-200 text-xl font-sans" placeholder="Buscar">
            <div class="flex items-center px-8 gap-8">
                <span class="relative cursor-pointer" @click="toggleOrder('alphabet')">
                    <Svg name="alphabetical"/>
                    <Svg name="pointer" :class="['absolute -top-2 -right-3 cursor-pointer transition-all', order.type === 'alphabet' ? 'block' : 'hidden', order.direction  === 'up' ? 'rotate-180' : 'rotate-0']"/>
                </span>
                <span class="relative cursor-pointer" @click="toggleOrder('time')">
                    <Svg name="clock"/>
                    <Svg name="pointer" :class="['absolute -top-2 -right-3 cursor-pointer transition-all', order.type === 'time' ? 'block' : 'hidden', order.direction === 'up' ? 'rotate-180' : 'rotate-0']"/>
                </span>
            </div>
        </div>
        <SearchBarFilter />
    </form>
</template>