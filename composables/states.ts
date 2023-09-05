import { ORIENTATIONS } from "~/utils/Utils"

export const useShowModal = () => useState<boolean>('showModal', () => false)
export const useGameInfoOk = () => useState<boolean|null>('gameInfoOk', () => null)
export const useOrientation = () => useState<ORIENTATIONS>('orientation')