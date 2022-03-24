"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CalculatorController = void 0;
var common_1 = require("@nestjs/common");
var calculatorTypes_1 = require("./calculatorTypes");
var CalculatorController = /** @class */ (function () {
    function CalculatorController(CalculatorService) {
        this.CalculatorService = CalculatorService;
    }
    CalculatorController.prototype.getNav = function () {
        return this.CalculatorService.getTaskNav();
    };
    CalculatorController.prototype.get = function (_a) {
        var type = _a.type;
        return this.CalculatorService.getTypeOfEquation(type);
    };
    CalculatorController.prototype.postEquation = function (postTaskEquationDto) {
        switch (postTaskEquationDto.type) {
            case calculatorTypes_1.ETypesOfEquation.equation:
                return this.CalculatorService.postEquationAnswer(postTaskEquationDto);
            case calculatorTypes_1.ETypesOfEquation.systemOfEquation:
                return this.CalculatorService.postSystemOfEquations();
        }
    };
    __decorate([
        (0, common_1.Get)()
    ], CalculatorController.prototype, "getNav");
    __decorate([
        (0, common_1.Get)('/:type'),
        __param(0, (0, common_1.Param)())
    ], CalculatorController.prototype, "get");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], CalculatorController.prototype, "postEquation");
    CalculatorController = __decorate([
        (0, common_1.Controller)('api/calculator')
    ], CalculatorController);
    return CalculatorController;
}());
exports.CalculatorController = CalculatorController;
