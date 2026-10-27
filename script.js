let peso = 75
let altura = 1.83
let imc = calcularIMC(peso,altura)
let classificacao = classificarIMC (imc)

function calcularIMC(peso, altura) {
    return peso / altura ** 2
}

function classsificarIMC (imc){
if (imc < 18.5) {
  return "Abaixo do peso" 
} else if (imc <= 24.9) {
 return "peso normal" 
}
 else if (imc <= 29.9) {
  return "sobrepeso" 
}
 else if (imc <= 34.9) {
    return "obesidade do grau I" 
}
 else if ( imc <= 39.9) {
    return "obesidade grau II" 
    } 
}
 // console.log(`o seu imc é ${imc} e a sua`)

 // atividade 1 => somar 
 let primeiroNumero = 18
 let segundoNumero = 222

 let resultadosom = somar (primeiroNumero, segundoNumero)
 
 function somar (primeiroNumero, segundoNumero) {
     return primeiroNumero + segundoNumero
 }

console.log(resultadosom)

// atividade => diminuir
let n1 = 12
let n2 = 15

let resultadodim = subtracao (n1, n2)

function subtracao (n1, n2) {
return n1 - n2
}

console.log(resultadodim)

// atividade => multiplicacao
let numero1 = 34
let numero2 = 10

let resultadomult = multiplicacao (numero1, numero2)

function multiplicacao (numero1, numero2) {
    return numero1 * numero2
}

console.log (resultadomult)

// atividade => divisao
let number1 = 40
let number2 = 50

let resultadodiv = divisao (number1, number2)

function divisao (number1, number2) {
    return number1 / number2
}

console.log(`a divisao de ${number1} / ${number2} é ${resultadodiv}`)

// atividade => potenciacao
let num1 = 18
let num2 = 19

let resultadopot = elevar(num1, num2)

function elevar(num1, num2) {
    return num1 ** num2
}

console.log(resultadopot)

////////////////////////////////////////////
const somar = (primeiroNumero, segundoNumero) = primeiroNumero + segundoNumero;

const subtracao = (n1, n2) => n1 - n2;

const multiplicacao = (numero1, numero2) => numero1 * numero2;

const divisao = (number1, number2) => number1 / number2;

const potenciacao = (num1, num2) => num1 ** num2; 