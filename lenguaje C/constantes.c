// definir numeros  #define nombre valor
// se usa para hacer constante globales
#include <stdio.h>
#define miEdad 22

int main()


{

    printf("mi edad es %d",miEdad);
    return 0;

}


// Definir funciones

#include <stdio.h>
#define suma(x,y) x+y

int main()

{
    int uni =4 ;
    int tae =5;
    int resulta = suma(uni,tae);
    printf("la suma es %d",resulta);
    return 0;

}
////// usando const es para hacer que el valor no cambie de forma local
#include <stdio.h>
int main()

{
    const int uni =4 ;

    printf("la suma es %d",uni);
    return 0;

}
///// lo mismo pero con error
#include <stdio.h>
int main()

{
    const int uni =4 ;
    uni = 9;
    printf("la suma es %d",uni);
    return 0;

}
/// ni con el mismo valor
#include <stdio.h>
int main()
{
    const int uni =4 ;    // aki lo mas importante
    uni = 4;
    printf("la suma es %d",uni);
    return 0;

}