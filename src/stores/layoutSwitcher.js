import { acceptHMRUpdate, defineStore } from 'pinia';
export const useLayoutSwitcher = defineStore('layoutSwitcher', () => {
    const route = useRoute();
    const isNavbarRoute = computed(() => route?.fullPath?.startsWith?.('/navbar/'));
    const isSidebarRoute = computed(() => route?.fullPath?.startsWith?.('/sidebar/'));
    const hasDynamicLayout = computed(() => isNavbarRoute.value || isSidebarRoute.value);
    const navbarLayoutLink = computed(() => route?.fullPath?.replace?.('sidebar', 'navbar') ?? '');
    const sidebarLayoutLink = computed(() => route?.fullPath?.replace?.('navbar', 'sidebar') ?? '');
    const NavbarLayout = defineAsyncComponent({
        loader: () => import('/@src/layouts/NavbarLayout.vue'),
        delay: 0,
        suspensible: false,
    });
    const NavbarDropdownLayout = defineAsyncComponent({
        loader: () => import('/@src/layouts/NavbarDropdownLayout.vue'),
        delay: 0,
        suspensible: false,
    });
    const NavbarSearchLayout = defineAsyncComponent({
        loader: () => import('/@src/layouts/NavbarSearchLayout.vue'),
        delay: 0,
        suspensible: false,
    });
    const navbarComponents = {
        'navbar-default': NavbarLayout,
        'navbar-fade': NavbarLayout,
        'navbar-colored': NavbarLayout,
        'navbar-dropdown': NavbarDropdownLayout,
        'navbar-dropdown-colored': NavbarDropdownLayout,
        'navbar-clean': NavbarSearchLayout,
        'navbar-clean-center': NavbarSearchLayout,
        'navbar-clean-fade': NavbarSearchLayout,
    };
    const navbarComponentsIds = Object.keys(navbarComponents);
    const navbarLayoutId = ref('navbar-default');
    const navbarLayoutComponent = computed(() => {
        return navbarComponents[navbarLayoutId.value] || NavbarLayout;
    });
    const navbarLayoutTheme = computed(() => {
        switch (navbarLayoutId.value) {
            case 'navbar-fade':
            case 'navbar-clean-fade':
                return 'fade';
            case 'navbar-colored':
            case 'navbar-dropdown-colored':
                return 'colored';
            case 'navbar-clean-center':
                return 'center';
            default:
                return 'default';
        }
    });
    const SidebarLayout = defineAsyncComponent({
        loader: () => import('/@src/layouts/SidebarLayout.vue'),
        delay: 0,
        suspensible: false,
    });
    const SideblockLayout = defineAsyncComponent({
        loader: () => import('/@src/layouts/SideblockLayout.vue'),
        delay: 0,
        suspensible: false,
    });
    const sidebarComponents = {
        'sidebar-default': SidebarLayout,
        'sidebar-color': SidebarLayout,
        'sidebar-color-curved': SidebarLayout,
        'sidebar-curved': SidebarLayout,
        'sidebar-float': SidebarLayout,
        'sidebar-labels': SidebarLayout,
        'sidebar-labels-hover': SidebarLayout,
        'sideblock-default': SideblockLayout,
        'sideblock-color': SideblockLayout,
        'sideblock-color-curved': SideblockLayout,
        'sideblock-curved': SideblockLayout,
    };
    const sidebarComponentsIds = Object.keys(sidebarComponents);
    const sidebarLayoutId = ref('sidebar-default');
    const sidebarLayoutComponent = computed(() => {
        return sidebarComponents[sidebarLayoutId.value] || SidebarLayout;
    });
    const sidebarLayoutTheme = computed(() => {
        switch (sidebarLayoutId.value) {
            case 'sidebar-float':
                return 'float';
            case 'sidebar-labels':
                return 'labels';
            case 'sidebar-labels-hover':
                return 'labels-hover';
            case 'sidebar-color':
            case 'sideblock-color':
                return 'color';
            case 'sidebar-curved':
            case 'sideblock-curved':
                return 'curved';
            case 'sideblock-color-curved':
            case 'sidebar-color-curved':
                return 'color-curved';
            case 'sidebar-default':
            case 'sideblock-default':
            default:
                return 'default';
        }
    });
    const dynamicLayoutId = computed({
        get: () => {
            if (isNavbarRoute.value) {
                return navbarLayoutId.value;
            }
            else {
                return sidebarLayoutId.value;
            }
        },
        set: (value) => {
            if (navbarComponentsIds.includes(value)) {
                navbarLayoutId.value = value;
                return;
            }
            if (sidebarComponentsIds.includes(value)) {
                sidebarLayoutId.value = value;
                return;
            }
        },
    });
    const dynamicLayoutComponent = computed(() => {
        if (isNavbarRoute.value) {
            return navbarLayoutComponent.value;
        }
        else {
            return sidebarLayoutComponent.value;
        }
    });
    const dynamicLayoutProps = computed(() => {
        if (isNavbarRoute.value) {
            return {
                theme: navbarLayoutTheme.value,
                key: navbarLayoutId.value,
            };
        }
        else {
            return {
                theme: sidebarLayoutTheme.value,
                key: sidebarLayoutId.value,
            };
        }
    });
    function setDynamicLayoutId(theme) {
        dynamicLayoutId.value = theme;
    }
    return {
        dynamicLayoutComponent,
        dynamicLayoutProps,
        dynamicLayoutId,
        setDynamicLayoutId,
        sidebarLayoutId,
        sidebarLayoutComponent,
        sidebarLayoutTheme,
        navbarLayoutId,
        navbarLayoutComponent,
        navbarLayoutTheme,
        isNavbarRoute,
        isSidebarRoute,
        navbarLayoutLink,
        sidebarLayoutLink,
        hasDynamicLayout,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLayoutSwitcher, import.meta.hot));
}
//# sourceMappingURL=layoutSwitcher.js.map