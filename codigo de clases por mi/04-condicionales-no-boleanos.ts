// truty

/*
if(null) {
    console.log("Truty");
} else{
    console.log("Fslse")
}
*/

// switch es lo mismo que poner varios is else 
// comando break dento de switch
/*
conts calculo = "sumar";
switch(calculo) {
    case "sumar":
    case "restar": 
    case "multiplicar":
    case "dividir":
        break;
    default:
}
*/
// switch sirve para caso especificos de la expresion
// 6 wawa
// 18 guambra
// 65 longo
// 66 ruku

/*

const edad = 6;
switch(edad) { 
    case 6 : { 
       console.log("wawa"); 
       break;
    } 
    case 18 : { 
        console.log("guambre"); 
        break;
    }
    case 65 : { 
        console.log("longo"); 
        break; 
    }
    case 65 : { 
         console.log("ruko"); 
        break;
    } 
 } 

 */


const edad = 6;

if ( edad < 6 ) 
{
    console.log("wawa");
} 
else
{
    if ( edad < 18 && edad <= 6 )
    {
        console.log("guambra");
    } 
    else
    {
        if ( edad > 18 && edad <= 30 )
        {
            console.log("longo");
        } 
        else
        {
            if ( edad >= 65 )
        {
            console.log("ruku");
        }     
            else
            {
                console.log("no nace"); 
            }
        }
    }
}