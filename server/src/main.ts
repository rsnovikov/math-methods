import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {add,dotMultiply} from "mathjs"
import SLAESimpleIter from "./calculator/methods/SLAESimpleIter";
import SLAEZeidel from "./calculator/methods/SLAEZeidel";
import Regress from "./calculator/methods/Regress";
import SNENewton from "./calculator/methods/SNENewton";
import SNESimpleIter from "./calculator/methods/SNESimpleIter";
import DERungeKutt from "./calculator/methods/DERungeKutt";
import DEEiler from "./calculator/methods/DEEiler";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(8888);
}

bootstrap();

// console.log(Regress(['1 2 3 4 5 6 7 8 9 10', '5.1, 6.9,9.1,10.8,13.2,14.9,17.2,18.8,21.2,22.9']));

console.log(DERungeKutt('1-x^2+x*y*2', 0, 1, 0.1, 1));;
console.log(DEEiler('1-x^2+x*y*2', 0, 1, 0.1, 1));;
//

// console.log(SNENewton(["x^2+y^2-3","y-exp(x*y)"],1,2,0.0001))
// console.log(SNENewton(["2y-cos(x+1)","x+sin(y)+0.4"],-0.9,0.5,0.001));


// console.log(SNENewton(["sin(x-0.6)-y-1.6","3x-cos(y)-0.9"],0,-3,0.0001));
// console.log(SNESimpleIter(["(0.9+cos(y))/3","sin(x-0.6)-1.6"],0,-3,0.0001))


// const matrixVal = [[1,2,3,4,5,6,7,8,9,10], [5.1,6.9,9.1,10.8,13.2,14.9,17.2,18.8,21.2,22.9]]
// const matrixRom = [[1,2,3,4,5,6,7,8,9,10],[178,182,190,199,200,213,220,231,235,242]]
// for (let i=0;i<2;i++){
//     console.log(Regress(matrixVal,i));
//     console.log(Regress(matrixRom,i));
// }



// SLAESimpleIter(["-3.2x1+2x2-x3+5.4",
//     "x1+5x2-2x3-5"
//     , "x1+x2-3.5x3+0.5"],0.001)
// SLAEZeidel(["-3.2x1+2x2-x3+5.4",
//     "x1+5x2-2x3-5"
//     , "x1+x2-3.5x3+0.5"],0.001)
//
