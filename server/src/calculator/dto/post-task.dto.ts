export class PostTaskDto {
    id: string;
    type: string;
    expression: any;
    methodId: string;
    methodType: string;
    params: {
        [key: string]: string;
    };
}

export class PostTaskEquationDto extends PostTaskDto {
    expression: string;
}

export class PostTaskSLAEDto extends PostTaskDto {
    expression: string[];
}