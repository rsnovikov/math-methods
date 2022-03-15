import {Get, Controller, Param, Post, Body} from '@nestjs/common';
import {CalculatorService} from "./calculator.service";
import {PostTaskEquationDto} from "./dto/post-equation-task.dto";
import {ETypesOfEquation} from "./calculatorTypes";

@Controller('api/calculator')
export class CalculatorController {
    constructor(private readonly CalculatorService: CalculatorService) {
    }

    @Get()
    getNav() {
        return this.CalculatorService.getTaskNav();
    }

    @Get('/:type')
    get(@Param() {type}) {
        return this.CalculatorService.getTypeOfEquation(type)
    }

    @Post()
    postEquation(@Body() postTaskEquationDto: PostTaskEquationDto) {
        switch (postTaskEquationDto.type) {
            case ETypesOfEquation.equation:
                return this.CalculatorService.postEquationAnswer(postTaskEquationDto);
            case ETypesOfEquation.systemOfEquation:
                return this.CalculatorService.postSystemOfEquations();
        }
    }
}
