<script setup>
import Pesquisa from '@/components/Pesquisa.vue';
import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
    <div class="flex-1">
        <section class="px-12 pt-12 text-white text-4xl font-sans">
            <span>Pesquisas</span>
        </section>
        <!-- Aba de pesquisas -->
        <section class="py-8 px-12">
            <div class=" border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt">
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-12 rounded-lg">
                    <SearchBar />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-12 rounded-lg">
                    <Pesquisa />
                </div>
            </div>
        </section>
    </div>
</template>