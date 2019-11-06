////// primer ejemplo para calcular el IMC
const pesoo = prompt("Ingresa el peso en Kg"); 
const alturaa = prompt("Ingresa la altura en metros"); 
const peso = Number(pesoo);
const altura = Number(alturaa);
const imc = (peso/(altura*altura))
console.log(imc);
if ( imc < 18 ) 
{
    console.log("delgadez extrema");
} 
else
{
    if ( imc > 18 && imc <= 25 )
    {
        console.log("normal");
    } 
    else
    {
        if ( imc > 25 && imc <= 30 )
        {
            console.log("sobrepeso");
        } 
        else
        {
            if ( imc > 30 )
        {
            console.log("sobrepeso morbido");
        }     
        }
    }
}
////// 2do ejemplo para calcular el IMC
const temperatura = prompt("Ingresa el valor de la temperatura en C mediante via oral"); 
const temp = Number(temperatura);
console.log('su temperatura es');
console.log(temp);
if ( temp < 36.7 ) 
{
    console.log("debajo de los niveles normales");
} 
else
{
    if ( temp >= 36.7 && temp <= 37.3 )
    {
        console.log("normal");
    } 
    else
    {
            if ( temp > 30 )
        {
            console.log("tiene fiebre");
        }    
        
    }
}


// ejemplo 3

const calificacion = prompt("Ingresa el valor de la calificacion obtenida"); 
const calif = Number(calificacion);
console.log("su nota es");
console.log(calif);
if(calif >= 0 && calif < 9){
    console.log("perdio semestre")
}else{
    if(calif >= 9 && calif < 14){
        console.log("supletorio , directo al examen final")
    }else{
        if(calif >= 14 && calif <= 20){
            console.log("aprobado y exonerado")
        }else{
            console.log("numero no valido")
        }
    }
}