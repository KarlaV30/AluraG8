//crea una lista vacia llamada listaGenerica
let listaGenerica = [];

//lista lenguajes programacion
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('GoLang');


function mostrarLista(){
    return lenguajesDeProgramacion;
}
console.log(mostrarLista());

//mostrar lista por separado
function separado(){
    for(let i = 0; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i])
    }
}
separado();

//recorrer la lista alrevez
function alrevez(){
    for(let i = lenguajesDeProgramacion.length -1; i>=0; i--){
        console.log(lenguajesDeProgramacion[i])
    }
}
alrevez();

//funcion para promedio de una lista
function mediaLista(lista){
    let suma = 0;
    for(let i = 0; i< lista.length; i++){
        suma+=lista[i];
    }
    return suma / lista.length;
}
let numeros = [10,20,30,40,50];
let media = mediaLista(numeros);
console.log('Media', media)
