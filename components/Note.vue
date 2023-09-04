<template>
    <div class="note-container">
        <div :class="['add',{inactive:inactive}]" @click="addEmptyNote"> New Note Row </div>
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

const note=useNote();
const selectedRowNote=useSelectedRowNote();

const inactive=computed(()=>
    note.value.noteRows.some(row=>row.verificators.filter(verificator=>verificator!==null).length<3)
)

const addEmptyNote=()=>{
    note.value.noteRows=[...note.value.noteRows,structuredClone(EMPTY_NOTE_ROW)];
    selectedRowNote.value=note.value.noteRows.length-1;
}
</script>

<style scoped lang="sass">
.note-container 
    margin-top: 10px
    .add
        margin: 20px auto
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
</style>