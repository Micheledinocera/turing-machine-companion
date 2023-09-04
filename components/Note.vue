<template>
    <div class="note-container">
        <div class="add-container">
            <div class="game-info">
                <input type="text" placeholder="Game Code" v-model="gameCode">
                <Loader v-if="pendingGameInfo" />
                <div class="get-info" @click="getInfo" v-else> {{buttonLabel}} </div>
            </div>
            <div :class="['add',{inactive:inactive}]" @click="addEmptyNote"> New Note Row </div>
        </div>
        <div class="row">
            <CombinationsTable />
            <VerificationsChecklist />
        </div>
        <div class="row">
            <PossibleCodesPicklist />
            <LawsContainer />
        </div>
    </div>
</template>

<script setup lang="ts">
import { GameInfo } from '~/composables/gameInfo';

const gameCode=ref("");
const pendingGameInfo=ref(false);
let gameInfo=ref(null) as Ref<GameInfo|null>;
const { getGameInfo }=await useGameInfo();
const note=useNote();
const gameInfoOk=useGameInfoOk();
const selectedRowNote=useSelectedRowNote();

const inactive=computed(()=>
    note.value.noteRows.some(row=>row.verificators.filter(verificator=>verificator!==null).length<3)
)

const addEmptyNote=()=>{
    note.value.noteRows=[...note.value.noteRows,structuredClone(EMPTY_NOTE_ROW)];
    selectedRowNote.value=note.value.noteRows.length-1;
}

const getInfo=async ()=>{
    // B5GXSX
    pendingGameInfo.value=true;
    gameInfo=await getGameInfo(gameCode.value) as Ref<GameInfo|null>;
    pendingGameInfo.value=false;
    if(gameInfo.value?.status=='bad') gameInfoOk.value=false
    else gameInfoOk.value=true
    gameCode.value='';
}

const buttonLabel=computed(()=>{
    if(gameInfoOk.value === null)
        return 'GET INFO'
    return gameInfoOk.value?'OK':'KO'
})

</script>

<style scoped lang="sass">
.note-container 
    margin-top: 10px
    .add-container
        display: flex
        height: calc($base-height/2)
        margin: auto 10px
        .game-info
            display: flex
            input
                width: 70px
            .get-info
                margin-left: 10px
                width: fit-content
                color: white
                font-weight: 700
                cursor: pointer
                background-color: $primary-color
                padding: 6px 8px
                border-radius: 8px
                &:hover
                    background-color: $primary-color-dark
        .add
            margin-left: auto
            width: fit-content
            color: white
            font-weight: 700
            cursor: pointer
            background-color: $primary-color
            padding: 6px 8px
            border-radius: 8px
            &:hover
                background-color: $primary-color-dark
            &.inactive
                opacity: 0.5
                pointer-events: none
    .row
        display: flex
        @media (max-width: $breakpoint-tablet)
            display: block
</style>