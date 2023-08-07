import {det} from "mathjs"

const Regress = (data: string[], mode: number = 0) => {
  const liner = [];
  const square = []
  const matrix: number[][] = data.map(item => item.split(item.includes(",") ? "," : " "))
    .map(item => item.map(element => Number(element)));
  const matrixParametr: number[][] = [];
  const rightPart: number[] = [];
  for (let i = 0; i < 3; i++) {
    const buffer: number[] = [];
    for (let j = i + 2; j >= i; j--) {
      if (j !== 0)
        buffer.push(arrPow(matrix[0], j));
      else
        buffer.push(matrix[0].length);
    }
    rightPart.push(matrix[0].reduce((accum, current, index) => accum + (current ** i) * matrix[1][index], 0));
    matrixParametr.push(buffer);
  }
  const determ = det(matrixParametr);
  for (let i = 0; i < matrixParametr.length; i++) {
    const newMatrix = matrixParametr.map((item, index) => item.map((element, botIndex) => (botIndex === i) ? rightPart[index] : element))
    square.push(det(newMatrix) / determ)
  }

  const div: number = arrPow(matrix[0], 1) ** 2 - matrix[0].length * arrPow(matrix[0], 2);
  liner.push((arrPow(matrix[0], 1) * arrPow(matrix[1], 1) - matrix[0].length * matrix[0].reduce((accum, item, index) => {
    return accum + item * matrix[1][index]
  }, 0)) / div);
  liner.push((arrPow(matrix[0], 1) * matrix[0].reduce((accum, item, index) => {
    return accum + item * matrix[1][index]
  }, 0) - arrPow(matrix[0], 2) * arrPow(matrix[1], 1)) / div);
  return  {
    liner,
    square
  };
}
const arrPow = (array: number[], pow: number): number => {
  return array.reduce((accum, curval) => accum + (curval ** pow), 0);
}


export default Regress;