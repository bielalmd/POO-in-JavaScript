var ingredientes = ['mel', 'água', 'sal', 'mostarda'];

function capitalizar(ingredientes) {
    let modificado = [];
    for (var i = 0; i < ingredientes.length; i++) {
        var letraInicial = 
            ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = 
            ingredientes[i].slice(1);
        var resultado = 
            letraInicial + restoTexto;
    
        modificado[i] = resultado
    }
    return modificado
}

function ordenar(ingredientes) {
    return ingredientes.sort(function(a, b) {
        return a.localeCompare(b)
    });
}

var resCap = capitalizar(ingredientes);
var resOrder = ordenar(resCap);

console.log(resCap);
console.log(resOrder);



