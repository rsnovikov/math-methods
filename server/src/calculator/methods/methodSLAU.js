"use strict";
// let equations: string[] = ['10x1 + x2 - x3 - 11','10x2  + x1 - x3 - 10','-x1 + x2 + 10x3 - 10'];
// const newEquations = [...equations].map(equation => equation.replaceAll(' ', ''));
// const matrix: string[][] = newEquations.map(equation => {
//     const row: string[] = [];
//     const splittedEquation= equation.split('x');
//     const el1 = (splittedEquation[0].slice(0) === '-' || splittedEquation[0].slice(0) === '+') ? `${splittedEquation[0].slice(0)}1` : splittedEquation[0].slice(0);
//     row[+splittedEquation[1][0] - 1] = el1;
//     row[+splittedEquation[2][0] - 1] = el1;
//     row[+splittedEquation[3][0] - 1] = el1;
//     return row;
// });
//
// console.log(matrix)
exports.__esModule = true;
exports.slauComp = void 0;
var slauComp = function (matrix, epsilon) {
    for (var i = 0; i < matrix.length; i++) {
        var buffer = matrix[i][i];
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] /= buffer;
        }
    }
    var max = 0, sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length - 1; j++) {
            if (i !== j) {
                sum += Math.abs(matrix[i][j]);
            }
        }
        if (sum > max) {
            max = sum;
        }
        sum = 0;
    }
    var xPrev = [];
    var xNow = [];
    for (var i = 0; i < matrix.length; i++) {
        xPrev[i] = 0;
        xNow[i] = 0;
    }
    while (true) {
        for (var i = 0; i < xPrev.length; i++) {
            for (var j = 0; j < matrix[i].length - 1; j++) {
                if (i !== j) {
                    xNow[i] += -(xPrev[j] * matrix[i][j]);
                }
            }
            xNow[i] += matrix[i][matrix[i].length - 1];
        }
        if (epsilonCheck(xNow, xPrev, ((1 - max) / max) * epsilon)) {
            return xNow;
        }
        for (var i = 0; i < xNow.length; i++) {
            xPrev[i] = xNow[i];
            xNow[i] = 0;
        }
    }
};
exports.slauComp = slauComp;
var epsilonCheck = function (arr1, arr2, e) {
    var flag = false;
    for (var i = 0; i < arr1.length; i++) {
        if (Math.abs(arr1[i] - arr2[i]) < e) {
            flag = true;
        }
        else {
            flag = false;
            break;
        }
    }
    return flag;
};
