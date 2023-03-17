const handlers = new WeakMap();
const preloaded = new Set();
export const vPreloadLink = {
    getSSRProps() {
        return {};
    },
    created: (el) => {
        const handler = function () {
            const href = (el.href ?? '').split('#')[0];
            if (!href || preloaded.has(href)) {
                el.removeEventListener('mouseenter', handler);
                return;
            }
            const newPreLoadLink = document.createElement('link');
            newPreLoadLink.rel = 'prefetch';
            newPreLoadLink.href = href;
            document.head.appendChild(newPreLoadLink);
            preloaded.add(href);
            el.removeEventListener('mouseenter', handler);
        };
        handlers.set(el, handler);
    },
    beforeMount() {
        const currentHref = window.location.toString().split('#')[0];
        if (!currentHref || preloaded.has(currentHref)) {
            return;
        }
        preloaded.add(currentHref);
    },
    mounted: (el) => {
        el.addEventListener('mouseenter', handlers.get(el), { passive: true });
    },
    unmounted: (el) => {
        el.removeEventListener('mouseenter', handlers.get(el));
    },
};
//# sourceMappingURL=preload-link.js.map