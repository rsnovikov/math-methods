import {evaluate, derivative} from 'mathjs';
import {IEquationMethodProps, IResult} from "../calculatorTypes";
import {split, toFix} from "./util";

const simpleIter = ({equation, a, b, accuracy}: IEquationMethodProps): IResult => {
    const der: string = derivative(equation, 'x').toString();
    const numbers: number[] = [];
    let lambda: number,
        values: number[][] = [],
        funcValue: number;
    let borders: number[] = split(equation, a, b);
    if (borders === undefined) {
        throw new Error("В заданном промежутке нет корней");
    }
    let xPrev: number = borders[0], xNow: number;
    for (let i = borders[0] - 2; i <= borders[1] + 2; i++) {
        numbers.push(evaluate(der, {x: i}))
    }
    lambda = 1 / Math.max(...numbers);
    while (true) {
        funcValue = evaluate(equation, {x: xPrev})
        xNow = xPrev - lambda * funcValue;
        values.push([toFix(xNow), toFix(funcValue)]);
        if (Math.abs((xNow - xPrev)) < accuracy) {
            const result: IResult = {
                interData: {
                    titles: ["x", "F(x)"],
                    values
                },
                answer: xNow
            };
            return result;
        }
        xPrev = xNow;
    }
}

export default simpleIter;