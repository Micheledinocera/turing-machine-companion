export interface GameInfo {
    ind:number[],
    law:number[],
    crypt:number[],
    code:number,
    color:number,
    status:string,
    hash:string,
}

export const useGetGameInfo= async () => {

    const getGameInfo = async (code : string) => {
        const url='https://turingmachine.info/api/api.php?h='+code;
        const { data } = await useLazyFetch<GameInfo>(url);
        return data
    }

    return{ getGameInfo}
}

export const useGameInfo = () => useState<GameInfo|null>('gameInfo')