import {ETypesOfEquation, IParams, ITypeOfTask} from "../calculatorTypes";

export const equationParams: IParams = {
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

export const typesOfTasks: ITypeOfTask[] = [
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
    // {
    //     id: '2',
    //     title: 'Решение системы уравнений',
    //     type: ETypesOfEquation.systemOfEquation,
    //     methods: [
    //         {
    //             id: '1',
    //             title: 'Метод Гауса',
    //             type: 'halfDiv',
    //             params: equationParams
    //         },
    //         {
    //             id: '2',
    //             title: 'Метод простых итераций',
    //             type: 'simpleIter',
    //             params: equationParams
    //         }
    //     ]
    // }
]