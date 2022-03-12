const Algebrite = require('algebrite');

const createFn = (strFn) => {
  return (x) => {
    return eval(strFn.replaceAll('^', '**'));
  }
}

const calc = (func, a, b, epsilon) => {
  let c: number;
  while (b - a > epsilon) {
    c = (a + b) / 2;
    if (Algebrite.eval(func, 'x', b).d * Algebrite.eval(func, 'x', c).d < 0) {
      a = c;
    } else {
      b = c;
    }
  }
  return (a + b) / 2;
}
// DERIVATIVE
// const derivedEquation = Algebrite.derivative('x^3 - 2 * x ^ 2 - 4 * x + 5').toString();
// console.log(derivedEquation);
// const roots = Algebrite.roots(derivedEquation).toString();
// console.log(roots);
console.log(Algebrite.eval('x^3 - 2 * x ^ 2 - 4 * x + 5', 'x', 0.515625).d)
console.log(calc('x^3 - 2 * x ^ 2 - 4 * x + 5', -2, -1, 0.001));