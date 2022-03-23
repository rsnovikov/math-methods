import {Injectable} from '@nestjs/common';
import halfDiv from "./methods/methodHalfDivision";
import {PostTaskEquationDto} from "./dto/post-equation-task.dto";
import {IEquationMethodProps} from "./calculatorTypes";
import simpleIt from "./methods/methodSimpleIt";
import {typesOfTasks} from "./data/data";


@Injectable()
export class CalculatorService {
    getTypeOfEquation(type: string) {
        return typesOfTasks.find(typeOfTask => typeOfTask.type === type);
    }

    postEquationAnswer(postTaskEquationDto: PostTaskEquationDto) {
        const {equation, params} = postTaskEquationDto;
        const equationProps: IEquationMethodProps = {
            equation,
            a: +params.a,
            b: +params.b,
            accuracy: +params.accuracy
        };
        switch (postTaskEquationDto.methodType) {
            case 'halfDiv':
                return halfDiv(equationProps);
            case 'simpleIter':
                return simpleIt(equationProps);
        }
    }

    postSystemOfEquations() {
        return 'system';
    }

    getTaskNav() {
        return typesOfTasks;
    }
}
