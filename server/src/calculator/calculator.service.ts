import {Injectable} from "@nestjs/common";
import {PostTaskEquationDto, PostTaskSLAEDto} from "./dto/post-task.dto";
import {IEquationMethodProps, IResult} from "./calculatorTypes";
import {typesOfTasks} from "./data/data";
import {EEquationMethods, ESLAEMethods} from "./calcEnums";
import equationSimpleIter from "./methods/equationSimpleIter";
import equationNewton from "./methods/equationNewton";
import SLAESimpleIter from "./methods/SLAESimpleIter";
import equationHalfDiv from "./methods/equationHalfDiv";


@Injectable()
export class CalculatorService {
    getTypeOfEquation(type: string) {
        return typesOfTasks.find(typeOfTask => typeOfTask.type === type);
    }

    postEquationAnswer(postTaskEquationDto: PostTaskEquationDto): IResult {
        const {methodType, expression, params} = postTaskEquationDto;
        const equationProps: IEquationMethodProps = {
            equation: expression,
            a: +params.a,
            b: +params.b,
            accuracy: +params.accuracy
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
        const {expression, methodType, params} = postTaskSLAEDto;
        switch (methodType) {
            case ESLAEMethods.simpleIter:
                return SLAESimpleIter(expression, +params.accuracy);
        }
    }

    getTaskNav() {
        return typesOfTasks;
    }
}
