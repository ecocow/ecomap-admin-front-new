import { State } from './state'

export default {
    myAvatar(state: State): string {
        // Todo: 사진 경로 서버수정 필요
        return state.profile.image_path ? state.profile.image_path : ''
    },
    myNickNm(state: State): string {
        return state.profile.nick_name
    },
    userId(state: State): number {
        return state.profile.user
    },
}