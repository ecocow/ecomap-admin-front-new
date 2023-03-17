import { createRouter as createClientRouter, createWebHistory, createMemoryHistory, setupDataFetchingGuard, } from 'vue-router/auto';
export function createRouter() {
    const router = createClientRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        scrollBehavior: (to, from, savedPosition) => {
            if (to.hash) {
                if (to.hash === '#') {
                    return {
                        top: 0,
                        behavior: 'smooth',
                    };
                }
                const el = document.querySelector(to.hash);
                if (el) {
                    const top = parseFloat(getComputedStyle(el).scrollMarginTop);
                    if (el instanceof HTMLElement) {
                        el.focus();
                    }
                    return {
                        el: to.hash,
                        behavior: 'smooth',
                        top,
                    };
                }
                return {
                    el: to.hash,
                    behavior: 'smooth',
                };
            }
            if (savedPosition) {
                return savedPosition;
            }
            else if (to.path !== from.path) {
                return { top: 0 };
            }
        },
    });
    setupDataFetchingGuard(router);
    return router;
}
//# sourceMappingURL=router.js.map