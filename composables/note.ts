export enum LawType{
    A="A",
    B="B",
    C="C",
    D="D",
    E="E",
    F="F"
}

export interface Possibility {
    value: string,
    active:boolean
}

export interface Law{
    key:LawType,
    possibilities:Possibility[]
}

export interface NoteRow{
    code: number[],
    verificators: boolean[]|null[]
}

export interface Note {
    noteRows: NoteRow[],
    possibleCodes:number[][],
    laws: Law[]
}

export const EMPTY_LAW={
    key:"A",
    possibilities:[]
} as Law

export const EMPTY_LAWS=Object.values(LawType).map(lawKey=>({...structuredClone(EMPTY_LAW),key:lawKey})) as Law[]

export const EMPTY_NOTE_ROW={
    code:[1,1,1],
    verificators:[null,null,null,null,null,null]
} as NoteRow

export const EMPTY_NOTE={
    noteRows:[structuredClone(EMPTY_NOTE_ROW)],
    possibleCodes:[[],[],[]],
    laws:structuredClone(EMPTY_LAWS)
} as Note

export const useNote = () => useState<Note>('note',()=>EMPTY_NOTE)
export const useSelectedRowNote = () => useState<number>('selectedRowNote',()=>0)