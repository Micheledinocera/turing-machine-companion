<template>
    <div class="modal-overlay" @click="showModal=false">
        <div class="modal-content" @click.stop="">
            <div class="close" @click="showModal=false"> X </div>
            <template v-if="modalType==MODAL_TYPES.newGame">
                <div class="title"> {{$t('newGame')}}? </div>
                <div class="buttons">
                    <div class="cancel" @click="showModal=false"> {{$t('cancel')}} </div>
                    <div class="ok" @click="()=>newGame()"> {{$t('ok')}} </div>
                </div>
            </template>
            <template v-else-if="modalType==MODAL_TYPES.credits">
                <div class="title"> {{$t('credits')}} </div>
                <div class="line"> {{ $t('nonOfficial') }} </div>
                <div class="line"> {{ $t('madeWithLove') }} <a href="mailto:mdinocera.digital@gmail.com" target="_blank"> Michele Di Nocera </a> </div>
                <div class="line"> {{ $t('allCreditsTo') }} <a href="https://www.scorpionmasque.com/" target="_blank"> Scorpion Masqué </a> </div>
                <div class="line"> {{ $t('moreInfo') }} <a href="https://www.turingmachine.info/" target="_blank"> {{ $t('here') }} </a> </div>
                <div class="line"> {{ $t('version') }} <span> {{ version }} </span> </div>
            </template>
            <template v-else-if="modalType==MODAL_TYPES.cardDetail">
                <div class="img-container">
                    <img :src="getLawImageUrlLocale(selectedCard)" alt="">
                </div>
            </template>
            <template v-else-if="modalType==MODAL_TYPES.createGame">
                <div class="title"> {{$t('createGame')}} </div>
                <Selector :label="'mode'" :values="Object.keys(gameModes)" :selectedValue="selectedMode" @changed-value="(value)=>selectedMode=value"/>
                <Selector :label="'difficulty'" :values="Object.keys(gameDifficulties)" :selectedValue="selectedDifficulty" @changed-value="(value)=>selectedDifficulty=value"/>
                <Selector :label="'verificators'" :values="['4','5','6']" :selectedValue="selectedVerificatore" @changed-value="(value)=>selectedVerificatore=value"/>
                <div class="create-container">
                    <div class="create" @click="createGame" v-if="!isCreatingGame"> {{$t('createGame')}} </div>
                    <Loader v-else/>
                </div>
            </template>
            <template v-else-if="modalType==MODAL_TYPES.checkCodeSure">
                <div class="title"> {{$t('areYouSure')}} </div>
                <div class="buttons">
                    <div class="cancel" @click="showModal=false"> {{$t('cancel')}} </div>
                    <div class="ok" @click="()=>{modalType=MODAL_TYPES.checkCode;gameChecked=true;}"> {{$t('ok')}} </div>
                </div>
            </template>
            <template v-else-if="modalType==MODAL_TYPES.shareCode">
                <div class="title"> {{$t('share')}} </div>
                <div class="share" @click="share">  {{ $t('gameCode') }}: {{ gameInfo?.hash.replace(/\s/g, '') }} <span class="icon"></span> </div>
                <qrcode 
                    myclass="qrcode"
                    :value="shareLink"
                    image="icon.png"
                    :dotsOptions="DOTS_OPTIONS"
                    :cornersSquareOptions="CORNERS_SQUARE_OPTIONS"
                    :cornersDotOptions="CORNERS_DOT_OPTIONS"
                />
            </template>
            <template v-else-if="modalType==MODAL_TYPES.checkCode">
                <div class="title"> {{$t('checkCode')}} </div>
                <div :class="['response',gameInfo?.code==getCodeFromNote?'ok':'ko']"> {{gameInfo?.code==getCodeFromNote?$t('correctSolution'):$t('wrongSolution')}}</div>
                <div class="buttons">
                    <div class="ok" @click="()=>newGame()"> {{$t('newGame')}} </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">

