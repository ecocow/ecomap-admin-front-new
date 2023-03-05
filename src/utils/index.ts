// import router from '../router'
import store from '../stores'
import { refreshAPI } from '../stores/api'
export default {}

export const getUserAgent = () : string => {
 return navigator.userAgent
}
export const getDeviceToken = () : string => {
 // const code = getOsTypeCode()
 // if (code === 'OA') {
 //  try {
 //   return window.android.getToken()
 //  } catch (err) {}
 // } else if (code === 'OI') {
 //  try {
 //   window.webkit.messageHandlers.APP.postMessage('getToken')
 //   return store.state.deviceToken
 //  } catch {}
 // } else {
 // }
 return ''
}
export const getAppVersion = () : string => {
 // const code = getOsTypeCode()
 // if (code === 'OA') {
 //  try {
 //   return window.android.getAppVersion()
 //  } catch (err) {}
 // } else if (code === 'OI') {
 //  try {
 //   window.webkit.messageHandlers.APP.postMessage('getVersion')
 //   return store.state.appVersion
 //  } catch {}
 // } else {
 //  return ''
 // }
 return ''
}
export const getOsTypeCode = () : string => {
 const userAgent = getUserAgent()
  if (userAgent.includes('ecocow-ecomap-and')) {
    return 'OA'
  } else if (userAgent.includes('ecocow-ecomap-ios')) {
    return 'OI'
  } else {
    return 'OW'
  }
}
export const isSignIn = () : boolean => {
 if ((store.state.accessToken || localStorage.accessToken) && store.state.profile.user > 0) {
   return true
 }
 return false
}
export const goAuthPage = () => {
 setTimeout(() => {
  // router.replace({name: 'auth', query: { redirect: window.location.pathname + window.location.search } })
 }, 100)
}
export const gogossing = (data: any) => {
  if (data) setAuth(data)
  const query = window.location.search
  const params = new URLSearchParams(query)
  const redirect = params.get('redirect')
  if (redirect) {
   console.log(redirect)
   setTimeout(() => {
    // router.push(redirect)
   }, 500)
  } else {
   setTimeout(() => {
    console.log('go Home')
    // router.push({ name: 'home' })
   }, 500)
 }
}
export const checkAuth = async () => {
  if (localStorage.refreshToken) {
   const d = {
    refresh_token: localStorage.refreshToken,
    device_token: store.state.deviceToken || localStorage.deviceToken || 'web',
    app_version: getAppVersion() || 'web',
    os_type_code: getOsTypeCode(),
    user_agent: getUserAgent(),
   }
   const { data } = <any> await refreshAPI(d)
   console.log('------')
   console.log(data)
   if (data.code === 0) {
    localStorage.accessToken = data.access_token
    store.dispatch('setAccessToken', data.access_token)
    store.dispatch('showSnackBar', {
     active: 'snackbar',
     msg: '인증토큰이 재발행되어 요청하신 작업을 완료하지 못했습니다. \n다시 시도해주세요.',
     type: 'susccess'
    })
   } else {
    delAuth()
    goAuthPage()
   }
  } else {
   delAuth()
   goAuthPage()
 }
}
export const setAuth = (data: any) => {
 if (data.refresh_token) {
  localStorage.refreshToken = data.refresh_token
 }
 if (data.access_token) {
  store.dispatch('setAccessToken', data.access_token)
  localStorage.accessToken = data.access_token
 }
  store.dispatch('getProfile')
}
export const delAuth = () => {
 localStorage.removeItem('profile')
 store.dispatch('setProfile', {})
 store.dispatch('setAccessToken', '')
 if (localStorage.refreshToken) store.dispatch('logout')
 if (localStorage.refreshToken) {
  localStorage.removeItem('refreshToken')
 }
 if (localStorage.accessToken) {
  localStorage.removeItem('accessToken')
 }
 if (localStorage.redirect) {
  localStorage.removeItem('redirect')
 }
}

export const objToFormData = (object: object) => Object.keys(object).reduce((formData, key) => {
 // @ts-ignore
 if (object[key] !== undefined) formData.append(key, object[key] || object[key] === 0 ? object[key] : '')
 return formData
}, new FormData())

