import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import SLAESimpleIter from "./calculator/methods/SLAESimpleIter";
import SLAEZeidel from "./calculator/methods/SLAEZeidel";
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(8888);
}

bootstrap();
// SLAESimpleIter(["-3.2x1+2x2-x3+5.4",
//     "x1+5x2-2x3-5"
//     , "x1+x2-3.5x3+0.5"],0.001)
// SLAEZeidel(["-3.2x1+2x2-x3+5.4",
//     "x1+5x2-2x3-5"
//     , "x1+x2-3.5x3+0.5"],0.001)
//
