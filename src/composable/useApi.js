import axios from 'axios';
import { useUserSession } from '/@src/stores/userSession';
let api;
export function createApi() {
    api = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
    });
    api.interceptors.request.use((config) => {
        const userSession = useUserSession();
        if (userSession.isLoggedIn) {
            config.headers = {
                ...(config.headers ?? {}),
                Authorization: `Bearer ${userSession.token}`,
            };
        }
        return config;
    });
    return api;
}
export function useApi() {
    if (!api) {
        createApi();
    }
    return api;
}
//# sourceMappingURL=useApi.js.map