// 두좌표간 거리계산 함수
export const getDistanceFromLatLonInCneter = (lat1: number, lng1: number,  lat2: number, lng2: number) : any => {
 const Clat1 = lat1 * Math.PI / 180
 const Clat2 = lat2 * Math.PI / 180
 const Alon1 = lng1 * Math.PI / 180
 const Alon2 = lng2 * Math.PI / 180
 const Bx = Math.cos(Clat2) * Math.cos(Alon2 - Alon1)
 const By = Math.cos(Clat2) * Math.sin(Alon2 - Alon1)
 const W3 = Math.atan2(Math.sin(Clat1) + Math.sin(Clat2), Math.sqrt((Math.cos(Clat1) + Bx) * (Math.cos(Clat1) + Bx) + By * By))
 const A3 = Alon1 + Math.atan2(By, Math.cos(Clat1) + Bx) // 라디안을 디그리로 변환
 const lat3 = W3 * 180 / Math.PI
 const lon3 = A3 * 180 / Math.PI
 return [lon3, lat3]
}
// 두좌표간 거리계산 함수
export const getDistanceFromLatLonInKm = (lat1: number, lng1: number,  lat2: number, lng2: number) : any => {
 function deg2rad(deg: number) {
  return deg * (Math.PI/180)
 }
 const R = 6371
 const dLat = deg2rad(lat2-lat1)
 const dLon = deg2rad(lng2-lng1)
 const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2)
 const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
 const d = R * c
 return d
}
// [임시] 데브알럿
export const evmAlert = (st: string) => {
 store.dispatch('setDialogAlert', {
  active: 'alert',
  title: 'DEV ALERT',
  msg: st,
  positive: {
   name: '확인',
   click: () => {
   }
  }
 })
}
// Geolocation

export const checkGPS = () : void => {
 startGeolocation()
 // if (!!checkGPSPermission()) {
 //  startGeolocation()
 // } else {
 //  store.dispatch('setDialogAlert', {
 //   active: 'alert',
 //   title: '오류',
 //   msg: 'GPS가 꺼져있습니다.\n설정에서 GPS사용을 허용해야 원활한 사용이 가능합니다..',
 //   positive: {
 //    name: '확인',
 //    click: () => {
 //     // router.go(-1)
 //    }
 //   }
 //  })
 // }
}
export const checkGPSPermission = async () : Promise<boolean> => {
 const code = getOsTypeCode()
 if (code === 'OA') {
  try {
   // @ts-ignore
   const B: string = await window.android.getGps()
   if (B === 'false') {
    return true
   }
  } catch (err) {}
 } else if (code === 'OW') {
  return true
 }
 return false
}

