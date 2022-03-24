import React, {Dispatch, FC, SetStateAction} from "react";
import CalcInput from "./UI/calcInput";
import {Expression} from "../types/types";
import {ETypesOfEquation} from "../enums/enums";
import CalcInputEquation from "./calcInputEquation";
import CalcInputSLAE from "./calcInputSLAE";

interface ICalcExpression {
    type: string;
    expression: Expression;
    setExpression: Dispatch<SetStateAction<Expression>>;
}

const CalcExpression: FC<ICalcExpression> = ({type, expression, setExpression}: ICalcExpression) => {
    console.log(type);
    switch (type) {
        case ETypesOfEquation.equation: return <CalcInputEquation equation={expression as string} setEquation={setExpression}/>
        case ETypesOfEquation.SLAE: return <CalcInputSLAE SLAE={expression as string[]} setSLAE={setExpression}/>
    }
    return <CalcInput/>
}

export default CalcExpression;