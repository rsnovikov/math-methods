"use strict";
exports.__esModule = true;
var mathjs_1 = require("mathjs");
var halfDiv = function (_a) {
    var equation = _a.equation, a = _a.a, b = _a.b, accuracy = _a.accuracy;
    var c;
    while ((b - a) / 2 > accuracy) {
        c = (a + b) / 2;
        if ((0, mathjs_1.evaluate)(equation, { x: b }) * (0, mathjs_1.evaluate)(equation, { x: c }) < 0) {
            a = c;
        }
        else {
            b = c;
        }
    }
    return (a + b) / 2;
};
exports["default"] = halfDiv;
