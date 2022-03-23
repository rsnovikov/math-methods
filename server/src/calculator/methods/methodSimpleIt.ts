import {evaluate, derivative} from 'mathjs';
import {IEquationMethodProps} from "../calculatorTypes";

import {split} from './utilites';

const simpleIt = ({equation, a, b, accuracy}: IEquationMethodProps) => {
    const der: string = derivative(equation, 'x').toString();
    const numbers: number[] = [];
    let lambda: number;
    let borders: number[] = split(equation, a, b);
    let xPrev: number = borders[0], xNow: number;
    let counter: number = 0;
    for (let i = a; i <= b; i++) {
        numbers.push(evaluate(der, {x: i}))
    }
    lambda = 1 / Math.max(...numbers);

    while (true) {
        xNow = xPrev - lambda * evaluate(equation, {x: xPrev});
        counter++
        if (Math.abs((xNow - xPrev)) < accuracy) {
            console.log(counter)
            return xNow;
        }
        xPrev = xNow;
    }

}

export default simpleIt;