var lamp = window.document.getElementById("lampada")

function estaQuebrada(){
    return lamp.src.indexOf('/imagens/image3.svg') > -1
}

function Ligar(){
    if(!estaQuebrada()){
    lamp.src = '/imagens/image1.svg'}
}

function Desligar(){
    if(!estaQuebrada()){
    lamp.src = '/imagens/image2.svg'}
}

lamp.addEventListener('click',Quebrar)
function Quebrar(){
    lamp.src = '/imagens/image3.svg'
}