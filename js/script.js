//alert('Olá mundo!')

console.log('Olá JS');

var result = document.querySelector('#result-imc');
var valor = document.querySelector('#valor-imc');

function calcularImc(){
    console.log('função acionada!');
    //alert('função criada!');

    //selecionando os valores dos inputs
    //parseFloat() converte string para numero
    var altura = document.querySelector('#altura').value;
    var peso = document.querySelector('#peso').value;

    //console.log(altura.lenght);
    //console.log(peso);

    if(altura != '' && peso != ''){

        altura = parseFloat(altura);
        peso = parseFloat(peso);

        var imc = peso / (altura*altura);
        //console.log(imc.toFixed(2));
        valor.innerHTML = imc.toFixed(2);
        result.style.visibility='visible';

        if(imc < 18.5 || imc > 29.9){
            result.style.background='810000';
        }

        else if(imc >= 18.5 && imc < 25){
            result.style.background='#0B4F00'
        }

        else{
            result.style.background='#FF3D00'
        }

    }else{
        alert('Preencha os campos!');
    }
}

 