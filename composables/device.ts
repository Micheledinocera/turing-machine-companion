export enum DEVICES{
    desktop="desktop",
    tablet="tablet",
    mobile="mobile",
};

export const useDevice = ()=>{
    const device=ref(DEVICES.desktop);
    const isNotDesktop=computed(()=>device.value==DEVICES.mobile || device.value==DEVICES.tablet);
    onMounted(() =>{
        device.value=getDeviceFromWidth();
        window.addEventListener("resize", () =>
            device.value=getDeviceFromWidth()
        )}
    )
    return { isNotDesktop }
}