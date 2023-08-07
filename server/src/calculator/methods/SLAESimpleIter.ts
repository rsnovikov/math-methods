import { parseStringArrToMatrix, toFix } from './util';
import { IResult } from '../calculatorTypes';
import { find, max } from 'rxjs';
import { matrixDiviation } from './util';
import { epsilonCheck } from './util';
import { aFind } from './util';

const SLAESimpleIter = (SLAE: string[], epsilon: number): IResult => {
  const matrix: number[][] = matrixDiviation(parseStringArrToMatrix(SLAE));
  let counter = 0;
  let max = aFind(matrix),
    titles: string[] = [],
    values: number[][] = [],
    xBuff: number[] = [];
  for (let i = 0; i < matrix[0].length - 1; i++) {
    titles[i] = `x${i + 1}`;
  }

  //console.log(max)
  if (max > 1) throw new Error('Система не сходится');

  let xPrev: number[] = [];
  let xNow: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    xPrev[i] = 0;
    xNow[i] = 0;
  }
  while (true) {
    for (let i = 0; i < xPrev.length; i++) {
      for (let j = 0; j < matrix[i].length - 1; j++) {
        if (i !== j) {
          xNow[i] += -(xPrev[j] * matrix[i][j]);
        }
      }
      xNow[i] -= matrix[i][matrix[i].length - 1];
      xBuff[i] = toFix(xNow[i]);
    }
    values.push(xBuff);
    counter++;
    // console.log(xNow);
    if (epsilonCheck(xNow, xPrev, epsilon)) {
      const result: IResult = {
        interData: {
          titles,
          values,
        },
        answer: xNow,
      };
      // console.log(counter)
      return result;
    }
    for (let i = 0; i < xNow.length; i++) {
      xPrev[i] = xNow[i];
      xNow[i] = 0;
    }
  }
};

//-3.2x1+2x2-x3+5.4
//x1+5x2-2x3-5
//x1+x2-3.5x3+0.5

export default SLAESimpleIter;
