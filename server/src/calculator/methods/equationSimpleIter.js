"use strict";
exports.__esModule = true;
var mathjs_1 = require("mathjs");
var utilites_1 = require("./utilites");
var simpleIt = function (_a) {
    var equation = _a.equation, a = _a.a, b = _a.b, accuracy = _a.accuracy;
    var der = (0, mathjs_1.derivative)(equation, 'x').toString();
    var numbers = [];
    var lambda;
    var borders = (0, utilites_1.split)(equation, a, b);
    var xPrev = borders[0], xNow;
    var counter = 0;
    for (var i = a; i <= b; i++) {
        numbers.push((0, mathjs_1.evaluate)(der, { x: i }));
    }
    lambda = 1 / Math.max.apply(Math, numbers);
    while (true) {
        xNow = xPrev - lambda * (0, mathjs_1.evaluate)(equation, { x: xPrev });
        counter++;
        if (Math.abs((xNow - xPrev)) < accuracy) {
            console.log(counter);
            return xNow;
        }
        xPrev = xNow;
    }
};
exports["default"] = simpleIt;
