import {evaluate} from "mathjs";

export const split = (func:string,a:number,b:number) => {
    const div = (b-a)*5
    const length=(b-a)/div;
    let xPrev:number = a;
    for (let i=0;i<div;i++)
    {
        a+=length
        if (evaluate(func,{x:xPrev})*evaluate(func,{x:a})<0)
        {
            return [Math.floor(xPrev),Math.ceil(a)];
        }
        xPrev=a;
    }
}
