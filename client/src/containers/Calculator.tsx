import React, {useEffect, useState} from "react";
import axios from "axios";
import CalculatorSelect from "./CalculatorSelect";
import CalculatorParams from "../components/CalculatorParams";
import {ITypeOfEquation, IParams, IRequestData} from "../types/calculator";
import CalculatorInput from "../components/UI/CalculatorInput";
import Loader from "../components/UI/Loader";

const Calculator: React.FC = () => {
    const [typesOfEquation, setTypesOfEquation] = useState<ITypeOfEquation[] | []>([]);
    const [currentType, setCurrentType] = useState<ITypeOfEquation | {}>({});
    const [currentParams, setCurrentParams] = useState<IParams | {}>({});
    const [currentEquation, setCurrentEquation] = useState<string>('');
    const [currentAccuracy, setCurrentAccuracy] = useState<number>(0.01);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [result, setResult] = useState<string>('');
    useEffect(() => {
        getTypesOfEquation();
    }, []);

    const getTypesOfEquation = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/calculator`);
            const data = response.data;
            setTypesOfEquation(data);
            setCurrentType(data[0]);
            setCurrentParams(data[0].params);
        } catch (e) {
            setError(String(e));
        }
    }

    const getResult = async (requestData: IRequestData) => {
        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/calculator`, requestData);
            const data = response.data;
            setResult(data);
        } catch (e) {
            setError(String(e));
        } finally {

        }
    }

    const selectChangeHandler : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const type = typesOfEquation.find(type => type.id === event.target.value) || {};
        setCurrentType(type);
        setCurrentParams((type as ITypeOfEquation)?.params || {})
    }

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const requestData: IRequestData = {
            equation: currentEquation,
            id: (currentType as ITypeOfEquation).id,
            accuracy: currentAccuracy,
            params: currentParams
        };
        getResult(requestData);
        console.log(requestData);
    }

    const paramChangeHandler = (event : React.ChangeEvent<HTMLInputElement>, key : string) => {
        setCurrentParams({
            ...currentParams,
            [key]: {
                ...(currentParams as IParams)[key],
                value: event.target.value
            }
        })
    }

    return (
        <div className="container">
            <h1>Калькулятор</h1>
            <form onSubmit={formSubmitHandler}>
                <fieldset>
                    <CalculatorInput
                            type="text"
                            id="equation"
                            className="form-control"
                            placeholder="f(x)"
                            value={currentEquation}
                            onChange={(event : React.ChangeEvent<HTMLInputElement>) => setCurrentEquation(event.target.value)}
                        />
                    <CalculatorInput
                            type="number"
                            id="accuracy"
                            className="form-control"
                            value={String(currentAccuracy)}
                            onChange={(event : React.ChangeEvent<HTMLInputElement>) => setCurrentAccuracy(Number(event.target.value))}
                        />
                    <CalculatorSelect changeHandler={selectChangeHandler} typesOfEquation={typesOfEquation}/>
                    <hr/>
                    <CalculatorParams paramsData={currentParams} paramChangeHandler={paramChangeHandler}/>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </fieldset>
            </form>

            {
                isLoading
                    ? <Loader/>
                    : (
                        error
                            ? error
                            : <strong>
                                {result}
                            </strong>
                    )
            }
        </div>
    )
}

export default Calculator;