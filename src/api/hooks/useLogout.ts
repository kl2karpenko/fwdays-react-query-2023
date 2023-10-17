import { QUERY_KEYS } from "../constants.ts";
import { queryClient } from "../queryClient.ts";

export default function useLogout() {
    return async () => {
        localStorage.removeItem('user');
        await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CURRENT_USER] });
    };
}


