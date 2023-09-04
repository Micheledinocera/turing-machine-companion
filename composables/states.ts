export const useShowModal = () => useState<boolean>('showModal', () => false)
export const useGameInfoOk = () => useState<boolean|null>('gameInfoOk', () => null)