import {Get, Controller, Header, Post, Body} from '@nestjs/common';
import {CalculatorService} from "./calculator.service";
import {PostEquationTaskBodyDto} from "./dto/post-equation-data.dto";

@Controller('api/calculator')
export class CalculatorController {
    constructor(private readonly CalculatorService: CalculatorService) {}

    @Get()
    getNav() {
        return this.CalculatorService.getTaskNav();
    }

    @Get()
    get() {
        return this.CalculatorService.getTypeOfEquation('1')
    }

    @Post()
    postEqual(@Body() postTaskBodyDto: PostEquationTaskBodyDto) {
        return this.CalculatorService.getAnswer(postTaskBodyDto);
    }
}
