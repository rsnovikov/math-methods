import {IParams, ITypeOfTask} from "../calculatorTypes";
import {EEquationMethods, ESLAEMethods, ETypesOfEquation} from "../calcEnums";

export const equationParams: IParams = {
    accuracy: {
        id: "1",
        name: "accuracy",
        label: "Точность"
    },
    a: {
        id: "2",
        name: "a",
        label: "Левая граница a"
    },
    b: {
        id: "3",
        name: "b",
        label: "Правая граница b"
    }
};

export const typesOfTasks: ITypeOfTask[] = [
    {
        id: "1",
        title: "Решение уравнения",
        type: ETypesOfEquation.equation,
        methods: [
            {
                id: "1",
                title: "Метод половинного деления",
                type: EEquationMethods.halfDiv,
                params: equationParams
            },
            {
                id: "2",
                title: "Метод простых итераций",
                type: EEquationMethods.simpleIter,
                params: equationParams
            },
            {
                id: "3",
                title: "Метод Ньютона",
                type: EEquationMethods.newton,
                params: equationParams
            }
        ]
    },
    {
        id: "2",
        title: "Решение системы уравнений",
        type: ETypesOfEquation.SLAE,
        methods: [
            {
                id: "1",
                title: "Метод простых итераций",
                type: ESLAEMethods.simpleIter,
                params: {
                    accuracy: {
                        label: "Точность",
                        name: "accuracy",
                        id: "1"
                    }
                }
            },
            {
                id: "2",
                title: "Метод Зейделя",
                type: ESLAEMethods.zeidel,
                params: {
                    accuracy: {
                        label: "Точность",
                        name: "accuracy",
                        id: "2"
                    }
                }
            }
        ]
    }
];
