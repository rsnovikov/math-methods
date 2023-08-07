import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { PostTaskEquationDto, PostTaskSLAEDto } from './dto/post-task.dto';
import { ETypesOfEquation } from './calcEnums';

@Controller('api/calculator')
export class CalculatorController {
  constructor(private readonly CalculatorService: CalculatorService) {}

  @Get()
  getNav() {
    return this.CalculatorService.getTaskNav();
  }

  @Get('/:type')
  get(@Param() { type }) {
    return this.CalculatorService.getTypeOfEquation(type);
  }

  @Post(`/${ETypesOfEquation.equation}`)
  postEquation(@Body() postTaskEquationDto: PostTaskEquationDto) {
    return this.CalculatorService.postEquationAnswer(postTaskEquationDto);
  }

  @Post(`/${ETypesOfEquation.SLAE}`)
  postSystemOfEquations(@Body() postTaskSLAEDto: PostTaskSLAEDto) {
    return this.CalculatorService.postSLAEAnswer(postTaskSLAEDto);
  }

  @Post(`/${ETypesOfEquation.SNE}`)
  postSNE(@Body() postTaskSNEDto: any) {
    return this.CalculatorService.postSNEAnswer(postTaskSNEDto);
  }

  @Post(`/${ETypesOfEquation.DE}`)
  postDE(@Body() postTaskDEDto: any) {
    return this.CalculatorService.postDEAnswer(postTaskDEDto);
  }

  @Post(`/${ETypesOfEquation.regress}`)
  postRegress(@Body() postTaskRegressDto: any) {
    return this.CalculatorService.postRegressAnswer(postTaskRegressDto);
  }
}
