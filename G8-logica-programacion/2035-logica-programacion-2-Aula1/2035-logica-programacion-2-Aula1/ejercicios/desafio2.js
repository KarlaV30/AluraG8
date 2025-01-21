

let peso = parseFloat(prompt('Cual es su peso: '));
let altura = parseFloat(prompt('Cual es tu altura: '));

function calculoImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

let imc = calculoImc(peso, altura);
alert(`Tu IMC para un peso de ${peso} y una altura de ${altura} es de ${imc.toFixed(2)}`);
