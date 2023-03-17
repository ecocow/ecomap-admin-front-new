// vite.config.js
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/unplugin-vue-router/dist/index.mjs";
import Components from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/unplugin-auto-import/dist/vite.js";
import { VitePluginFonts } from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/vite-plugin-fonts/dist/index.js";
import { VitePluginRadar } from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/vite-plugin-radar/dist/index.js";
import PurgeIcons from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/vite-plugin-purge-icons/dist/index.mjs";
import ImageMin from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/vite-plugin-imagemin/dist/index.mjs";
import VueI18nPlugin from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/vite-plugin-pwa/dist/index.mjs";
import purgecss from "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/node_modules/rollup-plugin-purgecss/lib/rollup-plugin-purgecss.js";
var __vite_injected_original_import_meta_url = "file:///Users/aosdinkim/Documents/project/ecomap-admin-front-new/vite.config.js";
var MINIFY_IMAGES = process.env.MINIFY ? process.env.MINIFY === "true" : false;
var vite_config_default = defineConfig({
  root: process.cwd(),
  base: "/",
  publicDir: "public",
  logLevel: "info",
  server: {
    port: 3e3
  },
  optimizeDeps: {
    include: [
      "@ckeditor/ckeditor5-vue",
      "@ckeditor/ckeditor5-build-classic",
      "@iconify/iconify",
      "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js",
      "@vee-validate/zod",
      "@vueuse/core",
      "@vueuse/head",
      "@vueform/multiselect",
      "@vueform/slider",
      "axios",
      "billboard.js",
      "dayjs",
      "dropzone",
      "dragula",
      "defu",
      "filepond",
      "filepond-plugin-file-validate-size",
      "filepond-plugin-file-validate-type",
      "filepond-plugin-image-exif-orientation",
      "filepond-plugin-image-crop",
      "filepond-plugin-image-edit",
      "filepond-plugin-image-preview",
      "filepond-plugin-image-resize",
      "filepond-plugin-image-transform",
      "imask",
      "nprogress",
      "notyf",
      "mapbox-gl",
      "photoswipe/lightbox",
      "photoswipe",
      "plyr",
      "v-calendar",
      "vee-validate",
      "vue",
      "vue-scrollto",
      "vue3-apexcharts",
      "vue-tippy",
      "vue-i18n",
      "vue-router",
      "unplugin-vue-router/runtime",
      "simplebar",
      "simple-datatables",
      "tiny-slider/src/tiny-slider",
      "vue-accessible-color-picker",
      "zod",
      "@stefanprobst/remark-shiki",
      "rehype-external-links",
      "rehype-raw",
      "rehype-sanitize",
      "rehype-stringify",
      "rehype-slug",
      "rehype-autolink-headings",
      "remark-gfm",
      "remark-parse",
      "remark-rehype",
      "shiki-es",
      "unified",
      "workbox-window",
      "textarea-markdown-editor/dist/esm/bootstrap"
    ],
    disabled: false
  },
  resolve: {
    alias: [
      {
        find: "/@src/",
        replacement: `/src/`
      }
    ]
  },
  build: {
    minify: "terser",
    assetsInlineLimit: 4096 * 2,
    commonjsOptions: { include: [] }
  },
  plugins: [
    Vue({
      include: [/\.vue$/]
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src/locales/**"),
      fullInstall: false,
      compositionOnly: true
    }),
    VueRouter({
      routesFolder: "src/pages",
      dataFetching: true
    }),
    AutoImport({
      dts: true,
      imports: ["vue", "@vueuse/core", VueRouterAutoImports]
    }),
    Components({
      dirs: ["documentation", "src/components", "src/layouts"],
      extensions: ["vue", "md"],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    PurgeIcons(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Fira Code",
            styles: "wght@400;600"
          },
          {
            name: "Montserrat",
            styles: "wght@500;600;700;800;900"
          },
          {
            name: "Roboto",
            styles: "wght@300;400;500;600;700"
          }
        ]
      }
    }),
    !process.env.GTM_ID ? void 0 : VitePluginRadar({
      gtm: {
        id: process.env.GTM_ID
      }
    }),
    VitePWA({
      base: "/",
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Vuero - A complete Vue 3 design system",
        short_name: "Vuero",
        start_url: "/?utm_source=pwa",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
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
          /data-v-.*/
        ]
      },
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      }
    }),
    !MINIFY_IMAGES ? void 0 : ImageMin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 60
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IHsgVml0ZVBsdWdpbkZvbnRzIH0gZnJvbSAndml0ZS1wbHVnaW4tZm9udHMnXG5pbXBvcnQgeyBWaXRlUGx1Z2luUmFkYXIgfSBmcm9tICd2aXRlLXBsdWdpbi1yYWRhcidcbmltcG9ydCBQdXJnZUljb25zIGZyb20gJ3ZpdGUtcGx1Z2luLXB1cmdlLWljb25zJ1xuaW1wb3J0IEltYWdlTWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJ1xuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgcHVyZ2Vjc3MgZnJvbSAncm9sbHVwLXBsdWdpbi1wdXJnZWNzcydcblxuLy8gbG9jYWwgdml0ZSBwbHVnaW5cblxuLy8gb3B0aW9ucyB2aWEgZW52IHZhcmlhYmxlc1xuY29uc3QgTUlOSUZZX0lNQUdFUyA9IHByb2Nlc3MuZW52Lk1JTklGWSA/IHByb2Nlc3MuZW52Lk1JTklGWSA9PT0gJ3RydWUnIDogZmFsc2VcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBtYWluIGNvbmZpZ3VyYXRpb24gZmlsZSBmb3Igdml0ZWpzXG4gKlxuICogQHNlZSBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIFByb2plY3Qgcm9vdCBkaXJlY3RvcnkgKHdoZXJlIGluZGV4Lmh0bWwgaXMgbG9jYXRlZCkuXG4gIHJvb3Q6IHByb2Nlc3MuY3dkKCksXG4gIC8vIEJhc2UgcHVibGljIHBhdGggd2hlbiBzZXJ2ZWQgaW4gZGV2ZWxvcG1lbnQgb3IgcHJvZHVjdGlvbi5cbiAgLy8gWW91IGFsc28gbmVlZCB0byBhZGQgdGhpcyBiYXNlIGxpa2UgYGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoJ215LXN1YmRpcmVjdG9yeScpYFxuICAvLyBpbiAuL3NyYy9yb3V0ZXIudHNcbiAgLy8gYmFzZTogJy9teS1zdWJkaXJlY3RvcnkvJyxcbiAgYmFzZTogJy8nLFxuICAvLyBEaXJlY3RvcnkgdG8gc2VydmUgYXMgcGxhaW4gc3RhdGljIGFzc2V0cy5cbiAgcHVibGljRGlyOiAncHVibGljJyxcbiAgLy8gQWRqdXN0IGNvbnNvbGUgb3V0cHV0IHZlcmJvc2l0eS5cbiAgbG9nTGV2ZWw6ICdpbmZvJyxcbiAgLy8gZGV2ZWxvcG1lbnQgc2VydmVyIGNvbmZpZ3VyYXRpb25cbiAgc2VydmVyOiB7XG4gICAgLy8gVml0ZSA0IGRlZmF1bHRzIHRvIDUxNzMsIGJ1dCB5b3UgY2FuIG92ZXJyaWRlIGl0IHdpdGggdGhlIHBvcnQgb3B0aW9uLlxuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0LCBWaXRlIHdpbGwgY3Jhd2wgeW91ciBpbmRleC5odG1sIHRvIGRldGVjdCBkZXBlbmRlbmNpZXMgdGhhdFxuICAgKiBuZWVkIHRvIGJlIHByZS1idW5kbGVkLiBJZiBidWlsZC5yb2xsdXBPcHRpb25zLmlucHV0IGlzIHNwZWNpZmllZCxcbiAgICogVml0ZSB3aWxsIGNyYXdsIHRob3NlIGVudHJ5IHBvaW50cyBpbnN0ZWFkLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvI29wdGltaXplZGVwcy1lbnRyaWVzXG4gICAqL1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAnQGNrZWRpdG9yL2NrZWRpdG9yNS12dWUnLFxuICAgICAgJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYycsXG4gICAgICAnQGljb25pZnkvaWNvbmlmeScsXG4gICAgICAnQG1hcGJveC9tYXBib3gtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIubWluLmpzJyxcbiAgICAgICdAdmVlLXZhbGlkYXRlL3pvZCcsXG4gICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgJ0B2dWVmb3JtL211bHRpc2VsZWN0JyxcbiAgICAgICdAdnVlZm9ybS9zbGlkZXInLFxuICAgICAgJ2F4aW9zJyxcbiAgICAgICdiaWxsYm9hcmQuanMnLFxuICAgICAgJ2RheWpzJyxcbiAgICAgICdkcm9wem9uZScsXG4gICAgICAnZHJhZ3VsYScsXG4gICAgICAnZGVmdScsXG4gICAgICAnZmlsZXBvbmQnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXNpemUnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1leGlmLW9yaWVudGF0aW9uJyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtY3JvcCcsXG4gICAgICAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3JyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcmVzaXplJyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtdHJhbnNmb3JtJyxcbiAgICAgICdpbWFzaycsXG4gICAgICAnbnByb2dyZXNzJyxcbiAgICAgICdub3R5ZicsXG4gICAgICAnbWFwYm94LWdsJyxcbiAgICAgICdwaG90b3N3aXBlL2xpZ2h0Ym94JyxcbiAgICAgICdwaG90b3N3aXBlJyxcbiAgICAgICdwbHlyJyxcbiAgICAgICd2LWNhbGVuZGFyJyxcbiAgICAgICd2ZWUtdmFsaWRhdGUnLFxuICAgICAgJ3Z1ZScsXG4gICAgICAndnVlLXNjcm9sbHRvJyxcbiAgICAgICd2dWUzLWFwZXhjaGFydHMnLFxuICAgICAgJ3Z1ZS10aXBweScsXG4gICAgICAndnVlLWkxOG4nLFxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvcnVudGltZScsXG4gICAgICAnc2ltcGxlYmFyJyxcbiAgICAgICdzaW1wbGUtZGF0YXRhYmxlcycsXG4gICAgICAndGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyJyxcbiAgICAgICd2dWUtYWNjZXNzaWJsZS1jb2xvci1waWNrZXInLFxuICAgICAgJ3pvZCcsXG4gICAgICAnQHN0ZWZhbnByb2JzdC9yZW1hcmstc2hpa2knLFxuICAgICAgJ3JlaHlwZS1leHRlcm5hbC1saW5rcycsXG4gICAgICAncmVoeXBlLXJhdycsXG4gICAgICAncmVoeXBlLXNhbml0aXplJyxcbiAgICAgICdyZWh5cGUtc3RyaW5naWZ5JyxcbiAgICAgICdyZWh5cGUtc2x1ZycsXG4gICAgICAncmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzJyxcbiAgICAgICdyZW1hcmstZ2ZtJyxcbiAgICAgICdyZW1hcmstcGFyc2UnLFxuICAgICAgJ3JlbWFyay1yZWh5cGUnLFxuICAgICAgJ3NoaWtpLWVzJyxcbiAgICAgICd1bmlmaWVkJyxcbiAgICAgICd3b3JrYm94LXdpbmRvdycsXG4gICAgICAndGV4dGFyZWEtbWFya2Rvd24tZWRpdG9yL2Rpc3QvZXNtL2Jvb3RzdHJhcCcsXG4gICAgXSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH0sXG4gIC8vIFdpbGwgYmUgcGFzc2VkIHRvIEByb2xsdXAvcGx1Z2luLWFsaWFzIGFzIGl0cyBlbnRyaWVzIG9wdGlvbi5cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICcvQHNyYy8nLFxuICAgICAgICByZXBsYWNlbWVudDogYC9zcmMvYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIC8vIERvIG5vdCB3YXJuIGFib3V0IGxhcmdlIGNodW5rc1xuICAgIC8vIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogSW5maW5pdHksXG4gICAgLy8gRG91YmxlIHRoZSBkZWZhdWx0IHNpemUgdGhyZXNob2xkIGZvciBpbmxpbmVkIGFzc2V0c1xuICAgIC8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvYnVpbGQtb3B0aW9ucy5odG1sI2J1aWxkLWFzc2V0c2lubGluZWxpbWl0XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYgKiAyLFxuICAgIGNvbW1vbmpzT3B0aW9uczogeyBpbmNsdWRlOiBbXSB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgLyoqXG4gICAgICogcGx1Z2luLXZ1ZSBwbHVnaW4gaW5qZWN0IHZ1ZSBsaWJyYXJ5IGFuZCBhbGxvdyBzZmMgZmlsZXMgdG8gd29yayAoKi52dWUpXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS90cmVlL21haW4vcGFja2FnZXMvcGx1Z2luLXZ1ZVxuICAgICAqL1xuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvXSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHZpdGUtcGx1Z2luLXZ1ZS1pMThuIHBsdWdpbiBkb2VzIGkxOG4gcmVzb3VyY2VzIHByZS1jb21waWxhdGlvbiAvIG9wdGltaXphdGlvbnNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy92aXRlLXBsdWdpbi12dWUtaTE4blxuICAgICAqL1xuICAgIFZ1ZUkxOG5QbHVnaW4oe1xuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuL3NyYy9sb2NhbGVzLyoqJyksXG4gICAgICBmdWxsSW5zdGFsbDogZmFsc2UsXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiB1bnBsdWdpbi12dWUtcm91dGVyIHBsdWdpbiBnZW5lcmF0ZSByb3V0ZXMgYmFzZWQgb24gZmlsZSBzeXN0ZW1cbiAgICAgKiBhbGxvdyB0byB1c2UgdHlwZWQgcm91dGVzIGFuZCB1c2FnZSBvZiBkZWZpbmVMb2FkZXJcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9yZmNzL2Jsb2IvYWQ2OWRhMmFlZTkyNDJlZjg4ZjAzNjcxM2RiNjhmM2VmMjc0YmIxYi9hY3RpdmUtcmZjcy8wMDAwLXJvdXRlci11c2UtbG9hZGVyLm1kXG4gICAgICovXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIHJvdXRlc0ZvbGRlcjogJ3NyYy9wYWdlcycsXG5cbiAgICAgIC8qKlxuICAgICAgICogRGF0YSBGZXRjaGluZyBpcyBhbiBleHBlcmltZW50YWwgZmVhdHVyZSBmcm9tIHZ1ZSAmIHZ1ZS1yb3V0ZXJcbiAgICAgICAqXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9yZmNzL2Rpc2N1c3Npb25zLzQ2MFxuICAgICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlci90cmVlL21haW4vc3JjL2RhdGEtZmV0Y2hpbmdcbiAgICAgICAqL1xuICAgICAgZGF0YUZldGNoaW5nOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogdW5wbHVnaW4tYXV0by1pbXBvcnQgYWxsb3cgdG8gYXV0b21hdGljYWx5IGltcG9ydCBtb2R1bGVzL2NvbXBvbmVudHNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgICovXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBkdHM6IHRydWUsXG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICdAdnVldXNlL2NvcmUnLCBWdWVSb3V0ZXJBdXRvSW1wb3J0c10sXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGFuIGludGVybmFsIHZpdGUgcGx1Z2luIHRoYXQgbG9hZCBtYXJrZG93biBmaWxlcyBhcyB2dWUgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEBzZWUgL2RvY3VtZW50YXRpb25cbiAgICAgKiBAc2VlIC92aXRlLXBsdWdpbi12dWVyby1kb2NcbiAgICAgKiBAc2VlIC9zcmMvY29tcG9uZW50cy9wYXJ0aWFscy9kb2N1bWVudGF0aW9uL0RvY3VtZW50YXRpb25JdGVtLnZ1ZVxuICAgICAqIEBzZWUgL3NyYy9jb21wb3NhYmxlL3VzZU1hcmtkb3duVG9jLnRzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiB1bnBsdWdpbi12dWUtY29tcG9uZW50cyBwbHVnaW4gaXMgcmVzcG9uc2libGUgb2YgYXV0b2xvYWRpbmcgY29tcG9uZW50c1xuICAgICAqIGRvY3VtZW50YXRpb24gYW5kIG1kIGZpbGUgYXJlIGxvYWRlZCBmb3IgZWxlbWVudHMgYW5kIGNvbXBvbmVudHMgc2VjdGlvbnNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgICovXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkaXJzOiBbJ2RvY3VtZW50YXRpb24nLCAnc3JjL2NvbXBvbmVudHMnLCAnc3JjL2xheW91dHMnXSxcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICBkdHM6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogdml0ZS1wbHVnaW4tcHVyZ2UtaWNvbnMgcGx1Z2luIGlzIHJlc3BvbnNpYmxlIG9mIGF1dG9sb2FkaW5nIGljb25lcyBmcm9tIG11bHRpcGxlcyBwcm92aWRlcnNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9pY29uZXMubmV0bGlmeS5hcHAvXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvcHVyZ2UtaWNvbnMvdHJlZS9tYWluL3BhY2thZ2VzL3ZpdGUtcGx1Z2luLXB1cmdlLWljb25zXG4gICAgICovXG4gICAgUHVyZ2VJY29ucygpLFxuXG4gICAgLyoqXG4gICAgICogdml0ZS1wbHVnaW4tZm9udHMgcGx1Z2luIGluamVjdCB3ZWJmb250cyBmcm9tIGRpZmZlcmVudHMgcHJvdmlkZXJzXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGFmeW5pYWtzYWNoYS92aXRlLXBsdWdpbi1mb250c1xuICAgICAqL1xuICAgIFZpdGVQbHVnaW5Gb250cyh7XG4gICAgICBnb29nbGU6IHtcbiAgICAgICAgZmFtaWxpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmlyYSBDb2RlJyxcbiAgICAgICAgICAgIHN0eWxlczogJ3dnaHRANDAwOzYwMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTW9udHNlcnJhdCcsXG4gICAgICAgICAgICBzdHlsZXM6ICd3Z2h0QDUwMDs2MDA7NzAwOzgwMDs5MDAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1JvYm90bycsXG4gICAgICAgICAgICBzdHlsZXM6ICd3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogdml0ZS1wbHVnaW4tcmFkYXIgcGx1Z2luIGluamVjdCBzbmlwcGV0cyBmcm9tIGFuYWx5dGljcyBwcm92aWRlcnNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0YWZ5bmlha3NhY2hhL3ZpdGUtcGx1Z2luLXJhZGFyXG4gICAgICovXG4gICAgIXByb2Nlc3MuZW52LkdUTV9JRFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogVml0ZVBsdWdpblJhZGFyKHtcbiAgICAgICAgICBndG06IHtcbiAgICAgICAgICAgIGlkOiBwcm9jZXNzLmVudi5HVE1fSUQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICAvKipcbiAgICAgKiB2aXRlLXBsdWdpbi1wd2EgZ2VuZXJhdGUgbWFuaWZlc3QuanNvbiBhbmQgcmVnaXN0ZXIgc2VydmljZXMgd29ya2VyIHRvIGVuYWJsZSBQV0FcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgICAqL1xuICAgIFZpdGVQV0Eoe1xuICAgICAgYmFzZTogJy8nLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdmYXZpY29uLmljbycsICdyb2JvdHMudHh0JywgJ2FwcGxlLXRvdWNoLWljb24ucG5nJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnVnVlcm8gLSBBIGNvbXBsZXRlIFZ1ZSAzIGRlc2lnbiBzeXN0ZW0nLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVnVlcm8nLFxuICAgICAgICBzdGFydF91cmw6ICcvP3V0bV9zb3VyY2U9cHdhJyxcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiByb2xsdXAtcGx1Z2luLXB1cmdlY3NzIHBsdWdpbiBpcyByZXNwb25zaWJsZSBvZiBwdXJnaW5nIGNzcyBydWxlc1xuICAgICAqIHRoYXQgYXJlIG5vdCB1c2VkIGluIHRoZSBidW5kbGVcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Z1bGxIdW1hbi9wdXJnZWNzcy90cmVlL21haW4vcGFja2FnZXMvcm9sbHVwLXBsdWdpbi1wdXJnZWNzc1xuICAgICAqL1xuICAgIHB1cmdlY3NzKHtcbiAgICAgIG91dHB1dDogZmFsc2UsXG4gICAgICBjb250ZW50OiBbYC4vc3JjLyoqLyoudnVlYF0sXG4gICAgICB2YXJpYWJsZXM6IGZhbHNlLFxuICAgICAgc2FmZWxpc3Q6IHtcbiAgICAgICAgc3RhbmRhcmQ6IFtcbiAgICAgICAgICAvKGF1dHZ8bG5pbHxsbmlyfGZhcz8pLyxcbiAgICAgICAgICAvLShsZWF2ZXxlbnRlcnxhcHBlYXIpKHwtKHRvfGZyb218YWN0aXZlKSkkLyxcbiAgICAgICAgICAvXig/ISh8Lio/OiljdXJzb3ItbW92ZSkuKy1tb3ZlJC8sXG4gICAgICAgICAgL15yb3V0ZXItbGluayh8LWV4YWN0KS1hY3RpdmUkLyxcbiAgICAgICAgICAvZGF0YS12LS4qLyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0RXh0cmFjdG9yKGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGVudFdpdGhvdXRTdHlsZUJsb2NrcyA9IGNvbnRlbnQucmVwbGFjZSgvPHN0eWxlW15dKz88XFwvc3R5bGU+L2dpLCAnJylcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRXaXRob3V0U3R5bGVCbG9ja3MubWF0Y2goL1tBLVphLXowLTktXy86XSpbQS1aYS16MC05LV8vXSsvZykgfHwgW11cbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiB2aXRlLXBsdWdpbi1pbWFnZW1pbiBvcHRpbWl6ZSBhbGwgaW1hZ2VzIHNpemVzIGZyb20gcHVibGljIG9yIGFzc2V0IGZvbGRlclxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5uY3diL3ZpdGUtcGx1Z2luLWltYWdlbWluXG4gICAgICovXG4gICAgIU1JTklGWV9JTUFHRVNcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IEltYWdlTWluKHtcbiAgICAgICAgICBnaWZzaWNsZToge1xuICAgICAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICAgICAgICBpbnRlcmxhY2VkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlwbmc6IHtcbiAgICAgICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW96anBlZzoge1xuICAgICAgICAgICAgcXVhbGl0eTogNjAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbmdxdWFudDoge1xuICAgICAgICAgICAgcXVhbGl0eTogWzAuOCwgMC45XSxcbiAgICAgICAgICAgIHNwZWVkOiA0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3Znbzoge1xuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gIF0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0QyxTQUFBLFNBQUEsZUFBQTtBQUM1QyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUNyQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxjQUFjO0FBZHVCLElBQUEsMkNBQUE7QUFtQjVDLElBQU0sZ0JBQWdCLFFBQVEsSUFBSSxTQUFTLFFBQVEsSUFBSSxXQUFXLFNBQVM7QUFPM0UsSUFBQSxzQkFBZSxhQUFhO0VBRTFCLE1BQU0sUUFBUSxJQUFHO0VB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
