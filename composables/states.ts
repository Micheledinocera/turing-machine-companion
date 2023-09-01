export const usePage = () => useState<number>('page', () => 1)
export const usePageLimit = () => useState<number>('pageLimit')
export const useShowPanel = () => useState<boolean>('showPanel', ()=>false)
export const usePanelType = () => useState<"cart"|"user">('panelType', ()=>"cart")