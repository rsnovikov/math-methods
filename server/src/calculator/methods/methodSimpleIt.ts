import {evaluate,derivative} from 'mathjs';
import {split} from './utilites';

const SimpleIt = (func:string,a:number,b:number, e:number) => {
    const der:string = derivative(func,'x').toString();
    const numbers:number[] = [];
    let lambda:number;
    let borders:number[] = split(func,a,b);
    let xPrev:number = borders[0],xNow:number;
    let counter:number=0;
    for (let i=a;i<=b;i++){
        numbers.push(evaluate(der,{x:i}))
    }
    lambda=1/Math.max(...numbers);

    while (true){
        xNow=xPrev-lambda*evaluate(func,{x:xPrev});
        counter++
        if (Math.abs((xNow - xPrev)) < e)
        {
            console.log(counter)
            return xNow;
        }

        xPrev=xNow;
    }

}




console.log(SimpleIt('exp(x)-10',-10,10,0.0001));