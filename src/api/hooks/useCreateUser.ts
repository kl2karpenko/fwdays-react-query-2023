import { useMutation } from 'react-query';
import { fetchApi } from "../utils.ts";

export default function useCreateUser() {
    return useMutation({
        mutationFn: (newUser: { email: string; name: string }) => fetchApi('https://reqres.in/api/users', { method: 'POST', body: JSON.stringify(newUser) }),
    });
}