export class GetMethodDto {
    id: string;
    title: string;
    params: IParams;
}

interface ITypesOfEquation {
    id: string;
    title: string;
    params: IParams;
}

interface IParams {
    [key: string]: IParam;
}

interface IParam {
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
}