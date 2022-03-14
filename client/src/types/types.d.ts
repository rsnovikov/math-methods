export interface ITypeOfTask {
    id: string;
    type: string;
    title: string;
    methods: IMethod[];
}

export interface IMethod {
    id: string;
    title: string;
    params: IParam[];
}

export interface IParam {
    id: string;
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    type?: string;
}

export interface IEquationTaskData {
    id: string | null;
    equation: string;
    accuracy: number;
    methodId: string | null;
    params: IParam[];
}

export interface ITaskNavItem {
    id: string;
    title: string;
    type: string;
}