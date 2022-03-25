import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import SLAESimpleIter from "./calculator/methods/SLAESimpleIter";
import equationNewton from "./calculator/methods/equationNewton";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(8888);
}

bootstrap();
let mtx:string[]=[
    '10x1+x2-x3-11',
    'x1+10x2-x3-10',
    '-x1+x2+10x3-10'
]
let func = 'x^3 - 2 * x ^ 2 - 4 * x + 5';

//console.log(SLAESimpleIter(mtx,0.001));
//console.log(equationNewton({equation:func,a:-10,b:0,accuracy:0.001}))