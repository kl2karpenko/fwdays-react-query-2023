import { useQuery } from 'react-query';
import {DEFAULT_QUERY_CONFIG, QUERY_KEYS} from "../constants.ts";
import { fetchApi } from "../utils.ts";
import {useNavigate} from "react-router-dom";

export default function useCurrentUser() {
    const navigate = useNavigate();

    return useQuery({
        ...DEFAULT_QUERY_CONFIG,
        queryFn: async () => {
            const response = await fetchApi('https://reqres.in/api/users/4');

            return response?.data;
        },
        onError: () => {
            console.log('onError');
            navigate('/login')
        },
        queryKey: QUERY_KEYS.CURRENT_USER
    });
}