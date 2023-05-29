
function encriptar(){
    let texto= document.getElementById("texto-ingresado").value;
    texto=texto.toLowerCase();
    texto = texto.replace(/e/g,'enter');
    texto = texto.replace(/i/g,'imes');
    texto = texto.replace(/a/g,'ai');
    texto = texto.replace(/o/g,'ober');
    texto = texto.replace(/u/g,'ufat');

    let resultado = document.getElementById("texto-resultado");
    resultado.innerHTML = texto;
    

    ocultar();
    mostrar();
    limpiar();
}

function desencriptar(){
    let texto= document.getElementById("texto-ingresado").value;
    texto.toLowerCase();
    texto = texto.replace(/enter/g,'e');
    texto = texto.replace(/imes/g,'i');
    texto = texto.replace(/ai/g,'a');
    texto = texto.replace(/ober/g,'or');
    texto = texto.replace(/ufat/g,'u');

    let resultado = document.getElementById("texto-resultado");
    resultado.innerHTML = texto;
    ocultar();
    mostrar();
    limpiar();
}

function ocultar(){
    let cuadro = document.getElementById("caja-vacia");
    cuadro.style.display="none";
}

function mostrar(){
    let cuadro = document.getElementById("caja-llena");
    cuadro.style.display="flex";
}


function limpiar(){
    let cuadro = document.getElementById("texto-ingresado");
    cuadro.value = "";
}

function copiar() {
    alert("copio")
    let mensaje_copiado = document.getElementById("texto-resultado").textContent;
    navigator.clipboard.writeText(mensaje_copiado.toString());
  }

/*
const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click",copiar = () =>{
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    alert(contenido);
})
*/ 

