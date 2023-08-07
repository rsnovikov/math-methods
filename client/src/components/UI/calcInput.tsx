import React, { FC } from "react";
import {useParams} from "react-router-dom";

interface ICalcInputProps {
  label?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
  placeholder?: string;
  id?: string;
  type?: string;
  className?: string;
}

const CalcInput: FC<ICalcInputProps> = ({ label, ...props }) => {
  const {type} = useParams();
  return (
    <div className="mb-2">
      <label htmlFor="equation" className="form-label">
        {label}
      </label>
      <div className="d-flex justify-content-between align-items-center">
        {type === "DE" &&  <p
          className="fw-bold mb-0 mr-0"
          style={{
            whiteSpace: "nowrap",
            marginRight: "5px"
          }}
        >
          y' =
        </p>}
        <input className="form-control me-2" {...props} />
        {type === "equation" &&  <p
          className="fw-bold mb-0"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          = 0
        </p>}
      </div>
    </div>
  );
};

export default CalcInput;
