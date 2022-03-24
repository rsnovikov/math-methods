import {evaluate} from 'mathjs';
import {IEquationMethodProps, IResult, IInterData} from "../calculatorTypes";
import {toFix} from "./util";

const equationHalfDiv = ({equation, a, b, accuracy}: IEquationMethodProps): IResult => {
    console.log(equation)
    const values: number[][] = [];
    let c: number;
    while ((b - a) / 2 > accuracy) {
        c = (a + b) / 2;
        const fb = evaluate(equation, {x: b});
        const fc = evaluate(equation, {x: c});
        if (fb * fc < 0) {
            a = c;
        } else {
            b = c;
        }
        values.push([toFix(c), toFix(a), toFix(b), toFix(fb), toFix(fc), toFix((b - a) / 2)]);
    }
    const interData: IInterData = {
        titles: ["c", "a", "b", "f(c)", "f(x)", "accuracy"],
        values
    }
    const answer = (a + b) / 2;
    const result: IResult = {
        answer,
        interData
    }
    return result;
}

export default equationHalfDiv;