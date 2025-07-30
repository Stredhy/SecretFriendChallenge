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
    htmlElement.value = "";
}

function esTextoValido(element){
    return !esTextoVacio(element) && isWord(element);
}

function esTextoVacio(element){
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
