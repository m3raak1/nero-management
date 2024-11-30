<script setup>
import Pesquisa from '@/components/Pesquisa.vue';
import SearchInput from 'vue-search-input';
</script>

<template>
    <div class="flex-1">
        <section class="px-12 pt-12 text-white text-4xl font-sans">
            <span>Pesquisas</span>
        </section>
        <!-- Developers and Employers -->
        <section class="py-8 px-12">
            <div class=" border rounded-3xl bg-indigoNavbarBg border-indigoNavbarSt">
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-12 rounded-lg">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 p-12 rounded-lg">
                    <Pesquisa />
                </div>
            </div>
        </section>
    </div>
</template>