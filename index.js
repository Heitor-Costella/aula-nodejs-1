//este é meu arquivo principal

const calc = require('./calc'); //importacao do modulo

const resSoma= calc.soma(2,2);
const resSub= calc.sub(10,2);

console.log(`O resultado da soma é ${resSoma}`);
console.log(`O resultado da subtração é ${resSub}`);  
