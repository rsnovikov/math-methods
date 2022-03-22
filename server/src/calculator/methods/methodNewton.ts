import {evaluate,derivative} from 'mathjs';
import {split} from './utilites';

export const methodNewton = (func:string,a:number,b:number, e:number) => {
    const der:string = derivative(func,'x').toString();
    const der2:string = derivative(der,'x').toString();
    const numbersFirst:number[] = [];
    const numbersSecond:number[]=[]
    let borders:number[] = split(func,a,b);
    let xPrev:number = borders[0],xNow:number;
    let counter:number=0;
    for (let i=a;i<=b;i++){
        numbersFirst.push(Math.abs(evaluate(der,{x:i})));
        numbersSecond.push(Math.abs(evaluate(der2,{x:i})));
    }
    let max=Math.max(...numbersSecond), min=Math.min(...numbersFirst);
    while (true){
        xNow=xPrev-evaluate(func,{x:xPrev})/evaluate(der,{x:xPrev});
        counter++
        if (Math.abs((xNow - xPrev)) < Math.sqrt(2*e*min/max))
        {
            return xNow;
        }
        xPrev=xNow;
    }
}

