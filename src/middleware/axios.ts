import axios from 'axios'
import store from '../stores'

export const axiosInstanceNoAuth = () => {
    const instance = axios.create({
        baseURL: String(import.meta.env.VITE_BASE_URL),
        timeout: 50000,
        withCredentials: true,
        headers: {
            'content-type': 'application/json',
        }
    })
    instance.interceptors.response.use(response)
    return instance
}
export const axiosInstance = () => {
    const instance = axios.create({
        baseURL: String(import.meta.env.VITE_BASE_URL),
        timeout: 50000,
        withCredentials: true,
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.accessToken}`
        }
    })
    instance.interceptors.response.use(response)
    return instance
}
export const axiosInstanceFormData = function () {
    const instance = axios.create({
        baseURL: String(import.meta.env.VITE_BASE_URL),
        timeout: 50000,
        withCredentials: true,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.accessToken}`
        }
    })
    instance.interceptors.response.use(response)
    return instance
}
export const axiosInstanceKakao = function () {
    const instance = axios.create({
        baseURL: 'https://dapi.kakao.com',
        timeout: 50000,
        headers: {
            'content-type': 'application/json',
            'Authorization': 'KakaoAK 74f5c81fa18a6ca0a0109383a5fec9ef'
        }
    })
    instance.interceptors.response.use(response)
    return instance
}
let timeInst : any = null
const response = async (response: any) => {
    if (response.data.code === 4444) {
        // 서버오류 처리
        console.log('444444==>', response, response.data.code)
        // checkAuth()
        // localStorage.removeItem('profile')
        // localStorage.removeItem('accessToken')
        // store.dispatch('setProfile', {})
        // store.dispatch('setAccessToken', '')

        // if (timeInst !== null) {
        //     clearTimeout(timeInst)
        //     timeInst = null
        // }
        // timeInst = setTimeout(delAuth, 100)
        // store.dispatch('setLoadingClear')
        // store.dispatch('setDialogAlert', {
        //     active: 'alert',
        //     title: '오류(4444)',
        //     msg: '오류가 발생하였습니다.\n잠시 후 다시 시도해주세요.',
        //     positive: {
        //         name: '확인',
        //         click: () => {
        //             // checkAuth()
        //             goAuthPage()
        //         }
        //     }
        // })
        return
    }

    return response
}