import { evaluate, derivative } from 'mathjs';
import { split, toFix } from './util';
import { IEquationMethodProps, IResult } from '../calculatorTypes';

const equationNewton = ({
  equation,
  a,
  b,
  accuracy,
}: IEquationMethodProps): IResult => {
  const der: string = derivative(equation, 'x').toString();
  const der2: string = derivative(der, 'x').toString();
  const numbersFirst: number[] = [];
  const numbersSecond: number[] = [];
  let funcValue: number,
    derValue: number,
    borders: number[] = split(equation, a, b);
  if (borders === undefined)
    throw new Error('В заданном промежутке нет корней');
  let xPrev: number = borders[0],
    xNow: number,
    values: number[][] = [];
  for (let i = borders[0] - 2; i <= borders[1] + 2; i++) {
    numbersFirst.push(Math.abs(evaluate(der, { x: i })));
    numbersSecond.push(Math.abs(evaluate(der2, { x: i })));
  }
  let max = Math.max(...numbersSecond),
    min = Math.min(...numbersFirst);
  while (true) {
    funcValue = evaluate(equation, { x: xPrev });
    derValue = evaluate(der, { x: xPrev });
    xNow = xPrev - funcValue / derValue;
    values.push([toFix(xNow), toFix(funcValue), toFix(derValue)]);
    console.log(xNow);
    if (Math.abs(xNow - xPrev) < Math.sqrt((2 * accuracy * min) / max)) {
      const result: IResult = {
        interData: {
          titles: ['x', 'F(x)', 'dF(x)'],
          values,
        },
        answer: xNow,
      };
      return result;
    }
    xPrev = xNow;
  }
};

export default equationNewton;
