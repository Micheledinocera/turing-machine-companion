<template>
    <div :class="['note-container',{'disabled':gameChecked}]">
        <div class="add-container" v-if="!isNotDesktop">
            <div :class="['add']" @click="addEmptyNote"> {{$t('newNoteRow')}} </div>
        </div>
        <template v-if="isNotDesktop">
            <div class="row fixed with-button" v-if="isFixedRow">
                <CombinationsTable :fixed="true"/>
                <VerificationsChecklist :fixed="true"/>
            </div>
            <div class="row">
                <PossibleCodesPicklist />
            </div>
            <div class="row with-button">
                <CombinationsTable/>
                <VerificationsChecklist/>
            </div>
            <div class="row">
                <LawsContainer />
            </div>
        </template>
        <template v-else>
            <div class="row">
                <CombinationsTable />
                <VerificationsChecklist />
            </div>
            <div class="row">
                <PossibleCodesPicklist />
                <LawsContainer />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">

// const gameCode=ref("");
// const pendingGameInfo=ref(false);
// const { gameInfoOk,gameInfo,getGameInfo }=await useGameInfo();
const note=useNote();
const selectedRowNote=useSelectedRowNote();
// const { t } = useI18n();
const { isNotDesktop }=useDevice();
// const route =useRoute();
const { isFixedRow } = useFixedRow();
// const showModal=useShowModal();
// const modalType=useModalType();
const gameChecked=useGameChecked();

onMounted(()=>{

})

const addEmptyNote=()=>{
    note.value.noteRows=[...note.value.noteRows,structuredClone(EMPTY_NOTE_ROW)];
    selectedRowNote.value=note.value.noteRows.length-1;
}

// const getInfo=async ()=>{
//     pendingGameInfo.value=true;
//     await getGameInfo(gameCode.value)
//     pendingGameInfo.value=false;
//     gameCode.value='';
// }

// const buttonLabel=computed(()=>{
//     if(gameInfoOk.value === null || gameCode.value.length>0)
//         return t('getInfo')
//     return gameInfoOk.value?t('ok'):t('ko')
// })

// if(route.query.code){
//     gameCode.value=route.query.code as string;
//     await getInfo();
// }

</script>

<style scoped lang="sass">
.note-container 
    margin-top: 10px
    &.disabled
        pointer-events: none
        opacity: 0.5
    .add-container
        display: flex
        height: calc($base-height/2)
        margin: 10px
        .game-info-container
            margin: auto
            text-align: center
            .create-game
                background-color: $primary-color
                border-radius: 8px
                color: white
                cursor: pointer
                font-size: 22px
                padding: 8px 10px
                font-weight: 600
            .oppure
                margin: 10px 0
        .game-info
            display: flex
            margin: auto
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
            .game-code
                width: fit-content
                color: white
                font-weight: 700
                cursor: pointer
                background-color: $primary-color-dark
                padding: 6px 8px
                border-radius: 8px
        .add
            margin: auto
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
        &:last-child
            margin-bottom: 80px
            @media (max-width: $breakpoint-tablet)
                display: block
        &.fixed
            position: fixed
            width: 100%
            height: $base-height*2
            z-index: 1
            top:$base-height
            background-color: $primary-color-light 
        &.with-button
            padding-bottom: 40px
    .splash-screen
        height: calc(100vh - 160px)
        @include background-standard
        background-image: url('~/assets/imgs/box.png')
        &.loading
            @include loading-pulse
</style>