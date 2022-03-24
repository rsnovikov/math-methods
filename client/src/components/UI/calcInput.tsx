import React from "react";

interface ICalcInputProps {
    label?: string;
    value?: string;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    id?: string;
    type?: string;
    className?: string;
}

const CalcInput: React.FC<ICalcInputProps> = ({label, ...props}) => {
    return (
        <div className="mb-3">
            <label htmlFor="equation" className="form-label">{label}</label>
            <input
                className="form-control"
                {...props}
            />
        </div>
    );
}

export default CalcInput;