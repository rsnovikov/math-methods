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
        <span style={{flex: "1 1 auto"}}>
            <label htmlFor="equation" className="form-label">{label}</label>
            <input
                className="form-control"
                {...props}
            />
        </span>
    );
}

export default CalcInput;