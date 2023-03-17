import devalue from '@nuxt/devalue';
import { renderToString } from 'vue/server-renderer';
import { renderHeadToString } from '@vueuse/head';
import { createApp } from '/@src/app';
export async function init(req, res) {
}
export async function render(url, manifest, initialState = {}) {
    const { app, router, pinia, head } = await createApp();
    router.push(url);
    await router.isReady();
    const ctx = {
        found: true,
    };
    const appHtml = await renderToString(app, ctx);
    const { headTags, htmlAttrs, bodyAttrs } = await renderHeadToString(head);
    initialState.pinia = pinia?.state.value;
    const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
    return {
        found: ctx.found,
        appHtml,
        headTags,
        htmlAttrs,
        bodyAttrs,
        preloadLinks,
        initialState: devalue(initialState),
    };
}
function renderPreloadLinks(modules, manifest) {
    let links = '';
    const seen = new Set();
    modules.forEach((id) => {
        const files = manifest[id];
        if (files) {
            files.forEach((file) => {
                if (!seen.has(file)) {
                    seen.add(file);
                    links += renderPreloadLink(file);
                }
            });
        }
    });
    return links;
}
function renderPreloadLink(file) {
    if (file.endsWith('.js')) {
        return `<link rel="modulepreload" crossorigin href="${file}">`;
    }
    else if (file.endsWith('.css')) {
        return `<link rel="stylesheet" href="${file}">`;
    }
    else if (file.endsWith('.woff')) {
        return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
    }
    else if (file.endsWith('.woff2')) {
        return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
    }
    else if (file.endsWith('.gif')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
    }
    else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
    }
    else if (file.endsWith('.png')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
    }
    else if (file.endsWith('.webp')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/webp">`;
    }
    else if (file.endsWith('.svg')) {
        return ` <link rel="prefetch" href="${file}" as="image" type="image/svg+xml"/>`;
    }
    else {
        console.log('missing preload link for', file);
        return '';
    }
}
//# sourceMappingURL=entry-server.js.map