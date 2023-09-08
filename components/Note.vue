<template>
    <div class="note-container">
        <div class="add-container">
            <div class="game-info">
                <input type="text" :placeholder="t('gameCode')" v-model="gameCode">
                <div class="loader-container" v-if="pendingGameInfo"> <Loader/> </div>
                <div :class="['get-info',{inactive:gameCode==''},{error:!gameInfoOk}]" @click="getInfo" v-else> {{buttonLabel}} </div>
            </div>
            <div :class="['add',{inactive:inactive}]" @click="addEmptyNote"> {{t('newNoteRow')}} </div>
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
const gameCode=ref("");
const pendingGameInfo=ref(false);
const gameInfo=useGameInfo();
const { getGameInfo }=await useGetGameInfo();
const note=useNote();
const gameInfoOk=useGameInfoOk();
const selectedRowNote=useSelectedRowNote();
const { t } = useI18n();

const inactive=computed(()=>
    note.value.noteRows.some(row=>row.verificators.filter(verificator=>verificator!==null).length<3)
)

const addEmptyNote=()=>{
    note.value.noteRows=[...note.value.noteRows,structuredClone(EMPTY_NOTE_ROW)];
    selectedRowNote.value=note.value.noteRows.length-1;
}

const getInfo=async ()=>{
    gameInfoOk.value=null;
    pendingGameInfo.value=true;
    gameInfo.value=(await getGameInfo(gameCode.value)).value;
    pendingGameInfo.value=false;
    if(gameInfo.value?.status=='bad') gameInfoOk.value=false
    else gameInfoOk.value=true
    gameCode.value='';
}

const buttonLabel=computed(()=>{
    if(gameInfoOk.value === null || gameCode.value.length>0)
        return t('getInfo')
    return gameInfoOk.value?t('ok'):t('ko')
})

</script>

<style scoped lang="sass">
.note-container 
    margin-top: 10px
    .add-container
        display: flex
        height: calc($base-height/2)
        margin: 10px
        .game-info
            display: flex
            input
                width: 80px
            .loader-container
                display: flex
                align-items: center
                margin-left: 10px
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
                &.inactive
                    opacity: 0.5
                    pointer-events: none
                    &.error
                        background-color: $red
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
        &:last-child
            margin-bottom: 80px
</style>