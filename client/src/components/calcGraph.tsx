import React, {FC, useEffect, useRef, useState} from "react";
import {evaluate} from 'mathjs';
import {Expression} from "../types/types";

interface ICalcGraph {
    expression: Expression;
}

const CalcGraph: FC<ICalcGraph> = ({expression}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<any>(null);
    const padding = 40;
    const maxValueY = 7;
    const maxValueX = 7;
    const height = 400;
    const width = 400;
    const dpiWidth = width * 2;
    const dpiHeight = height * 2;
    const scaleX = (dpiWidth - padding * 2) / (maxValueX * 2);
    const scaleY = (dpiHeight - padding * 2) / (maxValueY * 2);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        setCtx(ctx);
        init(ctx);
    }, []);


    const init = (ctx: any) => {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1.5;
        ctx.font = 'normal 30px Helvetica, sans-serif';
        // line x
        ctx.moveTo(padding, dpiHeight / 2);
        ctx.lineTo(dpiWidth - padding + 10, dpiHeight / 2);
        ctx.fillText("x", dpiWidth - padding + 10, dpiHeight / 2 + 25);
        ctx.lineTo(dpiWidth - padding - 10, dpiHeight / 2 - 7);
        ctx.moveTo(dpiWidth - padding + 10, dpiHeight / 2);
        ctx.lineTo(dpiWidth - padding - 10, dpiHeight / 2 + 7);

        //line y
        ctx.moveTo(dpiWidth / 2, dpiHeight - padding);
        ctx.lineTo(dpiWidth / 2, padding);
        ctx.fillText("y", dpiWidth / 2 + 15, padding);
        ctx.lineTo(dpiWidth / 2 - 7, padding + 20);
        ctx.moveTo(dpiWidth / 2, padding);
        ctx.lineTo(dpiWidth / 2 + 7, padding + 20);

        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.font = 'normal 20px Helvetica, sans-serif';
        ctx.strokeStyle = "grey"
        ctx.lineWidth = 0.5;
        for (let i = -maxValueX; i <= maxValueX; i += 1) {
            if (i < 0) {
                ctx.moveTo(dpiWidth + (i + 1) * scaleX - padding, padding);
                ctx.lineTo(dpiWidth + (i + 1) * scaleX - padding, dpiHeight - padding);
            } else if (i !== 0) {
                ctx.moveTo((i - 1) * scaleX + padding, padding);
                ctx.lineTo((i - 1) * scaleX + padding, dpiHeight - padding);
            }
            ctx.fillText(`${i}`, dpiWidth / 2 + i * scaleX, dpiHeight - 5);
        }

        for (let i = -maxValueY; i <= maxValueY; i++) {
            if (i < 0) {
                ctx.moveTo(padding, -(i + 1) * scaleY + padding);
                ctx.lineTo(dpiWidth - padding, -(i + 1) * scaleY + padding);
            } else if (i !== 0) {
                ctx.moveTo(padding, dpiHeight - (i - 1) * scaleY - padding);
                ctx.lineTo(dpiWidth - padding, dpiHeight - (i - 1) * scaleY - padding);
            }

            ctx.fillText(`${i}`, 5, dpiHeight / 2 - i * scaleY);

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
        ctx.strokeStyle = 'blue';
        ctx.moveTo(dpiWidth / 2 + prev.x * scaleX, dpiHeight / 2 - prev.y * scaleY);
        const points = [];
        for (let x = -maxValueX; x <= maxValueX; x += 0.01) {
            const y = evaluate(equation, {x});
            ctx.lineTo(dpiWidth / 2 + x * scaleX, dpiHeight / 2 - y * scaleY);

            if ((prev.y < 0 && y > 0) || (prev.y > 0 && y < 0)) {
                const pointX = (x + prev.x) / 2
                points.push(pointX);
            }
            prev.x = x;
            prev.y = y;
        }
        ctx.stroke();
        ctx.closePath();
        console.log(points);
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