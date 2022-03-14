import {IParams} from "../calculator";

export class PostEquationTaskBodyDto {
    id: string;
    equation: string;
    accuracy: number;
    methodId: string;
    params: IParams;
}