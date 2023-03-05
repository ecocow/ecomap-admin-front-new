import {State, Dialogs, SearchEvent} from './state'
import * as t from './types'
import { getUserAgent, getDeviceToken, getAppVersion, getOsTypeCode } from '../utils'
// import router from '../router'
import {SET_PROFILE, SET_SEARCH_EVENT} from "./types";
let snackBarInter: any = null
export default {
  [t.SHOW_SNACK_BAR](state: State, payload: Dialogs) {
    state.dialogSnackbar = payload
    if (payload.active) {
      clearTimeout(snackBarInter)
      snackBarInter = setTimeout(() => {
        state.dialogSnackbar.active = ''
        state.dialogSnackbar.msg = ''
      }, 2000)
    }
  },
  [t.SET_GEOLOCATION](state: State, payload: any) {
    console.log(payload)
    if (payload.coords.longitude && payload.coords.latitude) {
      state.geolocation.longitude = payload.coords.longitude,
          state.geolocation.latitude = payload.coords.latitude
      localStorage.longitude = payload.coords.longitude
      localStorage.latitude = payload.coords.latitude
    }
  },
  [t.SET_APP_INFO](state: State) {
    state.deviceToken = getDeviceToken()
    state.appVersion = getAppVersion()
    state.osTypeCode = getOsTypeCode()
    state.userAgent = getUserAgent()
  },
  [t.SET_DEVICE_TOKEN](state: State, payload: string) {
    state.deviceToken = payload
    localStorage.deviceToken = payload
  },
  [t.GET_PROFILE_PENDING](state: State, payload: object) {
  },
  [t.GET_PROFILE_SUCCESS](state: State, payload: any) {
    if (payload.profile?.image_path === 'none' || payload.profile?.image_path === 'None') payload.profile.image_path = ''
    state.profile = payload.profile
    localStorage.profile = JSON.stringify(payload.profile)
    console.log('state.profile=', state.profile)
  },
  [t.GET_PROFILE_FAIL](state: State, payload: object) {
  },
  [t.SET_PROFILE](state: State, payload: any) {
    state.profile = payload
  },
  [t.SET_ACCESS_TOKEN](state: State, payload: string) {
    state.accessToken = payload
  },
  [t.SET_DRAWER](state: State, payload: boolean) {
    state.drawer = payload
  },
  [t.SET_SEARCH](state: State, payload: boolean) {
    state.search = payload
  },
  [t.SET_CLICK_MARKER_ID](state: State, payload: number) {
    state.pinClickId = payload
  },
  [t.SET_DIALOG_CONFIRM_ALERT](state: State, payload: Dialogs) {
    state.dialogConfirm = payload
  },
  [t.SET_DIALOG_CROPER](state: State, payload: Dialogs) {
    console.log('SET_DIALOG_CROPER', payload)
    state.dialogCroper = payload
  },
  [t.SET_SEARCH_EVENT](state: State, payload: SearchEvent) {
    state.searchEvent = payload
  },
  [t.LOGOUT](state: State) {
    state.profile = {
      account_bank: '',
      account_bank_code: '',
      account_name: '',
      account_no: '',
      account_verify_yn: '',
      avg_star: 0,
      coin: 0,
      del_yn: '',
      delivery_date: '',
      delivery_yn: '',
      dormant_yn: '',
      image_path: '',
      last_login_date: '',
      level: 0,
      marketing_yn: '',
      mod_date: '',
      nick_name: '',
      noti_ban_time: '',
      noti_yn: '',
      push_yn: '',
      reg_date: '',
      stop_yn: '',
      user: 0,
    }
    state.accessToken = ''
  }
}
