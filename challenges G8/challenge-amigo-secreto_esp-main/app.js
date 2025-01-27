// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    //capturo el nombre
  let nombre = document.getElementById('amigo').value;
  //vlidar que el campo no este vacio
  if(nombre === ""){
    alert('Debe ingresar un nombre')
  }
  //agregar el nombre al array
  amigos.push(nombre);
  //limpiar la caja
  document.getElementById('amigo').value = "";
  //para verlo en consola
  console.log(amigos);

  //llamo a funcion actualizarAmigos()
  actualizarAmigos();
  return;
}

function actualizarAmigos(){
    //obtener el elemento de la lista
   let lista = document.getElementById('listaAmigos');
   //limpiar la lista
   lista.innerHTML = "";
   //recorrer la lista
   for(let i = 0; i < amigos.length; i++){
    let li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
   }

}

function sortearAmigo(){
   //validar que existan amigos
   if(amigos.length == 0){
    alert("Debes de ingresar nombres")
   }
    //generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let resultado = amigos[indiceAleatorio];
    //para ver n consola
    console.log(resultado);
    //crear el elemento en el dom y mostrarlo en la pag
    let li = document.createElement('li');
    li.textContent = `El ganador es: ${resultado}`;
    //document.getElementById('resultado').appendChild('li');
    document.getElementById('resultado').appendChild(li);
   

}


