import {evaluate} from 'mathjs';

const halfDiv = (func: string, a: number, b: number, epsilon: number) => {
    let c: number,counter:number=0;
    while ((b - a)  > epsilon) {
        c = (a + b) / 2;
        if (evaluate(func, {x: b}) * evaluate(func, {x: c}) < 0) {
            a = c;
        } else {
            b = c;
        }
        counter++;
    }
    console.log(counter);
    return (a + b) / 2;
}
console.log(halfDiv('x^3 - 2 * x ^ 2 - 4 * x + 5', -10, 0, 0.0001));
export default halfDiv;