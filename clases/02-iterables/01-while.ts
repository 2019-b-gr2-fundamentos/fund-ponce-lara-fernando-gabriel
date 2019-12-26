// Do while
// acepta boleatos , trutis y falsis
// let es para variables mutables
/*


let veceskcomi = 0;
do{
    console.log('vamos a comer');
    veceskcomi = veceskcomi + 1;
    switch(veceskcomi){
        case 1:
            console.log("desayuno");
            break;
        case 2:
            console.log("almuerzo");
            break;
        case 3:
            console.log("merienda");
            break;
        default:
            console.log("gordito!");
             break;

    }

} while(veceskcomi < 3 )


*/
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


do{
    console.log('deberes');
    deber = deber + 1;
    if (deber%3==0 ){
        compiladores=compiladores+1;
    }
    if (deber%3!=0 && deber%2==0 && deber%1==0){
        algebra=algebra+1;
    }
    if (deber%3!=0 && deber%2!=0 && deber%1==0){
        analisis=analisis+1;
    }

} while(deber < 50 )

console.log('analisis');
console.log(analisis);
console.log('algebra');
console.log(algebra);
console.log('compiladores');
console.log(compiladores);