export const MS_IN_HOURS = 1000 * 60 * 60;

export const DEFAULT_QUERY_CONFIG = {
    cacheTime: MS_IN_HOURS,
    refetchOnMount: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
};

export const QUERY_KEYS = {
    USERS: 'users',
    CURRENT_USER: 'currentUser'
}