export const getInitials = (name: string) : string => {
 const names = name.split(' ')
 let initials: string = names[0].substring(0, 1).toUpperCase()
 if (names.length > 1) {
  initials += names[names.length - 1].substring(0, 1).toUpperCase()
 }
 return initials
}
// 클립보드 복사// Adress Copy
export const copyString = async (s: string): Promise<void> => {
 // if (s) {
 //  if (getOsTypeCode() === 'OA') {
 //   try {
 //    window.android.getClipBoard(s)
 //    store.dispatch('showSnackBar', {
 //     active: 'snackbar',
 //     msg: '클립보드 복사완료',
 //     type: 'susccess'
 //    })
 //    vibrator()
 //   } catch (err) {}
 //  } else if (getOsTypeCode() === 'OI') {
 //   try {
 //    window.webkit.messageHandlers.EVM.postMessage(s)
 //    store.dispatch('showSnackBar', {
 //     active: 'snackbar',
 //     msg: '클립보드 복사완료',
 //     type: 'susccess'
 //    })
 //    vibrator()
 //   } catch {}
 //  } else {
 //   navigator.clipboard.writeText(s)
 //    .then(() => {
 //     store.dispatch('showSnackBar', {
 //      active: 'snackbar',
 //      msg: '클립보드 복사완료',
 //      type: 'susccess'
 //     })
 //     vibrator()
 //    })
 //    .catch(err => {
 //     console.log('Something went wrong', err);
 //    })
 //   }
 //  }
}
export const vibrator = () : void => {
 // const code = getOsTypeCode()
 // if (code === 'OA') {
 //  try {
 //    window.android.vibrator()
 //   } catch {}
 //  } else  if (code === 'OI') {
 //   try {
 //    window.webkit.messageHandlers.EVM.postMessage('vibrator')
 //  } catch {}
 // }
}
let GEOID: any = -1
export const startGeolocation = () => {
 if (navigator.geolocation) {
  if (GEOID !== -1) clearGeolocation()
  console.log('[Geolocation 연결]', navigator.geolocation)
  GEOID = navigator.geolocation.watchPosition((position) : void => {
   store.dispatch('setGeolocation', position)
  }, (error) : void => {
  },{enableHighAccuracy:true, timeout:10000, maximumAge:60000})
 } else {
  store.dispatch('setDialogAlert', {
   active: 'alert',
   title: '알림',
   msg: '가는김애를 사용하기 위해서는 위치정보 사용에 동의 해야 합니다.',
   positive: {
    name: '확인',
    click: () => {
    }
   }
  })
 }
}
export const clearGeolocation = () => {
 if (GEOID != -1) {
  navigator.geolocation.clearWatch(GEOID)
  GEOID = -1
 }
}

export const juminCheck = (n: string) : boolean => {
 let jumin: any = n.split('')
 let ckarr = [2,3,4,5,6,7,8,9,2,3,4,5]
 // 1. 각자리에 2,3,4,5,6,7,8,9,2,3,4,5를 곱해줌. 단 마지막 자리는 빼놓음
 for(let i=0; i<jumin.length-1; i++){
  jumin[i] = jumin[i] * ckarr[i];
 }
 let juminlast = jumin[jumin.length-1]; // 주민등록번호 마지막자리 따로 빼두기
 // 2. 각 자리의 숫자를 모두 더함
 let sum = 0;
 for(let i=0; i<jumin.length-1; i++){
  sum += jumin[i];
 }
 //3. 11로 나눈 나머지 값을 구함
 sum = sum % 11;
 // 4. 11에서 결과값을 뺌(단, 마지막 결과가 두자리인 경우 다시 10으로 나눈 나머지 값을 구함)
 sum = 11 - sum;
 if(sum > 9){
  sum = sum % 10;
 }
 // 5. 결과가 주민등록번호 마지막 자리와 일치하면 유효한 주민등록번호임
 if(sum == juminlast){ // 결과값과 주민등록번호 마지막 번호가 일치한다면
  return true
 }
 return false
 if(sum != juminlast && juminlast != undefined){
  // 결과값과 주민등록번호 마지막 번호가 일치하지않는다면
  //id가 result인 Element에 해당 값 삽입
  return false
 }
}
export const charByteSize = (st: string) : number => {
 if (st === null || st.length === 0) {
  return 0
 }
 let size = 0
 let rIndex = st.length
 for (let i = 0; i < rIndex; i++) {
  size += charByte(st.charAt(i))
 }
 return size
}
export const charByte = (ch: string) : number => {
 if (ch == null || ch.length === 0) {
  return 0
 }
 let charCode = ch.charCodeAt(0)
 if (charCode <= 0x00007F) {
  return 1
 } else if (charCode <= 0x0007FF) {
  return 2
 } else if (charCode <= 0x00FFFF) {
  return 2
 } else {
  return 4
 }
}
////////////////// WS Master /////////////////////
// 웹소켓
let CSWS: WebSocket | null
let CSWSID: number
export const setCSWS = (id: number) : any => {
 if (CSWS) {
  CSWS.close()
  CSWS = null
 }
 if (!CSWS) {
  CSWSID = id
  // 소켓통신 생성
  CSWS = new WebSocket(`${import.meta.env.VITE_WS_URL}/ws/customer/${id}/?${store.state.accessToken || localStorage.accessToken}`)
 }
 return CSWS
}

export const hash = Math.floor(Math.random() * 90000) + 10000;