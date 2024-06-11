let array = [10, 1, 7.5, 5.5];

function calcularMedia(array){
    let soma = 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i];
    }
    console.log('A média é igual a ' + soma / 4 + '.' );
}

calcularMedia(array);