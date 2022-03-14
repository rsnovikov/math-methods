import React, {useEffect, useState} from "react";
import CalculatorSelect from "../components/CalculatorSelect";
import CalculatorParams from "../components/CalculatorParams";
import {ITypeOfTask, IEquationTaskData} from "../types/types";
import CalculatorInput from "../components/UI/CalculatorInput";
import {requestToServer} from "../axios/requests";
import {useParams} from "react-router-dom";
import CalculatorResult from "../components/CalculatorResult";
import Loader from "../components/UI/Loader";

const EquationCalculator: React.FC = () => {

    const {type} = useParams();

    const [typeOfTask, setTypeOfTask] = useState<ITypeOfTask | {}>({});
    const [taskData, setTaskData] = useState<IEquationTaskData>({
        accuracy: 0.01,
        equation: '',
        id: null,
        methodId: null,
        params: []
    });

    const [isTaskLoading, setTaskIsLoading] = useState<boolean>(false);
    const [TaskError, setTaskError] = useState<string>('');

    const [result, setResult] = useState<string>('');
    const [isResultLoading, setIsResultLoading] = useState<boolean>(false);
    const [resultError, setResultError] = useState<string>('');

    useEffect(() => {
        requestToServer(setTypeOfTask, setTaskIsLoading, setTaskError, type || '')
            .then((data) => setTaskData({
                ...taskData,
                methodId: data.methods[0].id,
                id: data.id,
                params: data.methods[0].params
            }));
    }, []);

    const selectChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setTaskData({...taskData, methodId: event.target.value});
    }

    const formSubmitHandler = (event: React.FormEvent) => {
        console.log(type);
        event.preventDefault();
        requestToServer(setResult, setIsResultLoading, setResultError, type || '', 'post', taskData);
    }

    const paramChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        console.log(name)
        const params = (taskData.params)
            .map(param => param.name === name
                ? {...param, value: event.target.value}
                : param);

        setTaskData({
                ...taskData,
                params
            }
        );
    }

    return isTaskLoading
        ? <Loader/>
        : (
            <div className="container">
                <h1>Калькулятор</h1>
                <form onSubmit={formSubmitHandler}>
                    <fieldset>
                        <CalculatorInput
                            type="text"
                            id="equation"
                            className="form-control"
                            placeholder="f(x)"
                            value={taskData.equation}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskData({
                                ...taskData,
                                equation: event.target.value
                            })}
                        />
                        <CalculatorInput
                            type="number"
                            id="accuracy"
                            className="form-control"
                            value={String(taskData.accuracy)}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskData({
                                ...taskData,
                                accuracy: Number(event.target.value)
                            })}
                        />
                        <CalculatorSelect changeHandler={selectChangeHandler}
                                          methods={(typeOfTask as ITypeOfTask).methods}/>
                        <hr/>
                        <CalculatorParams paramsData={taskData.params}
                                          paramChangeHandler={paramChangeHandler}/>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </fieldset>
                </form>
                <CalculatorResult isLoading={isResultLoading} errorMessage={resultError} result={result}/>
            </div>
        );
}

export default EquationCalculator;