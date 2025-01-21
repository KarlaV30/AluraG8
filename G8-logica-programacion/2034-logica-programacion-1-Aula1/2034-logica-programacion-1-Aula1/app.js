let numeroMacimo = prompt('Ingresa enTre cuantos numeros sea el juego');
let numeroSecreto = Math.floor(Math.random()*numeroMacimo)+1;
let numeroUsuario = 0;
let intentos = 1;
let veces = "vez";
let maximoIntentos = 3;
console.log(numeroSecreto);
while(numeroUsuario!=numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un numero por favor:"));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero: ${numeroUsuario} en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }

    else{
        if(numeroUsuario>numeroSecreto){
            alert("El numero debe ser menor")
        }
        else{
            alert('El numero debe ser mayor')
        }
        intentos++;
        veces = "veces"

        if(intentos > maximoIntentos){
            alert(`Alcanzastes el numero maximo de intentos ${maximoIntentos}`)
            break;
        }
    }
}