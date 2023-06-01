
function encriptar(){
    let texto= document.getElementById("texto").value;
    texto=texto.toLowerCase();
    texto = texto.replace(/e/g,'enter');
    texto = texto.replace(/i/g,'imes');
    texto = texto.replace(/a/g,'ai');
    texto = texto.replace(/o/g,'ober');
    texto = texto.replace(/u/g,'ufat');

    let resultado = document.getElementById("resultado");
    resultado.style.textAlign = "justify";
    resultado.innerHTML = texto;
    
    mostrarBtn();
}

function desencriptar(){
    let texto= document.getElementById("texto").value;
    texto=texto.toLowerCase();
    texto = texto.replace(/enter/g,'e');
    texto = texto.replace(/imes/g,'i');
    texto = texto.replace(/ai/g,'a');
    texto = texto.replace(/ober/g,'or');
    texto = texto.replace(/ufat/g,'u');


    let resultado = document.getElementById("resultado");
    resultado.style.textAlign = "justify";
    resultado.innerHTML = texto;
    
    mostrarBtn();
}

function copiar(){
    let mensaje = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(mensaje);
    ocultarBtn();
    reset();

}   

function mostrarBtn(){
    let btnCopiar = document.getElementById("btn-copiar");
    let munheco = document.getElementById("munheco");
    let contenido = document.getElementById("contenido");
    btnCopiar.style.display="block";
    contenido.style.display="none";
    munheco.style.display="none";
}

function ocultarBtn(){
    let btnCopiar = document.getElementById("btn-copiar");
    let munheco = document.getElementById("munheco");
    let contenido = document.getElementById("contenido");
    btnCopiar.style.display="none";
    contenido.style.display="block";
    munheco.style.display="block";
}

function reset(){
    let resultado = document.getElementById("resultado");
    resultado.style.textAlign = "center";
    resultado.innerHTML = "Ningún mensaje fue encontrado";
    document.getElementById("texto").value="";

}
