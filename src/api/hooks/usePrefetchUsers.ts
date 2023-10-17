import { QUERY_KEYS } from "../constants.ts";
import { fetchApi } from "../utils.ts";
import { queryClient } from '../queryClient';
import {useEffect} from "react";

export default function usePrefetchUsers(data, {
    page, enabled
}) {
    useEffect(() => {
        queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.USERS, page],
            queryFn: () => fetchApi(`https://reqres.in/api/users?page=${page}`),
            enabled
        })
    }, [data, page]);
}



