import { evaluate, derivative, inv, multiply } from 'mathjs';

const SNENewton = (data: string[], x0, y0, e: number) => {
  const jacobian: string[][] = [[], []];
  let counter: number = 0;
  data.forEach((item, index) => {
    jacobian[index].push(derivative(item, 'x').toString());
    jacobian[index].push(derivative(item, 'y').toString());
  });

  // const dx: string[][] = [];
  // const dy: string[][] = [];
  const xPrev: number[] = [x0, y0];
  const xNow: number[] = [];
  // for (let i = 0; i < 2; i++) {
  //   dx.push([data[i], jacobian[i][1]]);
  //   dy.push([jacobian[i][0], data[i]]);
  // }

  while (counter < 100) {
    const inversedJacob = inv(fromStrToNumber(jacobian, xPrev[0], xPrev[1]));
    const preResult = multiply(
      inversedJacob,
      data.map((item) => evaluate(item, { x: xPrev[0], y: xPrev[1] })),
    );
    xPrev.forEach((item, index) => {
      xNow[index] = item - Number(preResult[index]);
    });
    if (Math.abs(xNow[0] - xPrev[0]) < e && Math.abs(xNow[1] - xPrev[1]) < e) {
      console.log(counter);
      return xNow;
    }
    xPrev[0] = xNow[0];
    xPrev[1] = xNow[1];
    counter++;
  }
};
const fromStrToNumber = (
  matrix: string[][],
  x: number,
  y: number,
): number[][] =>
  matrix.map((item) =>
    item.map((el) =>
      evaluate(el, {
        x,
        y,
      }),
    ),
  );

export default SNENewton;
