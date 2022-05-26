import {evaluate} from "mathjs";
import {toFix} from "./util";

const DERungeKutt = (data: string, x0: number, y0: number, delta: number, point: number, itCount = 100) => {
    const k: number[] = [];
    const xy:number[][] = [[],[]]
    const answer = {
        x0:0,
        y0:0
    }
    let counter: number = 0;
    while (counter < itCount) {
        k[0] = delta*evaluate(data, {x: x0, y: y0})
        k[1] = delta*evaluate(data, {x: x0 + delta / 2, y: y0 + k[0] / 2})
        k[2] = delta*evaluate(data, {x: x0 + delta / 2, y: y0 + k[1] / 2})
        k[3] = delta*evaluate(data, {x: x0 + delta, y: y0 + k[2]})
        // console.log(k)
        y0 = y0 + (k[0] + k[1] * 2 + k[2] * 2 + k[3])/6
        x0 += delta;
        xy[0].push(x0);
        xy[1].push(y0);
        if (toFix(x0,3) === toFix(point,3))
        {
            answer.x0=x0;
            answer.y0=y0;
        }
        counter++
    }
    answer['xy'] = xy;
    return  answer;

}

export default DERungeKutt
