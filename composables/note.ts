import Utils from "~/utils/Utils"

export interface Law{
    key:"A"|"B"|"C"|"D"|"E"|"F",
    possibilities:string[]
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

export const EMPTY_LAWS=Utils.LAW_KEYS.map(lawKey=>({...EMPTY_LAW,key:lawKey})) as Law[]

export const EMPTY_NOTE_ROW={
    code:[1,1,1],
    verificators:[null,null,null,null,null,null]
} as NoteRow

export const EMPTY_NOTE={
    noteRows:[structuredClone(EMPTY_NOTE_ROW)],
    possibleCodes:[[],[],[]],
    laws:EMPTY_LAWS
} as Note

export const useNote = () => useState<Note>('note',()=>EMPTY_NOTE)
export const useSelectedRowNote = () => useState<number>('selectedRowNote',()=>0)