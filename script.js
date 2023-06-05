/*botones*/
const btnEncriptar=document.getElementById("btn-encriptar");
const btnDesencriptar=document.getElementById("btn-desencriptar");
const btnCopiar=document.getElementById("btn-copiar");

/*  TextArea */
const txtArea=document.getElementById("texto");
const txtResultado = document.getElementById("resultado");

/* Elementos */
const muneco = document.getElementById("munheco");
const contenido = document.getElementById("contenido");

function encriptar(){
    let texto= txtArea.value;
    texto=texto.toLowerCase();
    
    texto = texto.replace(/e/g,'enter');
    texto = texto.replace(/i/g,'imes');
    texto = texto.replace(/a/g,'ai');
    texto = texto.replace(/o/g,'ober');
    texto = texto.replace(/u/g,'ufat');

    txtResultado.textContent = texto;
    mostrarBtn();  
}

function desencriptar(){
    let texto= txtArea.value;
    texto=texto.toLowerCase();
    
    texto = texto.replace(/enter/g,'e');
    texto = texto.replace(/imes/g,'i');
    texto = texto.replace(/ai/g,'a');
    texto = texto.replace(/ober/g,'or');
    texto = texto.replace(/ufat/g,'u');

    txtResultado.textContent = texto;
    mostrarBtn(); 
}

function copiar(){
    navigator.clipboard.writeText(txtResultado.textContent);
    limpiar();
    ocultarBtn();
}   

function limpiar(){
    txtResultado.style.textAlign = "center";
    resultado.innerHTML = "Ningún mensaje fue encontrado";
    texto.value="";
}

function mostrarBtn(){
    btnCopiar.style.display="block";
    contenido.style.display="none";
    munheco.style.display="none";
}

function ocultarBtn(){
    btnCopiar.style.display="none";
    contenido.style.display="block";
    munheco.style.display="block";
}
