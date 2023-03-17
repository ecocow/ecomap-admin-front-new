export default {
    myAvatar(state) {
        return state.profile.image_path ? state.profile.image_path : '';
    },
    myNickNm(state) {
        return state.profile.nick_name;
    },
    userId(state) {
        return state.profile.user;
    },
};
//# sourceMappingURL=getters.js.map