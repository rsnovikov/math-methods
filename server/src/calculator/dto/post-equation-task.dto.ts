export class PostTaskEquationDto {
    id: string;
    type: string;
    equation: string;
    methodId: string;
    methodType: string;
    params: {
        [key: string] : string;
    };
}