function newCapitalizar (colecao, atributo) {
    if(typeof colecao[0] == 'object'){
        var res = colecao.map(function(obj){
        var letraInicial = 
            obj[atributo].charAt(0).toUpperCase();
        var restoTexto = 
            obj[atributo].slice(1);
        obj[atributo] = letraInicial + restoTexto;
        
            return obj;
        });
        console.log(res);
    } else {
        var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
        var modificado = ingredientes.map(item => {
            var letraInicial = item.charAt(0).toUpperCase();
            var restoTexto = item.slice(1);

            return letraInicial + restoTexto
        })
        console.log(modificado);
    }
}

function capitalizar(vetor) {
    for (var i = 0; i < vetor.length; i++) {
        var letraInicial = 
            vetor[i].charAt(0).toUpperCase();
        var restoTexto = 
            vetor[i].slice(1);
        var resultado = 
            letraInicial + restoTexto;
    
        modificado[i] = resultado 
    }
    return modificado
}

function ordenar(vetor) {
    return vetor.sort(function(a, b) {
        return a.localeCompare(b)
    });
}

function caixaAlta(vetor) {
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase();
    }
        return modificado
}

export default {
    capitalizar: capitalizar,
    newCapitalizar: newCapitalizar,
    ordenar: ordenar,
    caixaAlta: caixaAlta
}

// var num = [1, 4, 9]
// var roots = num.map(Math.sqrt)
// console.log(roots);  

// var doubles = num.map(function(num) {
//     return num * 2
// })

// console.log(doubles);