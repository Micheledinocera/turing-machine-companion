<template>
    <div class="header">
        <div class="info" @click="()=>{showModal=true;modalType=MODAL_TYPES.credits}"/>
        <div class="refresh" @click="()=>{showModal=true;modalType=MODAL_TYPES.newGame}"/>
        <div class="logo">
            <div class="companion"> COMPANION </div>
        </div>
        <div class="select-container">
            <select class="game-mode" v-model="gameDifficulty" @change="newGame">
                <option v-for="gameMode in gameModes" :value="gameMode"> {{ $t(gameModeLabel(gameMode)) }} </option>
            </select> 
            <select v-model="$i18n.locale">
                <option v-for="language in LANGUAGES" :value="language.iso"> {{ language.label }} </option>
            </select> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { gameModes } from '#imports';

const showModal=useShowModal();
const modalType=useModalType();
const gameDifficulty=useGameDifficulty();
const note=useNote();
const selectedRowNote=useSelectedRowNote();

const gameModeLabel=(gameMode:gameModes) :string=>{
    if(gameMode===gameModes.classic)
        return "classic"
    if(gameMode===gameModes.extreme)
        return "extreme"
    if(gameMode===gameModes.nightmare)
        return "nightmare"
    return ""
}
   
const newGame=()=>{
    note.value=structuredClone(EMPTY_NOTE);
    selectedRowNote.value=0;
}

</script>

<style scoped lang="sass">
.header
    @include header-row
    display: flex
    .select-container
        position: absolute
        right: 10px
        display: flex
        @media (max-width: $breakpoint-mobile)
            flex-wrap: wrap
            width: 22%
            select.game-mode
                margin-bottom: 10px
        select
            border: none
            cursor: pointer
            &.game-mode
                margin-right: 10px
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
