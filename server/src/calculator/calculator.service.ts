import {Injectable} from '@nestjs/common';
import halfDiv from "./methods/methodHalfDivision";
import {PostEquationTaskBodyDto} from "./dto/post-equation-data.dto";

const NEW_TYPES_OF_TASKS = [
    {
        id: '1',
        title: 'Решение уравнения',
        type: 'equation',
        methods: [
            {
                id: '1',
                title: 'Метод половинного деления',
                params: [
                    {
                        name: 'a',
                        label: 'Левая граница a',
                    }, {
                        name: 'b',
                        label: 'Правая граница b',
                    },
                ]
            }
        ]
    },
    {
        id: '2',
        title: 'Решение системы уравнений',
        type: 'systemOfEquation',
        methods: [
            {
                id: '1',
                title: 'Метод половинного деления',
                params: [
                    {
                        name: 'a',
                        label: 'Левая граница a',
                    }, {
                        name: 'b',
                        label: 'Правая граница b',
                    },
                ]
            }
        ]
    },
]

@Injectable()
export class CalculatorService {
    getTypeOfEquation(id: string) {
        return NEW_TYPES_OF_TASKS.find(type => type.id === id);
    }

    getAnswer(postTaskBodyDto: PostEquationTaskBodyDto) {
        switch (postTaskBodyDto.id) {
            case '1':
                const {equation, accuracy, params} = postTaskBodyDto;
                return halfDiv(equation, Number(params[0].value), Number(params[1].value), accuracy);
        }
    }

    getTaskNav() {
        return NEW_TYPES_OF_TASKS;
    }
}
