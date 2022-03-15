export interface ITypeOfTask {
    id: string;
    type: string;
    title: string;
    methods: IMethod[];
}

export interface IMethod {
    id: string;
    type: string;
    title: string;
    params: IParams;
}

export interface IParams {
    [key: string]: IParam;
}

export interface IParam {
    id: string;
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    type?: string;
}

export interface ITaskNavItem {
    id: string;
    title: string;
    type: string;
}

export enum ETypesOfEquation {
    equation = 'equation',
    systemOfEquation = 'systemOfEquation'
}

export interface IEquationMethodProps {
    equation: string;
    a: number;
    b: number;
    accuracy: number;
}