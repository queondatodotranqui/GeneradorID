
var button = document.getElementById('button');

button.addEventListener('click', ()=>{

    var inputCant = document.getElementById('cantidad');
    var cantidad = inputCant.value;

    inputCant.classList.remove('is-invalid');
    
    var generador = document.querySelector('.generador');
    var resultado = document.createElement('div');

    if (cantidad == '' || cantidad == 0){
        inputCant.classList.add('is-invalid');
    }else{
        resultado.classList.add('result');
        resultado.innerHTML = makeid(cantidad);

        generador.appendChild(resultado);  
    }
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
