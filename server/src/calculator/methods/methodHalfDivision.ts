import {evaluate} from 'mathjs';
import {IEquationMethodProps} from "../calculatorTypes";
import {slauComp} from "./methodSLAU";

const halfDiv = ({equation, a, b, accuracy} : IEquationMethodProps) => {
    let c: number;
    while ((b - a) / 2 > accuracy) {
        c = (a + b) / 2;
        if (evaluate(equation, {x: b}) * evaluate(equation, {x: c}) < 0) {
            a = c;
        } else {
            b = c;
        }
       ;
    }
    return (a + b) / 2;
}
let mtx:number[][]=
    [[10,1,-1,11],
        [1,10,-1,10],
        [-1,1,10,10]];


console.log(slauComp(mtx,0.00001));

export default halfDiv;