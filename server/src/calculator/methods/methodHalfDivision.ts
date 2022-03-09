// const Algebrite = require('algebrite');
//
// const createFn = (strFn) => {
//   return (x) => {
//     return eval(strFn.replaceAll('^', '**'));
//   }
// }
//
// const calc = (func, a, b, epsilon) => {
//   let c: number;
//   while (b - a > epsilon) {
//     c = (a + b) / 2;
//     if (func(b) * func(c) < 0) {
//       a = c;
//     } else {
//       b = c;
//     }
//   }
//   return (a + b) / 2;
// }
// // DERIVATIVE
// // const derivedEquation = Algebrite.derivative('x^3 - 2 * x ^ 2 - 4 * x + 5').toString();
// // console.log(derivedEquation);
// // const roots = Algebrite.roots(derivedEquation).toString();
// // console.log(roots);
// const f = createFn('x^3 - 2 * x ^ 2 - 4 * x + 5');
export default function sum() {
    return 2 + 2;
}
// console.log(calc(f, -2, -1, 1e-2));