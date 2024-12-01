<script setup>
import Sidebar from './components/Sidebar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex min-h-screen bg-indigoBackground">
    <Sidebar />
    <RouterView />
  </div>
</template>