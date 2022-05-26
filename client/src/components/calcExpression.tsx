import React, {Dispatch, FC, SetStateAction} from "react";
import {Expression} from "../types/types";
import {ETypesOfEquation} from "../enums/enums";
import CalcInput from "./UI/calcInput";
import CalcInputEquation from "./calcInputEquation";
import CalcInputSLAE from "./calcInputSLAE";
import CalcInputSNE from "./CalcInputSNE";

interface ICalcExpression {
  type: string;
  expression: Expression;
  setExpression: Dispatch<SetStateAction<Expression>>;
}

const CalcExpression: FC<ICalcExpression> = ({
  type,
  expression,
  setExpression,
}: ICalcExpression) => {
  switch (type) {
    case ETypesOfEquation.equation:
      return (
        <CalcInputEquation
          equation={expression as string}
          setEquation={setExpression}
        />
      );
    case ETypesOfEquation.DE:
      return (
        <CalcInputEquation
          equation={expression as string}
          setEquation={setExpression}
        />
      );
    case ETypesOfEquation.SLAE:
      return (
        <CalcInputSLAE SLAE={expression as string[]} setSLAE={setExpression} />
      );
    case ETypesOfEquation.SNE:
      return (
        <CalcInputSNE SNE={expression as string[]} setSNE={setExpression} />
      );
  }
  return <div></div>
};

export default CalcExpression;
