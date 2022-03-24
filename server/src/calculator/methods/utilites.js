"use strict";
exports.__esModule = true;
exports.split = void 0;
var mathjs_1 = require("mathjs");
var split = function (func, a, b) {
    var length = (b - a) / 10;
    var xPrev = a;
    for (var i = 0; i < 9; i++) {
        a += length;
        if ((0, mathjs_1.evaluate)(func, { x: xPrev }) * (0, mathjs_1.evaluate)(func, { x: a }) < 0) {
            return [xPrev, a];
        }
        xPrev = a;
    }
};
exports.split = split;
