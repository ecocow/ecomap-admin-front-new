import { computed, watchEffect } from 'vue';
import { usePreferredDark, useStorage } from '@vueuse/core';
import { acceptHMRUpdate, defineStore } from 'pinia';
export const DARK_MODE_BODY_CLASS = 'is-dark';
export const initDarkmode = () => {
    const darkmode = useDarkmode();
    watchEffect(() => {
        if (!import.meta.env.SSR) {
            const body = document.documentElement;
            if (darkmode.isDark) {
                body.classList.add(DARK_MODE_BODY_CLASS);
            }
            else {
                body.classList.remove(DARK_MODE_BODY_CLASS);
            }
        }
    });
};
export const useDarkmode = defineStore('darkmode', () => {
    const preferredDark = usePreferredDark();
    const colorSchema = useStorage('color-schema', 'auto');
    const isDark = computed({
        get() {
            return colorSchema.value === 'auto'
                ? preferredDark.value
                : colorSchema.value === 'dark';
        },
        set(v) {
            if (v === preferredDark.value)
                colorSchema.value = 'auto';
            else
                colorSchema.value = v ? 'dark' : 'light';
        },
    });
    const onChange = (event) => {
        const target = event.target;
        isDark.value = !target.checked;
    };
    return {
        isDark,
        onChange,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useDarkmode, import.meta.hot));
}
//# sourceMappingURL=darkmode.js.map