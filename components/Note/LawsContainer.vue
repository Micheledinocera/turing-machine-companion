<template>
    <div :class="['laws-container','mode_'+gameInfo?.m]">
        <template v-if="gameDifficulty==gameModes.classic || gameDifficulty==gameModes.nightmare">
            <div class="law-item" v-for="(law,lawIndex) in note.laws">
                <div class="key"> {{ law.key }} </div>
                <div class="text-container">
                    <input type="number" min="1" max="48" v-model="inputValues[lawIndex]">
                    <div :class="['add',{inactive:inactiveAdd(lawIndex)}]" @click="()=>addConditionClassic(lawIndex)"> + </div>
                </div>
                <template v-if="note.laws[lawIndex].possibilities.length>0">
                    <div class="law-container" @click="()=>{selectedCard=parseInt(inputValues[lawIndex]);showModal=true;modalType=MODAL_TYPES.cardDetail;}">
                        <img :src="getLawImageUrlLocale(parseInt(inputValues[lawIndex]))" :alt="'law_card_'+law" />
                    </div>
                    <div class="conditions-container with-imgs">
                        <div :class="['condition-container',{definitive:activePossibilities(lawIndex).length==1},{inactive:!law.possibilities[possibilityIndex]?.active}]" v-for="(possibility,possibilityIndex) in note.laws[lawIndex].possibilities">
                            <img :class="['condition']" :src="getImageUrlLocale(possibility.value)" :alt="'law_image_'+$i18n.locale+'_'+possibility" @click="()=>toggleActive(lawIndex,possibilityIndex)" />
                        </div>
                    </div>
                </template>
            </div>
        </template>
        <template v-else-if="gameDifficulty==gameModes.extreme">
            <div class="law-item" v-for="(law,lawIndex) in note.laws">
                <div class="key"> {{ law.key }} </div>
                <div class="text-container">
                    <input type="number" min="1" max="48" v-model="inputValues[lawIndex]">
                    <div v-if="extremeArrays[lawIndex].length<2" :class="['add',{inactive:inactiveAdd(lawIndex)}]" @click="()=>addConditionExtreme(lawIndex)"> + </div>
                </div>
                <template v-if="note.laws[lawIndex].possibilities.length>0">
                    <div class="law-container" v-for="(str,ind) in extremeArrays[lawIndex]" @click="()=>{selectedCard=parseInt(inputValues[lawIndex]);showModal=true;modalType=MODAL_TYPES.cardDetail;}">
                        <div :class="['remove']" @click.stop="()=>removeConditionExtreme(lawIndex,ind)"> - </div>
                        <img :src="getLawImageUrlLocale(parseInt(extremeArrays[lawIndex][ind]))" :alt="'law_card_'+parseInt(extremeArrays[lawIndex][ind])" />
                    </div>
                    <div class="conditions-container with-imgs">
                        <div :class="['condition-container',{definitive:activePossibilities(lawIndex).length==1},{inactive:!law.possibilities[possibilityIndex]?.active}]" v-for="(possibility,possibilityIndex) in law.possibilities">
                            <img :class="['condition']" :src="getImageUrlLocale(possibility.value)" :alt="'law_image_'+$i18n.locale+'_'+possibility" @click="()=>toggleActive(lawIndex,possibilityIndex)" />
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const showModal=useShowModal();
const modalType=useModalType();
const selectedCard=useSelectedCard();
const note=useNote();
const gameDifficulty=useGameDifficulty();
const { gameInfo }=await useGameInfo();
const randoms=useRandoms();
const inputValues=ref(Object.values(LawType).map(()=>""));
const extremeArrays=ref(Object.values(LawType).map(()=>[])) as Ref<string[][]>;
const { locale }= useI18n();

const addConditionClassic=(lawIndex:number)=>{
    note.value.laws[lawIndex].possibilities=[];
    setTimeout(()=>{
        note.value.laws[lawIndex].possibilities=LAWS_VERIFICATORS[parseInt(inputValues.value[lawIndex])].map((item)=>({
            value:item+"",
            active:true
        }))
    },100)
}

