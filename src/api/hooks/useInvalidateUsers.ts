import { QUERY_KEYS } from "../constants.ts";
import { queryClient } from "../queryClient.ts";

export default function useInvalidateUsers() {
    return async () => {
        await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] })
    };
}