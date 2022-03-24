import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import simpleIt from './calculator/methods/methodSimpleIt';
import {split} from "./calculator/methods/utilites";
import {evaluate,derivative} from 'mathjs';
import {methodNewton} from "./calculator/methods/methodNewton";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(8888);
}

bootstrap();

let func:string='x^3 - 2 * x ^ 2 - 4 * x + 5',
    a:number=-10,
    b:number=0,
    e:number=0.0001;

console.log(methodNewton({equation:func,a,b,accuracy:e}));
