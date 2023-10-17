import { useMutation } from 'react-query';
import { fetchApi } from "../utils.ts";
import { queryClient } from "../queryClient.ts";
import { QUERY_KEYS } from "../constants.ts";

export default function useCreateUser() {
    return useMutation({
        mutationFn: (newUser: { email: string; name: string }) =>
          fetchApi('https://reqres.in/api/users', {
              method: 'POST', body: JSON.stringify(newUser)
          }),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] })
        },
        onError: async () => {
            console.error('Seems like users was not updated!');
        }
    });
}



