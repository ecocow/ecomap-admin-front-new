import { createApp as createClientApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { createRouter } from './router';
import VueDaumPostcode from 'vue-daum-postcode';
import store from './stores'
import VueroApp from './VueroApp.vue'
import './styles'
import { createApi } from '/@src/composable/useApi';
const plugins = import.meta.glob('./plugins/*.ts', {
    eager: true,
});
export function definePlugin(plugin) {
    return plugin;
}
export async function createApp() {
    const app = createClientApp(VueroApp);
    const router = createRouter();
    const api = createApi();
    const head = createHead();
    app.use(head);
    const pinia = createPinia();
    app.use(pinia);
    app.use(store);
    app.use(VueDaumPostcode);
    const vuero = {
        app,
        api,
        router,
        head,
        pinia,
    };
    app.provide('vuero', vuero);
    for (const path in plugins) {
        try {
            const { default: plugin } = plugins[path];
            await plugin(vuero);
        }
        catch (error) {
            console.error(`Error while loading plugin "${path}".`);
            console.error(error);
        }
    }
    app.use(vuero.router);
    return vuero;
}
//# sourceMappingURL=app.js.map