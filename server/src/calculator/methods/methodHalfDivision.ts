const Algebrite = require('algebrite');

const halfDiv = (func:string, a:number, b:number, epsilon:number) => {
  let c: number;
  while ((b - a)/2 > epsilon) {
    c = (a + b) / 2;
    if (getNum(Algebrite.eval(func,'x',b)) * getNum(Algebrite.eval(func,'x',c)) < 0) {
      a = c;
    } else {
      b = c;
    }
  }
  return (a + b) / 2;
}
const getNum = (obj:any) => obj.d == 0 ? Number(obj) : obj.d;
export default halfDiv;