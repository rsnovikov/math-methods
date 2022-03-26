import React, {FC} from "react";

interface ICalcInputProps {
    label?: string;
    value?: string;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    id?: string;
    type?: string;
    className?: string;
}

const CalcInput: FC<ICalcInputProps> = ({label, ...props}) => {
    return (
        <span>
            <label htmlFor="equation" className="form-label">{label}</label>
            <input
                className="form-control"
                {...props}
            />
        </span>
    );
}

export default CalcInput;