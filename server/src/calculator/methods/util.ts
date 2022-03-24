import {evaluate} from "mathjs";

export const split = (func: string, a: number, b: number) => {
    const length = (b - a) / 10;
    let xPrev: number = a;
    for (let i = 0; i < 9; i++) {
        a += length
        if (evaluate(func, {x: xPrev}) * evaluate(func, {x: a}) < 0) {
            return [xPrev, a];
        }
        xPrev = a;
    }
}

export const toFix = (number: number, accuracy: number = 3): number => {
    return +number.toFixed(accuracy);
}

const getEl = (splittedEquation, index, index2) => {
    return (splittedEquation[index].slice(index2) === '-'
        || splittedEquation[index].slice(index2) === '+')
        ? `${splittedEquation[index].slice(index2)}1`
        : splittedEquation[index].slice(index2);
}

export const parseStringArrToMatrix = (expression) => {
    const count = expression.length;
    const newEquations = [...expression].map(equation => equation.replaceAll(' ', ''));
    const matrix: number[][] = newEquations.map(equation => {
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
    return matrix;
}