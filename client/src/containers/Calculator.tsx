import React, {useEffect, useState} from "react";
import CalculatorSelect from "../components/CalculatorSelect";
import CalculatorParams from "../components/CalculatorParams";
import {ITypeOfTask, IEquationTaskData, IMethod} from "../types/types";
import CalculatorInput from "../components/UI/CalculatorInput";
import {requestToServer} from "../axios/requests";
import {useParams} from "react-router-dom";
import CalculatorResult from "../components/CalculatorResult";
import LoadingAndError from "../hoc/LoadingAndError";
import CalculatorGraph from "../components/CalculatorGraph";

const Calculator: React.FC = () => {
    const {type} = useParams();

    const [typeOfTask, setTypeOfTask] = useState<ITypeOfTask | {}>({});

    const [currentEquation, setCurrentEquation] = useState<string>('');
    const [currentMethod, setCurrentMethod] = useState<IMethod | {}>({});
    const [currentParams, setCurrentParams] = useState<{ [key: string]: string }>({});

    const [isTaskLoading, setTaskIsLoading] = useState<boolean>(false);
    const [taskError, setTaskError] = useState<string>('');

    const [result, setResult] = useState<string>('');
    const [isResultLoading, setIsResultLoading] = useState<boolean>(false);
    const [resultError, setResultError] = useState<string>('');

    useEffect(() => {
        requestToServer(setTypeOfTask, setTaskIsLoading, setTaskError, type || '')
            .then((data: ITypeOfTask) => {
                setCurrentMethod(data.methods[0]);
            });
    }, []);

    const selectChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setCurrentMethod((typeOfTask as ITypeOfTask).methods.find(method => method.id === event.target.value) || {})
    }

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(currentParams)
        const taskData: IEquationTaskData = {
            id: (typeOfTask as ITypeOfTask).id,
            equation: currentEquation,
            methodType: (currentMethod as IMethod).type,
            methodId: (currentMethod as IMethod).id,
            type: type || '',
            params: currentParams
        }
        requestToServer(setResult, setIsResultLoading, setResultError, '', 'post', taskData);
    }

    const paramChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setCurrentParams({...currentParams, [key]: event.target.value});
    }

    return (
        <LoadingAndError isLoading={isTaskLoading} errorMessage={taskError}>
            <div className="container">
                <h1>Калькулятор</h1>
                <form onSubmit={formSubmitHandler} noValidate={true}>
                    <fieldset>
                        <CalculatorInput
                            type="text"
                            id="equation"
                            className="form-control"
                            placeholder="f(x)"
                            value={currentEquation}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCurrentEquation(event.target.value)}
                        />
                        <CalculatorGraph/>
                        <CalculatorSelect changeHandler={selectChangeHandler}
                                          methods={(typeOfTask as ITypeOfTask).methods}/>
                        <hr/>
                        <CalculatorParams paramsData={(currentMethod as IMethod).params || {}}
                                          paramChangeHandler={paramChangeHandler}/>
                        <button type="submit" className="btn btn-dark">Решить</button>
                    </fieldset>
                </form>
                <CalculatorResult isLoading={isResultLoading} errorMessage={resultError} result={result}/>
            </div>
        </LoadingAndError>
    );
}

export default Calculator;