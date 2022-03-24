import React, {useEffect, useState} from "react";
import CalcSelect from "../components/calcSelect";
import CalcParams from "../components/calcParams";
import {ITypeOfTask, ITaskData, IMethod, IResult, Expression} from "../types/types";
import {requestToServer} from "../axios/requests";
import {useParams} from "react-router-dom";
import CalcResult from "../components/calcResult";
import LoadingAndError from "../hoc/loadingAndError";
import CalcGraph from "../components/calcGraph";
import CalcExpression from "../components/calcExpression";

const Calculator: React.FC = () => {
    const {type} = useParams();

    const [typeOfTask, setTypeOfTask] = useState<ITypeOfTask | {}>({});

    const [currentExpression, setCurrentExpression] = useState<Expression>("");
    const [currentMethod, setCurrentMethod] = useState<IMethod | {}>({});
    const [currentParams, setCurrentParams] = useState<{ [key: string]: string }>({});

    const [isTaskLoading, setTaskIsLoading] = useState<boolean>(false);
    const [taskError, setTaskError] = useState<string>('');

    const [result, setResult] = useState<{} | IResult>({});

    const [isResultLoading, setIsResultLoading] = useState<boolean>(false);
    const [resultError, setResultError] = useState<string>('');

    useEffect(() => {
        requestToServer(setTypeOfTask, setTaskIsLoading, setTaskError, `/${type}` || '')
            .then((data: ITypeOfTask) => {
                setCurrentMethod(data.methods[0]);
                console.log(data)
            });
    }, []);

    const selectChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setCurrentMethod((typeOfTask as ITypeOfTask).methods.find(method => method.id === event.target.value) || {})
    }

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const taskData: ITaskData = {
            id: (typeOfTask as ITypeOfTask).id,
            expression: currentExpression,
            methodType: (currentMethod as IMethod).type,
            methodId: (currentMethod as IMethod).id,
            type: type || '',
            params: currentParams
        }
        console.log(type);
        requestToServer(setResult, setIsResultLoading, setResultError, `/${type}`, 'post', taskData);
    }

    const paramChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setCurrentParams({...currentParams, [key]: event.target.value});
    }


    return (
        <LoadingAndError isLoading={isTaskLoading} errorMessage={taskError}>
            <div className="container">
                <h1>{(typeOfTask as ITypeOfTask) .title}</h1>
                <form onSubmit={formSubmitHandler} noValidate={true}>
                    <fieldset>
                        <CalcExpression
                            type={type || ""}
                            expression={currentExpression}
                            setExpression={setCurrentExpression}
                        />
                        <CalcGraph expression={currentExpression}/>
                        <CalcSelect changeHandler={selectChangeHandler}
                                    methods={(typeOfTask as ITypeOfTask).methods}/>
                        <hr/>
                        <CalcParams paramsData={(currentMethod as IMethod).params || {}}
                                    paramChangeHandler={paramChangeHandler}/>
                        <button type="submit" className="btn btn-dark">Решить</button>
                    </fieldset>
                </form>
                {
                    Object.keys(result).length !== 0
                    && <CalcResult isLoading={isResultLoading} errorMessage={resultError} result={result}/>
                }
            </div>
        </LoadingAndError>
    );
}

export default Calculator;