import { ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';
export const useViewWrapper = defineStore('viewWrapper', () => {
    const isPushed = ref(false);
    const isPushedBlock = ref(false);
    const pageTitle = ref('Welcome');
    function setPushed(value) {
        isPushed.value = value;
    }
    function setPushedBlock(value) {
        isPushedBlock.value = value;
    }
    function setPageTitle(value) {
        pageTitle.value = value;
    }
    return {
        isPushed,
        isPushedBlock,
        pageTitle,
        setPushed,
        setPushedBlock,
        setPageTitle,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useViewWrapper, import.meta.hot));
}
//# sourceMappingURL=viewWrapper.js.map