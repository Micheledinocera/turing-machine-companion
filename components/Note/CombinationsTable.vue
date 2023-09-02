<template>
    <div class="combinations-table">
        <div class="row header">
            <div class="select-row"> </div>
            <div class="item" v-for="i in Utils.arrayFromZeroToNumber(3)" :key="'header_'+i"> </div>
        </div>
        <div :class="['row',{'inactive':rowIndex!=selectedRowNote}]" v-for="(noteRow,rowIndex) in noteRows">
            <div class="select-row" @click="()=>selectedRowNote=rowIndex"></div>
            <template v-for="menuIndex in Utils.arrayFromZeroToNumber(3)" :key="'item_'+noteRow.code[menuIndex]+'_'+menuIndex">
                <div class="item" @click="()=>showMenu(menuIndex)"> 
                    <div class="value"> {{ noteRow.code[menuIndex] }} </div>
                    <div class="choice-menu" v-if="showMenuArray[menuIndex]">
                        <div class="menu-item" v-for="value in Utils.arrayFromOneToNumber(5)" @click.stop="()=>updateCode(menuIndex,rowIndex,value)"> {{ value }} </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NoteRow } from '~/composables/note';

const note=useNote()
const selectedRowNote=useSelectedRowNote()
const noteRows=computed(()=>note.value.noteRows as NoteRow[])
const showMenuArray=ref([false,false,false])

const showMenu=(menuIndex:number)=>{
    const showMenu=showMenuArray.value[menuIndex];
    showMenuArray.value=[false,false,false];
    showMenuArray.value[menuIndex]=!showMenu;
}

const updateCode=(menuIndex:number,rowIndex:number,value:number)=>{
    note.value.noteRows[rowIndex].code[menuIndex]=value;
    showMenuArray.value[menuIndex]=false;
}

</script>

<style scoped lang="sass">
$height-row:50px
.combinations-table
    width: 40vw
    margin-left: 10px
    .row
        display: flex
        height: $height-row
        border-bottom: solid 2px $primary-color
        font-weight: 700
        font-size: 16px
        &.inactive
            font-weight: 500
            .choice-menu
                display: none
            .select-row
                background-color: white
                cursor: pointer
            .item
                pointer-events: none
                cursor: auto
        .select-row
            width: 20px
            height: $height-row
            background-color: $primary-color
            cursor: auto
        &.header
            .item
                background-position: center
                background-size: 20px
                background-repeat: no-repeat
                cursor: auto
                &:nth-child(2)
                    background-image: url('~/assets/imgs/triangle.svg')
                &:nth-child(3)
                    background-image: url('~/assets/imgs/square.svg')
                &:nth-child(4)
                    background-image: url('~/assets/imgs/circle.svg')
            .select-row
                background-color: transparent
                cursor: auto
        .item
            width: 33%
            cursor: pointer
            text-align: center
            display: grid
            &:nth-child(2),&:nth-child(3)
                border-right: solid 2px $primary-color
            .value
                height: $height-row
                display: flex
                align-items: center
                margin: auto
            .choice-menu
                margin-top: 2px
                cursor: pointer
                z-index: 1
                .menu-item
                    background-color: white
                    &:hover
                        color: white
                        background-color: $primary-color-dark
    
</style>