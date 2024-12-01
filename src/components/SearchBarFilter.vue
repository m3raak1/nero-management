<script setup>
import Svg from './Svg.vue';
</script>

<template>
    <div class="absolute -translate-x-1/2 left-1/2  top-full z-10 flex items-center flex-col w-5/6 h-full">
        <div class="w-full bg-indigoBackground border-borderColor border-2 p-4 rounded-b-2xl">
            <h2 class="text-transparent bg-clip-text bg-silver-gradient text-xl font-semibold">Filtros</h2>
            <div class="w-full flex gap-10 my-3">
                <div>
                    <label for="">Equipe: </label>
                    <select name="" id="" class="outline-none bg-transparent border-borderColor border rounded-2xl py-1 px-2">
                        <option value="1" class="bg-indigoBackground">Desligado</option>
                        <option value="1" class="bg-indigoBackground">Alfa</option>
                        <option value="1" class="bg-indigoBackground">Vita</option>
                        <option value="1" class="bg-indigoBackground">Gama</option>
                    </select>
                </div>
                
                <div>
                    <label for="">Responsável: </label>
                    <select name="" id="" class="outline-none bg-transparent border-borderColor border rounded-2xl py-1 px-2">
                        <option value="1" class="bg-indigoBackground">Desligado</option>
                        <option value="1" class="bg-indigoBackground">Dr. Toninho Ferreira</option>
                        <option value="1" class="bg-indigoBackground">Dr. Guilherme Magarão</option>
                        <option value="1" class="bg-indigoBackground">Dra. Beatriz Calado</option>
                    </select>
                </div>
            </div>
            
        </div>
        <span class="absolute top-[220%] bg-indigoBackground px-2 py-3 rounded-b-2xl border-borderColor border-b border-x hover:cursor-pointer">
            <Svg name="down-pointer"/>
        </span>
    </div>
</template>