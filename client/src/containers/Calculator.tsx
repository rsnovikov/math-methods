import React, {useEffect, useState} from "react";

interface ITypesOfEquation {
    id: string;
    title: string;
    params: IParams;
}

interface IParams {
    [key: string]: IParam;
}

interface IParam {
    name: string;
    label: string;
    value?: string;
    placeholder?: string;
}

interface IRequestData {
    equation: string;
    accuracy: number;
    params: IParams;
    id: string;
}

const TYPES_OF_EQUATION: ITypesOfEquation[] = [
    {
        id: String(Date.now()),
        title: "Метод половинного деления",
        params: {
            a: {
                name: 'a',
                label: 'Левая граница a',
                value: ''
            },
            b: {
                name: 'b',
                label: 'Правая граница b',
                value: ''
            },
        }
    },
    {
        id: String(Math.floor(Math.random() * 10e10)),
        title: "Метод Ньютона",
        params: {
            c: {
                name: 'c',
                label: 'Левая граница c',
                value: ''
            },
            d: {
                name: 'b',
                label: 'Правая граница d',
                value: ''
            },
        }
    },
]

const Calculator: React.FC = () => {
    const [typesOfEquation, setTypesOfEquation] = useState<ITypesOfEquation[] | []>([]);
    const [currentType, setCurrentType] = useState<ITypesOfEquation | {}>({});
    const [currentParams, setCurrentParams] = useState<IParams | {}>({});
    const [currentEquation, setCurrentEquation] = useState<string>('');
    const [currentAccuracy, setCurrentAccuracy] = useState<number>(0.01);
    const [result, setResult] = useState<string>('');
    useEffect(() => {
        setTypesOfEquation(TYPES_OF_EQUATION);
        setCurrentType(TYPES_OF_EQUATION[0]);
        setCurrentParams(TYPES_OF_EQUATION[0].params);
    }, []);

    const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const type = typesOfEquation.find(type => type.id === event.target.value) || {};
        setCurrentType(type);
        setCurrentParams((type as ITypesOfEquation)?.params || {})
    }


    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const requestData: IRequestData = {
            equation: currentEquation,
            id: (currentType as ITypesOfEquation).id,
            accuracy: currentAccuracy,
            params: currentParams
        };
        setResult('x^2');
        console.log(requestData);
    }

    return (
        <div className="container">
            <h1>Калькулятор</h1>
            <form onSubmit={formSubmitHandler}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="equation" className="form-label">Функция</label>
                        <input
                            type="text"
                            id="equation"
                            className="form-control"
                            placeholder="f(x)"
                            value={currentEquation}
                            onChange={event => setCurrentEquation(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="accuracy" className="form-label">Точность</label>
                        <input
                            type="number"
                            id="accuracy"
                            className="form-control"
                            value={currentAccuracy}
                            onChange={event => setCurrentAccuracy(Number(event.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="method" className="form-label">Выберите метод решения</label>
                        <select
                            id="method"
                            onChange={selectChangeHandler}
                            className="form-select"
                        >
                            {
                                typesOfEquation.map(type => {
                                    return <option value={type.id} key={type.id}>{type.title}</option>
                                })
                            }

                        </select>
                    </div>
                    <hr/>

                    {
                        Object.entries(currentParams)?.map(([key, param]) => (
                            <div className="mb-3" key={param.name}>
                                <label htmlFor={param.name} className="form-label">{param.label}</label>
                                <input
                                    type="text"
                                    id={param.name}
                                    className="form-control"
                                    placeholder={param.placeholder}
                                    name={param.name}
                                    value={param.value}
                                    onChange={(event) => {
                                        setCurrentParams({
                                            ...currentParams,
                                            [key]: {
                                                ...(currentParams as IParams)[key],
                                                value: event.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                        ))
                    }
                    <button type="submit" className="btn btn-dark">Submit</button>

                </fieldset>
            </form>

            <strong>
                {result}
            </strong>
        </div>
    )
}

export default Calculator;