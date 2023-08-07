export enum ETypesOfEquation {
  equation = 'equation',
  SLAE = 'SLAE',
  SNE = 'SNE',
  DE = 'DE',
  regress = "regress"
}

export enum EEquationMethods {
  halfDiv = 'halfDiv',
  simpleIter = 'simpleIter',
  newton = 'newton',
}

export enum ESLAEMethods {
  simpleIter = 'simpleIter',
  zeidel = 'zeidel',
}

export enum ESNEMethods {
  simpleIter = 'simpleIter',
  newton = 'newton',
}

export enum EDEMethods {
  eiler = 'eiler',
  rudgeKutt = 'rudgeKutt',
}

export enum ERegressMethods {
  all = "all"
}
