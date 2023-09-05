<template>
    <div class="modal-overlay" @click="showModal=false">
        <div class="modal-content" @click.stop="">
            <div class="close" @click="showModal=false"> X </div>
            <div class="title"> New Game? </div>
            <div class="buttons">
                <div class="ok" @click="()=>newGame()"> OK </div>
                <div class="cancel" @click="showModal=false"> Cancel </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const showModal=useShowModal();
const selectedRowNote=useSelectedRowNote();
const note=useNote();
const gameInfoOk=useGameInfoOk();

const newGame=()=>{
    note.value=structuredClone(EMPTY_NOTE);
    selectedRowNote.value=0;
    showModal.value=false;
    gameInfoOk.value=null;
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
        width: 50%
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
            margin-left: calc( 50% - 14px)
            margin-top: -4px
            cursor: pointer
            color: $red
        .title
            font-weight: 700
            font-size: 30px
            color: $primary-color
            text-align: center
        .buttons
            display: flex
            width: 70%
            margin: 40px auto
            >div
                margin: auto
                color: white
                padding: 0 8px
                border-radius: 8px
                cursor: pointer
                &.ok
                    background-color: $primary-color
                &.cancel
                    background-color: $red
                
</style>