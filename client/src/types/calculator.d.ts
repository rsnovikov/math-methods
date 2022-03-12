export interface ITypeOfEquation {
    id: string;
    title: string;
    params: IParams;
}

export interface IParams {
    [key: string]: IParam;
}

export interface IParam {
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
    type?: string;
}

export interface IRequestData {
    equation: string;
    accuracy: number;
    params: IParams;
    id: string;
}