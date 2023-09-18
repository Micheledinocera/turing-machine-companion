<template>
    <div :class="['possible-codes-picklist',{collapsed:isNotDesktop && isCollapsed}]">
        <div class="collapse" @click="isCollapsed=!isCollapsed"> <div class="icon"> </div> </div>
        <div class="row header">
            <div class="item" v-for="shape in SHAPES"> </div>
        </div>
        <div class="row" v-for="value in arrayFromOneToNumber(5)">
            <div :class="['item',{inactive:isInactive(value,position)},SHAPES[position]]" v-for="position in arrayFromZeroToNumber(3)" @click="()=>setCode(value,position)"> 
                <div class="value"> {{value}} </div> 
            </div>
        </div>
        <div class="check-code" v-if="note.possibleCodes[0].length==4 && note.possibleCodes[1].length==4 && note.possibleCodes[2].length==4" @click="()=>{showModal=true;modalType=MODAL_TYPES.checkCodeSure}">
            {{ $t('checkCode') }}
        </div>
    </div>
</template>

<script setup lang="ts">
const note=useNote();
const isCollapsed=ref(true);
const { isNotDesktop }=useDevice();
const showModal=useShowModal();
const modalType=useModalType();

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
    padding-bottom: 10px
    margin-left: 10px
    margin-top: 20px
    font-weight: 600
    border: solid 2px $primary-color
    border-radius: 8px
    transition: all 0.5s ease-in-out
    .check-code
        padding: 6px 0
        text-align: center
        background-color: $primary-color
        color: white
        margin-top: 10px
    &.collapsed
        min-height: 20px
        padding: 0
        .check-code
            margin-top: 0
        .collapse .icon
            transform: rotate(0deg)
        .row
            margin: 0
            height: 0px
            min-height: 0px
            .item .value
                height: 0px
                min-height: 0px
    .collapse
        width: 100%
        height: 20px
        background-color: $primary-color
        cursor: pointer
        display: none
        .icon
            width: 20px
            height: 20px
            margin: auto
            @include background-standard
            background-image: url('~/assets/imgs/arrow-down.svg')
            transform: rotate(180deg)
            transition: transform 0.5s ease-in-out
    .row
        display: flex
        height: calc($height-row/2)
        margin-top: 8px
        transition: 0.5s ease-in-out
        transition-property: height,margin
        &.header
            .item
                @include background-standard
                background-size: 20px
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
                overflow: hidden
                transition: height 0.5s ease-in-out
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
    @media (max-width: $breakpoint-tablet)
        width: calc(100% - 20px)
        margin-bottom: 20px
        .collapse
            display: block
</style>