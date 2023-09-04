<template>
    <div class="laws-container">
        <div class="law-item" v-for="(law,lawIndex) in note.laws">
            <div class="key"> {{ law.key }} </div>
            <div class="text-container">
                <input type="text" v-model="inputValues[lawIndex]">
                <div :class="['add',{inactive:inactiveAdd(lawIndex)}]" @click="()=>addCondition(lawIndex)"> + </div>
            </div>
            <div class="conditions-container">
                <div class="condition-container" v-for="(possibility,possibilityIndex) in law.possibilities">
                    <div class="remove" @click="()=>removeCondition(lawIndex,possibilityIndex)"> - </div>
                    <div :class="['condition',{inactive:!possibility.active}]" @click="()=>toggleActive(lawIndex,possibilityIndex)"> {{possibility.value}} </div>
                </div>
            </div>
            <div class="possibility-container" v-if="activePossibilities(lawIndex).length==1"> 
                <div class="check"> </div>
                <div class="value"> {{ activePossibilities(lawIndex)[0].value }} </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const note=useNote();
const inputValues=ref(Object.values(LawType).map(()=>""));

const addCondition=(lawIndex:number)=>{
    note.value.laws[lawIndex].possibilities.push({value:inputValues.value[lawIndex],active:true});
    inputValues.value[lawIndex]='';
}

const removeCondition=(lawIndex:number,possibilityIndex:number)=>{
    note.value.laws[lawIndex].possibilities.splice(possibilityIndex,1);
}

const toggleActive=(lawIndex:number,possibilityIndex:number)=>{
    note.value.laws[lawIndex].possibilities[possibilityIndex].active=!note.value.laws[lawIndex].possibilities[possibilityIndex].active;
}

const activePossibilities=(lawIndex:number)=>{
    return note.value.laws[lawIndex].possibilities.filter(possibility=>possibility.active)
}

const inactiveAdd=(lawIndex:number)=>{
    return inputValues.value[lawIndex]==='' || note.value.laws[lawIndex].possibilities.find(possibility=>possibility.value==inputValues.value[lawIndex])
}

</script>

<style scoped lang="sass">
$item-height:20px
.laws-container
    margin-top: 20px
    width: calc($right-width - 80px)
    padding: 0 40px
    display: flex
    flex-wrap: wrap
    .law-item
        width: calc(100%/3 - 8px)
        margin: 0 auto
        .key
            text-align: center
            font-weight: 700
            color: $primary-color
            font-size: 20px
        .text-container
            display: flex
            height: $item-height
            line-height: $item-height
            margin-top: 10px
            input
                width: calc(100% - 30px)
            .add
                margin-left: 10px
                border-radius: 20px
                color: white
                font-weight: 600
                font-size: 24px
                background-color: $primary-color-dark
                width: 20px
                cursor: pointer
                text-align: center
                &.inactive
                    opacity: 0.5
                    pointer-events: none
        .conditions-container
            .condition-container
                border-radius: 8px
                border: solid 2px $primary-color
                display: flex
                line-height: $item-height
                margin-top: 10px
                padding: 6px
                .remove
                    height: $item-height
                    border-radius: 20px
                    color: white
                    font-weight: 600
                    font-size: 24px
                    background-color: $red
                    width: 20px
                    cursor: pointer
                    text-align: center
                .condition
                    width: calc(100% - 30px)
                    margin-left: 10px
                    cursor: pointer
                    &.inactive
                        text-decoration: line-through
                        opacity: 0.5
        .possibility-container
            margin-top: 10px 
            padding: 6px
            display: flex
            line-height: $item-height
            background-color: $primary-color
            border-radius: 8px
            color: white
            font-weight: 600
            .check
                width: 20px
                height: $item-height
                background-image: url('~/assets/imgs/ok.png')
                background-position: center
                background-size: contain
</style>