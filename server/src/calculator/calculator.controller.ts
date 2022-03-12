import {Get, Controller, Header, Post, Body} from '@nestjs/common';
import {CalculatorService} from "./calculator.service";
import {EqualBodyDto} from "./dto/get-method.dto";

@Controller('api/calculator')
export class CalculatorController {
    constructor(private readonly CalculatorService: CalculatorService) {
    }
    @Get()
    @Header('Access-Control-Allow-Origin', 'http://localhost:3000')
    get() {
        return this.CalculatorService.getTypesOfEquation()
    }
    @Post()
    postEqual(@Body() equalDataDto:EqualBodyDto) {
        return this.CalculatorService.getAnswer(equalDataDto);
    }
}
