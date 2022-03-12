import {IParams} from "../calculator";

export class EqualBodyDto {
    equation: string;
    accuracy: number;
    params: IParams;
    id: string;
}