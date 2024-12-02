<script setup>
    defineProps({
    results: {
        type: Array,
        required: true
    }
}); 
</script>

<template>
    <table class="border-collapse w-full rounded-md my-6">
        <thead>
            <tr>
                <th>Medição</th>
                <th>Valor</th>
                <th>Unidade</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(result, i) in results" :key="i">
                <td>{{ result.measurement }}</td>
                <td>{{ result.value }}</td>
                <td>{{ result.unit }}</td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
    table * {
        @apply text-start
    }

    td,th {
        @apply border border-borderColor py-2 px-4
    }

    thead {
        background-color: #2B2B2B;
    }

    thead th {
        @apply bg-clip-text text-transparent bg-silver-gradient 
    }

    tbody {
        background-color: #202020;
    }

    tbody td {
        @apply font-light
    }
</style>