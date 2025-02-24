//  Aula 4: Buenas prácticas en programación.
//  Operador ternario 2.

/*  Información:
    *   Con Template Strings se puede utilizar código JavaScript y ejecutar un Operador Ternario
        para asignar parámetros dentro de un texto. En este caso la palabra 'intento' o ' intentos'.
    *   En el Operador ternario que se usará el signo '?' es if, y el signo ':' es else.
    *   Un contador puede redactarse en forma más optimizada.
            a.  intentos += 1;
            b.  intentos++; (siendo ésta la forma más utilizada actualmente).*/

//  Variables.
let numeroSecreto = 7;
let numeroDeUsuario = 0;
let intentos = 1;
/*  1.  Elimino la declaración de la variable palabraIntentos(); y su llamada en el bucle.
let palabraIntentos = 'intento';*/
let maximosIntentos = 3;

while (numeroDeUsuario != numeroSecreto) {
    numeroDeUsuario = prompt('Por favor, indica un número de 1 al 10.');

    console.log(numeroDeUsuario);
       if (numeroDeUsuario == numeroSecreto) {
    //  La condición se cumple.
/*  2.  Dentro del mensaje de alerta, establezco una condición de comparación para la cantidad de intentos
        y ejecuto un operador ternario if-else ${intentos == 1 ? 'intento' : 'intentos'}.*/
            alert(`¡Felicitaciones!, has acertado el número secreto que es ${numeroSecreto}. Lo lograste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
    //  La condición no se cumple.
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            alert('Lo siento, no has acertado. El número secreto es menor.');
        } else {
            alert('Lo siento, no has acertado. El número secreto es mayor.')
        }
/*  3.  Modifico la redacción del contador por su forma más optimizada actualmente.
        intentos = intentos + 1;*/
        intentos++;
    /*  LLamada de la variable palabraIntentos() eliminada.
        palabraIntentos = 'intentos';*/
        if (intentos > maximosIntentos) {
            alert(`Lo lamento, has alcanzado la cantidad máxima de ${maximosIntentos} intentos.`);
            break;
        }      
    }
}