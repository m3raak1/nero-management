<script setup>
    import { defineAsyncComponent } from 'vue';
    const props = defineProps({
        name:{
            type: String,
            required: true
        }
    })

    const element = defineAsyncComponent(() =>
        import(`../assets/svg/sidebar/${props.name}.svg`)
    )
</script>

<template>
    <component v-bind:is="element"/>
</template>