const showModal=useShowModal();
const modalType=useModalType();
const selectedCard=useSelectedCard();
const selectedRowNote=useSelectedRowNote();
const note=useNote();
const version=await useVersion();
const { createGameAction,gameInfoOk,gameInfo }=await useGameInfo();
const { locale }= useI18n();
const selectedMode=ref(Object.keys(gameModes)[0]);
const selectedDifficulty=ref(Object.keys(gameDifficulties)[0]);
const selectedVerificatore=ref("4") as Ref<"4"|"5"|"6">;
const isCreatingGame=ref(false);
const gameChecked=useGameChecked();

const newGame=()=>{
    gameChecked.value=false;
    note.value=structuredClone(EMPTY_NOTE);
    selectedRowNote.value=0;
    showModal.value=false;
    gameInfoOk.value=null;
}

const getLawImageUrlLocale=(lawId:number)=>{
    const lawIdString=(lawId<10?"0":"")+lawId;
    const lang=LANGUAGES.find(lang=>lang.iso==locale.value);
    const localeValue=lang?lang.value:"en";
    return LAW_IMG_URL.replaceAll('{locale}',localeValue.toUpperCase()).replace('{lawId}',lawIdString)
}

const createGame=async ()=>{
    isCreatingGame.value=true;
    await createGameAction(gameModes[selectedMode.value as unknown as keyof typeof gameModes],gameDifficulties[selectedDifficulty.value as unknown as keyof typeof gameDifficulties],selectedVerificatore.value)
    isCreatingGame.value=false;
    showModal.value=false;
    selectedRowNote.value=0;
}

const getCodeFromNote=computed(()=>{
    const triangle=arrayFromOneToNumber(5).find(number=>!note.value.possibleCodes[0].includes(number)) as number
    const square=arrayFromOneToNumber(5).find(number=>!note.value.possibleCodes[1].includes(number)) as number
    const circle=arrayFromOneToNumber(5).find(number=>!note.value.possibleCodes[2].includes(number)) as number
    return triangle*100+square*10+circle
})

const shareLink=computed(()=> location.origin+"?code="+gameInfo.value?.hash.replace(/\s/g, ''))

const share=()=>{
    navigator.clipboard.writeText(shareLink.value);
    navigator.share({ title: "Turing Machine Companion", url: shareLink.value })
}

onMounted(()=>{
    selectedMode.value=Object.keys(gameModes)[0];
    selectedDifficulty.value=Object.keys(gameDifficulties)[0];
    selectedVerificatore.value="4";
})

</script>

<style scoped lang="sass">
.modal-overlay
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    position: fixed
    background-color: rgba(0,0,0,0.5)
    z-index: 2
    .modal-content
        width: 70%
        height: auto
        background-color: white
        margin: auto
        margin-top: 40px
        border-radius: 8px
        padding: 10px
        font-weight: 600
        font-size: 24px
        .close
            position: absolute
            margin-left: calc(70% - 14px)
            margin-top: -4px
            cursor: pointer
            color: $red
        .title
            font-weight: 700
            font-size: 30px
            color: $primary-color
            text-align: center
        .line
            margin: 20px 0
            font-size: 18px
            font-weight: 600
            a,span
                text-decoration: none
                color:$primary-color
                font-weight: 700
        .buttons
            display: flex
            width: 70%
            margin: 40px auto 20px
            >div
                margin: auto
                color: white
                padding: 4px 14px
                border-radius: 8px
                cursor: pointer
                &.ok
                    background-color: $primary-color
                &.cancel
                    background-color: $red
        .img-container img
            width: 100%
        .create-container
            display: flex
            .create
                background-color: $primary-color
                border-radius: 8px
                color: white
                cursor: pointer
                padding: 8px 10px
                margin: 20px auto
            .loader
                margin: 20px auto
        .response
            margin-top: 10px
            &.ko
                color: $red
            &.ok
                color: $primary-color
        .share
            margin: 10px 0
            display: flex
            .icon
                @include background-standard
                background-image: url('~/assets/imgs/share.svg')
                display: inline-flex
                width: 30px
                height: 30px
                margin: 0 10px
        &:deep(.qrcode)
            margin: 20px 0
</style>