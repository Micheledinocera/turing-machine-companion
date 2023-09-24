<template>
    <div :class="['label',{inactive:inactive}]" @click="()=>inactive=!inactive"> {{ value }} </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string,
}>()

const inactive=ref(false)

</script>

<style scoped lang="sass">
.label
    color: $primary-color-dark
    width: 30%
    margin: auto
    &.inactive
        opacity: 0.5
</style>