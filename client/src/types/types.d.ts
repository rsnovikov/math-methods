export interface ITypeOfTask {
    id: string;
    type: string;
    title: string;
    methods: IMethod[];
}

export interface IMethod {
    id: string;
    title: string;
    type: string;
    params: IParams | {};
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
    methodId: string | null;
    methodType: string | null;
    params: {
        [key: string]: string
    };
    type: string;
}

export interface IParams {
    [key: string]: IParam;
}

export interface ITaskNavItem {
    id: string;
    title: string;
    type: string;
}