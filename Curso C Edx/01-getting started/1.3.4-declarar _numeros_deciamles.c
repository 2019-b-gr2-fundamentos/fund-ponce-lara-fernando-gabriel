#include <stdio.h>
int main(void){
	

    printf ("su altura es %lf ",1.95);
	
	return 0;

}
////////////////////////////////////////////////// Declara decimales con double

#include <stdio.h>
int main(void){
	double altura=1.9867;

    printf ("su altura es %lf ",altura);
	
	return 0;

}

///////////////////////////////especificar el numero de decimales depuies del punto.


#include <stdio.h>
int main(void){
	double altura=1.9867;

    printf ("su altura es %.2lf ",altura);  //aqui pido 2 decimales y se aproxima
	
	return 0;

}