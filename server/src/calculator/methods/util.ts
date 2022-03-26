import {evaluate} from "mathjs";

export const split = (func: string, a: number, b: number) => {
    const div = (b - a) * 5
    const length = (b - a) / div;
    let xPrev: number = a;
    for (let i = 0; i < div; i++) {
        a += length
        if (evaluate(func, {x: xPrev}) * evaluate(func, {x: a}) < 0) {
            return [Math.floor(xPrev), Math.ceil(a)];
        }
        xPrev = a;
    }
    return;
}

export const toFix = (number: number, accuracy: number = 4): number => {
    return +number.toFixed(accuracy);
}

const getEl = (splittedEquation, index, index2) => {
    const num = splittedEquation[index].slice(index2);
    return (num === "-"
        || num === "+"
        || num === "")
        ? `${num}1`
        : num;
}

export const parseStringArrToMatrix = (expression) => {
    const count = expression.length;
    const newEquations = [...expression].map(equation => equation.replaceAll(" ", ""));
    const matrix: number[][] = newEquations.map(equation => {
        const row: number[] = [];
        const splittedEquation = equation.split("x");
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
    console.log(matrix);
    return matrix;
}
