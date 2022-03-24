import {evaluate, derivative} from 'mathjs';
import {split} from './util';
import {IEquationMethodProps, IResult} from "../calculatorTypes";

const equationNewton = ({equation, a, b, accuracy}: IEquationMethodProps): IResult => {
    const der: string = derivative(equation, 'x').toString();
    const der2: string = derivative(der, 'x').toString();
    const numbersFirst: number[] = [];
    const numbersSecond: number[] = []
    let borders: number[] = split(equation, a, b);
    let xPrev: number = borders[0], xNow: number;
    let counter: number = 0;
    for (let i = a; i <= b; i++) {
        numbersFirst.push(Math.abs(evaluate(der, {x: i})));
        numbersSecond.push(Math.abs(evaluate(der2, {x: i})));
    }
    let max = Math.max(...numbersSecond), min = Math.min(...numbersFirst);
    while (true) {
        xNow = xPrev - evaluate(equation, {x: xPrev}) / evaluate(der, {x: xPrev});
        counter++
        if (Math.abs((xNow - xPrev)) < Math.sqrt(2 * accuracy * min / max)) {
            const result: IResult = {
                interData: {
                    titles: [],
                    values: []
                },
                answer: xNow
            };
            return result;
        }
        xPrev = xNow;
    }
}

export default equationNewton;

