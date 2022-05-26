import {evaluate, derivative} from 'mathjs';
import {IEquationMethodProps, IResult} from "../calculatorTypes";
import {split, toFix} from "./util";

const simpleIter = ({equation, a, b, accuracy}: IEquationMethodProps): IResult => {
    const der: string = derivative(equation, "x").toString();
    const numbers: number[] = [];
    let lambda: number,
        values: number[][] = [],
        funcValue: number,
        counter: number = 0;
    let borders: number[] = split(equation, a, b);
    if (borders === undefined) {
        throw new Error("В заданном промежутке нет корней");
    }
    let xPrev: number = borders[0], xNow: number;
    console.log(borders);
    for (let i = a; i <= b; i++) {
        numbers.push(evaluate(der, {x: i}))
    }
    lambda = 1 / Math.max(...numbers);
    console.log(numbers,lambda)
    while (true) {
        funcValue = evaluate(equation, {x: xPrev})
        xNow = xPrev - lambda * funcValue;
        values.push([toFix(xNow), toFix(funcValue)]);
        if ((Math.abs((xNow - xPrev)) < accuracy) || (counter>100)) {
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
        counter++;
    }
}

export default simpleIter;