<template>
    <div class="header">
        <div class="logo" @click="showModal=true">
            <div class="companion"> COMPANION </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const showModal=useShowModal();
</script>

<style scoped lang="sass">
.header
    @include header-row
    display: flex
    .logo
        @include background-standard
        background-image: url('~/assets/imgs/logo.png')
        width: auto
        height: 100%
        margin: auto
        cursor: pointer
        .companion
            font-weight: 700
            color: white
            background-color: $red
            padding: 0 6px
            border-radius: 8px
            font-size: 12px
            transform: rotate(-30deg)
            margin-top: 30px
            margin-left: 60px
</style>
