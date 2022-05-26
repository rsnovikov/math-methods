import { evaluate } from 'mathjs';

export const split = (func: string, a: number, b: number) => {
  const div = (b - a) * 5;
  const length = (b - a) / div;
  let xPrev: number = a;
  for (let i = 0; i < div; i++) {
    a += length;
    if (evaluate(func, { x: a }) === 0) {
      return [Math.round(a) - 0.5, Math.round(a) + 0.5];
    }
    if (evaluate(func, { x: xPrev }) * evaluate(func, { x: a }) < 0) {
      return [Math.floor(xPrev), Math.ceil(a)];
    }
    xPrev = a;
  }
  return;
};

export const toFix = (number: number, accuracy: number = 6): number => {
  return +number.toFixed(accuracy);
};

const getEl = (splittedEquation, index, index2) => {
  const num = splittedEquation[index].slice(index2);
  return num === '-' || num === '+' || num === '' ? `${num}1` : num;
};

export const parseStringArrToMatrix = (expression) => {
  const count = expression.length;
  const newEquations = [...expression].map((equation) =>
    equation.replaceAll(' ', ''),
  );
  const matrix: number[][] = newEquations.map((equation) => {
    const row: number[] = [];
    const splittedEquation = equation.split('x');
    const maxes: number[] = [];
    for (let i = 0; i < count; i++) {
      let el: string;
      if (i === 0) {
        el = getEl(splittedEquation, i, 0);
      } else {
        el = getEl(splittedEquation, i, 1);
      }
      maxes.push(+splittedEquation[i + 1][0]);
      row[+splittedEquation[i + 1][0] - 1] = +el;
    }
    const max = Math.max(...maxes);
    const lastEl = getEl(splittedEquation, max, 1);
    row[max] = +lastEl;
    return row;
  });
  // console.log(matrix);
  return matrix;
};

export const matrixDiviation = (mat: number[][]): number[][] => {
  const answerMatrix: number[][] = [];
  mat.forEach((item, index) => {
    answerMatrix.push(
      item.map((current) => {
        return current / mat[index][index];
      }),
    );
  });
  return answerMatrix;
};

export const epsilonCheck = (xNew: number[], xOld: number[], e: number) => {
  let flag: boolean = false;
  for (let i = 0; i < xNew.length; i++) {
    if (Math.abs(xOld[i] - xNew[i]) < e) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
};

export const aFind = (mx: number[][]) => {
  let maxArr: number[] = [];
  mx.forEach((item, index) => {
    maxArr.push(
      item.reduce((preVal, currentVal, bottIndex) => {
        if (bottIndex !== index && bottIndex !== item.length - 1) {
          return preVal + Math.abs(currentVal);
        } else return preVal;
      }, 0),
    );
  });
  return Math.max(...maxArr);
};