const addConditionExtreme=(lawIndex:number)=>{
    note.value.laws[lawIndex].possibilities=[];
    extremeArrays.value[lawIndex].push(inputValues.value[lawIndex])
    setTimeout(()=>{
        extremeArrays.value[lawIndex].forEach(extremeIndex=>{
            note.value.laws[lawIndex].possibilities.push(...LAWS_VERIFICATORS[parseInt(extremeIndex)].map((item)=>({
                value:item+"",
                active:true
            })))
        })
    },100)
}

const removeCondition=(lawIndex:number,possibilityIndex:number)=>{
    note.value.laws[lawIndex].possibilities.splice(possibilityIndex,1);
}

const removeConditionExtreme=(lawIndex:number,possibilityIndex:number)=>{
    note.value.laws[lawIndex].possibilities=[];
    extremeArrays.value[lawIndex].splice(possibilityIndex,1)
    setTimeout(()=>{
        extremeArrays.value[lawIndex].forEach(extremeIndex=>{
            note.value.laws[lawIndex].possibilities.push(...LAWS_VERIFICATORS[parseInt(extremeIndex)].map((item)=>({
                value:item+"",
                active:true
            })))
        })
    },100)
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

const getImageUrlLocale=(possibility:number|string)=>{
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

// const extremeArrays=(lawIndex:number)=>{
//     var inds=[gameInfo.value?.ind[lawIndex],gameInfo.value?.fake[lawIndex]];
//     return {
//         inds:[inds[randoms.value[lawIndex]],inds[1-randoms.value[lawIndex]]]
//     }
// }

</script>

<style scoped lang="sass">
$item-height:20px
$small-item-height:12px
$medium-item-height:24px

.laws-container
    margin-top: 20px
    width: calc($right-width - 80px)
    padding: 0 40px
    display: flex
    flex-wrap: wrap
    @media (max-width: $breakpoint-tablet)
        width: calc(100% - 40px)
        padding: 0 20px
    .key
        text-align: center
        font-weight: 700
        color: $primary-color
        font-size: 20px
    .law-item
        width: calc(100%/3 - 8px)
        margin: 10px auto
        @media (max-width: $breakpoint-tablet)
            width: calc(100%/2 - 8px)
        .law-container
            overflow: hidden
            width: 100%
            margin: 10px auto
            aspect-ratio: 3
            border-radius: 14px
            cursor: pointer
            img
                width: calc(100% + 26px)
                object-fit: cover
                object-position: -12px -14px
            .remove
                position: absolute
                height: $medium-item-height
                border-radius: 20px
                color: white
                font-weight: 600
                font-size: $medium-item-height
                background-color: $red
                width: $medium-item-height
                cursor: pointer
                text-align: center
    .label-container
        display: flex
        padding: 10px
        >div
            margin: auto
            font-weight: 700
            padding: 4px 8px
            border-radius: 6px
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
            display: flex
            flex-wrap: wrap
            .row
                display: flex
            .condition-container
                border: solid 2px transparent
                cursor: pointer
                overflow: hidden
                width: calc(33% - 8px)
                @media (max-width: $breakpoint-mobile)
                    width: calc(50% - 8px)
                &.definitive
                    border-color:$primary-color
                    &.inactive
                        border-color: transparent
                &.inactive
                    text-decoration: line-through
                    opacity: 0.5
                img
                    width: 100%
                    &.condition
                        margin-left: 0
        .condition-container
            border-radius: 8px
            border: solid 2px $primary-color
            display: flex
            line-height: $small-item-height
            margin-top: 10px
            padding: 6px 2px
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
    &.mode_2
        display: block
        .law-items
            display: flex
            flex-wrap: wrap
        .labels-container
            display: flex
            flex-wrap: wrap
            .label-container
                width: 25%
        .label-container .labels
            width: 100%
            display: flex
            flex-wrap: wrap
            font-size: 20px
            text-align: center
</style>