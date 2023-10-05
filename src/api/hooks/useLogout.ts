import { useMutation } from 'react-query';
import { QUERY_KEYS } from "../constants.ts";
import { queryClient } from "../queryClient.ts";

export default function useLogout() {
    return useMutation({
        mutationFn: () => {
            return Promise.resolve();
        },
        onSuccess: async () => {
            await queryClient.resetQueries({ queryKey: [QUERY_KEYS.CURRENT_USER] })
        }
    });
}