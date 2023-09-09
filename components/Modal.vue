<template>
    <div class="modal-overlay" @click="showModal=false">
        <div class="modal-content" @click.stop="">
            <div class="close" @click="showModal=false"> X </div>
            <template v-if="modalType==MODAL_TYPES.newGame">
                <div class="title"> {{$t('newGame')}} </div>
                <div class="buttons">
                    <div class="cancel" @click="showModal=false"> {{$t('cancel')}} </div>
                    <div class="ok" @click="()=>newGame()"> {{$t('ok')}} </div>
                </div>
            </template>
            <template v-if="modalType==MODAL_TYPES.credits">
                <div class="title"> {{$t('credits')}} </div>
                <div class="line"> {{ $t('madeWithLove') }} <a href="mailto:mdinocera.digital@gmail.com" target="_blank"> Michele Di Nocera </a> </div>
                <div class="line"> {{ $t('allCreditsTo') }} <a href="https://www.scorpionmasque.com/" target="_blank"> Scorpion Masqué </a> </div>
            </template>
            <template v-else-if="modalType==MODAL_TYPES.cardDetail">
                <div class="img-container">
                    <img :src="getLawImageUrlLocale(selectedCard)" alt="">
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
const gameInfoOk=useGameInfoOk();
const { locale }= useI18n();

const newGame=()=>{
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
</script>

<style scoped lang="sass">
.modal-overlay
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    position: fixed
    background-color: rgba(0,0,0,0.5)
    z-index: 1
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
            a
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
</style>