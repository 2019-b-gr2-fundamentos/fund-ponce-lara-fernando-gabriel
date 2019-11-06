// calculadora basica
const numeroa = prompt("Ingresa un numero"); 
const numerob = prompt("Ingresa el otronumero"); 
const numero1 = Number(numeroa);
const numero2 = Number(numerob);
console.log("de los numeros insertados escoja la letra de la operacion basica deseada");
console.log("suma s, resta r ,multiplicar m , dividir d");
const operacion = prompt("ingresa la letra de la operacion a realizar"); 
const operation = String(operacion)
if (operation == 's') 
{
    console.log("la suma es:");
    console.log(numero1+numero2);
} 
else if (operation == 'r')
{
    console.log("la resta es");   
    console.log(numero1-numero2);
}
else if (operation == 'm') 
{
    console.log("la multiplicacion es:");
    console.log(numero1*numero2);
}
else if (operation == 'd') 
{
    console.log("la division es:");
    console.log(numero1/numero2);
}
}

// calcular el radio de un circulo dado el radio por teclado
const radio = prompt("Ingresa el radio del circulo para calcular su area"); 
const ratio = Number(radio);
console.log("el area es:");
console.log(ratio*2*Math.PI);