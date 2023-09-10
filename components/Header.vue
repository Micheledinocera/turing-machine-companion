<template>
    <div class="header">
        <select v-model="$i18n.locale">
            <option v-for="language in LANGUAGES" :value="language.iso"> {{ language.label }} </option>
        </select> 
        <div class="info" @click="()=>{showModal=true;modalType=MODAL_TYPES.credits}"/>
        <div class="refresh" @click="()=>{showModal=true;modalType=MODAL_TYPES.newGame}"/>
        <div class="logo">
            <div class="companion"> COMPANION </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const showModal=useShowModal();
const modalType=useModalType();
</script>

<style scoped lang="sass">
.header
    @include header-row
    display: flex
    select
        position: absolute
        right: 10px
        border: none
        cursor: pointer
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
    .info,.refresh
        @include background-standard
        background-image: url('~/assets/imgs/info.svg')
        width: 20px
        height: 20px
        position: absolute
        margin-left: 20px
        cursor: pointer
    .refresh
        margin-left: 60px
        background-image: url('~/assets/imgs/refresh.svg')
</style>
