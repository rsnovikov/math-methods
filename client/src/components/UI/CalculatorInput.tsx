import React from "react";

interface ICalculatorInputProps {
    label?: string;
    value?: string;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    id?: string;
    type?: string;
    className?: string;
}

const CalculatorInput : React.FC<ICalculatorInputProps> = ({label, ...props}) => {
    return(
        <div className="mb-3">
            <label htmlFor="equation" className="form-label">{label}</label>
            <input
                {...props}
            />
        </div>
    );
}

export default CalculatorInput;