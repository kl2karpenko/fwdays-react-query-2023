import { useQuery } from 'react-query';
import { DEFAULT_QUERY_CONFIG, QUERY_KEYS } from "../constants.ts";
import { useNavigate } from "react-router-dom";

export default function useCurrentUser() {
    const navigate = useNavigate();

    return useQuery({
        ...DEFAULT_QUERY_CONFIG,
        queryFn: () => localStorage.getItem('user'),
        onError: () => navigate('/login'),
        queryKey: [QUERY_KEYS.CURRENT_USER],
        refetchInterval: 2000,
    });
}