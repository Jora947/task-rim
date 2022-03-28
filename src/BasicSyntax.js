export function romanToInteger(str) {
    let result = 0;
    let value = 0;
    let prev = 0;

    for (let i = 0; i < str.length; i++) {
        let current = to_int(str[i]);
        if (current > prev) {
            result -= 2 * value;
        }
        if (current !== prev) {
            value = 0;
        }
        value += current;
        result += current;
        prev = current;
    }
    return result;
}
function to_int(char) {
    if (char === 'I') {
        return 1;
    }
    if (char === 'V') {
        return 5;
    }
    if (char === 'X') {
        return 10;
    }
    if (char === 'L') {
        return 50;
    }
    if (char === 'C') {
        return 100;
    }
    if (char === 'D') {
        return 500;
    }
    if (char === 'M') {
        return 1000;
    } else {
        return -1;
    }
}
