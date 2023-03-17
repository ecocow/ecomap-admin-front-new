import { definePlugin } from '/@src/app';
import { useUserSession } from '/@src/stores/userSession';
export default definePlugin(async ({ router, api, pinia }) => {
    const userSession = useUserSession(pinia);
    if (userSession.isLoggedIn) {
        try {
            const { data: user } = await api.get('/api/users/me');
            userSession.setUser(user);
        }
        catch (err) {
            userSession.logoutUser();
        }
    }
    router.beforeEach((to) => {
    });
});
//# sourceMappingURL=session-check.js.map