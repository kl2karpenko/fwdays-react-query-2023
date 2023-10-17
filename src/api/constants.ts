export const MS_IN_HOURS = 1000 * 60 * 60;

export const DEFAULT_QUERY_CONFIG = {
    cacheTime: MS_IN_HOURS,
    retry: false,
    keepPreviousData: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false
};

export const QUERY_KEYS = {
    USERS: 'users',
    CURRENT_USER: 'currentUser'
}