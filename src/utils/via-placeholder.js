export const onceImageErrored = (width = 150, height) => (event) => {
    const target = event.target;
    target.src = `https://via.placeholder.com/${width}x${height ?? width}`;
};
//# sourceMappingURL=via-placeholder.js.map