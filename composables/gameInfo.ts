import { useNotification } from "@kyvg/vue3-notification";
import { LawType } from '#imports';

export enum gameModes{
    classic="0",
    extreme="1",
    nightmare="2"
};

export enum gameDifficulties{
    easy="0",
    normal="1",
    hard="2"
};

export interface GameInfo {
    ind:number[],
    fake:number[],
    law:number[],
    crypt:number[],
    code:number,
    color:number,
    status:string,
    hash:string,
    m:gameModes
}

const gameInfoOk=ref() as Ref<boolean|null>;
const gameInfo=ref() as Ref<GameInfo|null>;

export const useGameInfo= async () => {
    const { notify }  = useNotification();
    const { t } = useI18n();
    const note=useNote();
    const randoms=useRandoms();
    
    const getGameInfo = async (code : string) => {
        const url='https://turingmachine.info/api/api.php?h='+code;
        gameInfoOk.value=null;
        const { data } = await useFetch<GameInfo>(url);
        handleGameInfoFromRest(data,'wrongCode');
    }

    const createGameAction= async( mode:gameModes,difficulty:gameDifficulties,verificators:"4"|"5"|"6") => {
        const url='https://turingmachine.info/api/api.php?m='+mode+'&d='+difficulty+'&n='+verificators;
        gameInfoOk.value=null;
        const { data } = await useFetch<GameInfo>(url);
        handleGameInfoFromRest(data,'somenthingWentWrong');
    }

    const handleGameInfoFromRest=(gameInfoData:Ref<GameInfo | null>,errorLabel:string)=>{
        gameInfo.value=gameInfoData.value;
        if(gameInfo.value?.status=='bad') {
            gameInfoOk.value=false
            notify({title:t(errorLabel),type: "error"})
            return 
        }
        gameInfoOk.value=true;
        note.value.laws=structuredClone([]);
        gameInfo.value?.ind.forEach((law,lawIndex:number)=>{
            note.value.laws.push({key:Object.keys(LawType)[lawIndex] as LawType,possibilities:[]})
            const possibilities=LAWS_VERIFICATORS[law].map((verificator:number)=>({value:""+verificator,active:true}));
            if(gameInfo.value?.m==gameModes.extreme){
                randoms.value.push(Math.floor(Math.random() * 10)%2 as 0|1);
                const fakeVerificators=structuredClone(LAWS_VERIFICATORS[gameInfo.value?gameInfo.value.fake[lawIndex]:0]);
                const fakePossibilities=fakeVerificators.map((verificator:number)=>({value:""+verificator,active:true}));
                note.value.laws[lawIndex].possibilities=randoms.value[lawIndex]?[...fakePossibilities,...possibilities]:[...possibilities,...fakePossibilities];
            } else{
                note.value.laws[lawIndex].possibilities=structuredClone(possibilities)
            }
        })
        if(gameInfo.value?.m==gameModes.nightmare)
            note.value.laws.sort(() => 0.5 - Math.random())
        return gameInfo
    }

    return{ gameInfo,gameInfoOk,getGameInfo,createGameAction}
}