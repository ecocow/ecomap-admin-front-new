import { definePlugin } from '/@src/app';
import { vPreloadLink } from '/@src/directives/preload-link';
import { vTooltip } from '/@src/directives/tooltip';
import { vBackground } from '/@src/directives/background';
export default definePlugin(({ app }) => {
    app.directive('preload-link', vPreloadLink);
    app.directive('tooltip', vTooltip);
    app.directive('background', vBackground);
});
//# sourceMappingURL=directives.js.map