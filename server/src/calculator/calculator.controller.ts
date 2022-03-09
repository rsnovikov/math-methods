import {Get, Controller, Header} from '@nestjs/common';
import {CalculatorService} from "./calculator.service";

@Controller('api/calculator')
export class CalculatorController {
    constructor(private readonly CalculatorService: CalculatorService) {
    }
    @Get()
    @Header('Access-Control-Allow-Origin', 'http://localhost:3000')
    get() {
        return this.CalculatorService.getTypesOfEquation()
    }
}
