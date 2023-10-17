import { useMutation } from 'react-query';
import { QUERY_KEYS } from "../constants.ts";
import { fetchApi } from "../utils.ts";
import { IUser } from "../interfaces.ts";

export default function useLoginUser() {

    return useMutation({
        mutationFn: async (user: IUser) => {
            const data = await fetchApi('https://reqres.in/api/login', { method: 'POST', body: JSON.stringify(user) });

            localStorage.setItem('user', data?.token);
            return data?.token;
        },
        mutationKey: QUERY_KEYS.CURRENT_USER
    });
}