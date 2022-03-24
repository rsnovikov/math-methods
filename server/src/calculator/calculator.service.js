"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculatorService = void 0;
var common_1 = require("@nestjs/common");
var methodHalfDivision_1 = require("./methods/methodHalfDivision");
var methodSimpleIt_1 = require("./methods/methodSimpleIt");
var data_1 = require("./data/data");
var CalculatorService = /** @class */ (function () {
    function CalculatorService() {
    }
    CalculatorService.prototype.getTypeOfEquation = function (type) {
        return data_1.typesOfTasks.find(function (typeOfTask) { return typeOfTask.type === type; });
    };
    CalculatorService.prototype.postEquationAnswer = function (postTaskEquationDto) {
        var equation = postTaskEquationDto.equation, params = postTaskEquationDto.params;
        var equationProps = {
            equation: equation,
            a: +params.a,
            b: +params.b,
            accuracy: +params.accuracy
        };
        switch (postTaskEquationDto.methodType) {
            case 'halfDiv':
                return (0, methodHalfDivision_1["default"])(equationProps);
            case 'simpleIter':
                return (0, methodSimpleIt_1["default"])(equationProps);
        }
    };
    CalculatorService.prototype.postSystemOfEquations = function () {
        return 'system';
    };
    CalculatorService.prototype.getTaskNav = function () {
        return data_1.typesOfTasks;
    };
    CalculatorService = __decorate([
        (0, common_1.Injectable)()
    ], CalculatorService);
    return CalculatorService;
}());
exports.CalculatorService = CalculatorService;
