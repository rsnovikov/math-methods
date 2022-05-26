import { Injectable } from '@nestjs/common';
import { PostTaskEquationDto, PostTaskSLAEDto } from './dto/post-task.dto';
import { IEquationMethodProps, IResult } from './calculatorTypes';
import { typesOfTasks } from './data/data';
import {EDEMethods, EEquationMethods, ESLAEMethods, ESNEMethods} from './calcEnums';
import equationSimpleIter from './methods/equationSimpleIter';
import equationNewton from './methods/equationNewton';
import SLAESimpleIter from './methods/SLAESimpleIter';
import equationHalfDiv from './methods/equationHalfDiv';
import SLAEZeidel from './methods/SLAEZeidel';
import SNESimpleIter from "./methods/SNESimpleIter";
import SNENewton from "./methods/SNENewton";
import DEEiler from "./methods/DEEiler";
import DERungeKutt from "./methods/DERungeKutt";
import Regress from "./methods/Regress";

@Injectable()
export class CalculatorService {
  getTypeOfEquation(type: string) {
    return typesOfTasks.find((typeOfTask) => typeOfTask.type === type);
  }

  postEquationAnswer(postTaskEquationDto: PostTaskEquationDto): IResult {
    const { methodType, expression, params } = postTaskEquationDto;
    const equationProps: IEquationMethodProps = {
      equation: expression,
      a: +params.a,
      b: +params.b,
      accuracy: +params.accuracy,
    };
    switch (methodType) {
      case EEquationMethods.halfDiv:
        return equationHalfDiv(equationProps);
      case EEquationMethods.simpleIter:
        return equationSimpleIter(equationProps);
      case EEquationMethods.newton:
        return equationNewton(equationProps);
    }
  }

  postSLAEAnswer(postTaskSLAEDto: PostTaskSLAEDto): IResult {
    const { expression, methodType, params } = postTaskSLAEDto;
    switch (methodType) {
      case ESLAEMethods.simpleIter:
        return SLAESimpleIter(expression, +params.accuracy);
      case ESLAEMethods.zeidel:
        return SLAEZeidel(expression, +params.accuracy);
    }
  }

  postSNEAnswer(postTaskSNEDto: any) : { answer } {
    console.log(postTaskSNEDto);
    const { expression, methodType, params } = postTaskSNEDto;
    let answer;
    switch (methodType) {
      case ESNEMethods.simpleIter:
        answer = SNESimpleIter(expression, +params.x0, +params.y0, +params.accuracy);
        break;
      case ESNEMethods.newton:
        answer = SNENewton(expression, +params.x0, +params.y0, +params.accuracy);
    }
    console.log(answer);
    return {
      answer
    };
  }

  postDEAnswer(postTaskDEDto: any) : { answer } {
    const { expression, methodType, params } = postTaskDEDto;
    console.log(expression);
    let answer;
    switch (methodType) {
      case EDEMethods.eiler:
        answer = DEEiler(expression, +params.x0, +params.y0, +params.delta, +params.point);
        break;
      case EDEMethods.rudgeKutt:
        answer = DERungeKutt(expression, +params.x0, +params.y0, +params.delta, +params.point);
    }
    console.log(answer);
    return {
      answer
    };
  }
  postRegressAnswer(postTaskRegressDto: any) : { answer } {
    const {params : {xi, yi}} = postTaskRegressDto;
    console.log(postTaskRegressDto);
    const answer = Regress([xi, yi]);
    return {
      answer
    };
  }
  getTaskNav() {
    return typesOfTasks;
  }
}
