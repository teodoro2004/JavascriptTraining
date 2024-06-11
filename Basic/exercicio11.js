let numero = 5;

function tabuadaDoCinco(numero){
    for (let multiplicador = 1; multiplicador < 11; multiplicador += 1){
        console.log(numero * multiplicador);
    }
}
console.log(tabuadaDoCinco(numero));