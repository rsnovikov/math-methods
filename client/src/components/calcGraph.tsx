import React, {FC, useEffect, useRef, useState} from "react";
import {evaluate} from 'mathjs';
import {Expression} from "../types/types";

interface ICalcGraph {
    expression: Expression;
}

const CalcGraph: FC<ICalcGraph> = ({expression}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<any>(null);

    const maxValueY = 7;
    const maxValueX = 7;
    const height = 400;
    const width = 400;
    const dpiWidth = width * 2;
    const dpiHeight = height * 2;
    const scaleX = dpiWidth / (maxValueX * 2);
    const scaleY = dpiHeight / (maxValueY * 2);

    const padding = 20;

    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        setCtx(ctx);
        init(ctx)
    }, []);


    const init = (ctx: any) => {
        ctx.beginPath();
        ctx.moveTo(0, dpiHeight / 2);
        ctx.lineTo(dpiWidth, dpiHeight / 2);
        ctx.moveTo(dpiWidth / 2, 0);
        ctx.lineTo(dpiWidth / 2, dpiHeight);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.font = 'normal 25px Helvetica, sans-serif';

        for (let i = -maxValueX; i <= maxValueX; i += 1) {
            ctx.moveTo(i * scaleX, 0);
            ctx.lineTo(i * scaleX, dpiHeight);
            ctx.fillText(`${i}`, dpiWidth / 2 + i * scaleX, dpiHeight / 2);
        }
        ctx.stroke()
        ctx.closePath();

        ctx.beginPath();
        ctx.font = 'normal 25px Helvetica, sans-serif';
        for (let i = -maxValueY; i <= maxValueY; i += 1) {
            ctx.moveTo(0, dpiHeight - i * scaleY);
            ctx.lineTo(dpiWidth, dpiHeight - i * scaleY);
            if (i !== 0) {
                ctx.fillText(`${i}`, dpiWidth / 2, dpiHeight / 2 - i * scaleY);
            }
        }
        ctx.stroke();
        ctx.closePath();
    }

    const drawGraph = (equation: string) => {
        const prev = {
            x: -maxValueX,
            y: evaluate(equation, {x: -maxValueX})
        }

        ctx.beginPath();
        ctx.strokeStyle = 'blue'
        ctx.moveTo(dpiWidth / 2 + prev.x * scaleX, dpiHeight / 2 - prev.y * scaleY);
        for (let x = -maxValueX; x <= maxValueX; x += 0.01) {
            const y = evaluate(equation, {x});
            ctx.lineTo(dpiWidth / 2 + x * scaleX, dpiHeight / 2 - y * scaleY);
            if ((prev.y < 0 && y > 0) || (prev.y > 0 && y < 0)) {
                console.log('x', x);
                console.log('prev x', prev.x)
            }
            prev.x = x;
            prev.y = y;
        }
        ctx.stroke();
        ctx.closePath();
    }

    const clickHandler = () => {
        if (typeof expression === "string") {
            ctx.clearRect(0, 0, dpiWidth, dpiHeight);
            init(ctx);
            drawGraph(expression);
        } else if (Array.isArray(expression)) {

            ctx.clearRect(0, 0, dpiWidth, dpiHeight);
            init(ctx);
            expression.forEach(exp => drawGraph(exp));
        }
    }

    return (
        <div style={{display: "flex", justifyContent: "center", marginBottom: "15px"}}>
            <div>
                <canvas
                    style={{
                        border: '1px solid black',
                        height: `${height}px`,
                        width: `${width}px`,
                        marginBottom: "15px",
                        display: "block"
                    }}
                    ref={canvasRef}
                    width={dpiWidth}
                    height={dpiHeight}
                />
                <button className="btn btn-dark" type="button" onClick={clickHandler}>Нарисовать график</button>
            </div>
        </div>
    );
}

export default CalcGraph;