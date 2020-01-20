// cree un programa en c que imprima exactamente lo siguiente
/*
C is fun!
C is fun!
C is fun!

We can do everything with it!
We can do everything with it!
We can do everything with it!
We can do everything with it!
We can do everything with it!
*/


 #include <stdio.h>

int main(void){
	int i=0;
	
    for(i=0;i<=2;i++){
        printf("C is fun!\n");
    }
    printf("\n");
    for(i=0;i<=4;i++){
        printf("We can do everything with it!\n");
    }	
	
	return 0;
	
}