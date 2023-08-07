export interface ITypeOfTask {
  id: string;
  type: string;
  title: string;
  methods: IMethod[];
}

export interface IMethod {
  id: string;
  type: string;
  title: string;
  params: IParams;
}

export interface IParams {
  [key: string]: IParam;
}

export interface IParam {
  id: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  type?: string;
}

export interface IEquationMethodProps {
  equation: string;
  a: number;
  b: number;
  accuracy: number;
}

export interface IResult {
  interData: IInterData;
  answer: number | number[];
}

export interface IInterData {
  titles: string[];
  values: (string | number)[][];
}
