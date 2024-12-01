<script setup>
import searchIcon from '../assets/img/procurar 1.png'
import SearchBarFilter from './SearchBarFilter.vue';

const emit = defineEmits(['search'])
const search = (e) => {
    console.log(e.target.value);
    emit('search', e.target.value)
};

</script>

<template>
    <form class="flex items-center w-full rounded-full bg-indigoBackground border border-borderColor relative">
        <label class="sr-only">Buscar pesquisas</label>
        <img :src="searchIcon" class=" z-10 pointer-events-none pl-4"/>
        <div class="pl-3 w-full">
            <input type="text" @input="search" class="py-3 pl-1 w-full outline-none rounded-full bg-indigoBackground text-gray-200 text-xl font-sans" placeholder="Buscar">
        </div>
        <SearchBarFilter />
    </form>
</template>