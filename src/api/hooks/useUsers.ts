import { useQuery } from 'react-query';
import {DEFAULT_QUERY_CONFIG, QUERY_KEYS} from "../constants.ts";
import { fetchApi } from "../utils.ts";

export default function useUsers(page) {
    return useQuery({
        ...DEFAULT_QUERY_CONFIG,
        queryFn: () => fetchApi(`https://reqres.in/api/users?page=${page}`),
        queryKey: [QUERY_KEYS.USERS, page]
    });
}