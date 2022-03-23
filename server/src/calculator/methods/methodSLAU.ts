// let equations: string[] = ['10x1 + x2 - x3 - 11','10x2  + x1 - x3 - 10','-x1 + x2 + 10x3 - 10'];
// const newEquations = [...equations].map(equation => equation.replaceAll(' ', ''));
// const matrix: string[][] = newEquations.map(equation => {
//     const row: string[] = [];
//     const splittedEquation= equation.split('x');
//     const el1 = (splittedEquation[0].slice(0) === '-' || splittedEquation[0].slice(0) === '+') ? `${splittedEquation[0].slice(0)}1` : splittedEquation[0].slice(0);
//     row[+splittedEquation[1][0] - 1] = el1;
//     row[+splittedEquation[2][0] - 1] = el1;
//     row[+splittedEquation[3][0] - 1] = el1;
//     return row;
// });
//
// console.log(matrix)

export const slauComp = (matrix:number[][],epsilon:number) => {
    for (let i=0; i<matrix.length;i++) {
        let buffer=matrix[i][i];
      for (let j=0;j<matrix[i].length;j++) {
          matrix[i][j] /= buffer;
      }
    }
    let max=0,sum=0;
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[i].length-1;j++){
            if(i!==j){
                sum+=Math.abs(matrix[i][j]);
            }
        }
        if (sum>max){
            max=sum;
        }
        sum=0;
    }
    let xPrev:number[]=[];
    let xNow:number[]=[];
    for (let i=0;i<matrix.length;i++) {
        xPrev[i]=0;
        xNow[i]=0;
    }
    while (true){
        for (let i=0;i<xPrev.length;i++){
            for (let j=0;j<matrix[i].length-1;j++){
                if (i!==j)
                {
                    xNow[i]+=-(xPrev[j]*matrix[i][j]);
                }
            }
            xNow[i]+=matrix[i][matrix[i].length-1];
        }
        if (epsilonCheck(xNow,xPrev,((1-max)/max)*epsilon)) {
            return xNow;
        }
        for (let i=0;i<xNow.length;i++){
            xPrev[i]=xNow[i];
            xNow[i]=0;
        }
    }
}

const epsilonCheck=(arr1:number[],arr2:number[],e:number)=>{
    let flag:boolean=false;
    for (let i=0;i<arr1.length;i++){
        if (Math.abs(arr1[i]-arr2[i]) < e){
            flag=true;
        } else{
            flag=false;
            break;
        }
    }
    return flag;
}

