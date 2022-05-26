import {IResult} from "../calculatorTypes";
import {matrixDiviation} from "./util";
import {parseStringArrToMatrix, toFix} from "./util";
import {epsilonCheck} from "./util";
import {aFind} from "./util";

const SLAEZeidel = (SLAE: string[], epsilon: number): IResult => {
    const matrix: number[][] = matrixDiviation(parseStringArrToMatrix(SLAE));
    let counter = 0;
    let max: number = aFind(matrix);
    if (max >= 1) {
        throw new Error("Нет диагонального преобладания")
    }

    let xPrev: number[] = [];
    let xNow: number[] = [],
        titles: string[] = [],
        values: number[][] = [],
        xBuff: number[] = [];
    matrix.forEach((item, index) => {
        xPrev[index] = 0;
        xNow[index] = 0;
    });
    for (let i = 0; i < matrix[0].length - 1; i++) {
        titles[i] = `x${i + 1}`;
    }
    while (counter <= 100) {
        counter++
        for (let i = 0; i < matrix.length; i++) {
            let buffer: number = 0;
            for (let j = 0; j < matrix[i].length - 1; j++) {
                if (i !== j) {
                    buffer -= matrix[i][j] * xNow[j];
                }
            }
            xNow[i] = buffer - (matrix[i][matrix[i].length - 1])
            xBuff[i] = toFix(xNow[i]);
        }
        // console.log(xNow);
        values.push(xBuff);
        if (epsilonCheck(xNow, xPrev, epsilon)) {
            const result: IResult = {
                interData: {
                    titles,
                    values
                },
                answer: xNow
            };
            //console.log(counter)
            return result;
        }
        xPrev.forEach((item, index) => xPrev[index] = xNow[index]);
    }
}

export default SLAEZeidel
