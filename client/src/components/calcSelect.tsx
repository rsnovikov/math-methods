import React from "react";
import {IMethod} from "../types/types";

interface ICalcSelectProps {
    changeHandler: React.ChangeEventHandler<HTMLSelectElement>;
    methods: IMethod[];
}

const CalcSelect: React.FC<ICalcSelectProps> = ({changeHandler, methods}) => {
    return (
        <div className="mb-3">
            <label htmlFor="method" className="form-label">Выберите метод решения</label>
            <select
                id="method"
                onChange={changeHandler}
                className="form-select"
            >
                {
                    methods?.map((method) => {
                        return <option value={method.id} key={method.id}>{method.title}</option>
                    })
                }

            </select>
        </div>
    );
}

export default CalcSelect;