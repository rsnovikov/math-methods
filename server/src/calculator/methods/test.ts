let equations: string[] = ['10x1 + x2 - x3 - 11','10x2  + x1 - x3 - 10','-x1 + x2 + 10x3 - 10'];
const newEquations = [...equations].map(equation => equation.replaceAll(' ', ''));
const matrix: string[][] = newEquations.map(equation => {
  const row: string[] = [];

  const splittedEquation = equation.split('x');
  const el1 = (splittedEquation[0].slice(0) === '-' || splittedEquation[0].slice(0) === '+') ? `${splittedEquation[0].slice(0)}1` : splittedEquation[0].slice(0);

  row[+splittedEquation[1][0] - 1] = el1;
  row[+splittedEquation[2][0] - 1] = el1;
  row[+splittedEquation[3][0] - 1] = el1;
  return row;
});

console.log(matrix)