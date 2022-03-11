const Algebrite = require('algebrite');

const calc = (func:string, a:number, b:number, epsilon:number) => {
  let c: number;
  while ((b - a)/2 > epsilon) {
    c = (a + b) / 2;
    console.log(c,a,b,Algebrite.eval(func,'x',c).d)
    if (Algebrite.eval(func,'x',b).d * Algebrite.eval(func,'x',c).d < 0) {
      a = c;
    } else {
      b = c;
    }
  }
  return (a + b) / 2;
}

console.log(calc('x^3 - 2 * x ^ 2 - 4 * x + 5',-20,-1 ,0.0001));