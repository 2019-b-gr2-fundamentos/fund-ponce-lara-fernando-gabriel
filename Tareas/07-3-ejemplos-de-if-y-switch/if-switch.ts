////// primer ejemplo
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