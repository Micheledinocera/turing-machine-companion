<template>
    <div class="selector-container">
        <div class="label"> {{ $t(label) }} </div>
        <div class="selector"> 
            <div :class="['value',{selected:selectedValue==value}]" v-for="value in values" :key="label+'_'+value" @click="()=>{console.log(value);$emit('changedValue',value)}"> {{$t(value)}} </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
  values?: string[],
  label:string,
  selectedValue:string,
}>()
</script>

<style scoped lang="sass">
.selector-container
    text-align: center
    margin-top: 14px 
    .selector
        border-radius: 16px
        background-color: lightgray
        display: flex
        margin-top: 6px
        .value
            color: black
            border-radius: 16px
            text-transform: capitalize
            margin: auto
            padding: 4px 10px
            font-size: 22px
            cursor: pointer
            &.selected
                color: white
                background-color: $primary-color
</style>