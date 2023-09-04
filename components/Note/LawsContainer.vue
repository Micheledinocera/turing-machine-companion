<template>
    <div class="laws-container">
        <div class="law-item" v-for="law in note.laws">
            <div class="key"> {{ law.key }} </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
const note=useNote();

</script>

<style scoped lang="sass">
.laws-container
    width: calc($right-width - 80px)
    padding: 0 40px
</style>