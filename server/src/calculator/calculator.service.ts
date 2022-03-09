import { Injectable } from '@nestjs/common';
import {ITypesOfEquation} from "./calculator";

const TYPES_OF_EQUATION: ITypesOfEquation[] = [
    {
        id: String(Date.now()),
        title: "Метод половинного деления",
        params: {
            a: {
                name: 'a',
                label: 'Левая граница a',
                value: ''
            },
            b: {
                name: 'b',
                label: 'Правая граница b',
                value: ''
            },
        }
    },
    {
        id: String(Math.floor(Math.random() * 10e10)),
        title: "Метод Ньютона",
        params: {
            c: {
                name: 'c',
                label: 'Левая граница c',
                value: ''
            },
            d: {
                name: 'b',
                label: 'Правая граница d',
                value: ''
            },
        }
    },
]

@Injectable()
export class CalculatorService {
    getTypesOfEquation() {
        return TYPES_OF_EQUATION;
    }
}
