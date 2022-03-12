import React from "react";
import {ITypeOfEquation} from "../types/calculator";

interface ICalculatorSelectProps {
    changeHandler: React.ChangeEventHandler<HTMLSelectElement>;
    typesOfEquation: ITypeOfEquation[];
}



const CalculatorSelect : React.FC<ICalculatorSelectProps> = ({changeHandler, typesOfEquation}) => {
    return (
        <div className="mb-3">
            <label htmlFor="method" className="form-label">Выберите метод решения</label>
            <select
                id="method"
                onChange={changeHandler}
                className="form-select"
            >
                {
                    typesOfEquation.map((type : ITypeOfEquation) => {
                        return <option value={type.id} key={type.id}>{type.title}</option>
                    })
                }

            </select>
        </div>
    )
}

export default CalculatorSelect;