//1 ejemplo
const mes = 4

switch (mes) {
    case 1:
        console.log("es enero");
        break;
    case 2:
        console.log("es febrero.");
        break;
    case 3:
        console.log("es marzo.");
        break;
    case 4:
        console.log("es abril.");
        break;
    case 5:
        console.log("es mayo.");
        break;
    case 6:
        console.log("es junio.");
        break;
    case 7:
        console.log("es julio.");
        break;
    case 8:
        console.log("es agosto.");
        break;
    case 8:
        console.log("es septiembre.");
        break;
    case 10:
        console.log("es octubre.");
        break;
    case 11:
        console.log("es noviembre.");
        break;
    case 12:
        console.log("es diciembre.");
        break;         
    default:
        console.log("no existe este mes , debe ser entre 1 y 12!");
        break;
}

// ejemplo 2 
// en una llamado al llamar a una coperativa se despliega unas opiones automaticas para teclear segun lo que se
const tecla = 4

switch (tecla) {
    case 1:
        console.log("buscar informacion");
        break;
    case 2:
        console.log("realizar una compra");
        break;
    case 3:
        console.log("verificar tu saldo");
        break;
    case 4:
        console.log("consultar la fecha");
        break;
    case 5:
        console.log("para colgar");
        break;
        default:
            console.log("vuelva a marcar");
            break;
    }

    /////ejemplo 3 
////// en una fiesta solpresa se hace escoger un numero y cada numero leva su respectivo regalo 
// para quien compro el boleto de la
const opcion = 2

switch (opcion) {
    case 1:
        console.log("regalar botella de vino");
        break;
    case 2:
        console.log("regalasr un arreglo floral");
        break;
    case 3:
        console.log("obsequiar la canasta navidenia");
        break;
    case 4:
        console.log("un viaje a playa por 3 dias");
        break;

        default:
            console.log("usted no esta invitado ");
            break;
    }