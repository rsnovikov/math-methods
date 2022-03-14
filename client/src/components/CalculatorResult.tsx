import React, {FC} from "react";
import Loader from "./UI/Loader";

interface ICalculatorResult {
    isLoading: boolean;
    errorMessage: string;
    result: string;
}

const CalculatorResult: FC<ICalculatorResult> = ({isLoading, errorMessage, result}) => {
    return (
        <div className="mt-10">
            {
                isLoading
                    ? <Loader/>
                    : errorMessage || result
            }
        </div>
    );
}

export default CalculatorResult;