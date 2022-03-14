import {evaluate} from 'mathjs';

const halfDiv = (func: string, a: number, b: number, epsilon: number) => {
    let c: number;
    while ((b - a) / 2 > epsilon) {
        c = (a + b) / 2;
        if (evaluate(func, {x: b}) * evaluate(func, {x: c}) < 0) {
            a = c;
        } else {
            b = c;
        }
    }
    return (a + b) / 2;
}
console.log(halfDiv('x^3 - 2 * x ^ 2 - 4 * x + 5', -2, -1, 0.01));

export default halfDiv;