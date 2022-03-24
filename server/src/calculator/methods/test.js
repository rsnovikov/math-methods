var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var equations = ['10x1 + x2 - x3 - 11', '10x2  + x1 - x3 - 10', '-x1 + x2 + 10x3 - 10'];
var newEquations = __spreadArray([], equations, true).map(function (equation) { return equation.replaceAll(' ', ''); });
var matrix = newEquations.map(function (equation) {
    var row = [];
    var splittedEquation = equation.split('x');
    var el1 = (splittedEquation[0].slice(0) === '-' || splittedEquation[0].slice(0) === '+') ? "".concat(splittedEquation[0].slice(0), "1") : splittedEquation[0].slice(0);
    row[+splittedEquation[1][0] - 1] = el1;
    row[+splittedEquation[2][0] - 1] = el1;
    row[+splittedEquation[3][0] - 1] = el1;
    return row;
});
console.log(matrix);
