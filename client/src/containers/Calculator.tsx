import React, {useEffect, useState} from "react";

interface ITypesOfEquation {
    id: string;
    title: string;
    options: IOption[];
}

interface IOption {
    label: string;
    value: string;
    title: string;
}

const TYPES_OF_EQUATION: ITypesOfEquation[] = [
    {
        id: String(Date.now()),
        title: "Метод Ньютона",
        options: [
            {
                label: 'член',
                value: 'asd',
                title: 'хуй'
            },


        ]
    }
]

const Calculator: React.FC = (): React.ReactElement => {
    const [typesOfEquation, setTypesOfEquation] = useState<ITypesOfEquation | []>([]);
    useEffect(() => {

    }, []);

    const selectChangeHandler = () => {

    }

    return (
        <>
            <h1>Калькулятор</h1>
        <form>
            <fieldset>
                <div className="mb-3">
                    <label htmlFor="equation" className="form-label">Уравнение</label>
                    <input type="text" id="equation" className="form-control" placeholder="f(x)=0"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="accuracy" className="form-label">Точность</label>
                    <input type="text" id="accuracy" className="form-control" value="0.01"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="method" className="form-label">Выберите метод решения</label>
                    <select
                        id="method"
                        onChange={selectChangeHandler}
                        className="form-select"
                    >
                        <option value='Метод двойного деления'>Метод двойного деления</option>
                    </select>
                </div>
                {/*<div className="mb-3">*/}
                {/*    <div className="form-check">*/}
                {/*        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />*/}
                {/*            <label className="form-check-label" htmlFor="disabledFieldsetCheck">*/}
                {/*                Особая точность*/}
                {/*            </label>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <button type="submit" className="btn btn-dark">Submit</button>
                <div className="mb-3">
                    <label htmlFor="equation" className="form-label">Уравнение</label>
                    <input type="text" id="equation" className="form-control" placeholder="f(x)=0"/>
                </div>
            </fieldset>
        </form>
        </>
    )

}

export default Calculator;