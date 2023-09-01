export interface User {
    username: string;
    email:string;
    firstName:string;
    lastName:string;
    image:string;
    id:number;
}

export const useUser = () => useState<User|null>('user')

export const useServerUser= async () => {
    const user = useUser();
    const { getCart } = await useServerCart();

    const login = async (username:string,password:string) => {
        const objectToSend={
            username:username,
            password:password
        }
        const url='https://dummyjson.com/auth/login';
        const { data } = await useLazyFetch<User>(url,{
            method: 'POST',
            body: objectToSend
        });
        user.value=data.value as User|null;
        getCart();
    }

    return{ login }
}