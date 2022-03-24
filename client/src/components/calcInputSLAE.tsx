import React, {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import CalcInput from "./UI/calcInput";
import {Expression} from "../types/types";

interface ICalcInputSLAE {
    SLAE: string[];
    setSLAE: Dispatch<SetStateAction<Expression>>;
}

const CalcInputSLAE: FC<ICalcInputSLAE> = ({setSLAE, SLAE}) => {

    useEffect(() => {
        setSLAE(["", ""]);
    }, [])

    const changeInputHandle = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const prevSLAE = [...SLAE];
        prevSLAE[index] = event.target.value;
        setSLAE(prevSLAE);
        console.log(SLAE)
    }
    const clickPlusHandle = () => {
        setSLAE([...SLAE, ""])
    }
    const clickMinusHandle = () => {
        console.log(SLAE.slice(0, -1))
        setSLAE(SLAE.slice(0, -1));
    }
    return <>
        {
            Array.isArray(SLAE) && SLAE.map((value, index) => {
                return (
                    <div>
                        <CalcInput
                            type="text"
                            id="equation"
                            placeholder="f(x)"
                            value={SLAE[index]}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeInputHandle(event, index)}
                        />
                        {index === SLAE.length - 1 && <>
                            <button className="btn" type="button" onClick={clickPlusHandle}>+</button>
                            <button className="btn" type="button" onClick={clickMinusHandle}>-</button>
                        </>
                        }

                    </div>
                )
            })
        }
    </>
}

export default CalcInputSLAE;