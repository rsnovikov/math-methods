import React, { ChangeEvent, FC } from "react";
import { IParams } from "../types/types";

interface ICalcParams {
  paramsData: IParams;
  paramChangeHandler: (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
}

const CalcParams: FC<ICalcParams> = ({ paramsData, paramChangeHandler }) => {
  return (
    <>
      {Object.entries(paramsData).map(([key, param]) => (
        <div className="mb-3" key={param.name}>
          <label htmlFor={param.name} className="form-label">
            {param.label}
          </label>
          <input
            formNoValidate={false}
            type={param.type || "number"}
            id={param.name}
            className="form-control"
            placeholder={param.placeholder}
            name={param.name}
            value={param.value}
            onChange={(event) => paramChangeHandler(event, key)}
          />
        </div>
      ))}
    </>
  );
};

export default CalcParams;
