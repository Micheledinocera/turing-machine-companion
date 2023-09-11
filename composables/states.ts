import { DEVICES,MODAL_TYPES } from "~/utils/Utils"

export const useShowModal = () => useState<boolean>('showModal', () => false)
export const useModalType = () => useState<MODAL_TYPES>('modalType', () => MODAL_TYPES.newGame)
export const useSelectedCard = () => useState<number>('selectedCard', () => 1)
export const useGameInfoOk = () => useState<boolean|null>('gameInfoOk', () => null)
export const useSelectedRowRef = () => useState<any>('selectedRowRef')
export const useIsFixedRow = () => useState<boolean>('isFixedRow')

export const useDevice = ()=>{
    const device=ref(DEVICES.desktop);
    const isNotDesktop=computed(()=>device.value==DEVICES.mobile || device.value==DEVICES.tablet);
    onMounted(() =>{
        device.value=getDeviceFromWidth();
        window.addEventListener("resize", () =>
            device.value=getDeviceFromWidth()
        )}
    )
    return { device,isNotDesktop }
}