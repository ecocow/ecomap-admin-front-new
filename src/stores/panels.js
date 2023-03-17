import { acceptHMRUpdate, defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
export const usePanels = defineStore('panels', () => {
    const active = useStorage('active-panel', 'none');
    function setActive(panelId) {
        active.value = panelId;
    }
    function close() {
        active.value = 'none';
    }
    return {
        active,
        setActive,
        close,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePanels, import.meta.hot));
}
//# sourceMappingURL=panels.js.map