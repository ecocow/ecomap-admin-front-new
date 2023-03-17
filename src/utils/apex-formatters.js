import dayjs from 'dayjs';
export function toString(val) {
    return `${val}`;
}
export function perSession(val) {
    return `${val} per session`;
}
export function asMinutes(val) {
    return `${val} (mins)`;
}
export function asDollar(val) {
    return `$ ${val}`;
}
export function asKDollar(val) {
    return `$ ${val}K`;
}
export function asPercent(val) {
    return `${val} %`;
}
export function toDate(format) {
    return (val, timestamp) => dayjs(timestamp).format(format);
}
export function toFixed(fractionDigit, divider = 1) {
    return (val) => (val / divider).toFixed(fractionDigit);
}
//# sourceMappingURL=apex-formatters.js.map