console.log('Bienvenidos')

name =  'Seruhio';
console.log(`Hola ${name}`);

alert(`Si, es ${name}mi nombre`)


lenguaje = prompt('Cual es tu lenguaje favorito')
console.log(lenguaje);

let valor1 = 5;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`el resultado de ${valor1} + ${valor2} es = ${resultado}`);

let edad = prompt('Cual es tu edad? ')
if(edad>=18){
    console.log(`Tu edad es ${edad}.Eres Mayor de edad :)`)
}
else{
    console.log(`Tu edad es ${edad}. Eres menorde edad :( `)
}

console.log('Estos son lo numeros del 1 al 10')
let contado = 1;
while(contado<=10){
    console.log(contado)
   contado++;
}

let nota = prompt('Ingresa tu nota: ')
if(nota>=7){
    console.log('Aprovado');
}
else{
    console.log('Reprovo')
}

console.log('Numero aleatorio');
numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroIntAleatorio);