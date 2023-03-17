const onUpdate = (el, bindings) => {
    const src = bindings.value.src;
    const placeholder = bindings.value.placeholder;
    if (src) {
        const image = new Image();
        if (placeholder) {
            image.onerror = () => {
                image.onerror = null;
                el.style.backgroundImage = `url(${placeholder})`;
            };
        }
        image.onload = () => {
            image.onload = null;
            el.style.backgroundImage = `url(${src})`;
        };
        image.src = src;
    }
};
export const vBackground = {
    getSSRProps() {
        return {};
    },
    updated: onUpdate,
    mounted: onUpdate,
};
//# sourceMappingURL=background.js.map