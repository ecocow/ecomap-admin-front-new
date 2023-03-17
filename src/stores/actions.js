import * as t from './types';
import { getProfileAPI, } from './api';
export default {
    setDeviceToken({ commit }, payload) {
        commit(t.SET_DEVICE_TOKEN, payload);
    },
    setAppversion({ commit }, payload) {
        commit(t.SET_APP_VERSION, payload);
    },
    showSnackBar({ commit }, payload) {
        commit(t.SHOW_SNACK_BAR, payload);
    },
    setGeolocation({ commit }, payload) {
        commit(t.SET_GEOLOCATION, payload);
    },
    getAppInfo({ commit }) {
        commit(t.SET_APP_INFO);
    },
    logout({ commit }) {
        return Promise.resolve()
            .then(() => {
        })
            .then((response) => {
            commit(t.LOGOUT);
            return response;
        })
            .catch((err) => {
            throw err;
        });
    },
    getProfile({ commit }, payload) {
        commit(t.GET_PROFILE_PENDING);
        return Promise.resolve()
            .then(() => {
            return getProfileAPI();
        })
            .then((response) => {
            const { data } = response;
            commit(t.GET_PROFILE_SUCCESS, data);
            payload?.successAction && payload.successAction(data);
            return response;
        })
            .catch((err) => {
            commit(t.GET_PROFILE_FAIL);
            payload?.failAction && payload.failAction();
            throw err;
        });
    },
    setProfile({ commit }, payload) {
        commit(t.SET_PROFILE, payload);
    },
    setDrawer({ commit }, payload) {
        commit(t.SET_DRAWER, payload);
    },
    setSearch({ commit }, payload) {
        commit(t.SET_SEARCH, payload);
    },
    setAccessToken({ commit }, payload) {
        commit(t.SET_ACCESS_TOKEN, payload);
    },
    setClickMarkerId({ commit }, payload) {
        commit(t.SET_CLICK_MARKER_ID, payload);
    },
    setDialogConfirmAlert({ commit }, payload) {
        commit(t.SET_DIALOG_CONFIRM_ALERT, payload);
    },
    setDialogCroper({ commit }, payload) {
        commit(t.SET_DIALOG_CROPER, payload);
    },
    setSearchEvent({ commit }, payload) {
        commit(t.SET_SEARCH_EVENT, payload);
    },
};
//# sourceMappingURL=actions.js.map