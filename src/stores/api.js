import { axiosInstanceNoAuth, axiosInstance, axiosInstanceFormData, axiosInstanceKakao } from '../middleware/axios';
import { objToFormData } from '../utils';
export function loginAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().post(`${import.meta.env.VITE_API_PATH}/members/login`, payload)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getMemberAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}//members/${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function signupAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().post(`${import.meta.env.VITE_API_PATH}/members/signup`, payload)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function signupIdCheckAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/members/check?loginId=${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getShopsAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shops?page=${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getShopDetailAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shops/${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function putShopAPI(id, payload) {
    return new Promise((resolve, reject) => {
        return axiosInstanceFormData().put(`${import.meta.env.VITE_API_PATH}/shops/${id}`, payload)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getHashtagAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/tags?page=${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getCodeAPI() {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/codes`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getCodeTypeAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/codes/type?type=${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function delShopHourAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().delete(`${import.meta.env.VITE_API_PATH}/shops/hour/${payload}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getProfileAPI() {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/member/profile/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getShopListAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/shop/list/?page=${payload.page}&search_point=${payload.search_point}&search_range=${payload.search_range}&search_text=${payload.search_text}&shop_code=${payload.shop_code}&hashtag=${payload.hashtag}&addr_01=${payload.addr_01}&addr_02=${payload.addr_02}&addr_03=${payload.addr_03}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getAuthShopDetailAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shop/${payload}/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getSpotListAPI() {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shop/spot/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getStampBasicListAPI(page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/order/stamps/basic/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getStampTumblerListAPI(page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/order/stamps/tumbler/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getCouponUseListAPI(page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/order/coupon/use/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getCouponUsedListAPI(page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/order/coupon/used/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function addSpotAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().post(`${import.meta.env.VITE_API_PATH}/shop/spot/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function delSpotAPI(id) {
    return new Promise((resolve, reject) => {
        return axiosInstance().delete(`${import.meta.env.VITE_API_PATH}/shop/spot/${id}/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getShopBookmarkAPI(id) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/shop/${id}/bookmark/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function addBookmarkAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().post(`${import.meta.env.VITE_API_PATH}/shop/bookmark/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function delBookmarkAPI(id) {
    return new Promise((resolve, reject) => {
        return axiosInstance().delete(`${import.meta.env.VITE_API_PATH}/shop/bookmark/${id}/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getCommentListAPI(id, page) {
    return new Promise((resolve, reject) => {
        return axiosInstanceNoAuth().get(`${import.meta.env.VITE_API_PATH}/shop/${id}/comment/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getCommentDetailAPI(id) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/shop/comment/${id}/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function addCommentAPI(id, payload) {
    return new Promise((resolve, reject) => {
        return axiosInstance().post(`${import.meta.env.VITE_API_PATH}/shop/${id}/comment/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function delCommentAPI(id) {
    return new Promise((resolve, reject) => {
        return axiosInstance().delete(`${import.meta.env.VITE_API_PATH}/shop/comment/${id}/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getPushListAPI(page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/my/push/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getPushUnreadAPI() {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/my/push/unread/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getFaqListAPI(page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/common/notice/?page=${page}&type=F`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getNoticeListAPI(page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/common/notice/?page=${page}&type=N`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function changeProfileAPI(payload) {
    return new Promise((resolve, reject) => {
        console.log(payload);
        return axiosInstance().post(`${import.meta.env.VITE_API_PATH}/member/change_profile/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function imageUploadAPI(payload) {
    return new Promise((resolve, reject) => {
        return axiosInstanceFormData().post(`${import.meta.env.VITE_API_PATH}/common/upload_image/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getMyCommentListAPI(page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/my/comment/?page=${page}&type=SHOP`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function searchAddressAPI(page, keyword) {
    console.log(keyword);
    return new Promise((resolve, reject) => {
        return axiosInstanceKakao().get(`/v2/local/search/address.json?size=30&page=${page}&query=${keyword}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function searchPointAPI(x, y) {
    return new Promise((resolve, reject) => {
        return axiosInstanceKakao().get(`/v2/local/geo/coord2address.json?x=${x}&y=${y}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function getCSTalkListAPI(id, page) {
    return new Promise((resolve, reject) => {
        return axiosInstance().get(`${import.meta.env.VITE_API_PATH}/common/talk/${id}/list/?page=${page}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
export function sendCSTalkUploadImageAPI(id, payload) {
    return new Promise((resolve, reject) => {
        return axiosInstanceFormData().post(`${import.meta.env.VITE_API_PATH}/common/talk/${id}/upload_image/`, objToFormData(payload))
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
}
//# sourceMappingURL=api.js.map