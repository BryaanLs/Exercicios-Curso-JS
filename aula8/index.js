let varA = 'A'
let varB = 'B'
let varC = 'C'

const varTemp = varA
varA = varB       //A = B
varB = varC       //B = C
varC = varTemp    //C = A

/* OU */

[varA, varB, varC] = [varB, varC, varA]

/* 
[varA, varB, varC] =
[varB, varC, varA]
*/

console.log(varA, varB, varC);
