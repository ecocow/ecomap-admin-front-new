import { ActionContext } from 'vuex'
import { Callback, Dialogs, SearchEvent, State } from './state'
import * as t from './types'
import {
    getProfileAPI,
    logoutAPI
} from './api'
import store from "@/store/index";
import {SHOW_SNACK_BAR} from "./types";

export default {
    setDeviceToken({commit}: ActionContext<State, State>, payload: string) {
        commit(t.SET_DEVICE_TOKEN, payload)
    },
    setAppversion({commit}: ActionContext<State, State>, payload: string) {
        commit(t.SET_APP_VERSION, payload)
    },
    showSnackBar({commit}: ActionContext<State, State>, payload: string) {
        commit(t.SHOW_SNACK_BAR, payload)
    },
    setGeolocation({commit}: ActionContext<State, State>, payload: any) {
        commit(t.SET_GEOLOCATION, payload)
    },
    getAppInfo ({commit}: ActionContext<State, State>) {
        commit(t.SET_APP_INFO)
    },
    logout ({commit}: ActionContext<State, State>) {
        return Promise.resolve()
            .then(() => {
                return logoutAPI()
            })
            .then((response) => {
                // const { data } = <any> response
                // @ts-ignore
                // history.pushState(null, null, location.href)
                // window.onpopstate = () => {
                //     history.go(1)
                // }
                commit(t.LOGOUT)
                return response
            })
            .catch((err) => {
                throw err
            })
    },
    getProfile ({commit}: ActionContext<State, State>, payload?: Callback) {
        commit(t.GET_PROFILE_PENDING)
        return Promise.resolve()
            .then(() => {
                return getProfileAPI()
            })
            .then((response) => {
                const { data } = <any> response
                commit(t.GET_PROFILE_SUCCESS, data)
                payload?.successAction && payload.successAction(data)
                return response
            })
            .catch((err) => {
                commit(t.GET_PROFILE_FAIL)
                payload?.failAction && payload.failAction()
                throw err
            })
    },
    setProfile ({commit}: ActionContext<State, State>, payload: any) {
        commit(t.SET_PROFILE, payload)
    },
    setDrawer ({commit}: ActionContext<State, State>, payload: boolean) {
        commit(t.SET_DRAWER, payload)
    },
    setSearch ({commit}: ActionContext<State, State>, payload: boolean) {
        commit(t.SET_SEARCH, payload)
    },
    setAccessToken({commit}: ActionContext<State, State>, payload: string) {
        commit(t.SET_ACCESS_TOKEN, payload)
    },
    setClickMarkerId ({commit}: ActionContext<State, State>, payload: number) {
        commit(t.SET_CLICK_MARKER_ID, payload)
    },
    setDialogConfirmAlert({commit}: ActionContext<State, State>, payload: Dialogs) {
        commit(t.SET_DIALOG_CONFIRM_ALERT, payload)
    },
    setDialogCroper({commit}: ActionContext<State, State>, payload: Dialogs) {
        commit(t.SET_DIALOG_CROPER, payload)
    },
    setSearchEvent({commit}: ActionContext<State, State>, payload: SearchEvent) {
        commit(t.SET_SEARCH_EVENT, payload)
    },
    // setLoading({commit}: ActionContext<State, State>, payload: string) {
    //     commit(t.SET_LOADING, payload)
    // },
    // refreshToken ({commit}: ActionContext<State, State>, payload: any) {
    //     commit(t.GET_REFRESH_TOKEN_PENDING)
    //     return Promise.resolve()
    //         .then(() => {
    //             return refreshTokenAPI(payload)
    //         })
    //         .then((response) => {
    //             // const result = response.data || {}
    //             commit(t.GET_REFRESH_TOKEN_PENDING, { response })
    //             return response
    //         })
    //         .catch((err) => {
    //             commit(t.GET_REFRESH_TOKEN_FAIL)
    //             throw err
    //         })
    // },
}