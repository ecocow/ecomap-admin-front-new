import { definePlugin } from '/@src/app';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';
export default definePlugin(({ app }) => {
    const defaultLocale = useStorage('locale', 'ko');
    const i18n = createI18n({
        locale: defaultLocale.value,
        messages,
    });
    app.use(i18n);
});
//# sourceMappingURL=i18n.js.map