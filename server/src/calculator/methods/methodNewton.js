"use strict";
exports.__esModule = true;
exports.methodNewton = void 0;
var mathjs_1 = require("mathjs");
var utilites_1 = require("./utilites");
var methodNewton = function (func, a, b, e) {
    var der = (0, mathjs_1.derivative)(func, 'x').toString();
    var der2 = (0, mathjs_1.derivative)(der, 'x').toString();
    var numbersFirst = [];
    var numbersSecond = [];
    var borders = (0, utilites_1.split)(func, a, b);
    var xPrev = borders[0], xNow;
    var counter = 0;
    for (var i = a; i <= b; i++) {
        numbersFirst.push(Math.abs((0, mathjs_1.evaluate)(der, { x: i })));
        numbersSecond.push(Math.abs((0, mathjs_1.evaluate)(der2, { x: i })));
    }
    var max = Math.max.apply(Math, numbersSecond), min = Math.min.apply(Math, numbersFirst);
    while (true) {
        xNow = xPrev - (0, mathjs_1.evaluate)(func, { x: xPrev }) / (0, mathjs_1.evaluate)(der, { x: xPrev });
        counter++;
        if (Math.abs((xNow - xPrev)) < Math.sqrt(2 * e * min / max)) {
            return xNow;
        }
        xPrev = xNow;
    }
};
exports.methodNewton = methodNewton;
