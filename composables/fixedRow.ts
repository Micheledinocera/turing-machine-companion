const scrollTop=ref(0);
const selectedRowRef=ref() as Ref<HTMLElement>;

export const useFixedRow = ()=>{
    const isFixedRow=computed(()=>{
        return scrollTop.value-selectedRowRef.value?.offsetTop>-54
    })
    return {scrollTop,selectedRowRef,isFixedRow}
}