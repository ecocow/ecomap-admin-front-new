import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core';
export const useUserSession = defineStore('userSession', () => {
    const token = useStorage('token', '');
    const user = ref();
    const loading = ref(true);
    const isLoggedIn = computed(() => token.value !== undefined && token.value !== '');
    function setUser(newUser) {
        user.value = newUser;
    }
    function setToken(newToken) {
        token.value = newToken;
    }
    function setLoading(newLoading) {
        loading.value = newLoading;
    }
    async function logoutUser() {
        token.value = undefined;
        user.value = undefined;
    }
    return {
        user,
        token,
        isLoggedIn,
        loading,
        logoutUser,
        setUser,
        setToken,
        setLoading,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserSession, import.meta.hot));
}
//# sourceMappingURL=userSession.js.map