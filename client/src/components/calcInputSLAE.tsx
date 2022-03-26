import React, {ChangeEvent, Dispatch, FC, SetStateAction, useEffect} from "react";
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

    const changeInputHandle = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const prevSLAE = [...SLAE];
        prevSLAE[index] = event.target.value;
        setSLAE(prevSLAE);
    }
    const clickPlusHandle = () => {
        setSLAE([...SLAE, ""]);
    }
    const clickMinusHandle = () => {
        if (SLAE.length > 2) setSLAE(SLAE.slice(0, -1));
    }
    return (
        <>
            <span>
                 <button className="btn btn-dark m-1" type="button" onClick={clickPlusHandle}>+1 уравнение</button>
                 <button className="btn btn-dark" type="button" onClick={clickMinusHandle}>-1 уравнение</button>
            </span>
            <div className="mb-3">
                {
                    Array.isArray(SLAE) && SLAE.map((value, index) => {
                        return (
                            <div key={index}>
                                <CalcInput
                                    type="text"
                                    id="equation"
                                    placeholder="f(x)"
                                    label="Уравнение"
                                    value={SLAE[index]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeInputHandle(event, index)}
                                />
                                = 0
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default CalcInputSLAE;