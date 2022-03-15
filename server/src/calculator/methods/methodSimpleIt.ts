import {evaluate,derivative} from 'mathjs';

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


const split = (func:string,a:number,b:number) => {
    const length=(b-a)/10;
    let xPrev:number = a;
    for (let i=0;i<9;i++)
    {
        a+=length
        if (evaluate(func,{x:xPrev})*evaluate(func,{x:a})<0)
        {
            return [xPrev,a];
        }
        xPrev=a;
    }
}

console.log(SimpleIt('exp(x)-10',-10,10,0.0001));