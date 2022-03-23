import React, {FC, ReactElement} from "react";
import Loader from "../components/UI/loader";
import ErrorBlock from "../components/UI/errorBlock";

interface ILoadingAndErrorProps {
    isLoading: boolean;
    errorMessage: string;
}

const LoadingAndError: FC<ILoadingAndErrorProps> = (
    {
        isLoading,
        errorMessage,
        children
    }
) => {
    return isLoading
        ? <Loader/>
        : (
            errorMessage
                ? <ErrorBlock/>
                : children as ReactElement
        );
}

export default LoadingAndError;