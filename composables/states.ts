import { MODAL_TYPES } from "~/utils/Utils"
import { gameModes } from '#imports';

export const useShowModal = () => useState<boolean>('showModal', () => false)
export const useGameDifficulty = () => useState<gameModes>('gameDifficulty', () => gameModes.classic)
export const useModalType = () => useState<MODAL_TYPES>('modalType', () => MODAL_TYPES.newGame)
export const useSelectedCard = () => useState<number>('selectedCard', () => 1)
export const useRandoms = () => useState<(0|1)[]>('randoms',()=>[])
export const useGameChecked = () => useState<boolean>('gameChecked',()=>false)