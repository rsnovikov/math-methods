import React, {FC} from "react";
import LoadingAndError from "../hoc/loadingAndError";
import {IResult} from "../types/types";

interface ICalcResult {
    isLoading: boolean;
    errorMessage: string;
    result: {} | IResult;
}

const CalcResult: FC<ICalcResult> = ({isLoading, errorMessage, result}) => {
    console.log(result)
    return (
        <LoadingAndError isLoading={isLoading} errorMessage={errorMessage}>
            <div className="mt-3 mb-3">
                {(result as IResult).interData &&  <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        {(result as IResult).interData?.titles?.map(title => (
                            <th scope="col" key={title}>{title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {(result as IResult).interData?.values?.map((value, index) => (
                        <tr key={JSON.stringify(value) + index}>
                            <th scope="row">{index + 1}</th>
                            {value.map((valueItem, index) => (
                                <td key={String(valueItem) + index}>{valueItem}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>}

                <strong className="m-1">{JSON.stringify((result as IResult).answer)}</strong>
            </div>
        </LoadingAndError>
    );
}

export default CalcResult;