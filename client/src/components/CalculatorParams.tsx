import React from "react";
import {IParam} from "../types/types";

interface ICalculatorParams {
    paramsData: IParam[];
    paramChangeHandler: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const CalculatorParams : React.FC<ICalculatorParams> = ({paramsData, paramChangeHandler}) => {
    return (
        <>
            {
                paramsData.map(param => (
                    <div className="mb-3" key={param.name}>
                        <label htmlFor={param.name} className="form-label">{param.label}</label>
                        <input
                            type={param.type || 'number'}
                            id={param.name}
                            className="form-control"
                            placeholder={param.placeholder}
                            name={param.name}
                            value={param.value}
                            onChange={(event) => paramChangeHandler(event, param.name)}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default CalculatorParams;