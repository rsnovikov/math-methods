import {evaluate} from 'mathjs'


const SNESimpleIter = (data: string[], x0: number, y0: number, e: number) => {
    let counter: number = 0;
    const xPrev: number[] = [x0, y0];
    const xNow: number[] = [];
    while (counter < 100) {
        data.forEach((item, index) => {
            xNow[index] = evaluate(item, {x: xPrev[0], y: xPrev[1]})
        })
       // console.log(xNow, xPrev);
        if (Math.abs(xPrev[0] - xNow[0]) < e && Math.abs(xPrev[1] - xNow[1]) < e) {
            console.log(counter);
            return xNow;
        }
        xPrev.forEach((item, index) => {
            xPrev[index] = xNow[index];
        });
        counter++
    }
}


export default SNESimpleIter;
