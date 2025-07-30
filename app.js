// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregaAmigo(){
    let htmlElement = document.getElementById('amigo');
    let texto = htmlElement.value;
    if(!esTextoValido(texto)){
        alert("¡Debe ingresar el nombre de algun amigo!");
        return;
    }

    amigos.push(texto);
    listarAmigos();
    htmlElement.value = "";
}

function listarAmigos(){
    let htmlElement = document.getElementById('listaAmigos');
    let aux = '';
    htmlElement.innerHTML = "";
    amigos.forEach(e => {
        aux += `<li>${e}</li>`;
        htmlElement.innerHTML = aux;
    });
}

function esTextoValido(element){
    return !esElementoVacio(element) && isWord(element);
}

function esElementoVacio(element){
    return element.length == 0;
}

function isWord(element){
    for(let i = 0; i < element.length; i++){
        if(!/^[a-zA-Z]$/.test(element.charAt(i))){
            return false;
        }
    }
    return true;
}
function sortearAmigo(){
    if(esElementoVacio(amigos)){
        alert("¡Debe ingresar el nombre de algun amigo!");
        return;
    }
    let randNum = Math.floor(Math.random()*amigos.length);
    
    document.getElementById('resultado').innerHTML = amigos.at(randNum);
}
