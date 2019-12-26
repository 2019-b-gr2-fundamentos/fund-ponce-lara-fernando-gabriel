#include <stdio.h>
int main()
{
    int var = 3;
    var =4;
    printf("%d",var);
    return 0;

}

///////////////////////////
#include <stdio.h>
int main()
{
    int var1 = 3;
    int var2;
    printf("%d \n",var2);
    var2 = var1;
    printf("%d ",var2);
    return 0;

}
//////////////////////
#include <stdio.h>
int main()
{
    int var1, var2, var3;
    var1 = var2 = var3 = 4;
    printf("%d \n", var1);
    printf("%d \n", var2 );
    printf("%d \n", var3 );

    return 0;

} 
/////////////////
#include <stdio.h>
int main()
{
    int var1, var2, var3;
    var1 = var2 = var3 = 4;
    printf("%d %d %d", var1 , var2 , var3);
    return 0;

}

// %d cuando esta dentro de un "" llama el valor de una variable 
#include <stdio.h>
int main()
{
    int uno=1, dos=2,cuatro=4;
    int resultado = uno + dos + cuatro;
    printf("%d es divisivle para %d y %d", cuatro , dos , uno);
    return 0;

}
