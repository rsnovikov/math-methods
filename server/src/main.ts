import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import SLAESimpleIter from "./calculator/methods/SLAESimpleIter";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(8888);
}

bootstrap();
let mtx: string[] = [
    '10x1 + x2 −x3 - 11',
    'x1 + 10x2 −x3 - 10',
    '-x1 + x2 −10x3 - 10'
];
console.log(SLAESimpleIter(mtx, 0.001));