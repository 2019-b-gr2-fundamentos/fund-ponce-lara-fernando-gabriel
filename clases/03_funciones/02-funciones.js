function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    const operacion = prompt('Selecciona una operacion: "suma-1", "resta-2", "multiplicacion-3", "divivison-4","terminamos-5"');
    const esSuma = operacion == 'suma' ||
        operacion == '1' ||
        operacion == 'suma-1';
    const esResta = operacion == 'resta' ||
        operacion == '2' ||
        operacion == 'resta-2';
    const esMultiplicacion = operacion == 'multiplicacion' ||
        operacion == '3' ||
        operacion == 'multiplicacion-3';
    const esDivision = operacion == 'divivison' ||
        operacion == '4' ||
        operacion == 'divivison-1';
    const esTerminamos = operacion == 'Terminamos' ||
        operacion == '5' ||
        operacion == 'Terminamos-5'
    const estaValida = esSuma || esResta || esMultiplicacion || esDivision;
    let resultado = 0;
    if (estaValida) {
        const numUno = +prompt("Numero 1");
        const numDos = +prompt("Numero 2");
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esDivision) {
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
    }else{
        if(seTerminamos)
    }
}
