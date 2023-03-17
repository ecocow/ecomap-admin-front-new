import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VitePluginFonts } from 'vite-plugin-fonts';
import { VitePluginRadar } from 'vite-plugin-radar';
import PurgeIcons from 'vite-plugin-purge-icons';
import ImageMin from 'vite-plugin-imagemin';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { VitePWA } from 'vite-plugin-pwa';
import purgecss from 'rollup-plugin-purgecss';
const MINIFY_IMAGES = process.env.MINIFY ? process.env.MINIFY === 'true' : false;
export default defineConfig({
    root: process.cwd(),
    base: '/',
    publicDir: 'public',
    logLevel: 'info',
    server: {
        port: 3000,
    },
    optimizeDeps: {
        include: [
            '@ckeditor/ckeditor5-vue',
            '@ckeditor/ckeditor5-build-classic',
            '@iconify/iconify',
            '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js',
            '@vee-validate/zod',
            '@vueuse/core',
            '@vueuse/head',
            '@vueform/multiselect',
            '@vueform/slider',
            'axios',
            'billboard.js',
            'dayjs',
            'dropzone',
            'dragula',
            'defu',
            'filepond',
            'filepond-plugin-file-validate-size',
            'filepond-plugin-file-validate-type',
            'filepond-plugin-image-exif-orientation',
            'filepond-plugin-image-crop',
            'filepond-plugin-image-edit',
            'filepond-plugin-image-preview',
            'filepond-plugin-image-resize',
            'filepond-plugin-image-transform',
            'imask',
            'nprogress',
            'notyf',
            'mapbox-gl',
            'photoswipe/lightbox',
            'photoswipe',
            'plyr',
            'v-calendar',
            'vee-validate',
            'vue',
            'vue-scrollto',
            'vue3-apexcharts',
            'vue-tippy',
            'vue-i18n',
            'vue-router',
            'unplugin-vue-router/runtime',
            'simplebar',
            'simple-datatables',
            'tiny-slider/src/tiny-slider',
            'vue-accessible-color-picker',
            'zod',
            '@stefanprobst/remark-shiki',
            'rehype-external-links',
            'rehype-raw',
            'rehype-sanitize',
            'rehype-stringify',
            'rehype-slug',
            'rehype-autolink-headings',
            'remark-gfm',
            'remark-parse',
            'remark-rehype',
            'shiki-es',
            'unified',
            'workbox-window',
            'textarea-markdown-editor/dist/esm/bootstrap',
        ],
        disabled: false,
    },
    resolve: {
        alias: [
            {
                find: '/@src/',
                replacement: `/src/`,
            },
        ],
    },
    build: {
        minify: 'terser',
        assetsInlineLimit: 4096 * 2,
        commonjsOptions: { include: [] },
    },
    plugins: [
        Vue({
            include: [/\.vue$/],
        }),
        VueI18nPlugin({
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
            fullInstall: false,
            compositionOnly: true,
        }),
        VueRouter({
            routesFolder: 'src/pages',
            dataFetching: true,
        }),
        AutoImport({
            dts: true,
            imports: ['vue', '@vueuse/core', VueRouterAutoImports],
        }),
        Components({
            dirs: ['documentation', 'src/components', 'src/layouts'],
            extensions: ['vue', 'md'],
            dts: true,
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),
        PurgeIcons(),
        VitePluginFonts({
            google: {
                families: [
                    {
                        name: 'Fira Code',
                        styles: 'wght@400;600',
                    },
                    {
                        name: 'Montserrat',
                        styles: 'wght@500;600;700;800;900',
                    },
                    {
                        name: 'Roboto',
                        styles: 'wght@300;400;500;600;700',
                    },
                ],
            },
        }),
        !process.env.GTM_ID
            ? undefined
            : VitePluginRadar({
                gtm: {
                    id: process.env.GTM_ID,
                },
            }),
        VitePWA({
            base: '/',
            includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'Vuero - A complete Vue 3 design system',
                short_name: 'Vuero',
                start_url: '/?utm_source=pwa',
                display: 'standalone',
                theme_color: '#ffffff',
                background_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
        purgecss({
            output: false,
            content: [`./src/**/*.vue`],
            variables: false,
            safelist: {
                standard: [
                    /(autv|lnil|lnir|fas?)/,
                    /-(leave|enter|appear)(|-(to|from|active))$/,
                    /^(?!(|.*?:)cursor-move).+-move$/,
                    /^router-link(|-exact)-active$/,
                    /data-v-.*/,
                ],
            },
            defaultExtractor(content) {
                const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
                return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
            },
        }),
        !MINIFY_IMAGES
            ? undefined
            : ImageMin({
                gifsicle: {
                    optimizationLevel: 7,
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 7,
                },
                mozjpeg: {
                    quality: 60,
                },
                pngquant: {
                    quality: [0.8, 0.9],
                    speed: 4,
                },
                svgo: {
                    plugins: [
                        {
                            name: 'removeViewBox',
                            active: false,
                        },
                        {
                            name: 'removeEmptyAttrs',
                            active: false,
                        },
                    ],
                },
            }),
    ],
});
//# sourceMappingURL=vite.config.js.map