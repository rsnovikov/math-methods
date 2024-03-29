import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { Expression } from "../types/types";
import CalcInput from "./UI/calcInput";
import {useParams} from "react-router-dom";

interface ICalcInputEquation {
  equation: string;
  setEquation: Dispatch<SetStateAction<Expression>>;
}

const CalcInputEquation: FC<ICalcInputEquation> = ({
  equation,
  setEquation,
}: ICalcInputEquation) => {
  return (
    <div className="mb-3">
      <CalcInput
        type="text"
        id="equation"
        placeholder="f(x)"
        value={equation}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEquation(event.target.value)
        }
      />
    </div>
  );
};

export default CalcInputEquation;
