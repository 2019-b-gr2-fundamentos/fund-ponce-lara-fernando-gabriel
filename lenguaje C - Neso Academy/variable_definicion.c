// declaracion con 2 propiedades
// tamanio de la variable 
// nombre de la variable
/*
int var;
int >>>>> cuanto espacio va a ocupar la variable en la memoria
var >>>>> es es un ejemplo del nombre de la variable
;   >>>>>> punto y coma sirve para separar una declaracion de otra
*/
int variable;
/* 
inicializacion de una variable  
*/
int var = 3;
/* 
Nombres de variables

*/
/*
Nombrar variables 
1 . No empezar por un numero 
2.   _  guion bajo sera considerado como una letra
3.  es Caso sensitivo , A es diferente de a .
4. caracteres especiales que no son permitidos al nombrar variables (@,#,%,^,&,*....)
5.  Los espaios en blanco no son permitidos   
    int variable uno
6.  No usar palabras clves , if , else , switch.
7 . No recomendable usar nombre largos para variables.
*/

/////////////////
// %d cuando esta dentro de un "" llama el valor de una variable 
#include <stdio.h>
int main()
{
    int uno=1, dos=2,cuatro=4;
    int resultado = uno + dos + cuatro;
    printf("%d es divisivle para %d y %d", cuatro , dos , uno);
    return 0;

}