if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_...all_-48334cfb.css",revision:null},{url:"assets/_...all_-c710257e.js",revision:null},{url:"assets/_id_-8990dd21.js",revision:null},{url:"assets/_id_-93fc7883.js",revision:null},{url:"assets/_id_-c8c0db5f.js",revision:null},{url:"assets/@vueform_multiselect-3820428e.js",revision:null},{url:"assets/@vueform_slider-61e3de76.js",revision:null},{url:"assets/action-page-1-29f019cb.js",revision:null},{url:"assets/action-page-1-3953d82d.css",revision:null},{url:"assets/action-page-2-afbe39e0.js",revision:null},{url:"assets/action-page-2-b9cc7bc5.css",revision:null},{url:"assets/analytics-bf7d32d7.js",revision:null},{url:"assets/AnimatedLogo-39a758e9.css",revision:null},{url:"assets/AnimatedLogo-b882356f.js",revision:null},{url:"assets/app-b5c5e8e6.js",revision:null},{url:"assets/auth-15ff1ddb.css",revision:null},{url:"assets/auth-1bdcd5a5.js",revision:null},{url:"assets/banking-1-73712411.js",revision:null},{url:"assets/banking-2-c68fdbfd.js",revision:null},{url:"assets/banking-3-2f812f32.js",revision:null},{url:"assets/charts-apex-07f54c9c.js",revision:null},{url:"assets/charts-billboardsjs-dae6298c.js",revision:null},{url:"assets/chunk-PJ4ESXSS-0f5bc740.js",revision:null},{url:"assets/company-8016ba41.js",revision:null},{url:"assets/course-2d81ef42.js",revision:null},{url:"assets/dashboards-164d3198.js",revision:null},{url:"assets/date-KDB2IUTZ-15ee5adb.js",revision:null},{url:"assets/ecommerce-1-11c6af7a.js",revision:null},{url:"assets/experience-09394c16.js",revision:null},{url:"assets/experience-4ed2667a.js",revision:null},{url:"assets/experience-dc0fcda2.js",revision:null},{url:"assets/flights-2ce97287.js",revision:null},{url:"assets/FlightsDashboard-cf57e84b.css",revision:null},{url:"assets/FlightsDashboard.vue_vue_type_style_index_0_lang-dff25f93.js",revision:null},{url:"assets/followers-5d3d48b6.js",revision:null},{url:"assets/food-delivery-b7aa65ae.js",revision:null},{url:"assets/form-layouts-1-8a36baa3.js",revision:null},{url:"assets/form-layouts-1-da3abbe4.css",revision:null},{url:"assets/form-layouts-2-5547a5f6.css",revision:null},{url:"assets/form-layouts-2-c3f79c2f.js",revision:null},{url:"assets/form-layouts-3-06341be0.css",revision:null},{url:"assets/form-layouts-3-20d2c4fe.js",revision:null},{url:"assets/form-layouts-4-a8afbecc.css",revision:null},{url:"assets/form-layouts-4-ad2f1d53.js",revision:null},{url:"assets/form-layouts-5-43690072.js",revision:null},{url:"assets/form-layouts-5-71d45385.css",revision:null},{url:"assets/grid-cards-1-174036f8.js",revision:null},{url:"assets/grid-cards-1-276afb99.css",revision:null},{url:"assets/grid-cards-2-4bcfe803.css",revision:null},{url:"assets/grid-cards-2-831ff694.js",revision:null},{url:"assets/grid-cards-3-282718d7.css",revision:null},{url:"assets/grid-cards-3-957d53f7.js",revision:null},{url:"assets/grid-cards-4-933f82f2.css",revision:null},{url:"assets/grid-cards-4-c65d2eb7.js",revision:null},{url:"assets/grid-tiles-1-6466f420.js",revision:null},{url:"assets/grid-tiles-2-044db594.js",revision:null},{url:"assets/grid-tiles-3-cb28bd2c.js",revision:null},{url:"assets/grid-users-1-0192a520.css",revision:null},{url:"assets/grid-users-1-fd25c732.js",revision:null},{url:"assets/grid-users-2-9f07fe16.css",revision:null},{url:"assets/grid-users-2-dbc07099.js",revision:null},{url:"assets/grid-users-3-4d8a804c.js",revision:null},{url:"assets/grid-users-3-7be20b09.css",revision:null},{url:"assets/grid-users-4-48f7e5d1.css",revision:null},{url:"assets/grid-users-4-ecc821ca.js",revision:null},{url:"assets/health-54b7cbfc.js",revision:null},{url:"assets/hobbies-86a4bb92.js",revision:null},{url:"assets/human-ressources-d8142f2e.js",revision:null},{url:"assets/index-2a5d15f1.css",revision:null},{url:"assets/index-2afc6590.js",revision:null},{url:"assets/index-2b32231c.js",revision:null},{url:"assets/index-30fb41fd.css",revision:null},{url:"assets/index-46c37e37.js",revision:null},{url:"assets/index-508eb21d.css",revision:null},{url:"assets/index-60e4c100.js",revision:null},{url:"assets/index-7adb6531.js",revision:null},{url:"assets/index-82af16ce.js",revision:null},{url:"assets/index-86601a67.js",revision:null},{url:"assets/index-ba01663b.js",revision:null},{url:"assets/index-bb8b4b19.js",revision:null},{url:"assets/index-efd8e8aa.js",revision:null},{url:"assets/influencer-6d187c53.js",revision:null},{url:"assets/jobs-70193e46.js",revision:null},{url:"assets/kanban-board-c1bcd93c.js",revision:null},{url:"assets/LandingLayout.vue_vue_type_script_setup_true_lang-6ff48799.js",revision:null},{url:"assets/layouts-f0a7cb81.js",revision:null},{url:"assets/LayoutsMobileSubsidebar-74588346.css",revision:null},{url:"assets/LayoutsMobileSubsidebar-e987076c.js",revision:null},{url:"assets/layoutSwitcher-0a88d404.js",revision:null},{url:"assets/LayoutSwitcher.vue_vue_type_script_setup_true_lang-8f7b50b8.js",revision:null},{url:"assets/list-datatable-1-55ac185f.js",revision:null},{url:"assets/list-datatable-2-7f632452.js",revision:null},{url:"assets/list-datatable-3-d519c2d5.js",revision:null},{url:"assets/list-datatable-4-f57390d5.js",revision:null},{url:"assets/list-flex-1-38982a01.js",revision:null},{url:"assets/list-flex-2-97f6d1a6.css",revision:null},{url:"assets/list-flex-2-a58c1cbb.js",revision:null},{url:"assets/list-flex-3-5e9628a5.js",revision:null},{url:"assets/list-view-2-2db6136f.css",revision:null},{url:"assets/list-view-2-41e825fc.js",revision:null},{url:"assets/list-view-3-3df446a0.css",revision:null},{url:"assets/list-view-3-454b5c5c.js",revision:null},{url:"assets/list-view-4-8f105c5f.js",revision:null},{url:"assets/list-view-4-dec71cef.css",revision:null},{url:"assets/login-b3f6bf55.js",revision:null},{url:"assets/logo_ecomap-f6378b2a.js",revision:null},{url:"assets/maps-1-b1b574f0.js",revision:null},{url:"assets/maps-2-0a9c2f04.js",revision:null},{url:"assets/MobileNavbar-2c5f0fdc.css",revision:null},{url:"assets/MobileNavbar.vue_vue_type_style_index_0_lang-335c6c90.js",revision:null},{url:"assets/Navbar-cf12b0a0.css",revision:null},{url:"assets/Navbar.vue_vue_type_style_index_0_lang-8b5b4b6c.js",revision:null},{url:"assets/NavbarDropdownLayout-ca0a21af.js",revision:null},{url:"assets/NavbarLayout-10f59ee8.css",revision:null},{url:"assets/NavbarLayout-906dcd07.js",revision:null},{url:"assets/NavbarSearchLayout-b40dea1d.js",revision:null},{url:"assets/NavbarSearchLayout-ef4ee2d2.css",revision:null},{url:"assets/notyf-ffc27667.js",revision:null},{url:"assets/onboarding-page-1-03cf682b.js",revision:null},{url:"assets/onboarding-page-1-29b13252.css",revision:null},{url:"assets/onboarding-page-2-6181c097.js",revision:null},{url:"assets/onboarding-page-2-fcec7f48.css",revision:null},{url:"assets/onboarding-page-3-08c32544.js",revision:null},{url:"assets/onboarding-page-3-223a1c08.css",revision:null},{url:"assets/onboarding-page-4-27981ba0.js",revision:null},{url:"assets/onboarding-page-4-f2d2c587.css",revision:null},{url:"assets/onboarding-page-5-d0d8636e.css",revision:null},{url:"assets/onboarding-page-5-fa0127c9.js",revision:null},{url:"assets/onboarding-welcome-233132d0.js",revision:null},{url:"assets/personal-2-d1835be9.js",revision:null},{url:"assets/personal-3-0c5f40b6.js",revision:null},{url:"assets/personal-3-9d16f355.css",revision:null},{url:"assets/PersonalDashboardV2-c15f7a6e.css",revision:null},{url:"assets/PersonalDashboardV2.vue_vue_type_style_index_0_lang-5b01c95c.js",revision:null},{url:"assets/placeload-1-37307e0d.css",revision:null},{url:"assets/placeload-1-b043345d.js",revision:null},{url:"assets/placeload-2-cc92bbd2.js",revision:null},{url:"assets/placeload-3-f7b2cc22.js",revision:null},{url:"assets/placeload-4-008434f0.css",revision:null},{url:"assets/placeload-4-609775dc.js",revision:null},{url:"assets/profile-edit-33bdc94c.css",revision:null},{url:"assets/profile-edit-63280105.js",revision:null},{url:"assets/profile-notifications-ff1fb087.js",revision:null},{url:"assets/profile-settings-9b888a38.js",revision:null},{url:"assets/profile-view-aaca9260.js",revision:null},{url:"assets/projects-details-32be6d0a.js",revision:null},{url:"assets/projects-projects-1-54bae673.js",revision:null},{url:"assets/projects-projects-2-191add86.js",revision:null},{url:"assets/projects-projects-3-eeacfe6a.js",revision:null},{url:"assets/route-block-83d24a4e.js",revision:null},{url:"assets/saas-billing-3bdb5260.js",revision:null},{url:"assets/sales-235f084c.js",revision:null},{url:"assets/search-3-dark-77bfc85a.js",revision:null},{url:"assets/search-4-dark-5a3958d3.js",revision:null},{url:"assets/search-5-dark-27283497.js",revision:null},{url:"assets/search-empty-038f5d55.css",revision:null},{url:"assets/search-empty-46d33822.js",revision:null},{url:"assets/search-results-c53cc830.js",revision:null},{url:"assets/settings-86650418.js",revision:null},{url:"assets/settings-9392c600.js",revision:null},{url:"assets/settings-ada66af6.js",revision:null},{url:"assets/shop-edit-0a089ac4.js",revision:null},{url:"assets/shop-make-657d8a1b.js",revision:null},{url:"assets/ShopDetail-dabf26ed.css",revision:null},{url:"assets/ShopDetail.vue_vue_type_style_index_0_lang-c2c33a19.js",revision:null},{url:"assets/ShopEditGeneral-541a2f22.js",revision:null},{url:"assets/ShopEditGeneral-e02ce62d.css",revision:null},{url:"assets/Sidebar-a9a7b221.css",revision:null},{url:"assets/Sidebar.vue_vue_type_style_index_0_lang-7ab4025a.js",revision:null},{url:"assets/SidebarLayout-66373d70.js",revision:null},{url:"assets/SidebarLayout-829aa518.css",revision:null},{url:"assets/SideblockLayout-3c8f003a.css",revision:null},{url:"assets/SideblockLayout-4574a861.js",revision:null},{url:"assets/signup-4c4e5b51.js",revision:null},{url:"assets/skills-3e43e8cd.js",revision:null},{url:"assets/skills-47b1f45b.js",revision:null},{url:"assets/skills-d3b84b0f.js",revision:null},{url:"assets/sleep-fd7a5d8b.js",revision:null},{url:"assets/soccer-d802c784.js",revision:null},{url:"assets/stocks-f2d3429f.js",revision:null},{url:"assets/Toolbar.vue_vue_type_script_setup_true_lang-b12d1f64.js",revision:null},{url:"assets/UIWidget-f349fce3.css",revision:null},{url:"assets/UIWidget.vue_vue_type_style_index_0_lang-fdc40e80.js",revision:null},{url:"assets/useNotyf-c94e7364.js",revision:null},{url:"assets/userPopovers-2b960611.js",revision:null},{url:"assets/utility-account-confirm-c277e5ed.css",revision:null},{url:"assets/utility-account-confirm-ffcac667.js",revision:null},{url:"assets/utility-invoice-77fc7dc6.js",revision:null},{url:"assets/utility-invoice-8da4c3bf.css",revision:null},{url:"assets/utility-promotion-23a6c29c.js",revision:null},{url:"assets/utility-promotion-468cdba4.css",revision:null},{url:"assets/v-calendar-cdfa12b7.js",revision:null},{url:"assets/VAvatar-f9714346.css",revision:null},{url:"assets/VAvatar.vue_vue_type_style_index_0_lang-4d856f95.js",revision:null},{url:"assets/VAvatarStack.vue_vue_type_script_setup_true_lang-7cf37297.js",revision:null},{url:"assets/VBillboardJS-a600f12f.css",revision:null},{url:"assets/VBillboardJS.vue_vue_type_style_index_0_lang-89135d0a.js",revision:null},{url:"assets/VBlock-0264db73.css",revision:null},{url:"assets/VBlock.vue_vue_type_style_index_0_lang-2aa5d971.js",revision:null},{url:"assets/VCheckbox-335f9cad.css",revision:null},{url:"assets/VCheckbox.vue_vue_type_script_setup_true_lang-d0932c43.js",revision:null},{url:"assets/VControl-c2f839e3.js",revision:null},{url:"assets/VControl-fdd36048.css",revision:null},{url:"assets/VDropdown-dbc05ea0.css",revision:null},{url:"assets/VDropdown.vue_vue_type_style_index_0_lang-7e1790fc.js",revision:null},{url:"assets/VField.vue_vue_type_script_setup_true_lang-c6ccb8c7.js",revision:null},{url:"assets/VFlex-c47d498f.css",revision:null},{url:"assets/VFlex.vue_vue_type_style_index_0_lang-d833bfcd.js",revision:null},{url:"assets/VFlexPagination.vue_vue_type_script_setup_true_lang-062fa8b7.js",revision:null},{url:"assets/VFlexTable-af979523.css",revision:null},{url:"assets/VFlexTable.vue_vue_type_style_index_0_lang-f5bfada2.js",revision:null},{url:"assets/via-placeholder-24645670.js",revision:null},{url:"assets/VIconBox-10ebaf43.css",revision:null},{url:"assets/VIconBox.vue_vue_type_style_index_0_lang-a91c8fba.js",revision:null},{url:"assets/VIconButton.vue_vue_type_script_lang-d57724f0.js",revision:null},{url:"assets/VIconWrap-c462f918.css",revision:null},{url:"assets/VIconWrap.vue_vue_type_script_setup_true_lang-20048f2a.js",revision:null},{url:"assets/video-931a4a1e.js",revision:null},{url:"assets/viewWrapper-bcc55ab0.js",revision:null},{url:"assets/VInput.vue_vue_type_script_setup_true_lang-440b5fdc.js",revision:null},{url:"assets/VPlaceholderPage-0adb6c2e.css",revision:null},{url:"assets/VPlaceholderPage.vue_vue_type_style_index_0_lang-54e4a3a2.js",revision:null},{url:"assets/VPlaceholderSection-62f7b2af.css",revision:null},{url:"assets/VPlaceloadAvatar-2fda9dce.css",revision:null},{url:"assets/VPlaceloadAvatar.vue_vue_type_style_index_0_lang-ce19bbcd.js",revision:null},{url:"assets/VRadio-d7a132f9.css",revision:null},{url:"assets/VRadio.vue_vue_type_style_index_0_lang-36add377.js",revision:null},{url:"assets/VSimpleDatatables-50b865b6.css",revision:null},{url:"assets/VSimpleDatatables.vue_vue_type_style_index_0_lang-3ea7a5ea.js",revision:null},{url:"assets/VSwitchSegment-f90fe248.css",revision:null},{url:"assets/VTag-66a26c46.css",revision:null},{url:"assets/VTag.vue_vue_type_style_index_0_lang-bc409ed2.js",revision:null},{url:"assets/VTextarea.vue_vue_type_script_setup_true_lang-26ee33d5.js",revision:null},{url:"assets/vue-scrollto-b07c6d0a.js",revision:null},{url:"assets/vue3-apexcharts-5fbfced8.js",revision:null},{url:"assets/widgets-sample-creative-1c1df440.js",revision:null},{url:"assets/widgets-sample-list-f9569819.js",revision:null},{url:"assets/widgets-sample-stats-cc28ea76.js",revision:null},{url:"assets/widgets-sample-ui-c042815d.js",revision:null},{url:"assets/workbox-window-77e1b1e1.js",revision:null},{url:"assets/writer-45a32806.js",revision:null},{url:"index.html",revision:"53a3d9ba480839b19f608e9af1ed3029"},{url:"vendors/font-awesome-v5.css",revision:"0c25eda76770e390fc740da913990c3a"},{url:"vendors/line-icons-pro.css",revision:"1997d7999662445cda8908cd477ff3fd"},{url:"favicon.svg",revision:"e2af954d1093e1596b864d8602c32522"},{url:"favicon.ico",revision:"2608995d3ce047aed1b4f12314b971e6"},{url:"apple-touch-icon.png",revision:"3483d045409e842f56d487e9d1dbd49c"},{url:"pwa-192x192.png",revision:"0d44461ec0ee15a7f1a74ff2dbad1247"},{url:"pwa-512x512.png",revision:"3584115539362f85fb8b9dc35ccd3e57"},{url:"manifest.webmanifest",revision:"dffbc68d6792c8e2ee5bb914d28267c8"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
