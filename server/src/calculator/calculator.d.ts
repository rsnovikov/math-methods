export interface ITypesOfEquation {
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
}

export interface IMethod {
    id: string;
    title: string;
    params: IParam[];
}
