import { definePlugin } from '/@src/app';
import { defineAsyncComponent } from 'vue';
export default definePlugin(({ app }) => {
    app.component('Multiselect', defineAsyncComponent({
        loader: () => import('@vueform/multiselect').then((mod) => mod.default),
        delay: 0,
        suspensible: false,
    }));
    app.component('Slider', defineAsyncComponent({
        loader: () => import('@vueform/slider').then((mod) => mod.default),
        delay: 0,
        suspensible: false,
    }));
});
//# sourceMappingURL=vueform.js.map