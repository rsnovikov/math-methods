import {parseStringArrToMatrix,toFix} from "./util";
import {IResult} from "../calculatorTypes";

const SLAESimpleIter = (SLAE: string[], epsilon: number): IResult => {
    const matrix: number[][] = parseStringArrToMatrix(SLAE);
    for (let i = 0; i < matrix.length; i++) {
        let buffer = matrix[i][i];
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] /= buffer;
        }
    }
    let max = 0, sum = 0,
        titles:string[]=[],
        values:number[][]=[],
        xBuff:number[] = [];
    for (let i=0;i<matrix[0].length-1;i++){
        titles[i]=`x${i+1}`;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (i !== j) {
                sum += Math.abs(matrix[i][j]);
            }
        }
        if (sum > max) {
            max = sum;
        }
        sum = 0;
    }

    if (max > 1) throw new Error ('Система не сходится')

    let xPrev: number[] = [];
    let xNow: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
        xPrev[i] = 0;
        xNow[i] = 0;
    }
    while (true) {
        for (let i = 0; i < xPrev.length; i++) {
            for (let j = 0; j < matrix[i].length - 1; j++) {
                if (i !== j) {
                    xNow[i] += -(xPrev[j] * matrix[i][j]);

                }
            }
            xNow[i] -= matrix[i][matrix[i].length - 1];
            xBuff[i]=toFix(xNow[i]);
        }
        values.push(xBuff);
        if (epsilonCheck(xNow, xPrev, ((1 - max) / max) * epsilon)) {
            const result: IResult = {
                interData: {
                    titles,
                    values
                },
                answer: xNow
            };
            return result;
        }
        for (let i = 0; i < xNow.length; i++) {
            xPrev[i] = xNow[i];
            xNow[i] = 0;
        }
    }
}

const epsilonCheck = (arr1: number[], arr2: number[], e: number) => {
    let flag: boolean = false;
    for (let i = 0; i < arr1.length; i++) {
        if (Math.abs(arr1[i] - arr2[i]) < e) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }
    return flag;
}

export default SLAESimpleIter;