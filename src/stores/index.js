import { createStore } from 'vuex';
import { state } from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
export const store = createStore({
    state,
    getters,
    actions,
    mutations,
});
export default store;
//# sourceMappingURL=index.js.map