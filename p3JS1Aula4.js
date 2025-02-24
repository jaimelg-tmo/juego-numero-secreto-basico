//  Aula 4: Código final.

//  Variables.
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroDeUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

console.log(numeroSecreto);

while (numeroDeUsuario != numeroSecreto) {
    numeroDeUsuario = parseInt(prompt('Por favor, indica un número de 1 al 10.'));

    console.log(typeof(numeroDeUsuario));
       if (numeroDeUsuario == numeroSecreto) {
    //  La condición se cumple.
            alert(`¡Felicitaciones!, has acertado el número secreto que es ${numeroSecreto}. Lo lograste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
    //  La condición no se cumple.
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            alert('Lo siento, no has acertado. El número secreto es menor.');
        } else {
            alert('Lo siento, no has acertado. El número secreto es mayor.')
        }
        intentos++;
  
        if (intentos > maximosIntentos) {
            alert(`Lo lamento, has alcanzado la cantidad máxima de ${maximosIntentos} intentos.`);
            break;
        }      
    }
}