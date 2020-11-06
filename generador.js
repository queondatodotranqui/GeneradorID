
var button = document.getElementById('button');

button.addEventListener('click', ()=>{

    var cantidad = document.getElementById('cantidad').value;

    var generador = document.querySelector('.generador');
    var resultado = document.createElement('div');
    resultado.classList.add('result');
    resultado.innerHTML = makeid(cantidad);

    generador.appendChild(resultado);
})

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
