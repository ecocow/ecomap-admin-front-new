import { ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';
export const useSidebar = defineStore('sidebar', () => {
    const active = ref('none');
    function toggle(sidebarId) {
        if (active.value === sidebarId) {
            active.value = 'none';
        }
        else {
            active.value = sidebarId;
        }
    }
    function setActive(sidebarId) {
        active.value = sidebarId;
    }
    function close() {
        active.value = 'none';
    }
    return {
        active,
        toggle,
        setActive,
        close,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSidebar, import.meta.hot));
}
//# sourceMappingURL=sidebar.js.map