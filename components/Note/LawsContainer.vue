<template>
    <div class="laws-container">
        <div class="law-item" v-for="(law,lawIndex) in note.laws" v-if="!gameInfoOk">
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
        <div class="law-item" v-for="(law,lawIndex) in gameInfo?.ind" v-else>
            <div class="label-container">
                <div class="key"> {{ Object.keys(LawType)[lawIndex] }} </div>
                <div class="law-id"> {{ law }} </div>
                <div :class="['rule-id','color_'+gameInfo?.color]">
                    {{ gameInfo?.crypt[lawIndex] }} 
                    <div class="icon"></div> 
                </div>
            </div>
            <div class="law-container" @click="()=>{selectedCard=law;showModal=true;modalType=MODAL_TYPES.cardDetail;}">
                <img :src="getLawImageUrlLocale(law)" alt="">
            </div>
            <div class="conditions-container with-imgs">
                <!-- <template v-if="LAWS_VERIFICATORS[law].length%3==0">
                    <div class="row" v-for="counter in arrayFromZeroToNumber((LAWS_VERIFICATORS[law].length/3)+1)">
                        <div :class="['condition-container',{definitive:activePossibilities(lawIndex).length==1},{inactive:!note.laws[lawIndex].possibilities[possibilityIndex+counter*3]?.active}]" v-for="(possibility,possibilityIndex) in LAWS_VERIFICATORS[law].filter((_,i)=>Math.floor(i/3)==counter)">
                            <img :class="['condition']" :src="getImageUrlLocale(possibility)" :alt="'law_image_'+$i18n.locale+'_'+possibility" @click="()=>toggleActive(lawIndex,possibilityIndex+counter*3)">
                        </div>    
                    </div>
                </template> -->
                <!-- <template v-else> -->
                    <div class="row" v-for="counter in arrayFromZeroToNumber(Math.ceil((LAWS_VERIFICATORS[law].length/2))+1)">
                        <div :class="['condition-container',{definitive:activePossibilities(lawIndex).length==1},{inactive:!note.laws[lawIndex].possibilities[possibilityIndex+counter*2]?.active}]" v-for="(possibility,possibilityIndex) in LAWS_VERIFICATORS[law].filter((_,i)=>Math.floor(i/2)==counter)">
                            <img :class="['condition']" :src="getImageUrlLocale(possibility)" :alt="'law_image_'+$i18n.locale+'_'+possibility" @click="()=>toggleActive(lawIndex,possibilityIndex+counter*2)">
                        </div>
                    </div>
                <!-- </template> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LawType } from '#imports';

const showModal=useShowModal();
const modalType=useModalType();
const selectedCard=useSelectedCard();
const note=useNote();
const gameInfoOk=useGameInfoOk();
const gameInfo=useGameInfo();
const inputValues=ref(Object.values(LawType).map(()=>""));
const { locale }= useI18n();

watch(gameInfoOk,()=>{
    note.value.laws=structuredClone(EMPTY_LAWS)
    if(gameInfoOk.value)
        gameInfo.value?.ind.forEach((law,lawIndex)=>{
            note.value.laws.push({key:Object.keys(LawType)[lawIndex] as LawType,possibilities:[]})
            LAWS_VERIFICATORS[law].forEach((verificator:number)=>{
                note.value.laws[lawIndex].possibilities.push({value:""+verificator,active:true});
            })
        })
})

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

const getImageUrlLocale=(possibility:number)=>{
    const lang=LANGUAGES.find(lang=>lang.iso==locale.value);
    const localeValue=lang?lang.value:"en";
    return IMG_URL.replaceAll('{locale}',localeValue.toUpperCase()).replace('{possibility}',possibility+"")
}

const getLawImageUrlLocale=(lawId:number)=>{
    const lawIdString=(lawId<10?"0":"")+lawId;
    const lang=LANGUAGES.find(lang=>lang.iso==locale.value);
    const localeValue=lang?lang.value:"en";
    return LAW_IMG_URL.replaceAll('{locale}',localeValue.toUpperCase()).replace('{lawId}',lawIdString)
}
</script>

<style scoped lang="sass">
$item-height:20px
$small-item-height:12px
.laws-container
    margin-top: 20px
    width: calc($right-width - 80px)
    padding: 0 40px
    display: flex
    flex-wrap: wrap
    @media (max-width: $breakpoint-tablet)
        width: calc(100% - 40px)
        padding: 0 20px
    .law-item
        width: calc(100%/3 - 8px)
        margin: 10px auto
        @media (max-width: $breakpoint-tablet)
            width: calc(100%/2 - 8px)
        .law-container
            overflow: hidden
            width: 100%
            margin: auto
            aspect-ratio: 3
            border-radius: 14px
            img
                width: calc(100% + 26px)
                object-fit: cover
                object-position: -12px -14px
        .label-container
            display: flex
            padding: 10px
            >div
                margin: auto
                font-weight: 700
                padding: 4px 8px
                border-radius: 6px
            .key
                text-align: center
                font-weight: 700
                color: $primary-color
                font-size: 20px
            .law-id
                background-color: $primary-color
                color: white
            .rule-id
                border: solid 2px black
                color: black
                .icon
                    @include background-standard
                    background-color: $primary-color-light
                    width: 16px
                    height: 16px
                    margin-top: -34px
                    margin-left: 24px
                    position: absolute 
                &.color_0 
                    border-color: $primary-color
                    color: $primary-color
                    .icon
                        background-image: url('~/assets/imgs/icon-green.png')
                &.color_1 
                    border-color: $yellow
                    color: $yellow
                    .icon
                        background-image: url('~/assets/imgs/icon-yellow.png')
                &.color_2 
                    border-color: $blue
                    color: $blue
                    .icon
                        background-image: url('~/assets/imgs/icon-blue.png')
                &.color_3 
                    border-color: $purple
                    color: $purple
                    .icon
                        background-image: url('~/assets/imgs/icon-purple.png')
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
            &.with-imgs
                .row
                    display: flex
                .condition-container
                    border: none
                    cursor: pointer
                    overflow: hidden
                    &.definitive
                        border: solid 2px $primary-color
                    &.inactive
                        border: none
                        text-decoration: line-through
                        opacity: 0.5
                    img
                        width: calc(100% - 10px)
                        transform: scale(1.2)
                        &.condition
                            margin-left: 0
                            max-height: 35.5px
            .condition-container
                border-radius: 8px
                border: solid 2px $primary-color
                display: flex
                line-height: $small-item-height
                margin-top: 10px
                padding: 6px 2px
                .remove
                    height: $small-item-height
                    border-radius: 20px
                    color: white
                    font-weight: 600
                    font-size: $small-item-height
                    background-color: $red
                    width: $small-item-height
                    cursor: pointer
                    text-align: center
                .condition
                    width: calc(100% - 30px)
                    margin-left: 10px
                    cursor: pointer
                    font-size: $small-item-height
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
                @include background-standard
                background-image: url('~/assets/imgs/ok.png')
</style>