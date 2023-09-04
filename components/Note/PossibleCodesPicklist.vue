<template>
    <div class="possible-codes-picklist">
        <div class="row header">
            <div class="item" v-for="shape in Utils.SHAPES"> </div>
        </div>
        <div class="row" v-for="value in Utils.arrayFromOneToNumber(5)">
            <div :class="['item',{inactive:isInactive(value,position)},Utils.SHAPES[position]]" v-for="position in Utils.arrayFromZeroToNumber(3)" @click="()=>setCode(value,position)"> 
                <div class="value"> {{value}} </div> 
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const note=useNote();

const isInactive=(value:number,position:number)=>{
    return note.value.possibleCodes[position].includes(value)
}

const setCode=(value:number,position:number)=>{
    var valueIndex=note.value.possibleCodes[position].indexOf(value)
    if(valueIndex==-1)
        note.value.possibleCodes[position].push(value)
    else
        note.value.possibleCodes[position].splice(valueIndex, 1);
}

</script>

<style scoped lang="sass">
.possible-codes-picklist
    width: $left-width
    margin-left: 10px
    margin-top: 20px
    font-weight: 600
    padding: 10px 0
    border: solid 2px $primary-color
    border-radius: 8px
    .row
        display: flex
        height: calc($height-row/2)
        margin-top: 8px
        &.header
            .item
                background-position: center
                background-size: 20px
                background-repeat: no-repeat
                cursor: auto
                &:nth-child(1)
                    background-image: url('~/assets/imgs/triangle.svg')
                &:nth-child(2)
                    background-image: url('~/assets/imgs/square.svg')
                &:nth-child(3)
                    background-image: url('~/assets/imgs/circle.svg')
        .item 
            width: calc(100%/3 - 20px)
            margin: auto
            display: flex
            cursor: pointer
            height: 100%
            color: white
            .value
                display: flex
                align-items: center
                margin: auto
            &.triangle
                background-color: $blue
                &.inactive
                    color: $blue
                    
            &.square
                background-color:$yellow
                &.inactive
                    color: $yellow
            &.circle
                background-color:$purple
                &.inactive
                    color: $purple
            &.inactive
                opacity: 0.25
                background-color: white
</style>