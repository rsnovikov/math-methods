import React, {FC} from "react";
import LoadingAndError from "../hoc/loadingAndError";

interface ICalculatorResult {
    isLoading: boolean;
    errorMessage: string;
    result: string;
}

const CalculatorResult: FC<ICalculatorResult> = ({isLoading, errorMessage, result}) => {
    return (
        <LoadingAndError isLoading={isLoading} errorMessage={errorMessage}>
            <div className="mt-10">
                <strong>{result}</strong>
            </div>
        </LoadingAndError>
    );
}

export default CalculatorResult;