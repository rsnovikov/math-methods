import {Injectable} from '@nestjs/common';
import halfDiv from "./methods/methodHalfDivision";
import {PostTaskEquationDto} from "./dto/post-equation-task.dto";
import {ETypesOfEquation, IEquationMethodProps, IParams, ITypeOfTask} from "./calculatorTypes";

const equationParams: IParams = {
    accuracy: {
        id: '1',
        name: 'accuracy',
        label: 'Точность'
    },
    a: {
        id: '2',
        name: 'a',
        label: 'Левая граница a'
    },
    b: {
        id: '3',
        name: 'b',
        label: 'Правая граница b'
    }
};

const NEW_TYPES_OF_TASKS: ITypeOfTask[] = [
    {
        id: '1',
        title: 'Решение уравнения',
        type: ETypesOfEquation.equation,
        methods: [
            {
                id: '1',
                title: 'Метод половинного деления',
                type: 'halfDiv',
                params: equationParams
            },
            {
                id: '2',
                title: 'Метод простых итераций',
                type: 'simpleIter',
                params: equationParams
            }
        ]
    },
    {
        id: '2',
        title: 'Решение системы уравнений',
        type: ETypesOfEquation.systemOfEquation,
        methods: [
            {
                id: '1',
                title: 'Метод Гауса',
                type: 'halfDiv',
                params: equationParams
            },
            {
                id: '2',
                title: 'Метод простых итераций',
                type: 'simpleIter',
                params: equationParams
            }
        ]
    }
]


@Injectable()
export class CalculatorService {
    getTypeOfEquation(type: string) {
        return NEW_TYPES_OF_TASKS.find(typeOfTask => typeOfTask.type === type);
    }

    postEquationAnswer(postTaskEquationDto: PostTaskEquationDto) {
        const {equation, params} = postTaskEquationDto;
        const equationProps: IEquationMethodProps = {
            equation,
            a: +params.a,
            b: +params.b,
            accuracy: +params.accuracy
        }
        switch (postTaskEquationDto.methodType) {
            case 'halfDiv':
                return halfDiv(equationProps);
            case 'simpleIter':
                return 'x^2';
        }
    }

    postSystemOfEquations() {
        return 'system';
    }

    getTaskNav() {
        return NEW_TYPES_OF_TASKS;
    }
}
