import store from '../stores';
export default {};
export const getUserAgent = () => {
    return navigator.userAgent;
};
export const getDeviceToken = () => {
    return '';
};
export const getAppVersion = () => {
    return '';
};
export const getOsTypeCode = () => {
    const userAgent = getUserAgent();
    if (userAgent.includes('ecocow-ecomap-and')) {
        return 'OA';
    }
    else if (userAgent.includes('ecocow-ecomap-ios')) {
        return 'OI';
    }
    else {
        return 'OW';
    }
};
export const isSignIn = () => {
    if ((store.state.accessToken || localStorage.accessToken) && store.state.profile.user > 0) {
        return true;
    }
    return false;
};
export const goAuthPage = () => {
    setTimeout(() => {
    }, 100);
};
export const gogossing = (data) => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const redirect = params.get('redirect');
    if (redirect) {
        console.log(redirect);
        setTimeout(() => {
        }, 500);
    }
    else {
        setTimeout(() => {
            console.log('go Home');
        }, 500);
    }
};
export const checkAuth = async () => {
    if (localStorage.refreshToken) {
        const d = {
            refresh_token: localStorage.refreshToken,
            device_token: store.state.deviceToken || localStorage.deviceToken || 'web',
            app_version: getAppVersion() || 'web',
            os_type_code: getOsTypeCode(),
            user_agent: getUserAgent(),
        };
    }
};
export const setAuth = (data) => {
    if (data.refresh_token) {
        localStorage.refreshToken = data.refresh_token;
    }
    if (data.access_token) {
        store.dispatch('setAccessToken', data.access_token);
        localStorage.accessToken = data.access_token;
    }
    store.dispatch('getProfile');
};
export const delAuth = () => {
    localStorage.removeItem('profile');
    store.dispatch('setProfile', {});
    store.dispatch('setAccessToken', '');
    if (localStorage.refreshToken)
        store.dispatch('logout');
    if (localStorage.refreshToken) {
        localStorage.removeItem('refreshToken');
    }
    if (localStorage.accessToken) {
        localStorage.removeItem('accessToken');
    }
    if (localStorage.redirect) {
        localStorage.removeItem('redirect');
    }
};
export const objToFormData = (object) => Object.keys(object).reduce((formData, key) => {
    if (object[key] !== undefined)
        formData.append(key, object[key] || object[key] === 0 ? object[key] : '');
    return formData;
}, new FormData());
export const getDistanceFromLatLonInCneter = (lat1, lng1, lat2, lng2) => {
    const Clat1 = lat1 * Math.PI / 180;
    const Clat2 = lat2 * Math.PI / 180;
    const Alon1 = lng1 * Math.PI / 180;
    const Alon2 = lng2 * Math.PI / 180;
    const Bx = Math.cos(Clat2) * Math.cos(Alon2 - Alon1);
    const By = Math.cos(Clat2) * Math.sin(Alon2 - Alon1);
    const W3 = Math.atan2(Math.sin(Clat1) + Math.sin(Clat2), Math.sqrt((Math.cos(Clat1) + Bx) * (Math.cos(Clat1) + Bx) + By * By));
    const A3 = Alon1 + Math.atan2(By, Math.cos(Clat1) + Bx);
    const lat3 = W3 * 180 / Math.PI;
    const lon3 = A3 * 180 / Math.PI;
    return [lon3, lat3];
};
export const getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lng2 - lng1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
};
export const evmAlert = (st) => {
    store.dispatch('setDialogAlert', {
        active: 'alert',
        title: 'DEV ALERT',
        msg: st,
        positive: {
            name: '확인',
            click: () => {
            }
        }
    });
};
export const checkGPS = () => {
    startGeolocation();
};
export const checkGPSPermission = async () => {
    const code = getOsTypeCode();
    if (code === 'OA') {
        try {
            const B = await window.android.getGps();
            if (B === 'false') {
                return true;
            }
        }
        catch (err) { }
    }
    else if (code === 'OW') {
        return true;
    }
    return false;
};
export const getInitials = (name) => {
    const names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};
export const copyString = async (s) => {
};
export const vibrator = () => {
};
let GEOID = -1;
export const startGeolocation = () => {
    if (navigator.geolocation) {
        if (GEOID !== -1)
            clearGeolocation();
        console.log('[Geolocation 연결]', navigator.geolocation);
        GEOID = navigator.geolocation.watchPosition((position) => {
            store.dispatch('setGeolocation', position);
        }, (error) => {
        }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
    }
    else {
        store.dispatch('setDialogAlert', {
            active: 'alert',
            title: '알림',
            msg: '가는김애를 사용하기 위해서는 위치정보 사용에 동의 해야 합니다.',
            positive: {
                name: '확인',
                click: () => {
                }
            }
        });
    }
};
export const clearGeolocation = () => {
    if (GEOID != -1) {
        navigator.geolocation.clearWatch(GEOID);
        GEOID = -1;
    }
};
export const juminCheck = (n) => {
    let jumin = n.split('');
    let ckarr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    for (let i = 0; i < jumin.length - 1; i++) {
        jumin[i] = jumin[i] * ckarr[i];
    }
    let juminlast = jumin[jumin.length - 1];
    let sum = 0;
    for (let i = 0; i < jumin.length - 1; i++) {
        sum += jumin[i];
    }
    sum = sum % 11;
    sum = 11 - sum;
    if (sum > 9) {
        sum = sum % 10;
    }
    if (sum == juminlast) {
        return true;
    }
    return false;
    if (sum != juminlast && juminlast != undefined) {
        return false;
    }
};
export const charByteSize = (st) => {
    if (st === null || st.length === 0) {
        return 0;
    }
    let size = 0;
    let rIndex = st.length;
    for (let i = 0; i < rIndex; i++) {
        size += charByte(st.charAt(i));
    }
    return size;
};
export const charByte = (ch) => {
    if (ch == null || ch.length === 0) {
        return 0;
    }
    let charCode = ch.charCodeAt(0);
    if (charCode <= 0x00007F) {
        return 1;
    }
    else if (charCode <= 0x0007FF) {
        return 2;
    }
    else if (charCode <= 0x00FFFF) {
        return 2;
    }
    else {
        return 4;
    }
};
let CSWS;
let CSWSID;
export const setCSWS = (id) => {
    if (CSWS) {
        CSWS.close();
        CSWS = null;
    }
    if (!CSWS) {
        CSWSID = id;
        CSWS = new WebSocket(`${import.meta.env.VITE_WS_URL}/ws/customer/${id}/?${store.state.accessToken || localStorage.accessToken}`);
    }
    return CSWS;
};
export const hash = Math.floor(Math.random() * 90000) + 10000;
//# sourceMappingURL=index.js.map