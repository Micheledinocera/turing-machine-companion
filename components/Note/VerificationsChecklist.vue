<template>
    <div class="verifications-checklist">
        <div class="table-container">
            <div class="row header">
                <div class="item" v-for="letter in Object.values(LawType)"> <div class="label"> {{ letter }} </div> </div>
            </div>
            <template v-if="fixed">
                <div :class="['row']">
                    <div class="item" v-for="(letter,verificatorIndex) in Object.values(LawType)" :key="'verificator_'+letter+'_'+selectedRowNote">
                        <div :class="['checkbox',checkboxClass(noteRows[selectedRowNote].verificators[verificatorIndex]),{inactive:inactive(noteRows[selectedRowNote].verificators[verificatorIndex],selectedRowNote)}]" @click="()=>updateVerificator(selectedRowNote,verificatorIndex,noteRows[selectedRowNote].verificators[verificatorIndex])"> </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div :class="['row',{'inactive':rowIndex!=selectedRowNote}]" v-for="(noteRow,rowIndex) in noteRows">
                    <div class="item" v-for="(letter,verificatorIndex) in Object.values(LawType)" :key="'verificator_'+letter+'_'+rowIndex">
                        <div :class="['checkbox',checkboxClass(noteRow.verificators[verificatorIndex]),{inactive:inactive(noteRow.verificators[verificatorIndex],rowIndex)}]" @click="()=>updateVerificator(rowIndex,verificatorIndex,noteRow.verificators[verificatorIndex])"> </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  fixed?: boolean
}>()
import { NoteRow } from '~/composables/note';

const note=useNote();
const selectedRowNote=useSelectedRowNote();
const noteRows=computed(()=>note.value.noteRows as NoteRow[])

const checkboxClass=(value: boolean|null)=>{
    if(value === null)
        return 'empty'
    return value?'ok':'ko'
}

const validatorsNumber=(rowIndex:number)=>noteRows.value[rowIndex].verificators.filter(verificator=>verificator!==null).length

const inactive=(value: boolean|null,rowIndex:number)=>{
    return value===null && validatorsNumber(rowIndex)>=3
}

const updateVerificator=(rowIndex:number,verificatorIndex:number,value: boolean|null)=>{
    let stateIndex=VERIFICATOR_STATES.indexOf(value);
    stateIndex=(stateIndex+1+VERIFICATOR_STATES.length)%VERIFICATOR_STATES.length;
    note.value.noteRows[rowIndex].verificators[verificatorIndex]=VERIFICATOR_STATES[stateIndex];
}

</script>

<style scoped lang="sass">
.verifications-checklist
    width: calc($right-width - 80px)
    padding: 0 40px
    @media (max-width: $breakpoint-mobile)
        width: calc($right-width - 10px)
        padding: 0 10px 0 0
    .row
        display: flex
        font-weight: 700
        color: $primary-color
        font-size: 20px
        height: $height-row
        border-bottom: solid 2px $primary-color
        &.inactive
            .item
                pointer-events: none
                .checkbox
                    border: none
        .item
            width: 16%
            display: flex
            align-items: center
            margin: auto
            .label,.checkbox
                margin: auto
            .checkbox
                width: 20px
                height: 20px
                background-color: white
                border-radius: 4px
                border: solid 2px $primary-color-dark
                @include background-standard
                cursor: pointer
                &.ok
                    background-image: url('~/assets/imgs/ok.png')
                &.ko
                    background-image: url('~/assets/imgs/ko.png')
                &.inactive
                    pointer-events: none
                    background-color: lightgray
</style>