/*Almacena lo que el usuario ingresa 
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

*/
//Declarando variables a usar en el proyecto

let inputMensaje = document.getElementById('inputMensaje'); // ingresar mensa
let btnEncriptar = document.getElementById('btnEncriptar'); // Btn #1 
let btnDesencriptar = document.getElementById('btnDesencriptar'); // Btn #2
let mensajeFinal = document.getElementById('mensajeFinal'); // ojoo Revisar 
let btnCopiar = document.getElementById('btnCopiar');
let mensajeCopiar = "";

// Se crea una funcion para encriptar el texto del parametro
function encriptadorTexto(texto){
    texto = texto.replace(/e/g, 'enter'); //cambia las E X 'enter'
    texto = texto.replace(/i/g, 'imes');  //cambia la I X 'imes'
    texto = texto.replace(/a/g, 'ai');    //cambia las A X 'ai'
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    // retornamos nuestro valor encriptado
    return texto;
}

//Función para desencriptar el texto
function desencriptadorTexto(texto){
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');  //cambia la I X 'imes'
    texto = texto.replace(/ai/g, 'a');    //cambia las A X 'ai'
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    //retorna el valor encriptado
    return texto;
}

// Evento para boton de encriptar, se tomo el valor de textArea

btnEncriptar.addEventListener('click', ()=>{
    console.log(encriptadorTexto(inputMensaje.value)); // input = aaa
    mensajeFinal.value = encriptadorTexto(inputMensaje.value); // box2 = messa input box1--> aaa
    console.log(inputMensaje);
});

btnCopiar.addEventListener('click', ()=>{
    mensajeCopiar = inputMensaje.value;  // var mensajeCopiar = mess input box1 --> aaa
    inputMensaje.value = " "; // user input = null/ delete
    console.log(mensajeCopiar); // console =  --> aaa
   

});

btnDesencriptar.addEventListener('click', ()=>{
    //console.log(desencriptadorTexto(inputMensaje.value));

    inputMensaje.value = desencriptadorTexto(mensajeCopiar); // 
});




