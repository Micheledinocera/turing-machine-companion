export enum DEVICES{
    desktop="desktop",
    tablet="tablet",
    mobile="mobile",
};

export const useDevice = ()=>{
    const device=ref(DEVICES.desktop);
    const isNotDesktop=computed(()=>device.value==DEVICES.mobile || device.value==DEVICES.tablet);
    
    const getDeviceFromWidth=()=>{
        if(window.innerWidth>768)
            device.value= DEVICES.desktop
        else
            device.value= window.innerWidth>425?DEVICES.tablet:DEVICES.mobile
    }

    onMounted(() =>{
        getDeviceFromWidth();
        window.addEventListener("resize", () =>
            getDeviceFromWidth()
        )}
    )
    return { isNotDesktop }
}