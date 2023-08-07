import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { ETypesOfEquation } from "../enums/enums";
import {
  ITypeOfTask,
  ITaskData,
  IMethod,
  IResult,
  Expression,
} from "../types/types";
import CalcSelect from "../components/calcSelect";
import CalcParams from "../components/calcParams";
import { requestToServer } from "../axios/requests";
import CalcResult from "../components/calcResult";
import LoadingAndError from "../hoc/loadingAndError";
import CalcGraph from "../components/calcGraph";
import CalcExpression from "../components/calcExpression";

const Calculator: FC = () => {
  const { type } = useParams();

  const [typeOfTask, setTypeOfTask] = useState<ITypeOfTask | {}>({});

  const [expression, setExpression] = useState<Expression>("");
  const [method, setMethod] = useState<IMethod | {}>({});
  const [params, setParams] = useState<{ [key: string]: string }>({});

  const [isTaskLoading, setTaskIsLoading] = useState<boolean>(false);
  const [taskError, setTaskError] = useState<string>("");

  const [result, setResult] = useState<{} | IResult>({});
  const [isResultLoading, setIsResultLoading] = useState<boolean>(false);
  const [resultError, setResultError] = useState<string>("");

  useEffect(() => {
    requestToServer(
      setTypeOfTask,
      setTaskIsLoading,
      setTaskError,
      `/${type}` || ""
    ).then((data: ITypeOfTask) => {
      setMethod(data.methods[0]);
    });
  }, []);

  const selectChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setMethod(
      (typeOfTask as ITypeOfTask).methods.find(
        (method) => method.id === event.target.value
      ) || {}
    );
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(expression);
    const taskData: ITaskData = {
      id: (typeOfTask as ITypeOfTask).id,
      expression: expression,
      methodType: (method as IMethod).type,
      methodId: (method as IMethod).id,
      type: type || "",
      params: params,
    };
    requestToServer(
      setResult,
      setIsResultLoading,
      setResultError,
      `/${type}`,
      "post",
      taskData
    );
  };

  const paramChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setParams({ ...params, [key]: event.target.value });
  };

  return (
    <LoadingAndError isLoading={isTaskLoading} errorMessage={taskError}>
      <div className="container pb-3">
        <h1>{(typeOfTask as ITypeOfTask).title}</h1>
        <form onSubmit={formSubmitHandler} noValidate={true}>
          <fieldset>
            <CalcExpression
              type={type || ""}
              expression={expression}
              setExpression={setExpression}
            />
            {type === ETypesOfEquation.equation && (
              <CalcGraph expression={expression} />
            )}
            <CalcSelect
              changeHandler={selectChangeHandler}
              methods={(typeOfTask as ITypeOfTask).methods}
            />
            <hr />
            <CalcParams
              paramsData={(method as IMethod).params || {}}
              paramChangeHandler={paramChangeHandler}
            />
            <button type="submit" className="btn btn-dark">
              Решить
            </button>
          </fieldset>
        </form>
        {Object.keys(result).length !== 0 && (
          <CalcResult
            isLoading={isResultLoading}
            errorMessage={resultError}
            result={result}
          />
        )}
      </div>
    </LoadingAndError>
  );
};

export default Calculator;
