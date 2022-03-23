import {evaluate} from "mathjs";

export const split = (func:string,a:number,b:number) => {
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
