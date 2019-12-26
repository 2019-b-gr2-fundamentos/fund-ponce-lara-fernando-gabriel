// Contamos elementos 
const nombrelongitud = "Adriano hola";
console.log(nombrelongitud.length); //cuenta todo espacios
//expresiones regulares traer
////// trim elimina espacios al principio y final , etc etc
console.log(nombrelongitud.trim());
console.log(nombrelongitud.toUpperCase());
console.log(nombrelongitud.toLowerCase());
///Reemplazar
console.log(nombrelongitud.replace("a","u"));
console.log(nombrelongitud.replace("/n",""));
// encontrar una letra
console.log(nombrelongitud.search("a")); // posicion de la primera que encuentra . la prinera posicion es 0
console.log(nombrelongitud.search("z")); // si no encuentra va a dar -1
console.log(nombrelongitud.slice(1,6)); // devuelve el un substring
console.log(nombrelongitud.indexOf("a"));  // devuelve la posicion 
console.log(nombrelongitud.indexOf("x"));  //si no existe devuelve -1 
//// booleanos
console.log(nombrelongitud.includes("A"));
console.log(nombrelongitud.includes("C"));
console.log(nombrelongitud.endsWith("t"));
console.log(nombrelongitud.endsWith("a"));
console.log(nombrelongitud.endsWith("a"));
// Substrin
console.log(nombrelongitud.substring(0,6));

