// for
//1 declarar una variable
//2 existir una condicion
// incremento o redeuccion de una variable



for (let numerodex = 7 ; numerodex != 0 ; numerodex--)
    {
        console.log('escandalo' , numerodex);
        
    }


    
for (let numerodex = 0 ; numerodex <= 7 ; numerodex++)
    {
        console.log('escandalo' , numerodex);
        
    }    

// arreglos
// un elemento variable
// conjunto del mismo elemento {1,2,3,4,5}
// conjunto diferentes elementos [1 ,abc' , true]

let arreglo = [1,2,3,4,5];
const array = [1,2,3,4,5];
array.push(6);
console.log('array ' , array);
array.pop();
console.log('array ' , array);


// arreglo
// 1 elementos
// 2 indices
// 3 longitud
let arreglo = [11,12,13,14,15];
console.log(arreglo.length); // calcular tamanio de arreglo

//FOR en ARREGLOS 
//1 saber el tamanio del arreglo
//2 tamanio 

// aceder a cada elemento del aareglo por el indice
let arreglo = [11,12,13,14,15];
console.log('elemento5delarreglo',arreglo[4]);
//
// jueguito : crear array de 5 elementos , cada elemento sera un 1 o un 0 
//ej [0,0,1,1,0]
//exista al menos un elemento 1
// no es valido [0,0,0,0,0]
// en que posicion estra el floron 

// RAMDOM INTEGER 
Math.floor(Math.random() *2)  // crear numeros enteros ramdom desde 0 hasta menores que 2 
