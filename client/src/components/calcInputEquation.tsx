import React, {Dispatch, FC, SetStateAction} from "react";
import CalcInput from "./UI/calcInput";
import {Expression} from "../types/types";

interface ICalcInputEquation {
    equation: string;
    setEquation: Dispatch<SetStateAction<Expression>>;
}

const CalcInputEquation: FC<ICalcInputEquation> = ({equation, setEquation}: ICalcInputEquation) => {
    return <CalcInput
        type="text"
        id="equation"
        className="form-control"
        placeholder="f(x)"
        value={equation}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEquation(event.target.value)}
    />
}

export default CalcInputEquation;