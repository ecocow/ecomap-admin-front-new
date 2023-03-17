import { createApp } from './app';
createApp().then(async (vuero) => {
    const initialState = window.__vuero__;
    if (typeof initialState?.pinia === 'object') {
        vuero.pinia.state.value = initialState.pinia;
    }
    await vuero.router.isReady();
    vuero.app.mount('#app');
});
//# sourceMappingURL=entry-client.js.map