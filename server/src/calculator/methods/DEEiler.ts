import {evaluate} from "mathjs";
import {toFix} from "./util";

const DEEiler = (data: string, x0: number, y0: number, delta: number,point:number, itCount = 100) =>{
    let counter:number = 0;
    while (counter < itCount) {
        y0 += delta * evaluate(data, {x: x0, y: y0});
        x0 += delta;
        if (toFix(x0, 3) === toFix(point, 3)) {
            return [x0, y0]
        }
        counter++
    }
}

export default DEEiler
