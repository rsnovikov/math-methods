import {evaluate} from 'mathjs';
import {IEquationMethodProps} from "../calculatorTypes";

const halfDiv = ({equation, a, b, accuracy} : IEquationMethodProps) => {
    let c: number;
    while ((b - a) / 2 > accuracy) {
        c = (a + b) / 2;
        if (evaluate(equation, {x: b}) * evaluate(equation, {x: c}) < 0) {
            a = c;
        } else {
            b = c;
        }
    }
    return (a + b) / 2;
}

export default halfDiv;