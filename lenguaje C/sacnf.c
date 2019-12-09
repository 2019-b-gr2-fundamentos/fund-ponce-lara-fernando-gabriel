// scanf
// acepta cadenas por usuario atraves del teclado
%d
// para aceptar tipos enteros
%c
//para aceptar caracteres
%s 
// para aceptar un string

&
/// esto pregunta la direccion de la variable  &nombredevariable : &var
#include <stdio.h>
int main()
{
    int var1, var2 ,var3;
    printf("inserta var1");
    scanf("%d", &var1);
    printf("inserta var2");
    scanf("%d", &var2);
    var3 = var1+var2 ;
	printf("%d",var3);
    return 0;

}
