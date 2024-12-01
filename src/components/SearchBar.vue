<script setup>
import searchIcon from '../assets/img/procurar 1.png'
import Svg from './Svg.vue';

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
        <div class="absolute -translate-x-1/2 left-1/2  top-full z-10 flex items-center flex-col w-5/6 h-full">
            <div class="w-full bg-indigoBackground border-borderColor border-2 p-4 rounded-b-2xl">
                <h2 class="text-transparent bg-clip-text bg-silver-gradient text-xl font-semibold">Filtros</h2>
                <label for="">Equipe</label>
                <input type="search">
            </div>
            <Svg name="down-pointer" class="justify-self-auto my-3 absolute top-full"/>
        </div>
    </form>
</template>