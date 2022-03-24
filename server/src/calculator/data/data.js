"use strict";
exports.__esModule = true;
exports.typesOfTasks = exports.equationParams = void 0;
var calculatorTypes_1 = require("../calculatorTypes");
exports.equationParams = {
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
exports.typesOfTasks = [
    {
        id: '1',
        title: 'Решение уравнения',
        type: calculatorTypes_1.ETypesOfEquation.equation,
        methods: [
            {
                id: '1',
                title: 'Метод половинного деления',
                type: 'halfDiv',
                params: exports.equationParams
            },
            {
                id: '2',
                title: 'Метод простых итераций',
                type: 'simpleIter',
                params: exports.equationParams
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
];
