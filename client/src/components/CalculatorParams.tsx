import React from "react";
import {IParams} from "../types/calculator";

interface ICalculatorParams {
    paramsData: IParams;
    paramChangeHandler: (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;
}

const CalculatorParams : React.FC<ICalculatorParams> = ({paramsData, paramChangeHandler}) => {
    return (
        <>
            {
                Object.entries(paramsData)?.map(([key, param]) => (
                    <div className="mb-3" key={param.name}>
                        <label htmlFor={param.name} className="form-label">{param.label}</label>
                        <input
                            type={param.type || 'number'}
                            id={param.name}
                            className="form-control"
                            placeholder={param.placeholder}
                            name={param.name}
                            value={param.value}
                            onChange={(event) => paramChangeHandler(event, key)}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default CalculatorParams;