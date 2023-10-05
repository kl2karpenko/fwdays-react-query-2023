import { useMutation } from 'react-query';
import { fetchApi } from "../utils.ts";

export default function useCreateUserMutation() {
    return useMutation({
        mutationFn: (newUser: { name: string }) => fetchApi('https://reqres.in/api/users', { body: JSON.stringify(newUser) }),
    });
}