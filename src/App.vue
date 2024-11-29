<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Pesquisas from '@/components/Pesquisas.vue';
</script>

<template>
  <div class="flex min-h-screen bg-indigoBackground">
    <Sidebar />
    <Pesquisas />
  </div>
  <Resultado />
</template>