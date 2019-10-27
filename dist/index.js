"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lunh(value) {
    if (/[^0-9-\s]+/.test(value))
        return false;
    value = value.replace(/\D/g, '');
    const total = value
        .split('')
        .reverse()
        .reduce((total, char, index) => {
        let value = +char;
        const isEven = (index + 1) % 2 === 0;
        if (isEven)
            value *= 2;
        if (value > 9)
            value -= 9;
        return total + value;
    }, 0);
    return total % 10 === 0;
}
exports.default = lunh;
//# sourceMappingURL=index.js.map