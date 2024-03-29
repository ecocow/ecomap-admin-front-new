import { axiosInstanceNoAuth, axiosInstance, axiosInstanceFormData, axiosInstanceKakao } from '../middleware/axios'

import { objToFormData } from '../utils'
import store from '../stores/index'

interface SearchList {
    page: number;
    keyword: string;
}
// 로그인 인증번호 발송
export function loginAPI (payload: object) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().post(`${import.meta.env.VITE_API_PATH}/members/login`, payload)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 로그인
export function getMemberAPI (payload: number) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}//members/${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// Signup
export function signupAPI (payload: object) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().post(`${import.meta.env.VITE_API_PATH}/members/signup`, payload)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// Signup id check
export function signupIdCheckAPI (payload: string) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/members/check?loginId=${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}

// Shop list
export function getShopsAPI (payload: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shops?page=${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// Shop detail
export function getShopDetailAPI (payload: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shops/${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// Shop put
export function putShopAPI (id: number, payload: object) {
    return new Promise((resolve, reject) => {
        return axiosInstanceFormData().put(`${import.meta.env.VITE_API_PATH}/shops/${id}`, payload)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// Hash tag
export function getHashtagAPI (payload: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/tags?page=${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// Code
export function getCodeAPI () {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/codes`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// Code
export function getCodeTypeAPI (payload: string) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/codes/type?type=${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// Shop hour delete
export function delShopHourAPI (payload: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().delete(`${import.meta.env.VITE_API_PATH}/shops/hour/${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 프로필
export function getProfileAPI () {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/member/profile/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 업체리스트
interface ShopList {
    page: number;
    search_point: string;
    search_range: string;
    search_text: string;
    shop_code: string;
    hashtag: string;
    addr_01: string;
    addr_02: string;
    addr_03: string;
}
export function getShopListAPI (payload: ShopList) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/shop/list/?page=${payload.page}&search_point=${payload.search_point}&search_range=${payload.search_range}&search_text=${payload.search_text}&shop_code=${payload.shop_code}&hashtag=${payload.hashtag}&addr_01=${payload.addr_01}&addr_02=${payload.addr_02}&addr_03=${payload.addr_03}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// export function getShopDetailAPI (payload: number) {
//     return new Promise((resolve, reject) => {
//         return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/shop/${payload}/`)
//             .then(response => resolve(response))
//             .catch(err => reject(err))
//     })
// }
export function getAuthShopDetailAPI (payload: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shop/${payload}/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}

// 스팟
export function getSpotListAPI () {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shop/spot/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 스템프
export function getStampBasicListAPI (page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/order/stamps/basic/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function getStampTumblerListAPI (page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/order/stamps/tumbler/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 쿠폰
export function getCouponUseListAPI (page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/order/coupon/use/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function getCouponUsedListAPI (page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/order/coupon/used/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function addSpotAPI (payload: object) {
    return new Promise((resolve, reject) => {
        return axiosInstance().post(`${import.meta.env.VITE_API_PATH}/shop/spot/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function delSpotAPI (id: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().delete(`${import.meta.env.VITE_API_PATH}/shop/spot/${id}/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 북마크
export function getShopBookmarkAPI (id: number) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/shop/${id}/bookmark/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function addBookmarkAPI (payload: object) {
    return new Promise((resolve, reject) => {
        return axiosInstance().post(`${import.meta.env.VITE_API_PATH}/shop/bookmark/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function delBookmarkAPI (id: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().delete(`${import.meta.env.VITE_API_PATH}/shop/bookmark/${id}/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 샆 댓글
export function getCommentListAPI (id: number, page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/shop/${id}/comment/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function getCommentDetailAPI (id: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shop/comment/${id}/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function addCommentAPI (id: number, payload: object) {
    return new Promise((resolve, reject) => {
        return axiosInstance().post(`${import.meta.env.VITE_API_PATH}/shop/${id}/comment/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function delCommentAPI (id: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().delete(`${import.meta.env.VITE_API_PATH}/shop/comment/${id}/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 푸쉬
export function getPushListAPI (page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/my/push/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function getPushUnreadAPI () {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/my/push/unread/`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// CS
export function getFaqListAPI (page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/common/notice/?page=${page}&type=F`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function getNoticeListAPI (page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/common/notice/?page=${page}&type=N`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 나의
export function changeProfileAPI (payload: object) {
    return new Promise((resolve, reject) => {
        console.log(payload)
        return axiosInstance().post(`${import.meta.env.VITE_API_PATH}/member/change_profile/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function imageUploadAPI (payload: object) {
    return new Promise((resolve, reject) => {
        return axiosInstanceFormData().post(`${import.meta.env.VITE_API_PATH}/common/upload_image/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function getMyCommentListAPI (page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/my/comment/?page=${page}&type=SHOP`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// 카카오 주소검색
export function searchAddressAPI (page: number, keyword: string) {
    console.log(keyword)
    return new Promise((resolve, reject) => {
        return axiosInstanceKakao().get(`/v2/local/search/address.json?size=30&page=${page}&query=${keyword}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function searchPointAPI (x: string, y: string) {
    return new Promise((resolve, reject) => {
        return axiosInstanceKakao().get(`/v2/local/geo/coord2address.json?x=${x}&y=${y}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
// CS문의
export function getCSTalkListAPI (id: any, page: number) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/common/talk/${id}/list/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}
export function sendCSTalkUploadImageAPI (id: any, payload: object) {
    return new Promise((resolve, reject) => {
        return axiosInstanceFormData().post(`${import.meta.env.VITE_API_PATH}/common/talk/${id}/upload_image/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
}