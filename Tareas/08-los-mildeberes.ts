/*
analisis- impar 
algerbra-par
3 compiladores ==
5 programacion
7 calculo
11 fisica
13 ingles
saber cuantos deberes hicieron hasta el numero 1000

si es impar le aumentamos a analisis 
si es par le aumentamos a algebra
si es multiplo de 3 le aumentamos a compiladores
50 . 17 17 16
*/

let deber = 0;
let analisis = 0;
let algebra = 0;
let compiladores = 0;
let programacion = 0;
let calculo = 0;
let fisica = 0;
let ingles = 0;



do{
    console.log('deberes');
    deber = deber + 1;
    if (deber%13==0 ){
        ingles=ingles+1;
    }
    if (deber%13!=0 && deber%11==0 ){
        fisica=fisica+1;
    }
    if (deber%13!=0 && deber%11!=0 && deber%7==0){
        calculo=calculo+1;
    }
    if (deber%13!=0 && deber%11!=0 && deber%7!=0 && deber%5==0){
        programacion=programacion+1;
    }
    if (deber%13!=0 && deber%11!=0 && deber%7!=0 && deber%5!=0 && deber%3==0 ){
        compiladores=compiladores+1;
    }
    if (deber%13!=0 && deber%11!=0 && deber%7!=0 && deber%5!=0 && deber%3!=0 && deber%2==0 ){
        algebra=algebra+1;
    }
    if (deber%13!=0 && deber%11!=0 && deber%7!=0 && deber%5!=0 && deber%3!=0 && deber%2!=0 && deber%1==0){
        analisis=analisis+1;
    }

} while(deber < 1000 )

console.log('analisis');
console.log(analisis);
console.log('algebra');
console.log(algebra);
console.log('compiladores');
console.log(compiladores);
console.log('programacion');
console.log(programacion);
console.log('calculo');
console.log(calculo);
console.log('fisica');
console.log(fisica);
console.log('ingles');
console.log(ingles);
console.log('comprobacion');
console.log(analisis+algebra+compiladores+programacion+calculo+fisica+ingles);