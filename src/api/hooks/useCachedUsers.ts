import { queryClient } from '../queryClient.ts';
import { QUERY_KEYS } from "../constants.ts";

export default function useCachedUsers(page) {
    return queryClient?.getQueryData([QUERY_KEYS.USERS, page]);
}

