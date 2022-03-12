import {Get, Controller, Header, Post, Body} from '@nestjs/common';
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
    // @Post(@Body() postEquationDataDto: )
    // post() {
    //
    //
    // }
}
