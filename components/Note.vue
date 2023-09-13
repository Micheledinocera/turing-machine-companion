<template>
    <div class="note-container">
        <div class="add-container">
            <div class="game-info" v-if="!gameInfoOk && !pendingGameInfo">
                <input type="text" :placeholder="t('gameCode')" v-model="gameCode" @keydown.enter="getInfo">
                <div class="loader-container" v-if="pendingGameInfo"> <Loader/> </div>
                <div :class="['get-info',{inactive:gameCode==''},{error:!gameInfoOk}]" @click="getInfo" v-else> {{buttonLabel}} </div>
            </div>
            <div class="game-info" v-else-if="gameInfoOk">
                <div class="game-code" @click="copyCode"> {{ t('gameCode') }}: {{ gameInfo?.hash.replace(/\s/g, '') }} </div>
            </div>
            <div :class="['add',{inactive:inactive}]" @click="addEmptyNote" v-if="gameInfoOk"> {{t('newNoteRow')}} </div>
        </div>
        <template v-if="gameInfoOk">
            <template v-if="isNotDesktop">
                <div class="row fixed" v-if="isFixedRow">
                    <CombinationsTable :fixed="true"/>
                    <VerificationsChecklist :fixed="true"/>
                </div>
                <div class="row">
                    <PossibleCodesPicklist />
                </div>
                <div class="row">
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
        </template>
        <template v-else>
            <div :class="['splash-screen',{'loading':pendingGameInfo}]"></div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useNotification } from "@kyvg/vue3-notification";

const gameCode=ref("");
const pendingGameInfo=ref(false);
const { gameInfoOk,gameInfo,getGameInfo }=await useGameInfo();
const note=useNote();
const selectedRowNote=useSelectedRowNote();
const { t } = useI18n();
const { notify }  = useNotification();
const { isNotDesktop }=useDevice();
const {isFixedRow} = useFixedRow();

const inactive=computed(()=>
    note.value.noteRows.some(row=>row.verificators.filter(verificator=>verificator!==null).length<3)
)

const addEmptyNote=()=>{
    note.value.noteRows=[...note.value.noteRows,structuredClone(EMPTY_NOTE_ROW)];
    selectedRowNote.value=note.value.noteRows.length-1;
}

const copyCode=()=>{
    navigator.clipboard.writeText(gameInfo.value?gameInfo.value?.hash:'');
    notify({title:t('copied'),type: "success"})
}

const getInfo=async ()=>{
    pendingGameInfo.value=true;
    await getGameInfo(gameCode.value)
    pendingGameInfo.value=false;
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
    .splash-screen
        height: calc(100vh - 160px)
        @include background-standard
        background-image: url('~/assets/imgs/box.png')
        &.loading
            @include loading-pulse
</style>