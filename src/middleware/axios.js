import axios from 'axios';
export const axiosInstanceNoAuth = () => {
    const instance = axios.create({
        baseURL: String(import.meta.env.VITE_BASE_URL),
        timeout: 50000,
        withCredentials: true,
        headers: {
            'content-type': 'application/json',
        }
    });
    instance.interceptors.response.use(response);
    return instance;
};
export const axiosInstance = () => {
    const instance = axios.create({
        baseURL: String(import.meta.env.VITE_BASE_URL),
        timeout: 50000,
        withCredentials: true,
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.accessToken}`
        }
    });
    instance.interceptors.response.use(response);
    return instance;
};
export const axiosInstanceFormData = function () {
    const instance = axios.create({
        baseURL: String(import.meta.env.VITE_BASE_URL),
        timeout: 50000,
        withCredentials: true,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.accessToken}`
        }
    });
    instance.interceptors.response.use(response);
    return instance;
};
export const axiosInstanceKakao = function () {
    const instance = axios.create({
        baseURL: 'https://dapi.kakao.com',
        timeout: 50000,
        headers: {
            'content-type': 'application/json',
            'Authorization': 'KakaoAK 74f5c81fa18a6ca0a0109383a5fec9ef'
        }
    });
    instance.interceptors.response.use(response);
    return instance;
};
let timeInst = null;
const response = async (response) => {
    if (response.data.code === 4444) {
        console.log('444444==>', response, response.data.code);
        return;
    }
    return response;
};
//# sourceMappingURL=axios.js.map