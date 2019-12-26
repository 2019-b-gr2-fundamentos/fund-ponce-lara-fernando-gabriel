// jueguito : crear array de 5 elementos , cada elemento sera un 1 o un 0 
//ej [0,0,1,1,0]
//exista al menos un elemento 1
// no es valido [0,0,0,0,0]
// en que posicion estra el floron .
// al menos un elemento debe ser 1
const array =[];


for (let indice = 0 ; indice  < 8 ; indice++)
    {
        array[indice] = Math.floor(Math.random() *2) 
    }


console.log(array);
/////
///////////
let array =[];
let y = 7;
let x = 0;


    for (let indice = 0 ; indice  < y ; indice++)
        {
            array[indice] = Math.floor(Math.random() *2) 
        }
        for (let indice = 0 ; indice  < 8 ; indice++)
        {
        if( array[indice] == 1 ) 
            {
                console.log("al menos ahay un floron");
                let x = 1;
            } 
        }
    if(x==0){
        let u =  Math.floor(Math.random() *y);
        console.log(u);
        console.log("no hubo al menos un floron randomicamente");
        console.log("el siguente array es editado para tener un floron");
            array[u] = 1 ;
            }
    console.log(array);


/*
asignar numero de jugadores
asignar randomicamente si tiene un floron o no
verificar si al menos existe un floron
adivinar donde esta el floron

if (x==0) 

{}

*/
///////// Repetir el juego anterior pero con solo un floron



////revisar los trutis y folsis