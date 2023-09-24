export interface Version {
    buildMajor:number,
    buildMinor:number,
    buildRevision:number
}

const readbleVersion=(data:Version|null)=>{
    return data?Object.values(data).join("."):""
}

export const useVersion= async () => {
    const { data } = await useFetch<Version>('/metadata.json?'+Date.now());
    return readbleVersion(data.value)
}